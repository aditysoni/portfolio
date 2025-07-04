import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  Globe,
  Twitter,
  Instagram,
  ExternalLink,
} from "lucide-react";

export const Contact = () => {
  return (
<section className="pt-20 px-4 bg-white">
<div className="container mx-auto">
<div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">
            LET&apos;S <span className="text-yellow-400">CONNECT</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-mono">
            <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold px-4 py-2 rounded-full mb-2">
              🚀 Available for Projects & Opportunities
            </span>
            <br />
            <span className="text-gray-500 mt-2 block">🌍 All over the world</span>
          </p>
        </div>

        <div className="flex flex-wrap justify-center mt-32 gap-8">
          {/* Contact Info */}
          <Card className="min-w-[380px] max-w-[400px] bg-white bg-opacity-100 border border-gray-200 rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-green-500 hover:shadow-green-200 z-10 relative">
            <CardHeader>
              <CardTitle className="text-black text-xl">Contact Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg">
              <div className="group flex items-center gap-3 text-gray-700 hover:text-green-600 transition-all">
                <Mail className="h-6 w-6 group-hover:text-green-600 transition-colors" />
                <span className="group-hover:text-green-600">soni.aditya1023@gmail.com</span>
              </div>
              <div className="group flex items-center gap-3 text-gray-700 hover:text-green-600 transition-all">
                <Globe className="h-6 w-6 group-hover:text-green-600 transition-colors" />
                <span className="group-hover:text-green-600">+91 9305611376</span>
              </div>
            </CardContent>
          </Card>

          {/* Professional Links */}
          <Card className="min-w-[380px] max-w-[400px] bg-white bg-opacity-100 border border-gray-200 rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-green-500 hover:shadow-green-200 z-10 relative">
            <CardHeader>
              <CardTitle className="text-black text-xl">Professional Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg">
              <a
                href="https://github.com/aditysoni"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-gray-700 hover:text-green-600 transition-all"
              >
                <Github className="h-6 w-6 group-hover:text-green-600 transition-colors" />
                <span className="group-hover:text-green-600">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/soniaditya1017/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-gray-700 hover:text-green-600 transition-all"
              >
                <Linkedin className="h-6 w-6 group-hover:text-green-600 transition-colors" />
                <span className="group-hover:text-green-600">LinkedIn</span>
              </a>
              <a
                href="https://medium.com/@universalPhoton"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-gray-700 hover:text-green-600 transition-all"
              >
                <ExternalLink className="h-6 w-6 group-hover:text-green-600 transition-colors" />
                <span className="group-hover:text-green-600">Medium</span>
              </a>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="min-w-[380px] max-w-[400px] bg-white bg-opacity-100 border border-gray-200 rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-green-500 hover:shadow-green-200 z-10 relative">
            <CardHeader>
              <CardTitle className="text-black text-xl">Social Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg">
              <a
                href="https://x.com/inos_aytida"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-gray-700 hover:text-green-600 transition-all"
              >
                <Twitter className="h-6 w-6 group-hover:text-green-600 transition-colors" />
                <span className="group-hover:text-green-600">Twitter</span>
              </a>
              <a
                href="https://instagram.com/adityasoni__10"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-gray-700 hover:text-green-600 transition-all"
              >
                <Instagram className="h-6 w-6 group-hover:text-green-600 transition-colors" />
                <span className="group-hover:text-green-600">Instagram</span>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-4 mt-8">
    <div className="container mx-auto px-4 text-center">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-black">Aditya Soni</span>. All rights reserved.
      </p>
    </div>
  </footer>
    </section>
  );
};
