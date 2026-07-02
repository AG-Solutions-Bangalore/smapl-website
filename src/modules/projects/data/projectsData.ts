export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  structure: string;
  tonnage: string;
  client: string;
  images: string[];
}

export const categories = [
  "All",
  "Railways",
  "Infrastructure",
  "Commercial",
];

export const projects: Project[] = [
  {
    id: "hebbal-flyover",
    name: "Hebbal Junction Flyover, Bengaluru",
    category: "Railways",
    client: "BDA / SWR via PJB Engineers",
    description: "Construction of uni-directional underpass along ORR and widening of existing flyover with new flyover along NH-7 at Hebbal Junction.",
    structure: "Composite Steel Girders",
    tonnage: "~620 MT",
    images: [
      "/images/Projects/hebbal flyover ROB/hebbal flyover ROB (1).webp",
      "/images/Projects/hebbal flyover ROB/hebbal flyover ROB (2).webp",
      "/images/Projects/hebbal flyover ROB/hebbal flyover ROB (3).webp",
    ],
  },
  {
    id: "prestige-lakeshore",
    name: "Prestige Lakeshore Drive, Bellandur",
    category: "Infrastructure",
    client: "PBPPL via PJB Engineers",
    description: "Elevated road with composite steel girders for Prestige Lakeshore Drive development in Bellandur, Bengaluru.",
    structure: "Composite Steel Girders",
    tonnage: "~626 MT",
    images: [
      "/images/Projects/Prestige bellandur steel flyover/Prestige bellandur steel flyover (1).webp",
      "/images/Projects/Prestige bellandur steel flyover/Prestige bellandur steel flyover (2).webp",
      "/images/Projects/Prestige bellandur steel flyover/Prestige bellandur steel flyover (3).webp",
      "/images/Projects/Prestige bellandur steel flyover/Prestige bellandur steel flyover (4).webp",
      "/images/Projects/Prestige bellandur steel flyover/Prestige bellandur steel flyover (5).webp",
      "/images/Projects/Prestige bellandur steel flyover/Prestige bellandur steel flyover (6).webp",
      "/images/Projects/Prestige bellandur steel flyover/Prestige bellandur steel flyover (7).webp",
      "/images/Projects/Prestige bellandur steel flyover/Prestige bellandur steel flyover (8).webp",
      "/images/Projects/Prestige bellandur steel flyover/Prestige bellandur steel flyover (9).webp",
      "/images/Projects/Prestige bellandur steel flyover/Prestige bellandur steel flyover (10).webp",
      "/images/Projects/Prestige bellandur steel flyover/Prestige bellandur steel flyover (11).webp",
      "/images/Projects/Prestige bellandur steel flyover/Prestige bellandur steel flyover (12).webp",
      "/images/Projects/Prestige bellandur steel flyover/Prestige bellandur steel flyover (13).webp",
      "/images/Projects/Prestige bellandur steel flyover/Prestige bellandur steel flyover (14).webp",
    ],
  },
  {
    id: "whitefield-rob",
    name: "Whitefield ROB, Kadugodi",
    category: "Railways",
    client: "KRDCL via PJB Engineers",
    description: "Proposed Road Over Bridge at Whitefield station yard at Km 333/005-020 by KRDCL.",
    structure: "Composite Steel Girders",
    tonnage: "~136 MT",
    images: [
      "/images/Projects/kadugodi steel flyover/kadugodi steel flyover (1).webp",
      "/images/Projects/kadugodi steel flyover/kadugodi steel flyover (2).webp",
      "/images/Projects/kadugodi steel flyover/kadugodi steel flyover (3).webp",
    ],
  },
  {
    id: "cantonment-redevel",
    name: "Bangalore Cantonment Station Redevelopment",
    category: "Railways",
    client: "SWR via Varindera Constructions",
    description: "Development/Redevelopment of major upgradation of Bangalore Cantonment Railway Station in EPC mode — SSB PEB work and FOB.",
    structure: "SSB PEB & FOB",
    tonnage: "~693 MT",
    images: [
      "/images/Projects/cantonment fob/cantonment fob (1).webp",
      "/images/Projects/cantonment fob/cantonment fob (2).webp",
      "/images/Projects/cantonment fob/cantonment fob (3).webp",
      "/images/Projects/cantonment fob/cantonment fob (4).webp",
      "/images/Projects/cantonment fob/cantonment fob (5).webp",
      "/images/Projects/cantonment fob/cantonment fob (6).webp",
      "/images/Projects/cantonment fob/cantonment fob (7).webp",
      "/images/Projects/cantonment fob/cantonment fob (8).webp",
      "/images/Projects/cantonment fob/cantonment fob (9).webp",
      "/images/Projects/cantonment fob/cantonment fob (10).webp",
    ],
  },
  {
    id: "cutting-edge-bwssb",
    name: "Cutting Edge BWSSB (Water Pipeline Bridge)",
    category: "Infrastructure",
    client: "BWSSB via PJB Engineers",
    description: "Fabrication and erection of steel structural components for the Cutting Edge water pipeline bridge by BWSSB.",
    structure: "Water Pipeline Bridge",
    tonnage: "~350 MT",
    images: [
      "/images/Projects/bwssb cutting edge/bwssb cutting edge (1).webp",
      "/images/Projects/bwssb cutting edge/bwssb cutting edge (2).webp",
      "/images/Projects/bwssb cutting edge/bwssb cutting edge (3).webp",
      "/images/Projects/bwssb cutting edge/bwssb cutting edge (4).webp",
      "/images/Projects/bwssb cutting edge/bwssb cutting edge (5).webp",
    ],
  },
  {
    id: "luxon-whitefield",
    name: "Luxon Whitefield (Steel Structure)",
    category: "Commercial",
    client: "Luxon via PJB Engineers",
    description: "Structural steel work including floor rise steel structures for Commercial development at Whitefield.",
    structure: "Floor Rise Steel Structure",
    tonnage: "~280 MT",
    images: [
      "/images/Projects/Commercial work luxon site/Commercial work luxon site (1).webp",
      "/images/Projects/Commercial work luxon site/Commercial work luxon site (2).webp",
    ],
  },
  {
    id: "almatti-water-pipeline",
    name: "63C Water Pipeline Bridge, Almatti Dam",
    category: "Infrastructure",
    client: "JK Constructions",
    description: "Fabrication and erection of steel structural components for the 63C water pipeline bridge work at Almatti Dam, Karnataka.",
    structure: "Water Pipeline Bridge",
    tonnage: "~135 MT",
    images: [
      "/images/Projects/almatti water pipeline work/almatti water pipeline work (1).webp",
      "/images/Projects/almatti water pipeline work/almatti water pipeline work (2).webp",
      "/images/Projects/almatti water pipeline work/almatti water pipeline work (3).webp",
      "/images/Projects/almatti water pipeline work/almatti water pipeline work (4).webp",
      "/images/Projects/almatti water pipeline work/almatti water pipeline work (5).webp",
    ],
  },
];
