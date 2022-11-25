import CreateNewProduct from "../../Components/CreateNewProduc/CreateNewProduct";
import Header from "../../Components/Header/Header";
import ListProdutos from "../../Components/ListProducts/ListProdutos";
import ModalCreateNewProduct from "../../Components/ModalCreateNewProduct/ModalCreateNewProduct";
import ModalEditProduct from "../../Components/ModalEditProduct/ModalEditProduct";

import { DivContainer } from "./DashboardCSS";

const Dashboard = () => {
  return (
    <DivContainer>
      <Header />
      <CreateNewProduct />
      <ModalCreateNewProduct />
      <ModalEditProduct/>
      <ListProdutos />
    </DivContainer>
  );
};

export default Dashboard;
