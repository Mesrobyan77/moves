"use client";
import React, { useState } from "react";
import {
  FiPlus,
  FiMinus,
  FiHelpCircle,
  FiMail,
  FiMessageCircle,
} from "react-icons/fi";
import { useTranslation } from "@/src/hooks/useTranslation";
import Link from "next/link";

function HelpPage() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = t("help.faqs") as unknown as { q: string; a: string }[];

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <section className="container mx-auto px-4 pt-16 pb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-border pb-10">
          <h1 className="text-5xl font-bebas tracking-tight uppercase">
            {t("help.title")}
          </h1>
          <nav className="text-[10px] uppercase tracking-[0.3em] text-muted mt-4 md:mt-0 font-bold">
            <Link href="/" className="hover:text-primary transition-colors">
              {t("nav.home")}
            </Link>
            <span className="mx-3 text-border">→</span>
            <span className="text-primary">{t("help.title")}</span>
          </nav>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <HelpCard
            icon={<FiHelpCircle />}
            title={t("help.cards.general_title")}
            desc={t("help.cards.general_desc")}
          />
          <HelpCard
            icon={<FiMessageCircle />}
            title={t("help.cards.community_title")}
            desc={t("help.cards.community_desc")}
          />
          <HelpCard
            icon={<FiMail />}
            title={t("help.cards.direct_title")}
            desc={t("help.cards.direct_desc")}
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bebas mb-12 text-center tracking-wide uppercase">
            {t("help.faq_title")}
          </h2>
          <div className="space-y-4">
            {Array.isArray(faqData) &&
              faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="font-bebas text-lg tracking-wider text-foreground uppercase">
                      {faq.q}
                    </span>
                    {openIndex === index ? (
                      <FiMinus className="text-primary" />
                    ) : (
                      <FiPlus className="text-muted" />
                    )}
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index
                        ? "max-h-60 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-6 pb-6 text-muted text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function HelpCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-card p-10 rounded-3xl border border-border hover:border-primary/30 transition-all group text-center shadow-sm">
      <div className="text-primary text-4xl mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bebas tracking-wide mb-4 text-foreground uppercase">
        {title}
      </h3>
      <p className="text-muted text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export default HelpPage;
