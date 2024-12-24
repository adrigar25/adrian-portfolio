import { Button, Tab, Tabs, Tooltip } from "@nextui-org/react";
import { useState, useEffect, useRef } from "react";
import { Key } from "react";

export default function TabsMenu() {
  const [theme, setTheme] = useState("system");
  const [shadowOpacity, setShadowOpacity] = useState(0);
  const [selectedTab, setSelectedTab] = useState<Key | null>("home");
  const [observerActive, setObserverActive] = useState(true);
  const sectionsRef = useRef<{ [key: string]: HTMLElement }>({});

  useEffect(() => {
    const updateTheme = () => {
      switch (theme) {
        case "light":
          document.documentElement.classList.remove("dark");
          break;
        case "dark":
          document.documentElement.classList.add("dark");
          break;
        case "system":
          if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
          break;
      }
    };
    updateTheme();
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 50; // Ajusta este valor según sea necesario
      const scrollY = window.scrollY;
      const opacity = Math.min(scrollY / maxScroll, 1);
      setShadowOpacity(opacity);

      if (scrollY === 0) {
        setSelectedTab(null);
      }

      // Verificar si se ha llegado al final de la página
      if ((window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 1)) {
        setSelectedTab("aboutme");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!observerActive) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelectedTab(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px",
        threshold: 0.4,
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      observer.observe(section);
      sectionsRef.current[section.id] = section as HTMLElement;
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [observerActive]);

  const handleTabChange = (key: Key) => {
    setObserverActive(false);
    setSelectedTab(key);

    if (key.toString() === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(key.toString())?.scrollIntoView({ behavior: "smooth" });
    }

    setTimeout(() => {
      setObserverActive(true);
    }, 500);
  };

  const getTooltipContent = () => {
    return {
      content: {
        light: "Claro",
        dark: "Oscuro",
        system: "Sistema",
      }[theme],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
          {(() => {
            switch (theme) {
              case "light":
                return (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                );
              case "dark":
                return (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                );
              default:
                return (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                );
            }
          })()}
        </svg>
      ),
    };
  };

  const { content, icon } = getTooltipContent();

  return (
    <div className="fixed z-10 w-full flex justify-center mt-6 flex flex-row gap-2">
      <Tabs
        shouldSelectOnPressUp
        radius="full"
        variant="light"
        color="primary"
        selectedKey={`${selectedTab}`}
        className={`backdrop-blur-lg rounded-full transition-all border border-white dark:${shadowOpacity ? '' : 'border-hidden border-default-50'} duration-300 ${shadowOpacity ? 'shadow-lg  border-default-300' : 'shadow-none'}`}
        onSelectionChange={handleTabChange}
      >
        <Tab
          key="home"
          className="cursor-none transition-transform transform hover:scale-105 w-auto text-[65%] lg:text-md lg:px-4"
          value="home"
          title="Inicio"
        />
        <Tab
          key="studies"
          className="cursor-none transition-transform transform hover:scale-105 w-auto text-[65%] lg:text-md lg:px-4"
          value="studies"
          title="Estudios"
        />
        <Tab
          key="projects"
          className="cursor-none transition-transform transform hover:scale-105 w-auto text-[65%] lg:text-md lg:px-4"
          value="projects"
          title="Proyectos"
        />
        <Tab
          key="aboutme"
          className="cursor-none transition-transform transform hover:scale-105 w-auto text-[65%] lg:text-md lg:px-4"
          value="aboutme"
          title="Sobre mí"
        />
      </Tabs>
      <Button
        isIconOnly
        onClick={() => setTheme(theme === "light" ? "dark" : theme === "dark" ? "system" : "light")}
        radius="full"
        color="default"
        variant="light"
        className={`backdrop-blur-lg rounded-full transition-all border border-white dark:${shadowOpacity ? '' : 'border-hidden border-default-50'} duration-300 ${shadowOpacity ? 'shadow-lg  border-default-300' : 'shadow-none'}`}
      >
        <Tooltip content={content} placement="bottom" size="sm" className="mt-2">
          <div className="flex items-center gap-2 transition-all transform hover:scale-125">
            {icon}
          </div>
        </Tooltip>
      </Button>
    </div>
  );
}