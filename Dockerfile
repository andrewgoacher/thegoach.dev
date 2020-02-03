FROM ubuntu AS build_base
RUN apt update \
    && apt install -y git \
    && apt -y install curl \
    && curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y \
    && curl -sL https://deb.nodesource.com/setup_12.x | bash - \
    && apt-get install -yq nodejs build-essential \
    && npm install -g npm \
    && npm install -g gulp-cli

ENV PATH=${PATH}:/root/.cargo/bin
RUN rustup override set nightly-2020-01-25

FROM build_base AS rust_build
WORKDIR /src
COPY src/ src/
COPY Cargo.toml .
WORKDIR /src/src
RUN cargo build --release

FROM build_base AS npm_build
WORKDIR /src
COPY Assets/ Assets/
COPY static/ static/
WORKDIR /src/Assets
RUN npm install -ci && gulp

FROM ubuntu AS release
EXPOSE 8000
WORKDIR /app

ENV ROCKET_ENV=${THEGOACH_STAGE}

COPY --from=npm_build /src/static/ ./static
COPY --from=rust_build /src/target/release/thegoach_dev .
COPY templates/ templates/
COPY Rocket.toml ./
ENTRYPOINT ["./thegoach_dev"]

