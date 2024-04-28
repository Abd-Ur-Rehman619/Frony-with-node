import styles from "./signup.module.css";
import signupImg from "../../assets/authPic.png";
import { Button, IconButton, Input, InputAdornment } from "@mui/material";
import googleIcon from "../../assets/Icon-Google.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };
  const handleSignup = async () => {
    const response = await fetch("http://localhost:3000/signup", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (data.errors) {
      toast.error(`${data.errors}`);
    } else if (data.message) {
      toast.success(`${data.message}`);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={signupImg} alt="signup Img" />
        </div>

        <form className={styles.form}>
          <h1>Create an account</h1>
          <p>Enter your details below</p>
          <div className={styles.inputs}>
            <Input
              type="text"
              className={styles.name}
              placeholder="Name*"
              value={name}
              onChange={handleNameChange}
              required
            />

            <Input
              type="email"
              className={styles.email}
              placeholder="Email*"
              value={email}
              onChange={handleEmailChange}
              required
            />

            <Input
              type={showPassword ? "text" : "password"}
              className={styles.password}
              placeholder="Password*"
              value={password}
              onChange={handlePasswordChange}
              required
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
            {passwordError && (
              <p className="text-xs p-0 relative -top-3 text-red-600">
                {passwordError}
              </p>
            )}
          </div>

          <div className={styles.primaryBtns}>
            <div className={styles.createBtn}>
              <Button onClick={handleSignup}>Create Account</Button>
            </div>

            <div className={styles.googleBtn}>
              <Button>
                <img src={googleIcon} />
                Sign Up with Google
              </Button>
            </div>
          </div>

          <div className={styles.footerBtn}>
            <span>Already have account?</span>
            <Link to="/login" className="text-black text-opacity-50 ml-3">
              Log in
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
