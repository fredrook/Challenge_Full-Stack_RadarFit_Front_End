import styled from "styled-components";

export const ContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 93%;
  height: 70px;
  margin-top: 2%;
  margin-bottom: 1%;
  background-color: var(--color-grey);
  border-bottom: 1px solid var(--color-grey2);
`;
export const TagH2 = styled.h2`
  display: flex;
  color: var(--color-grey2);
`;

export const Button = styled.button`
  display: flex;
  background: transparent;
  border: none;

  .bi {
    width: 30px;
    height: 30px;
    color: var(--color-grey2);
    :hover {
      color: var(--color-green-text);
    }
  }
`;
