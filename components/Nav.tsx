"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Twitter, Github, Linkedin } from "lucide-react";
import { ModeToggle } from "./ui/toggle-mode";
import useActiveSection from "@/hooks/useActiveSection";
import { FaGoogleScholar } from "react-icons/fa6";

type NavItem = {
  name: string;
  href: string;
};

export default function Nav() {
  const activeSection = useActiveSection([
    "bio",
    "experience",
    "publications",
    "contact",
  ]);

  const navItems: NavItem[] = [
    { name: "Bio", href: "#bio" },
    { name: "Publications", href: "#publications" },
    { name: "Eperience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const getNavItemClasses = (href: string) => {
    const isActive = activeSection === href.substring(1);
    return {
      linkClass: isActive ? "active" : "",
      indicatorClass: `nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all ${
        isActive
          ? "active w-16 bg-foreground h-2"
          : "group-hover:w-16 group-hover:bg-foreground group-hover:h-px"
      }`,
      textClass: `nav-text text-xs font-bold uppercase tracking-widest ${
        isActive
          ? "text-foreground"
          : "text-slate-500 group-hover:text-foreground"
      }`,
    };
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 flex flex-col lg:gap-4">
      <div className="flex flex-col gap-0">
        <div className="w-full flex lg:items-center lg:justify-start">
          <Avatar className="w-48 lg:w-64 h-auto border-2 border-primary bg-secondary">
            <AvatarImage src="./headshot.jpg" />
          </Avatar>
        </div>
        <h1 className="text-[42px] font-bold lg:text-start text-primary">
	  Muhammed Shuaibi
        </h1>
        <h2 className="text-xl lg:text-start text-primary leading-none">
	  Research Engineer, FAIR at Meta
        </h2>
      <ul className="flex flex-row gap-2 mt-5">
        <Button variant="outline" size="icon">
          <a
            href="https://scholar.google.com/citations?user=lphfYeIAAAAJ&hl=en&oi=ao"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGoogleScholar className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
	<Button variant="outline" size="icon">
          <a
            href="https://github.com/mshuaibii"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
	<Button variant="outline" size="icon">
          <a
            href="https://x.com/mshuaibii"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>

        <Button variant="outline" size="icon">
          <a
            href="https://linkedin.com/in/mshuaibii"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
      </ul>
      <nav className="lg:flex hidden mt-10">
        <ul className="flex flex-col w-max text-start gap-6 uppercase text-xs font-medium">
          {navItems.map((item: NavItem) => {
            const { linkClass, indicatorClass, textClass } = getNavItemClasses(
              item.href
            );
            return (
              <li key={item.name} className="group">
                <a href={item.href} className={`py-3 ${linkClass}`}>
                  <span className={indicatorClass}></span>
                  <span className={textClass}>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      </div>
    </header>
  );
}
