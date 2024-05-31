import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

function LoginComponent() {
  const [username, setUsername] = useState("Fiza");
  const [password, setPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  // const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const navigate = useNavigate();
  // HOOKS
  const authContext = useAuth();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit() {
    if (await authContext.login(username, password)) {
      // setShowSuccessMessage(true);
      // setShowErrorMessage(false);
      navigate(`/welcome/${username}`);
    } else {
      // setShowSuccessMessage(false);
      setShowErrorMessage(true);
    }
  }

  return (
    <div className="LoginComponent">
      <h1>Login</h1>
      {/* {showSuccessMessage && (
        <div className="successMessage">Authenticated Successfully</div>
      )} */}
      {showErrorMessage && (
        <div className="errorMessage">
          Authenticated Failed. Please check your credentials.
        </div>
      )}
      <div className="LoginForm">
        <div>
          <label>User Name: </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            onKeyDown={(e) => {
              if (e.key === "Enter" && username) {
                handleSubmit();
              }
            }}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            onKeyDown={(e) => {
              if (e.key === "Enter" && password) {
                handleSubmit();
              }
            }}
          />
        </div>
        <div>
          <button type="button" name="login" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
