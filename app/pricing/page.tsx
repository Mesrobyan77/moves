"use client";
import PricingSection from "@/src/components/ui/PricingPlans";
import React from "react";
import {
  FiMonitor,
  FiActivity,
  FiTv,
  FiAirplay,
  FiGlobe,
  FiLayers,
} from "react-icons/fi";
import { useTranslation } from "@/src/hooks/useTranslation";
import Link from "next/link";

export default function PricingPage() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <FiMonitor />,
      title: t("pricing_page.feature_1_title"),
      desc: t("pricing_page.feature_1_desc"),
    },
    {
      icon: <FiLayers />,
      title: t("pricing_page.feature_2_title"),
      desc: t("pricing_page.feature_2_desc"),
    },
    {
      icon: <FiTv />,
      title: t("pricing_page.feature_3_title"),
      desc: t("pricing_page.feature_3_desc"),
    },
    {
      icon: <FiActivity />,
      title: t("pricing_page.feature_4_title"),
      desc: t("pricing_page.feature_4_desc"),
    },
    {
      icon: <FiAirplay />,
      title: t("pricing_page.feature_5_title"),
      desc: t("pricing_page.feature_5_desc"),
    },
    {
      icon: <FiGlobe />,
      title: t("pricing_page.feature_6_title"),
      desc: t("pricing_page.feature_6_desc"),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <section className="container mx-auto px-4 pt-8">
        <div className="flex justify-between items-end   ">
          <h1 className="text-4xl font-bebas tracking-wider uppercase">
            {t("pricing_page.breadcrumb_title")}
          </h1>
          <nav className="text-[10px] uppercase tracking-[0.2em] text-muted mb-2 font-bold">
            <Link href="/" className="hover:text-primary transition-colors">
              {t("nav.home")}
            </Link>
            <span className="mx-2">→</span>
            <span className="text-primary">
              {t("pricing_page.breadcrumb_title")}
            </span>
          </nav>
        </div>
      </section>

      <section className="container mx-auto px-2 py-10">
        <PricingSection />
      </section>

      <section className="container mx-auto px-4 pb-20">
        <p className="text-muted text-sm max-w-4xl mb-16 leading-relaxed">
          {t("pricing_page.welcome_text")}
        </p>

        <div className="grid md:grid-cols-3 gap-y-16 gap-x-12">
          {features.map((f, index) => (
            <FeatureItem
              key={index}
              icon={React.cloneElement(f.icon as React.ReactElement)}
              title={f.title}
              desc={f.desc}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function FeatureItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-6 group">
      <div className="mt-1 transition-transform group-hover:scale-110 duration-300">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-bebas tracking-widest mb-3 uppercase">
          {title}
        </h4>
        <p className="text-muted text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
