import { MdOutlineLanguage, MdCloud, MdOutlinePanTool } from "react-icons/md";
import { FaAward, FaTools, FaToolbox } from "react-icons/fa";
import {TbTestPipe } from "react-icons/tb"

module.exports = [
  {
    title: "Languages",
    icon: <MdOutlineLanguage />,
    items: [
      {
        img: "/images/frameworks/html.png",
        alt: "",
      },
      {
        img: "/images/frameworks/css.png",
        alt: "",
      },
      {
        img: "/images/frameworks/javascript.png",
        alt: "",
      },
      {
        img: "/images/frameworks/typescript.png",
        alt: "",
      },
      {
        img: "/images/frameworks/c-sharp.png",
        alt: "",
      },
      {
        img: "/images/frameworks/sql.png",
        alt: "",
      },
      {
        img: "/images/frameworks/python.png",
        alt: "",
      },
    ],
    bg: "#FCF4FF",
  },
  {
    title: "Frameworks",
    icon: <TbTestPipe />,
    items: [
      {
        img: "/images/frameworks/nextjs.png",
        alt: "nextjs",
      },
      {
        img: "/images/frameworks/react.png",
        alt: "react",
      },
      {
        img: "/images/frameworks/angular.png",
        alt: "angular",
      },
      {
        img: "/images/frameworks/net.png",
        alt: "net",
      },
      {
        img: "/images/frameworks/tailwind.png",
        alt: "tailwind",
      },
      {
        img: "/images/frameworks/prisma.png",
        alt: "prisma",
      },
      {
        img: "/images/frameworks/nextauth.png",
        alt: "next-auth",
      },
      {
        img: "/images/frameworks/trpc.svg",
        alt: "trpc",
      },
      {
        img: "/images/frameworks/blazor.png",
        alt: "blazor",
      },
      {
        img: "/images/frameworks/maui.png",
        alt: "maui",
      },
    ],
    bg: "#F3FAFF",
  },
  {
    title: "Tests",
    icon: <FaAward />,
    items: [
      {
        img: "/images/frameworks/nunit.png",
        alt: "nunit",
      },
      {
        img: "/images/frameworks/playwright-logo.svg",
        alt: "playwright",
      },
    ],
    bg: "#FEFAF0",
  },
  {
    title: "Cloud Infrastructure",
    icon: <MdCloud />,
    items: [
      {
        img: "/images/frameworks/azure.png",
        alt: "azure",
      },
      {
        img: "/images/frameworks/aws.webp",
        alt: "aws",
      },
      {
        img: "/images/frameworks/ggcloud.png",
        alt: "ggcloud",
      },
    ],
    bg: "#FFF0F8",
  },
  {
    title: "Tools",
    icon: <FaTools />,
    items: [
      {
        img: "/images/frameworks/github.png",
        alt: "github",
      },
      {
        img: "/images/frameworks/vscode.png",
        alt: "vscode",
      },
      {
        img: "/images/frameworks/visual-studio-code.png",
        alt: "visual studio code",
      },
    ],
    bg: "#FFF4F4",
  }
];
