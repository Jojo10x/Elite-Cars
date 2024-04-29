import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

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
];


export const footSocial = [
    {
        id: 1,
        icon: FaFacebookF(),
        path: "/",
    },
    {
        id: 2,
        icon: FaTwitter(),
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
