import AuthForm from "./AuthForm";

const Signup = ({ setAuthenticated }) => {
  const handleSignup = () => {
    setAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  return <AuthForm type="signup" onSuccess={handleSignup} />;
};

export default Signup;
