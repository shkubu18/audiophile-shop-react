import styled, { createGlobalStyle } from "styled-components";

export default function ErrorHint() {
  return (
    <Container>
      <GlobalStyle />
      <ErrorMessage>
        Invalid URL. Please check the URL and try again.
      </ErrorMessage>
    </Container>
  );
}

const GlobalStyle = createGlobalStyle`
  #root {
    display: flex;
    justify-content: space-between;
    height: 100vh;
    flex-direction: column;
  }
`;

const ErrorMessage = styled.p`
  margin-inline: 30px;
  font-size: 30px;
  margin-top: 100px;
  color: #cd2c2c;
`;

const Container = styled.div`
  min-height: 37.7vh;
  display: flex;
  justify-content: center;
`;
