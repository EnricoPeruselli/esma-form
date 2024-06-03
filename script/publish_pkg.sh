PRJ_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/" && pwd)"
cd "$PRJ_DIR"

rm -rf "dist/"
rm -rf "node_modules/"
rm -f yarn.lock

yarn install

source "script/yarn_repo.sh"
npm run build-vite
npm publish
