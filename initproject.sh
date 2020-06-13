#!/bin/bash

react-native init $1 &&  cd $1 && yarn add lodash  react-native-gesture-handler react-native-vector-icons @react-navigation/drawer  @react-navigation/native   react-navigation-drawer react-navigation-transitions react-redux redux redux-thunk  yup formik react-native-dropdownalert react-native-paper  @react-native-community/masked-view  react-native-safe-area-context react-native-screens  firebase react-native-reanimated  @react-navigation/native @react-navigation/material-bottom-tabs  @react-navigation/stack i18n-js && cp -rb ../templates/* . &&  

## app/build.gradle
## add this line
## apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

echo "apply from: \"../../node_modules/react-native-vector-icons/fonts.gradle\"" >> android/app/build.gradle && 
npx react-native run-android
