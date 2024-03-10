import React from "react";
import { Toast } from "primereact/toast";

const GlobalToast = React.forwardRef((props, ref) => {
    return <Toast ref={ref} {...props} />;
  });

export default GlobalToast;
