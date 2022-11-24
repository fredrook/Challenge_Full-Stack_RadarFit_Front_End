import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Container, Nav } from "./ModalCreateNewProductCSS";

const NavBarModal = () => {
  const { modalIn, setModalIn} = useContext(AuthContext);
  console.log("NavBarModal", modalIn);

  return (
    <>
      {modalIn && (
        <Container>
          <Nav>
            <h2 className="H2">Novo Produto</h2>
            <div className="Div1">
              <div className="SubDiv1">
                <h2 className="tagh2">Produto</h2>
                <input
                  className="Inpt1"
                  type="text"
                  placeholder="Nome do Produto!"
                />
              </div>
              <div className="SecondSubDiv1">
                <input className="Inpt2" type="text" placeholder="Valor (R$)" />
              </div>
            </div>
            <div className="Div2">
              <h2 className="tagh2Div2">Descrição</h2>
              <input
                className="Inpt3"
                type="text"
                placeholder="Descrição do produto!"
              />
            </div>
            <div className="Div3">
              <button className="BtnAdd">ADD</button>
              <button onClick={() => setModalIn(false)} className="BtnClose">FECHAR</button>
            </div>
          </Nav>
        </Container>
      )}
    </>
  );
};

export default NavBarModal;
