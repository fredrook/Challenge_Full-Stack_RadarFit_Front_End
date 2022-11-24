import CreateNewProduct from "../../Components/CreateNewProduc/CreateNewProduct";
import Header from "../../Components/Header/Header";
import ListProdutos from "../../Components/ListProducts/ListProdutos";
import NavBarModal from "../../Components/ModalCreateNewProduct/ModalCreateNewProduct";

import { DivContainer } from "./DashboardCSS";

const Dashboard = () => {
  return (
    <DivContainer>
      <Header />
      <CreateNewProduct />
      <NavBarModal />
      <ListProdutos />
    </DivContainer>
  );
};

export default Dashboard;
