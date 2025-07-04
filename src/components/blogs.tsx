import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export const BlogSection = () => {
  const blogs = [
    {
      title: "How we scale the Liquidation Handler",
      summary:
        "A deep dive into the security practices and audit processes in DeFi protocols.",
      category: "Infrastructure",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*n00yaYxZoHzaGi6erctjdg.png",
      link: "https://medium.com/@yourprofile/how-we-scale-the-liquidation-handler-123456",
    },
    {
      title: "Batch execution And MultiCall Contract",
      summary:
        "How to build robust bridges between Ethereum, Arbitrum, and other L2s.",
      category: "Optimization",
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ZIKQG18xknUNVrxW0D8Wpw.jpeg",
      link: "https://medium.com/@yourprofile/batch-execution-multicall-456789",
    },
    {
      title: "A Deep Dive into DEX Architectures",
      summary:
        "A guide to designing token economies that actually work in the long term.",
      category: "Tokenomics",
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*xnAtRbh50k6nCpUJkiqhhA.jpeg",
      link: "https://medium.com/@yourprofile/dex-architectures-789101",
    },
    {
      title: "Promise Land: .all(), .any(), .finally(), and .race()",
      summary:
        "An intro to ZK tech and how it's reshaping scalability in web3.",
      category: "Optimization",
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*WBEA_zyuYQGFuyl3oqz_DA.png",
      link: "https://medium.com/@yourprofile/promise-land-all-any-finally-race-112233",
    },
  ];

  const categoryColors: Record<string, string> = {
    Security: "from-red-500 to-pink-500",
    Infrastructure: "from-yellow-500 to-orange-500",
    Tokenomics: "from-blue-500 to-cyan-500",
    "Layer 2": "from-purple-500 to-indigo-500",
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto z-20">
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-12 text-center">
          LATEST <span className="text-yellow-400">BLOGS</span>
        </h2>

        <div className="overflow-x-auto">
          <div className="flex gap-8 w-max px-2 pb-2">
            {blogs.map((blog, index) => {
              const gradient =
                categoryColors[blog.category] || "from-gray-400 to-gray-600";

              return (
                <Card
                  key={index}
                  className="min-w-[370px] max-w-[370px] bg-white/80 border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.015]"
                >
                  <div className={`h-1 bg-gradient-to-r ${gradient} opacity-80`} />

                  <div className="w-full h-48 bg-white flex items-center justify-center">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="px-5 py-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-black text-xl font-mono group-hover:text-cyan-500 transition-colors duration-300">
                          {blog.title}
                        </CardTitle>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed font-sans mb-3">
                        {blog.summary}
                      </p>
                    </div>

                    <CardContent className="p-0 pt-4">
  <a
    href={blog.link}
    target={blog.link}
    rel="noopener noreferrer"
    className="inline-block text-center bg-black-500 text-white text-sm font-mono px-4 py-2 rounded-full hover:bg-cyan-600 transition-colors"
  >
    Read Blog
  </a>
</CardContent>
                  </div>
                </Card>
              );
            })}

            {/* See More Card */}
            <Card className="min-w-[370px] max-w-[370px] bg-gradient-to-br from-yellow-400 to-orange-500 text-white flex items-center justify-center text-center font-mono text-lg rounded-2xl hover:scale-[1.02] transition-all duration-500 shadow-md hover:shadow-lg">
              <a
                href="https://medium.com/@yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 block w-full h-full"
              >
                <div className="flex flex-col items-center justify-center gap-3">
                  <ExternalLink className="h-6 w-6" />
                  <span>See More on Medium</span>
                </div>
              </a>
            </Card>
          </div>
        </div>

        {/* Read All on Medium Button */}
        <div className="mt-12 text-center">
          <a
            href="https://medium.com/@universalPhoton"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-mono rounded-full hover:bg-gray-800 transition-all duration-300 shadow"
          >
            <ExternalLink className="h-4 w-4" />
            Read All Blogs on Medium
          </a>
        </div>
      </div>
    </section>
  );
};
