import { createContext, useEffect, useState } from "react";
import { IAuthContext } from "../Interfaces/IAuthContext";
/* import { AxiosError } from "axios"; */
/* import { IError } from "../Interfaces/IError"; */
import { IProduct } from "../Interfaces/IProduct";
import { IProviderPropsChildren } from "../Interfaces/IProviderPropsChildren";
import api from "../Api/api";
import { IProductForm } from "../Interfaces/IProductForm";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IProviderPropsChildren) => {
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  /*   console.log("Contexxxt", product) */

  const [modalIn, setModalIn] = useState(false);

  const [products, setProducts] = useState<IProductForm[]>(
    [] as IProductForm[]
  );

  const CreateProduct = async (data: IProduct) => {
    console.log("Data", data);
    try {
      const newProduct = await api.post<IProductForm>("/produtos", data);
      /* console.log("*****", newProduct); */
      setProducts([...products, newProduct.data]);
      /* console.log(newProduct.data); */
      setModalIn(false);
    } catch (error) {
      console.log("CON-LOG CATCH ERROR CreateProduct", error);
    }
  };

  useEffect(() => {
    const ListAllProducts = async () => {
      try {
        const renderListSearch = await api.get<IProductForm[]>("/produtos");
        setProducts(renderListSearch.data);
      } catch (error) {
        console.log("CON-LOG CATCH ERROR CreateProduct", error);
      }
    }
    ListAllProducts()
  }, []);

  /* const UpdatedAllDadosVeicle = async (data: ITechs, id: string) => {
    setModalIn(true);

     const SelectTechnologyForFilter = user.techs.filter((elem) => elem.id !== id);

    await api
      .put<ITechs>(`/users/techs/${id}`, data)
      .then((res) => {
        console.log("CONSOLE LOG do Response do Registro", res);

        const newTechs = [...SelectTechnologyForFilter, res.data];
        setProduct({ ...user, techs: newTechs })})
      .catch((error: AxiosError<IError>) => {
        console.log("CON-LOG CATCH ERROR UpdatedAllDadosVeicle", error);
      })
      .finally(() => setModalIn(false)); */

  /* const DeleteProductVeicle = (id: string) => {
            api.delete<IProduct>(`/produto/${id}`)
          .then((res) => {
            console.log("CONSOLE LOG do Response do Registro", res);
    
            const newProduct = products.filter((elem) => elem.id !== id);
            setProduct({ ...products , newProduct})
          .catch((error: AxiosError<IError>) => {
            console.log("CON-LOG CATCH ERROR DeleteProductVeicle", error);
          })
          .finally(() => setModalIn(false));
      }; */

  return (
    <AuthContext.Provider
      value={{
        product,
        modalIn,
        products,
        setModalIn,
        CreateProduct,
        /* UpdatedAllDadosVeicle,
        DeleteProductVeicle */
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
