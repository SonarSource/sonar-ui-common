#!/usr/bin/env bash

npm run build
cp package.json README.md types.d.ts build/dist
npx cpy 'components/**/*.css' 'build/dist' --parents
cd build/dist
npm pack