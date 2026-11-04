import perfumeImage1 from "../assets/img/perfume-1.png";
import perfumeImage2 from "../assets/img/perfume-2.png";
import perfumeImage3 from "../assets/img/perfume-3.png";

const products = [
  {
    id: 1,
    name: "Rose Velvet Eau de Parfum",
    price: 58,
    category: "Floral",
    image: perfumeImage1,
    available: true,
    quantity: 100 + " ML",
    description:
      "A soft floral fragrance with delicate rose notes and a warm, elegant finish.",
  },
  {
    id: 2,
    name: "Ambre Noir Eau de Parfum",
    price: 68,
    category: "Amber",
    image: perfumeImage2,
    available: true,
    quantity: 100 + " ML",
    description:
      "A rich, captivating scent with glowing amber and deep, sensual notes.",
  },
  {
    id: 3,
    name: "Oud Dusk Eau de Parfum",
    price: 74,
    category: "Woody",
    image: perfumeImage3,
    available: true,
    quantity: 100 + " ML",
    description:
      "A warm, refined oud fragrance with smooth woods and a lingering finish.",
  },
  {
    id: 4,
    name: "Rose Velvet Travel Spray",
    price: 28,
    category: "Travel Size",
    image: perfumeImage1,
    available: true,
    quantity: 100 + " ML",
    description:
      "Your favorite soft rose scent in a compact spray made for fragrance on the go.",
  },
  {
    id: 5,
    name: "Ambre Noir Discovery Set",
    price: 36,
    category: "Discovery Set",
    image: perfumeImage2,
    available: false,
    quantity: 100 + " ML",
    description:
      "A small-format set for discovering the warm, rich character of Ambre Noir.",
  },
  {
    id: 6,
    name: "Oud Dusk Intense",
    price: 82,
    category: "Woody",
    image: perfumeImage3,
    available: true,
    quantity: 100 + " ML",
    description:
      "A deeper take on Oud Dusk, blending warm woods with a bold, lasting trail.",
  },
];

const formatPrice = (amount) => `${amount.toFixed(2)} MAD`;

export { products, formatPrice };
