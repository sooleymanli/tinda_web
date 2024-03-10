import React, {createContext,useContext,useRef} from "react"

const ToastContext = createContext(undefined);

export const useToast = ()=>{
    const context = useContext(ToastContext);
    if (context ===undefined){
        throw new Error ("useToast must be used within a ToasProvider")
    }

    return context
}


export const ToastProvider = ({children})=>{

    const toastRef = useRef(null)
    const showToast = (severity:"success" | "info" | "warn" | "error")
}