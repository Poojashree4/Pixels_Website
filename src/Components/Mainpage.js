import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch, faSignOutAlt, faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


function Mainpage() {
  const [movie, setMovie] = useState("");
  const [movies, setMovies] = useState([]);
  const [darkmode, setDarkmode] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/movies");
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleImageClick = (images) => {
    setSelectedImage(images);
  };

  const handleClick = () => {
    navigate("/login");
  };

  const home = () => {
    navigate("/mainpage");
  };

  const incredClick = () => {
    navigate("/incredibles");
  };
  const twentyClick = () => {
    navigate("/Twentyfour");
  };
  const titanClick = () => {
    navigate("/titanic");
  };
  const aladdinClick = () => {
    navigate("/aladdin");
  };

  const ChangeMovie = (e) => {
    const selectedMovie = e.target.value;
    setMovie(selectedMovie);
    localStorage.setItem("selectedMovie", selectedMovie);
  };

  useEffect(() => {
    const savedMovie = localStorage.getItem("selectedMovie");
    if (savedMovie) {
      setMovie(savedMovie);
    }
  }, []);

  const toggle = () => {
    setDarkmode((prevMode) => !prevMode);
  };

  const selectedMovie = movies.find((m) => m.title === movie);

  const divStyle = {
    transform: isHovered ? "scale(1.06)" : "scale(1)",
    transition: "transform 0.3s ease",
  };

  

   
  

  return (
    <>
    <div>
    <style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 0",
          height: "70px",
          background: darkmode
            ? "linear-gradient(0deg, rgb(102, 108, 108) , rgba(19,19,20,1))"
            : "rgb(30, 113, 191)",
        }}
      >
        <a href="https://www.pngall.com/wp-content/uploads/13/Movie-Hollywood-PNG-File.png" target="_blank" rel="noopener noreferrer">
          <img
            src="https://www.pngall.com/wp-content/uploads/13/Movie-Hollywood-PNG-File.png"
            alt="Website Logo"
            style={{ width: "120px", height: "50px" }}
          />
        </a>
        <h1 style={{ textAlign: "center", marginTop: "23px",marginLeft:"10px", fontSize: "50px", color: darkmode ? "rgb(12, 225, 197)" : "rgb(9, 10, 10)" }}>
          PIXELS
        </h1>
        <a style={{ marginLeft: "auto", marginRight: "50px", color: darkmode ? "#f5f5f5" : "#121212" }}>
          <FontAwesomeIcon icon={faHome} size="2x" />
          <p style={{ marginTop: "3px", cursor: "pointer" }} onClick={home}>Home</p>
        </a>
        <a style={{ marginRight: "40px", color: darkmode ? "#f5f5f5" : "#121212" }}>
          <FontAwesomeIcon icon={faSearch} size="2x" style={{ marginRight: "20px" }} />
          <p style={{ marginTop: "3px", cursor: "pointer" }}>Search</p>
        </a>
        <a style={{ marginRight: "30px", color: darkmode ? "#f5f5f5" : "#121212" }}>
          <FontAwesomeIcon icon={faSignOutAlt} size="2x" style={{ marginRight: "20px" }} />
          <p style={{ marginTop: "3px", cursor: "pointer" }} onClick={handleClick}>Logout</p>
        </a>
        {/* <a style={{ marginRight: "30px", color: darkmode ? "#f5f5f5" : "#121212" }}>
          <FontAwesomeIcon icon={faUser} size="2x" />
          <p style={{ marginTop: "3px", cursor: "pointer" }}>Profile</p>
        </a>  */}
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
          overflowX: "hidden",
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
            marginLeft: "30px",
            display: "flex",
            color: darkmode ? "#f5f5f5" : "#121212",
          }}
        >
          <div style={{ marginRight: "40px", fontSize: "23px" }}>
            <h2 style={{ paddingRight: "10px" }}>Select your Movie:</h2>
            <div style={{ paddingRight: "10px" }}>
              <input
                style={{
                  padding: "15px",
                  borderRadius: "7px",
                  backgroundColor: darkmode ? "#f5f5f5" : "#121212",
                  color: darkmode ? "#121212" : "#f5f5f5",
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
              {movies.map((movie, index) => (
                <option key={index} value={movie.title}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>

          {selectedMovie && (
            <div
              style={divStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              
            <img
              src={selectedMovie.poster}
              alt={selectedMovie.title}
              style={{
                width: "1020px",
                height: "400px",
                display: "block",
                margin: "0 auto",
                marginLeft: "8px",
                marginTop: "15px",
                objectFit: "cover",
                transform: "scale(1)",
                transition: "transform 0.4s ease-in-out",
                boxShadow: " 0px 3px 3px 3px",
                borderRadius: "4px"
              }}
            />
            </div>
          )}
        </div>
        <br></br>
        <h2>Movies</h2>
<style>
  {`
    div::-webkit-scrollbar {
      display: none;
    }
    .movie-poster-container {display: flex; gap: 20px;
      cursor: pointer;
      transition: transform 450ms ease;
      overflow-y: hidden;
      overflow-x: scroll;
      object-fit: contain;
    }
    .movie-poster {
      width: 150px;
      height: 235px;
      border-radius: 5px;
      box-shadow: 0px 2px 2px 2px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .movie-poster:hover {
      transform: scale(1.1);
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
    }
  `}
</style>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", overflowY: "hidden", overflowX: "scroll", display: "grid", marginInline: "auto", WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}>
  <div className="movie-poster-container">
    <div style={{ textAlign: "center" }}>
      <img src="https://tse3.mm.bing.net/th?id=OIP.geZ8Bk8rtvwneC1dhdxg9QHaK4&pid=Api&P=0&h=220"
        alt="movie poster"
        className="movie-poster"
        style={{ width: "150px",height:"230px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px" ,marginTop:"10px"}}
        onClick={aladdinClick}
      />
      <p>Aladdin</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://cdna.artstation.com/p/assets/images/images/063/096/684/large/william-j-harris-oppenheimer-movie-poster-2023.jpg?1684720979"
        alt="movie poster"
        className="movie-poster"
        style={{ width: "150px",height:"230px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px" ,marginTop:"10px"}}
      />
      <p>Oppenheimer</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://lwlies.com/wp-content/uploads/2017/11/John-Wick-2-900x0-c-default.jpg"
        alt="movie poster"
        className="movie-poster"
        style={{ width: "150px",height:"230px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px" ,marginTop:"10px"}}
      />
      <p>John Wick</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aaa261108050255.5fb629683b2f1.jpg"
        alt="movie poster"
        className="movie-poster"
        style={{ width: "150px",height:"230px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px" ,marginTop:"10px"}}
        onClick={titanClick}
      />
      <p>Titanic</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://tse2.mm.bing.net/th?id=OIP.uhATMeafutWZunoOy9Z71QHaKB&pid=Api&P=0&h=220"
        alt="movie poster"
        className="movie-poster"
        style={{ width: "150px",height:"230px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px" ,marginTop:"10px"}}
      />
      <p>Bahubali</p>
    </div>
     <div style={{ textAlign: "center" }}>
      <img src="https://i0.wp.com/batman-news.com/wp-content/uploads/2023/04/The-Flash-Movie-Poster-01.jpeg?fit=1638%2C2048&quality=80&strip=info&ssl=1"
        alt="movie poster"
        style={{ width: "150px",height:"230px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px" ,marginTop:"10px"}}
      />
      <p>Flash</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2021/12/24184116/270001082_504147950839996_4607138000625730371_n.jpg"
        alt="movie poster"
        style={{ width: "150px", height: "228px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px",marginTop:"10px" }}
      />
      <p>Minnal Murli</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://tse1.mm.bing.net/th?id=OIP.srnf5DuiIudv7eus9z3cMQHaJ4&pid=Api&P=0&h=220"
        alt="movie poster"
        className="movie-poster"
        style={{ width: "150px",height:"230px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px" ,marginTop:"10px"}}
      />
      
      <p>Chennai Express</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://tse1.mm.bing.net/th?id=OIP.KBdiBpfXcEd4TGxGGOCsKwHaKt&pid=Api&P=0&h=220"
        alt="movie poster"
        className="movie-poster"
        style={{ width: "150px",height:"230px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px" ,marginTop:"10px"}}
      />
      <p>Tamasa</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://tse4.mm.bing.net/th?id=OIP.shcEy2eWqfr_BvZubeRgiQHaKB&pid=Api&P=0&h=220"
        alt="movie poster"
        className="movie-poster"
        style={{ width: "150px",height:"230px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px" ,marginTop:"10px"}}
      />
      <p>Darbar</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="https://assets.website-files.com/5bf1c2ccde18dd05bd430ccc/5bf1c32c017c21412909f273_598191033fd40e0001129b77_horror-blog-conjuring.jpeg"
        alt="movie poster"
        style={{
          width: "150px",
          height: "235px",
          borderRadius: "5px",
          boxShadow: "0px 2px 2px 2px",
          marginTop:"10px",
        }}
      />
    <p>The Conjuring</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="http://3.bp.blogspot.com/-H57vRpipBhs/T92h_GLMFAI/AAAAAAAAAAc/zLYxoSfXv9w/s1600/avatar_movie_poster_final_01.jpg"
        alt="movie poster"
        className="movie-poster"
        style={{ width: "150px",height:"230px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px" ,marginTop:"10px"}}
      />
      <p>Avatar</p>
    </div>
  </div>
</div>

        <h2>Recommended for You</h2>
<style>
  {`
    div::-webkit-scrollbar {
      display: none;
    }
    .movie-poster:hover {
      transform: scale(1.1);
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
  `}
</style>

<div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    display: "grid",
    marginInline: "auto",
    WebkitOverflowScrolling: "touch",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    
    paddingTop:"10px"
  }}
>
  <div
    style={{
      display: "flex",
      gap: "20px",
      transition: "transforms 450ms",
      overflowY: "hidden",
      overflowX: "scroll",
      
    }}
  >
    <div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="https://m.media-amazon.com/images/M/MV5BMDNlNGYxZGQtN2I2Yi00OWQyLWFmOTItOWMzMDU4MmJkYmQ0XkEyXkFqcGc@._V1_.jpg"
        alt="movie poster"
        style={{
          width: "150px",
          borderRadius: "5px",
          boxShadow: "0px 2px 2px 2px",
          marginTop:"10px"
        }}
        onClick={twentyClick}
      />
      <p>24</p>
    </div>

    <div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQRFwWjp8Mmd5XdThHiSQnlpTRIcMiBBPek5fSJBK3tLlQkLQ1y"
        alt="movie poster"
        style={{
          width: "150px",
          borderRadius: "5px",
          boxShadow: "0px 2px 2px 2px",
          marginTop:"10px"
        }}
      />
      <p>Gifted</p>
    </div>

    <div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_.jpg"
        alt="movie poster"
        style={{
          width: "150px",
          borderRadius: "5px",
          boxShadow: "0px 2px 2px 2px",
          marginTop:"10px"
        }}
        onClick={incredClick}
      />
      <p>Incredibles</p>
    </div>


    <div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="https://tse4.mm.bing.net/th?id=OIP.XBmcgoV1_7KJFKo_1Yb2WwHaKX&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{
          width: "150px",
          height: "228px",
          borderRadius: "5px",
          boxShadow: "0px 2px 2px 2px",
          marginTop:"10px",
        }}
      />
      <p>Jawaan</p>
    </div>

    <div style={{ textAlign: "center" }}>
      <div>
        <img
          className="movie-poster"
          src="https://cdna.artstation.com/p/assets/images/images/063/096/684/large/william-j-harris-oppenheimer-movie-poster-2023.jpg?1684720979"
          alt="movie poster"
          style={{
            width: "150px",
            height: "235px",
            borderRadius: "5px",
            boxShadow: "0px 2px 2px 2px",
            marginTop:"10px"
          }}
        />
        <p>Oppenheimer</p>
      </div>
    </div>

    <div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="https://lwlies.com/wp-content/uploads/2017/11/John-Wick-2-900x0-c-default.jpg"
        alt="movie poster"
        style={{
          width: "150px",
          height: "235px",
          borderRadius: "5px",
          boxShadow: "0px 2px 2px 2px",
          marginTop:"10px",
        }}
      />
      <p>John Wick</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aaa261108050255.5fb629683b2f1.jpg"
        alt="movie poster"
        style={{
          width: "150px",
          height: "235px",
          borderRadius: "5px",
          boxShadow: "0px 2px 2px 2px",
          marginTop:"10px",
        }}
      />
      <p>Titanic</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="https://assets.website-files.com/5bf1c2ccde18dd05bd430ccc/5bf1c32c017c21412909f273_598191033fd40e0001129b77_horror-blog-conjuring.jpeg"
        alt="movie poster"
        style={{
          width: "150px",
          height: "235px",
          borderRadius: "5px",
          boxShadow: "0px 2px 2px 2px",
          marginTop:"10px",
        }}
      />
    <p>The Conjuring</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="https://assets.mubicdn.net/images/notebook/post_images/36485/images-w1400.jpg?1670783534"
        alt="movie poster"
        style={{
          width: "150px",
          height: "235px",
          borderRadius: "5px",
          boxShadow: "0px 2px 2px 2px",
          marginTop:"10px",
        }}
      />
      <p>Till</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="https://parade.com/.image/t_share/MTkwNTgxMjk2NzkxODg5MDIx/parasite2.jpg"
        alt="movie poster"
        style={{
          width: "150px",
          height: "235px",
          borderRadius: "5px",
          boxShadow: "0px 2px 2px 2px",
          marginTop:"10px",
        }}
      />
      <p>Parasite</p>
    </div><div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="http://uiconstock.com/wp-content/uploads/2014/05/noah-2014-movie-poster.jpg"
        alt="movie poster"
        style={{
          width: "150px",
          height: "235px",
          borderRadius: "5px",
          boxShadow: "0px 2px 2px 2px",
          marginTop:"10px",
        }}
      />
      <p>Noah</p>
    </div>
    

  </div>
</div>


<h2>Super-Hero Movies</h2>
<style>
  {`
    div::-webkit-scrollbar {
      display: none;
    }
    div img:hover {
      transform: scale(1.1);
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
      transition: transform 0.3s ease-in-out;
    }
  `}
</style>
<div style={{
  display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer", overflowY: "hidden", overflowX: "scroll",
  transition: "transforms 450ms", display: "grid", marginInline: "auto", WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none"
}}>
  <div style={{ display: "flex", gap: "20px" }}>
    <div style={{ textAlign: "center" }}>
      <img src="https://tse1.mm.bing.net/th?id=OIP.KV51O1Y-fM_wR89bGf4YAAHaK-&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{ width: "150px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px",marginTop:"10px" }}
      />
      <p>Taken</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://i.pinimg.com/originals/7b/0a/e2/7b0ae296acf254212fb81f220704abf2.jpg"
        alt="movie poster"
        style={{ width: "150px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px",marginTop:"10px" }}
      />
      <p>The Last Airbender</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_.jpg"
        alt="movie poster"
        style={{ width: "150px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px",marginTop:"10px" }}
      />
      <p>Incredibles</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://www.slashfilm.com/wp/wp-content/images/2017-bestposter-justiceleague.jpg"
        alt="movie poster"
        style={{ width: "150px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px",marginTop:"10px" }}
        onClick={incredClick}
      />
      <p>Justice League</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg"
        alt="movie poster"
        style={{ width: "150px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px",marginTop:"10px" }}
      />
      <p>Avengers</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ8FxjaDWguGUo7hf9ACzNOkXxprKIKA71GvSsqDUTbeTljBkigg1mMORFxaUAfPYpzL0pWnQ"
        alt="movie poster"
        style={{ width: "150px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px",marginTop:"10px" }}
      />
      <p>SpiderMan</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://i0.wp.com/batman-news.com/wp-content/uploads/2023/04/The-Flash-Movie-Poster-01.jpeg?fit=1638%2C2048&quality=80&strip=info&ssl=1"
        alt="movie poster"
        style={{ width: "150px",height:"230px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px" ,marginTop:"10px"}}
      />
      <p>Flash</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2021/12/24184116/270001082_504147950839996_4607138000625730371_n.jpg"
        alt="movie poster"
        style={{ width: "150px", height: "228px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px",marginTop:"10px" }}
      />
      <p>Minnal Murli</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <div>
        <img src="https://cdna.artstation.com/p/assets/images/images/063/096/684/large/william-j-harris-oppenheimer-movie-poster-2023.jpg?1684720979"
          alt="movie poster"
          style={{ width: "150px", height: "235px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px",marginTop:"10px" }}
        />
        <p>Oppenheimer</p>
      </div>
    </div>
    <div style={{ textAlign: "center" }}>
      <div>
        <img src="https://lwlies.com/wp-content/uploads/2017/11/John-Wick-2-900x0-c-default.jpg"
          alt="movie poster"
          style={{ width: "150px", height: "235px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px",marginTop:"10px" }}
        />
        <p>John Wick</p>
      </div>
    </div>
    <div style={{ textAlign: "center" }}>
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aaa261108050255.5fb629683b2f1.jpg"
        alt="movie poster"
        style={{ width: "155px", height: "235px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px",marginTop:"10px" }}
      />
      <p>Titanic</p>
    </div>
  </div>
</div>

    <h2>Trending in India Today</h2>
<style>
  {`
    div::-webkit-scrollbar {
      display: none;
    }
    .poster img:hover {
      transform: scale(1.1);
      transition: transform 0.3s ease-in-out;
    }
  `}
</style>
<div style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer", overflowY: "hidden", overflowX: "scroll", transition: "transforms 450ms", display: "grid", marginInline: "auto", WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}>
  <div style={{ display: "flex", overflowX: "auto", whiteSpace: "nowrap", gap: "30px",marginTop:"10px", padding: "10px", transition: "transforms 450ms", overflowY: "hidden", overflowX: "scroll" }}>
    <div className="poster" style={{ display: "inline-block", textAlign: "center" }}>
      <img
        src="https://m.media-amazon.com/images/M/MV5BMDNlNGYxZGQtN2I2Yi00OWQyLWFmOTItOWMzMDU4MmJkYmQ0XkEyXkFqcGc@._V1_.jpg"
        alt="movie poster"
        style={{ width: "350px", height: "335px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px" }}
        onClick={twentyClick}
      />
      <p>24</p>
    </div>
    <div className="poster" style={{ display: "inline-block", textAlign: "center" }}>
      <img
        src="http://3.bp.blogspot.com/-H57vRpipBhs/T92h_GLMFAI/AAAAAAAAAAc/zLYxoSfXv9w/s1600/avatar_movie_poster_final_01.jpg"
        alt="movie poster"
        style={{ width: "350px", height: "335px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px" }}
      />
      <p>Avatar</p>
    </div>
    <div className="poster" style={{ display: "inline-block", textAlign: "center" }}>
      <img
        src="https://c4.wallpaperflare.com/wallpaper/726/46/535/movies-hollywood-movies-wallpaper-preview.jpg"
        alt="movie poster"
        style={{ width: "360px", height: "335px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px" }}
      />
      <p>Maze Runner</p>
    </div>
    <div className="poster" style={{ display: "inline-block", textAlign: "center" }}>
      <img
        src="https://www.kerala9.com/wp-content/uploads/2021/11/Minnal-Murali-696x870.jpg"
        alt="movie poster"
        style={{ width: "450px", height: "328px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px" }}
      />
      <p>Minnal Murli</p>
    </div>
    <div className="poster" style={{ display: "inline-block", textAlign: "center" }}>
      <img
        src="http://graphicdesignjunction.com/wp-content/uploads/2012/05/large/movie-poster-20.jpg"
        alt="movie poster"
        style={{ width: "450px", height: "335px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px" }}
      />
      <p>BattleShip</p>
    </div>
    <div className="poster" style={{ display: "inline-block", textAlign: "center" }}>
      <img
        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ8FxjaDWguGUo7hf9ACzNOkXxprKIKA71GvSsqDUTbeTljBkigg1mMORFxaUAfPYpzL0pWnQ"
        alt="movie poster"
        style={{ width: "350px", height: "335px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px" }}
      />
      <p>SpiderMan</p>
    </div>
    <div className="poster" style={{ display: "inline-block", textAlign: "center" }}>
      <img
        src="https://www.filmibeat.com/img/2023/09/leotamilposter1-1695213997.jpg"
        alt="movie poster"
        style={{ width: "350px", height: "335px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px" }}
      />
      <p>Leo</p>
    </div>
    <div className="poster" style={{ display: "inline-block", textAlign: "center" }}>
      <img
        src="https://1.bp.blogspot.com/-wmry4J-VLvY/VJxHJSsigrI/AAAAAAAAfxc/Bb6dhYZ4UOE/s1600/i_tamil_movie_poster.jpg"
        alt="movie poster"
        style={{ width: "360px", height: "335px", borderRadius: "5px", boxShadow: "0px 2px 2px 2px" }}
      />
      <p>I</p>
    </div>
  </div>
</div>

<h2>Horror Movies</h2>
<style>
  {`
    div::-webkit-scrollbar {
      display: none;
    }
    .movie-poster:hover {
      transform: scale(1.1);
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
  `}
</style>

<div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    display: "grid",
    marginInline: "auto",
    WebkitOverflowScrolling: "touch",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    
    paddingTop:"10px"
  }}
>
  <div
    style={{
      display: "flex",
      gap: "20px",
      transition: "transforms 450ms",
      overflowY: "hidden",
      overflowX: "scroll",
      
    }}
  >
    <div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="https://www.scrolldroll.com/wp-content/uploads/2023/04/kanchana-best-tamil-horror-movies-768x945.jpg"
        alt="movie poster"
        style={{
          width: "150px",
          borderRadius: "5px",
          boxShadow: "0px 2px 2px 2px",
          marginTop:"10px"
        }}
        
      />
      <p>Kanchana</p>
    </div>

    <div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="https://assets.website-files.com/5bf1c2ccde18dd05bd430ccc/5bf1c32b1faec7406406a17f_59819104534ede00017fa6e6_horror-blog-exorcist.jpeg"
        alt="movie poster"
        style={{
          width: "150px",
          borderRadius: "5px",
          boxShadow: "0px 2px 2px 2px",
          marginTop:"10px"
        }}
      />
      <p>The Exoricst</p>
    </div>

    <div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="https://i.pinimg.com/originals/8e/80/b1/8e80b1b06a3a4345d670c88d366b1755.jpg"
        alt="movie poster"
        style={{
          width: "150px",
          borderRadius: "5px",
          boxShadow: "0px 2px 2px 2px",
          marginTop:"10px"
        }}
        
      />
      <p>IT</p>
    </div>


    <div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="https://marketplace.canva.com/EAFVCFkAg3w/1/0/566w/canva-red-and-black-horror-movie-poster-PhcXFkdnaQc.jpg"
        alt="movie poster"
        style={{
          width: "150px",
          height: "228px",
          borderRadius: "5px",
          boxShadow: "0px 2px 2px 2px",
          marginTop:"10px",
        }}
      />
      <p>Dark</p>
    </div>

    <div style={{ textAlign: "center" }}>
      <div>
        <img
          className="movie-poster"
          src="https://images6.fanpop.com/image/photos/44700000/M3GAN-2023-Poster-horror-movies-44715448-900-1425.jpg"
          alt="movie poster"
          style={{ width: "150px",height: "235px",borderRadius: "5px",boxShadow: "0px 2px 2px 2px",marginTop:"10px"
          }}
        />
        <p>Megan</p>
      </div>
    </div>

    <div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="https://preview.redd.it/mwzsmxngft531.jpg?auto=webp&s=1d197902a6862c78c982d8914c4551c0ddd37542"
        alt="movie poster"
        style={{width: "150px",height: "235px",borderRadius: "5px",boxShadow: "0px 2px 2px 2px", marginTop:"10px",
        }}
      />
      <p>Annabelle</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="https://i.pinimg.com/originals/ce/3d/68/ce3d6811da999a716a4f76ed795fa832.jpg"
        alt="movie poster"
        style={{
          width: "150px",
          height: "235px",
          borderRadius: "5px",
          boxShadow: "0px 2px 2px 2px",
          marginTop:"10px",
        }}
      />
      <p>The Nun</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="https://assets.website-files.com/5bf1c2ccde18dd05bd430ccc/5bf1c32c017c21412909f273_598191033fd40e0001129b77_horror-blog-conjuring.jpeg"
        alt="movie poster"
        style={{
          width: "150px",
          height: "235px",
          borderRadius: "5px",
          boxShadow: "0px 2px 2px 2px",
          marginTop:"10px",
        }}
      />
    <p>The Conjuring</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="https://tse2.mm.bing.net/th?id=OIP.crgRwUJ7ErGD78sc464i4AHaLP&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{
          width: "150px",
          height: "235px",
          borderRadius: "5px",
          boxShadow: "0px 2px 2px 2px",
          marginTop:"10px",
        }}
      />
      <p>Offering</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="https://tse3.mm.bing.net/th?id=OIP.jaVLBG9Ykaj_O_-8epQb2AHaLP&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{
          width: "150px",
          height: "235px",
          borderRadius: "5px",
          boxShadow: "0px 2px 2px 2px",
          marginTop:"10px",
        }}
      />
      <p>
        Cabin Fever
      </p>
    </div><div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="https://tse2.mm.bing.net/th?id=OIP.Usx2zE3F0Gbuifsw5wLlrgHaK-&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{
          width: "150px",
          height: "235px",
          borderRadius: "5px",
          boxShadow: "0px 2px 2px 2px",
          marginTop:"10px",
        }}
      />
      <p>Boogeyman</p>
    </div>
    

  </div>
</div>

<h2>Tamil Movies</h2>
<style>
  {`
    div::-webkit-scrollbar {
      display: none;
    }
  `}
</style>
<div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    display: "grid",
    marginInline: "auto",
    gap: "var(--size-3)",
    gridAutoFlow: "columns",
    gridAutoColumns: "21%",
    overscrollBehaviorInline: "contain",
    overflowX: "auto",
    background: "var(--surface-2)",
    padding: "var(--size-3)",
    paddingTop: "10px",
    objectFit: "cover",
    inlineSize: "100%",
    boxShadow: "var(--shadow-2)",
    scrollSnapType: "inline mandatory",
    scrollSnapAlign: "start",
    scrollPaddingInline: "var(--size-2,1rem)",
    WebkitOverflowScrolling: "touch",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  }}
>
  <div style={{ display: "flex", gap: "20px", background: "var(--surface-2)", }}>
    
    {[
      { src: "https://m.media-amazon.com/images/M/MV5BOTdkNGY5YjItOWU5OC00NTA0LTkxMGEtZDRlNWZmMmI2ZGZmXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg", title: "Action" },
      { src: "https://wallpapercave.com/wp/wp4500405.jpg", title: "96" },
      { src: "https://i.pinimg.com/originals/c4/9d/25/c49d253a1aaab1973641081d35d741e4.jpg", title: "Petta" },
      { src: "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_FMjpg_UX1000_.jpg", title: "Vikram" },
      { src: "https://tse4.mm.bing.net/th?id=OIP.x17q0CsxocXUnqV-X0kemQHaJ4&pid=Api&P=0&h=220", title: "Madharasapattinam" },
      { src: "https://www.iwmbuzz.com/wp-content/uploads/2022/06/rajinikanth-and-his-iconic-movies-and-dialogues-to-binge-watch-once-in-a-while-5.jpg", title: "Thalapathy" },
      { src: "http://onlookersmedia.in/wp-content/uploads/2019/11/karthi-jyothika-jeethu-joseph-thambi-movie-first-look-poster-1.jpg", title: "Thambi" },
      { src: "https://m.media-amazon.com/images/M/MV5BZWFhODA2ZDItZDBhNy00MGQ3LTkwZWItMzg0MzhlNmQzMzAxXkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_.jpg", title: "Parking" },
      { src: "http://1.bp.blogspot.com/_eewr1b1LpYA/THXZta_QejI/AAAAAAAACLs/vMhLNcpwIxY/s1600/Boss_Engira_Baskaran_Audio_Launch_01.jpg", title: "Boss Engira Baskaran" },
      { src: "https://static.moviecrow.com/gallery/20230123/211198-Dada.jpg", title: "Dada" },
      { src: "https://1.bp.blogspot.com/-Bx4tXIGRGsk/UejPgRUAPUI/AAAAAAAADe0/p65DSRY-4sM/s1600/[www.tamilmovieposters.com]+new+posters+(21).jpg", title: "Singam 2" },
    ].map((movie, index) => (
      <div key={index} style={{ textAlign: "center" }}>
        <img
          src={movie.src}
          alt="movie poster"
          style={{
            width: "150px",
            height:"230px",
            borderRadius: "5px",
            boxShadow: "0px 2px 2px 2px",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0px 2px 2px 2px";
          }}
        />
        <p>{movie.title}</p>
      </div>
    ))}
  </div>
</div>

    <h2>Korean Movies</h2>
<style>
  {`
    div::-webkit-scrollbar {
      display: none;
    }
    .movie-poster:hover {
      transform: scale(1.1);
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
  `}
</style>

<div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    display: "grid",
    marginInline: "auto",
    WebkitOverflowScrolling: "touch",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    
    paddingTop:"10px"
  }}
>
  <div
    style={{
      display: "flex",
      gap: "20px",
      transition: "transforms 450ms",
      overflowY: "hidden",
      overflowX: "scroll",
      
    }}
  >
    <div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="https://m.media-amazon.com/images/M/MV5BN2NmNzVhODItNjA3OC00ZjkwLTlkOGItODVkYWM2N2FkNDg2XkEyXkFqcGdeQXVyMTMzNzIyNDc1._V1_FMjpg_UX1000_.jpg"
        alt="movie poster"
        style={{
          width: "150px",
          borderRadius: "5px",
          boxShadow: "0px 2px 2px 2px",
          marginTop:"10px"
        }}
      
      />
      <p>Celebrity</p>
    </div>

    <div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="http://asianwiki.com/images/8/84/Champion_(Korean_Movie)-P1.jpg"
        alt="movie poster"
        style={{
          width: "150px",
          borderRadius: "5px",
          boxShadow: "0px 2px 2px 2px",
          marginTop:"10px"
        }}
      />
      <p>Champion_</p>
    </div>

    <div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="https://photos.hancinema.net/photos/fullsizephoto739681.jpg"
        alt="movie poster"
        style={{
          width: "150px",
          borderRadius: "5px",
          boxShadow: "0px 2px 2px 2px",
          marginTop:"10px"
        }}
        onClick={incredClick}
      />
      <p>Train to Busan</p>
    </div>


    <div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="https://jadwalnonton.com/data/upload/movies/2024/exhuma-cnp.jpg"
        alt="movie poster"
        style={{
          width: "150px",
          height: "228px",
          borderRadius: "5px",
          boxShadow: "0px 2px 2px 2px",
          marginTop:"10px",
        }}
      />
      <p>Exhuma</p>
    </div>

    <div style={{ textAlign: "center" }}>
      <div>
        <img
          className="movie-poster"
          src="https://i.pinimg.com/originals/27/96/bd/2796bdf1624e55ea810e9dbd7a030b46.jpg"
          alt="movie poster"
          style={{
            width: "150px",
            height: "235px",
            borderRadius: "5px",
            boxShadow: "0px 2px 2px 2px",
            marginTop:"10px"
          }}
        />
        <p>The Divine Fury</p>
      </div>
    </div>

    <div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="https://tse2.mm.bing.net/th?id=OIP.2jOUPv6l9fuXUEROOITDqgHaK4&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{
          width: "150px",
          height: "235px",
          borderRadius: "5px",
          boxShadow: "0px 2px 2px 2px",
          marginTop:"10px",
        }}
      />
      <p>Goblin</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="https://i.pinimg.com/736x/7a/81/f1/7a81f19f3ed5ecc8cbedf1d205eaf742.jpg"
        alt="movie poster"
        style={{
          width: "150px",
          height: "235px",
          borderRadius: "5px",
          boxShadow: "0px 2px 2px 2px",
          marginTop:"10px",
        }}
      />
      <p>Its Okay To Be Not Okay</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="https://tse3.mm.bing.net/th?id=OIP.LzFWEB1xToNHAYzr6ILuNgHaI1&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{
          width: "150px",
          height: "235px",
          borderRadius: "5px",
          boxShadow: "0px 2px 2px 2px",
          marginTop:"10px",
        }}
      />
    <p>The King</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="https://tse2.mm.bing.net/th?id=OIP.4n4RmrFS5PiHq83N_GiQfwHaNK&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{
          width: "150px",
          height: "235px",
          borderRadius: "5px",
          boxShadow: "0px 2px 2px 2px",
          marginTop:"10px",
        }}
      />
      <p>Once Upon a Time</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="https://parade.com/.image/t_share/MTkwNTgxMjk2NzkxODg5MDIx/parasite2.jpg"
        alt="movie poster"
        style={{
          width: "150px",
          height: "235px",
          borderRadius: "5px",
          boxShadow: "0px 2px 2px 2px",
          marginTop:"10px",
        }}
      />
      <p>Parasite</p>
    </div><div style={{ textAlign: "center" }}>
      <img
        className="movie-poster"
        src="https://tse2.mm.bing.net/th?id=OIP.GUggIFeUwVVdFyS3GctxAwHaKj&pid=Api&P=0&h=220"
        alt="movie poster"
        style={{
          width: "150px",
          height: "235px",
          borderRadius: "5px",
          boxShadow: "0px 2px 2px 2px",
          marginTop:"10px",
        }}
      />
      <p>Pawn</p>
    </div>
    

  </div>
</div>



      </div>

      </div>
      
    </>
   
  );
}


export default Mainpage;