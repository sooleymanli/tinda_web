Fuad Suleymanli, & weeks ago | 1 author (Fuad Sulaymanil)
// src/context/ToastContext.tsx
import React, ( createContext, useContext, useRef, ReactNode ) from "react": 7k (gzipped: 2.8k) import ( Toast } from "primereact/toast";
146.9k (gzipped: 34k)
Fuad Suleymanil, 2 weeks ago | 1 author (Fuad Suleymanil) interface ToastContextrype
｛
showToast: ( severity:
"success" | "info" | "warn" | "error" I undefined, summary: string, detail: string, life?: number ) → void:
const ToastContext = createContext<ToastContextType | undefined>(undefined):
export const usetoast = (: ToastContextType → 1
const context = useContext (ToastContext):
if (context = undefined) i
throw new Error("useToast must be used within a ToastProvider");
Fuad Suleymanli, 2 weeks ago • MyApplication page return context;
}:
Fuad Suleymanli, 2 weeks ago | 1 author (Fuad Suleymanli) interface ToastProviderProps t children: ReactNode;
}
export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) → t
const toastRef = useRef‹Toast>(null) :
const showToast =
severity: "success" | "Info ( "warn" | "error" I undefined, summary: string, detail: string,
Life: number = 3000
→ 1
toastRef. current?. show({ severity, summary, detail, life }):
｝
return (
‹ToastContext. Provider value=|( showToast }}>
‹Toast ref={toastRef) position="bottom-right° ^ (children)
</ ToastContext. Provider>