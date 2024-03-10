import React from "react";
import { Toast } from "primereact/toast";

const GlobalToast = React.forwardRef((props, ref) => {
  const toastRef = React.useRef();
  React.useImperativeHandle(ref, () => ({
    show: (options) => {
      toastRef.current.show(options);
    },
  }));

  
  return <Toast ref={toastRef} {...props} />;
});

export default GlobalToast;
