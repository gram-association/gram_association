export const programs = [
  {
    id: 1,
    category: "Water Conservation",
    title:
      "Rasabeda Spring Water Management Project (2019): Ending Water Crisis in Rasabeda Village, Jharkhand",
    description:
      "In the remote village of Rasabeda, nestled in the challenging terrain of the Chota Nagpur plateau, access...",
    image: "/education.png",
    slug: "a",
  },
  {
    id: 2,
    category: "Water Conservation",
    title:
      "Restoring Hope Through Water: Pond Rejuvenation in Kherwatikra, Jharkhand",
    description:
      "In 2020, amid the challenges of the COVID-19 pandemic, GRAM Association, in partnership with Barefoot College,...",
    image: "/environment.jpg",
    slug: "b",
  },
  {
    id: 3,
    category: "Livelihood",
    title:
      "Women Leading the Way: Rasabeda Community Tourism Initiative (2020)",
    description:
      "In 2020, GRAM Association, in partnership with IIM Ranchi, launched a unique experiment in community-driven, s....",
    image: "/healthcare.jpg",
    slug: "c",
  },
  {
    id: 4,
    category: "Health",
    title: "Health Response: COVID Relief (2020)",
    description:
      "During the first wave of the pandemic, GRAM Association focused on supporting vulnerable communities in Ranchi district by...",
    image: "/education.png",
    slug: "d",
  },
  {
    id: 5,
    category: "Education",
    title: "Digital Bridge School Initiative (2020–21)",
    description:
      "In many remote villages of Jharkhand, formal schooling remains out of reach for countless children. To bridge this gap, GR...",
    image: "/environment.jpg",
    slug: "e",
  },
  {
    id: 6,
    category: "Community Engagement",
    title: "Shodhyatra 2.0 – Rural Immersion with IIM Ranchi (2021) ",
    description:
      "In March 2021, GRAM Association partnered with IIM Ranchi to host `Shodhyatra 2.0`, a hands-on immersion jo...",
    image: "/healthcare.jpg",
    slug: "f",
  },
];

interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  interventions: { title: string; content: string }[];
  impacts: { title: string; content: string }[];
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
    image: "/Rectangle 25.png",
  },
  b: {
    id: "B",
    title:
      "Restoring Hope Through Water: Pond Rejuvenation in Kherwatikra, Jharkhand",
    image: "/Rectangle 26.jpg",
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
  },
  c: {
    id: "C",
    title:
      "Women Leading the Way: Rasabeda Community Tourism Initiative (2020)",
    image: "/Rectangle 27.jpg",
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
  },
  d: {
    id: "D",
    title: "Health Response: COVID Relief (2020)",
    image: "/Rectangle 25.png",
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
  },
  e: {
    id: "E",
    title: "Digital Bridge School Initiative (2020–21)",
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

    image: "/Rectangle 26.jpg",
  },
  f: {
    id: "F",
    title: "Shodhyatra 2.0 – Rural Immersion with IIM Ranchi (2021) ",
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
    image: "/Rectangle 27.jpg",
  },
};
