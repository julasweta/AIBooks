import { useState } from "react";
import styles from "./style.module.scss";

type Prompt = {
  id: number;
  title: string;
  prompt: string;
};

const Prompts: Prompt[] = [
  {
    id: 1,
    title: "Summarize an Article",
    prompt: "You are an experienced content editor. Analyze the given article step by step: first identify the main topic and key arguments of the author. Then extract 3-5 most important facts or insights, ignoring minor details. Create a concise 5-sentence summary: start with an introduction (thesis), continue with key points, and finish with practical takeaways. Use a neutral, professional tone. If the article has bias, note it subtly. Here is the article: [PASTE ARTICLE HERE]. Finally, suggest 2-3 questions for further discussion.",
  },
  {
    id: 2,
    title: "Explain Like I'm 5",
    prompt: "You are a fun teacher for kids, turning complex ideas into simple stories. Explain [TOPIC] as if talking to a 5-year-old: 1) Start with a basic analogy (e.g., '[TOPIC] is like a magic bicycle that rides itself'); 2) Break it down into simple steps (like a game: 'First you say where to go, then it listens'); 3) Avoid difficult words — replace with familiar ones (computer → 'smart helper'); 4) Add humor and examples from cartoons/games (like 'Peppa Pig' or 'Minecraft'); 5) End with a question to check understanding ('If you had such a helper, what would you do?'). Keep text 200-300 words, enthusiastic, with repetition for reinforcement.",
  },
  {
    id: 3,
    title: "Generate Blog Post Outline",
    prompt: "You are an SEO content strategist experienced in viral blogs. For the topic [TOPIC], create a detailed blog post outline (1500-2500 words): 1) H1 headline (attractive, main keyword, 50-60 chars); 2) Short meta description (150-160 chars: hook + keywords + CTA); 3) Structure: intro H2 (hook + thesis), 4-6 main H2s (each with 2-3 H3 subsections, bullet points: facts, examples, stats, visuals), conclusion H2 (summary + key takeaways + CTA). Ensure logical flow: problem → analysis → solution → cases → optimization. Add 5 internal links (anchor text + benefit). Focus on SEO (LSI keywords, readability >60 Flesch) and engagement (questions, lists).",
  },
  {
    id: 4,
    title: "Write Cold Email",
    prompt: "You are a B2B copywriter. Write a cold email for [PRODUCT/SERVICE] to [TARGET AUDIENCE]: structure — 1) Personalized subject (name/company); 2) Hook (their problem); 3) Short solution with 1-2 facts/case; 4) CTA (meeting/demo link). Keep 3-5 sentences, empathetic and authoritative tone. Include personalization: {NAME}, {COMPANY}. Avoid spammy words; focus on value. Example: 'Do you know how [PROBLEM]? Our [PRODUCT] solves it in [RESULT]. Let's discuss.'",
  },
  {
    id: 5,
    title: "Create Social Media Caption",
    prompt: "You are an SMM manager focused on engagement. For [PLATFORM] (Instagram/Twitter/LinkedIn) and [PRODUCT/EVENT], create 5 unique captions: 1) Short (<50 chars); 2) Long (150+ words, story-driven); 3) With emojis (5-7 for visual impact); 4) With question for comments; 5) With CTA (share/buy). Optimize for platform algorithm: hashtags (3-5 relevant), emojis at key positions. Tone — energetic, platform-appropriate. Example for Instagram: '🚀 [PRODUCT] is changing the game! What do you think? #Hashtag'. Test readability.",
  },
  {
    id: 6,
    title: "Refactor Code Explanation",
    prompt: "You are a senior developer experienced in code review. Analyze the code: 1) Explain functionality (input/output); 2) Identify bugs/edge cases (null-checks, performance); 3) Suggest refactoring: improved structure, readability, best practices (ES6+, error handling). Provide updated code with comments. 4) Explain changes (why better). Focus on [LANGUAGE: JS/Python]. Use a comparison table: 'Before | After | Explanation'.",
  },
  // ... Continue translating all other prompts similarly
];

export default function PromptsGuideEn() {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const copyToClipboard = async (text: string, id: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Guide: 20 Most Popular AI Prompts</h1>
        <p className={styles.subtitle}>Ready-to-use prompts for a quick start — copy and paste into your AI tool.</p>
      </header>

      <main className={styles.grid}>
        {Prompts.map((p) => (
          <article key={p.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>{p.id}. {p.title}</h2>
              <button
                className={styles.copyBtn}
                onClick={() => copyToClipboard(p.prompt, p.id)}
                aria-label={`Copy prompt ${p.id}`}>
                {copiedId === p.id ? "Copied!" : "Copy"}
              </button>
            </div>

            <pre className={styles.prompt}>
              {p.prompt}
            </pre>

            <footer className={styles.cardFooter}>
              <small>Tip: Replace bracketed placeholders with actual values (e.g., [TOPIC]).</small>
            </footer>
          </article>
        ))}
      </main>

      <footer className={styles.footer}>
        <p>License: Use for personal or commercial purposes — please credit the author when sharing.</p>
      </footer>
    </div>
  );
}
