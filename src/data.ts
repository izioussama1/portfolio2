import powerButton from "./assets/img3.jpg";
import aerialHud from "./assets/img4.jpg";
import frequentlaPoster from "./assets/img5.jpg";
import focusMoodboard from "./assets/Focus-modeboeard.png";
import immortalityImage from "./assets/Immortality.jpg";
import immortalityDetail from "./assets/Immortality-second.jpg";
import circusImage from "./assets/Circus.jpg";
import circusDetail from "./assets/Circus-second.jpg";
import frequentlaVideo from "./assets/frequently.mp4";
import frequentlaVideoTwo from "./assets/frequently 2.mp4";
import focusFriendVideo from "./assets/Focus-app.mp4";

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  video?: ProjectVideo;
};

export type ProjectVideo = {
  src: string;
  title: string;
  poster: string;
};

export type Project = {
  id: string;
  title: string;
  discipline: string;
  label: string;
  summary: string;
  body: string[];
  images: ProjectImage[];
  index: string;
};

export const site = {
  name: "Pychova Alexandra",
  role: "Motion Design Student",
  location: "Czech Republic",
  email: "pychovaalexandra@gmail.com",
  instagram: "@thealexportfolio",
  instagramUrl: "https://instagram.com/thealexportfolio",
};

export const navLinks = [
  { label: "Home", href: "#/" },
  { label: "About", href: "#/about" },
  { label: "Portfolio", href: "#/portfolio" },
];

export const about = {
  headline: "Hello,",
  nameheadline: "I’m Sasha",
  paragraphs: [
    "I’m a 20 year old motion design student who loves creating ideas and bringing them to life. With a background in fashion design, I’ve always been interested in visual storytelling, aesthetics, and finding creative ways to communicate ideas.",
    "For me, every project is an opportunity to explore something new, solve a problem, and turn an idea into something people can see and feel.",
  ],
  cta: "Take a look around my portfolio!",
  education: [
    { school: "SSUŠD", years: "2021 – 2025" },
    { school: "VoŠ SCHOLASTIKA", years: "2025 – present" },
  ],
};

export const projects: Project[] = [
  {
    id: "frequentla",
    title: "Frequentla",
    discipline: "Motion design",
    label: "First-year finals · part two",
    summary:
      "Reimagining navigation through alien perception — a map for reading the invisible layers of reality.",
    body: [
      "The project reimagines traditional navigation systems through an alternative perspective and questions how different forms of intelligence might interpret the world around them.",
      "The concept is based on the idea that aliens represent a more advanced form of existence than humans, with perception extending far beyond ordinary human senses.",
      "Instead of understanding the world only through visible geography, these beings would be able to perceive invisible layers of reality, such as energy flows across landscapes, temperature fields, or the density of life in different areas.",
      "As a result, the map would not simply function as a tool for geographic navigation but as an interface for interpreting complex environmental and energetic information.",
      "The visual language of the application is inspired by organic, cymatic and fluid forms, reflecting a non-human way of seeing and understanding. Rather than rigid cartographic structures, the interface would emphasise dynamic, living patterns that reveal hidden characteristics of the environment.",
      "The map would also categorize zones according to alien needs, highlighting areas such as safe or risky landing locations, highly populated regions, etc.",
    ],
    images: [
      {
        src: aerialHud,
        alt: "Aerial landscape with a sci-fi targeting interface overlay",
        caption: "Reading invisible layers of a landscape",
        video: {
          src: frequentlaVideo,
          title: "Frequentla motion study",
          poster: aerialHud,
        },
      },
      {
        src: frequentlaPoster,
        alt: "Frequentla project poster with three panels of sci-fi and thermal imagery",
        caption: "Project poster — the alien interface as a triptych",
        video: {
          src: frequentlaVideoTwo,
          title: "Frequentla interface animation",
          poster: frequentlaPoster,
        },
      },
    ],
    index: "01",
  },
  {
    id: "focus-friend",
    title: "Focus Friend",
    discipline: "Motion design",
    label: "First-year finals · part one",
    summary:
      "A physical focus tool that melts like ice and rewards you with collectible Ice Age animals.",
    body: [
      "For my Kickstarter campaign, I designed a tool to help people improve their focus.",
      "I was inspired by a TikTok trend in which students place a container of ice on their desk to increase their motivation to study and watch as the ice slowly melts. Once it has completely melted, they reward themselves with something they enjoy.",
      "Based on this idea, I developed the concept of a physical focus tool that could help not only students, but also children improve their concentration.",
      "Nowadays, our everyday lives are closely connected to the virtual world and for the youngest generation, this has already become the norm.",
      "I wanted to create something that would be engaging for both adults and children: something that could help with time management while also encouraging people to disconnect from their mobile devices.",
      "The melting ice inspired me to create a device with a simple program. The user sets a timer and watches as an ice cube gradually melts. Once it has completely melted, a small reward appears in the form of an Ice Age animal. These animal-shaped “badges” could then be collected and displayed directly on the device.",
    ],
    images: [
      {
        src: powerButton,
        alt: "A glowing power button symbol on a black background",
        caption: "On, off, focus",
        video: {
          src: focusFriendVideo,
          title: "Focus Friend app animation",
          poster: powerButton,
        },
      },
      {
        src: focusMoodboard,
        alt: "Focus Friend visual moodboard and interface concepts",
        caption: "Focus Friend visual development",
      },
    ],
    index: "02",
  },
  {
    id: "immortality",
    title: "Immortality",
    discipline: "Fashion design",
    label: "Third-year exams · part two",
    summary:
      "A women’s jacket and skirt exploring immortality through mannerist beauty and decay.",
    body: [
      "This semester, we were supposed to make a coat or jacket on the theme of “invaders and herons.”",
      "I made a women’s jacket and a skirt with an abstract shape for my chosen sub-theme, “immortality.”",
      "The Chinese tale about herons, which describes them as messengers of the heavenly court bringing news of immortality, helped me to think of the sub-theme.",
      "This is connected to the historical figure of Qin Shi Huang, who was the first emperor of China. His goal was to find the elixir of eternal life.",
      "My intention was to depict immortality — the supernatural — through the clothing. I combined a mannerist otherworldly beauty with the deterioration of a person who lives an endless existence.",
    ],
    images: [
      {
        src: immortalityImage,
        alt: "Immortality fashion design look",
        caption: "Immortality — final look",
      },
      {
        src: immortalityDetail,
        alt: "Immortality fashion design detail",
        caption: "Material and silhouette detail",
      },
    ],
    index: "03",
  },
  {
    id: "circus",
    title: "Circus",
    discipline: "Fashion design",
    label: "Second-year exams · part one",
    summary:
      "Symmetry and Rorschach tests inspired by the conjoined twins Chang and Eng.",
    body: [
      "For the theme of the circus, I chose the Siamese twins Chang and Eng, as circuses often featured unusual people as attractions to make money.",
      "The twins were connected by a small piece of cartilage on the sternum and had separate organs, except for their shared liver.",
      "This inspired me to use the Rorschach test images that everyone perceives differently, based on symmetry.",
      "This technique led me to work with symmetry, creating my own Rorschach tests, which I used in my sketches by folding paper and cutting out shapes.",
    ],
    images: [
      {
        src: circusImage,
        alt: "Circus fashion design look",
        caption: "Circus — final look",
      },
      {
        src: circusDetail,
        alt: "Circus fashion design detail",
        caption: "Symmetry and Rorschach detail",
      },
    ],
    index: "04",
  },
];
