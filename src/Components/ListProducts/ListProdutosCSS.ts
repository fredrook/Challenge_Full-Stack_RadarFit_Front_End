import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 96%;
  height: 100%;
  max-height: 100vh;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContainerUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 800%;
  max-width: 48%;
  height: 90%;
  min-width: 318px;
  gap: 2.5%;
  max-height: 750px;
  overflow-y: scroll;

  .titulo {
    margin-top: 1%;
    font-size: 18px;
    font-weight: 500;
    color: var(--color-grey1);
  }

  @media screen and (max-width: 768px) {
    max-width: 94%;
    position: relative;
    top: 0%;
    right: 3%;
  }

  @media screen and (max-width: 320px) {
    max-width: 94%;
    position: relative;
    top: 0%;
    right: 7%;
  }

  .tagLi {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    height: 110px;
    background-color: var(--color-white);
    
    h2 {
      position: relative;
      top: 7%;
      left: 1%;
      font-size: 20px;
      font-weight: 500;
      color: var(--color-dark-text);
      margin-left: 1%;
    }

    p {
      position: relative;
      top: 7%;
      left: 1%;
      font-size: 18px;
      font-weight: 500;
      color: var(--color-green-text);
      margin-left: 1%;
    }

    span {
      position: relative;
      bottom: 2%;
      left: 1%;
      font-size: 18px;
      font-weight: 500;
      color: var(--color-grey-text);
      margin-left: 1%;
    }

    .btnModify {
      position: relative;
      bottom: 60%;
      left: 80%;
      border: none;
      background-color: transparent;

      .bi {
        width: 45px;
        height: 45px;
        color: var(--color-grey1);
      }
    }
    :hover {
      background-color: var(--color-grey-fundo2);
      .bi {
        color: var(--color-green-text);
      }
    }
  }
`;
