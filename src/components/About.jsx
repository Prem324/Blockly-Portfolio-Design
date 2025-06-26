import Hand from "../assets/Hand.svg";
import Shape1 from "../assets/Gray-Shape-1.svg";
import Shape2 from "../assets/Yellow-Shape-1.svg";
import Shape3 from "../assets/Yellow-Shape-2.svg";
import Shape4 from "../assets/Gray-Shap-2.svg";
import SocialIcons from "./SocialIcons";

function About({ theme }) {
  const isMobile = window.innerWidth < 768;
  const yellowBlobW = isMobile ? 220 : 200;
  const grayBlobW = isMobile ? 200 : 240;
  const grayBlobH = isMobile ? 260 : 380;
  const HandH = isMobile ? 260 : 420;
  const textColor = theme === "dark" ? "#fff" : "#222";
  const hrColor = theme === "dark" ? "#fff" : "#222";
  const emailColor = theme === "dark" ? "#fff" : "#000";
  const emailUnderline = theme === "dark" ? "#fff" : "#000";

  return (
    <div
      className={`position-relative min-vh-100 d-flex  overflow-hidden ${
        theme === "dark" ? "bg-dark text-white" : "bg-white text-dark"
      }`}
    >
      <img
        src={Hand}
        alt="hand"
        className="position-absolute"
        style={{
          width: 280,
          height: HandH,
          top: 0,
          left: 0,
          zIndex: 2,
        }}
      />
      <img
        src={Shape1}
        alt="gray blob"
        className="position-absolute"
        style={{
          width: grayBlobW,
          height: grayBlobH,
          left: 0,
          top: 0,
          zIndex: 0,
        }}
      />

      <img
        src={Shape2}
        alt="yellow blob"
        className="position-absolute"
        style={{
          position: "absolute",
          right: 0,
          top: 10,
          width: yellowBlobW,
          zIndex: 0,
        }}
      />
      <img
        src={Shape3}
        alt="yellow blob"
        className="position-absolute"
        style={{
          left: "10%",
          top: "65%",
          width: 220,
          zIndex: 0,
        }}
      />
      <img
        src={Shape4}
        alt="gray blob"
        className="position-absolute"
        style={{
          right: "8%",
          top: "60%",
          width: 260,
          zIndex: 0,
        }}
      />

      <SocialIcons
        theme={theme}
        className="position-absolute"
        style={{
          left: 0,
          top: "30%",
          width: 180,
          zIndex: 0,
        }}
      />

      <div
        className="d-flex flex-row "
        style={{
          maxWidth: 1300,
          minHeight: isMobile ? 500 : 700,
          gap: isMobile ? 0 : 60,
          left: 0,
          top: 0,
        }}
      >
        <div
          className="d-flex flex-column align-items-start  flex-grow-1 position-relative"
          style={{
            maxWidth: 870,
            minHeight: isMobile ? 220 : 380,
            marginLeft: "300px",
          }}
        >
          <div
            className="d-flex align-items-baseline mb-3 mt-5"
            style={{
              fontSize: isMobile ? "1.5rem" : "2.6rem",
              fontWeight: 700,
              color: textColor,
            }}
          >
            <span
              style={{
                fontSize: isMobile ? "2.1rem" : "3.2rem",
                fontWeight: 700,
                color: textColor,
                marginRight: 4,
                lineHeight: 1,
              }}
            >
              T
            </span>
            <span
              style={{
                fontSize: isMobile ? "1.2rem" : "2.2rem",
                fontWeight: 600,
                color: textColor,
                marginLeft: 0,
              }}
            >
              his is it.{" "}
              <span
                style={{
                  fontSize: isMobile ? "1rem" : "1.5rem",
                  color: textColor,
                }}
              >
                ;)
              </span>
            </span>
            <hr
              className="border-2 d-inline"
              style={{ width: "560px", marginLeft: "80px", color: hrColor }}
            />
          </div>

          <div className=" text-start fw-light" style={{ color: textColor }}>
            Anish Kr. Sinha is an Indian{" "}
            <b className="fw-medium">
              UI/UX Designer &amp; Front End Developer
            </b>{" "}
            with a passion for designing beautiful and functional user
            experiences. Typically, he's <b className="fw-medium">Driven</b>{" "}
            &amp; permanently <b className="fw-medium">Curious</b>
            . He's obsessed with designing things and even more obsessed with
            designing cool &amp; clean stuff for the web and mobile. He has been
            in the business of creating since he hung his first painting on the
            wall when he was 11.
            <br /> He holds a{" "}
            <b className="fw-medium">
              bachelor degree in Computer Applications
            </b>
            . During his graduation, he has been actively involved in the web
            design community for the last 3 years. He has designed websites for
            small businesses, events, nonprofits and more. Currently he's based
            in Bihar, <b className="fw-medium">India</b>
            . Where he's working as an independent creative.
            <br />
            <br />
            His interests, however, extend beyond the web and he loves helping
            people with branding and print design. He even loves designing{" "}
            <b className="fw-medium">3D floor plan</b>
            .<br />
            <br />
            When he's not designing, he's probably hanging out with his
            girlfriend, watching series, sketching or messing around on
            something inspired by YouTube tutorials.
          </div>
          <hr
            className="w-25 border-2 text-center"
            style={{ color: hrColor, marginLeft: "300px", marginTop: "60px" }}
          />
          <div
            style={{
              position: "absolute",
              right: isMobile ? -50 : -120,
              top: "60%",
              transform: "translateY(-50%)",
              zIndex: 10,
            }}
          >
            <div className="d-none d-md-flex flex-column align-items-center ml-5 mt-5">
              <span className="email-bar" style={{ color: emailColor }}>
                sinhaanishkumar@outlook.com
              </span>
              <div
                className="email-underline"
                style={{
                  width: 16,
                  height: 2,
                  background: emailUnderline,
                  marginTop: 4,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
