import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
//   const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const logclick=()=>{
    navigate('/login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    
    if (password !== confirmpass) {
        setMessage("Passwords do not match");
        return;
      }
      
      try {
        const response = await fetch("http://localhost:5000/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
      
        const data = await response.json();
      
        if (response.status === 200) {
          localStorage.setItem("userEmail", JSON.stringify(data.user.email));
          setMessage("Registered successfully");
          navigate("/login"); 
        } else {
          setMessage(data.message || "Registration failed");
        }
      } catch (error) {
        setMessage("Server error, please try again later.");
      }
    };
      
  return (
    <div className="container">
      <div className="leftsection">
        <div className="int"></div>
      </div>
      <div className="right-section">
        
        <form className="form" onSubmit={handleSubmit}>
          <h4 style={{ marginLeft: "30px", marginTop: "10px",marginBottom:"20px",fontSize:"20px" }}>
            Register your account
          </h4>
          {/* <p>Username</p>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          /> */}
          <p>Email ID</p>
          <input
            type="text"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p>Password</p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p>Confirm Password</p>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmpass}
            onChange={(e) => setConfirmpass(e.target.value)}
            required
          />
          <br />
          <div>
            <button type="submit" >Register</button>
            <button type='submit' onClick={logclick}>Login</button>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>

      <style js>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, Helvetica, sans-serif;
        }
        body {
          background-image:url('https://springboard-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .container {
          display: flex;
          flex-direction: row;
          color: white;
          width: 200%;
          height: 75vh;
          border-radius: 20px;
          overflow: hidden;
          margin-left: -180px;
        }
        .leftsection {
          background-color: rgba(29, 31, 31, 0.7);
          color: rgb(33, 43, 67);
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20%;
          text-align: center;
          position: relative;
          box-shadow: 0px 10px 15px;
        }
        .int {
          width: 250px;
          height: 200px;
          background-image: url('https://png.pngtree.com/png-clipart/20230504/original/pngtree-free-vector-login-concept-illustration-png-image_9140539.png');
          background-size: cover;
          background-position: center;
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
        }
        .right-section {
          width: 80%;
          padding: 50px;
          display: flex;
          background-color: rgba(29, 31, 31, 0.7);
          flex-direction: column;
          justify-content: center;
          box-shadow: 0 10px 15px;
        }
        .form input {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border-radius: 5px;
          border: 1px solid #d2c9c9;
        }
        button {
          width: 100%;
          padding: 15px;
          background-color: rgb(239, 60, 60);
          font-size: 15px;
          color: white;
          border: none;
          border-radius: 5px;
          margin-top: 20px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default RegisterPage;
