import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function Income() {
  return (
    <Wrapper>Income
<Outlet />

    </Wrapper>
  )
}


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;

`