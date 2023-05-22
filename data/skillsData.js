import { MdOutlineLanguage, MdCloud, MdOutlinePanTool } from "react-icons/md";
import { FaAward, FaTools, FaToolbox } from "react-icons/fa";
import {TbTestPipe } from "react-icons/tb"

module.exports = [
  {
    id: 1,
    title: "Languages",
    icon: <MdOutlineLanguage />,
    items: [
      {
        id: 1,
        img: "/images/frameworks/html.png",
        alt: "",
      },
      {
        id: 2,
        img: "/images/frameworks/css.png",
        alt: "",
      },
      {
        id: 3,
        img: "/images/frameworks/javascript.png",
        alt: "",
      },
      {
        id: 4,
        img: "/images/frameworks/typescript.png",
        alt: "",
      },
      {
        id: 5,
        img: "/images/frameworks/c-sharp.png",
        alt: "",
      },
      {
        id: 6,
        img: "/images/frameworks/sql.png",
        alt: "",
      },
      {
        id: 7,
        img: "/images/frameworks/python.png",
        alt: "",
      },
    ],
    bg: "#FCF4FF",
  },
  {
    id: 2,
    title: "Frameworks",
    icon: <TbTestPipe />,
    items: [
      {
        id: 1,
        img: "/images/frameworks/nextjs.png",
        alt: "nextjs",
      },
      {
        id: 2,
        img: "/images/frameworks/react.png",
        alt: "react",
      },
      {
        id: 3,
        img: "/images/frameworks/angular.png",
        alt: "angular",
      },
      {
        id: 4,
        img: "/images/frameworks/net.png",
        alt: "net",
      },
      {
        id: 5,
        img: "/images/frameworks/tailwind.png",
        alt: "tailwind",
      },
      {
        id: 6,
        img: "/images/frameworks/prisma.png",
        alt: "prisma",
      },
      {
        id: 7,
        img: "/images/frameworks/nextauth.png",
        alt: "next-auth",
      },
      {
        id: 8,
        img: "/images/frameworks/trpc.svg",
        alt: "trpc",
      },
      {
        id: 9,
        img: "/images/frameworks/blazor.png",
        alt: "blazor",
      },
      {
        id: 10,
        img: "/images/frameworks/maui.png",
        alt: "maui",
      },
    ],
    bg: "#F3FAFF",
  },
  {
    id: 3,
    title: "Tests",
    icon: <FaAward />,
    items: [
      {
        id: 1,
        img: "/images/frameworks/nunit.png",
        alt: "nunit",
      },
      {
        id: 2,
        img: "/images/frameworks/playwright-logo.svg",
        alt: "playwright",
      },
    ],
    bg: "#FEFAF0",
  },
  {
    id: 4,
    title: "Cloud Infrastructure",
    icon: <MdCloud />,
    items: [
      {
        id: 1,
        img: "/images/frameworks/azure.png",
        alt: "azure",
      },
      {
        id: 2,
        img: "/images/frameworks/aws.webp",
        alt: "aws",
      },
      {
        id: 3,
        img: "/images/frameworks/ggcloud.png",
        alt: "ggcloud",
      },
    ],
    bg: "#FFF0F8",
  },
  {
    id: 5,
    title: "Tools",
    icon: <FaTools />,
    items: [
      {
        id: 3,
        img: "/images/frameworks/github.png",
        alt: "github",
      },
      {
        id: 1,
        img: "/images/frameworks/vscode.png",
        alt: "vscode",
      },
      {
        id: 2,
        img: "/images/frameworks/visual-studio-code.png",
        alt: "visual studio code",
      },
    ],
    bg: "#FFF4F4",
  }
];
