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
      image: project16!,
      appStoreUrl: 'https://apps.apple.com/eg/app/sonic-mobility-sharing-scooter/id6447569706',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.SonicMobility.sonic&pcampaignid=web_share',
    },
    {
      title: 'Aero Scope',
      image: project28!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/AeroScope.git',
    },
    {
      title: 'Imtyazat',
      image: project6!,
      appStoreUrl: 'https://apps.apple.com/bh/app/imtyazat-%D8%A7%D9%85%D8%AA%D9%8A%D8%A7%D8%B2%D8%A7%D8%AA/id6744577970',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=qa.gov.mofa.imtyazatpublic&pcampaignid=web_share',
    },
    {
      title: 'CeFoure',
      image: project4!,
      appStoreUrl: 'https://apps.apple.com/bh/app/cefour/id6476445911',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.cefour.cefour&pcampaignid=web_share',
    },
    {
      title: 'HiShare',
      image: project5!,
      appStoreUrl: 'https://apps.apple.com/bh/app/%D9%87%D8%A7%D9%8A-%D8%B4%D9%8A%D8%B1/id6739570429',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.hishare.platform&pcampaignid=web_share',
    },
    {
      title: 'BeTrend',
      image: project1!,
      appStoreUrl: 'https://apps.apple.com/bh/app/be-trend-%D8%A8%D9%8A-%D8%AA%D8%B1%D9%86%D8%AF/id1658865427',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.diwan.beTrend&pcampaignid=web_share',
    },
    {
      title: 'Sehtak Tehmna',
      image: project14!,
      appStoreUrl: 'https://apps.apple.com/bh/app/%D8%B5%D8%AD%D8%AA%D9%83-%D8%AA%D9%87%D9%85%D9%86%D8%A7/id6477756584',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.sihatukTuhumuna.sihatukTuhumuna&pcampaignid=web_share',
    },
    {
      title: 'JetCare',
      image: project7!,
      appStoreUrl: 'https://apps.apple.com/bh/app/jet-care/id6446169634',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.jetcareeg.jetcare&pcampaignid=web_share',
    },
    {
      title: 'Tripta',
      image: project18!,
      appStoreUrl: 'https://apps.apple.com/bh/app/tripta-eg/id1640910594',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.tripta.user&pcampaignid=web_share',
    },
    {
      title: 'Tripta Hero',
      image: project19!,
      appStoreUrl: 'https://apps.apple.com/bh/app/tripta-hero/id1640911684',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.tripta.driver&pcampaignid=web_share',
    },
    {
      title: 'Blue Wave',
      image: project3!,
    },
    {
      title: 'Steps Tracker',
      image: project17!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/step_tracker.git',
    },
    {
      title: 'Bird Store',
      image: project2!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/bird_store_ios.git'
    },
    {
      title: 'My Expenses',
      image: project8!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/shawky.git',
    },
    {
      title: 'Osta',
      image: project9!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/RouteMe_Mobile.git',
    },
    {
      title: 'Osta Provider',
      image: project10!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/RouteMe_Mobile.git',
    },
    {
      title: 'Otlop',
      image: project11!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/otlop.git',
    },
    {
      title: 'Seda',
      image: project12!,
    },
    {
      title: 'Seda Driver',
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
      image: project15!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/shawky_cli.git',
    },
    {
      title: 'Maps Plugin',
      image: project22!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/heat_map_plugin.git',
    },
    {
      title: 'Network Service',
      image: project23!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/network_service.git',
    },
    {
      title: 'Location Service',
      image: project21!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/location_service.git',
    },
    {
      title: 'Security Service',
      image: project26!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/security_service.git',
    },
    {
      title: 'Socket Service',
      image: project27!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/socket_service.git',
    },
    {
      title: 'Notification Service',
      image: project24!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/notification_service.git',
    },
    {
      title: 'Permission Service',
      image: project25!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/permission_service.git',
    },
    {
      title: 'Hive Service',
      image: project20!,
      githubUrl: 'https://github.com/AhmedShawkyAhmed/hive_service.git',
    }
  ]
}

export const CONTACT_DATA = {
  title: "Get in Touch",
  description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out."
};
