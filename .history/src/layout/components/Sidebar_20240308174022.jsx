import React from 'react'
import styled from 'styled-components'
import { PanelMenu } from 'primereact/panelmenu';

export default function Sidebar() {
  const items = [     
    {
        label: 'Files',
        icon: 'pi pi-file',
        items: [
            {
                label: 'Documents',
                icon: 'pi pi-file',
                items: [
                    {
                        label: 'Invoices',
                        icon: 'pi pi-file-pdf',
                        items: [
                            {
                                label: 'Pending',
                                icon: 'pi pi-stop'
                            },
                            {
                                label: 'Paid',
                                icon: 'pi pi-check-circle'
                            }
                        ]
                    },
                    {
                        label: 'Clients',
                        icon: 'pi pi-users'
                    }
                ]
            },
            {
                label: 'Images',
                icon: 'pi pi-image',
                items: [
                    {
                        label: 'Logos',
                        icon: 'pi pi-image'
                    }
                ]
            }
        ]

];
  return (
    <SidebarWrapper>

<div className="card flex justify-content-center">
            <PanelMenu model={items} className="w-full md:w-20rem" />
        </div>

      
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.div`
  width: 300px;
  height:100%;
padding: 16px;

`