import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Sent from "../../pages/esd/Sent";
import Income from "../../pages/esd/Income";
import History from "../../pages/esd/History";
import DocumentType from "../../pages/admin/esd/DocumentType";
import useRoutes from "../../routers/useRoutes";

export default function Content() {


const muRoutes = useRoutes()

  return (
    <ContentWrapper>
      <Routes>
        <Route defaultRoute path="income" element={<Income />} />
    
      </Routes>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ededede9;
`;
