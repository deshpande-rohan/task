import styled from "styled-components";

export const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 60vh;

  @media only screen and (max-width: 480px) {
    width: 90%;
  }
`;

export const TableContainer = styled.div`
  display: block;
  padding: 50px 0;

  & table {
    width: 100%;
    height: 100%;
  }
`;
