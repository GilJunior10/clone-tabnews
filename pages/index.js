import { useState, useRef } from "react";
import marioSong from "../src/mario.mp3";

function Home() {
  const [tocando, setTocando] = useState(false);
  const audioRef = useRef(null);

  function toggleMusica() {
    if (tocando) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setTocando(!tocando);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>
        Em Processo de construção...{" "}
        <span role="img" aria-label="construção">
          🚧
        </span>
      </h1>
      <img
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjhrMGxnemkxZ253eTN5aTVjdHI5aWVyam8wNXVjd3Aza2R1b2N4ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qWx5C3iSfwa6Q/giphy.gif"
        alt="Construindo o nosso site"
        style={{ width: "300px", borderRadius: "12px", marginTop: "20px" }}
      />

      <audio ref={audioRef} loop src={marioSong} />

      <button
        onClick={toggleMusica}
        style={{
          marginTop: "24px",
          padding: "12px 28px",
          fontSize: "18px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#e74c3c",
          color: "white",
          cursor: "pointer",
        }}
      >
        {tocando ? "⏸ Pausar música" : "▶️ Tocar música do Mario"}
      </button>
    </div>
  );
}

export default Home;
