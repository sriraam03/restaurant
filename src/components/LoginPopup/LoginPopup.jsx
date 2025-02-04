import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth,db } from "../../pages/firebase";
import { setDoc,doc } from "firebase/firestore";
import { toast } from "react-toastify";

const LoginPopup = ({ setShowLogin }) => {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  
  const [semail,setSemail] = useState('')
  const [spassword,setSpassword] = useState('')

  const [currentState, setCurrentState] = useState("Sign up");

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try{
        await signInWithEmailAndPassword(auth,semail,spassword)
        toast.success("User registered successfully",{position: "top-center"}) 
        window.location.href = "/"
    }catch(error){
      toast.success(error.message,{position: "bottom-center"}) 
    }
  }

  const handleRegister= async(e)=>{
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, semail, spassword);
      const user = auth.currentUser
      console.log(user)
      if(user){
        await setDoc(doc(db,"Users",user.uid),{
          email :user.email,
          firstName: name,
          password: password
        })
      }
      setShowLogin(false); 
      toast.success("User registered successfully",{position: "top-center"}) 
    } catch (error) {
      console.error("Error registering user:", error.message);
      toast.success(error.message,{position: "bottom-center"}) 
      alert("Registration failed: " + error.message);
    }
    }
  
  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={currentState === "Sign up" ? handleRegister : handleSubmit}>
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            src={assets.cross_icon}
            alt="cross_icon"
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" onChange={(e)=> setName(e.target.value)} required />
          )}
          {currentState === 'Login'?(<>
              <input type="email" placeholder="Your email" onChange={(e)=> setEmail(e.target.value)} required />
              <input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} required />
              </>
          ) : ( 
            <>
            <input type="email" placeholder="Your email" onChange={(e)=> setSemail(e.target.value)} required />
            <input type="password" placeholder="Password" onChange={(e)=> setSpassword(e.target.value)} required />
            </>
          )}
        </div>

        <button>
          {currentState === "Sign up" ? "Create Account" : "Login"}
        </button>

        {currentState === "Sign up" ? (
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
        ) : (
          <></>
        )}

        {currentState === "Login" ? (
          <p>
            Create a new account?
            <span onClick={() => setCurrentState("Sign up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span onClick={() => setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
