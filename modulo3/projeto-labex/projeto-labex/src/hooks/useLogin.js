import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useLogin = (url, emailParam, passwordParam) => {
  const navigate = useNavigate();
  const goToAdminHomePage = () => {
    navigate("/adminPanel");
  };
  const takeData = async () => {
    const body = {
      email: emailParam,
      password: passwordParam,
    };
    try {
      const res = await axios.post(url, body);
      window.localStorage.setItem("token", res.data.token)
      goToAdminHomePage();
    } catch (err) {
      alert.log(err);
    }
  };

  return takeData;
};
