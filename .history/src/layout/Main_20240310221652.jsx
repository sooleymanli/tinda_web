import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";
import styled from "styled-components";
import { Routes } from "react-router-dom";

export default function Main() {
  return (
    <Wrapper>
      <Sidebar />
      <HeaderAndContentWrapper>
        <Header />
        <Content>
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Dashboard bileşeninizin alt bileşenlerini buraya ekleyebilirsiniz */}
          </Routes>            </Content>
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
