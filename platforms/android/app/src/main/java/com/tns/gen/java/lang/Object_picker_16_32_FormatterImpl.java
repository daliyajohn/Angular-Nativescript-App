package com.tns.gen.java.lang;

public class Object_picker_16_32_FormatterImpl extends java.lang.Object implements com.tns.NativeScriptHashCodeProvider, android.widget.NumberPicker.Formatter {
	public Object_picker_16_32_FormatterImpl(){
		super();
		com.tns.Runtime.initInstance(this);
	}

	public java.lang.String format(int param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		return (java.lang.String)com.tns.Runtime.callJSMethod(this, "format", java.lang.String.class, args);
	}

	public boolean equals__super(java.lang.Object other) {
		return super.equals(other);
	}

	public int hashCode__super() {
		return super.hashCode();
	}

}
