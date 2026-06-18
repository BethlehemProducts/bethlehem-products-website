export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  tagline: string;
  description: string;
  image: string;
  origin: string;
  certifications: string[];
  specs: ProductSpec[];
  packagingSizes: string[];
  applications: string[];
  featured?: boolean;
  new?: boolean;
}

export interface ProductCategory {
  id: string;
  label: string;
  description: string;
  count: number;
}

export const categories: ProductCategory[] = [
  {
    id: "all",
    label: "All Products",
    description: "Bethlehem Products Portfolio",
    count: 6,
  },
  {
    id: "kml",
    label: "KML Coconut Oil",
    description: "Premium Coconut Oil Products",
    count: 4,
  },
  {
    id: "coconut-products",
    label: "Coconut Products",
    description: "Powders and Specialty Ingredients",
    count: 2,
  },
];

export const products: Product[] = [
  {
    id: "kml-500ml",
    name: "KML Coconut Oil 500mL",
    category: "kml",
    subcategory: "Coconut Oil",
    tagline: "Pure Coconut Oil",
    description:
      "Premium quality coconut oil imported from India and distributed across Canada.",
    image: "/images/products/kml-500ml.jpg",
    origin: "India",
    certifications: ["CFIA Compliant"],
    specs: [
      {
        label: "Shelf Life",
        value: "18 Months",
      },
      {
        label: "Packaging",
        value: "24 Bottles per Carton",
      },
    ],
    packagingSizes: ["500mL Bottle"],
    applications: [
      "Cooking",
      "Baking",
      "Traditional Foods",
    ],
    featured: true,
  },

  {
    id: "kml-1l",
    name: "KML Coconut Oil 1L",
    category: "kml",
    subcategory: "Coconut Oil",
    tagline: "Pure Coconut Oil",
    description:
      "Premium quality coconut oil imported from India and distributed across Canada.",
    image: "/images/products/kml-1l.jpg",
    origin: "India",
    certifications: ["CFIA Compliant"],
    specs: [
      {
        label: "Shelf Life",
        value: "18 Months",
      },
      {
        label: "Packaging",
        value: "15 Bottles per Carton",
      },
    ],
    packagingSizes: ["1L Bottle"],
    applications: [
      "Cooking",
      "Baking",
      "Traditional Foods",
    ],
    featured: true,
  },

  {
    id: "kml-2l",
    name: "KML Coconut Oil 2L",
    category: "kml",
    subcategory: "Coconut Oil",
    tagline: "Pure Coconut Oil",
    description:
      "Premium quality coconut oil imported from India and distributed across Canada.",
    image: "/images/products/kml-2l.jpg",
    origin: "India",
    certifications: ["CFIA Compliant"],
    specs: [
      {
        label: "Shelf Life",
        value: "18 Months",
      },
      {
        label: "Packaging",
        value: "6 Bottles per Carton",
      },
    ],
    packagingSizes: ["2L Bottle"],
    applications: [
      "Cooking",
      "Baking",
      "Traditional Foods",
    ],
    featured: true,
  },

  {
    id: "virgin-coconut-oil",
    name: "Virgin Coconut Oil",
    category: "kml",
    subcategory: "Premium Coconut Oil",
    tagline: "Cold Pressed Premium Quality",
    description:
      "Premium virgin coconut oil sourced from carefully selected coconuts and processed to preserve its natural aroma and nutritional value.",
    image: "/images/products/virgin-coconut-oil.jpg",
    origin: "India",
    certifications: ["CFIA Compliant"],
    specs: [
      {
        label: "Shelf Life",
        value: "24 Months",
      },
      {
        label: "Storage",
        value: "Store in a cool dry place",
      },
    ],
    packagingSizes: [
      "250mL",
      "500mL",
      "1L",
    ],
    applications: [
      "Cooking",
      "Health & Wellness",
      "Traditional Foods",
    ],
    featured: true,
  },

  {
    id: "coconut-milk-powder",
    name: "Coconut Milk Powder",
    category: "coconut-products",
    subcategory: "Powder",
    tagline: "Premium Coconut Ingredient",
    description:
      "High-quality coconut milk powder suitable for beverages, desserts, food manufacturing, and commercial applications.",
    image: "/images/products/coconut-milk-powder.jpg",
    origin: "India",
    certifications: ["CFIA Compliant"],
    specs: [
      {
        label: "Shelf Life",
        value: "24 Months",
      },
      {
        label: "Packaging",
        value: "Commercial Food Service Packs",
      },
    ],
    packagingSizes: [
      "1kg",
      "5kg",
      "25kg",
    ],
    applications: [
      "Beverages",
      "Desserts",
      "Food Manufacturing",
    ],
    featured: true,
  },

  {
    id: "desiccated-coconut",
    name: "Desiccated Coconut Powder",
    category: "coconut-products",
    subcategory: "Powder",
    tagline: "Premium Coconut Ingredient",
    description:
      "Premium desiccated coconut powder manufactured from carefully selected coconuts and suitable for bakery, confectionery, and food processing industries.",
    image: "/images/products/desiccated-coconut.jpg",
    origin: "India",
    certifications: ["CFIA Compliant"],
    specs: [
      {
        label: "Shelf Life",
        value: "12 Months",
      },
      {
        label: "Packaging",
        value: "Commercial Food Service Packs",
      },
    ],
    packagingSizes: [
      "1kg",
      "5kg",
      "25kg",
    ],
    applications: [
      "Bakery",
      "Confectionery",
      "Food Manufacturing",
    ],
  },
];

