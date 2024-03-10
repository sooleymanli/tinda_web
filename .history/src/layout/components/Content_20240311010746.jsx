import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import useRoutes from "../../routers/useRoutes";

export default function Content() {


const myRoutes = useRoutes()

  return (
    <ContentWrapper>
      <Routes>
        {myRoutes.map((e,i)=><Route defaultRoute path={e.path} element={e.element} key={i} />)}
      </Routes>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ededede9;
  padding: 16px;
`;
