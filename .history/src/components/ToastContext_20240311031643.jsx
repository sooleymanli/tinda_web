import {Toast as PrimeToast , ToastMessage} from 'primereact/toast'
import { createRef } from 'react'

export const toastRefMain = createRef()

export function displayToast (message){
    toastRefMain.current?.show(message)
}

export default function Toast(){
    return <PrimeToast position='bottom-right' ref={toastRefMain} />
}a