
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch, faSignOutAlt, faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const Twentyfour = () => {
  const [darkmode, setDarkmode] = useState(false);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/mainpage');   
  }; 

  return (
    <><><header
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
        <img src="https://www.pngall.com/wp-content/uploads/13/Movie-Hollywood-PNG-File.png"
          alt="Website Logo"
          style={{ width: "120px", height: "50px", backgroundSize: "cover",
            backgroundPosition: "center center" }} />
      </a>
      <h1 style={{ textAlign: "center", marginTop: "20px", fontSize: "30px", color: darkmode ? "#f5f5f5" : "#121212" }}>
        PIXELS
      </h1>
      <a style={{ marginLeft: "auto", marginRight: "50px", color: darkmode ? "#f5f5f5" : "#121212", }}>
        <FontAwesomeIcon icon={faHome} size="2x" />
        <p style={{ marginTop: "3px", cursor: "pointer" }} onClick={handleClick}>Home</p>
      </a>
      <a style={{ marginRight: "40px", color: darkmode ? "#f5f5f5" : "#121212", }}>
        <FontAwesomeIcon icon={faSearch} size="2x" style={{ marginRight: "20px" }} />
        <p style={{ marginTop: "3px", cursor: "pointer" }}>Search</p>
      </a>
      <a style={{ marginRight: "30px", color: darkmode ? "#f5f5f5" : "#121212" }}>
        <FontAwesomeIcon icon={faSignOutAlt} size="2x" style={{ marginRight: "20px" }} />
        <p style={{ marginTop: "3px", cursor: "pointer" }} onClick={handleClick}>Logout</p>
      </a>

      <a style={{ marginRight: "30px", color: darkmode ? "#f5f5f5" : "#121212", }}>
        <FontAwesomeIcon icon={faUser} size="2x" />
        <p style={{ marginTop: "3px", cursor: "pointer" }}>Profile</p>
      </a>
    </header><div>
        
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <img src="https://wallpapercave.com/wp/wp7724899.jpg"
            alt="movie poster"
            style={{
             width:"100%",
             height:"450px"
              
            }} />

        </div>
        <h2>24 </h2>
        <div style={{marginRight:"350px",fontFamily:"sans-serif"}}>
        <p>24 is a 2016 Indian Tamil-language science fiction action film[5] written and directed by Vikram Kumar.
             It is produced by Suriya under 2D Entertainment. The film stars Suriya in triple roles, alongside Samantha Ruth Prabhu and Nithya Menen. Saranya Ponvannan, Ajay, Girish Karnad, Mohan Raman, Sudha, Sathyan and Charle appear in the supporting roles. The film follows Sethuraman, a scientist, 
            who invents a time travel watch but Athreya, his twin brother, does everything he can to get hands on that..</p>
          </div>
          <button style={{ padding: "15px", borderRadius: "5px", background: "lightGreen",marginBottom:"20px" }}>Play NoW</button> 
          <br></br>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/KIVmHOE06sc?si=xrsc__xvvb_vKamc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br></br>
<h2>Movie Cast</h2>
 <div style={{ display: "flex", flexDirection: "column", alignItems: "center",cursor:"pointer",marginInline: "auto", }}>
   <div style={{ display: "flex", gap: "20px",marginInline: "auto" }}>
     <div style={{ textAlign: "center" }}>
       <img src="https://images.filmibeat.com/webp/img/popcorn/profile_photos/suriya-sivakumar-20190423095612-2747.jpg"
         alt="movie poster"
         style={{ width: "150px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px" }}
       />
       <p>Surya Sivakumar</p>
     </div>
     <div style={{ textAlign: "center" }}>
       <img src="https://images.filmibeat.com/webp/img/popcorn/profile_photos/samantha-ruth-prabhu-20211017172448-1326.jpg"
        alt="movie poster"
        style={{ width: "150px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px"  }}
      />
      <p>Samantha Ruthprabu</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://images.filmibeat.com/webp/img/popcorn/profile_photos/nithya-menon-20191128130446-4015.jpg"
        alt="movie poster"
        style={{ width: "150px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px"  }}
      />
      <p>Nithya Menen
</p>
      
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://images.filmibeat.com/webp/img/popcorn/profile_photos/ajay-9655.jpg"
        alt="movie poster"
        style={{ width: "150px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px"  }}
      />
      <p>Ajay</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://images.filmibeat.com/webp/img/popcorn/profile_photos/saranya-ponvannan-3203.jpg"
        alt="movie poster"
        style={{ width: "150px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px"  }}
      />
      <p>Saranya Ponvannan</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img  src="https://images.filmibeat.com/webp/img/popcorn/profile_photos/girish-karnad-20190610093224-2332.jpg"
        alt="movie poster"
        style={{ width: "150px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px"  }}
      />
      <p>Girish Karnad</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://images.filmibeat.com/webp/img/popcorn/profile_photos/mohan-raman-20220708104254-36485.jpg"
        alt="movie poster"
        style={{ width: "150px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px"  }}
      />
      <p>Mohan Raman</p>
    </div>
   
</div>
    </div> 
      
        <br></br>
      </div>
      <button style={{background:"black",color:"white",padding:"10px",marginTop:"20px"}} onClick={handleClick}>Back</button>
      </></>

  )
}

export default Twentyfour;