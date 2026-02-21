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
  type: "appIcon" | "cardImage" | "banner" | "screenshot1" | "screenshot2" | "diagram",
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
  screenshots?: ImagePlaceholder[];
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
  screenshots?: ImagePlaceholder[];
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
    title: "Sonic Mobility",
    category: "project",
    description: "E-scooter sharing platform for urban mobility.",
    ...projectMedia("Sonic"),
    frameworks: ["Flutter", "Live Tracking", "Google Maps"],
    languages: ["Dart", "Kotlin", "Swift"],
    downloads: "70K+",
    rating: 4.9,
    appStoreUrl: "https://apps.apple.com/eg/app/sonic-mobility-sharing-scooter/id6447569706",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.SonicMobility.sonic&pcampaignid=web_share",
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
    features: ["Real-time flight map", "Flight detail timeline", "Search by route and flight number"],
  }),
  buildPortfolioItem({
    title: "Imtyazat",
    category: "project",
    description: "A loyalty and rewards program application.",
    ...projectMedia("Imtyazat"),
    frameworks: ["Flutter", "Google & Apple Wallet"],
    languages: ["Dart", "Kotlin", "Swift"],
    downloads: "5K+",
    rating: 4.9,
    appStoreUrl: "https://apps.apple.com/bh/app/imtyazat-%D8%A7%D9%85%D8%AA%D9%8A%D8%A7%D8%B2%D8%A7%D8%AA/id6744577970",
    playStoreUrl: "https://play.google.com/store/apps/details?id=qa.gov.mofa.imtyazatpublic&pcampaignid=web_share",
  }),
  buildPortfolioItem({
    title: "CeFoure",
    category: "project",
    description: "A marketplace for discovering and booking local services.",
    ...projectMedia("CeFour"),
    frameworks: ["Flutter", "Payment Integration"],
    languages: ["Dart", "Kotlin", "Swift"],
    downloads: "40K+",
    rating: 4.6,
    appStoreUrl: "https://apps.apple.com/bh/app/cefour/id6476445911",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.cefour.cefour&pcampaignid=web_share",
  }),
  buildPortfolioItem({
    title: "HiShare",
    category: "project",
    description: "Social networking app for sharing content and connecting with others.",
    ...projectMedia("HiShare"),
    frameworks: ["Flutter","Google Maps", "WebSocket"],
    languages: ["Dart", "Kotlin", "Swift"],
    downloads: "20K+",
    rating: 4.5,
    appStoreUrl: "https://apps.apple.com/bh/app/%D9%87%D8%A7%D9%8A-%D8%B4%D9%8A%D8%B1/id6739570429",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.hishare.platform&pcampaignid=web_share",
  }),
  buildPortfolioItem({
    title: "BeTrend",
    category: "project",
    description: "A fashion e-commerce platform with trend discovery.",
    ...projectMedia("BeTrend"),
    frameworks: ["Flutter", "Video Stream", "Payment APIs"],
    languages: ["Dart", "Kotlin", "Swift"],
    downloads: "35K+",
    rating: 4.7,
    appStoreUrl: "https://apps.apple.com/bh/app/be-trend-%D8%A8%D9%8A-%D8%AA%D8%B1%D9%86%D8%AF/id1658865427",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.diwan.beTrend&pcampaignid=web_share",
  }),
  buildPortfolioItem({
    title: "Sehtak Tehmna",
    category: "project",
    description: "A healthcare application for managing appointments and health records.",
    ...projectMedia("Sehtak"),
    frameworks: ["Flutter", "Firebase", "REST APIs"],
    languages: ["Dart", "Swift", "Kotlin"],
    downloads: "20K+",
    rating: 4.8,
    appStoreUrl: "https://apps.apple.com/bh/app/%D8%B5%D8%AD%D8%AA%D9%83-%D8%AA%D9%87%D9%85%D9%86%D8%A7/id6477756584",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.sihatukTuhumuna.sihatukTuhumuna&pcampaignid=web_share",
  }),
  buildPortfolioItem({
    title: "Blue Wave",
    category: "project",
    description: "An application for booking water sports and activities.",
    ...projectMedia("BlueWave"),
    frameworks: ["Flutter", "Google Maps", "REST APIs"],
    languages: ["Dart"],
    downloads: "500+",
    rating: 4.3,
  }),
  buildPortfolioItem({
    title: "JetCare",
    category: "project",
    description: "On-demand car wash and detailing service booking app.",
    ...projectMedia("JetCare"),
    frameworks: ["Flutter", "Maps", "REST APIs"],
    languages: ["Dart"],
    downloads: "25K+",
    rating: 4.7,
    appStoreUrl: "https://apps.apple.com/bh/app/jet-care/id6446169634",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.jetcareeg.jetcare&pcampaignid=web_share",
  }),
  buildPortfolioItem({
    title: "Tripta",
    category: "project",
    description: "A ride-sharing application for everyday transit.",
    ...projectMedia("Tripta"),
    frameworks: ["Flutter", "Google Maps", "WebSocket"],
    languages: ["Dart", "Kotlin", "Swift"],
    downloads: "23K+",
    rating: 4.8,
    appStoreUrl: "https://apps.apple.com/bh/app/tripta-eg/id1640910594",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.tripta.user&pcampaignid=web_share",
  }),
  buildPortfolioItem({
    title: "Tripta Hero",
    category: "project",
    description: "The companion app for drivers on the Tripta platform.",
    ...projectMedia("TriptaHero"),
    frameworks: ["Flutter", "Google Maps", "WebSocket"],
    languages: ["Dart", "Kotlin", "Swift"],
    downloads: "11K+",
    rating: 4.7,
    appStoreUrl: "https://apps.apple.com/bh/app/tripta-hero/id1640911684",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.tripta.driver&pcampaignid=web_share",
  }),
  buildPortfolioItem({
    title: "Osta",
    category: "project",
    description: "A platform to connect users with skilled tradespeople.",
    ...projectMedia("Osta"),
    frameworks: ["Flutter", "Google Maps", "Realtime updates"],
    languages: ["Dart", "Kotlin", "Swift"],
    downloads: "25K+",
    rating: 4.6,
    githubUrl: "https://github.com/AhmedShawkyAhmed/RouteMe_Mobile.git",
  }),
  buildPortfolioItem({
    title: "Osta Provider",
    category: "project",
    description: "The companion app for service providers on the Osta platform.",
    ...projectMedia("OstaProvider"),
    frameworks: ["Flutter", "Google Maps", "Realtime updates"],
    languages: ["Dart", "Kotlin", "Swift"],
    downloads: "18K+",
    rating: 4.5,
    githubUrl: "https://github.com/AhmedShawkyAhmed/RouteMe_Mobile.git",
  }),
  buildPortfolioItem({
    title: "Bird Store",
    category: "project",
    description: "An e-commerce mobile application for a pet bird store.",
    ...projectMedia("BirdStore"),
    frameworks: ["Flutter", "REST APIs"],
    languages: ["Dart"],
    downloads: "2K+",
    rating: 4.5,
    githubUrl: "https://github.com/AhmedShawkyAhmed/bird_store_ios.git",
  }),
  buildPortfolioItem({
    title: "Otlop",
    category: "project",
    description: "A food and grocery delivery service application.",
    ...projectMedia("Otlop"),
    frameworks: ["Flutter", "Google Maps", "Realtime updates"],
    languages: ["Dart"],
    downloads: "1K+",
    rating: 4.7,
    githubUrl: "https://github.com/AhmedShawkyAhmed/otlop.git",
  }),
  buildPortfolioItem({
    title: "Seda",
    category: "project",
    description: "An on-demand package delivery service app.",
    ...projectMedia("Seda"),
    frameworks: ["Flutter", "Google Maps", "Realtime updates"],
    languages: ["Dart", "Kotlin", "Swift"],
    downloads: "35K+",
    rating: 4.6,
  }),
  buildPortfolioItem({
    title: "Seda Driver",
    category: "project",
    description: "The companion app for drivers on the Seda platform.",
    ...projectMedia("SedaDriver"),
    frameworks: ["Flutter", "Maps", "Realtime updates"],
    languages: ["Dart", "Kotlin", "Swift"],
    downloads: "23K+",
    rating: 4.6,
  }),
  buildPortfolioItem({
    title: "My Expenses",
    category: "project",
    description: "A personal finance application for tracking expenses.",
    ...projectMedia("MyExpenses"),
    frameworks: ["Flutter", "Hive"],
    languages: ["Dart"],
    downloads: "100+",
    rating: 4.4,
    githubUrl: "https://github.com/AhmedShawkyAhmed/shawky.git",
  }),
  buildPortfolioItem({
    title: "Steps Tracker",
    category: "project",
    description: "A simple mobile application to track daily steps.",
    ...projectMedia("StepsTracker"),
    frameworks: ["Flutter", "Health APIs", "Firebase"],
    languages: ["Dart"],
    downloads: "100+",
    rating: 4.4,
    githubUrl: "https://github.com/AhmedShawkyAhmed/step_tracker.git",
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
