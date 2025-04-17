import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun } from "lucide-react";
import { UserProfile } from "@/components/UserProfile";
import Icon from "@/assets/MuscleMetricIcon.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [shrink, setShrink] = useState(false);
  const location = useLocation();

  const links = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/plans", label: "Plans" },
    { href: "/custom-Plans", label: "Custom Plans" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${
        shrink ? "h-16" : "h-24"
      }`}
    >
      <div className="container flex items-center justify-between h-full">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="text-4xl font-bold">
            <img
              src={Icon}
              className={`rounded-xl transition-all duration-300 ${
                shrink ? "h-10 w-10" : "h-16 w-16"
              }`}
            />
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-9 w-9" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full sm:w-[300px]">
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-4xl font-bold">
                <img
                  src={Icon}
                  className="h-16 w-16 rounded-xl"
                />
              </Link>
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-2xl font-medium transition-colors hover:text-primary ${
                    isActive(link.href)
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop Menu */}
        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <div className="flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-xl font-medium transition-colors hover:text-primary ${
                  isActive(link.href) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === "light" ? (
              <Moon className="h-7 w-7" />
            ) : (
              <Sun className="h-7 w-7" />
            )}
          </Button>
          <UserProfile />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
