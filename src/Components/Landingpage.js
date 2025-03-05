import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const registerClick = () => {
    navigate('/register'); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); 

    
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }), 
      });

      const data = await response.json();

      if (response.status === 200) {
        localStorage.setItem("userEmail", JSON.stringify(data.user.email));
        navigate("/mainpage"); 
      } else {
        setMessage(data.message || "Invalid credentials");
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
        <div className="greeting">
          <h1>Hello!</h1>
          <br></br>
          <h3>Welcome to PIXELS</h3>
          <h3>Dive into the world of Movies!!</h3>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <h4 style={{ marginLeft: "0px", marginTop: "10px" }}>
          
          </h4>
          
          
          
          <br />
          <div>
            <button type="submit" onClick={registerClick}>Get Started</button>
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
          //background-image: url('https://wallpaperboat.com/wp-content/uploads/2019/10/free-website-background-01.jpg');
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
          color:white;
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
          height: 400px;
          background-image: url('https://cdn.logojoy.com/wp-content/uploads/2018/05/29153839/13.png');
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
        .greeting h2 {
          font-size: 15px;
          color:rgb(238, 237, 244);
          margin-bottom: 10px;
        }
        .greeting h3 {
          font-size: 25px;
          color:rgba(244, 232, 232, 0.92);
          margin-bottom: 5px;
        }
        .form h4 {
          font-size: 20px;
          color: #333333dc;
          margin-bottom: 15px;
        }
        .form input {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border-radius: 5px;
          border: 1px solid #d2c9c9;
        }
        .form .forgpass {
          display: block;
          color: #4819e2;
          font-size: 8px;
          padding-bottom: 5px;
          margin-bottom: 20px;
          text-decoration: none;
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
          display: flex;
          cursor: pointer;
          justify-content: center;
          align-items: center;
        }
        .create-acc {
          display: block;
          text-align: center;
          color: #4f2cc7;
          font-size: 12px;
          margin-top: 20px;
          text-decoration: none;
        }
        @media screen and (max-width: 750px) {
          .container {
            flex-direction: column;
            width: 90%;
            height: auto;
            margin-left: 0; /* Reset margin for smaller screens */
          }
          .leftsection, .right-section {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default Loginpage;
