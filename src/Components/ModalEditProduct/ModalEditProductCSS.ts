import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(45, 63, 70, 0.8);
`;

export const Form = styled.nav`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 800px;
  height: 400px;

  background: var(--color-grey-fundo);

  .H2 {
    display: flecx;
    color: var(--color-grey1);
    font-size: 26px;
    font-weight: 500;
    margin-top: 2%;
    margin-left: 2.5%;
    margin-bottom: 4.5%;
  }

  .Div1 {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 95%;
    height: 90px;
    margin: 0 auto;

    .SubDiv1 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-bottom: 1px solid var(--color-grey1);

      width: 48%;
      height: 100%;

      :hover {
        border-bottom: 1px solid var(--color-green-text);
      }

      .tagLabel {
        font-size: 18px;
        font-weight: 400;
        color: var(--color-green-text);
      }

      .Inpt1 {
        display: flex;
        height: 80px;
        background-color: transparent;
        border: none;
        margin-top: 5%;
        margin-left: 2%;
      }
    }

    .SecondSubDiv1 {
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      background-color: transparent;
      border-bottom: 1px solid var(--color-grey2);

      width: 50%;
      height: 100%;

      :hover {
        border-bottom: 1px solid var(--color-green-text);
      }

      .Inpt2 {
        display: flex;
        align-items: center;
        background-color: transparent;
        border: none;
        margin-left: 2%;
        margin-bottom: 2%;
      }
    }
  }

  .Div2 {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    width: 95%;
    height: 90px;
    margin-top: 4%;
    margin-left: 2.5%;

    .tagh2Div2 {
      font-size: 16px;
      font-weight: 600;
      color: var(--color-grey-text);
      margin-top: 1%;
    }

    .Inpt3 {
      width: 100%;
      display: flex;
      height: 80px;
      align-items: center;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid var(--color-grey1);
      font-size: 15px;
      font-weight: 400;
      margin-top: 2.5%;

      :hover {
        border-bottom: 1px solid var(--color-green-text);
      }
    }
  }

  .Div3 {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    width: 100%;
    height: 50px;
    padding: 2.5%;
    margin-top: 3.5%;
    border: none;
    background-color: transparent;

    .BtnAdd {
      margin-right: 2%;
      width: 100px;
      height: 40px;
      border: none;
      background-color: var(--color-grey1);
      color: var(--color-white);
      font-size: 18px;

      :hover {
        background-color: var(--color-green-text);
      }
    }
    .BtnClose {
      width: 100px;
      height: 40px;
      border: none;
      background-color: var(--color-grey1);
      color: var(--color-white);
      font-size: 18px;

      :hover {
        background-color: var(--color-green-text);
      }
    }
  }
`;
