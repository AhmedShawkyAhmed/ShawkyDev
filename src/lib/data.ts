import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { PlaceHolderImages } from "./placeholder-images";

const avatar = PlaceHolderImages.find(p => p.id === 'avatar');
const project1 = PlaceHolderImages.find(p => p.id === 'project-1');
const project2 = PlaceHolderImages.find(p => p.id === 'project-2');
const project3 = PlaceHolderImages.find(p => p.id === 'project-3');
const project4 = PlaceHolderImages.find(p => p.id === 'project-4');

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
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
    'React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Node.js', 
    'Python', 'GraphQL', 'REST APIs', 'PostgreSQL', 'Docker', 'Kubernetes',
    'Google Cloud', 'Firebase', 'Tailwind CSS', 'Figma'
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
      title: 'Project Phoenix',
      description: 'A comprehensive dashboard for data analysis, built with Next.js and a custom charting library. Features real-time data streaming and advanced filtering capabilities.',
      image: project1!,
      tags: ['Next.js', 'TypeScript', 'Data Viz'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AI Content Generator',
      description: 'A platform that leverages generative AI to create marketing copy and social media posts. Built using Python, FastAPI, and React, with a focus on a simple and intuitive user experience.',
      image: project2!,
      tags: ['React', 'Python', 'AI/ML'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'ConnectSphere Mobile',
      description: 'A cross-platform social networking app developed with React Native. It includes features like instant messaging, a dynamic news feed, and profile customization.',
      image: project3!,
      tags: ['React Native', 'Firebase', 'Mobile'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'E-commerce Storefront',
      description: 'A fully-featured e-commerce site with a custom CMS for product management. Optimized for performance and SEO, resulting in a 20% increase in conversion rates.',
      image: project4!,
      tags: ['Next.js', 'GraphQL', 'E-commerce'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ]
};

export const CONTACT_DATA = {
  title: "Get in Touch",
  description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out."
};
