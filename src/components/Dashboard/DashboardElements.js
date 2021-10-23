import styled from "styled-components";

export const DashboardWrapper = styled.div`
  padding: 12px;
`;

export const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr 2fr;
  grid-template-areas: "p b s";
  grid-gap: 20px;
  & #profile {
    grid-area: p;
  }

  & #bio {
    grid-area: b;
  }

  & #session {
    grid-area: s;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: minmax(max-content, 1fr) max-content minmax(
        max-content,
        1fr
      );
    grid-template-areas:
      "p"
      "b"
      "s";
    justify-items: center;
    grid-row-gap: 60px;
    position: relative;
  }
`;
