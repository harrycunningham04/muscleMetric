import { Github, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">MuscleMetric</h3>
            <p className="text-sm text-gray-300">
              Empowering your fitness journey with smart tracking and analytics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Button
                  variant="link"
                  className="text-gray-300 hover:text-white p-0"
                >
                  Terms & Conditions
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  className="text-gray-300 hover:text-white p-0"
                >
                  Privacy Policy

                </Button>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Connect With Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/harrycunningham04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/harry-cunningham-039b7a2b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/harry9.cunningham/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <p className="text-sm text-gray-300">
              Have questions? Reach out to us through our social networks.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} MuscleMetric. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
