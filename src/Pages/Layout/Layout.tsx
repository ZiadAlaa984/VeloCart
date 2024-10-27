import { Outlet } from "react-router-dom";
import Footer from "../../components/ui/const/ContainerWidth";
import Navbar from "../../components/ui/const/Navbar";
import ContainerWidth from "../../components/ui/const/MaxWidth";

export default function Layout() {
  return (
    <>
      <Navbar />
      <ContainerWidth>
        <Outlet></Outlet>
      </ContainerWidth>
      <Footer />
    </>
  );
}
