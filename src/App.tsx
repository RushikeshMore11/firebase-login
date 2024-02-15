import React from "react";
import { signIn, signInWithGoogle, signUp } from "./firebase/auth";
import Search from "./input/Search";

const App = () => {
  const handleSignIn = async () => {
    try {
      const data = await signIn("abc@gmail.com", "Ruta@2028");
      console.log(data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      const data = await signUp("abc@gmail.com", "Ruta@2028");
      console.log(data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleSignUpWithGoogle = async () => {
    try {
      const data = await signInWithGoogle();
      console.log(data);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <div>
      {/* <h1>Login</h1>
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignUpWithGoogle}>Google</button> */}
      <Search />
    </div>
  );
};

export default App;
