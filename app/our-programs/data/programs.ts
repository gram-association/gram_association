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
  longDescription: string;
  impact: {
    schoolsBuilt: number;
    studentsReached: string;
    teachersTrained: number;
    graduationRate: string;
  };
  partners: string[];
  image: string;
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
      "Our education initiatives focus on providing quality education to children in underserved communities through school construction, teacher training, and learning resources. We believe that education is a fundamental right and the key to breaking the cycle of poverty.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    impact: {
      schoolsBuilt: 35,
      studentsReached: "15K+",
      teachersTrained: 850,
      graduationRate: "92%",
    },
    partners: [
      "Global Education Fund",
      "Global Education Fund",
      "Global Education Fund",
      "Global Education Fund",
    ],
    image: "/Rectangle 25.png",
  },
  b: {
    id: "B",
    title: "Program B",
    description:
      "Our healthcare initiatives aim to improve access to medical services in rural areas through mobile clinics, health education, and partnerships with local hospitals. Health is the foundation of thriving communities.",
    longDescription:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    impact: {
      schoolsBuilt: 20,
      studentsReached: "10K+",
      teachersTrained: 500,
      graduationRate: "88%",
    },
    partners: [
      "Health Alliance",
      "Global Health Org",
      "Health Alliance",
      "Global Health Org",
    ],
    image: "/Rectangle 26.jpg",
  },
  c: {
    id: "C",
    title: "Program C",
    description:
      "Our environmental initiatives focus on sustainable practices, reforestation, and community-led conservation efforts to combat climate change and protect biodiversity.",
    longDescription:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    impact: {
      schoolsBuilt: 15,
      studentsReached: "8K+",
      teachersTrained: 300,
      graduationRate: "85%",
    },
    partners: [
      "Green Earth Fund",
      "Eco Alliance",
      "Green Earth Fund",
      "Eco Alliance",
    ],
    image: "/Rectangle 27.jpg",
  },
};
