import { useState } from "react";

export default function HomePage() {
  const [language, setLanguage] = useState("zh");

  const content = {
    zh: {
      title: "REFURBISHEDHOUSE",
      subtitle: "精致奢华，尽显非凡",
      categories: ["LV 包包", "LV 卡包", "LV 钥匙扣"],
      contact: "联系我们",
      description: "欢迎来到 REFURBISHEDHOUSE —— 精选二手奢侈品，让经典重新焕发光彩。",
      langSwitch: "English Version"
    },
    en: {
      title: "REFURBISHEDHOUSE",
      subtitle: "Luxury Refined, Elegance Redefined",
      categories: ["LV Bags", "LV Cardholders", "LV Keychains"],
      contact: "Contact Us",
      description: "Welcome to REFURBISHEDHOUSE — premium pre-owned luxury, where timeless style is reborn.",
      langSwitch: "中文版"
    }
  };

  const t = content[language];

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-10 font-sans">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-widest">{t.title}</h1>
        <button onClick={() => setLanguage(language === "zh" ? "en" : "zh")}>
          {t.langSwitch}
        </button>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">{t.subtitle}</h2>
        <p className="text-base md:text-lg max-w-xl mx-auto mb-6">{t.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          {t.categories.map((cat, idx) => (
            <div
              key={idx}
              className="border rounded-2xl p-6 shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <p className="text-lg font-medium">{cat}</p>
            </div>
          ))}
        </div>

        <button className="mt-12 text-white bg-black hover:bg-gray-800 px-6 py-2 rounded-xl">
          {t.contact}
        </button>
      </div>
    </main>
  );
}