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
  const [products, setProducts] = useState<IProductForm[]>(
    [] as IProductForm[]
  );
  const [modalIn, setModalIn] = useState(false);
  const [modalInEdit, setModalInEdit] = useState(false);

  const createProduct = async (data: IProduct) => {
    console.log("Data****", data);
    try {
      const newProduct = await api.post<IProductForm>("/produtos", data);
      console.log("*****", newProduct);
      setProducts([...products, newProduct.data]);
      console.log(newProduct.data);
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
    };
    ListAllProducts();
  }, []);

 /*  const UpdatedAllDadosProduct = async (data: IProductForm, id: string) => {
    try {
      const SelectProductForFilter = products.filter((elem) => elem.id !== id);

      await api.put<IProductForm[]>(`/produtos/${id}`, data);

      const newTechs = [...SelectProductForFilter, data];
      setProducts([ ...products, products: newTechs ]);

    } catch (error) {
      console.log("CON-LOG CATCH ERROR DeleteProduct", error);
    }
  }; */

  const DeleteProduct = async (id: string) => {
    try {
      await api.delete<IProductForm[]>(`/produto/${id}`);

      const newProduct = await products.filter((elem) => elem.id !== id);

      setProducts(newProduct);
    } catch (error) {
      console.log("CON-LOG CATCH ERROR DeleteProduct", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        products,
        modalIn,
        setModalIn,
        modalInEdit,
        setModalInEdit,
        createProduct,
        /* UpdatedAllDadosProduct, */
        DeleteProduct,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
