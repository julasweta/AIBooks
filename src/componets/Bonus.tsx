import type { FC } from "react";
import { Link } from "react-router-dom";

interface BonusProps {
  lang?: "en" | "ua"; // мова бонусу, опційна
}

const Bonus: FC<BonusProps> = ({ lang = "en" }) => {
  const link = lang === "en" ? "/promptsEn" : "/prompts";

  return (
    <div>
      <Link
        to={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bonusButton"
      >
        🎁 Bonus Prompts
      </Link>
    </div>
  );
};

export default Bonus;
