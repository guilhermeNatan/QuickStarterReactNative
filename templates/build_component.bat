@echo off
if [%1] == [] GOTO usage
set screenname=%1
set name=%2
mkdir  src\screens\%screenname%\components\%name%
sed -e 's/HomeScreen/%name%/g' -e 's/Component/PureComponent/g' src\screens\Teste\HomeScreen.js >  src\screens\%screenname%\components\%name%\%name%.js
sed 's/HomeScreen/%name%/g' src\screens\Teste\index.js >  src\screens\%screenname%\components\%name%\index.js

cp src\screens\Teste\style.js   src\screens\%screenname%\components\%name%
:usage
echo Uso: build_component.bat  ^<name_module^>
:end





