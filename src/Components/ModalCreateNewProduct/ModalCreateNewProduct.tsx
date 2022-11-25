import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Container, Form } from "./ModalCreateNewProductCSS";
import { useForm } from "react-hook-form";
import { IProduct } from "../../Interfaces/IProduct";

const ModalEditProduct = () => {
  const { modalIn, setModalIn, createProduct } = useContext(AuthContext);

  const { register, handleSubmit, reset } = useForm<IProduct>({});

  const handleSubmidData = (data: IProduct) => {
    createProduct(data)
    reset()
    setModalIn(false)
  }

  return (
    <>
      {modalIn && (
        <Container>
          <Form onSubmit={handleSubmit(handleSubmidData)}>
            <h2 className="H2">Novo Produto</h2>
            <div className="Div1">
              <div className="SubDiv1">
                <label className="tagLabel" htmlFor="produto">
                  Produto
                </label>
                <input
                  className="Inpt1"
                  type="text"
                  placeholder="Nome do Produto!"
                  id="produto"
                  {...register("produto")}
                />
              </div>
              <div className="SecondSubDiv1">
                <input
                  className="Inpt2"
                  type="text"
                  placeholder="Valor (R$)"
                  id="valor"
                  {...register("valor")}
                />
              </div>
            </div>
            <div className="Div2">
              <h2 className="tagh2Div2">Descrição</h2>
              <input
                className="Inpt3"
                type="text"
                placeholder="Descrição do produto!"
                id="descricao"
                {...register("descricao")}
              />
            </div>
            <div className="Div3">
              <button className="BtnAdd" type="submit">
                ADD
              </button>
              <button onClick={() => setModalIn(false)} className="BtnClose">
                FECHAR
              </button>
            </div>
          </Form>
        </Container>
      )}
    </>
  );
};

export default ModalEditProduct;
