// Descriptions and technologies checked against the linked public repositories.
// Add a local image URL to replace each typographic project cover.
export const projects = {
  fullStack: [
    {
      id: "worksphere",
      title: "WorkSphere",
      image: "",
      description:
        "A full-stack workspace for organizing teams, projects, and tasks, with collaborative comments and an overview of ongoing work.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux Toolkit",
      ],
      features: [
        "Workspace membership and role-based access",
        "Task assignments, priorities, and due dates",
        "Comments, activity tracking, and dashboard insights",
      ],
      github: "https://github.com/Nitin-yadav2804/WorkSphere",
      liveDemo: "https://work-sphere-psi.vercel.app",
    },
  ],
  backend: [
    {
      id: "imagegram",
      title: "ImageGram",
      image: "",
      description:
        "An image-sharing API with user authentication, image posts, and comments, organized into controllers, services, and repositories.",
      technologies: ["Node.js", "Express.js", "MongoDB", "AWS S3", "Zod"],
      features: [
        "Image uploads with Multer and S3",
        "Create, read, update, and delete posts",
        "Authenticated comment routes",
      ],
      github: "https://github.com/Nitin-yadav2804/ImageGram-Backend",
    },
    {
      id: "shopcart",
      title: "ShopCart",
      image: "",
      description:
        "A modular commerce API exploring product endpoints and category management with a relational database.",
      technologies: ["Node.js", "Express.js", "MySQL", "Sequelize", "Axios"],
      features: [
        "Product creation and retrieval endpoints",
        "Category creation, lookup, and deletion",
        "Versioned routing and request validation",
      ],
      github: "https://github.com/Nitin-yadav2804/ShopCart-Backend",
    },
  ],
  frontend: [
    {
      id: "crypto-tracker",
      title: "Crypto Tracker",
      image: "",
      description:
        "A cryptocurrency dashboard for exploring market prices, trends, and individual coin details with data from CoinGecko.",
      technologies: ["React", "Tailwind CSS", "React Query", "CoinGecko API"],
      features: [
        "Sortable market overview and coin detail pages",
        "USD and INR currency switching",
        "Responsive interface with light and dark themes",
      ],
      github: "https://github.com/Nitin-yadav2804/Crypto-Tracker",
      liveDemo: "https://crypto-tracker-ivory-beta.vercel.app/",
    },
    {
      id: "pokedex",
      title: "PokeDex",
      image: "",
      description:
        "A responsive Pokémon explorer for browsing the collection, searching by name, and viewing detailed Pokémon information.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "PokéAPI"],
      features: [
        "Browse Pokémon data",
        "Search Pokémon by name",
        "Explore individual Pokémon details",
      ],
      github: "https://github.com/Nitin-yadav2804/PokeDex",
      liveDemo: "https://poke-dex-lime.vercel.app/",
    },
  ],
  nodejs: [
    {
      id: "telebot",
      title: "TeleBot",
      image: "",
      description:
        "A Node.js Telegram bot prototype exploring conversational AI through the Google Gemini SDK.",
      technologies: ["Node.js", "Telegram Bot API", "Google GenAI", "Axios"],
      features: [
        "Polling-based Telegram message handling",
        "Welcome command and message feedback",
        "Gemini integration prototype",
      ],
      github: "https://github.com/Nitin-yadav2804/TeleBot",
    },
  ],
};
