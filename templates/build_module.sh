#!/bin/bash

# @author guilherme.natan
#Script usado para criar telas respeitando a estrutura de diretorios do projeto 


echo -n "Entre com o nome do modulo <ex Settings>: "
read NAME
mkdir  -p src/screens/$NAME/components
sed "s/TemplateScreen/${NAME}Screen/g" src/TemplateModule/TemplateScreen.js >  src/screens/$NAME/${NAME}Screen.js
sed "s/TemplateScreen/${NAME}Screen/g" src/TemplateModule/index.js >  src/screens/$NAME/index.js
cp src/TemplateModule/style.js   src/screens/$NAME





