import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch, faSignOutAlt, faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const Aladdin = () => {
  const [darkmode, setDarkmode] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [bannerText, setBannerText] = useState("The Incredibles");
  const [showVideo, setShowVideo] = useState(false); 

  const handleMouseEnter = () => {
    setIsHovered(true);
    setBannerText("");
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
          backgroundImage: 'url("https://i.ytimg.com/vi/_oGBHlftJvc/maxresdefault.jpg")',
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
          <h2 style={{ marginBottom: "10px", fontSize: "2rem", fontWeight: "bold", marginTop: "50px" }}>Aladdin</h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.5", marginRight: "450px" }}>
          Aladdin is a 2019 American musical fantasy film directed by Guy Ritchie from a screenplay he co-wrote with John August. 
          Produced by Walt Disney Pictures and Rideback, it is a live-action adaptation of Disney's 1992 animated film Aladdin, itself based on "Aladdin and the Wonderful Lamp", a French addition to the Middle Eastern folktale collection One Thousand and One Nights.[1][a] The film stars Will Smith, Mena Massoud and Naomi Scott with Marwan Kenzari, Navid Negahban, Nasim Pedrad, and Billy Magnussen in supporting roles. The plot follows Aladdin, a street urchin, 
          as he falls in love with Princess Jasmine, befriends a wish-granting genie, and battles the wicked sorcerer Jafar.
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
          <iframe width="560" height="315" src="https://www.youtube.com/embed/GnzYpNZ0Dgw?si=D3-OsuXfNn7RPQqS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      )}

      <br />
      <br />
      <h2>Movie Cast</h2>
 <div style={{ display: "flex", flexDirection: "column", alignItems: "center",cursor:"pointer",marginInline: "auto", }}>
   <div style={{ display: "flex", gap: "20px",marginInline: "auto" }}>
     <div style={{ textAlign: "center" }}>
       <img src="https://www.cheatsheet.com/wp-content/uploads/2020/07/Will-Smith-3-2-scaled.jpg"
         alt="movie poster"
         style={{ width: "150px",
            height: "235px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px" }}
       />
       <p>Will Smith</p>
     </div>
     <div style={{ textAlign: "center" }}>
       <img src="https://s.yimg.com/fz/api/res/1.2/bC6MXJDM4d.6vFNJ8hFyjA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0zODQ7cHhvZmY9MDtweW9mZj0wO3E9ODA7dz0zODQ-/https://s.yimg.com/zb/imgv1/fb5c9e55-e3ff-361b-8244-e8d3286b1ce4/s_140x140"
        alt="movie poster"
        style={{ width: "150px",
            height: "235px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px"  }}
      />
      <p>Mena Massoud</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://s.yimg.com/fz/api/res/1.2/kp7ob45Xr6TIrTzVVgXdUQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0zODQ7cHhvZmY9MDtweW9mZj0wO3E9ODA7dz0zODQ-/https://s.yimg.com/zb/imgv1/1f4cf26c-c0cc-3792-9073-12ca45cc5d7a/s_140x140"
        alt="movie poster"
        style={{width: "150px",
            height: "235px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px"  }}
      />
      <p>Naomi Scott
</p>
      
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://s.yimg.com/fz/api/res/1.2/6DVLpJTNsIjWyN6Z3slQSQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0zODQ7cHhvZmY9MDtweW9mZj0wO3E9ODA7dz0zODQ-/https://s.yimg.com/zb/imgv1/41ca0841-44e3-3ae3-a82d-ade4ec00a924/s_140x140"
        alt="movie poster"
        style={{ width: "150px",
            height: "235px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px"  }}
      />
      <p>Numan Acar</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://s.yimg.com/fz/api/res/1.2/pksSFcz3GBqnxyUffRPE6Q--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0zODQ7cHhvZmY9MDtweW9mZj0wO3E9ODA7dz0zODQ-/https://s.yimg.com/zb/imgv1/710b6eb9-6c9d-3ed7-af25-15c89dc7b3d0/s_140x140"
        alt="movie poster"
        style={{ width: "150px",
            height: "235px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px"  }}
      />
      <p>Marwan</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img  src="https://s.yimg.com/fz/api/res/1.2/G.x5qlrNudr177SqadA1OQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0zODQ7cHhvZmY9MDtweW9mZj0wO3E9ODA7dz0zODQ-/https://s.yimg.com/zb/imgv1/8e0c0ac9-f411-33a6-8134-4234e0808047/s_140x140"
        alt="movie poster"
        style={{ width: "150px",
            height: "235px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px"  }}
      />
      <p>Nasim Predrad</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://s.yimg.com/fz/api/res/1.2/93TmgwxqhJMKcrBqhMWQZA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0zODQ7cHhvZmY9MDtweW9mZj0wO3E9ODA7dz0zODQ-/https://s.yimg.com/zb/imgv1/97312217-c92e-39b3-ae92-2f8e26923a22/s_140x140"
        alt="movie poster"
        style={{ width: "150px",
            height: "235px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px"  }}
      />
      <p>Billy</p>
    </div>
   
</div>
    </div> 
      
        

      <button style={{ background: "black", color: "white", padding: "10px", marginTop: "20px" }} onClick={handleClick}>
        Back
      </button>
    </>
  );
};

export default Aladdin;