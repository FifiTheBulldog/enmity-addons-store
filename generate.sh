#!/bin/zsh
OUT_DIR=$(pwd)
if [[ $OUT_DIR != */ ]]; then
  OUT_DIR+="/"
fi

echo $OUT_DIR

for d in ../enmity-plugins/*/
do
  (cd $d && npm run build && cp "dist/${PWD##*/}."* "${OUT_DIR}plugins/")
done

cd ../enmity-store/
go run cmds/store/main.go -name "FifiTheBulldog's Enmity Plugins" -dir $OUT_DIR
