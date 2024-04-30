import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

export const footMenu = [
  {
    id: 1,
    title: "Assistance",
    menu: [
      {
        id: 1,
        link: "Concierge Services",
        path: "/",
      },
      {
        id: 2,
        link: "Order Tracking",
        path: "/",
      },
      {
        id: 3,
        link: "Order Modification",
        path: "/",
      },
      {
        id: 4,
        link: "Returns & Exchanges",
        path: "/",
      },
      {
        id: 5,
        link: "Warranty Coverage",
        path: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Policies",
    menu: [
      {
        id: 1,
        link: "Return & Exchange Policy",
        path: "/",
      },
      {
        id: 2,
        link: "Security Protocols",
        path: "/",
      },
      {
        id: 3,
        link: "Site Map",
        path: "/",
      },
      {
        id: 4,
        link: "Privacy Policy",
        path: "/",
      },
      {
        id: 5,
        link: "Terms & Conditions",
        path: "/",
      },
    ],
  },
  {
    id: 3,
    title: "Company",
    menu: [
      {
        id: 1,
        link: "About Us",
        path: "/",
      },
      {
        id: 2,
        link: "Contact Us",
        path: "/",
      },
      {
        id: 3,
        link: "Service Centers",
        path: "/",
      },
      {
        id: 4,
        link: "Career Opportunities",
        path: "/",
      },
      {
        id: 5,
        link: "Partnerships",
        path: "/",
      },
    ],
  },
  {
    id: 4,
    title: "Elite Cars",
    menu: [
      {
        id: 1,
        link: "Latest Models",
        path: "/",
      },
      {
        id: 2,
        link: "Performance Specs",
        path: "/",
      },
      {
        id: 3,
        link: "Customization Options",
        path: "/",
      },
      {
        id: 4,
        link: "Ownership Benefits",
        path: "/",
      },
      {
        id: 5,
        link: "Exclusive Deals",
        path: "/",
      },
    ],
  },
];


export const footSocial = [
    {
        id: 1,
        icon: FaFacebookF(),
        path: "/",
    },
    {
        id: 2,
        icon: FaXTwitter(),
        path: "/",
    },
    {
        id: 3,
        icon: FaInstagram(),
        path: "/",
    },
    {
        id: 4,
        icon: FaLinkedinIn (),
        path: "/",
    },
    {
        id: 5,
        icon: FaYoutube (),
        path: "/",
    },
];
