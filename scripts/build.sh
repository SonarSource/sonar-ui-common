#!/usr/bin/env bash

yarn clean
yarn tsc
cp package.json README.md build/dist
yarn cpy 'components/**/*.css' 'build/dist' --parents
