import valkery from "../assets/ValkyrieWingAccel.jpg";
import nightmare from "../assets/NightmareLonginusDestroy.jpg";
import spriffan from "../assets/SpriffanRequiem.jpg";
import aceDragon from "../assets/AceDragonString.jpeg";
import launcher from "../assets/Launcher.jpg";
import geistFafnir from "../assets/GeistFafnir.jpg";
import burstTurbo from "../assets/beybladeBurstTurbo.jpeg";
import drigerMStorm from "../assets/DrigerMetalStorm.jpeg";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
  rating: number;
  amazonUrl: string;
  youtubeUrl: string;
  featured: boolean;
}

// ===== EDIT THIS ARRAY TO ADD/REMOVE PRODUCTS =====
export const products: Product[] = [
  {
    id: "1",
    name: "Valkyrie Wing Accel",
    description:
      "High-speed attack type with incredible burst power. My go-to for aggressive battles.",
    image: valkery,
    tags: ["Attack Type", "Burst Series", "Takara Tomy", "Beyblade"],
    rating: 5,
    amazonUrl: "#",
    youtubeUrl: "https://www.youtube.com/watch?v=31vuWdRI7Ow",
    featured: true,
  },
  {
    id: "2",
    name: "Longinus Destroy",
    description:
      "Left-spin destroyer with heavy metal construction for devastating attacks.",
    image: nightmare,
    tags: ["Attack Type", "Burst Series", "Takara Tomy", "Beyblade"],
    rating: 5,
    amazonUrl: "#",
    youtubeUrl: "#",
    featured: false,
  },
  {
    id: "3",
    name: "Spriggan Requiem",
    description:
      "Versatile dual-spin Beyblade that adapts to any battle situation.",
    image: spriffan,
    tags: ["Balance Type", "Burst Series", "Takara Tomy", "Beyblade"],
    rating: 4,
    amazonUrl: "#",
    youtubeUrl: "https://www.youtube.com/watch?v=Z1xl6ZICsDA",
    featured: true,
  },
  {
    id: "4",
    name: "Ace Dragon Sting",
    description:
      "Balanced stamina-attack hybrid with excellent tip for movement patterns.",
    image: aceDragon,
    tags: ["Stamina Type", "Burst Series", "Hasbro", "Beyblade"],
    rating: 4,
    amazonUrl: "#",
    youtubeUrl: "#",
    featured: false,
  },
  {
    id: "5",
    name: "Geist Fafnir",
    description:
      "Spin-absorbing defense type. Outlasts opponents by stealing their spin power.",
    image: geistFafnir,
    tags: ["Defense Type", "Burst Series", "Takara Tomy", "Beyblade"],
    rating: 5,
    amazonUrl: "#",
    youtubeUrl: "#",
    featured: true,
  },
  {
    id: "6",
    name: "LR String Launcher",
    description:
      "Dual-rotation launcher with powerful string pull. Essential for competitive play.",
    image: launcher,
    tags: ["Launcher", "Takara Tomy"],
    rating: 5,
    amazonUrl: "#",
    youtubeUrl: "#",
    featured: true,
  },
  {
    id: "7",
    name: "Beyblade Burst Stadium",
    description:
      "Official tournament-size stadium with smooth surface for optimal battles.",
    image: burstTurbo,
    tags: ["Stadium", "Hasbro"],
    rating: 4,
    amazonUrl: "#",
    youtubeUrl: "#",
    featured: false,
  },
  {
    id: "8",
    name: "Driger Metal Storm",
    description:
      "Classic Metal Series Beyblade with heavy metal weight disk for endurance.",
    image: drigerMStorm,
    tags: ["Stamina Type", "Metal Series", "Takara Tomy", "Beyblade"],
    rating: 4,
    amazonUrl: "#",
    youtubeUrl: "#",
    featured: false,
  },
];

export const allTags = [
  "Attack Type",
  "Defense Type",
  "Stamina Type",
  "Balance Type",
  "Launcher",
  "Stadium",
  "Takara Tomy",
  "Hasbro",
  "Burst Series",
  "Metal Series",
  "Beyblade",
];

export const filterGroups = [
  {
    label: "Type",
    options: ["Attack Type", "Defense Type", "Stamina Type", "Balance Type"],
  },
  {
    label: "Brand",
    options: ["Takara Tomy", "Hasbro"],
  },
  {
    label: "Category",
    options: ["Beyblade", "Launcher", "Stadium"],
  },
];
