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

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const withBasePath = (url: string) => {
  if (!url.startsWith("/")) return url;
  if (!basePath) return url;
  return `${basePath}${url}`;
};

const appAssetImage = (
  appName: string,
  type: string,
  description: string,
  imageHint = "mobile app"
): ImagePlaceholder => ({
  id: `${toSlug(appName)}-${toSlug(type)}`,
  description,
  imageUrl: withBasePath(`/images/${appName}/${type}.png`),
  imageHint,
});

const projectMedia = (appName: string) => ({
  appIcon: appAssetImage(appName, "appIcon", `${appName} app icon`, "app icon"),
  cardImage: appAssetImage(appName, "cardImage", `${appName} card image`),
  bannerImage: appAssetImage(appName, "banner", `${appName} banner`, "app banner"),
});

export type SupportedPlatform = "Android" | "iOS" | "iPad" | "web" | "desktop";
export type ScreenshotOrientation = "portrait" | "landscape";
export type PortfolioScreenshot = {
  image: ImagePlaceholder;
  platform?: SupportedPlatform;
  orientation?: ScreenshotOrientation;
};

export const projectScreenshot = (
  appName: string,
  fileName: string,
  options?: {
    platform?: SupportedPlatform;
    orientation?: ScreenshotOrientation;
  }
): PortfolioScreenshot => ({
  image: appAssetImage(appName, fileName, `${appName} ${fileName}`, "app screenshot"),
  platform: options?.platform ?? "iOS",
  orientation: options?.orientation ?? "portrait",
});

export type PortfolioItem = {
  slug: string;
  title: string;
  category: "project" | "package";
  description: string;
  cardImage: ImagePlaceholder;
  bannerImage: ImagePlaceholder;
  appIcon: ImagePlaceholder;
  frameworks: string[];
  languages: string[];
  downloads: string;
  rating: number;
  githubUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  supportedPlatforms: SupportedPlatform[];
  screenshots?: PortfolioScreenshot[];
  features: string[];
  projectIdea: string;
  showcase: string;
  diagramImage?: ImagePlaceholder;
};

type PartialPortfolioItem = {
  title: string;
  category: "project" | "package";
  description: string;
  cardImage: ImagePlaceholder;
  bannerImage?: ImagePlaceholder;
  appIcon?: ImagePlaceholder;
  frameworks?: string[];
  languages?: string[];
  downloads?: string;
  rating?: number;
  githubUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  supportedPlatforms?: SupportedPlatform[];
  screenshots?: PortfolioScreenshot[];
  features?: string[];
  projectIdea?: string;
  showcase?: string;
  diagramImage?: ImagePlaceholder;
};

const buildPortfolioItem = (item: PartialPortfolioItem): PortfolioItem => ({
  slug: toSlug(item.title),
  title: item.title,
  category: item.category,
  description: item.description,
  cardImage: item.cardImage,
  bannerImage: item.bannerImage ?? item.cardImage,
  appIcon: item.appIcon ?? item.cardImage,
  frameworks: item.frameworks ?? ["Flutter"],
  languages: item.languages ?? ["Dart"],
  downloads: item.downloads ?? "10K+",
  rating: item.rating ?? 4.7,
  githubUrl: item.githubUrl,
  appStoreUrl: item.appStoreUrl,
  playStoreUrl: item.playStoreUrl,
  supportedPlatforms: item.supportedPlatforms ?? (item.category === "project" ? ["Android", "iOS", "iPad"] : ["Android", "iOS", "iPad", "web", "desktop"]),
  screenshots: item.screenshots,
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
  diagramImage: item.diagramImage,
});

const PROJECT_ITEMS: PortfolioItem[] = [
  buildPortfolioItem({
    title: "Inspections",
    category: "project",
    description:
      "An enterprise iPad application used by inspectors across multiple governmental entities in Qatar to manage inspection workflows, violation reporting, and synchronized field operations.",
    ...projectMedia("Inspections"),
    frameworks: ["SwiftUI", "UIKit", "SQLite", "NWPathMonitor", "Keychain", "DI + Coordinator"],
    languages: ["Swift", "Objective-C (legacy migration)"],
    downloads: "Enterprise Internal",
    rating: 5.0,
    screenshots: [
      projectScreenshot("Inspections", "screenshot1", { platform: "iPad", orientation: "landscape" }),
    ],
    supportedPlatforms: ["iPad"],
    features: [
      "End-to-end inspection lifecycle: inbox intake, request creation, dynamic forms, violation capture, reporting, signatures, and completion workflows.",
      "Real-time and offline-capable sync model with local persistence for field continuity and controlled synchronization.",
      "Enterprise multi-variant architecture with shared core and per-entity behavior controlled by app schemes and xcconfig-based runtime configuration.",
      "Structured architecture split into Core, Features, and Shared layers with explicit Data + Presentation boundaries.",
      "Centralized dependency injection and coordinator-based navigation to keep module interactions predictable at scale.",
      "Security and reliability primitives including keychain-backed storage, encrypted utilities, and robust error/alert handling.",
      "Inspection-scale operational tooling including appointments, finished reports, map/document/PDF integrations, and diagnostic local DB visibility.",
      "Sole iOS ownership: led modernization from Objective-C to Swift, then introduced SwiftUI modules to accelerate delivery and maintainability.",
    ],
    projectIdea:
      "Design and evolve a mission-critical inspection platform for governmental field teams, balancing reliability, offline resilience, and variant-specific customization across multiple entities.",
    showcase:
      "As the sole iOS engineer, I owned architecture, modernization, development, and maintenance of the full application, including migration from Objective-C to Swift and SwiftUI adoption, multi-scheme management, and long-term scalability improvements.",
  }),
  buildPortfolioItem({
    title: "Sonic Mobility",
    category: "project",
    description: "A mobility scooter application within the cities of New Cairo you scan and start your ride.",
    ...projectMedia("Sonic"),
    frameworks: ["Flutter", "Live Tracking", "Google Maps"],
    languages: ["Dart", "Kotlin", "Swift"],
    downloads: "70K+",
    rating: 4.9,
    appStoreUrl: "https://apps.apple.com/eg/app/sonic-mobility-sharing-scooter/id6447569706",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.SonicMobility.sonic&pcampaignid=web_share",
    screenshots: [
      projectScreenshot("Sonic", "screenshot1"), 
      projectScreenshot("Sonic", "screenshot2"), 
      projectScreenshot("Sonic", "screenshot3"), 
      projectScreenshot("Sonic", "screenshot4"),
      projectScreenshot("Sonic", "screenshot5"),
    ],
    features: ["Live vehicle availability", "Trip tracking and route visualization", "Payment and ride history"],
    projectIdea: "Build a city-friendly micro-mobility experience that minimizes friction between unlock, ride, and payment.",
    showcase: "Delivered geolocation-heavy booking and ride flows with strong reliability in real traffic conditions.",
  }),
  buildPortfolioItem({
    title: "Aero Scope",
    category: "project",
    description: "Real-time flight tracker with detailed flight information.",
    ...projectMedia("AeroScope"),
    frameworks: ["SwiftUI", "Interactive Maps", "Supabase"],
    languages: ["Swift", "GraphQL"],
    downloads: "1K+",
    rating: 4.7,
    githubUrl: "https://github.com/AhmedShawkyAhmed/AeroScope.git",
    screenshots: [
      projectScreenshot("AeroScope", "screenshot9", { platform: "iPad", orientation: "landscape" }), 
      projectScreenshot("AeroScope", "screenshot10", { platform: "iPad", orientation: "landscape" }), 
      projectScreenshot("AeroScope", "screenshot11", { platform: "iPad", orientation: "landscape" }), 
      projectScreenshot("AeroScope", "screenshot12", { platform: "iPad", orientation: "landscape" }),
      projectScreenshot("AeroScope", "screenshot5", { platform: "iPad" }), 
      projectScreenshot("AeroScope", "screenshot6", { platform: "iPad" }), 
      projectScreenshot("AeroScope", "screenshot7", { platform: "iPad" }), 
      projectScreenshot("AeroScope", "screenshot8", { platform: "iPad" }),
      projectScreenshot("AeroScope", "screenshot1"), 
      projectScreenshot("AeroScope", "screenshot2"), 
      projectScreenshot("AeroScope", "screenshot3"), 
      projectScreenshot("AeroScope", "screenshot4"),
    ],
    features: ["Real-time flight map", "Flight detail timeline", "Search by route and flight number"],
    projectIdea:
      "A platform with a world map to view airports by country, track each airport's arriving and departing flights, and open detailed information for every flight.",
    supportedPlatforms: ["iOS", "iPad"],
  }),
  buildPortfolioItem({
    title: "HiShare",
    category: "project",
    description:
      "A platform-business application with a new promotion concept where customer experiences are rewarded based on actual post views.",
    ...projectMedia("HiShare"),
    frameworks: ["Flutter","Google Maps", "WebSocket"],
    languages: ["Dart", "Kotlin", "Swift"],
    downloads: "20K+",
    rating: 4.5,
    appStoreUrl: "https://apps.apple.com/bh/app/%D9%87%D8%A7%D9%8A-%D8%B4%D9%8A%D8%B1/id6739570429",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.hishare.platform&pcampaignid=web_share",
    screenshots: [
      projectScreenshot("HiShare", "screenshot1"),
      projectScreenshot("HiShare", "screenshot2"),
      projectScreenshot("HiShare", "screenshot3"),
      projectScreenshot("HiShare", "screenshot4"),
    ],
    features: [
      "Users create business/service spaces based on their activity type.",
      "Space owners prepay view credits and set a value per view.",
      "Customers withdraw allocated views, share experiences, and publish opinions on social channels.",
      "Platform tracks real post views and deducts value to reward participating clients.",
      "MAS monetization flow: choose spaces, draw view quotas based on follower reach, share content, and get paid by verified views.",
      "Business growth flow: invite customers to promote experiences, reward by performance, and build sustainable brand loyalty.",
    ],
    projectIdea:
      "Build a performance-based promotion ecosystem where real customer experiences drive marketing outcomes, and compensation is tied directly to measurable post views.",
    showcase:
      "Delivered a multi-sided engagement platform that enables space owners to fund campaigns, customers to earn from shared experiences, and brands to scale loyalty through view-verified promotion.",
  }),
  buildPortfolioItem({
    title: "Imtyazat",
    category: "project",
    description:
      "Exclusive discounts for Ministry staff, Imtyazat holders, and their families.",
    ...projectMedia("Imtyazat"),
    frameworks: ["Flutter", "Google & Apple Wallet"],
    languages: ["Dart", "Kotlin", "Swift"],
    downloads: "35K+",
    rating: 4.9,
    appStoreUrl: "https://apps.apple.com/bh/app/imtyazat-%D8%A7%D9%85%D8%AA%D9%8A%D8%A7%D8%B2%D8%A7%D8%AA/id6744577970",
    playStoreUrl: "https://play.google.com/store/apps/details?id=qa.gov.mofa.imtyazatpublic&pcampaignid=web_share",
    screenshots: [
      projectScreenshot("Imtyazat", "screenshot1"),
      projectScreenshot("Imtyazat", "screenshot2"),
      projectScreenshot("Imtyazat", "screenshot3"),
      projectScreenshot("Imtyazat", "screenshot4"),
      projectScreenshot("Imtyazat", "screenshot5"),
      projectScreenshot("Imtyazat", "screenshot6"),
    ],
    features: [
      "Global discounts with special rates at local and international hotels.",
      "Travel benefits with exclusive deals from domestic and international airlines.",
      "Shopping privileges across renowned global retail stores.",
      "Dining offers at select fine dining and casual restaurants.",
      "A personalized Imtyazat experience for cardholders, Ministry staff, and their families.",
    ],
    projectIdea:
      "Build a premium benefits platform that centralizes exclusive discounts and privileges for Imtyazat members across travel, hospitality, shopping, and dining.",
    showcase:
      "Delivered a scalable mobile experience that helps members discover and redeem premium offers with a clear, category-driven journey.",
  }),
  buildPortfolioItem({
    title: "CeFoure",
    category: "project",
    description:
      "Cefour is an all-in-one deals and coupons platform that unifies online store offers, retail discounts, active coupons, hypermarket flyers, and influencer promotions for shoppers, merchants, and affiliates.",
    ...projectMedia("CeFour"),
    frameworks: ["Flutter", "Location Services", "Notifications", "Search & Filtering"],
    languages: ["Dart", "Kotlin", "Swift"],
    downloads: "40K+",
    rating: 4.6,
    appStoreUrl: "https://apps.apple.com/bh/app/cefour/id6476445911",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.cefour.cefour&pcampaignid=web_share",
    screenshots: [
      projectScreenshot("CeFour", "screenshot1"),
      projectScreenshot("CeFour", "screenshot2"),
      projectScreenshot("CeFour", "screenshot3"),
      projectScreenshot("CeFour", "screenshot4"),
      projectScreenshot("CeFour", "screenshot5"),
      projectScreenshot("CeFour", "screenshot6"),
      projectScreenshot("CeFour", "screenshot7"),
      projectScreenshot("CeFour", "screenshot8"),
    ],
    features: [
      "Shopper experience with daily deals by category or city and nearby offers based on location.",
      "Interactive hypermarket flyers in magazine-style browsing.",
      "Active coupon system for stores and influencers with easy discoverability.",
      "Favorites and reminder flows, including notifications before offers expire.",
      "Merchant tools to publish offers, products, and coupons with a professional in-app profile.",
      "Performance visibility for influencers and affiliate marketers to track promo impact.",
      "Smart search and filtering engine across Online Stores, Retail Outlets, Coupons, Flyers, and Nearby Offers.",
      "Arabic-first experience with an intelligent ranking model that surfaces high-value deals.",
    ],
    projectIdea:
      "Build one smart Saudi marketplace for deals and coupons where shoppers discover value fast, merchants reach intent-driven customers, and influencers scale coupon-driven growth.",
    showcase:
      "Delivered a multi-sided mobile platform experience connecting shoppers, merchants, and influencers with location-aware offers, coupon workflows, flyer browsing, notifications, and high-performance search/filter journeys.",
  }),
  buildPortfolioItem({
    title: "BeTrend",
    category: "project",
    description:
      "A dual-sided influencer marketing platform where advertisers and merchants manage campaigns, vouchers, payments, and performance from one mobile workspace.",
    ...projectMedia("BeTrend"),
    frameworks: ["Flutter", "Payment APIs", "Messaging", "Advanced Analytics"],
    languages: ["Dart", "Kotlin", "Swift"],
    downloads: "35K+",
    rating: 4.7,
    appStoreUrl: "https://apps.apple.com/bh/app/be-trend-%D8%A8%D9%8A-%D8%AA%D8%B1%D9%86%D8%AF/id1658865427",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.diwan.beTrend&pcampaignid=web_share",
    screenshots: [
      projectScreenshot("BeTrend", "screenshot1"),
      projectScreenshot("BeTrend", "screenshot2"),
      projectScreenshot("BeTrend", "screenshot3"),
    ],
    features: [
      "Influencer/advertiser profile with personal identity, account, and store management.",
      "Full advertising workflow: receive, organize, and manage ad requests professionally.",
      "Voucher operations for stores: add, publish, and control coupon campaigns.",
      "Ad asset control: add, display, save, and manage campaign visibility.",
      "Multiple payment options with integrated mobile wallet support.",
      "Team delegation model to assign one or more account managers.",
      "Direct messaging and audience interaction with viewers.",
      "Advanced statistics and detailed reports for ads and coupon usage performance.",
      "Merchant-side discovery with multi-filter search to find suitable celebrities quickly.",
      "Longer campaign execution options to keep ads active with selected influencers.",
    ],
    projectIdea:
      "Create one integrated platform where influencers/advertisers and merchants can discover each other, run managed campaigns, and optimize promotion performance through measurable insights.",
    showcase:
      "Delivered a two-sided marketing ecosystem with influencer discovery, ad request orchestration, voucher management, wallet-enabled payments, messaging, and analytics-driven campaign decisions.",
  }),
  buildPortfolioItem({
    title: "Sehtak Tehmna",
    category: "project",
    description:
      "A healthcare platform for booking medical appointments, ordering medications, requesting care services, and managing complete patient medical records.",
    ...projectMedia("Sehtak"),
    frameworks: ["Flutter", "Firebase", "REST APIs"],
    languages: ["Dart", "Swift", "Kotlin"],
    downloads: "20K+",
    rating: 4.8,
    appStoreUrl: "https://apps.apple.com/bh/app/%D8%B5%D8%AD%D8%AA%D9%83-%D8%AA%D9%87%D9%85%D9%86%D8%A7/id6477756584",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.sihatukTuhumuna.sihatukTuhumuna&pcampaignid=web_share",
    screenshots: [
      projectScreenshot("Sehtak", "screenshot1"),
      projectScreenshot("Sehtak", "screenshot2"),
      projectScreenshot("Sehtak", "screenshot3"),
      projectScreenshot("Sehtak", "screenshot4"),
      projectScreenshot("Sehtak", "screenshot5"),
      projectScreenshot("Sehtak", "screenshot6"),
      projectScreenshot("Sehtak", "screenshot7"),
      projectScreenshot("Sehtak", "screenshot8"),
    ],
    features: [
      "Book appointments for medical visits across multiple types of medical institutions.",
      "Unlock free discounts on medical services by scanning in-clinic codes.",
      "Order medications with free delivery.",
      "Request 24/7 home care and ambulance services.",
      "Access free medical consultations.",
      "Get higher discounts through individual and family annual insurance cards.",
      "Maintain a free patient medical file with history and complete medical data.",
    ],
    projectIdea:
      "Build an all-in-one digital healthcare experience that centralizes appointments, medication access, urgent care services, discounts, and longitudinal patient records.",
    showcase:
      "Delivered a patient-centric health app integrating appointment booking, pharmacy delivery, emergency/home-care requests, consultation workflows, insurance-based discounts, and structured medical history management.",
  }),
  buildPortfolioItem({
    title: "Blue Wave",
    category: "project",
    description:
      "A booking platform for water activities and leisure destinations including jet ski rides, boats, beaches, and resorts.",
    ...projectMedia("BlueWave"),
    frameworks: ["Flutter", "Google Maps", "REST APIs"],
    languages: ["Dart"],
    downloads: "500+",
    rating: 4.3,
    screenshots: [
      projectScreenshot("BlueWave", "screenshot1"),
      projectScreenshot("BlueWave", "screenshot2"),
      projectScreenshot("BlueWave", "screenshot3"),
      projectScreenshot("BlueWave", "screenshot4"),
      projectScreenshot("BlueWave", "screenshot5"),
    ],
    features: [
      "Browse and book water experiences such as jet ski, boat trips, beaches, and resorts.",
      "Explore activity options with clear categories, availability, and pricing.",
      "Location-aware discovery to find nearby water destinations and services.",
      "Simple booking flow with reservation tracking and booking details.",
      "Provider-friendly listing model for activity operators and resort partners.",
    ],
    projectIdea:
      "Build a seamless booking app that brings water activities and coastal leisure destinations into one discoverable and easy-to-reserve mobile experience.",
    showcase:
      "Delivered a category-driven booking journey connecting users with jet ski, boats, beaches, and resorts while keeping search, selection, and reservation steps fast and intuitive.",
      githubUrl: "https://github.com/AhmedShawkyAhmed/shobik.git",
  }),
  buildPortfolioItem({
    title: "JetCare",
    category: "project",
    description:
      "JET CARE provides home and corporate cleaning and maintenance services with high-quality results delivered in a short time.",
    ...projectMedia("JetCare"),
    frameworks: ["Flutter", "Maps", "REST APIs"],
    languages: ["Dart"],
    downloads: "25K+",
    rating: 4.7,
    appStoreUrl: "https://apps.apple.com/bh/app/jet-care/id6446169634",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.jetcareeg.jetcare&pcampaignid=web_share",
    screenshots: [
      projectScreenshot("JetCare", "screenshot1"),
      projectScreenshot("JetCare", "screenshot2"),
      projectScreenshot("JetCare", "screenshot3"),
      projectScreenshot("JetCare", "screenshot4"),
      projectScreenshot("JetCare", "screenshot5"),
    ],
    features: [
      "Book professional house and corporate cleaning services from one app.",
      "Request maintenance support with streamlined service scheduling.",
      "Fast-response operations focused on delivering high-quality results in a short time.",
      "Reliable service workflows designed for repeat usage and customer trust.",
    ],
    projectIdea:
      "Build a trusted mobile service platform for residential and corporate cleaning and maintenance with speed, consistency, and quality at the core.",
    showcase:
      "Delivered a service-booking experience that helps users request, schedule, and manage cleaning/maintenance services efficiently while reinforcing Jet Care brand reliability.",
  }),
  buildPortfolioItem({
    title: "Tripta",
    category: "project",
    description:
      "A registered transportation services platform focused on safe and flexible passenger mobility for daily schedules and private rides.",
    ...projectMedia("Tripta"),
    frameworks: ["Flutter", "Google Maps", "WebSocket"],
    languages: ["Dart", "Kotlin", "Swift"],
    downloads: "23K+",
    rating: 4.8,
    appStoreUrl: "https://apps.apple.com/bh/app/tripta-eg/id1640910594",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.tripta.user&pcampaignid=web_share",
    screenshots: [
      projectScreenshot("Tripta", "screenshot1"),
      projectScreenshot("Tripta", "screenshot2"),
      projectScreenshot("Tripta", "screenshot3"),
      projectScreenshot("Tripta", "screenshot4"),
      projectScreenshot("Tripta", "screenshot5"),
      projectScreenshot("Tripta", "screenshot6"),
      projectScreenshot("Tripta", "screenshot7"),
      projectScreenshot("Tripta", "screenshot8"),
    ],
    features: [
      "Transportation services for schools, lessons, training sessions, nurseries, universities, and employee commuting.",
      "Private trip options for personal rides and dedicated private driver requests.",
      "Live trip route tracking through the app with in-journey movement and arrival notifications.",
      "Simple onboarding and registration flow to manage personal data, requests, and feedback.",
      "Integrated customer support team to handle user requests and service inquiries.",
      "Reliable operations model for safe and organized passenger transport.",
    ],
    projectIdea:
      "Build a trusted transport platform that covers scheduled daily mobility and on-demand private rides with full ride visibility and user support.",
    showcase:
      "Delivered an end-to-end transport experience combining booking workflows, route tracking, notification updates, user profile/request management, and customer-service integration.",
  }),
  buildPortfolioItem({
    title: "Tripta Hero",
    category: "project",
    description:
      "The driver (Hero) app for Tripta EG, enabling captains to join the platform and operate their cars to serve Tripta's premium customers.",
    ...projectMedia("TriptaHero"),
    frameworks: ["Flutter", "Google Maps", "WebSocket"],
    languages: ["Dart", "Kotlin", "Swift"],
    downloads: "11K+",
    rating: 4.7,
    appStoreUrl: "https://apps.apple.com/bh/app/tripta-hero/id1640911684",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.tripta.driver&pcampaignid=web_share",
    screenshots: [
      projectScreenshot("TriptaHero", "screenshot1"),
      projectScreenshot("TriptaHero", "screenshot2"),
      projectScreenshot("TriptaHero", "screenshot3"),
      projectScreenshot("TriptaHero", "screenshot4"),
      projectScreenshot("TriptaHero", "screenshot5"),
    ],
    features: [
      "Driver onboarding flow to join Tripta EG and work with your own car.",
      "Trip operations for transport services across schools, lessons, training, nurseries, universities, and employee transportation.",
      "Support for private rides and dedicated private-driver requests.",
      "Live route tracking with trip movement and arrival notifications during each journey.",
      "Easy registration and profile management for driver data, requests, and notes.",
      "Integrated customer support channel for handling service requests and inquiries.",
      "Operational model focused on safe, organized, and reliable passenger transportation.",
    ],
    projectIdea:
      "Build a dedicated captain app that empowers drivers to join Tripta's transport network, manage trips efficiently, and deliver safe mobility services across daily and private ride scenarios.",
    showcase:
      "Delivered a driver-first mobile workflow covering onboarding, ride acceptance and execution, route tracking, live trip status communication, and support integration for consistent service delivery.",
  }),
  buildPortfolioItem({
    title: "Osta",
    category: "project",
    description:
      "An all-in-one home services app to book trusted technicians for cleaning, maintenance, and repairs with transparent pricing and fast scheduling.",
    ...projectMedia("Osta"),
    frameworks: ["Flutter", "Google Maps", "Realtime updates"],
    languages: ["Dart", "Kotlin", "Swift"],
    downloads: "25K+",
    rating: 4.6,
    githubUrl: "https://github.com/AhmedShawkyAhmed/RouteMe_Mobile.git",
    screenshots: [
      projectScreenshot("Osta", "screenshot1"),
      projectScreenshot("Osta", "screenshot2"),
      projectScreenshot("Osta", "screenshot3"),
    ],
    features: [
      "Wide service coverage including plumbing, AC installation/maintenance, carpentry, electricity, alumetal, satellite, painting, and appliance repair.",
      "Multi-service booking in one visit (for example plumber + electrician + carpenter together).",
      "Flexible scheduling with punctual technician arrival based on user-selected time.",
      "Safety model with technician background checks and job-specific training.",
      "Pre-set service pricing to remove negotiation friction.",
      "Easy payment flow (cash or card) after service completion.",
      "1-month service guarantee.",
      "In-app chat and dedicated customer support for fast issue resolution.",
      "Order tracking and simple checkout flow in a few taps.",
      "Coverage across multiple cities and regions for broader availability.",
    ],
    projectIdea:
      "Build a trusted home-services marketplace that gives households a simple way to book verified technicians with predictable pricing, punctual delivery, and full order visibility.",
    showcase:
      "Delivered a customer-first on-demand services app with catalog-driven booking, multi-service cart, live order tracking, support chat, and reliability controls (verified technicians, preset prices, and service guarantee).",
  }),
  buildPortfolioItem({
    title: "Osta Provider",
    category: "project",
    description:
      "The provider-side app for the Osta home-services platform, enabling technicians to receive, manage, and complete customer requests professionally.",
    ...projectMedia("OstaProvider"),
    frameworks: ["Flutter", "Google Maps", "Realtime updates"],
    languages: ["Dart", "Kotlin", "Swift"],
    downloads: "18K+",
    rating: 4.5,
    githubUrl: "https://github.com/AhmedShawkyAhmed/RouteMe_Mobile.git",
    screenshots: [
      projectScreenshot("OstaProvider", "screenshot1"),
      projectScreenshot("OstaProvider", "screenshot2"),
      projectScreenshot("OstaProvider", "screenshot3"),
    ],
    features: [
      "Technician onboarding for home-service categories such as plumbing, AC, carpentry, electrical, and appliance maintenance.",
      "Receive and manage service requests with clear customer/job details.",
      "Schedule and handle multiple tasks efficiently, including same-visit multi-service jobs.",
      "Follow standardized pricing and service quality flows to ensure consistent customer experience.",
      "Track job status from assignment to completion with operational updates.",
      "Support direct communication paths and customer service escalation when needed.",
      "Service quality framework backed by training, professionalism, and guarantee expectations.",
    ],
    projectIdea:
      "Build an operational app for service providers that streamlines field-work execution, improves punctuality, and ensures consistent service quality across home maintenance categories.",
    showcase:
      "Delivered a provider operations workflow covering job intake, schedule management, task execution, status tracking, and support coordination to power reliable on-ground service delivery.",
  }),
  buildPortfolioItem({
    title: "Bird Store",
    category: "project",
    description:
      "A specialized e-commerce marketplace for laptops and PCs, inspired by large retail platforms like Amazon and Noon.",
    ...projectMedia("BirdStore"),
    frameworks: ["Flutter", "REST APIs"],
    languages: ["Dart"],
    downloads: "2K+",
    rating: 4.5,
    githubUrl: "https://github.com/AhmedShawkyAhmed/bird_store_ios.git",
    screenshots: [
      projectScreenshot("BirdStore", "screenshot1"),
      projectScreenshot("BirdStore", "screenshot2"),
      projectScreenshot("BirdStore", "screenshot3"),
    ],
    features: [
      "Marketplace-style browsing experience focused on laptops, PCs, and related accessories.",
      "Category and filter system for brands, specs, pricing, and performance tiers.",
      "Product detail pages with technical specifications and comparison-ready information.",
      "Cart and checkout flow designed for smooth purchase conversion.",
      "Scalable catalog structure suitable for multi-vendor expansion.",
    ],
    projectIdea:
      "Build an electronics-focused commerce app that brings the convenience of major marketplaces to laptop and PC shopping with better technical discovery.",
    showcase:
      "Delivered a modern shopping experience for computer products with searchable catalogs, spec-oriented product presentation, and conversion-focused purchase flows.",
    supportedPlatforms: ["iOS", "iPad"],
  }),
  buildPortfolioItem({
    title: "Otlop",
    category: "project",
    description:
      "A Talabat-style food and grocery delivery app built specifically for users in Egypt.",
    ...projectMedia("Otlop"),
    frameworks: ["Flutter", "Google Maps", "Realtime updates"],
    languages: ["Dart"],
    downloads: "1K+",
    rating: 4.7,
    githubUrl: "https://github.com/AhmedShawkyAhmed/otlop.git",
    screenshots: [
      projectScreenshot("Otlop", "screenshot1"),
      projectScreenshot("Otlop", "screenshot2"),
      projectScreenshot("Otlop", "screenshot3"),
      projectScreenshot("Otlop", "screenshot4"),
      projectScreenshot("Otlop", "screenshot5"),
      projectScreenshot("Otlop", "screenshot6"),
    ],
    features: [
      "Browse local restaurants and grocery stores with Egypt-focused listings.",
      "Simple order flow: select items, checkout, and confirm delivery quickly.",
      "Real-time order tracking from preparation to doorstep delivery.",
      "Map-based delivery coverage and location-aware address handling.",
      "Order history and repeat-order convenience for frequent users.",
    ],
    projectIdea:
      "Build a localized delivery experience for Egypt that offers the same convenience as Talabat while adapting to local merchants, users, and delivery operations.",
    showcase:
      "Delivered a high-utility ordering platform with localized merchant discovery, seamless checkout, and real-time delivery visibility tailored for the Egyptian market.",
    supportedPlatforms: ["Android", "iOS", "iPad"],
  }),
  buildPortfolioItem({
    title: "Seda",
    category: "project",
    description:
      "A ride-hailing app inspired by Uber and DiDi, designed for fast and reliable on-demand transportation.",
    ...projectMedia("Seda"),
    frameworks: ["Flutter", "Google Maps", "Realtime updates"],
    languages: ["Dart", "Kotlin", "Swift"],
    downloads: "35K+",
    rating: 4.6,
    screenshots: [
      projectScreenshot("Seda", "screenshot1"),
      projectScreenshot("Seda", "screenshot2"),
      projectScreenshot("Seda", "screenshot3"),
      projectScreenshot("Seda", "screenshot4"),
      projectScreenshot("Seda", "screenshot5"),
    ],
    features: [
      "Request rides on demand with fast driver matching.",
      "Live ride tracking with map-based pickup and destination flow.",
      "Fare visibility and trip details before confirmation.",
      "Trip status notifications from request to drop-off.",
      "Ride history and repeat route convenience.",
    ],
    projectIdea:
      "Build a reliable ride-hailing experience similar to Uber/DiDi with smooth booking, real-time tracking, and predictable trip flow.",
    showcase:
      "Delivered a rider-first mobility app with request orchestration, live map tracking, and a streamlined end-to-end ride lifecycle.",
    supportedPlatforms: ["Android", "iOS"],
    githubUrl: "https://github.com/AhmedShawkyAhmed/SedaUser.git",
  }),
  buildPortfolioItem({
    title: "Seda Driver",
    category: "project",
    description:
      "The driver app for Seda, built to help captains accept trips, navigate routes, and manage ride operations efficiently.",
    ...projectMedia("SedaDriver"),
    frameworks: ["Flutter", "Maps", "Realtime updates"],
    languages: ["Dart", "Kotlin", "Swift"],
    downloads: "23K+",
    rating: 4.6,
    screenshots: [
      projectScreenshot("SedaDriver", "screenshot1"),
      projectScreenshot("SedaDriver", "screenshot2"),
      projectScreenshot("SedaDriver", "screenshot3"),
    ],
    features: [
      "Driver onboarding and profile setup for platform activation.",
      "Real-time trip request reception with accept/reject controls.",
      "Turn-by-turn map navigation for pickup and drop-off routes.",
      "Live ride status updates and trip completion workflow.",
      "Earnings and trip history visibility for operational tracking.",
    ],
    projectIdea:
      "Build a driver operations app for an Uber/DiDi-style ecosystem, enabling captains to manage trips, routes, and earnings in real time.",
    showcase:
      "Delivered a driver-focused workflow covering trip intake, navigation, status transitions, and completed-ride management for scalable ride-hailing operations.",
    supportedPlatforms: ["Android", "iOS"],
    githubUrl: "https://github.com/AhmedShawkyAhmed/SedaDriver.git",
  }),
  buildPortfolioItem({
    title: "My Expenses",
    category: "project",
    description:
      "My Expenses is a powerful personal finance app for effortless expense tracking, income management, planning, and financial analysis on mobile devices.",
    ...projectMedia("MyExpenses"),
    frameworks: ["Flutter", "Data Export/Import", "Cloud Sync", "Security"],
    languages: ["Dart"],
    downloads: "100+",
    rating: 4.4,
    githubUrl: "https://github.com/AhmedShawkyAhmed/shawky.git",
    screenshots: [
      projectScreenshot("MyExpenses", "screenshot1"),
      projectScreenshot("MyExpenses", "screenshot2"),
      projectScreenshot("MyExpenses", "screenshot3"),
      projectScreenshot("MyExpenses", "screenshot4"),
      projectScreenshot("MyExpenses", "screenshot5"),
    ],
    features: [
      "Effortless expense and income tracking across smartphone and tablet usage.",
      "Flexible multi-account management, including transfers across different currencies.",
      "Recurring transaction planning for streamlined long-term financial routines.",
      "QIF and CSV export/import for portable and structured data management.",
      "Enhanced security with password protection or device lock-screen authentication.",
      "Customizable UI experience with adjustable themes and font sizes.",
      "Bank statement reconciliation to compare and validate transaction status accurately.",
      "Fast data entry via homescreen widgets and shortcuts.",
      "Advanced filtering and dynamic charts for distribution and historical trend analysis.",
      "Premium tiers: Contrib (ad-free + unlimited accounts), Extended (cloud sync + backup + advanced CSV), Professional (budgeting + receipt scanning + email support).",
      "Permission-aware architecture for calendar-based recurring plans, internet sync/crash reporting, and account-based multi-device synchronization.",
    ],
    projectIdea:
      "Build an all-in-one personal finance platform that combines fast daily tracking with advanced planning, analysis, and secure cross-device data management.",
    showcase:
      "Delivered a finance-focused mobile product with multi-account orchestration, recurring plans, reconciliation workflows, rich analytics, and scalable premium capability tiers.",
    supportedPlatforms: ["Android", "iOS", "iPad"],
  }),
  buildPortfolioItem({
    title: "Steps Tracker",
    category: "project",
    description:
      "An accurate and simple pedometer app that auto-tracks steps, calories, distance, duration, pace, and health metrics with clear visual reports.",
    ...projectMedia("StepsTracker"),
    frameworks: ["Flutter", "GPS Tracking", "Health APIs", "Google Fit"],
    languages: ["Dart"],
    downloads: "100+",
    rating: 4.4,
    githubUrl: "https://github.com/AhmedShawkyAhmed/step_tracker.git",
    screenshots: [
      projectScreenshot("StepsTracker", "screenshot1"),
      projectScreenshot("StepsTracker", "screenshot2"),
      projectScreenshot("StepsTracker", "screenshot3"),
    ],
    features: [
      "Auto step counting with the built-in sensor for high battery efficiency, even with locked screen usage.",
      "Optional real-time GPS route tracking for distance, pace, duration, calories, and map history.",
      "100% private usage model with no mandatory login and no locked core features.",
      "Pause/resume/reset controls with live step visibility and daily report delivery.",
      "Clear daily/weekly/monthly report graphs with trend visibility and Google Fit sync support.",
      "Goals and achievements for steps, distance, duration, and calorie targets.",
      "Customizable themes and font sizes for a personalized user experience.",
      "Health tracking support for weight trends, sleep, hydration, and diet records.",
      "Data-quality guidance with adjustable sensor sensitivity and device compatibility notes.",
    ],
    projectIdea:
      "Build a privacy-first fitness companion that combines accurate low-power step counting with optional GPS activity tracking and actionable health insights.",
    showcase:
      "Delivered a lightweight but feature-rich activity tracker with sensor-based pedometer logic, GPS route mode, visual analytics, goal systems, and integrations for long-term fitness engagement.",
    supportedPlatforms: ["Android", "iOS", "iPad"],
  }),
];

const PACKAGE_ITEMS: PortfolioItem[] = [
  buildPortfolioItem({
    title: "ShawkyCLI",
    category: "package",
    description:
      "A powerful developer-friendly CLI that automates Flutter project setup, build, deployment, testing, and maintenance in one workflow.",
    ...projectMedia("ShawkyCLI"),
    frameworks: ["CLI", "Flutter Tooling", "Firebase CLI", "CocoaPods", "Git"],
    languages: ["Dart", "Shell", "Bash"],
    downloads: "27K+",
    rating: 4.9,
    githubUrl: "https://github.com/AhmedShawkyAhmed/shawky_cli.git",
    features: [
      "Project setup automation: install/create/add/make commands for Flutter apps, packages, plugins, flavors, and structure generation.",
      "Build and release workflow: build APK/IPA, deploy to Firebase App Distribution, and generate localization/build_runner outputs.",
      "Quality and maintenance tooling: analyze, test, clean, fix, pod, git, version, and remove commands in one CLI.",
      "Developer-first command model: `shawky <command> [module] [arguments]` with short aliases for fast execution.",
    ],
    projectIdea:
      "Eliminate repetitive Flutter engineering tasks and standardize delivery workflows for individuals and teams through a single high-productivity CLI.",
    showcase:
      "Designed ShawkyCLI as an end-to-end mobile delivery command system covering setup, build/release, test/analysis, git operations, CocoaPods management, and long-term project maintenance.",
      screenshots: [
        projectScreenshot("ShawkyCLI", "screenshot1", { platform: "desktop", orientation: "landscape" }),
      ],
      supportedPlatforms: ["desktop"],
  }),
  buildPortfolioItem({
    title: "Maps Plugin",
    category: "package",
    description:
      "A native-backed Flutter heatmap plugin that integrates Google Maps using Swift (iOS) and Kotlin (Android) for high-performance rendering.",
    ...projectMedia("MapPlugin"),
    frameworks: ["Flutter Plugin", "Google Maps SDK", "Native iOS/Android"],
    languages: ["Dart", "Kotlin", "Swift"],
    downloads: "22K+",
    rating: 4.9,
    githubUrl: "https://github.com/AhmedShawkyAhmed/heat_map_plugin.git",
    features: [
      "Native Google Maps heatmap layer integration on iOS and Android.",
      "Real-time heatmap updates from Flutter with dynamic location datasets.",
      "Configurable radius, opacity, gradient colors, and weighted visualization behavior.",
      "Optimized rendering strategy for smooth performance on large geospatial datasets.",
      "Production setup guidance for iOS Info.plist permissions, Podfile Google Maps integration, and pod install flow.",
    ],
    projectIdea:
      "Provide Flutter teams with a production-ready heatmap capability that keeps Flutter API simplicity while using native Google Maps performance.",
    showcase:
      "Designed a cross-platform plugin API (`heat_map`) with native Swift/Kotlin map rendering, enabling real-time map heatmap use cases without custom platform code in each app.",
      screenshots: [
        projectScreenshot("MapPlugin", "screenshot1"),
        projectScreenshot("MapPlugin", "screenshot2"),
        projectScreenshot("MapPlugin", "screenshot3"),
        projectScreenshot("MapPlugin", "screenshot4"),
      ],
      supportedPlatforms: ["Android", "iOS", "iPad"],
  }),
  buildPortfolioItem({
    title: "Network Service",
    category: "package",
    description:
      "A scalable Flutter network layer with centralized Dio setup, interceptors, connectivity-aware execution, unified response models, and structured exception handling.",
    ...projectMedia("NetworkService"),
    frameworks: ["Flutter Package", "Dio", "Freezed", "GraphQL/REST"],
    languages: ["Dart"],
    downloads: "31K+",
    rating: 4.8,
    githubUrl: "https://github.com/AhmedShawkyAhmed/network_service.git",
    features: [
      "Centralized Dio factory with configurable secured/unsecured clients and interceptor pipeline.",
      "Unified API response model (`NetworkBaseModel`) with functional result flow via `NetworkResult`.",
      "Structured error strategy using `NetworkExceptions` with readable extension-based messages.",
      "Connectivity tracking using `connectivity_plus` with automatic wait/retry behavior.",
      "Built-in logging integration (`core_utils`) and extension helpers for cleaner success/failure handling.",
      "Supports both REST and GraphQL APIs with reusable request execution patterns.",
    ],
    projectIdea:
      "Provide Flutter teams with a production-grade network foundation that standardizes API handling, error management, and connectivity resilience across apps.",
    showcase:
      "Implemented a clean network architecture around Dio with interceptors, connectivity state service, response/exception abstractions, and extension-driven result handling to simplify app-layer integration.",
  }),
  buildPortfolioItem({
    title: "Location Service",
    category: "package",
    description:
      "A robust Flutter location management package handling permissions, live tracking, periodic refresh, triggered refresh, and scalable error flows.",
    ...projectMedia("LocationService"),
    frameworks: ["Flutter Package", "Location APIs", "permission_service", "core_utils"],
    languages: ["Dart"],
    downloads: "16K+",
    rating: 4.7,
    githubUrl: "https://github.com/AhmedShawkyAhmed/location_service.git",
    features: [
      "Automatic permission handling for Android and iOS with location service (GPS) state checks.",
      "Configurable initialization via `LocationServiceConfig` including custom `onError` callback behavior.",
      "Periodic and manual triggered refresh support for controlled location updates.",
      "Real-time location stream with internal throttling and significant-move update behavior.",
      "Utility helpers for instant current location access and coordinate distance calculation.",
      "Designed for seamless integration with `permission_service` and production logging workflows.",
    ],
    projectIdea:
      "Create a reusable production-ready location layer that standardizes permission handling, refresh strategy, and live tracking behavior across Flutter applications.",
    showcase:
      "Implemented a configurable location architecture with periodic refresh, delayed trigger refresh, live stream updates, and centralized error routing to simplify reliable location features in mobile apps.",
  }),
  buildPortfolioItem({
    title: "Security Service",
    category: "package",
    description:
      "A modular Flutter security layer combining biometric auth, device integrity checks, fraud detection, secure token storage, and protected network interception.",
    ...projectMedia("SecurityService"),
    frameworks: ["Flutter Package", "Secure Storage", "Biometrics", "Fraud Detection", "Network Security"],
    languages: ["Dart"],
    downloads: "14K+",
    rating: 4.8,
    githubUrl: "https://github.com/AhmedShawkyAhmed/security_service.git",
    features: [
      "Root/jailbreak, mock-location, and device integrity checks via app protection module.",
      "Biometric and lock-screen authentication flows with secure token lifecycle handling.",
      "Encrypted read/write/delete storage operations through a dedicated secure storage service.",
      "Fraud detection for suspicious login frequency and geolocation behavior with device fingerprinting.",
      "Network interception guard that blocks requests when device or behavior is not trusted.",
      "Composable module architecture (`SecureStorageService`, `AppProtectionService`, `FraudDetectionService`, `NetworkSecurityService`, `SecurityAuthService`).",
    ],
    projectIdea:
      "Deliver a single reusable mobile security foundation that combines authentication, storage, fraud prevention, and request validation for production Flutter applications.",
    showcase:
      "Implemented end-to-end secure login and request flow by chaining device integrity validation, biometric authentication, encrypted token handling, and guarded API interception.",
  }),
  buildPortfolioItem({
    title: "Socket Service",
    category: "package",
    description:
      "A lightweight Socket.IO service layer for Flutter that standardizes real-time connections, channel subscriptions, event emission, and lifecycle management.",
    ...projectMedia("SocketService"),
    frameworks: ["Flutter Package", "Socket.IO", "Realtime Channels"],
    languages: ["Dart"],
    downloads: "19K+",
    rating: 4.8,
    githubUrl: "https://github.com/AhmedShawkyAhmed/socket_service.git",
    features: [
      "Singleton-based socket instance for app-wide access and centralized connection control.",
      "Simple one-time initialization with URL and custom headers before channel connections.",
      "Multi-channel subscription model with per-channel callbacks (`onEvent`, `onConnect`, `onError`).",
      "Complete lifecycle handling for connect, disconnect, reconnect, and channel-level management.",
      "Dynamic header editing with automatic reconnection to refresh auth/session context safely.",
      "Structured logging support and clean APIs for emit/listen/add/remove/check channel state.",
    ],
    projectIdea:
      "Provide Flutter teams with a consistent, reusable real-time communication layer that reduces boilerplate and stabilizes Socket.IO integration.",
    showcase:
      "Implemented a channel-oriented socket architecture with dynamic headers, lifecycle-safe reconnection, and simple event APIs to support scalable real-time product features.",
  }),
  buildPortfolioItem({
    title: "Notification Service",
    category: "package",
    description:
      "A production-ready Flutter notification manager combining Firebase Cloud Messaging and Local Notifications with click actions, rich media, and lifecycle-safe handling.",
    ...projectMedia("NotificationService"),
    frameworks: ["Flutter Package", "Firebase Cloud Messaging", "Local Notifications"],
    languages: ["Dart"],
    downloads: "21K+",
    rating: 4.7,
    githubUrl: "https://github.com/AhmedShawkyAhmed/notification_service.git",
    features: [
      "Unified initialization for Firebase and local notifications in a single setup flow.",
      "Handles notification delivery and behavior for foreground, background, and terminated app states.",
      "Supports rich notifications with images, payloads, and customizable display configuration.",
      "Built-in click-action callback support for deep links and in-app navigation routing.",
      "Automatic notification permission request flow with Android/iOS compatibility handling.",
      "Centralized utilities for FCM token retrieval, topic subscriptions, and notification cancel actions.",
    ],
    projectIdea:
      "Provide a single, reliable notification layer that standardizes push/local notification behavior, click flows, and token/topic operations across Flutter apps.",
    showcase:
      "Implemented a cohesive notification orchestration service that bridges FCM, local notifications, image-based styles, and click-action handlers to simplify production messaging workflows.",
  }),
  buildPortfolioItem({
    title: "Permission Service",
    category: "package",
    description:
      "A customizable Flutter permission orchestration service that standardizes request/check flows across Android and iOS with platform-aware media permission handling.",
    ...projectMedia("PermissionService"),
    frameworks: ["Flutter Package", "permission_handler", "Android 13+", "iOS 14+"],
    languages: ["Dart", "Kotlin", "Swift"],
    downloads: "13K+",
    rating: 4.7,
    githubUrl: "https://github.com/AhmedShawkyAhmed/permission_service.git",
    features: [
      "Supports broad Flutter permission coverage through `permission_handler` integration.",
      "Handles Android 13+ and iOS 14+ storage/media permission replacement automatically.",
      "Configurable confirmation dialog callback with custom per-permission messaging.",
      "Retry strategy for denied permissions with configurable repeat attempts.",
      "Automatic settings redirection flow for permanently denied permissions.",
      "Localization-friendly permission messaging, including Arabic user-facing names.",
    ],
    projectIdea:
      "Create a single permission workflow layer that reduces platform-specific complexity and ensures consistent UX for permission requests in Flutter apps.",
    showcase:
      "Implemented a platform-aware permission engine with SDK/system-version initialization, smart storage/media permission mapping, retry logic, and customizable user confirmation dialogs.",
  }),
  buildPortfolioItem({
    title: "Hive Service",
    category: "package",
    description:
      "A secure lightweight local storage layer on top of Hive for Flutter, with encrypted boxes, adapter/box lifecycle automation, and model serialization helpers.",
    ...projectMedia("HiveService"),
    frameworks: ["Flutter Package", "Hive", "Flutter Secure Storage", "AES Encryption"],
    languages: ["Dart"],
    downloads: "14K+",
    rating: 4.8,
    githubUrl: "https://github.com/AhmedShawkyAhmed/hive_service.git",
    features: [
      "Secure AES encryption for all boxes using `HiveAesCipher` with keys managed in Flutter Secure Storage.",
      "Auto-initialization flow for adapter registration and initially opened encrypted boxes.",
      "Simple CRUD APIs (`putItem`, `getItem`, `deleteItem`, `clearBox`) for fast local data operations.",
      "Object serialization helpers for storing/retrieving models via custom `toJson` / `fromJson` mapping.",
      "Automatic encryption key generation and recovery when key is missing.",
      "Integrated logging hooks for storage lifecycle and debugging visibility.",
    ],
    projectIdea:
      "Provide Flutter apps with a reusable encrypted local persistence layer that keeps storage APIs simple while enforcing secure defaults.",
    showcase:
      "Implemented a production-ready Hive abstraction handling encrypted box setup, adapter orchestration, CRUD operations, and JSON object mapping with minimal app-layer boilerplate.",
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
        { name: "Native iOS (Swift, SwiftUI)" },
        { name: "Native Android (Kotlin)" },
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
        { name: "Supabase" },
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
        { name: "Interactive Map Features" },
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
  description: "Production applications showcasing scalable mobile architectures, real-time systems, and cross-platform delivery. Includes projects across mobility, e-commerce, logistics, healthcare, and high-volume enterprise environments.",
  projects: PROJECT_ITEMS,
};

export const PACKAGES_DATA = {
  title: "Internal Tools & Packages",
  description: "Reusable packages and internal tooling developed to standardize functionality, accelerate mobile delivery, and improve consistency and maintainability across Flutter and native mobile teams.",
  packages: PACKAGE_ITEMS,
};

export const CONTACT_DATA = {
  title: "Get in Touch",
  description:
    "Open to discussing product strategy, architecture guidance, consulting, and senior or architect-level mobile engineering opportunities. I focus on building scalable, maintainable mobile platforms that evolve with business needs.",
};
