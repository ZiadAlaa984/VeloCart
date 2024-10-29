import { Outlet } from "react-router-dom";
import Footer from "../../components/ui/const/ContainerWidth";
import Navbar from "../../components/ui/const/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="app">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}
