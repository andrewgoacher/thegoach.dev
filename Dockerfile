FROM rust AS build_base
ENV PATH=${PATH}:/root/.cargo/bin
RUN rustup override set nightly-2020-01-25