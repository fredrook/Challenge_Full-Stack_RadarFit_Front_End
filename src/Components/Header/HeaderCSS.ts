import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  width: 100vw;

  .navbar {
    display: flex;
    width: 100%;
    height: 80px;
    background-color: var(--color-grey1);
    padding: 0px;
  }

  .container-fluid {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
  }

  .d-flex {
    min-width: 320px;
    position: relative;
    top: 0px;
    left: 1%;
    background-color: var(--color-grey2);
    width: 50%;
    height: 100%;
  }

  .form-control {
    background-color: transparent;
    border: none;
  }

  .btn {
    background-color: transparent;
    border: none;
    color: white;
  }
`;
