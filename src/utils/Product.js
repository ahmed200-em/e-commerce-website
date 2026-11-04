import perfumeImage1 from "../assets/img/perfume-1.png";
import perfumeImage2 from "../assets/img/perfume-2.png";
import perfumeImage3 from "../assets/img/perfume-3.png";
import perfumeImage4 from "../assets/img/perfume-4.png";
import perfumeImage5 from "../assets/img/perfume-5.png";
import perfumeImage6 from "../assets/img/perfume-6.png";

const products = [
  {
    id: 1,
    name: "Rose Velvet Eau de Parfum",
    price: 58,
    category: "Floral",
    image: perfumeImage3,
    available: true,
    quantity: "100 ML",
    description:
      "A soft floral fragrance with delicate rose notes and a warm, elegant finish.",
  },
  {
    id: 2,
    name: "Ambre Noir Eau de Parfum",
    price: 68,
    category: "Amber",
    image: perfumeImage1,
    available: true,
    quantity: "100 ML",
    description:
      "A rich, captivating scent with glowing amber and deep, sensual notes.",
  },
  {
    id: 3,
    name: "Oud Dusk Eau de Parfum",
    price: 74,
    category: "Woody",
    image: perfumeImage2,
    available: false,
    quantity: "100 ML",
    description:
      "A warm, refined oud fragrance with smooth woods and a lingering finish.",
  },
  {
    id: 4,
    name: "Citrus Éclat Eau de Parfum",
    price: 62,
    category: "Citrus",
    image: perfumeImage6,
    available: true,
    quantity: "100 ML",
    description:
      "A bright, uplifting fragrance with sparkling citrus notes and a fresh finish.",
  },
  {
    id: 5,
    name: "Fleur Blanche Eau de Parfum",
    price: 66,
    category: "Floral",
    image: perfumeImage5,
    available: true,
    quantity: "100 ML",
    description:
      "A delicate white-floral scent with a soft, elegant character.",
  },
  {
    id: 6,
    name: "Velvet Musk Eau de Parfum",
    price: 78,
    category: "Musk",
    image: perfumeImage4,
    available: true,
    quantity: "100 ML",
    description: "A warm, smooth musk fragrance with a sensual, lasting trail.",
  },
];

const formatPrice = (amount) => `${amount.toFixed(2)} MAD`;

export { products, formatPrice };
