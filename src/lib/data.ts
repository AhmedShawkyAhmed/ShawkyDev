import { Github, Linkedin, Mail } from "lucide-react";
import { PlaceHolderImages } from "./placeholder-images";

const avatar = PlaceHolderImages.find(p => p.id === 'avatar');
const project1 = PlaceHolderImages.find(p => p.id === 'project-1');
const project2 = PlaceHolderImages.find(p => p.id === 'project-2');
const project3 = PlaceHolderImages.find(p => p.id === 'project-3');
const project4 = PlaceHolderImages.find(p => p.id === 'project-4');
const project5 = PlaceHolderImages.find(p => p.id === 'project-5');
const project6 = PlaceHolderImages.find(p => p.id === 'project-6');
const project7 = PlaceHolderImages.find(p => p.id === 'project-7');
const project8 = PlaceHolderImages.find(p => p.id === 'project-8');
const project9 = PlaceHolderImages.find(p => p.id === 'project-9');
const project10 = PlaceHolderImages.find(p => p.id === 'project-10');
const project11 = PlaceHolderImages.find(p => p.id === 'project-11');
const project12 = PlaceHolderImages.find(p => p.id === 'project-12');
const project13 = PlaceHolderImages.find(p => p.id === 'project-13');
const project14 = PlaceHolderImages.find(p => p.id === 'project-14');
const project15 = PlaceHolderImages.find(p => p.id === 'project-15');
const project16 = PlaceHolderImages.find(p => p.id === 'project-16');
const project17 = PlaceHolderImages.find(p => p.id === 'project-17');
const project18 = PlaceHolderImages.find(p => p.id === 'project-18');
const project19 = PlaceHolderImages.find(p => p.id === 'project-19');
const project20 = PlaceHolderImages.find(p => p.id === 'project-20');
const project21 = PlaceHolderImages.find(p => p.id === 'project-21');
const project22 = PlaceHolderImages.find(p => p.id === 'project-22');
const project23 = PlaceHolderImages.find(p => p.id === 'project-23');
const project24 = PlaceHolderImages.find(p => p.id === 'project-24');
const project25 = PlaceHolderImages.find(p => p.id === 'project-25');
const project26 = PlaceHolderImages.find(p => p.id === 'project-26');
const project27 = PlaceHolderImages.find(p => p.id === 'project-27');



export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  // { label: 'Contact', href: '#contact' },
];

export const PROFILE_DATA = {
  name: 'Ahmed Shawky',
  headline: 'Senior Mobile Engineer',
  bio: "Senior Mobile Engineer with 5+ years of experience building and scaling mobile applications across Flutter, Android (Kotlin), and iOS (Objective-C, Swift, SwiftUI).Started as a native Android Developer, transitioned to Flutter, and delivered 30+ production apps across multiple industries.",
  avatar: avatar!,
  social: [
    { name: 'GitHub', url: 'https://github.com/AhmedShawkyAhmed', icon: Github },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ahmed-shawky-ahmed/', icon: Linkedin },
    { name: 'Email', url: 'mailto:shawkyahmed392@email.com', icon: Mail },
  ],
};

export const SKILLS_DATA = {
  title: "Skills & Expertise",
  description: "I have experience with a wide range of technologies and tools. Here are some of my key skills.",
  skills: [
    'Flutter', 'Dart', 'Kotlin', 'iOS (Swift, SwiftUI, Objective-C)', 'Jetpack Compose', 'Platform Channels',
    'Clean Architecture', 'Modular Design', 'OOP', 'SOLID', 'BLoC', 'Cubit', 'Provider', 'GetX',
    'Firebase (Auth, Firestore, Realtime DB, Cloud Messaging)', 'Laravel', 'REST APIs', 'WebSocket', 'Socket.IO',
    'CI/CD (GitHub Actions, Fastlane)', 'App Store & Play Store Releases', 'Unit/Widget/Integration Testing', 'Git',
    'Google Maps API', 'Live Location Tracking', 'Geofencing', 'Heatmaps',
    'Code Reviews', 'Mobile Standards', 'Mentoring', 'Agile/Scrum', 'Jira', 'Asana'
  ]   
};

export const EXPERIENCE_DATA = {
  title: "Professional Experience",
  description: "A timeline of my career, highlighting my roles and accomplishments.",
  experiences: [
    {
      role: 'Senior Mobile Engineer',
      company: 'intalio',
      period: 'Oct 2024 – Present',
      description: 'Deliver and maintain Flutter and iOS (Objective-C, Swift, SwiftUI) applications across multiple business domains, define and enforce mobile engineering standards, lead code reviews, mentor and support senior engineers with architectural guidance, design and maintain CI/CD pipelines using GitHub Actions and Codemagic, modernize legacy Objective-C apps to Swift/SwiftUI, and develop internal packages and tooling to standardize functionality and enhance team productivity.'
    },
    {
      role: 'Senior Mobile Engineer',
      company: 'Alhawsaba',
      period: 'Oct 2022 – Sep 2024',
      description: 'Delivered and maintained multiple production Flutter apps, implemented native Kotlin and Swift features via Platform Channels, built reusable Google Maps Heatmap and internal Flutter packages, developed a modular real-time chat system, led GetX-to-BLoC migrations, optimized performance and stability, and collaborated with backend engineers to deliver high-quality mobile solutions.'
    },
    {
      role: 'Mobile Application Developer',
      company: 'Magdsoft',
      period: 'May 2020 – Oct 2022',
      description: 'Developed and maintained native Android apps with Kotlin, transitioned to Flutter as a core cross-platform contributor, delivered 20+ production apps including live tracking, Google Maps, and e-commerce solutions, built reusable Flutter components, integrated real-time features and location services, and optimized performance to improve app quality and user experience.'
    }
  ]
};

export const PROJECTS_DATA = {
  title: "Featured Projects",
  description: "A selection of projects that showcase my skills and passion for building.",
  projects: [
    {
      title: 'BeTrend',
      image: project1!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/Tawreed',
      appStoreUrl: 'https://apps.apple.com/us/app/tawreed/id1661793471',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.alhawsabah.tawreed'
    },
    {
      title: 'Bird Store',
      image: project2!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/Moments',
      appStoreUrl: 'https://apps.apple.com/us/app/moments-event/id6449982436',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.alhawsabah.moments'
    },
    {
      title: 'Blue Wave',
      image: project3!,
      githubUrl: '#',
      appStoreUrl: 'https://apps.apple.com/us/app/hayakum/id1573012871',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.magdsoft.hayakum'
    },
    {
      title: 'CeFoure',
      image: project4!,
      githubUrl: '#',
      appStoreUrl: 'https://apps.apple.com/us/app/iclosed/id1535388383',
      playStoreUrl: '#'
    },
    {
        title: 'HiShare',
        image: project5!,
        githubUrl: '#',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.magdsoft.bazar',
    },
    {
        title: 'Imtyazat',
        image: project6!,
        githubUrl: '#',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.magdsoft.asas',
    },
    {
      title: 'JetCare',
      image: project7!,
      githubUrl: '#',
      playStoreUrl: '#',
    },
    {
      title: 'My Expenses',
      image: project8!,
      githubUrl: '#',
      playStoreUrl: '#',
    },
    {
      title: 'Osta',
      image: project9!,
      githubUrl: '#',
      playStoreUrl: '#',
    },
    {
      title: 'Osta Provider',
      image: project10!,
      githubUrl: '#',
      playStoreUrl: '#',
    },
    {
      title: 'Otlop',
      image: project11!,
      githubUrl: '#',
      playStoreUrl: '#',
    },
    {
      title: 'Seda',
      image: project12!,
      githubUrl: '#',
      playStoreUrl: '#',
    },
    {
      title: 'Seda Driver',
      image: project13!,
      githubUrl: '#',
      playStoreUrl: '#',
    },
    {
      title: 'Sehtak Tehmna',
      image: project14!,
      githubUrl: '#',
      playStoreUrl: '#',
    },
    {
      title: 'ShawkyCLI',
      image: project15!,
      githubUrl: '#',
      playStoreUrl: '#',
    },
    {
      title: 'Sonic Mobility',
      image: project16!,
      githubUrl: '#',
      playStoreUrl: '#',
    },
    {
      title: 'Steps Tracker',
      image: project17!,
      githubUrl: '#',
      playStoreUrl: '#',
    },
    {
      title: 'Tripta',
      image: project18!,
      githubUrl: '#',
      playStoreUrl: '#',
    },
    {
      title: 'Tripta Hero',
      image: project19!,
      githubUrl: '#',
      playStoreUrl: '#',
    },
    {
      title: 'Hive Service',
      image: project20!,
      githubUrl: '#',
      playStoreUrl: '#',
    },
    {
      title: 'Location Service',
      image: project21!,
      githubUrl: '#',
      playStoreUrl: '#',
    },
    {
      title: 'Maps Plugin',
      image: project22!,
      githubUrl: '#',
      playStoreUrl: '#',
    },
    {
      title: 'Network Service',
      image: project23!,
      githubUrl: '#',
      playStoreUrl: '#',
    },
    {
      title: 'Notification Service',
      image: project24!,
      githubUrl: '#',
      playStoreUrl: '#',
    },
    {
      title: 'Permission Service',
      image: project25!,
      githubUrl: '#',
      playStoreUrl: '#',
    },
    {
      title: 'Security Service',
      image: project26!,
      githubUrl: '#',
      playStoreUrl: '#',
    },
    {
      title: 'Socket Service',
      image: project27!,
      githubUrl: '#',
      playStoreUrl: '#',
    }
  ]
};

export const CONTACT_DATA = {
  title: "Get in Touch",
  description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out."
};
