interface Program {
  map(
    arg0: (img: any, index: any) => { src: any; alt: string; title: any }
  ): unknown;
  id: string;
  title: string;
  description: string | string[];
  image: string | string[];
  header: string;
  headline: string;
  header1: string;
  header2: string;
  interventions: { title: string; content: string }[];
  impacts: { title: string; content: string }[];
  paraTitle1: string;
  paraTitle2: string;
  para1: string;
  para2: string;
  para3: string;
}
interface ProgramData {
  [key: string]: Program;
}

export const programData: ProgramData = {
  a: {
    id: "A",
    title:
      "Rasabeda Spring Water Management Project (2019): Ending Water Crisis in Rasabeda Village, Jharkhand",
    description:
      "In the remote village of Rasabeda, nestled in the challenging terrain of the Chota Nagpur plateau, access to clean water was once a daily struggle. To address this, GRAM Association collaborated with DEEKSHA NGO and IBM Ranchi under the Umnat Bharat Abhiyan, launched a holistic water management initiative that has since transformed the community’s relationship with water.",
    interventions: [
      {
        title: "Surface Water Management",
        content:
          "The village’s natural spring (Chua) was channelized using gravity flow into a 13,000-liter central storage tank, making clean water more accessible to all households.",
      },
      {
        title: "Water Quality Improvement",
        content:
          "Dual-stage filtration systems were installed to ensure the spring water is safe for drinking.",
      },
      {
        title: "Infrastructure Development",
        content:
          "A 5,000-liter sump was constructed for non-potable uses such as bathing and washing. Additionally, a 1,500-liter rooftop tank equipped with taps provides water with ease and dignity.",
      },
      {
        title: "Rainwater Harvesting & Groundwater Recharge",
        content:
          "A recharge pit was built to harvest rooftop rainwater from the village school, supporting groundwater replenishment and long-term sustainability.",
      },
      {
        title: "Community Engagement",
        content:
          "A local ‘Jal Samiti’ (Water Committee) was formed to manage operations and maintenance, instilling ownership and accountability within the community.",
      },
    ],
    impacts: [
      {
        title: "Reaching 125 Families",
        content:
          "The project now provides reliable access to safe water for every household in the village.",
      },
      {
        title: "Health and Hygiene Gains",
        content:
          "With improved water quality, the incidence of waterborne illnesses has significantly declined, especially during the monsoon season.",
      },
      {
        title: "Empowered Education",
        content:
          "With functional school toilets supported by consistent water supply, student hygiene and attendance have seen noticeable improvement.",
      },
      {
        title: "Strengthened Community Ownership",
        content:
          "The formation of the Jal Samiti has not only ensured the upkeep of the water systems but also fostered a deeper sense of responsibility and collective pride.",
      },
    ],
    image: [
      "/assets/our-programs/rasabedaSpringwater/Shortlist_1.jpg",
      "/assets/our-programs/rasabedaSpringwater/Shortlist_2.jpg",
      "/assets/our-programs/rasabedaSpringwater/Shortlist_3.jpg",
      "/assets/our-programs/rasabedaSpringwater/Shortlist_4.jpg",
    ],
    header1: "Key Interventions",
    header2: "Lasting Impact",
    header:
      "Transforming Lives Through Sustainable Water Solutions in Rasabeda",
    paraTitle1: "",
    paraTitle2: "",
    para1: "",
    para2: "",
    headline: "",
    para3: "",
    map: function (
      arg0: (img: any, index: any) => { src: any; alt: string; title: any }
    ): unknown {
      throw new Error("Function not implemented.");
    },
  },
  b: {
    id: "B",
    title:
      "Restoring Hope Through Water : Pond Rejuvenation in Kherwatikra, Jharkhand",
    image: [
      "/assets/our-programs/pondRejuvenation/Shortlist_1.jpg",
      "/assets/our-programs/pondRejuvenation/Shortlist_2.jpg",
      "/assets/our-programs/pondRejuvenation/Shortlist_3.jpg",
      "/assets/our-programs/pondRejuvenation/Shortlist_4.jpg",
    ],
    description: [
      "In 2020, amid the challenges of the COVID-19 pandemic, GRAM Association, in partnership with Barefoot College, Tilonia, brought new life to Kherwatikra, a small tribal hamlet in the Ranchi district of Jharkhand. Despite abundant rainfall, the village of 38 Munda tribal families struggled with chronic water scarcity. The reason? Rapid water runoff and a lack of infrastructure to capture and retain rainwater.",
      " At the heart of the intervention was the revival of the village’s decades-old pond, Gudibandh Talab, which had fallen into disrepair over the years — filled with silt, unable to hold water, and contributing to falling groundwater levels.",
    ],
    interventions: [
      {
        title: "Community Mobilization through Shramdaan",
        content:
          "Villagers came together to volunteer their time and labor, following strict COVID-19 protocols, to rejuvenate the pond — demonstrating remarkable unity and ownership.",
      },
      {
        title: "Infrastructure Development",
        content:
          "The pond was desilted and expanded to 150x150x12 feet, increasing its holding capacity to approximately 6.5 million liters. Inlet and overflow channels were constructed, and embankments were fortified to minimize erosion and runoff.",
      },
      {
        title: "Environmental Stewardship",
        content:
          " Fruit-bearing saplings were planted around the pond to strengthen soil stability and promote local biodiversity.",
      },
      {
        title: "Rural Employment During Lockdown",
        content:
          " The effort created short-term employment for 33 villagers (20 women and 13 men) over a 7–10-day period, providing  ₹30,000 directly into the local economy when it was needed most.",
      },
      {
        title: "Sustainability Through Local Governance",
        content:
          " A ‘Jal Samiti’ (Water Committee) was formed to manage ongoing maintenance and promote responsible use of the water resource.",
      },
    ],
    impacts: [
      {
        title: "Reaching 38 Households",
        content:
          "The project now supports 220 villagers and around 470 livestock, addressing their daily water needs.",
      },
      {
        title: "Improved Water Security",
        content:
          " The rejuvenated pond has led to recharged groundwater, and ensuring year-round water availability for drinking, irrigation, and livestock.",
      },
      {
        title: "Livelihood Development",
        content:
          "The pond’s restored capacity has enabled integrated fish and duck farming, opening new livelihood avenues for the community.",
      },
    ],
    header1: "Key Interventions",
    header2: "Impact at a Glance",
    header: "",
    paraTitle1: "",
    paraTitle2: "",
    para1: "",
    para2: "",
    headline: "",
    para3: "",
    map: function (
      arg0: (img: any, index: any) => { src: any; alt: string; title: any }
    ): unknown {
      throw new Error("Function not implemented.");
    },
  },
  c: {
    id: "c",
    title:
      "Laying the Groundwork for Safe Water Access: Birbhum Fluoride Mitigation Support Project (2020–2021)",
    image: [
      "/assets/our-programs/birbhumProject/Shortlist_1.jpg",
      "/assets/our-programs/birbhumProject/Shortlist_2.jpg",
      "/assets/our-programs/birbhumProject/Shortlist_3.jpg",
      "/assets/our-programs/birbhumProject/Shortlist_4.jpg",
    ],
    description: [
      "In 2020, GRAM Association partnered with INNODI, under a larger initiative driven by the National Stock Exchange Foundation (NSEF) and the International Centre for Clean Water (ICCW), to address the critical issue of fluoride and salinity contamination in drinking water across nine villages in Khoyrasol block, Birbhum district, West Bengal.",
      " Though GRAM’s role was focused on the project’s early stages, our contribution was pivotal in setting the foundation for long-term impact.",
    ],
    interventions: [
      {
        title: "Community Engagement & Trust-Building",
        content:
          "Our team worked closely with local Gram Panchayats and community members to foster trust, raise awareness, and encourage active participation in the initiative.",
      },
      {
        title: "Site Identification",
        content:
          "We supported the technical team by helping to identify strategic locations for the installation of Reverse Osmosis (RO) water purification units based on accessibility and community need.",
      },
      {
        title: "Consent Facilitation",
        content:
          "GRAM facilitated the necessary permissions and approvals from local governing bodies, ensuring smooth groundwork for implementation.",
      },
    ],
    impacts: [],
    header1: "GRAM Association’s Key Contributions",
    header2: "",
    header: "",
    paraTitle1: "Project Scope & Responsibility",
    paraTitle2: "Our Commitment",
    para1:
      "It’s important to clarify that GRAM Association’s role concluded after the facilitation phase. The actual installation, operation, and monitoring of the water purification systems were carried out by INNODI and its partners. As such, GRAM does not maintain post-implementation data or direct insights into the long-term performance of the systems.",
    para2:
      "Even when our role is limited to facilitation, GRAM Association remains deeply committed to enabling sustainable access to safe drinking water. This project is a reflection of our approach , collaborative, community-driven, and impact-oriented and our readiness to support partners in delivering essential services to underserved regions.",
    headline: "",
    para3: "",
    map: function (
      arg0: (img: any, index: any) => { src: any; alt: string; title: any }
    ): unknown {
      throw new Error("Function not implemented.");
    },
  },
  d: {
    id: "d",
    title:
      "Women Leading the Way: Rasabeda Community Tourism Initiative (2020)",
    image: [
      "/assets/our-programs/rasabedaTourism/Shortlist_1.jpg",
      "/assets/our-programs/rasabedaTourism/Shortlist_2.jpg",
      "/assets/our-programs/rasabedaTourism/Shortlist_3.jpg",
      "/assets/our-programs/rasabedaTourism/Shortlist_4.jpg",
    ],
    description: [
      "In 2020, GRAM Association, in partnership with IIM Ranchi, launched a unique experiment in community-driven, sustainable tourism in the picturesque village of Rasabeda, Jharkhand. At the heart of this initiative was a bold and inspiring goal: to empower rural women by giving them the platform to lead, manage, and benefit from local tourism.",
      "This women-led initiative opened new doors for the community ,economically, socially, and culturally  by turning Rasabeda’s everyday life, traditions, and landscapes into a welcoming, immersive experience for visitors.",
    ],
    interventions: [
      {
        title: "Women’s Empowerment Through Leadership",
        content:
          "From hosting guests to managing logistics, the entire tourism initiative was designed and operated by local women — fostering economic independence, building confidence, and nurturing leadership in a rural setting.",
      },
      {
        title: "Celebrating Culture and Identity",
        content:
          "The project brought the village together through vibrant celebrations of International Women’s Day and World Tourism Day, showcasing the community’s rich traditions and collective spirit to visitors and dignitaries alike.",
      },
      {
        title: "Rural Immersion for Urban Learners",
        content:
          " Day trips and cultural exchanges were organized for students from IIM Ranchi and other visitors, offering them firsthand insights into authentic rural life, while reinforcing the value of local knowledge and hospitality.",
      },
    ],
    impacts: [
      {
        title: "Empowering Women, Engaging the Community",
        content:
          "The initiative directly empowered over 30 women and involved more than 125 villagers in tourism-related activities — from cooking and storytelling to logistics and guiding.",
      },
      {
        title: "New Livelihood Opportunities",
        content:
          "Tourism opened up alternative income sources for women, helping to curb migration, malnutrition, and poverty by strengthening local livelihoods.",
      },
      {
        title: "Strengthening Community Bonds",
        content:
          "Working together on a shared platform instilled a strong sense of collective pride and community identity.",
      },
    ],
    header1: "Key Highlights",
    header2: "Lasting Impact",
    header: "",
    paraTitle1: "",
    paraTitle2: "",
    para1:
      "The unexpected outbreak of COVID-19 led to a temporary suspension of the project, prioritizing health and safety. Despite having limited prior experience in managing tourism, the positive response from both villagers and visitors offered valuable lessons and reinforced the potential of community-owned enterprises.",
    para2: "",
    headline: "",
    para3: "",
    map: function (
      arg0: (img: any, index: any) => { src: any; alt: string; title: any }
    ): unknown {
      throw new Error("Function not implemented.");
    },
  },
  e: {
    id: "E",
    title:
      "Reviving Tradition, Building Futures: Leaf Plate & Bowl Training Initiative (2022)",
    image: [
      "/assets/our-programs/leafplatemaking/Shortlist_1.jpg",
      "/assets/our-programs/leafplatemaking/Shortlist_2.jpg",
      "/assets/our-programs/leafplatemaking/Shortlist_3.jpg",
      "/assets/our-programs/leafplatemaking/Shortlist_4.jpg",
    ],
    description: [
      "In 2022, GRAM Association, in partnership with IIM Ranchi and under the Unnat Bharat Abhiyan framework, introduced a hands-on training program designed to revive a traditional craft , making plates and bowls from sal leaves. The 12-day initiative focused on empowering tribal women through skill development, sustainability, and entrepreneurship.",
      " Rooted in local knowledge and aligned with eco-friendly practices, this initiative provided a meaningful alternative to plastic disposables while creating new livelihood opportunities.",
    ],
    headline:
      "A total of 34 women - 18 from Rasabeda and 16 from Hapatbeda, participated in the program. The training covered:",
    interventions: [
      {
        title: "",
        content: "Techniques for collecting and preparing sal leaves",
      },
      {
        title: "",
        content:
          "Stitching and pressing methods to craft sturdy, natural plates and bowls",
      },
      {
        title: "",
        content:
          "Health and hygiene practices, with a focus on COVID-19 awareness",
      },
      {
        title: "",
        content:
          "Basics of entrepreneurship and how to connect with local markets",
      },
      {
        title: "",
        content: "Steps to set up and manage small-scale production units",
      },
    ],
    para3:
      "To support continued learning, a production-cum-training unit was set up at the field center. Eighteen women were inducted as regular trainees. They now oversee the entire process, from collecting leaves to selling finished products, building a steady income stream while supporting sustainable, eco-conscious living.",
    impacts: [
      {
        title: "Economic independence",
        content:
          " Women who once relied solely on seasonal income now have a consistent source of livelihood through the sale of biodegradable products.",
      },
      {
        title: "Environmental impact",
        content:
          "By promoting traditional, plant-based alternatives to plastic, the initiative contributes to local environmental health and awareness.",
      },
      {
        title: "Community building",
        content:
          "The project brought women together, strengthened community ties, and helped preserve a cultural skill that is both practical and relevant today.",
      },
    ],
    header1: "What the Training Covered",
    header2: "What Changed",
    header: "",
    paraTitle1: "",
    paraTitle2: "",
    para1: "",
    para2:
      "Once the training was complete, the project was formally handed over to the community, enabling them to run it independently and expand at their own pace.",
    map: function (
      arg0: (img: any, index: any) => { src: any; alt: string; title: any }
    ): unknown {
      throw new Error("Function not implemented.");
    },
  },

  f: {
    id: "F",
    title: "Dharampur Rural Tourism Project (2024–25)",
    image: [
      "/assets/our-programs/dharampurRuralTourism/Shortlist_1.jpg",
      "/assets/our-programs/dharampurRuralTourism/Shortlist_2.jpg",
      "/assets/our-programs/dharampurRuralTourism/Shortlist_3.jpg",
      "/assets/our-programs/dharampurRuralTourism/Shortlist_4.jpg",
    ],
    description: [
      "In collaboration with NABARD",
      " Nestled in the Silli Block of Ranchi district, the village of Dharampur is home to 70 tribal families whose connection to nature, tradition, and community runs deep. In 2024, GRAM Association, with support from NABARD, launched a rural tourism project designed to tap into this richness—transforming the village into an immersive eco-cultural destination.",
      " Led by women and youth, this initiative invites visitors to explore village life through jungle treks, traditional archery, tribal dance performances, and more,all just an hour’s drive from Ranchi.",
      " With the introduction of key infrastructure like eco-toilets, solar lighting, painted homestays, and Dharampur is steadily emerging as a model for community-led tourism in Jharkhand.",
    ],
    impacts: [
      {
        title: "",
        content:
          "Direct livelihood creation for 70 families (around 300 individuals)",
      },
      {
        title: "",
        content: "30 women trained in tourism and hospitality",
      },
      {
        title: "",
        content: "Increased leadership roles for women and youth",
      },
      {
        title: "",
        content:
          "Revival of tribal art, traditions, and environmental awareness",
      },
      {
        title: "",
        content:
          "Strengthened rural infrastructure and renewed community pride",
      },
      {
        title: "",
        content:
          "Encouragement of reverse migration and long-term economic sustainability",
      },
    ],
    interventions: [],
    header1: "Impact Highlights",
    header2: "",
    header: "",
    paraTitle1: "",
    paraTitle2: "",
    para1: "",
    para2: "",
    headline: "",
    para3: "",
    map: function (
      arg0: (img: any, index: any) => { src: any; alt: string; title: any }
    ): unknown {
      throw new Error("Function not implemented.");
    },
  },
  g: {
    id: "G",
    title: "Health Response: COVID Relief (2020)",
    image: [
      "/assets/our-programs/COVIDRelief/Shortlist_1.jpg",
      "/assets/our-programs/COVIDRelief/Shortlist_2.jpg",
      "/assets/our-programs/COVIDRelief/Shortlist_3.jpg",
      "/assets/our-programs/COVIDRelief/Shortlist_4.jpg",
    ],
    description:
      "During the first wave of the pandemic, GRAM Association focused on supporting vulnerable communities in Ranchi district by providing nutritional aid to over 325 individuals. The relief effort prioritized the pregnant women, lactating mothers,  elderly, and families with limited access to resources, ensuring basic health and dignity during the crisis.",
    interventions: [],
    impacts: [],
    header1: "",
    header2: "",
    header: "",
    paraTitle1: "",
    paraTitle2: "",
    para1: "",
    para2: "",
    headline: "",
    para3: "",
    map: function (
      arg0: (img: any, index: any) => { src: any; alt: string; title: any }
    ): unknown {
      throw new Error("Function not implemented.");
    },
  },
  h: {
    id: "H",
    title: "Digital Bridge School Initiative (2020–21)",
    description:
      "In many remote villages of Jharkhand, formal schooling remains out of reach for countless children. To bridge this gap, GRAM Association established two Digital Bridge Schools in 2020–21 using solar-powered digital tools and interactive learning methods.",
    interventions: [
      {
        title: "",
        content: "Targeted foundational education for children aged 6 to 14",
      },
      {
        title: "",
        content: "Offline digital content via projectors and tablets",
      },
      {
        title: "",
        content:
          "Lessons in literacy, numeracy, environmental awareness, and life skills",
      },
      {
        title: "",
        content:
          "Blended curriculum combining traditional and modern approaches",
      },
    ],
    impacts: [
      {
        title: "",
        content: "Reached around 48 children across two villages",
      },
      {
        title: "",
        content: "Improved learning outcomes and digital exposure",
      },
      {
        title: "",
        content:
          "Encouraged greater community involvement in children’s education",
      },
    ],

    image: [
      "/assets/our-programs/bridgeSchool/Shortlist_1.jpg",
      "/assets/our-programs/bridgeSchool/Shortlist_2.jpg",
      "/assets/our-programs/bridgeSchool/Shortlist_3.jpg",
      "/assets/our-programs/bridgeSchool/Shortlist_4.jpg",
    ],
    header1: "What the Program Offered",
    header2: "Impact",
    header: "In partnership with Barefoot College",
    paraTitle1: "",
    paraTitle2: "",
    para1: "",
    para2: "",
    headline: "",
    para3: "",
    map: function (
      arg0: (img: any, index: any) => { src: any; alt: string; title: any }
    ): unknown {
      throw new Error("Function not implemented.");
    },
  },
  i: {
    id: "I",
    title: "Shodhyatra 2.0 – Rural Immersion with IIM Ranchi (2021) ",
    description:
      "In March 2021, GRAM Association partnered with IIM Ranchi to host `Shodhyatra 2.0`, a hands-on immersion journey into rural life. The aim was two-fold: expose students to ground realities and co-create sustainable solutions with local communities.",
    interventions: [
      {
        title: "",
        content: "Participation from 4 IIM Ranchi students",
      },
      {
        title: "",
        content: "Conducted in villages of Angara Block, Ranchi",
      },
      {
        title: "",
        content:
          "Focused on understanding local challenges, identifying grassroots innovations, and designing feasible, community-led solutions",
      },
    ],
    impacts: [
      {
        title: "",
        content:
          "Empowered local communities through participatory problem-solving",
      },
      {
        title: "",
        content: "Gave students real-world exposure to rural development",
      },
      {
        title: "",
        content: "Promoted practical, sustainable models of change",
      },
    ],
    image: [
      "/assets/our-programs/sodhyatra/Shortlist_1.jpg",
      "/assets/our-programs/sodhyatra/Shortlist_2.jpg",
      "/assets/our-programs/sodhyatra/Shortlist_3.jpg",
      "/assets/our-programs/sodhyatra/Shortlist_4.jpg",
    ],
    header1: "Highlights",
    header2: "Outcomes",
    header: "",
    paraTitle1: "",
    paraTitle2: "",
    para1: "",
    para2: "",
    headline: "",
    para3: "",
    map: function (
      arg0: (img: any, index: any) => { src: any; alt: string; title: any }
    ): unknown {
      throw new Error("Function not implemented.");
    },
  },
  j: {
    id: "J",
    title: "Community Food Forest Initiative (2020)",
    image: [
      "/assets/our-programs/food forest/Shortlist_1.jpg",
      "/assets/our-programs/food forest/Shortlist_2.jpg",
      "/assets/our-programs/food forest/Shortlist_3.jpg",
      "/assets/our-programs/food forest/Shortlist_4.jpg",
    ],
    description: [
      "Locations: Haislabera & Jargadhora, Jharkhand | In collaboration with DEEKSHA NGO",
      " Food insecurity and environmental degradation often go hand-in-hand in remote villages. To address both, GRAM Association and DEEKSHA NGO came together in 2020 to initiate community-managed food forests in Haislabera and Jargadhora villages.",
    ],
    interventions: [
      {
        title: "",
        content:
          "Planted 200 fruit-bearing trees in each village, including mango, guava, and lemon",
      },
      {
        title: "",
        content:
          "Involved local communities in land preparation, planting, and maintenance",
      },
      {
        content:
          "Created village-level committees to ensure ongoing care and sustainability",
        title: "",
      },
    ],
    impacts: [
      {
        title: "",
        content: "Improved food security with future fruit harvests",
      },
      {
        title: "",
        content: "Potential for income through the sale of surplus produce",
      },
      {
        title: "",
        content:
          "Built stronger community ownership and stewardship of natural resources",
      },
      {
        title: "",
        content: "Promoted eco-friendly farming and conservation practices",
      },
    ],
    header1: "What Was Done",
    header2: "What It Achieved",
    header: "",
    paraTitle1: "",
    paraTitle2: "",
    para1: "",
    para2: "",
    headline: "",
    para3: "",
    map: function (
      arg0: (img: any, index: any) => { src: any; alt: string; title: any }
    ): unknown {
      throw new Error("Function not implemented.");
    },
  },
};
