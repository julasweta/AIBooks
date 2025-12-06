import { useEffect, useState, type JSX } from "react";
import "./styles.scss";
import Author from "./Author";
import Chapter1 from "./Chapter1";
import Chapter10 from "./Chapter10";
import Chapter11 from "./Chapter11";
import Chapter12 from "./Chapter12";
import Chapter2 from "./Chapter2";
import Chapter3 from "./Chapter3";
import Chapter4 from "./Chapter4";
import Chapter5 from "./Chapter5";
import Chapter6 from "./Chapter6";
import Chapter7 from "./Chapter7";
import Chapter8 from "./Chapter8";
import Chapter9 from "./Chapter9";
import ChapterPrompts from "./ChapterPrompts";
import Cover from "./Cover";
import Bonus from "./Bonus";


type ChapterItem = {
  id: string;
  title: string;
  component: JSX.Element;
};

const chapters: ChapterItem[] = [
  { id: "cover", title: "Обкладинка", component: <Cover /> },
  { id: "author", title: "Автор", component: <Author /> },
  { id: "c1", title: "1. Що таке AI-заробіток у 2026 і чому це найпростіший спосіб стартувати без навичок", component: <Chapter1 /> },
  { id: "c2", title: "2. Які AI-послуги реально продаються у 2025 — без досвіду і вкладень", component: <Chapter2 /> },
  { id: "c3", title: "3. Як вибрати нішу, щоб заробити перші гроші вже цього тижня", component: <Chapter3 /> },
  { id: "c4", title: "4. Де знайти перших клієнтів і як писати, щоб вони відповіли", component: <Chapter4 /> },
  { id: "c5", title: "5. Як створити портфоліо та кейси, навіть якщо у тебе ще не було жодного клієнта", component: <Chapter5 /> },
  { id: "c6", title: "6. Збір портфоліо, навіть якщо ти ще нічого не продав", component: <Chapter6 /> },
  { id: "c7", title: "7. Як знайти перших клієнтів та отримати відповідь", component: <Chapter7 /> },
  { id: "c8", title: "8. Масштабування доходу та повторні продажі", component: <Chapter8 /> },
  { id: "c9", title: "Р9. Інструменти та сервіси для автоматизації AI-бізнесу", component: <Chapter9 /> },
  { id: "c10", title: "10. Відповіді на питання, які часто виникають", component: <Chapter10 /> },
  { id: "prompts", title: "Промпти", component: <ChapterPrompts /> },
  { id: "c11", title: "11. Твоя цінність як виконавця", component: <Chapter11 /> },
  { id: "c12", title: "12. Що робити, щоб підняти рівень своїх послуг і заробітків як виконавець", component: <Chapter12 /> },
  { id: "bonus", title: "Bonus", component: <Bonus lang={'ua'} /> },
];

function AppUa() {
  const [activeId, setActiveId] = useState<string>("cover");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Відстежуємо видимість секцій
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

  // Прокрутка сайдбару до активного пункту
  useEffect(() => {
    const activeEl = document.querySelector<HTMLLIElement>(
      `.sidebar li.active`
    );
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

export default AppUa;