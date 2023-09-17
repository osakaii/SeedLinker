import Navbar from "components/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Root;
