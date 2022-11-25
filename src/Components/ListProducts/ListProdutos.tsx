import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import DetailsCard from "../ModalDetails/DetailsCard";
import { ContainerUl, DivContainer } from "./ListProdutosCSS";

const ListProdutos = ({ values }: any) => {
  const { products /* DeleteTechnology */ } = useContext(AuthContext);

  return (
    <DivContainer>
      <ContainerUl>
       <h2 className="titulo">Lista de produtos</h2>
        {products.map((product, index) => (
          <li className="tagLi" key={index!}>
            <h2>{product!.produto!}</h2>
            <p>{product!.descricao!}</p>
            <span>R${product!.valor!}</span>
            <button
              className="btnModify"
              type="button"
              /* onClick={() => } */
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-tag-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
            </button>
          </li>
        ))}
      </ContainerUl>
      <DetailsCard />
    </DivContainer>
  );
};

export default ListProdutos;
