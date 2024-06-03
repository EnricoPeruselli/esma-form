PRJ_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PRJ_DIR"

DOMAIN=euclidea
OWNER=347233190161
REPO=internal
PKG_NAME="the-big-ja"

PKG_VERSION=$(cat package.json | jq .version | tr -d "\"")

aws codeartifact delete-package-versions --domain $DOMAIN --repository $REPO --format npm --domain-owner $OWNER --package $PKG_NAME --namespace $REPO --versions $PKG_VERSION
