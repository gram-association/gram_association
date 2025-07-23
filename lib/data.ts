import type { DocumentItem, ImageType } from "./types";

export const images: ImageType[] = [
  {
    id: "1",
    src: "/Component 1.png?height=450&width=500",
    alt: "Tea plantation with a single tree",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "2",
    src: "/Rectangle 51.png?height=400&width=600",
    alt: "Person in the snow",
    description: "A winter scene with a person walking through the snow.",
  },
  {
    id: "3",
    src: "/Rectangle 53.png?height=600&width=800",
    alt: "Silhouette of animals at sunset",
    description: "Silhouettes of animals against a beautiful sunset backdrop.",
  },
  {
    id: "4",
    src: "/Rectangle 52.png?height=400&width=600",
    alt: "Person cycling on a forest path",
    description: "A cyclist enjoying a ride through a lush green forest path.",
  },
  {
    id: "5",
    src: "/Rectangle 54.png?height=800&width=1200",
    alt: "Group of people working in a field",
    description: "A community working together in agricultural fields.",
  },
  {
    id: "6",
    src: "/Rectangle 55.png?height=400&width=600",
    alt: "Person in a rice field",
    description: "A farmer working in a vibrant green rice field.",
  },
  {
    id: "7",
    src: "/Rectangle 58.png?height=600&width=400",
    alt: "Portrait of a person in traditional dress",
    description: "A portrait showcasing traditional cultural attire.",
  },
  {
    id: "8",
    src: "/Rectangle 59.png?height=400&width=600",
    alt: "People sitting in a circle outdoors",
    description: "A community gathering in a natural setting.",
  },
  {
    id: "9",
    src: "/Rectangle 57.png?height=600&width=400",
    alt: "Mountain landscape with waterfall",
    description: "A breathtaking view of mountains with cascading waterfalls.",
  },
];

export const videoData = [
  {
    id: "v1",
    type: "videos",
    title: "India- `Rasabeda` Village Water Project",

    youtubeUrl: "https://youtu.be/fbWP4nOyhVA?si=YCckVWNKob0lkOJe",
  },
  {
    id: "v2",
    type: "videos",
    title: "Rasabeda Village Tourism || Unnat Bharat Abhiyan || IIM Ranchi",

    youtubeUrl: "https://youtu.be/Cpc9jSMjmM4?si=vVVr2kxl3ppoBmgC",
    duration: "2:30",
  },
  // {
  //   id: "v3",
  //   type: "videos",
  //   title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  //   date: "27 Mar, 2023",
  //   youtubeUrl: "https://youtu.be/fbWP4nOyhVA?feature=shared",
  //   duration: "4:15",
  // },
  {
    id: "v4",
    type: "videos",
    title:
      "Rasabeda : The Water Project | A Documentary | 2020 | A Journey Of Two Warriors",

    youtubeUrl: "https://youtu.be/NFHkWtZDyvA?si=fq6tOigIUmglluxN",
    duration: "1:50",
  },
  {
    id: "v5",
    type: "videos",
    title:
      "Kherwatikra Pond Rejuvenation,Ranchi | Documentary film | 2021 | Happy New Year",

    youtubeUrl: "https://youtu.be/TpWj6MH1lNc?si=_o4YsFAJJtqCO5aW",
    duration: "5:20",
  },
  // {
  //   id: "v6",
  //   type: "videos",
  //   title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  //   date: "05 Dec, 2023",
  //   youtubeUrl: "/Rectangle 71.png?height=300&width=400",
  //   duration: "2:10",
  // },
];

export const documentData: DocumentItem[] = [
  {
    id: "d1",
    type: "documents",
    title: "Compendium of Best Practices Water Mangement in Tribal Areas",
    date: "27 Mar, 2023",
    imageUrl: "/assets/media/doc1.png",
    fileUrl:
      "https://drive.google.com/file/d/1xxKhuEMs8AZOx3JexJTb5kkiRjTH_Ah9/view?usp=drive_link",
    hasQrCode: true,
    fileSize: "2.4 MB",
    fileType: "PDF",
  },
  {
    id: "d2",
    type: "documents",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    date: "15 May, 2023",
    imageUrl: "/Rectangle 63Doc.png?height=300&width=400",
    fileSize: "1.8 MB",
    fileType: "DOCX",
  },
  {
    id: "d3",
    type: "documents",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    date: "03 Nov, 2023",
    imageUrl: "/Rectangle 65Doc.png?height=300&width=400",
    fileSize: "3.2 MB",
    fileType: "PDF",
  },
  {
    id: "d4",
    type: "documents",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    date: "27 Mar, 2023",
    imageUrl: "/Rectangle 69Doc.png?height=300&width=400",
    hasQrCode: true,
    fileSize: "1.5 MB",
    fileType: "PDF",
  },
  {
    id: "d5",
    type: "documents",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    date: "20 Apr, 2023",
    imageUrl: "/Rectangle 70Doc.png?height=300&width=400",
    hasQrCode: true,
    fileSize: "4.1 MB",
    fileType: "XLSX",
  },
  {
    id: "d6",
    type: "documents",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    date: "05 Dec, 2023",
    imageUrl: "/Rectangle 71Doc.png?height=300&width=400",
    hasQrCode: true,
    fileSize: "2.7 MB",
    fileType: "PDF",
  },
];
