import { Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useEffect } from "react";

const LayoutPrivate = () => {
  const { user } = useUserContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default LayoutPrivate;
