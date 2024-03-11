
import { useRef } from 'react';

import { Ripple } from 'primereact/Ripple';
import { StyleClass } from 'primereact/StyleClass';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg'
export default function HeadlessDemo() {
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  const btnRef4 = useRef(null);

  const navigate = useNavigate()


  return (
    <Wrapper>
<Sidebar>
  <Menu
    menuItemStyles={{
      button: {
        // the active class will be added automatically by react router
        // so we can use it to style the active menu item
        [`&.active`]: {
          backgroundColor: '#13395e',
          color: '#b6c8d9',
        },
      },
    }}
  >
    <MenuItem component={<Link to="/documentation" />}> Documentation</MenuItem>
    <MenuItem component={<Link to="/calendar" />}> Calendar</MenuItem>
    <MenuItem component={<Link to="/e-commerce" />}> E-commerce</MenuItem>
  </Menu>
</Sidebar>
    </Wrapper>
  )
}


const Wrapper = styled.div`
width: 360px;
height: 100%;
`