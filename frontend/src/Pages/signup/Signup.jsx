import styles from "./signup.module.css";
import signupImg from "../../assets/authPic.png";
import { Button, IconButton, Input, InputAdornment } from "@mui/material";
import googleIcon from "../../assets/Icon-Google.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import NoAcces from "../../Components/NoAcces";

export default function Signup() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSignup = () => {
    if (!name) {
      setNameError("Name cannot be empty");
    } else {
      setNameError("");
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email, email must have @");
      return;
    }

    if (
      !password ||
      !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(
        password
      )
    ) {
      setPasswordError(
        "Password must have at least one uppercase, lowercase letter, one digit, one special character, and minimum 8 characters"
      );
      return;
    }

    if (!name || !email || !password) {
      return;
    }

    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      setEmailError("This email is already in use");
      return;
    }

    const newUser = { name, email, password };
    const updatedUsers = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    navigate("/login");
  };

  return (
    <>
      {!token && (
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
              {nameError && (
                <p className="text-xs p-0 relative -top-3 text-red-600">
                  {nameError}
                </p>
              )}

              <Input
                type="email"
                className={styles.email}
                placeholder="Email*"
                value={email}
                onChange={handleEmailChange}
                required
              />
              {emailError && (
                <p className="text-xs p-0 relative -top-3 text-red-600">
                  {emailError}
                </p>
              )}

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
      )}
      {token && <NoAcces />}
    </>
  );
}
