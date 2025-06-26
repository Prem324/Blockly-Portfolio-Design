import Hand from "../assets/Hand.svg";
import Shape1 from "../assets/Gray-Shape-1.svg";
import Shape2 from "../assets/Yellow-Shape-1.svg";
import Shape3 from "../assets/Yellow-Shape-2.svg";
import Shape4 from "../assets/Gray-Shap-2.svg";
import SocialIcons from "./SocialIcons";

function About({ theme }) {
  const textColor = theme === "dark" ? "#fff" : "#222";
  const hrColor = theme === "dark" ? "#fff" : "#222";
  const emailColor = theme === "dark" ? "#fff" : "#000";
  const emailUnderline = theme === "dark" ? "#fff" : "#000";

  return (
    <div
      className={`about-container position-relative min-vh-100 d-flex overflow-hidden ${
        theme === "dark" ? "bg-dark text-white" : "bg-white text-dark"
      }`}
    >
      <img
        src={Hand}
        alt="hand"
        className="hand-img position-absolute d-none d-lg-block"
        style={{ zIndex: 2 }}
      />
      <img
        src={Shape1}
        alt="gray blob"
        className="shape-1 position-absolute"
        style={{ zIndex: 0 }}
      />
      <img
        src={Shape2}
        alt="yellow blob"
        className="shape-2 position-absolute"
        style={{ zIndex: 0 }}
      />
      <img
        src={Shape3}
        alt="yellow blob"
        className="shape-3 position-absolute"
        style={{ zIndex: 0 }}
      />
      <img
        src={Shape4}
        alt="gray blob"
        className="shape-4 position-absolute"
        style={{ zIndex: 0 }}
      />

      <div className="social-icons-wrapper-about ms-5">
        <SocialIcons
          theme={theme}
          className="position-absolute"
          style={{ zIndex: 0 }}
        />
      </div>

      <div className="about-content-container d-flex flex-row">
        <div className="about-text-wrapper d-flex flex-column align-items-start flex-grow-1 position-relative">
          <div className="about-title-container d-flex align-items-baseline mb-3 mt-5">
            <span
              className="about-title-large"
              style={{
                color: textColor,
                marginRight: 4,
                lineHeight: 1,
              }}
            >
              T
            </span>
            <span
              className="about-title-small"
              style={{
                color: textColor,
                marginLeft: 0,
              }}
            >
              his is it.{" "}
              <span className="about-title-smiley" style={{ color: textColor }}>
                ;)
              </span>
            </span>
            <hr
              className="about-hr border-2 d-inline"
              style={{ color: hrColor }}
            />
          </div>

          <div
            className="about-description text-start fw-light"
            style={{ color: textColor }}
          >
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
            className="about-footer-hr w-25 border-2 text-center"
            style={{ color: hrColor }}
          />
          <div className="email-wrapper-about">
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
