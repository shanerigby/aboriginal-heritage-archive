const collectionData = [
  {
    id: 1,
    title: "Agate Creek Artefacts",
    locationName: "Agate Creek Fossicking Area, QLD",
    coordinates: [-19.00366, 143.55810],
    date: "Acquisition Date Unknown",
    description: "A number of possible aboriginal artefacts recovered from the Agate Creek fossicking region deep in the Etheridge Shire.",
    images: ["agate_creek_artefact_1.jpg", "agate_creek_artefact_2.jpg"],
    sourceDocument: "Esma & Jim Rigby's Archive",
    relatedLinks: [
      { url: "heritage_agate_creek.html", label: "Regional Heritage: Agate Creek" }
    ]
  },
  {
    id: 2,
    title: "Small Point (Assembled Knife Element)",
    locationName: "Camfield Station, NT",
    coordinates: [-17.0333, 131.2833],
    date: "2007",
    description: "Recovered near a fence line at Camfield Station (a pastoral lease in the NT's Victoria River Downs) to protect it from impending damage by heavy station machinery. Originally documented as a small spear point by the Rigbys, experts at the Australian Museum have since suggested that it is too small to be a spearhead. It is more likely a microlith designed to be part of a composite assembled item, such as a serrated stone knife.",
    images: ["camfield_spear_point.jpeg"],
    sourceDocument: "Esma & Jim Rigby's Archive",
    relatedLinks: [
      { url: "story.html", label: "Esma's Original Written Story" },
      { url: "heritage_camfield.html", label: "Regional Heritage: Wave Hill & Camfield" }
    ]
  },
  {
    id: 3,
    title: "Bellary Creek Artifact",
    locationName: "Bellary Ck, Paraburdoo, WA",
    coordinates: [-22.87550, 117.83723],
    date: "Circa 2000",
    description: "An aboriginal artifact discovered near Bellary Creek in the Pilbara region of Western Australia (Paraburdoo area). It is believed to be made of chert, and appears to be a chip from knapping - possibly used as a tool, or a discard fragment.",
    images: ["bellary_creek_artefact_1.jpeg", "bellary_creek_artefact_2.jpeg"],
    sourceDocument: "Esma & Jim Rigby's Archive",
    relatedLinks: [
      { url: "heritage_gascoyne.html", label: "Regional Heritage: Pilbara & Gascoyne" }
    ]
  },
  {
    id: 4,
    title: "Gascoyne Artifact",
    locationName: "Gascoyne, WA (25.05065 S, 115.21586 E)",
    coordinates: [-25.05065, 115.21586],
    date: "Acquisition Date Unknown",
    description: "An aboriginal artifact discovered in the Gascoyne region of Western Australia.",
    images: ["gascoyne_artefact_1.jpeg", "gascoyne_artefact_2.jpeg"],
    sourceDocument: "Esma & Jim Rigby's Archive",
    relatedLinks: [
      { url: "heritage_gascoyne.html", label: "Regional Heritage: Pilbara & Gascoyne" }
    ]
  },
  {
    id: 5,
    title: "Wave Hill Artifact",
    locationName: "Wave Hill Station, NT",
    coordinates: [-17.3868, 131.1158],
    date: "Acquisition Date Unknown",
    description: "An aboriginal artifact discovered on Wave Hill Station in the Northern Territory.",
    images: ["wave_hill_artefact_1.jpeg", "wave_hill_artefact_2.jpeg", "wave_hill_artefact_3.jpeg"],
    sourceDocument: "Esma & Jim Rigby's Archive",
    relatedLinks: [
      { url: "heritage_camfield.html", label: "Regional Heritage: Wave Hill & Camfield" }
    ]
  },
  {
    id: 6,
    title: "Peachester Axe Head",
    locationName: "632 Peachester Road, Peachester, QLD",
    coordinates: [-26.8398, 152.8805],
    date: "Circa 1920-1930",
    description: "An aboriginal axe head discovered at 632 Peachester Road in Peachester, Queensland.",
    images: ["peachester_axe_head_1.jpeg", "peachester_axe_head_2.jpeg"],
    sourceDocument: "Esma & Jim Rigby's Archive",
    relatedLinks: [
      { url: "heritage_peachester.html", label: "Regional Heritage: Peachester" }
    ]
  },
  {
    id: 7,
    title: "Anthony Lagoon Artifact",
    locationName: "Anthony Lagoon Bore, NT",
    coordinates: [-17.978, 135.533],
    date: "Acquisition Date Unknown",
    description: "An aboriginal artifact discovered at a water bore on Anthony Lagoon Station, a large cattle property positioned across the Barkly Tableland in the Northern Territory.",
    images: ["anthony_lagoon_bore_artefact.jpeg"],
    sourceDocument: "Esma & Jim Rigby's Archive",
    relatedLinks: [
      { url: "heritage_anthony_lagoon.html", label: "Regional Heritage: Anthony Lagoon" }
    ]
  },
  {
    id: 8,
    title: "Camfield Station Artifact (B)",
    locationName: "Camfield Station, NT",
    coordinates: [-17.0333, 131.2833],
    date: "2007",
    description: "Another aboriginal artifact discovered near the gravel dump camp site at Camfield Station.",
    images: ["camfield_artefact_b_1.jpeg", "camfield_artefact_b_2.jpeg"],
    sourceDocument: "Esma & Jim Rigby's Archive",
    relatedLinks: [
      { url: "story.html", label: "Esma's Original Written Story" },
      { url: "heritage_camfield.html", label: "Regional Heritage: Wave Hill & Camfield" }
    ]
  },
  {
    id: 9,
    title: "Camfield Station Artifact (C)",
    locationName: "Camfield Station, NT",
    coordinates: [-17.0333, 131.2833],
    date: "2007",
    description: "An additional aboriginal artifact collected during the visit to Camfield Station in the Northern Territory.",
    images: ["camfield_artefact_c_1.jpeg", "camfield_artefact_c_2.jpeg"],
    sourceDocument: "Esma & Jim Rigby's Archive",
    relatedLinks: [
      { url: "story.html", label: "Esma's Original Written Story" },
      { url: "heritage_camfield.html", label: "Regional Heritage: Wave Hill & Camfield" }
    ]
  },
  {
    id: 10,
    title: "Unknown Artifacts",
    locationName: "Unknown Origin (Domestic)",
    date: "Acquisition Date Unknown",
    description: "These artifacts are of currently unverified origin, though they were definitively gathered from the limited cross-section of geographic locations otherwise documented within this archive.",
    images: ["unknown_artefacts_1.jpg"],
    sourceDocument: "Esma & Jim Rigby's Archive"
  },
  {
    id: 11,
    title: "Unknown Axe Head",
    locationName: "Unknown Origin (Domestic)",
    date: "Acquisition Date Unknown",
    description: "A heavy, intact stone axe head of an entirely unknown provenance and date. This item was found completely uncatalogued amongst the remaining domestic effects, exhibiting extremely clear signs of manual rock-grinding and historical utility edge-wear.",
    images: ["unknown_axehead_1.jpg", "unknown_axehead_2.jpg", "unknown_axehead_3.jpg", "unknown_axehead_4.jpg"],
    sourceDocument: "Esma & Jim Rigby's Archive"
  },
  {
    id: 12,
    title: "Possible Axe Head",
    locationName: "Unknown Origin (Domestic)",
    date: "Acquisition Date Unknown",
    description: "An uncatalogued stone piece featuring distinct morphological similarities to regional edge-ground axe heads. Lacking definitive provenance or clear wear-marks along the cutting ridge, it remains undocumented but fundamentally preserved within the larger unclassified collection.",
    images: ["unknown_possible_axehead_1.jpg", "unknown_possible_axehead_2.jpg"],
    sourceDocument: "Esma & Jim Rigby's Archive"
  },
  {
    id: 13,
    title: "Aboriginal Breastplate ('King Plate')",
    locationName: "Glen Innes, NSW",
    coordinates: [-29.70372, 151.76908],
    date: "Circa 1980",
    description: "Recovered from a historic, decommissioned rubbish tip servicing Glen Innes (NSW) that was closed over a century ago. This Aboriginal breastplate (historically referred to as a 'king plate') is definitively engraved with the text 'BILLE KING OF LONGTON'. Physical analysis of the plate reveals elongated suspension holes along the top edge, indicating substantial, long-term wear from being suspended around the neck prior to its disposal. The Australian Museum has been contacted regarding potentially returning this object to Country.",
    images: ["longton_breastplate_1.jpeg"],
    sourceDocument: "Esma & Jim Rigby's Archive",
    relatedLinks: [
      { url: "heritage_glen_innes.html", label: "Regional Heritage: Glen Innes (Ngoorabul People)" }
    ]
  },
  {
    id: 14,
    title: "Second Unknown Axe Head",
    locationName: "Unknown Origin (Domestic)",
    date: "Acquisition Date Unknown",
    description: "A second heavy stone axe head retrieved from domestic storage without accompanying provenance tags or documentation. It exhibits the hallmark morphology and ground-edge profile characteristic of Aboriginal utility tools but lacks specific geographic routing back to a known collection site.",
    images: ["unknown_second_axehead_1.jpg", "unknown_second_axehead_2.jpg", "unknown_second_axehead_3.jpg"],
    sourceDocument: "Esma & Jim Rigby's Archive"
  }
];

const printedMaterials = [
  {
    id: "doc2",
    title: "Agate Creek Information Brochure & Map",
    link: "brochure.html",
    image: "agate_creek_map.jpeg",
    relatedLocations: ["Agate Creek Fossicking Area, QLD"]
  },
  {
    id: "doc3",
    title: "Aboriginal Artifacts by Esma and Jim Rigby",
    link: "story.html",
    relatedLocations: ["Agate Creek Fossicking Area, QLD", "Camfield Station, NT"]
  },

  {
    id: "doc5",
    title: "Wave Hill & Camfield Heritage",
    link: "heritage_camfield.html",
    relatedLocations: ["Wave Hill Station, NT", "Camfield Station, NT"],
    isHeritage: true
  },
  {
    id: "doc6",
    title: "Anthony Lagoon Heritage",
    link: "heritage_anthony_lagoon.html",
    relatedLocations: ["Anthony Lagoon Bore, NT"],
    isHeritage: true
  },
  {
    id: "doc7",
    title: "Pilbara & Gascoyne Heritage",
    link: "heritage_gascoyne.html",
    relatedLocations: ["Bellary Ck, Paraburdoo, WA", "Gascoyne, WA (25.05065 S, 115.21586 E)"],
    isHeritage: true
  },
  {
    id: "doc8",
    title: "Peachester Heritage",
    link: "heritage_peachester.html",
    relatedLocations: ["632 Peachester Road, Peachester, QLD"],
    isHeritage: true
  },
  {
    id: "doc9",
    title: "Agate Creek Heritage",
    link: "heritage_agate_creek.html",
    relatedLocations: ["Agate Creek Fossicking Area, QLD"],
    isHeritage: true
  },
  {
    id: "doc10",
    title: "Glen Innes Heritage",
    link: "heritage_glen_innes.html",
    relatedLocations: ["Glen Innes, NSW"],
    isHeritage: true
  },
  {
    id: "doc11",
    title: "Return to Country Efforts to Date",
    link: "return_to_country_efforts.html"
  }
];
