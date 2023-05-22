import { AiOutlineHome } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";

module.exports = [
  {
    id: 1,
    name: "Home",
    routePath: "#home",
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    name: "Resume",
    routePath: "#resume",
    icon: <CgNotes />,
  },
  {
    id: 3,
    name: "Skills",
    routePath: "#skill",
    icon: <GiSkills />,
  },
  {
    id: 4,
    name: "Works",
    routePath: "#project",
    icon: <FiCodesandbox />,
  },
  {
    id: 5,
    name: "Contact",
    routePath: "#contact",
    icon: <RiContactsBookLine />,
  },
];
