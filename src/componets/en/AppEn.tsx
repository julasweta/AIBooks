import { useEffect, useState, type JSX } from "react";
import "../styles.scss";
import Author from "./AuthorEn";
import Chapter1 from "./Chapter1En";
import Chapter2 from "./Chapter2En";
import Chapter3 from "./Chapter3En";
import Chapter4 from "./Chapter4En";
import Chapter5 from "./Chapter5En";
import Chapter6 from "./Chapter6En";
import Chapter7 from "./Chapter7En";
import Chapter8 from "./Chapter8En";
import Chapter9 from "./Chapter9En";
import Chapter10 from "./Chapter10En";
import Chapter11 from "./Chapter11En";
import Chapter12 from "./Chapter12En";
import ChapterPrompts from "./ChapterPromptEn";
import Cover from "./CoverEn";
import Bonus from "../Bonus";

type ChapterItem = {
  id: string;
  title: string;
  component: JSX.Element;
};

const chapters: ChapterItem[] = [
  { id: "cover", title: "Cover", component: <Cover /> },
  { id: "author", title: "Author", component: <Author /> },
  { id: "c1", title: "1. What is AI earning in 2026 and why it’s the easiest way to start without skills", component: <Chapter1 /> },
  { id: "c2", title: "2. Which AI services actually sell in 2025 — no experience or investment required", component: <Chapter2 /> },
  { id: "c3", title: "3. How to choose a niche to earn your first money this week", component: <Chapter3 /> },
  { id: "c4", title: "4. Where to find your first clients and how to write so they respond", component: <Chapter4 /> },
  { id: "c5", title: "5. How to create a portfolio and cases even if you’ve never had a client", component: <Chapter5 /> },
  { id: "c6", title: "6. Collecting a portfolio even if you haven’t sold anything yet", component: <Chapter6 /> },
  { id: "c7", title: "7. How to find your first clients and get a response", component: <Chapter7 /> },
  { id: "c8", title: "8. Scaling income and repeat sales", component: <Chapter8 /> },
  { id: "c9", title: "9. Tools and services for automating AI business", component: <Chapter9 /> },
  { id: "c10", title: "10. Answers to frequently asked questions", component: <Chapter10 /> },
  { id: "prompts", title: "Prompts", component: <ChapterPrompts /> },
  { id: "c11", title: "11. Your value as a freelancer", component: <Chapter11 /> },
  { id: "c12", title: "12. How to improve your services and earnings as a freelancer", component: <Chapter12 /> },
  { id: "bonus", title: "Bonus", component: <Bonus lang={'en'} /> },
];

function AppEn() {
  const [activeId, setActiveId] = useState<string>("cover");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Track section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;

        let best = visible[0];
        for (const e of visible) {
          if (e.intersectionRatio > best.intersectionRatio) best = e;
        }

        const element = best.target as HTMLElement;
        const id = element.dataset.id || element.id;

        if (id && id !== activeId) setActiveId(id);
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: Array.from({ length: 20 }, (_, i) => i / 20) }
    );

    const sections = document.querySelectorAll<HTMLElement>("section[data-id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [activeId]);

  // Scroll sidebar to active item
  useEffect(() => {
    const activeEl = document.querySelector<HTMLLIElement>(`.sidebar li.active`);
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [activeId]);

  const scrollTo = (id: string) => {
    const el = document.querySelector<HTMLElement>(`section[data-id="${id}"]`);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setSidebarOpen(false);
  };

  return (
    <>
      <button
        className="menu-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰
      </button>

      <div className="layout">
        <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <ul>
            {chapters.map((ch) => (
              <li
                key={ch.id}
                className={activeId === ch.id ? "active" : ""}
                onClick={() => scrollTo(ch.id)}
              >
                {ch.title}
              </li>
            ))}
          </ul>
        </aside>

        <main className="content">
          {chapters.map((ch) => (
            <section
              key={ch.id}
              id={ch.id}
              data-id={ch.id}
              style={{ scrollMarginTop: "20px" }}
            >
              {ch.component}
            </section>
          ))}
        </main>
      </div>
    </>
  );
}

export default AppEn;
