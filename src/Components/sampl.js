import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch, faSignOutAlt, faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';


function Mainpage() {
  const [movie, setMovie] = useState("");
  const [artist, setArtist] = useState("");
  const [darkmode, setDarkmode] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const navigate = useNavigate();
  

  const movies = {
    movies: [
      {
        title: "24",
        artists: ["Surya", "Samantha", "Vikram Kumar", "AR Rahman"],
        poster:
          "https://3.bp.blogspot.com/-PvQozlxukRI/WG0zVnrmdQI/AAAAAAAAAW0/WVeGpw7EyYoyWGEaae0lMaS6ENGm3Qn1gCLcB/s1600/24-Movie-Stills-and-Posters.jpg",
      },
      {
        title: "Gifted",
        artists: ["Chris Evans", "Grace", "Jenny"],
        poster: "https://tse1.mm.bing.net/th?id=OIP.tRM7QlGAtqqVDUeCIFGD0QHaEK&pid=Api&P=0&h=220",
      },
      {
        title: "Incredibles",
        artists: ["Brad Bird", "Walt Disney", "Stephen", "Andrew"],
        poster:
          "https://images.hdqwalls.com/wallpapers/the-incredibles-2-poster-new-qd.jpg",
      },
      {
        title: "Avengers",
        artists: ["Robert Downey", "Chris Evans", "Chris Hemsworth", "Scarlett Johansson"],
        poster: "https://wallpapercave.com/wp/eB5PrOP.jpg",
      },
      {
        title: "SpiderMan",
        artists: ["Tom Holland", "Zendaya", "Jon Watts", "Jake"],
        poster:
          "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/11/Spider-Man-Movie-Posters.jpg",
      },
      {
        title: "Barbie",
        artists: ["Margot Robbie", "Ryan Gosling", "Emma", "Greta"],
        poster: "https://www.wallpapersun.com/wp-content/uploads/2023/07/Margot-Robbie-Barbie-Wallpapersun-4.jpg",
      },
    ],
  };

 


  const handleImageClick = (images) => {
    setSelectedImage(images); 
  };

  const closeDescription = () => {
    setSelectedImage(null); 
  };

  const handleClick = () => {
    navigate('/login');   
  }; 
  const home = () => {
    navigate('/mainpage');   
  }; 


  const incredClick =()=>{
    navigate('/incredibles'); 
  }

  // const ClickMovie = (e) => {
  //   const clkMovie = e.target.value;
  //   setMovie(clkMovie);
  // }

  const ChangeMovie = (e) => {
    const selectedMovie = e.target.value;
    setMovie(selectedMovie);
    setArtist("");
    localStorage.setItem("selectedMovie", selectedMovie);
  };

  useEffect(() => {
    const savedMovie = localStorage.getItem("selectedMovie");
    const savedArtist = localStorage.getItem("selectedArtist");

    if (savedMovie) {
      setMovie(savedMovie);
    }
    if (savedArtist) {
      setArtist(savedArtist);
    }
  }, []);

  const toggle = () => {
    setDarkmode((prevMode) => !prevMode);
  };
  

  const selectedMovie = movies.movies.find((m) => m.title === movie);

  

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
          <img src="https://www.pngall.com/wp-content/uploads/13/Movie-Hollywood-PNG-File.png"
            alt="Website Logo"
            style={{ width: "120px", height: "50px" }}
          />
        </a>
        <h1 style={{ textAlign: "center", marginTop: "20px", fontSize: "30px", color: darkmode ? "#f5f5f5" : "#121212" }}>
          MY MOVIES
        </h1 >
        <a style={{ marginLeft: "auto", marginRight: "50px",color: darkmode ? "#f5f5f5" : "#121212", }}>
          <FontAwesomeIcon icon={faHome} size="2x" />
          <p style={{marginTop:"3px", cursor: "pointer"}} onClick={home}>Home</p>
        </a>
        <a style={{ marginRight: "40px",color: darkmode ? "#f5f5f5" : "#121212", }}>
          <FontAwesomeIcon icon={faSearch} size="2x" style={{ marginRight: "20px" }} />
          <p style={{marginTop:"3px", cursor: "pointer"}}>Search</p>
        </a>
        <a style={{ marginRight: "30px", color: darkmode ? "#f5f5f5" : "#121212" }}>
  <FontAwesomeIcon icon={faSignOutAlt} size="2x" style={{ marginRight: "20px" }} />
  <p style={{ marginTop: "3px",cursor:"pointer", cursor: "pointer" }} onClick={handleClick}>Logout</p>
</a>

        <a style={{ marginRight: "30px",color: darkmode ? "#f5f5f5" : "#121212", }}>
          <FontAwesomeIcon icon={faUser} size="2x" />
          <p style={{marginTop:"3px", cursor: "pointer"}}>Profile</p>
        </a>
      </header>

      <div
        style={{
            position: "relative",
            minHeight: "100vh", 
            height: "auto", 
            background: darkmode
              ? "linear-gradient(0deg, rgb(13, 16, 16), rgb(6, 6, 7))"
              : "linear-gradient(135deg,rgb(234, 238, 242),rgb(247, 250, 253))",
            color: darkmode ? "#f5f5f5" : "#121212",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed", 
            width: "100%", 
            overflowX: "hidden" 
          }}
          
      >
        <button
          style={{
            top: "20px",
            marginLeft: "92%",
            marginTop: "10px",
            padding: "10px",
            borderRadius: "15px",
            backgroundColor: darkmode ? "#f5f5f5" : "#121212",
            color: darkmode ? "#121212" : "#f5f5f5",
            border: "none",
            cursor: "pointer",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.4)",
          }}
          onClick={toggle}
        >
          {darkmode ? "Light Mode" : "Dark Mode"}
        </button>

        <div
          style={{
            
             marginLeft: "30px", display: "flex", color: darkmode ? "#f5f5f5" : "#121212",
          }}
        >
          <div style={{ marginRight: "40px", fontSize: "23px" }}>
            <h2 style={{ paddingRight: "10px" }}>Select your Movie:</h2>
            <div style={{ paddingRight: "10px" }}>
              <input
                style={{padding: "15px",borderRadius: "7px", backgroundColor: darkmode ? "#f5f5f5" : "#121212", color: darkmode ? "#121212" : "#f5f5f5",
                }}
                placeholder="Movie"
                value={movie}
                readOnly
              />
            </div>
            <select
              value={movie}
              onChange={ChangeMovie}
              style={{
                marginTop: "20px",
                padding: "15px",
                borderRadius: "15px",
                backgroundColor: "rgb(239, 59, 53)",
                color: "white",
              }}
            >
              <option value="">Select Movie</option>
              {movies.movies.map((movie, index) => (
                <option key={index} value={movie.title}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>

          {selectedMovie && (
            <img
              src={selectedMovie.poster}
              alt={selectedMovie.title}
              style={{
                width: "1020px", 
                height: "400px", 
                display: "block", 
                margin: "0 auto", 
                marginLeft:"8px",
                marginTop:"15px",
                objectFit: "cover", 
                transform: "scale(1)", 
                transition: "transform 0.4s ease-in-out" ,
                boxShadow: " 0px 3px 3px 3px",
                borderRadius:"4px"
              }}
              
            />
          )}
        </div>
        <br></br>
        <h2> Movies</h2>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
  <div style={{ display: "flex", gap: "20px",cursor:"pointer" }}>
    {/* <div style={{ textAlign: "center" }}>
    {images.map((image, index) => (
      <img
      key={index}
      src={image.src}
      alt={image.alt}
      className="w-64 cursor-pointer"
      onClick={() => handleImageClick(image)}
    style={{ width: "150px",height:"235px",borderRadius:"5px",boxShadow:" 0px 3px 3px 3px",display: "flex", gap: "20px",cursor:"pointer"  }}
      />  ))}
    
    </div> */}
    <div style={{ textAlign: "center" }}>
      <img src="https://tse3.mm.bing.net/th?id=OIP.geZ8Bk8rtvwneC1dhdxg9QHaK4&pid=Api&P=0&h=220"
        alt="movie poster"
        // onClick={() => handleImageClick(images)}
        style={{ width: "150px",height:"235px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px" }}
      />
      <p>Aladdin</p>
      </div>



    
    <div style={{ textAlign: "center" }}>
      <img src="https://cdna.artstation.com/p/assets/images/images/063/096/684/large/william-j-harris-oppenheimer-movie-poster-2023.jpg?1684720979"
        alt="movie poster"
        // onClick={() => handleImageClick(images)}
        style={{ width: "150px",height:"235px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px" }}
      />
      <p>Oppenheimer</p>

      {/* {showDescription && (
        <div style={{position:"absolute",width:"550px",marginLeft:"400px",height:"570px",display:"flex",justifyContent:"center",top:"20%",transform:"translate(-50%-50%)",background:"rgba(174, 168, 168, 0.9)",padding:"20px",borderRadius:"10px",boxShadow:"0px 0px 15px rgba(0,0,0,0.3",textAlign:"center"}}>
       
          <div>
            <h2>Aladdin</h2>
            <img src="https://tse3.mm.bing.net/th?id=OIP.geZ8Bk8rtvwneC1dhdxg9QHaK4&pid=Api&P=0&h=220"/>
            <h3>Description</h3>
            <p>Aladdin is a 2019 American musical fantasy film directed by Guy Ritchie from a screenplay he co-wrote with John August. 
              Produced by Walt Disney Pictures and Rideback, it is a live-action adaptation of Disney's 1992 animated film Aladdin, itself 
              based on "Aladdin and the Wonderful Lamp", a French addition to the Middle Eastern folktale collection One Thousand and One Nights.</p>

           
            <button
              onClick={closeDescription}
              style={{background:"black",color:"white"}}
            >
              Close
            </button>
          </div>
        </div>
      )} */}
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://lwlies.com/wp-content/uploads/2017/11/John-Wick-2-900x0-c-default.jpg"
        alt="movie poster"
        style={{ width: "150px",height:"235px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px" }}
      />
      <p>John Wick</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aaa261108050255.5fb629683b2f1.jpg"
        alt="movie poster"
        style={{ width: "155px",height:"235px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px" }}
      />
      <p>Titanic</p>
      </div>
      <div style={{ textAlign: "center" }}>
      <img src="https://tse2.mm.bing.net/th?id=OIP.uhATMeafutWZunoOy9Z71QHaKB&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{ width: "160px",height:"235px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px" }}
      />
      <p>Bahubali</p>
      </div>
      <div style={{ textAlign: "center" }}>
      <img src="https://tse1.mm.bing.net/th?id=OIP.srnf5DuiIudv7eus9z3cMQHaJ4&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{ width: "160px",height:"235px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px" }}
      />
      <p>Chennai express</p>
      </div>
      <div style={{ textAlign: "center" }}>
      <img  src="https://tse1.mm.bing.net/th?id=OIP.KBdiBpfXcEd4TGxGGOCsKwHaKt&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{ width: "150px",height:"235px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px" }}
      />
      <p>Tamasa</p>
      </div>
      <div style={{ textAlign: "center" }}>
      <img  src="https://tse4.mm.bing.net/th?id=OIP.shcEy2eWqfr_BvZubeRgiQHaKB&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{ width: "150px",height:"232px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px" }}
      />
      <p>Darbar</p>
    </div>
      
      
  </div>
</div>
<h2>Fictional Movies</h2>
<div style={{ display: "flex", flexDirection: "column", alignItems: "center",cursor:"pointer" }}>
  <div style={{ display: "flex", gap: "20px" }}>
    <div style={{ textAlign: "center" }}>
      <img src="https://m.media-amazon.com/images/M/MV5BMDNlNGYxZGQtN2I2Yi00OWQyLWFmOTItOWMzMDU4MmJkYmQ0XkEyXkFqcGc@._V1_.jpg"
        alt="movie poster"
        style={{ width: "150px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px" }}
      />
      <p>24</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQRFwWjp8Mmd5XdThHiSQnlpTRIcMiBBPek5fSJBK3tLlQkLQ1y"
        alt="movie poster"
        style={{ width: "150px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px" }}
      />
      <p>Gifted</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_.jpg"
        alt="movie poster"
        style={{ width: "150px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px" }}
        onClick={incredClick}
      />
      <p>Incredibles</p>
      
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://www.slashfilm.com/wp/wp-content/images/2017-bestposter-justiceleague.jpg"
        alt="movie poster"
        style={{ width: "150px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px" }}
      />
      <p>Justice League</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg"
        alt="movie poster"
        style={{ width: "150px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px" }}
      />
      <p>Avengers</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ8FxjaDWguGUo7hf9ACzNOkXxprKIKA71GvSsqDUTbeTljBkigg1mMORFxaUAfPYpzL0pWnQ"
        alt="movie poster"
        style={{ width: "150px" ,borderRadius:"5px",boxShadow:" 0px 2px 2px 2px"}}
      />
      <p>SpiderMan</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13472534_p_v8_am.jpg"
        alt="movie poster"
        style={{ width: "150px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px" }}
      />
      <p>Barbie</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://tse4.mm.bing.net/th?id=OIP.XBmcgoV1_7KJFKo_1Yb2WwHaKX&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{ width: "150px",height:"228px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px" }}
      />
      <p>Jawaan</p>
    </div>
    


    </div>
    </div>

    <h2>Action Movies</h2>
<div style={{ display: "flex", flexDirection: "column", alignItems: "center",cursor:"pointer" }}>
  <div style={{ display: "flex", gap: "20px" }}>
    <div style={{ textAlign: "center" }}>
      <img src="https://tse1.mm.bing.net/th?id=OIP.KV51O1Y-fM_wR89bGf4YAAHaK-&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{ width: "150px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px" }}
      />
      <p>Taken</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://i.pinimg.com/originals/7b/0a/e2/7b0ae296acf254212fb81f220704abf2.jpg"
        alt="movie poster"
        style={{ width: "150px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px"  }}
      />
      <p>The Last Airbender</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_.jpg"
        alt="movie poster"
        style={{ width: "150px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px"  }}
      />
      <p>Incredibles</p>
      
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://www.slashfilm.com/wp/wp-content/images/2017-bestposter-justiceleague.jpg"
        alt="movie poster"
        style={{ width: "150px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px"  }}
      />
      <p>Justice League</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg"
        alt="movie poster"
        style={{ width: "150px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px"  }}
      />
      <p>Avengers</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ8FxjaDWguGUo7hf9ACzNOkXxprKIKA71GvSsqDUTbeTljBkigg1mMORFxaUAfPYpzL0pWnQ"
        alt="movie poster"
        style={{ width: "150px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px"  }}
      />
      <p>SpiderMan</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13472534_p_v8_am.jpg"
        alt="movie poster"
        style={{ width: "150px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px"  }}
      />
      <p>Barbie</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://tse4.mm.bing.net/th?id=OIP.XBmcgoV1_7KJFKo_1Yb2WwHaKX&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{ width: "150px",height:"228px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px"  }}
      />
      <p>Jawaan</p>
    </div>
    


    </div>
    </div>
    <h2>Trending in India Today</h2>
<div style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
  <div style={{
    display: "flex",
    overflowX: "auto",  
    whiteSpace: "nowrap", 
    gap: "20px",
    padding: "10px",
  }}>
    <div style={{ display: "inline-block", textAlign: "center" }}>
      <img
        src="https://m.media-amazon.com/images/M/MV5BMDNlNGYxZGQtN2I2Yi00OWQyLWFmOTItOWMzMDU4MmJkYmQ0XkEyXkFqcGc@._V1_.jpg"
        alt="movie poster"
        style={{ width: "350px", height: "335px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px" }}
      />
      <p>24</p>
    </div>
    {/* <div style={{ display: "inline-block", textAlign: "center" }}>
      <img
        src="https://tse4.mm.bing.net/th?id=OIP.AoDOP676ZCg-7xrAQEmnJQHaLe&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{ width: "150px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px" }}
      />
      <p>Mersal</p>
    </div> */}
    <div style={{ display: "inline-block", textAlign: "center" }}>
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.7PD7cVpKXxWFzhFKg_qgzgHaJ4&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{ width: "360px", height: "335px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px" }}
      />
      <p>Vikram Vedha</p>
    </div>
    {/* <div style={{ display: "inline-block", textAlign: "center" }}>
      <img
        src="https://tse4.mm.bing.net/th?id=OIP.XBmcgoV1_7KJFKo_1Yb2WwHaKX&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{ width: "450px", height: "328px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px" }}
      />
      <p>Jawaan</p>
    </div> */}
    {/* <div style={{ display: "inline-block", textAlign: "center" }}>
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.HnSyiKz7TWTUpmRdaxVpcgHaK-&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{ width: "450px", height: "335px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px" }}
      />
      <p>Comali</p>
    </div> */}
    <div style={{ display: "inline-block", textAlign: "center" }}>
      <img
        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ8FxjaDWguGUo7hf9ACzNOkXxprKIKA71GvSsqDUTbeTljBkigg1mMORFxaUAfPYpzL0pWnQ"
        alt="movie poster"
        style={{ width: "350px",height: "335px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px" }}
      />
      <p>SpiderMan</p>
    </div>
    {/* <div style={{ display: "inline-block", textAlign: "center" }}>
      <img
        src="https://tse4.mm.bing.net/th?id=OIP.xJIqtsBjYbiy5sDvhjFYxQHaKe&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{ width: "150px", height: "235px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px" }}
      />
      <p>Kabali</p>
    </div> */}
    <div style={{ display: "inline-block", textAlign: "center" }}>
      <img
        src="https://tse4.mm.bing.net/th?id=OIP.niyGLlYHRKX2mbwBUokfiAHaKG&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{ width: "360px", height: "335px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px" }}
      />
      <p>Kana</p>
    </div>
  </div>
</div>

    <h2>Action Movies</h2>
<div style={{ display: "flex", flexDirection: "column", alignItems: "center",cursor:"pointer" }}>
  <div style={{ display: "flex", gap: "20px" }}>
    <div style={{ textAlign: "center" }}>
      <img src="https://tse1.mm.bing.net/th?id=OIP.KV51O1Y-fM_wR89bGf4YAAHaK-&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{ width: "150px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px" }}
      />
      <p>Taken</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://i.pinimg.com/originals/7b/0a/e2/7b0ae296acf254212fb81f220704abf2.jpg"
        alt="movie poster"
        style={{ width: "150px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px"  }}
      />
      <p>The Last Airbender</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_.jpg"
        alt="movie poster"
        style={{ width: "150px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px"  }}
      />
      <p>Incredibles</p>
      
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://www.slashfilm.com/wp/wp-content/images/2017-bestposter-justiceleague.jpg"
        alt="movie poster"
        style={{ width: "150px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px"  }}
      />
      <p>Justice League</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg"
        alt="movie poster"
        style={{ width: "150px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px"  }}
      />
      <p>Avengers</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ8FxjaDWguGUo7hf9ACzNOkXxprKIKA71GvSsqDUTbeTljBkigg1mMORFxaUAfPYpzL0pWnQ"
        alt="movie poster"
        style={{ width: "150px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px"  }}
      />
      <p>SpiderMan</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13472534_p_v8_am.jpg"
        alt="movie poster"
        style={{ width: "150px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px"  }}
      />
      <p>Barbie</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://tse4.mm.bing.net/th?id=OIP.XBmcgoV1_7KJFKo_1Yb2WwHaKX&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{ width: "150px",height:"228px",borderRadius:"5px",boxShadow:" 0px 2px 2px 2px"  }}
      />
      <p>Jawaan</p>
    </div>
    


    </div>
    </div>
    {selectedImage && (
        <div >
       
          <div >
            <h2>{selectedImage.alt}</h2>
            <p>{selectedImage.description}</p>

            <button
              onClick={closeDescription}
              
            >
              Close
            </button>
          </div>
        </div>
      )}
      </div>
      

    </>
  );
}

export default Mainpage;
