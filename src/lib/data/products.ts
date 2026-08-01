export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  href: string;
}

export const products: Product[] = [
  {
    id: "lekha",
    name: "LekhaJokha",
    category: "Productivity App",
    image: "/images/products/lekhajokha/lekha.png",
    href: "https://www.ribionic.com/products/lekhajokha",
  },
  {
    id: "neev",
    name: "Ribionic's ERP System",
    category: "Under Development...",
    image: "/images/products/neev/neev.png",
    href: "https://www.ribionic.com/products",
  },
];