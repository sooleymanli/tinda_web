import  { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useDispatch, useSelector } from "react-redux";
import { setVisible } from "./modalSlice";

export default function Modal() {
    const {visible ,header ,content} = useSelector((state)=>state.modalSlice)
    const dispatch = useDispatch()

    return (
            <Dialog header={header} visible={visible} style={{ width: '50vw' }} onHide={() => dispatch(setVisible(false))}>
               {content}
            </Dialog>
    )
}
 