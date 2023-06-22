package com.arviewerdemo;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ARViewerModule extends ReactContextBaseJavaModule {
    private Context context;

    ARViewerModule(@NonNull ReactApplicationContext context) {
        super(context);
        this.context = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "ARViewerModule";
    }

    @ReactMethod
    public void displayInAR(String url) {
        Intent sceneViewerIntent = new Intent(Intent.ACTION_VIEW);
        Uri intentUri = Uri.parse("https://arvr.google.com/scene-viewer/1.1")
                .buildUpon().appendQueryParameter("file", url)
                .appendQueryParameter("mode", "ar_only")
                .build();
        sceneViewerIntent.setData(intentUri);
        sceneViewerIntent.setPackage("com.google.ar.core");
        sceneViewerIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(sceneViewerIntent);
    }
}
