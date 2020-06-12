#!/bin/bash


# @author guilherme.natan

#Script usado para criar componentes  que podem ser reutilizados em mais de uma screen
#respeitando a estrutura de diretorios do projeto



screenname="ReuseComponents"
echo -n "Entre com o nome do componente <ex Header>: "
read name

mkdir  -p src/screens/$screenname/$name
sed -e "s/TemplateScreen/${name}/g" -e 's/Component/PureComponent/g' src/TemplateModule/TemplateScreen.js >  src/screens/$screenname/$name/$name.js
sed "s/TemplateScreen/${name}/g" src/TemplateModule/index.js >  src/screens/$screenname/$name/index.js

cp src/TemplateModule/style.js   src/screens/$screenname/$name





