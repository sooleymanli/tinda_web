import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Sent from "../../pages/esd/Sent";
import Income from "../../pages/esd/Income";
import History from "../../pages/esd/History";
import DocumentType from "../../pages/admin/esd/DocumentType";
import useRoutes from "../../routers/useRoutes";

export default function Content() {


const myRoutes = useRoutes()

  return (
    <ContentWrapper>
      <Routes>
        
        {myRoutes.map((e)=><Route defaultRoute path={e.path} element={e.element}} {}}/>)}
    
      </Routes>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ededede9;
`;
