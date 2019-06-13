#!/usr/bin/env bash
# Requires the environment variables:
# - SONAR_HOST_URL: URL of SonarQube server
# - SONAR_TOKEN: access token to send analysis reports to $SONAR_HOST_URL
# - GITHUB_TOKEN: access token to send analysis of pull requests to GibHub
set -euo pipefail

#
# Configure Maven settings and install some script utilities
#
configureTravis() {
  mkdir -p ~/.local
  curl -sSL https://github.com/SonarSource/travis-utils/tarball/v57 | tar zx --strip-components 1 -C ~/.local
  source ~/.local/bin/install
}
configureTravis

# When a pull request is open on the branch, then the job related
# to the branch does not need to be executed and should be canceled.
# It does not book slaves for nothing.
# @TravisCI please provide the feature natively, like at AppVeyor or CircleCI ;-)
cancel_branch_build_with_pr || if [[ $? -eq 1 ]]; then exit 0; fi

# Install sonar-scanner
pushd ~ > /dev/null
if [ ! -d "sonar-scanner-3.0.3.778-linux/bin" ]; then
  wget -O sonar-scanner.zip https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-3.0.3.778-linux.zip
  unzip sonar-scanner.zip
  rm sonar-scanner.zip
fi
export PATH=$PATH:~/sonar-scanner-3.0.3.778-linux/bin
popd > /dev/null

# Install node_modules
npm ci

case "$TARGET" in

BUILD)
  npm run build
  ;;

WEB_TESTS)
  npm run validate-ci
  ;;

ANALYZE)
  if [ "${TRAVIS_BRANCH}" == "master" ] && [ "$TRAVIS_PULL_REQUEST" == "false" ]; then
    echo '======= Analyze master'
  
    # Fetch all commit history so that SonarQube has exact blame information
    # for issue auto-assignment
    # This command can fail with "fatal: --unshallow on a complete repository does not make sense" 
    # if there are not enough commits in the Git repository (even if Travis executed git clone --depth 50).
    # For this reason errors are ignored with "|| true"
    git fetch --unshallow || true

    sonar-scanner \
        -Dsonar.host.url=$SONAR_HOST_URL \
        -Dsonar.login=$SONAR_TOKEN \
        -Dsonar.analysis.buildNumber=$TRAVIS_BUILD_NUMBER \
        -Dsonar.analysis.pipeline=$TRAVIS_BUILD_NUMBER \
        -Dsonar.analysis.sha1=$TRAVIS_COMMIT  \
        -Dsonar.analysis.repository=$TRAVIS_REPO_SLUG \

  elif [ "$TRAVIS_PULL_REQUEST" != "false" ] && [ -n "${GITHUB_TOKEN:-}" ]; then
    echo '======= Analyze pull request'
    
    git fetch --unshallow || true

    sonar-scanner \
      -Dsonar.host.url=$SONAR_HOST_URL \
      -Dsonar.login=$SONAR_TOKEN \
      -Dsonar.pullrequest.branch=$TRAVIS_PULL_REQUEST_BRANCH \
      -Dsonar.pullrequest.base=$TRAVIS_BRANCH \
      -Dsonar.analysis.buildNumber=$TRAVIS_BUILD_NUMBER \
      -Dsonar.analysis.pipeline=$TRAVIS_BUILD_NUMBER \
      -Dsonar.analysis.sha1=$TRAVIS_PULL_REQUEST_SHA \
      -Dsonar.analysis.repository=$TRAVIS_REPO_SLUG \
      -Dsonar.analysis.prNumber=$TRAVIS_PULL_REQUEST \
      -Dsonar.pullrequest.key=$TRAVIS_PULL_REQUEST

  else
    echo '======= No analysis'
  fi
  ;;
*)
  echo "Unexpected TARGET value: $TARGET"
  exit 1
  ;;

esac

