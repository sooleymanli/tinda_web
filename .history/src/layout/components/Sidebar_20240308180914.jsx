
import React, { useState, useRef } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { Ripple } from 'primereact/Ripple';
import { StyleClass } from 'primereact/StyleClass';

export default function HeadlessDemo() {
    const [visible, setVisible] = useState(true);
    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);
    const btnRef4 = useRef(null);

    return (
            <Sidebar
                visible={visible}
                content={({ closeIconRef, hide }) => (
                  
                )}
            ></Sidebar>
    )
}
        