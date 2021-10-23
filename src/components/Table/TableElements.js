import styled from "styled-components";

export const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 60vh;
`;

export const TableContainer = styled.div`
  widht: 100%;
  height: 100%;
  padding: 50px 0;

  & table {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 480px) {
    padding: 50px 20px;
  }
`;
