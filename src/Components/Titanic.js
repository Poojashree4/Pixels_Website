import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch, faSignOutAlt, faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const Titanic = () => {
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
    setBannerText("");
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
          backgroundImage: 'url("https://images5.alphacoders.com/336/336484.jpg")',
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
          <h2 style={{ marginBottom: "10px", fontSize: "2rem", fontWeight: "bold", marginTop: "50px" }}>Titanic</h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.5", marginRight: "450px" }}>
          Titanic is a 1997 American epic romantic disaster film directed, written, co-produced and co-edited by James Cameron. Incorporating both historical and fictionalized aspects, 
          it is based on accounts of the sinking of RMS Titanic in 1912. Leonardo DiCaprio and Kate Winslet star as members of different social classes who fall in love during the ship's maiden voyage. The film also features an ensemble cast of Billy Zane, Kathy Bates, Frances Fisher, Bernard Hill, Jonathan Hyde, Danny Nucci, David Warner and Bill Paxton.

Cameron's inspiration for the film came from his fascination with shipwrecks. He felt a love story interspersed with human loss
 would be essential to convey the emotional impact of the disaster. Production began on September 1, 1995,[8] when Cameron shot footage of the Titanic wreck.
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
          <iframe width="560" height="315" src="https://www.youtube.com/embed/kVrqfYjkTdQ?si=4cJiJe7IwgIVWyZ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      )}

      <br />
      <br />

      <h2>Movie Cast</h2>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
        <div style={{ display: "flex", gap: "20px" }}>
          {[
            { src: "https://s.yimg.com/fz/api/res/1.2/kNiFGg9rJniGWnYJwCTqZQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0zODQ7cHhvZmY9MDtweW9mZj0wO3E9ODA7dz0zODQ-/https://s.yimg.com/zb/imgv1/168e80a2-28b7-3d2b-aaee-f1814d320975/s_140x140"
                , name: "Leonardo DeCaprio" },
            { src: "https://s.yimg.com/fz/api/res/1.2/n4mWYoTzmuflD1p2OBhQtg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0zODQ7cHhvZmY9MDtweW9mZj0wO3E9ODA7dz0zODQ-/https://s.yimg.com/zb/imgv1/4a326288-2089-327c-ad2b-74763ea85814/s_140x140", name: "Kate Winslet" },
            { src: "https://s.yimg.com/fz/api/res/1.2/LKerqHXHVcptmL2BlcPkgQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0zODQ7cHhvZmY9MDtweW9mZj0wO3E9ODA7dz0zODQ-/https://s.yimg.com/zb/imgv1/735e460b-651c-3a1c-b188-ce44fb4eb47b/s_140x140", name: "Billy Zane" },
            { src: "https://s.yimg.com/fz/api/res/1.2/as.v_Zypa3WtB4nlt60MDg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0zODQ7cHhvZmY9MDtweW9mZj0wO3E9ODA7dz0zODQ-/https://s.yimg.com/zb/imgv1/93b92183-6bcb-3cdb-8d08-1b17d06e55ab/s_140x140", name: "Kathe Bates" },
            { src: "https://s.yimg.com/fz/api/res/1.2/Bs0F2LHv3PWhahGXqdeBOw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0zODQ7cHhvZmY9MDtweW9mZj0wO3E9ODA7dz0zODQ-/https://s.yimg.com/zb/imgv1/27b5887c-79af-30f6-8799-9320671036de/s_140x140", name: "Franches Fisher" },
            { src: "https://s.yimg.com/fz/api/res/1.2/htnHyWKjjfhvCI9QHuP.1g--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0zODQ7cHhvZmY9MDtweW9mZj0wO3E9ODA7dz0zODQ-/https://s.yimg.com/zb/imgv1/9aafff90-d95c-38ad-b0a8-a2f458e1927a/s_140x140", name: "Bill Paxton" },
            { src: "https://s.yimg.com/fz/api/res/1.2/Wtdv3Og8GGx4dsyQzGUUPw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0zODQ7cHhvZmY9MDtweW9mZj0wO3E9ODA7dz0zODQ-/https://s.yimg.com/zb/imgv1/585b82ab-fa75-397b-a3e7-1d7267abeef3/s_140x140", name: "Danny Nucci" },
            { src: "https://s.yimg.com/fz/api/res/1.2/PS.IR49v_CpseIQmUQI7ZA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0zODQ7cHhvZmY9MDtweW9mZj0wO3E9ODA7dz0zODQ-/https://s.yimg.com/zb/imgv1/98dda525-e4cf-3bf0-ae35-078dc23dfb1d/s_140x140", name: "Jonathan Hyde" },
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

export default Titanic;