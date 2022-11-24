/* import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext"; */
import { DivContainer, TagDiv, TagDivFooter } from "./DetailsCardCSS";

const DetailsCard = () => {
  /* const { DeleteProductVeicle } = useContext(AuthContext) */

  return (
    <DivContainer>
      <h2>Detalhes</h2>
      <TagDiv>
        <h2 className="tagH2">Alexa Echo 3</h2>
        <span className="tagSpan">Valor</span>
        <span className="tagSpanValor">R$ 300,00</span>
        <p className="tagP1">
          Controle por voz ou através do aplicativo Alexa, complete qualquer
          ambiente com a Alexa. Nosso smart speaker de maior sucesso tem um
          design elegante e compacto que se encaixa perfeitamente em espaços
          pequenos. O novo design de áudio direcional (1 speaker de 1,6")
          garante mais graves e um som completo. Ele oferece vocais nítidos e
          graves equilibrados para você aproveitar em qualquer lugar de sua
          casa.
        </p>
        <p className="tagP2">
          Veja a hora, os alarmes e timers no display de LED. TOque na parte
          superior para colocar o alarme em modo soneca.
        </p>
        <TagDivFooter>
          <button className="tagButtonEdit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pencil-fill"
              viewBox="0 0 16 16"
            >
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
            </svg>
            Editar
          </button>
          <button className="tagButtonClose" /* onClick={() => DeleteProductVeicle(id)} */>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
            </svg>
          </button>
        </TagDivFooter>
      </TagDiv>
    </DivContainer>
  );
};

export default DetailsCard;
