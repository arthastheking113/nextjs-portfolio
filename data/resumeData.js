import { MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";
import { FaAward } from "react-icons/fa";

module.exports = [
  {
    id: 1,
    title: "Education",
    icon: <MdOutlineBusinessCenter />,
    items: [
      {
        id: 3,
        date: "2018-2020",
        title: "Computer Science",
        place: "Southeast Community College",
        bg: "#FFF4F4",
      },
    ],
  },
  {
    id: 2,
    title: "Experience",
    icon: <MdOutlineSchool />,
    items: [
      {
        id: 1,
        date: "JANUARY 2022 - PRESENT",
        title: "Software Engineer 2",
        place: "Maxim Healthcare Staffing",
        bg: "#F2F4FF",
      },
      {
        id: 2,
        date: "JUNE 2021 - DECEMBER 2021",
        title: ".Net Developer",
        place: "BrightKey",
        bg: "#EEF5FA",
      },

      {
        id: 3,
        date: "JANUARY 2021 - MAY 2021",
        title: "Full Stack .NET Developer",
        place: "Coder Foundry",
        bg: "#F2F4FF",
      },

      {
        id: 4,
        date: "MARCH 2019 - DECEMBER 2020",
        title: "Full Stack .NET/Web Developer",
        place: "DLSolution",
        bg: "#EEF5FA",
      },
    ],
  },
  {
    id: 3,
    title: "Awards",
    icon: <FaAward />,
    items: [
      {
        id: 1,
        date: "2015-2017",
        title: "  Graphic Designer",
        place: "Web Graphy, Los Angeles, CA",
        bg: "#FCF4FF",
      },

      {
        id: 2,
        date: "2014 - 2015",
        title: "Jr. Web Developer",
        place: "Creative Gigs.",
        bg: "#FCF9F2",
      },

      {
        id: 3,
        date: "2015-2017",
        title: "Best Freelancer",
        place: "Fiver & Upwork Level 2 & Top Rated",
        bg: "#FCF4FF",
      },
    ],
  },
];
