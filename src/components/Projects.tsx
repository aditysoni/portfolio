import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "b3x.ai : AI integrated Portfolio Mangement",
      description:
        "Advanced yield farming protocol that backtests and optimizes strategies using AI, featuring smart rebalancing, compound rewards, and risk management with real-time analytics.",
      metrics: { tvl: "$500k+", users: "100K+", apy: "10.5%" },
      category: "DeFi",
      demoUrl: "https://prod1.b3x.ai/en/trade/btc-usdt-perp",
      githubUrl: "",
    },
    {
      title: "b3x.ai : Perp DEX with Infinite Listing",
      description:
        "Liquidity pool model perpetual DEX supporting infinite listings and efficient execution across multiple assets.",
      metrics: { volume: "$2B+", users: "100K+" },
      category: "DeFi",
      demoUrl: "https://testnet.b3x.ai/#/trade",
      githubUrl: "",
    },
    {
      title: "FXDX : DeFi Yield Aggregator",
      description:
        "Automatically optimizes returns across DeFi platforms with real-time analytics, rebalancing strategies, and compound mechanisms.",
      metrics: { dexs: "6", users: "50K+" },
      category: "DeFi",
      demoUrl: "https://app.fxdx.exchange",
      githubUrl: "",
    },
    {
      title: "FXDX-V2: Perp DEX",
      description:
        "Enhanced version of FXDX-V1 with scalable backend, optimized liquidations, and order keeper system.",
      metrics: { volume: "$100M+", users: "80K+" },
      category: "DeFi",
      demoUrl: "https://fxdx.exchange/",
      githubUrl: "",
    },
    {
      title: "Avitus: Perp DEX",
      description:
        "Perpetual DEX with high-performance backend and optimized trading logic for advanced DeFi strategies.",
      metrics: { volume: "$850K", pairs: "40+", users: "60K+" },
      category: "DeFi",
      demoUrl: "https://www.avituslabs.xyz/",

    },
    {
      title: "Cross-Chain Bridge Protocol",
      description:
        "Secure cross-chain bridge enabling asset transfers between Arbitrum, Optimism, and Base. Built with Go-based scalable infrastructure and battle-tested Vaults.",
      metrics: { chains: "3", volume: "$1.2M", uptime: "90.2%" },
      category: "Infrastructure",
    },
    {
      title: "NFT Marketplace",
      description:
      "A utility-driven NFT marketplace enabling creators to offer exclusive content, gated experiences, and on-chain perks to NFT holders. Designed to enhance engagement and reward ownership.",
      metrics: { nfts: "10K+"},
      category: "NFT",
    },
    {
      title: "ChainCity Mafia",
      description:
        "Tokenized real estate platform with account abstraction, improving liquidity, transparency, and security for asset trading.",
      metrics: { assets: "100+", users: "10K" },
      category: "Tokenization",
    },
    {
      title: "GoGreen",
      description:
      "A decentralized Platform for users to trade renewable energy, equipment, and land for generation and distribution of energy resources" ,
        metrics: { assets: "100+"},
        category: "Tokenization",
    },
  ];

  const categoryColors: Record<string, string> = {
    DeFi: "from-green-500 to-blue-500",
    NFT: "from-pink-500 to-purple-600",
    Infrastructure: "from-yellow-500 to-orange-500",
    Tokenization: "from-teal-500 to-emerald-500",
  };

  return (
    <section className="py-20 px-4 min-h-screen">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 font-sans">
              FEATURED <span className="text-yellow-400">PROJECTS</span>
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const gradient = categoryColors[project.category] || "from-gray-400 to-gray-600";

            return (
              <Card
                key={index}
                className="bg-white/60 backdrop-blur border border-yellow-400 hover:border-green-500 transition-all duration-500 hover:scale-[1.015] shadow-md hover:shadow-green-300/20 group overflow-hidden rounded-xl"
              >
                {/* Gradient bar */}
                <div
                  className={`h-1 bg-gradient-to-r ${gradient} opacity-70 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative z-10 flex flex-col px-6 py-6 h-full justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-black text-xl lg:text-2xl font-mono group-hover:text-green-700 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <Badge className={`bg-gradient-to-r ${gradient} text-white font-mono`}>
                        {project.category}
                      </Badge>
                    </div>

                    <p className="text-gray-800 text-sm leading-relaxed font-sans group-hover:text-gray-900 transition-colors duration-300 mb-4">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-3 gap-2 mb-6">
                      {Object.entries(project.metrics).map(([key, value], i) => (
                        <div
                          key={i}
                          className="bg-white/50 border border-yellow-300 text-center rounded-md p-3 group-hover:bg-green-100/60 transition-all duration-300"
                        >
                          <div className="text-green-700 text-xs font-mono uppercase">{key}</div>
                          <div className="text-black text-sm font-bold font-sans">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {(project.demoUrl || project.githubUrl) && (
                    <CardContent className="p-0 pt-4">
                      <div className="flex gap-3">
                        {project.demoUrl && (
                          <Button
                            asChild
                            size="sm"
                            className="bg-green-600 hover:bg-green-500 text-white border-0 transition-all duration-300 hover:scale-105 font-sans"
                          >
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="border-green-600 text-green-700 hover:bg-green-100 hover:text-black transition-all duration-300 font-sans"
                          >
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
