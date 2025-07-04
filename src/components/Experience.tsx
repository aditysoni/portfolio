import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  Briefcase,
  Award,
  TrendingUp,
} from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Senior Blockchain Developer",
      company: "B-CUBE.AI / B3X.AI",
      location: "France (Remote)",
      period: " October 2024 - Present",
      type: "Full-time",
      description:
        "Leading development of next-generation DeFi on-chain fund management vaults and perp dex . Speaheded smart contracts creation for the ICO , vault management and per dex .",
      achievements: [
        "Architected ICO sale with developing smart contracts to frontend creation and integrating blockchain and kyc feature (Sumsub) ",
        "Developed and tested smart contracts in cosmwasm for the portfolio managemenet system on Injective chain",
        "Engineered smart contracts in solana for meme tokens using the Solana's SPL token standarad  ",
        "Engineered smart contracts for perp dex with infinte listing in solidity getting $ 5B+ volume  with 100k + users ",
        "Designed and implemented microservices in Golang for (Price Keeper, ADL Handler and Liquidation Handler ",
        "Integrated Privy to implement ERC-4337 account abstraction, enabling seamless user onboarding with gasless transactions and email-based wallet creation. "
        
      ],
      technologies: ["Solidity", "Solana", "Cosmwasm", "TypeScript", "React", "AWS", "Golang" , "Subgraphs ", "Privy"],
      color: "from-green-500 to-lime-500",
    },
    {
      title: "Blockchain Developer",
      company: "FXDX ",
      location: "Bengaluru, India ",
      period: "Nov 2023 - October 2024",
      type: "Full-time",
      description:
        "Developed smart contracts for NFT marketplaces and implemented cross-chain bridge solutions. Collaborated with front-end teams to integrate Web3 functionality.",
        achievements: [
          "Collaborated on the development of a low-latency, high-performance order book management system both dividing functionalities onchain and offchain, using Solidity for smart contracts and Golang for off-chain functionalities .",
          "Developed and tested Solidity smart contracts for a perpetual DEX securing over $1M TVL and $1B+ annual trading volume",
          "Designed an arbitrage bot in Go for EVM chains, capturing price inefficiencies across DEXs",
          "Reduced backend data latency from 3 hours to 2 seconds for 500,000+ positions using subgraphs and optimized algorithms",
          "Implemented secure user notifications for order execution via encrypted email systems",
          "Collaborated on the development of a low-latency, high-performance order book management system both dividing functionalities onchain and offchain, using Solidity for smart contracts and Golang for off-chain functionalities ."
        ],
      technologies: ["Solidity", "Truffle", "JavaScript", "Node.js", "MongoDB"],
      color: "from-green-500 to-lime-500",
    },
    {
      title: "Blockchain Developer",
      company: "Databloc Technologies",
      location: "Noida, India",
      period: "June 2022 - October 2023",
      type: "Full-time",
        achievements: [
          "Designed efficient database schemas and integrated PostgreSQL to tokenize and manage 10,000+ pharmaceutical items, implementing optimized queries for fast data retrieval and storage",
          "Led Arbitrum integration into a Web3 gaming platform and tokenized pharmaceutical & real estate assets",
          "Optimized frontend load times by 40% with paginated responses and fortified MongoDB/PostgreSQL systems, managing 200,00+ data points efficiently",
          "Enhanced performance by 60% via optimized schema design and Redis for real-time streaming",
          "Developed full-stack DApps with Next.js, Node.js, Go, MongoDB, and EVM-compatible chains",
          "Reduced front-end load times by 40% through paginated responses and optimized database systems",
          "Built Solidity and Rust contracts for RWA tokenization and cross-chain asset support"
        ],
      technologies: ["Solidity", "Nextjs", "Reactjs", "PostgreSQL", "AWS", "Docker", "Redis"],
      color: "from-green-500 to-lime-500",
    },
  ];


  return (
    <section className="py-20 px-4 bg-white dark:bg-zinc-950">
      <div className="text-center mb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-6 font-sans">
            PROFESSIONAL
            <span className="text-yellow-500"> EXPERIENCE</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto font-sans">
            Track record of delivering innovative blockchain solutions across startups and established companies.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8 mt-16">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur border-yellow-400 border hover:border-green-400 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-green-400/30 group overflow-hidden"
            >
              <div
                className={`h-1 bg-gradient-to-r ${exp.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-black dark:text-white text-2xl mb-3 flex items-center gap-3 font-mono group-hover:text-green-600 transition-colors duration-300">
                      <div
                        className={`p-2 bg-gradient-to-r ${exp.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Briefcase className="h-5 w-5 text-white" />
                      </div>
                      {exp.title}
                    </CardTitle>
                    <div className="text-green-700 dark:text-green-400 font-semibold text-xl mb-3 font-sans group-hover:text-green-600 transition-colors duration-300">
                      {exp.company}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-700 dark:text-zinc-400">
                      <span className="flex items-center gap-2 bg-gray-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2 bg-gray-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                      <Badge
                        variant="outline"
                        className="border-yellow-500 text-yellow-600 bg-yellow-100 hover:bg-green-100 dark:bg-zinc-700 transition-all duration-300"
                      >
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Optional description block */}
                {/* <p className="text-gray-800 dark:text-zinc-300 leading-relaxed text-lg font-sans group-hover:text-gray-900 transition-colors duration-300">
                  {exp.description}
                </p> */}

                <div className="space-y-6">
                  <div>
                    <h4 className="text-green-700 dark:text-green-400 font-semibold mb-4 flex items-center gap-2 font-mono">
                      <Award className="h-4 w-4" />
                      Key Achievements
                    </h4>
                    <ul className="list-disc list-inside space-y-4 max-w-8xl mx-auto text-left">
                    {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-gray-800 dark:text-zinc-200 flex items-start gap-3 font-sans group-hover:text-gray-900 transition-colors duration-300"
                          >
                          <div
          className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mt-2 flex-shrink-0`}
          ></div>        <span className="leading-relaxed">{achievement}</span>

                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-green-700 dark:text-green-400 font-semibold mb-4 flex items-center gap-2 font-mono">
                      <TrendingUp className="h-4 w-4" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-yellow-100 dark:bg-zinc-800 text-black dark:text-white hover:bg-green-100 dark:hover:bg-green-800 transition-all duration-300 group-hover:scale-105 font-mono"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
