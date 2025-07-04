import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-20 px-4 bg-white ">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
            ABOUT <span className="text-yellow-400">ME</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-mono">
            Get to know the person behind the code — building secure and scalable solutions, and staying curious.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Profile Picture */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md shadow-green-100 hover:scale-[1.02] transition-transform duration-300 bg-white">
              <img
                src="/E5B4EB9E-812E-450E-B993-928215983B5C.JPG"
                alt="Aditya Soni"
                width={350}
                height={350}
                className="object-cover w-full h-full bg-white"
              />
            </div>
          </div>

          {/* Bio Card */}
          <Card className="flex-1 bg-white border border-gray-200 rounded-2xl bg-opacity-100 shadow-md shadow-green-100 transition-all duration-300 hover:border-green-500 hover:shadow-lg hover:shadow-green-300">
            <CardContent className="space-y-4 text-gray-700 text-lg leading-relaxed p-6 bg-white">
              <p>
                Hello! I'm <span className="text-black font-semibold">Aditya Soni</span>, a passionate blockchain developer with experience in building decentralized apps, DeFi protocols, and smart contracts.
              </p>
              <p>
                With a background in full-stack development, I blend frontend elegance with secure backend infrastructure. I'm always exploring new ways to solve problems using technologies.
              </p>
              <p>
                When I’m not coding, I’m either in the ground ( touching grass ) or maybe in the theaters. I love to work hard and trying to create a really impactful applicaiton which can help humanity . 
                Trying to make a dent on the Universe ......
              </p>

              {/* Hobbies Section */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-black mb-3">Hobbies & Interests 🧩</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Crypto Trading",
                    "Cricket / Football / Chess ",
                    "Movies",
                    "Beach and Mountains ",
                  ].map((hobby, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-yellow-100 text-yellow-800 font-medium rounded-full text-sm hover:bg-yellow-200 transition-all"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
