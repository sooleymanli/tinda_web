import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Sent from "../../pages/esd/Sent";
import Income from "../../pages/esd/Income";
import History from "../../pages/esd/History";

export default function Content() {
  return (
    <ContentWrapper>
      <Routes>
        <Route path="income" element={<Income />} />
        <Route path="sent" element={<Sent />} />
        <Route path="history" element={<History />} />
      </Routes>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ededede9;
`;


