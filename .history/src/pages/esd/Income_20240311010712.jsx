import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function Income() {
  return (
    <div>Income
<Outlet />

    </div>
  )
}


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  
`