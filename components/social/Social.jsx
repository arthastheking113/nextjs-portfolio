import {
  FaDribbble,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaGithub
} from "react-icons/fa";

const Social = () => {
  const socialContent = [
    {
      id: 1,
      link: "https://github.com/arthastheking113",
      icon: <FaGithub />,
      iconClass: "",
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/duy-lan-le-445262163/",
      icon: <FaLinkedinIn />,
      iconClass: "text-[#0072b1]",
    },
  ];

  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
        >
          <span className={`socialbtn ${item.iconClass}`}>{item.icon}</span>
        </a>
      ))}
    </>
  );
};

export default Social;
