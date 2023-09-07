#!/bin/zsh
OUT_DIR=$(pwd)
if [[ $OUT_DIR != */ ]]; then
  OUT_DIR+="/"
fi

cd ../enmity-plugins/
pnpm run build
cp dist/*.js* "${OUT_DIR}plugins/"

cd ../enmity-store/
go run cmds/store/main.go -name "Colin's Enmity Plugins" -dir $OUT_DIR
