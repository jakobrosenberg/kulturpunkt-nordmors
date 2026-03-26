FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm

RUN apt-get update \
    && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y --no-install-recommends \
        build-essential \
        postgresql-client \
        python3 \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
