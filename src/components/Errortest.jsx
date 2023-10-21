import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Errortest = () => {
  let path = useLocation();

  useEffect(() => {
    if (path.pathname === "/test") throw "Testing Error Boundary";
    return () => {};
  }, [path]);
};

export default Errortest;