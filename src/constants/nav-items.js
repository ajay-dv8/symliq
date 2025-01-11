import { HiAtSymbol, HiCodeBracket, HiFolderOpen, HiPhone, HiRectangleGroup } from "react-icons/hi2";

export const navItems = [ 
  {
    title: "About",
    href: "#about",
    icon: <HiAtSymbol className=" "/>
  },
  {
    title: "Services",
    href: "#service",
    icon: <HiCodeBracket className=" "/>
  },
  {
    title: "case study",
    href: "#work",
    icon: <HiFolderOpen className=" "/>
  },
  {
    title: "Our Process",
    href: "#process",
    icon: <HiRectangleGroup className=" "/>
  },
  {
    title: "Contact",
    href: "#contact",
    icon: <HiPhone className=" " />
  },
]

// bg-gray-300 text-gray-300 fill-gray-300 