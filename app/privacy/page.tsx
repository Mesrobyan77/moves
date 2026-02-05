"use client";
import React from "react";
import { useTranslation } from "@/src/hooks/useTranslation";
import Link from "next/link";

export default function PrivacyPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <section className="container mx-auto px-4 pt-32 pb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-border pb-10">
          <h1 className="text-5xl font-bebas tracking-wider text-foreground uppercase">
            {t("privacy.title")}
          </h1>
          <nav className="text-[10px] uppercase tracking-[0.3em] text-muted mt-4 md:mt-0 font-bold">
            <Link
              href="/"
              className="hover:text-primary cursor-pointer transition-colors"
            >
              {t("nav.home")}
            </Link>
            <span className="mx-3 opacity-20">→</span>
            <span className="text-primary">{t("privacy.title")}</span>
          </nav>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/5 blur-[120px] -z-10" />

        <div className="max-w-4xl mx-auto space-y-16">
          <section className="group">
            <h2 className="text-2xl font-bebas mb-6 text-foreground tracking-widest flex items-center gap-4 uppercase">
              <span className="text-primary">01.</span>{" "}
              {t("privacy.intro_title")}
            </h2>
            <p className="text-muted leading-relaxed text-sm max-w-3xl">
              {t("privacy.intro_text")}
            </p>
          </section>

          <section className="group">
            <h2 className="text-2xl font-bebas mb-6 text-foreground tracking-widest flex items-center gap-4 uppercase">
              <span className="text-primary">02.</span>{" "}
              {t("privacy.collection_title")}
            </h2>
            <div className="bg-card/40 backdrop-blur-sm border border-border p-8 rounded-2xl shadow-xl">
              <p className="text-muted leading-relaxed text-sm mb-6">
                {t("privacy.collection_text")}
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-sm">
                <li className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span>
                    <strong className="text-foreground block">
                      {t("privacy.data_types.personal")}
                    </strong>{" "}
                    {t("privacy.data_types.personal_desc")}
                  </span>
                </li>
                <li className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span>
                    <strong className="text-foreground block">
                      {t("privacy.data_types.payment")}
                    </strong>{" "}
                    {t("privacy.data_types.payment_desc")}
                  </span>
                </li>
                <li className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/5 col-span-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span>
                    <strong className="text-foreground block">
                      {t("privacy.data_types.log")}
                    </strong>{" "}
                    {t("privacy.data_types.log_desc")}
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bebas mb-6 text-foreground tracking-widest flex items-center gap-4 uppercase">
              <span className="text-primary">03.</span>{" "}
              {t("privacy.usage_title")}
            </h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
              {(t("privacy.usage_items") as unknown as string[]).map(
                (item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 border-b border-border/50 py-3"
                  >
                    <span className="text-primary font-mono text-xs">
                      0{i + 1}
                    </span>
                    <span className="text-muted text-sm italic">{item}</span>
                  </div>
                ),
              )}
            </div>
          </section>

          <section className="bg-primary/5 border border-primary/10 p-8 rounded-2xl">
            <h2 className="text-2xl font-bebas mb-4 text-foreground tracking-widest uppercase">
              04. {t("privacy.rights_title")}
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              {t("privacy.rights_text")}
            </p>
          </section>

          <footer className="pt-10 border-t border-border">
            <h2 className="text-2xl font-bebas mb-6 text-foreground tracking-widest uppercase">
              05. {t("privacy.contact_title")}
            </h2>
            <p className="text-muted leading-relaxed text-sm mb-8">
              {t("privacy.contact_text")}
              <span className="text-primary ml-1 font-bold cursor-pointer hover:underline decoration-2 underline-offset-4">
                support@hotflix.com
              </span>
            </p>
            <address className="not-italic inline-block group">
              <div className="p-8 bg-card rounded-2xl border border-border shadow-2xl transition-all duration-300 group-hover:border-primary/30">
                <p className="text-foreground font-bebas tracking-widest text-lg mb-2">
                  HotFlix Inc.
                </p>
                <p className="text-muted text-[10px] leading-6 uppercase tracking-widest">
                  123 Movie Lane, Suite 100
                  <br />
                  Los Angeles, CA 90001
                  <br />
                  United States
                </p>
              </div>
            </address>
          </footer>
        </div>
      </section>
    </main>
  );
}
