import React from "react";
import { Toast } from "primereact/toast";

cconst GlobalToast = React.forwardRef((props, ref) => {
    return <Toast ref={ref} {...props} />;
  });

export default GlobalToast;
