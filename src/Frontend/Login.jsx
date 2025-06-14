import React, { useState } from "react";
import LoginPage from "./Login/LoginPage";
import SignUpPage from "./Login/SignUpPage";

function App() {
  const [isSignUp, setIsSignUp] = useState(false);
  console.log(isSignUp);

  function handleSignUpClick() {
    setIsSignUp(true);
  }
  const handleBackToLogin = () => setIsSignUp(false);

  return (
    <div className="app-container">
      {isSignUp ? (
        <SignUpPage onBack={handleBackToLogin} />
      ) : (
        <LoginPage onSignUp={handleSignUpClick} />
      )}
    </div>
  );
}

export default App;
