FROM ubuntu AS build_base
RUN apt update \
    && apt -y install curl build-essential git\
    && curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y

ENV PATH=${PATH}:/root/.cargo/bin
RUN rustup override set nightly-2020-01-25

FROM build_base AS rust_build
WORKDIR /src
COPY src/ src/
COPY Cargo.toml .
WORKDIR /src/src
RUN cargo build --release

FROM rust_build AS release
EXPOSE 8000
WORKDIR /app

COPY --from=rust_build /src/target/release/thegoach_dev .
COPY data/ data/
COPY public/ public/
COPY templates/ templates/
COPY Rocket.toml ./
ENTRYPOINT ["./thegoach_dev"]
