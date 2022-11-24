import CreateNewProduct from "../../Components/CreateNewProduc/CreateNewProduct";
import Header from "../../Components/Header/Header";
import ListProdutos from "../../Components/ListProducts/ListProdutos";
import ModalCreateNewProduct from "../../Components/ModalCreateNewProduct/ModalCreateNewProduct";

import { DivContainer } from "./DashboardCSS";

const Dashboard = () => {
  return (
    <DivContainer>
      <Header />
      <CreateNewProduct />
      <ModalCreateNewProduct />
      <ListProdutos />
    </DivContainer>
  );
};

export default Dashboard;
