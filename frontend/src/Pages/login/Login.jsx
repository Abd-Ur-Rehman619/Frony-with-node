import styles from "./login.module.css";
import signupImg from "../../assets/authPic.png";
import { Button, IconButton, Input, InputAdornment } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { updateLog } from "../../store/cartSlice";
import generateToken from "../../../helpers/generateToken";
import { useDispatch } from "react-redux";
import NoAcces from "../../Components/NoAcces";

export default function Login() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const storedUser = JSON.parse(localStorage.getItem("users")) || [];

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError("");
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLogin = () => {
    const foundUser = storedUser.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      const token = generateToken("email");
      localStorage.setItem("token", token);
      dispatch(updateLog());
      navigate("/");
    } else {
      setError("Incorrect email or password");
    }
  };

  return (
    <>
      {!token && (
        <div className={styles.content}>
          <>
            <div className={styles.image}>
              <img src={signupImg} alt="signup Img" />
            </div>

            <form className={styles.form}>
              <h1>Log in to Exclusive</h1>
              <p>Enter your details below</p>
              <div className={styles.inputs}>
                <Input
                  type="email"
                  className={styles.email}
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                {error && (
                  <p className="text-xs p-0 relative -top-3 text-red-600">
                    {error}
                  </p>
                )}

                <Input
                  type={showPassword ? "text" : "password"}
                  className={styles.password}
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleTogglePasswordVisibility}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {error && (
                  <p className="text-xs p-0 relative -top-3 text-red-600">
                    {error}
                  </p>
                )}
              </div>

              <div className={styles.primaryBtns}>
                <div className={styles.loginBtn}>
                  <Button onClick={handleLogin}>Log in</Button>
                </div>

                <div className={styles.forgetBtn}>
                  <Button>Forget Password?</Button>
                </div>
              </div>
            </form>
          </>
        </div>
      )}
      {token && <NoAcces />}
    </>
  );
}
