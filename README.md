# Quick starter para projeto react-native

Templante para iniciar um projeto react-native 

## Como utilizar

1. execute o comando : initproject.sh \<nomeprojeto> 
1 . Configure os arquivos adroid/app/src/main/java/com/<app>/MainActivit.java 
com no exemplo a seguir 


+ import com.facebook.react.ReactActivityDelegate;
+ import com.facebook.react.ReactRootView;
+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;


+    @Override
+    protected ReactActivityDelegate createReactActivityDelegate() {
+      return new ReactActivityDelegate(this, getMainComponentName()) {
+        @Override
+        protected ReactRootView createRootView() {
+          return new RNGestureHandlerEnabledRootView(MainActivity.this);
+        }
+      };
+     }

1. Configure o arquivo app/build.gradle 

dependences { 

  [...]
+      //OkHttp
+      implementation ("com.squareup.okhttp3:okhttp:3.12.12"){
+          force = true //API 19 support
+      }
+      implementation 'com.squareup.okhttp3:logging-interceptor:3.12.12'

}






