package com.tns.gen.android.hardware;

public class Camera_PreviewCallback implements android.hardware.Camera.PreviewCallback {
	public Camera_PreviewCallback() {
		com.tns.Runtime.initInstance(this);
	}

	public void onPreviewFrame(byte[] param_0, android.hardware.Camera param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		com.tns.Runtime.callJSMethod(this, "onPreviewFrame", void.class, args);
	}

}
