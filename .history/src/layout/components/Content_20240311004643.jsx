import styled from "styled-components";
import PropTypes from "prop-types";
import { Route, Routes, useRoutes } from "react-router-dom";
import Send from "../../pages/esd/Send";
import Income from "../../pages/esd/Income";

export default function Content() {
  return (
    <ContentWrapper>
      <Routes>
        <Route path="income" element={<Income />} />
        <Route path="send" element={<Send />} />
      </Routes>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ededede9;
`;

Content.propTypes = {
  children: PropTypes.node.isRequired,
};
