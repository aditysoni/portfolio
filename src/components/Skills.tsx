import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Network, Code, Monitor, Server, Settings } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Blockchain Skills",
      icon: Network,
      skills: [
        { name: "Solidity", level: 4 },
        { name: "Solana", level: 3 },
        { name: "Cosmwasm", level: 3 },
        { name: "Viem/Wagmi", level: 4 },
        { name: "Subgraphs", level: 3 },
      ],
    },
    {
      title: "Languages",
      icon: Code,
      skills: [
        { name: "JavaScript", level: 4 },
        { name: "TypeScript", level: 4 },
        { name: "Rust", level: 3 },
        { name: "Go", level: 3 },
        { name: "C++", level: 2 },
      ],
    },
    {
      title: "Frontend Skills",
      icon: Monitor,
      skills: [
        { name: "React", level: 4 },
        { name: "Next.js", level: 4 },
        { name: "Vue.js", level: 3 },
      ],
    },
    {
      title: "Backend Skills",
      icon: Server,
      skills: [
        { name: "Node.js", level: 4 },
        { name: "PostgreSQL", level: 3 },
        { name: "MongoDB", level: 3 },
        { name: "Redis", level: 3 },
      ],
    },
    {
      title: "DevOps",
      icon: Settings,
      skills: [
        { name: "AWS (ECR, ESR, S3, EC2)", level: 3 },
        { name: "Docker", level: 3 },
        { name: "Kubernetes", level: 2 },
      ],
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-12 text-center">
          TECHNICAL <span className="text-yellow-400">EXPERTISE</span>
        </h2>

        <Card className="bg-white/60 border border-yellow-400 backdrop-blur rounded-2xl p-8 shadow-md hover:shadow-green-300/30 hover:scale-[1.015] transition-all duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index}>
                <div className="flex items-center gap-2 mb-4">
                  <category.icon className="h-6 w-6 text-green-600" />
                  <h3 className="text-2xl font-semibold text-black font-mono">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center text-black text-lg font-mono px-2 py-1 hover:bg-green-100/30 rounded transition-all"
                    >
                      <span>{skill.name}</span>
                      <span className="text-yellow-500 text-4xl">
                        {"★".repeat(skill.level)}
                        {"☆".repeat(5 - skill.level)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
