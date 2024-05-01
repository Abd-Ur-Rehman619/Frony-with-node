import styles from "./login.module.css";
import signupImg from "../../assets/authPic.png";
import { Button, IconButton, Input, InputAdornment } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { updateLog } from "../../store/cartSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

  const handleLogin = async () => {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (data.userId) {
      localStorage.setItem("token", data.token);
      dispatch(updateLog());
      navigate("/");
    } else {
      toast.error(`${data}`);
    }
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <div className={styles.content}>
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
      </div>
    </>
  );
}
