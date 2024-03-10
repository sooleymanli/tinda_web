import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Income from "../pages/esd/Income";
import Send from "../pages/esd/Send";

export default function Main({children}) {
  return (
    <Wrapper>
      <Sidebar />
      <HeaderAndContentWrapper>
        <Header />
        <Content>
           
          
           </Content>
      </HeaderAndContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const HeaderAndContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
