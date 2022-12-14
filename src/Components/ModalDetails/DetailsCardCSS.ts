import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  width: 50%;
  height: 90%;
  max-height: 100vh;
  margin: 0 auto;
  margin-bottom: 72px;

  @media screen and (min-width: 2560px) {
    margin-bottom: 68px;
  }

  @media screen and (max-width: 1440px) {
    margin-bottom: 62px;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 65px;
  }


  @media screen and (max-width: 768px) {
    display: none;
  }

  h2 {
    font-size: 18px;
    font-weight: 500;
    color: var(--color-grey1);
  }
`;

export const TagDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  max-width: 100%;
  min-width: 318px;
  height: 90%;
  max-height: 90%;
  background-color: var(--color-grey-fundo2);

  .tagH2 {
    font-size: 22px;
    font-weight: 500;
    color: var(--color-green-text);
    margin-left: 2%;
  }

  .tagSpan {
    font-size: 20px;
    font-weight: 500;
    color: var(--color-dark-text);
    margin-left: 2%;
  }

  .tagSpanValor {
    font-size: 18px;
    font-weight: 500;
    color: var(--color-grey-text);
    margin-left: 2%;
  }

  .tagP1 {
    font-size: 20px;
    font-weight: 400;
    color: var(--color-dark-text);
    margin-left: 2%;
  }

  .tagP2 {
    font-size: 20px;
    font-weight: 400;
    color: var(--color-dark-text);
    margin-left: 2%;
  }
`;

export const TagDivFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--color-grey1);

  .tagButtonEdit {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    top: 30%;
    left: 2%;
    width: 170px;
    height: 50px;
    font-size: 22px;
    font-weight: 400;
    background-color: var(--color-grey1);
    color: var(--color-white);
    :hover {
      background-color: var(--color-green-text);
    }

    .bi-pencil-fill {
      width: 18px;
      height: 18px;
      color: var(--color-white);
    }
  }

  .tagButtonClose {
    background-color: transparent;
    border: none;
    position: relative;
    top: 30%;
    right: 2%;

    .bi {
      width: 30px;
      height: 30px;
      color: var(--color-grey1);

      :hover {
        color: var(--color-green-text);
      }
    }
  }
`;
