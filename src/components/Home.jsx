import ProfileImg from "../assets/Profile-Img.svg";
import SocialIcons from "./SocialIcons";

function Home({ theme }) {
  const textColor = theme === "dark" ? "#fff" : "#737373";
  const subtitleColor = theme === "dark" ? "#e0e0e0" : "#444";
  const hrColor = theme === "dark" ? "#fff" : "#222";
  const emailColor = theme === "dark" ? "#fff" : "#000";
  const emailUnderline = theme === "dark" ? "#fff" : "#000";

  return (
    <div
      className={`home-container position-relative min-vh-lg-100 d-flex justify-content-center align-items-center overflow-hidden p-3 p-lg-0 ${
        theme === "dark" ? "bg-dark text-white" : "bg-white text-dark"
      }`}
    >
      <div className="social-icons-wrapper-home">
        <SocialIcons theme={theme} />
      </div>

      <div className="home-content-container d-flex flex-column flex-md-row align-items-start justify-content-center w-100 mt-5 pt-4 gap-0 gap-lg-5">
        <div className="profile-img-container-mobile d-md-none align-items-center justify-content-center position-relative flex-shrink-0">
          <img
            src={ProfileImg}
            alt="profile"
            className="profile-img position-relative w-50"
            style={{
              objectFit: "cover",
              zIndex: 2,
            }}
          />
        </div>
        <div className="intro-text-container d-flex flex-column align-items-start justify-content-start flex-grow-1 mt-5">
          <div
            className="hello-badge mb-2 px-4 py-2 fw-bold shadow-figma"
            style={{
              background: "linear-gradient(90deg,#32F6F6 0%,#A6A79F 100%)",
              borderTopLeftRadius: 40,
              borderTopRightRadius: 20,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 20,
              color: "#fff",
              boxShadow: "0 4px 16px 0 rgba(0,0,0,0.10)",
            }}
          >
            Hello!
          </div>
          <h1 className="title-heading mb-2" style={{ color: textColor }}>
            I'm{" "}
            <span
              className="title-name"
              style={{
                color: "#737373",
                textShadow: "0 2px 8px rgba(0,0,0,0.10)",
                borderBottom: `3px solid ${hrColor}`,
                marginRight: 8,
              }}
            >
              Anish
            </span>
            <span
              className="wave-emoji"
              style={{
                marginLeft: 4,
                verticalAlign: "middle",
                filter: "drop-shadow(0 2px 4px rgba(255,200,0,0.3))",
              }}
              role="img"
              aria-label="wave"
            >
              👋
            </span>
          </h1>
          <p
            className="subtitle fs-6 fs-md-5 mb-4"
            style={{ color: subtitleColor, fontWeight: 400 }}
          >
            UI/UX Designer, Front-End Developer & Thinker.
            <br />
            Based in India.
          </p>
          <div className="buttons-container d-flex gap-4 mt-4 flex-wrap">
            <button
              className="btn fw-bold text-white px-3 py-2 shadow-figma cta-button"
              style={{
                background: "linear-gradient(90deg,#DF580C 0%,#FD993D 100%)",
                borderRadius: 12,
                boxShadow: "0 4px 16px 0 rgba(223,88,12,0.18)",
                border: "2px solid white",
              }}
            >
              Download CV
            </button>
            <button
              className="btn fw-bold text-white px-3 py-2 shadow-figma cta-button"
              style={{
                background: "linear-gradient(90deg,#434343 0%,#000000 100%)",
                borderRadius: 12,
                boxShadow: "0 4px 16px 0 rgba(67,67,67,0.18)",
                border: "2px solid white",
              }}
            >
              Get In Touch!
            </button>
          </div>
        </div>
        <div className="profile-img-container-desktop d-none d-md-flex align-items-center justify-content-center position-relative flex-shrink-0">
          <img
            src={ProfileImg}
            alt="profile"
            className="profile-img position-relative"
            style={{
              objectFit: "cover",
              zIndex: 2,
            }}
          />
        </div>
      </div>

      <div className="email-wrapper-home">
        <div className="d-none d-md-flex flex-column align-items-center">
          <span className="email-bar" style={{ color: emailColor }}>
            sinhaanishkumar@outlook.com
          </span>
          <div
            className="email-underline"
            style={{ background: emailUnderline }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
