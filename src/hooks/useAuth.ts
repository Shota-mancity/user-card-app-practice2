import { useCallback, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const loginCheck = useCallback((userId: string) => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => {
        const isAdmin = res.data.id === 10 ? true : false;
        setLoginUser({ ...res.data, isAdmin });
        showMessage({ title: "Login succeeded", status: "success" });
        navigate("/home");
      })
      .catch(() => {
        showMessage({ title: "User cannot find", status: "error" });
        setLoading(false);
      });
  }, []);

  return { loginCheck, loading };
};
