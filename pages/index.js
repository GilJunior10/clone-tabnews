function Home() {
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

      <audio autoPlay loop>
        <source
          src="https://www.mariomayhem.com/downloads/super_mario_world_music/super_mario_world_overworld_theme.mp3"
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
}

export default Home;
