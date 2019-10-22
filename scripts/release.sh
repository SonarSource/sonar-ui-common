#!/usr/bin/env bash

if [ $# -eq 0 ]
  then
    echo "Missing argument for the new version to release"
    exit 1
fi

git stash
sed -i "s/## Unreleased/## Unreleased\n\r## $1/g" CHANGELOG.md
sed -i "s/\"version\": \".*\",/\"version\": \"$1\",/g" package.json
yarn
yarn package
git add CHANGELOG.md package.json
git commit -m "Prepare version $1"
git tag $1
npmrc npm
yarn publish ./build/dist/sonar-ui-common-v$1.tgz
npmrc default
git push
git push origin $1
git stash pop
