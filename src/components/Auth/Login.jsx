import AuthForm from "./AuthForm";

const Login = ({ setAuthenticated }) => {
  const handleLogin = () => {
    setAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  return <AuthForm type="login" onSuccess={handleLogin} />;
};

export default Login;
