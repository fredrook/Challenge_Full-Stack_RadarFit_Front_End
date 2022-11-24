import {  createContext, useState } from "react";
/* import { AxiosError } from "axios"; */
import { IAuthContext } from "../Interfaces/IAuthContext";
/* import { IError } from "../Interfaces/IError"; */
import { IProduct } from "../Interfaces/IProduct";
import { IProviderPropsChildren } from "../Interfaces/IProviderPropsChildren";
/* import api from "../Api/api"; */


export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IProviderPropsChildren) => {
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  
  const [modalIn, setModalIn] = useState(false);

  const [products, setProducts] = useState<IProduct[]>([] as IProduct[]);

  /* const CreateProduct = (data: IProduct) => {
    api
      .post<IProduct>("/produtos", data)
      .then((res) => {
        console.log("CONSOLE LOG do Response do Registro", res);
        const novaTech = [...user.techs, res.data];
        setProduct({ ...user, techs: novaTech });
        setModalIn(false);
      })
      .catch((error: AxiosError<IError>) => {
        console.log("CON-LOG CATCH ERROR CreateProduct", error);
      });
  }; */

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
        setModalIn(true);
    
        api.delete<ITechs>(`/users/techs/${id}`)
          .then((res) => {
            console.log("CONSOLE LOG do Response do Registro", res);
    
            const newTechs = user.techs.filter((elem) => elem.id !== id);
            setProduct({ ...user, techs: newTechs })})
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
        setModalIn,
        /* CreateProduct,
        UpdatedAllDadosVeicle,
        DeleteProductVeicle */
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;