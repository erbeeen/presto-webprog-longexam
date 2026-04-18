import jacketImg from "../assets/img/merch/nu-hoodie.webp";
import capImg from "../assets/img/merch/nu-cap.webp";
import sweatshirtImg from "../assets/img/merch/nu-sweatshirt.webp";
import shirt1Img from "../assets/img/merch/nu-shirt1.webp";
import shirt2Img from "../assets/img/merch/nu-shirt2.webp";
import keychainImg from "../assets/img/merch/nu-keychain.webp";
import lanyardImg from "../assets/img/merch/NULanyard.webp";
import scarfImg from "../assets/img/merch/ScarfNU1.webp";

const products = [
  {
    name: "nu-jacket",
    title: "NU Hoodie",
    category: "Apparel",
    price: "PHP 2250",
    stock: "In stock",
    image: jacketImg,
    content: [
      "Constructed with heavy-weight fleece and a spacious kangaroo pocket.",
      "Includes adjustable drawstrings and a double-lined hood for extra warmth.",
      "Designed with a relaxed silhouette perfect for lounging or chilly commutes.",
    ],
  },
  {
    name: "nu-cap",
    title: "NU Cap",
    category: "Accessory",
    price: "PHP 249",
    stock: "In stock",
    image: capImg,
    content: [
      "A classic six-panel construction featuring a pre-curved brim and breathable eyelets.",
      "Equipped with an adjustable snapback closure for a customized, secure fit.",
      "Made from durable cotton twill to withstand daily wear while protecting from the sun.",
    ],
  },
  {
    name: "nu-sweatshirt",
    title: "NU Sweatshirt",
    category: "Apparel",
    price: "PHP 599",
    stock: "Low stock",
    image: sweatshirtImg,
    content: [
      "A classic crewneck style made from soft-touch French terry fabric.",
      "Ribbed cuffs and waistband provide a secure, comfortable fit.",
      "The versatile mid-weight material makes it an ideal year-round layering piece.",
    ],
  },
  {
    name: "nu-shirt1",
    title: "NU Volleyball Shirt",
    category: "Apparel",
    price: "PHP 400",
    stock: "In stock",
    image: shirt1Img,
    content: [
      "A lightweight, breathable cotton blend designed for all-day comfort.",
      "Features a modern tailored fit that works for both casual outings and layered looks.",
      "Durable stitching ensures it maintains its shape after every wash.",
    ],
  },
  {
    name: "nu-shirt2",
    title: "NU Shirt",
    category: "Apparel",
    price: "PHP 399",
    stock: "Preorder",
    image: shirt2Img,
    content: [
      "A lightweight, breathable cotton blend designed for all-day comfort.",
      "Features a modern tailored fit that works for both casual outings and layered looks.",
      "Durable stitching ensures it maintains its shape after every wash.",
    ],
  },
  {
    name: "nu-keychain",
    title: "NU Keychain",
    category: "Accessory",
    price: "PHP 149",
    stock: "In stock",
    image: keychainImg,
    content: [
      "A small organizer set for pens, clips, cables, cards, and other desk essentials.",
      "The modular pieces can be arranged based on your study area or dorm table.",
      "Keeps daily tools visible without adding clutter.",
    ],
  },
  {
    name: "nu-lanyard",
    title: "ID Lanyard",
    category: "Accessory",
    price: "PHP 179",
    stock: "In stock",
    image: lanyardImg,
    content: [
      "A durable lanyard and card holder set for IDs, access cards, and small passes.",
      "The clip is easy to detach when scanning or presenting credentials.",
      "Simple enough for daily use and sturdy enough for a full semester.",
    ],
  },
  {
    name: "nu-scarf",
    title: "NU Scarf",
    category: "Apparel",
    price: "PHP 499",
    stock: "In stock",
    image: scarfImg,
    content: [
      "An oversized knit wrap made from premium, itch-free acrylic yarn.",
      "The long length allows for multiple styling options and maximum wind protection.",
      "Finished with classic fringed edges for a timeless seasonal aesthetic.",
    ],
  },
];

export default products;
