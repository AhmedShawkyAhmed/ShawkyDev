import { Github, Linkedin, Mail } from "lucide-react";
import { PlaceHolderImages } from "./placeholder-images";
import {
  FlutterIcon,
  DartIcon,
  KotlinIcon,
  SwiftIcon,
  FirebaseIcon,
  GitIcon,
  GitLabIcon,
  GitHubActionsIcon,
  FigmaIcon,
  JiraIcon,
  AsanaIcon,
} from "@/components/icons";
import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

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
const project28 = PlaceHolderImages.find(p => p.id === 'project-28');



export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Packages', href: '#packages' },
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
  description: "Here's a breakdown of my technical skills, from mobile development to backend systems and leadership.",
  skillCategories: [
    {
      title: "Mobile Engineering",
      skills: [
        { name: "Flutter" },
        { name: "Dart" },
        { name: "Android (Kotlin)" },
        { name: "iOS (Swift, SwiftUI)" },
        { name: "Jetpack Compose" },
        { name: "Platform Channels" },
        { name: "SDK Integration" },
      ],
    },
    {
      title: "Architecture & State Management",
      skills: [
        { name: "Clean Architecture" },
        { name: "Modular Design" },
        { name: "OOP & SOLID" },
        { name: "BLoC & Cubit" },
        { name: "Provider" },
        { name: "GetX" },
        { name: "Offline-First" },
      ],
    },
    {
      title: "Backend & Real-Time Systems",
      skills: [
        { name: "Firebase" },
        { name: "Laravel" },
        { name: "Supabase" },
        { name: "GraphQL" },
        { name: "SQL" },
        { name: "REST APIs" },
        { name: "WebSocket" },
        { name: "Socket.IO" },
      ],
    },
    {
      title: "DevOps, CI/CD & Testing",
      skills: [
        { name: "GitHub Actions" },
        { name: "Fastlane" },
        { name: "Unit & Integration Testing" },
        { name: "App Store & Play Store" },
        { name: "Git" },
        { name: "GitHub" },
        { name: "GitLab" },
      ],
    },
    {
      title: "Maps & Location Services",
      skills: [
        { name: "Google Maps API" },
        { name: "Live Location Tracking" },
        { name: "Routing & Geofencing" },
        { name: "Heatmaps" },
      ],
    },
    {
      title: "Leadership & Collaboration",
      skills: [
        { name: "Code Reviews" },
        { name: "Mobile Standards" },
        { name: "Mentoring" },
        { name: "Agile/Scrum" },
        { name: "Jira" },
        { name: "Asana" },
      ],
    },
  ],
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
      title: 'Sonic Mobility',
      description: 'An app for a scooter-sharing service for easy urban travel.',
      image: project16!,
      appStoreUrl: 'https://apps.apple.com/eg/app/sonic-mobility-sharing-scooter/id6447569706',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.SonicMobility.sonic&pcampaignid=web_share',
    },
    {
      title: 'Aero Scope',
      description: 'A weather forecasting app providing detailed atmospheric data.',
      image: project28!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/AeroScope.git',
    },
    {
      title: 'Imtyazat',
      description: 'A loyalty and rewards platform for customers in Bahrain.',
      image: project6!,
      appStoreUrl: 'https://apps.apple.com/bh/app/imtyazat-%D8%A7%D9%85%D8%AA%D9%8A%D8%A7%D8%B2%D8%A7%D8%AA/id6744577970',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=qa.gov.mofa.imtyazatpublic&pcampaignid=web_share',
    },
    {
      title: 'CeFoure',
      description: 'An e-commerce platform for a variety of products.',
      image: project4!,
      appStoreUrl: 'https://apps.apple.com/bh/app/cefour/id6476445911',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.cefour.cefour&pcampaignid=web_share',
    },
    {
      title: 'HiShare',
      description: 'A social sharing platform for connecting with friends.',
      image: project5!,
      appStoreUrl: 'https://apps.apple.com/bh/app/%D9%87%D8%A7%D9%8A-%D8%B4%D9%8A%D8%B1/id6739570429',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.hishare.platform&pcampaignid=web_share',
    },
    {
      title: 'BeTrend',
      description: 'A fashion and trend discovery application.',
      image: project1!,
      appStoreUrl: 'https://apps.apple.com/bh/app/be-trend-%D8%A8%D9%8A-%D8%AA%D8%B1%D9%86%D8%AF/id1658865427',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.diwan.beTrend&pcampaignid=web_share',
    },
    {
      title: 'Sehtak Tehmna',
      description: 'A health and wellness application for users in Bahrain.',
      image: project14!,
      appStoreUrl: 'https://apps.apple.com/bh/app/%D8%B5%D8%AD%D8%AA%D9%83-%D8%AA%D9%87%D9%85%D9%86%D8%A7/id6477756584',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.sihatukTuhumuna.sihatukTuhumuna&pcampaignid=web_share',
    },
    {
      title: 'JetCare',
      description: 'A car wash and detailing service booking application.',
      image: project7!,
      appStoreUrl: 'https://apps.apple.com/bh/app/jet-care/id6446169634',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.jetcareeg.jetcare&pcampaignid=web_share',
    },
    {
      title: 'Tripta',
      description: 'A ride-hailing application for booking trips.',
      image: project18!,
      appStoreUrl: 'https://apps.apple.com/bh/app/tripta-eg/id1640910594',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.tripta.user&pcampaignid=web_share',
    },
    {
      title: 'Tripta Hero',
      description: 'The driver-facing application for the Tripta ride-hailing service.',
      image: project19!,
      appStoreUrl: 'https://apps.apple.com/bh/app/tripta-hero/id1640911684',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.tripta.driver&pcampaignid=web_share',
    },
    {
      title: 'Blue Wave',
      description: 'A business utility application with custom features.',
      image: project3!,
    },
    {
      title: 'Steps Tracker',
      description: 'A fitness app to track daily steps and activity.',
      image: project17!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/step_tracker.git',
    },
    {
      title: 'Bird Store',
      description: 'An e-commerce app for a pet store specializing in birds.',
      image: project2!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/bird_store_ios.git'
    },
    {
      title: 'My Expenses',
      description: 'A personal finance app for tracking expenses.',
      image: project8!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/shawky.git',
    },
    {
      title: 'Osta',
      description: 'A service marketplace connecting users with local providers.',
      image: project9!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/RouteMe_Mobile.git',
    },
    {
      title: 'Osta Provider',
      description: 'The provider-facing app for the Osta service marketplace.',
      image: project10!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/RouteMe_Mobile.git',
    },
    {
      title: 'Otlop',
      description: 'A food delivery application for ordering from local restaurants.',
      image: project11!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/otlop.git',
    },
    {
      title: 'Seda',
      description: 'A delivery and logistics management application.',
      image: project12!,
    },
    {
      title: 'Seda Driver',
      description: 'The driver application for the Seda delivery platform.',
      image: project13!,
    },
  ]
};

export const PACKAGES_DATA = {
  title: "Reusable Packages",
  description: "A collection of my open-source and internal packages.",
  packages: [
    {
      title: 'ShawkyCLI',
      description: 'A command-line tool to automate Flutter project creation and management.',
      image: project15!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/shawky_cli.git',
    },
    {
      title: 'Maps Plugin',
      description: 'A reusable Flutter package for displaying heatmaps on Google Maps.',
      image: project22!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/heat_map_plugin.git',
    },
    {
      title: 'Network Service',
      description: 'A Dart package to handle network requests and API communication.',
      image: project23!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/network_service.git',
    },
    {
      title: 'Location Service',
      description: 'A Flutter package for abstracting and managing device location services.',
      image: project21!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/location_service.git',
    },
    {
      title: 'Security Service',
      description: 'A package for handling data encryption and secure storage.',
      image: project26!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/security_service.git',
    },
    {
      title: 'Socket Service',
      description: 'A Dart package for managing WebSocket and real-time communication.',
      image: project27!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/socket_service.git',
    },
    {
      title: 'Notification Service',
      description: 'A Flutter package for integrating and managing push notifications.',
      image: project24!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/notification_service.git',
    },
    {
      title: 'Permission Service',
      description: 'A Flutter utility for handling device permission requests.',
      image: project25!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/permission_service.git',
    },
    {
      title: 'Hive Service',
      description: 'A wrapper for the Hive database to simplify local data storage in Flutter.',
      image: project20!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/hive_service.git',
    }
  ]
}

export const CONTACT_DATA = {
  title: "Get in Touch",
  description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out."
};
