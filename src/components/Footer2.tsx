import { Github, Instagram, Linkedin } from "lucide-react";

const Footer2 = () => {
  return (
    <footer className="relative z-10 border-t border-white/20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 backdrop-blur-lg">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-start text-center sm:text-left">
          {/* Company Info */}
          <div className="sm:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">MuscleMetric</h3>
            <p className="text-sm text-gray-300 max-w-xs">Empowering your fitness journey with smart tracking and analytics.</p>
          </div>

          {/* Social Links */}
          <div className="sm:col-span-1 text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex justify-center space-x-6">
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
          <div className="sm:col-span-1 sm:text-right">
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <p className="text-sm text-gray-300 max-w-xs ml-auto">
              Have questions? Reach out to us through our social networks.
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-6 border-t border-white/20 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} MuscleMetric. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
