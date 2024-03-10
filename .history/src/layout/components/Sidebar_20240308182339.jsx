
import {  useRef } from 'react';
import { Sidebar } from 'primereact/sidebar';

import { Ripple } from 'primereact/Ripple';
import { StyleClass } from 'primereact/StyleClass';

export default function HeadlessDemo() {
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  const btnRef4 = useRef(null);

  return (
      <Sidebar
        visible={true}
        content={({ closeIconRef, hide }) => (
        
        )}
      ></Sidebar>
  )
}
