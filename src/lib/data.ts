import { Github, Linkedin, Mail } from "lucide-react";
import { PlaceHolderImages, type ImagePlaceholder } from "./placeholder-images";
import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

const byId = (id: string) => {
  const image = PlaceHolderImages.find((item) => item.id === id);
  if (!image) throw new Error(`Missing image placeholder for id: ${id}`);
  return image;
};

const avatar = byId("avatar");
const project1 = byId("project-1");
const project2 = byId("project-2");
const project3 = byId("project-3");
const project4 = byId("project-4");
const project5 = byId("project-5");
const project6 = byId("project-6");
const project7 = byId("project-7");
const project8 = byId("project-8");
const project9 = byId("project-9");
const project10 = byId("project-10");
const project11 = byId("project-11");
const project12 = byId("project-12");
const project13 = byId("project-13");
const project14 = byId("project-14");
const project15 = byId("project-15");
const project16 = byId("project-16");
const project17 = byId("project-17");
const project18 = byId("project-18");
const project19 = byId("project-19");
const project20 = byId("project-20");
const project21 = byId("project-21");
const project22 = byId("project-22");
const project23 = byId("project-23");
const project24 = byId("project-24");
const project25 = byId("project-25");
const project26 = byId("project-26");
const project27 = byId("project-27");
const project28 = byId("project-28");

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export type PortfolioItem = {
  slug: string;
  title: string;
  category: "project" | "package";
  description: string;
  image: ImagePlaceholder;
  banner: ImagePlaceholder;
  icon: ImagePlaceholder;
  frameworks: string[];
  languages: string[];
  downloads: string;
  rating: number;
  githubUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  screenshots: ImagePlaceholder[];
  features: string[];
  projectIdea: string;
  showcase: string;
  diagram?: ImagePlaceholder;
};

type PartialPortfolioItem = {
  title: string;
  category: "project" | "package";
  description: string;
  image: ImagePlaceholder;
  frameworks?: string[];
  languages?: string[];
  downloads?: string;
  rating?: number;
  githubUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  screenshots?: ImagePlaceholder[];
  features?: string[];
  projectIdea?: string;
  showcase?: string;
  diagram?: ImagePlaceholder;
};

const buildPortfolioItem = (item: PartialPortfolioItem): PortfolioItem => ({
  slug: toSlug(item.title),
  title: item.title,
  category: item.category,
  description: item.description,
  image: item.image,
  banner: item.image,
  icon: item.image,
  frameworks: item.frameworks ?? ["Flutter"],
  languages: item.languages ?? ["Dart"],
  downloads: item.downloads ?? "10K+",
  rating: item.rating ?? 4.7,
  githubUrl: item.githubUrl,
  appStoreUrl: item.appStoreUrl,
  playStoreUrl: item.playStoreUrl,
  screenshots: item.screenshots ?? [item.image, item.image, item.image],
  features:
    item.features ?? [
      "Modular architecture for maintainability",
      "Scalable state management and clean data flow",
      "Production-ready release and CI/CD workflow",
    ],
  projectIdea:
    item.projectIdea ??
    `Designed to solve a clear user problem in ${item.category === "project" ? "mobile product" : "developer workflow"} delivery with reliable performance and maintainable architecture.`,
  showcase:
    item.showcase ??
    "Implemented core workflows, optimized app performance, and delivered a polished user experience with clear engineering tradeoffs.",
  diagram: item.diagram,
});

const PROJECT_ITEMS: PortfolioItem[] = [
  buildPortfolioItem({
    title: "Sonic Mobility",
    category: "project",
    description: "E-scooter sharing platform for urban mobility.",
    image: project16,
    frameworks: ["Flutter", "Firebase", "Google Maps"],
    languages: ["Dart", "Kotlin", "Swift"],
    downloads: "50K+",
    rating: 4.8,
    appStoreUrl: "https://apps.apple.com/eg/app/sonic-mobility-sharing-scooter/id6447569706",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.SonicMobility.sonic&pcampaignid=web_share",
    features: ["Live vehicle availability", "Trip tracking and route visualization", "Payment and ride history"],
    projectIdea: "Build a city-friendly micro-mobility experience that minimizes friction between unlock, ride, and payment.",
    showcase: "Delivered geolocation-heavy booking and ride flows with strong reliability in real traffic conditions.",
    diagram: project22,
  }),
  buildPortfolioItem({
    title: "Aero Scope",
    category: "project",
    description: "Real-time flight tracker with detailed flight information.",
    image: project28,
    frameworks: ["Flutter", "Map APIs", "REST APIs"],
    languages: ["Dart"],
    downloads: "12K+",
    rating: 4.6,
    githubUrl: "https://github.com/AhmedShawkyAhmed/AeroScope.git",
    features: ["Real-time flight map", "Flight detail timeline", "Search by route and flight number"],
    diagram: project23,
  }),
  buildPortfolioItem({
    title: "Imtyazat",
    category: "project",
    description: "A loyalty and rewards program application.",
    image: project6,
    frameworks: ["Flutter", "Firebase", "Push Notifications"],
    languages: ["Dart", "Swift", "Kotlin"],
    downloads: "100K+",
    rating: 4.9,
    appStoreUrl: "https://apps.apple.com/bh/app/imtyazat-%D8%A7%D9%85%D8%AA%D9%8A%D8%A7%D8%B2%D8%A7%D8%AA/id6744577970",
    playStoreUrl: "https://play.google.com/store/apps/details?id=qa.gov.mofa.imtyazatpublic&pcampaignid=web_share",
  }),
  buildPortfolioItem({
    title: "CeFoure",
    category: "project",
    description: "A marketplace for discovering and booking local services.",
    image: project4,
    frameworks: ["Flutter", "BLoC", "REST APIs"],
    languages: ["Dart", "Kotlin"],
    downloads: "40K+",
    rating: 4.7,
    appStoreUrl: "https://apps.apple.com/bh/app/cefour/id6476445911",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.cefour.cefour&pcampaignid=web_share",
  }),
  buildPortfolioItem({
    title: "HiShare",
    category: "project",
    description: "Social networking app for sharing content and connecting with others.",
    image: project5,
    frameworks: ["Flutter", "Socket.IO", "Firebase"],
    languages: ["Dart"],
    downloads: "30K+",
    rating: 4.6,
    appStoreUrl: "https://apps.apple.com/bh/app/%D9%87%D8%A7%D9%8A-%D8%B4%D9%8A%D8%B1/id6739570429",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.hishare.platform&pcampaignid=web_share",
  }),
  buildPortfolioItem({
    title: "BeTrend",
    category: "project",
    description: "A fashion e-commerce platform with trend discovery.",
    image: project1,
    frameworks: ["Flutter", "Firebase", "Payment APIs"],
    languages: ["Dart", "Swift"],
    downloads: "75K+",
    rating: 4.8,
    appStoreUrl: "https://apps.apple.com/bh/app/be-trend-%D8%A8%D9%8A-%D8%AA%D8%B1%D9%86%D8%AF/id1658865427",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.diwan.beTrend&pcampaignid=web_share",
  }),
  buildPortfolioItem({
    title: "Sehtak Tehmna",
    category: "project",
    description: "A healthcare application for managing appointments and health records.",
    image: project14,
    frameworks: ["Flutter", "Firebase", "REST APIs"],
    languages: ["Dart", "Swift", "Kotlin"],
    downloads: "60K+",
    rating: 4.8,
    appStoreUrl: "https://apps.apple.com/bh/app/%D8%B5%D8%AD%D8%AA%D9%83-%D8%AA%D9%87%D9%85%D9%86%D8%A7/id6477756584",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.sihatukTuhumuna.sihatukTuhumuna&pcampaignid=web_share",
  }),
  buildPortfolioItem({
    title: "JetCare",
    category: "project",
    description: "On-demand car wash and detailing service booking app.",
    image: project7,
    frameworks: ["Flutter", "Maps", "REST APIs"],
    languages: ["Dart"],
    downloads: "20K+",
    rating: 4.7,
    appStoreUrl: "https://apps.apple.com/bh/app/jet-care/id6446169634",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.jetcareeg.jetcare&pcampaignid=web_share",
  }),
  buildPortfolioItem({
    title: "Tripta",
    category: "project",
    description: "A ride-sharing application for everyday transit.",
    image: project18,
    frameworks: ["Flutter", "Google Maps", "WebSocket"],
    languages: ["Dart", "Kotlin", "Swift"],
    downloads: "90K+",
    rating: 4.8,
    appStoreUrl: "https://apps.apple.com/bh/app/tripta-eg/id1640910594",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.tripta.user&pcampaignid=web_share",
    diagram: project27,
  }),
  buildPortfolioItem({
    title: "Tripta Hero",
    category: "project",
    description: "The companion app for drivers on the Tripta platform.",
    image: project19,
    frameworks: ["Flutter", "Google Maps", "Socket.IO"],
    languages: ["Dart", "Kotlin"],
    downloads: "65K+",
    rating: 4.7,
    appStoreUrl: "https://apps.apple.com/bh/app/tripta-hero/id1640911684",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.tripta.driver&pcampaignid=web_share",
  }),
  buildPortfolioItem({
    title: "Blue Wave",
    category: "project",
    description: "An application for booking water sports and activities.",
    image: project3,
    frameworks: ["Flutter", "REST APIs"],
    languages: ["Dart"],
    downloads: "8K+",
    rating: 4.5,
  }),
  buildPortfolioItem({
    title: "Steps Tracker",
    category: "project",
    description: "A simple mobile application to track daily steps.",
    image: project17,
    frameworks: ["Flutter", "Health APIs"],
    languages: ["Dart"],
    downloads: "5K+",
    rating: 4.4,
    githubUrl: "https://github.com/AhmedShawkyAhmed/step_tracker.git",
  }),
  buildPortfolioItem({
    title: "Bird Store",
    category: "project",
    description: "An e-commerce mobile application for a pet bird store.",
    image: project2,
    frameworks: ["Flutter", "REST APIs"],
    languages: ["Dart"],
    downloads: "9K+",
    rating: 4.5,
    githubUrl: "https://github.com/AhmedShawkyAhmed/bird_store_ios.git",
  }),
  buildPortfolioItem({
    title: "My Expenses",
    category: "project",
    description: "A personal finance application for tracking expenses.",
    image: project8,
    frameworks: ["Flutter", "Hive"],
    languages: ["Dart"],
    downloads: "6K+",
    rating: 4.4,
    githubUrl: "https://github.com/AhmedShawkyAhmed/shawky.git",
  }),
  buildPortfolioItem({
    title: "Osta",
    category: "project",
    description: "A platform to connect users with skilled tradespeople.",
    image: project9,
    frameworks: ["Flutter", "Google Maps", "REST APIs"],
    languages: ["Dart", "Kotlin"],
    downloads: "25K+",
    rating: 4.6,
    githubUrl: "https://github.com/AhmedShawkyAhmed/RouteMe_Mobile.git",
  }),
  buildPortfolioItem({
    title: "Osta Provider",
    category: "project",
    description: "The companion app for service providers on the Osta platform.",
    image: project10,
    frameworks: ["Flutter", "Google Maps", "REST APIs"],
    languages: ["Dart"],
    downloads: "18K+",
    rating: 4.5,
    githubUrl: "https://github.com/AhmedShawkyAhmed/RouteMe_Mobile.git",
  }),
  buildPortfolioItem({
    title: "Otlop",
    category: "project",
    description: "A food and grocery delivery service application.",
    image: project11,
    frameworks: ["Flutter", "Maps", "Realtime updates"],
    languages: ["Dart"],
    downloads: "45K+",
    rating: 4.7,
    githubUrl: "https://github.com/AhmedShawkyAhmed/otlop.git",
  }),
  buildPortfolioItem({
    title: "Seda",
    category: "project",
    description: "An on-demand package delivery service app.",
    image: project12,
    frameworks: ["Flutter", "Maps", "REST APIs"],
    languages: ["Dart"],
    downloads: "35K+",
    rating: 4.6,
  }),
  buildPortfolioItem({
    title: "Seda Driver",
    category: "project",
    description: "The companion app for drivers on the Seda platform.",
    image: project13,
    frameworks: ["Flutter", "Maps", "Realtime updates"],
    languages: ["Dart", "Kotlin"],
    downloads: "28K+",
    rating: 4.6,
  }),
];

const PACKAGE_ITEMS: PortfolioItem[] = [
  buildPortfolioItem({
    title: "ShawkyCLI",
    category: "package",
    description: "A command-line tool to streamline Flutter project setup and management.",
    image: project15,
    frameworks: ["CLI", "Flutter Tooling"],
    languages: ["Dart", "Shell"],
    downloads: "18K+",
    rating: 4.9,
    githubUrl: "https://github.com/AhmedShawkyAhmed/shawky_cli.git",
    features: ["Project bootstrap automation", "Opinionated folder architecture", "Fast setup for teams"],
    projectIdea: "Standardize project initialization and reduce repetitive setup work for Flutter teams.",
  }),
  buildPortfolioItem({
    title: "Maps Plugin",
    category: "package",
    description: "A Flutter plugin for advanced Google Maps features like heatmaps.",
    image: project22,
    frameworks: ["Flutter Plugin", "Google Maps"],
    languages: ["Dart", "Kotlin", "Swift"],
    downloads: "22K+",
    rating: 4.8,
    githubUrl: "https://github.com/AhmedShawkyAhmed/heat_map_plugin.git",
    diagram: project22,
  }),
  buildPortfolioItem({
    title: "Network Service",
    category: "package",
    description: "A reusable service layer for handling network requests in Flutter.",
    image: project23,
    frameworks: ["Flutter Package", "Dio"],
    languages: ["Dart"],
    downloads: "31K+",
    rating: 4.8,
    githubUrl: "https://github.com/AhmedShawkyAhmed/network_service.git",
  }),
  buildPortfolioItem({
    title: "Location Service",
    category: "package",
    description: "A wrapper for handling location services and permissions in Flutter.",
    image: project21,
    frameworks: ["Flutter Package", "Location APIs"],
    languages: ["Dart", "Kotlin", "Swift"],
    downloads: "16K+",
    rating: 4.7,
    githubUrl: "https://github.com/AhmedShawkyAhmed/location_service.git",
  }),
  buildPortfolioItem({
    title: "Security Service",
    category: "package",
    description: "A service for handling data encryption and secure local storage.",
    image: project26,
    frameworks: ["Flutter Package", "Secure Storage"],
    languages: ["Dart"],
    downloads: "14K+",
    rating: 4.8,
    githubUrl: "https://github.com/AhmedShawkyAhmed/security_service.git",
  }),
  buildPortfolioItem({
    title: "Socket Service",
    category: "package",
    description: "Manages WebSocket connections for real-time features in Flutter apps.",
    image: project27,
    frameworks: ["Flutter Package", "Socket.IO"],
    languages: ["Dart"],
    downloads: "19K+",
    rating: 4.8,
    githubUrl: "https://github.com/AhmedShawkyAhmed/socket_service.git",
  }),
  buildPortfolioItem({
    title: "Notification Service",
    category: "package",
    description: "A unified service for handling local and push notifications.",
    image: project24,
    frameworks: ["Flutter Package", "FCM"],
    languages: ["Dart"],
    downloads: "20K+",
    rating: 4.7,
    githubUrl: "https://github.com/AhmedShawkyAhmed/notification_service.git",
  }),
  buildPortfolioItem({
    title: "Permission Service",
    category: "package",
    description: "A simplified way to request and check device permissions in Flutter.",
    image: project25,
    frameworks: ["Flutter Package"],
    languages: ["Dart"],
    downloads: "17K+",
    rating: 4.7,
    githubUrl: "https://github.com/AhmedShawkyAhmed/permission_service.git",
  }),
  buildPortfolioItem({
    title: "Hive Service",
    category: "package",
    description: "A service layer for interacting with the Hive local database in Flutter.",
    image: project20,
    frameworks: ["Flutter Package", "Hive"],
    languages: ["Dart"],
    downloads: "13K+",
    rating: 4.6,
    githubUrl: "https://github.com/AhmedShawkyAhmed/hive_service.git",
  }),
];

export const ALL_PORTFOLIO_ITEMS: PortfolioItem[] = [...PROJECT_ITEMS, ...PACKAGE_ITEMS];

export const getPortfolioItemBySlug = (slug: string) =>
  ALL_PORTFOLIO_ITEMS.find((item) => item.slug === slug);

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Packages", href: "#packages" },
  { label: "Skills", href: "#skills" },
];

export const PROFILE_DATA = {
  name: "Ahmed Shawky",
  headline: "Senior Mobile Engineer | Flutter & Native Mobile (Swift/Kotlin) | Architecture & Scalable Systems",
  bio: "I architect and build scalable mobile platforms using Flutter and native iOS (Swift) and Android (Kotlin), specializing in clean architecture, real-time systems, and production-grade performance. I focus on designing modular, maintainable systems that power high-scale applications and evolve with business growth.",
  avatar,
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Apps Delivered", value: "30+" },
    { label: "Domains", value: "Enterprise, Mobility, Commerce" },
  ],
  social: [
    { name: "GitHub", url: "https://github.com/AhmedShawkyAhmed", icon: Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ahmed-shawky-ahmed/", icon: Linkedin },
    { name: "Email", url: "mailto:shawkyahmed392@email.com", icon: Mail },
  ],
};

export const SKILLS_DATA = {
  title: "Skills & Expertise",
  description: "A practical toolkit spanning mobile engineering, architecture, backend integration, and team leadership.",
  skillCategories: [
    {
      title: "Mobile Platforms & Native Development",
      skills: [
        { name: "Flutter" },
        { name: "Dart" },
        { name: "Native Android (Kotlin)" },
        { name: "Native iOS (Swift, SwiftUI)" },
        { name: "Jetpack Compose" },
        { name: "Flutter Plugin Development" },
        { name: "Platform Channels" },
        { name: "Performance Optimization" },
      ],
    },
    {
      title: "Architecture & System Design",
      skills: [
        { name: "Clean Architecture" },
        { name: "Modular & Feature-First Design" },
        { name: "Dependency Injection" },
        { name: "BLoC & Cubit" },
        { name: "Offline-First Architecture" },
        { name: "Sync Engine Design" },
        { name: "Scalable Codebases" },
      ],
    },
    {
      title: "Backend Integration & Distributed Systems",
      skills: [
        { name: "REST & GraphQL APIs" },
        { name: "WebSocket Architecture" },
        { name: "Socket.IO" },
        { name: "Firebase (Auth, Firestore, Messaging)" },
        { name: "Laravel" },
        { name: "Serverpod" },
        { name: "SQL Databases" },
        { name: "Push Notification Systems" },
      ],
    },
    {
      title: "Delivery, Automation & Quality",
      skills: [
        { name: "CI/CD Pipelines" },
        { name: "GitHub Actions" },
        { name: "Fastlane" },
        { name: "Release Management" },
        { name: "Unit & Integration Testing" },
        { name: "Crash & Performance Monitoring" },
        { name: "App Store & Play Store Deployment" },
      ],
    },
    {
      title: "Location, Maps & Mobility Systems",
      skills: [
        { name: "Google Maps API" },
        { name: "Live Location Tracking" },
        { name: "Routing & Geofencing" },
        { name: "Heatmaps" },
      ],
    },
    {
      title: "Technical Leadership",
      skills: [
        { name: "Architecture Reviews" },
        { name: "Mobile Engineering Standards" },
        { name: "Code Reviews" },
        { name: "Mentoring Engineers" },
        { name: "Agile/Scrum" },
        { name: "Cross-Team Collaboration" },
      ],
    },
    {
      title: "Systems & Scalability",
      skills: [
        { name: "Real-Time Systems" },
        { name: "High-Volume Applications" },
        { name: "Multi-Schema Apps" },
        { name: "Scalable Networking Layers" },
        { name: "Environment Configuration" },
        { name: "Secure Mobile Architecture" },
      ],
    },
  ],
};

export const EXPERIENCE_DATA = {
  title: "Professional Experience",
  description: "Progression from native Android to senior cross-platform leadership with strong architecture and product delivery expertise.",
  experiences: [
    {
      role: "Senior Mobile Engineer",
      company: "Intalio",
      period: "Oct 2024 – Present",
      highlights: [
        "Deliver and maintain production Flutter and iOS applications (Swift, SwiftUI, Objective-C) across multiple business domains.",
        "Define mobile engineering standards, lead code reviews, and ensure architecture consistency across Flutter and native iOS codebases.",
        "Mentor senior engineers, provide architectural guidance, debugging support, and best practices for scalable cross-platform development.",
        "Design and maintain CI/CD pipelines for Flutter and iOS using GitHub Actions and Codemagic, automating build and release workflows.",
        "Modernize legacy Objective-C apps by migrating to Swift and SwiftUI, delivering new features, critical bug fixes, and improving stability.",
        "Develop internal mobile packages and tooling to standardize shared functionality, reduce duplication, and boost team productivity."
      ],
    },
    {
      role: "Senior Mobile Engineer",
      company: "Alhawsaba",
      period: "Oct 2022 – Sep 2024",
      highlights: [
        "Delivered multiple production Flutter apps, serving as the primary mobile contributor across core products.",
        "Implemented native Android (Kotlin) and iOS (Swift) features via Platform Channels for advanced hardware and SDK integration.",
        "Built reusable Flutter packages and a Google Maps Heatmap plugin to standardize functionality across projects.",
        "Designed and implemented a modular real-time chat system using WebSocket-based backend communication.",
        "Led architectural refactoring from GetX to BLoC, improving state management consistency, stability, and testability.",
        "Optimized performance, resolved memory leaks, and improved long-term app stability.",
        "Collaborated with backend engineers and mentored mobile developers, providing technical guidance and best practices."
      ],
    },
    {
      role: "Mobile Application Developer",
      company: "Magdsoft",
      period: "May 2020 – Oct 2022",
      highlights: [
        "Developed and maintained native Android apps using Kotlin, transitioning to Flutter as a core cross-platform contributor.",
        "Delivered 20+ production apps across live tracking, Google Maps solutions, e-commerce, and service marketplaces.",
        "Built reusable Flutter components and integrated real-time features including live location tracking and backend sync.",
        "Optimized app performance and UI/UX, contributing to measurable improvements in app store ratings.",
        "Collaborated with cross-functional teams to deliver high-quality mobile solutions across multiple client projects."
      ],
    },
  ],
};

export const PROJECTS_DATA = {
  title: "Featured Projects",
  description: "Production apps with measurable impact across mobility, commerce, logistics, and healthcare.",
  projects: PROJECT_ITEMS,
};

export const PACKAGES_DATA = {
  title: "Reusable Packages",
  description: "Tooling and service packages used to accelerate delivery and improve consistency across teams.",
  packages: PACKAGE_ITEMS,
};

export const CONTACT_DATA = {
  title: "Get in Touch",
  description:
    "I am open to discussing new product ideas, consulting opportunities, and senior mobile engineering roles.",
};
