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
      "/images/Projects/Hebbal ROB (1).webp",
      "/images/Projects/Hebbal ROB (3).webp",
      "/images/Projects/Hebbal ROB (4).webp",
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
      "/images/Projects/Prestige bellandur steel flyover (1).webp",
      "/images/Projects/Prestige bellandur steel flyover (2).webp",
      "/images/Projects/Prestige bellandur steel flyover (3).webp",
      "/images/Projects/Prestige bellandur steel flyover (4).webp",
      "/images/Projects/Prestige bellandur steel flyover (5).webp",
      "/images/Projects/Prestige bellandur steel flyover (6).webp",
      "/images/Projects/Prestige bellandur steel flyover (7).webp",
      "/images/Projects/Prestige bellandur steel flyover (8).webp",
      "/images/Projects/Prestige bellandur steel flyover (9).webp",
      "/images/Projects/Prestige bellandur steel flyover (10).webp",
      "/images/Projects/Prestige bellandur steel flyover (11).webp",
      "/images/Projects/Prestige bellandur steel flyover (12).webp",
      "/images/Projects/Prestige bellandur steel flyover (13).webp",
      "/images/Projects/Prestige bellandur steel flyover (14).webp",
      "/images/Projects/Prestige bellandur steel flyover (15).webp",
      "/images/Projects/Prestige bellandur steel flyover (16).webp",
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
      "/images/Projects/Kadugodi steel flyover1.webp",
      "/images/Projects/Kadugodi steel flyover2.webp",
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
      "/images/Projects/Cantonment.webp",
      "/images/Projects/Cantonment FOB.webp",
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
      "/images/Projects/Water pipeline bridge.webp",
      "/images/Projects/Cutting Edge BWSSB (1).webp",
      "/images/Projects/Cutting Edge BWSSB (2).webp",
      "/images/Projects/Cutting Edge BWSSB (3).webp",
      "/images/Projects/Cutting Edge BWSSB (5).webp",
      "/images/Projects/Cutting Edge BWSSB (6).webp",
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
      "/images/Projects/Commercial - Luxon Whitefield- Floor Rise in steel structure.webp",
      "/images/Projects/Commercial - Luxon Whitefield- Floor Rise in steel structure 2.webp",
    ],
  },
];
