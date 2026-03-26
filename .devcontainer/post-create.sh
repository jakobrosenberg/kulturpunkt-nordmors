#!/usr/bin/env bash

set -euo pipefail

cd /workspaces/kulturpunkt-nordmors

if [ ! -f package.json ]; then
  echo "No package.json found yet. Skipping dependency installation."
  exit 0
fi

if [ -f pnpm-lock.yaml ]; then
  echo "Installing dependencies with pnpm..."
  corepack pnpm install
elif [ -f package-lock.json ]; then
  echo "Installing dependencies with npm..."
  npm install
elif [ -f yarn.lock ]; then
  echo "Installing dependencies with yarn..."
  corepack yarn install
else
  echo "No lockfile found. Installing dependencies with npm..."
  npm install
fi

echo "Dependency installation complete."
echo "Start the Payload app manually after the project files are in place."
