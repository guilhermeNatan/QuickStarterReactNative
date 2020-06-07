#!/bin/bash

react-native init $1 &&  cd $1 && yarn add lodash  react-native-gesture-handler react-native-vector-icons react-navigation react-navigation-drawer react-navigation-stack react-navigation-transitions react-redux redux redux-thunk  remote-redux-devtools yup formik react-native-dropdownalert react-native-elements  @react-native-community/masked-view  react-native-safe-area-context react-native-screens  && cp -rb ../templates/* . &&  

## app/build.gradle
## add this line
## apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

echo "apply from: \"../../node_modules/react-native-vector-icons/fonts.gradle\"" >> android/app/build.gradle && 
npx react-native run-android
