import React from "react";
import "../styles.scss";

/**
 * Full "About the Author" section
 * Source: AI_Salle.docx
 * Content taken from fragments: :contentReference[oaicite:0]{index=0} :contentReference[oaicite:1]{index=1} :contentReference[oaicite:2]{index=2}
 */

const AuthorEn: React.FC = () => {
  return (
    <section className="ai-author" aria-labelledby="author-heading">
      <div className="ai-author__inner">

        {/* Author photo / logo */}
        <div className="ai-author__photo" aria-hidden="true">
        </div>

        {/* Text content */}
        <div className="ai-author__content">
          <h2 id="author-heading" className="ai-author__name">About the Author</h2>
          <p className="ai-author__role">Author • AI & Digital Innovation Expert • Business Pro</p>

          <div className="ai-author__bio">
            <p>
              I have dedicated almost my entire life to studying modern technologies and their impact on our lives. 
              As an experienced expert in artificial intelligence and digital innovation, I have a deep understanding 
              of trends shaping the future of work and income in 2025. My mission is to make AI knowledge accessible 
              and provide everyone with the opportunity to start earning without prior skills through a simple 
              step-by-step guide.
            </p>

            <p>
              My professional journey began in IT companies, where I worked on developing and implementing 
              innovative digital solutions. Later, I became an expert in automation, online business, and integrating 
              AI into everyday life. This allowed me to gain valuable experience and collaborate with startups and 
              businesses aiming to leverage AI for revenue. My goal is to help people achieve financial independence 
              by teaching them new technical skills in the simplest way.
            </p>

            <p>
              In my work, I follow the principles of openness and sincerity — I believe that anyone can succeed in 
              the digital age if they receive the right knowledge and motivation. My teaching style is practical 
              and straightforward, with real examples and step-by-step instructions to help anyone quickly and 
              effectively utilize AI opportunities. It is important to me to inspire people to self-improvement 
              and help them take the first step toward new financial independence.
            </p>

            <p>
              With a technical education in computer science and business administration, I constantly update my 
              knowledge to stay at the forefront of technological trends. My experience writing instructional 
              manuals and conducting training has helped me create a structured approach to learning: simple, 
              accessible, and results-oriented. This approach forms the foundation of this book, designed to be 
              a starting point for anyone who wants to earn using AI.
            </p>
          </div>

          <div className="ai-author__contacts">
            <a href="#" className="ai-author__contact">Telegram</a>
            <a href="#" className="ai-author__contact">Email</a>
            <a href="#" className="ai-author__contact">Website</a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AuthorEn;
