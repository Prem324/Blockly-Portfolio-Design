import ProfileImg from "../assets/Profile-Img.svg";
import SocialIcons from "./SocialIcons";

function Home({ theme }) {
  const isMobile = window.innerWidth < 768;
  const profileW = isMobile ? 140 : 520;
  const textColor = theme === "dark" ? "#fff" : "#737373";
  const subtitleColor = theme === "dark" ? "#e0e0e0" : "#444";
  const hrColor = theme === "dark" ? "#fff" : "#222";
  const emailColor = theme === "dark" ? "#fff" : "#000";
  const emailUnderline = theme === "dark" ? "#fff" : "#000";

  return (
    <div
      className={`position-relative min-vh-100 d-flex justify-content-center align-items-center overflow-hidden ${
        theme === "dark" ? "bg-dark text-white" : "bg-white text-dark"
      }`}
    >
      <div
        style={{
          position: "absolute",
          left: 60,
          top: "60%",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
      >
        <SocialIcons theme={theme} />
      </div>

      <div
        className="d-flex flex-md-row flex-column align-items-start justify-content-center w-100 mt-5 pt-4 gap-5"
        style={{ maxWidth: 1200, minHeight: isMobile ? 500 : 600 }}
      >
        <div
          className="d-md-none  align-items-center justify-content-center position-relative flex-shrink-0"
          style={{ width: isMobile ? 200 : 420, height: isMobile ? 200 : 420 }}
        >
          <img
            src={ProfileImg}
            alt="profile"
            className="position-relative"
            style={{
              width: profileW,
              height: profileW,
              objectFit: "cover",
              zIndex: 2,
            }}
          />
        </div>
        <div
          className="d-flex flex-column align-items-start justify-content-start flex-grow-1 mt-5 "
          style={{ maxWidth: 500 }}
        >
          <div
            className="mb-2 px-4 py-2 fw-bold shadow-figma"
            style={{
              background: "linear-gradient(90deg,#32F6F6 0%,#A6A79F 100%)",
              borderTopLeftRadius: 40,
              borderTopRightRadius: 20,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 20,
              color: "#fff",
              fontSize: isMobile ? 16 : 20,
              boxShadow: "0 4px 16px 0 rgba(0,0,0,0.10)",
            }}
          >
            Hello!
          </div>
          <h1
            className=" mb-2"
            style={{
              fontSize: isMobile ? 28 : 44,
              lineHeight: 1.1,
              color: textColor,
            }}
          >
            I'm{" "}
            <span
              style={{
                fontWeight: 700,
                fontSize: isMobile ? 28 : 44,
                color: "#737373",
                textShadow: "0 2px 8px rgba(0,0,0,0.10)",
                borderBottom: `3px solid ${hrColor}`,
                marginRight: 8,
              }}
            >
              Anish
            </span>
            <span
              style={{
                fontSize: isMobile ? 24 : 40,
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
            className="fs-6 fs-md-5 mb-4"
            style={{ color: subtitleColor, fontWeight: 400 }}
          >
            UI/UX Designer, Front-End Developer & Thinker.
            <br />
            Based in India.
          </p>
          <div className="d-flex gap-4 mt-4 flex-wrap">
            <button
              className="btn fw-bold text-white px-3 py-2 shadow-figma"
              style={{
                background: "linear-gradient(90deg,#DF580C 0%,#FD993D 100%)",
                borderRadius: 12,
                fontSize: isMobile ? 14 : 15,
                boxShadow: "0 4px 16px 0 rgba(223,88,12,0.18)",
                border: "2px solid white",
              }}
            >
              Download CV
            </button>
            <button
              className="btn fw-bold text-white px-3 py-2 shadow-figma"
              style={{
                background: "linear-gradient(90deg,#434343 0%,#000000 100%)",
                borderRadius: 12,
                fontSize: isMobile ? 14 : 15,
                boxShadow: "0 4px 16px 0 rgba(67,67,67,0.18)",
                border: "2px solid white",
              }}
            >
              Get In Touch!
            </button>
          </div>
        </div>
        <div
          className="d-md-flex d-none align-items-center justify-content-center position-relative flex-shrink-0"
          style={{ width: isMobile ? 200 : 420, height: isMobile ? 200 : 420 }}
        >
          <img
            src={ProfileImg}
            alt="profile"
            className="position-relative"
            style={{
              width: profileW,
              height: profileW,
              objectFit: "cover",
              zIndex: 2,
            }}
          />
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: 80,
          top: "68%",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
      >
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
