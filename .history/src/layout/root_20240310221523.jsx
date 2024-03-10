import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";
import styled from "styled-components";

export default function Main() {
  return (
    <Wrapper>
      <Sidebar />
      <HeaderAndContentWrapper>
        <Header />
        <Content>
            dashboar - ın altındakı nested routeler  burada olsun istiyorum. nasıl yapa bilirim?
                
            `
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
