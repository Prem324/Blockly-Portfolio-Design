import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg";
import Twitter from "../assets/Twitter.svg";
import GitHub from "../assets/GitHub.svg";
import Linkedin from "../assets/LinkedIn.svg";
import Telegram from "../assets/Telegram.svg";
import Koo from "../assets/Koo.svg";

const icons = [
  { src: Facebook, alt: "facebook", link: "#" },
  { src: Instagram, alt: "instagram", link: "#" },
  { src: Twitter, alt: "twitter", link: "#" },
  { src: GitHub, alt: "github", link: "#" },
  { src: Linkedin, alt: "linkedin", link: "#" },
  { src: Telegram, alt: "telegram", link: "#" },
  { src: Koo, alt: "koo", link: "#" },
];

function SocialIcons({ className = "", style = {}, theme = "light" }) {
  const isDark = theme === "dark";
  return (
    <div
      className={`d-none d-md-flex flex-column align-items-center justify-content-end ${className}`}
      style={{ minHeight: 320, ...style }}
    >
      {icons.map((icon) => (
        <a
          key={icon.alt}
          href={icon.link}
          onClick={(e) => e.preventDefault()}
          target="_blank"
          rel="noopener noreferrer"
          className="d-flex align-items-end justify-content-center"
          style={{
            width: 40,
            height: 40,
          }}
        >
          <img
            src={icon.src}
            alt={icon.alt}
            style={{
              width: 25,
              height: 25,
              filter: isDark ? "invert(1)" : "none",
            }}
          />
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;
