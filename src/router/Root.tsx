import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { Outlet } from "react-router-dom";
import { useScrollToTop } from "utils/hooks/useScrollToTop";

const Root = () => {
  useScrollToTop();
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
