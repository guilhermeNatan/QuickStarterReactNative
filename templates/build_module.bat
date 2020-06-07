@echo off
if [%1] == [] GOTO usage
set name=%1
mkdir  src\screens\%name%\components
sed 's/HomeScreen/%name%Screen/g' src\screens\Teste\HomeScreen.js >  src\screens\%name%\%name%Screen.js
sed 's/HomeScreen/%name%Screen/g' src\screens\Teste\index.js >  src\screens\%name%\index.js

cp src\screens\Teste\style.js   src\screens\%name%
:usage
echo Uso: build_modulebat  ^<name_module^>
:end





