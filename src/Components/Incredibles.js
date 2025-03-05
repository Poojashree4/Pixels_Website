import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch, faSignOutAlt, faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const Incredibles = () => {
  const [darkmode, setDarkmode] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [bannerText, setBannerText] = useState("The Incredibles");
  const [showVideo, setShowVideo] = useState(false); 

  const handleMouseEnter = () => {
    setIsHovered(true);
    setBannerText("A Family of Superheroes");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setBannerText("The Incredibles");
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/mainpage');   
  }; 

  const handlePlayClick = () => {
    setShowVideo(true); 
  };

  return (
    <>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 0",
          height: "70px",
          background: darkmode
            ? "linear-gradient(0deg, rgb(102, 108, 108) , rgba(19,19,20,1))"
            : "#265c99",
        }}
      >
        <a href="https://www.pngall.com/wp-content/uploads/13/Movie-Hollywood-PNG-File.png" target="_blank" rel="noopener noreferrer">
          <img
            src="https://www.pngall.com/wp-content/uploads/13/Movie-Hollywood-PNG-File.png"
            alt="Website Logo"
            style={{ width: "120px", height: "50px", backgroundSize: "cover", backgroundPosition: "center center" }}
          />
        </a>
        <h1 style={{ textAlign: "center", marginTop: "20px", fontSize: "30px", color: darkmode ? "#f5f5f5" : "#121212" }}>
          PIXELS
        </h1>
        <a style={{ marginLeft: "auto", marginRight: "50px", color: darkmode ? "#f5f5f5" : "#121212" }}>
          <FontAwesomeIcon icon={faHome} size="2x" />
          <p style={{ marginTop: "3px", cursor: "pointer" }} onClick={handleClick}>Home</p>
        </a>
        <a style={{ marginRight: "40px", color: darkmode ? "#f5f5f5" : "#121212" }}>
          <FontAwesomeIcon icon={faSearch} size="2x" style={{ marginRight: "20px" }} />
          <p style={{ marginTop: "3px", cursor: "pointer" }}>Search</p>
        </a>
        <a style={{ marginRight: "30px", color: darkmode ? "#f5f5f5" : "#121212" }}>
          <FontAwesomeIcon icon={faSignOutAlt} size="2x" style={{ marginRight: "20px" }} />
          <p style={{ marginTop: "3px", cursor: "pointer" }} onClick={handleClick}>Logout</p>
        </a>
      </header>

      <div
        style={{
          width: "100%",
          height: "450px",
          marginTop:"10px",
          backgroundImage: 'url("https://deemediastudies.wordpress.com/wp-content/uploads/2015/06/cp_fwb_incredibles_20120926.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "black",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0px 3px 3px 3px",
          transition: "all 0.3s ease",
          filter: isHovered ? "brightness(70%)" : "brightness(100%)",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "450px",
            padding: "20px",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            fontFamily: "sans-serif",
            borderRadius: "10px",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        >
          <h2 style={{ marginBottom: "10px", fontSize: "2rem", fontWeight: "bold", marginTop: "50px" }}>Incredibles</h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.5", marginRight: "450px" }}>
            The Incredibles is a 2004 American animated superhero film produced by Pixar Animation Studios for Walt Disney Pictures.
            Written and directed by Brad Bird, it stars the voices of Craig T. Nelson, Holly Hunter, Sarah Vowell, Spencer Fox, Jason Lee, Samuel L. Jackson, and Elizabeth Peña.
            Set in a retro-futuristic version of the 1960s, the film follows Bob and Helen Parr, a couple of superheroes, known as Mr.
            Incredible and Elastigirl, respectively, who hide their powers in accordance with a government mandate, and attempt to live a quiet suburban life with their three children. However,
            Bob's desire to help people draws the entire family into a confrontation with a vengeful fan-turned-foe.
          </p>
          <button
            style={{ padding: "15px", borderRadius: "5px", background: "lightGreen", marginBottom: "20px", marginTop: "15px", marginLeft: "10px" }}
            onClick={handlePlayClick} 
          >
            Play Now
          </button>
        </div>
      </div>

      {showVideo && (
        <div style={{ marginTop: "30px" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Zx6OauuJMQE?autoplay=1" 
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <br />
      <br />

      <h2>Movie Cast</h2>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
        <div style={{ display: "flex", gap: "20px" }}>
          {[
            { src: "https://www.tvguide.com/a/img/resize/4897ba998cd1d4013e091cfe753400547c513c80/catalog/provider/2/13/2-484793c4832f8a5201353fb8c05576f0.jpg?auto=webp&fit=crop&height=300&width=200", name: "Brad Bird" },
            { src: "https://www.tvguide.com/a/img/resize/0ac7c34b7a393437d5cf93d6bad8ace5d63cd5c1/catalog/provider/2/13/2-59848da5c61ca8578a3f30d5bcf93d74.jpg?auto=webp&fit=crop&height=300&width=200", name: "Holly Hunter" },
            { src: "https://www.tvguide.com/a/img/resize/460bde1891e20d3f583819771c6ec2a2fae57b70/catalog/provider/2/13/2-7fbb843b6c4f0ceeb7ae58beebf335a5.jpg?auto=webp&fit=crop&height=300&width=200", name: "Catherine Keener" },
            { src: "https://www.tvguide.com/a/img/resize/a73b351100ce48e9f2c0b0bff969d33d5c51be51/catalog/provider/2/13/2-de21d8cf66e2849abeef800df56b595e.jpg?auto=webp&fit=crop&height=300&width=200", name: "John Ratzenberger" },
            { src: "https://www.tvguide.com/a/img/resize/ec181ce09aa3752118d67af5ec6c6b7db760d7b5/catalog/provider/2/13/2-c435ac7d698896937e66936a093eef65.jpg?auto=webp&fit=crop&height=300&width=200", name: "Shopia Bush" },
            { src: "https://www.tvguide.com/a/img/resize/7298b7169a4940a379817ed979e051ace40e02cf/catalog/provider/2/13/2-882c8dd022fb997faaf9e73ce04277d3.jpg?auto=webp&fit=crop&height=300&width=200", name: "Phil LaMarr" },
            { src: "https://www.tvguide.com/a/img/resize/a0fe94ece652d35a39f97a061344ab29296acbf9/catalog/provider/2/13/2-0f7c78bc5c7babe20d052b40d189c58f.jpg?auto=webp&fit=crop&height=300&width=200", name: "Jonathan Banks" },
            { src: "https://www.tvguide.com/a/img/resize/9cbd1263e97782085e6cf233aff3e6131909cbdc/catalog/provider/2/13/2-f114330934f1b91b6acfa71b39b96e8d.jpg?auto=webp&fit=crop&height=300&width=200", name: "Barry" },
          ].map((cast, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <img
                src={cast.src}
                alt="movie poster"
                style={{ width: "150px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px" }}
              />
              <p>{cast.name}</p>
            </div>
          ))}
        </div>
      </div>

      <button style={{ background: "black", color: "white", padding: "10px", marginTop: "20px" }} onClick={handleClick}>
        Back
      </button>
    </>
  );
};

export default Incredibles;