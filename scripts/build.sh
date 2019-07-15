#!/usr/bin/env bash

npm run clean
tsc
cp package.json README.md types.d.ts build/dist
npx cpy 'components/**/*.css' 'build/dist' --parents
