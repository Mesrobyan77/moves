"use client";
import { Check, CircleMinus, Crown, Sparkles, Zap } from "lucide-react";
import { useTranslation } from "@/src/hooks/useTranslation";

const PricingSection = () => {
  const { t } = useTranslation();

  const plans = [
    {
      name: t("pricing.basic"),
      price: t("pricing.free"),
      period: "",
      icon: <Zap className="w-5 h-5" />,
      color: "border-primary",
      priceColor: "text-primary",
      glow: "hover:shadow-primary/20",
      features: [
        { text: t("pricing.features.days"), included: true },
        { text: t("pricing.features.res_720"), included: true },
        { text: t("pricing.features.availability"), included: false },
        { text: t("pricing.features.desktop"), included: false },
        { text: t("pricing.features.support_lim"), included: false },
      ],
      buttonText: t("pricing.register"),
    },
    {
      name: t("pricing.premium"),
      price: "$34.99",
      period: t("pricing.month"),
      icon: <Sparkles className="w-5 h-5" />,
      color: "border-[#ff6b35]",
      priceColor: "text-[#ff6b35]",
      glow: "hover:shadow-[#ff6b35]/20",
      features: [
        { text: t("pricing.features.month_1"), included: true },
        { text: t("pricing.features.res_full"), included: true },
        { text: t("pricing.features.availability"), included: true },
        { text: t("pricing.features.tv_desktop"), included: false },
        { text: t("pricing.features.support_24"), included: false },
      ],
      buttonText: t("pricing.choose"),
    },
    {
      name: t("pricing.cinematic"),
      price: "$49.99",
      period: t("pricing.month"),
      icon: <Crown className="w-5 h-5" />,
      color: "border-[#ff375f]",
      priceColor: "text-[#ff375f]",
      glow: "hover:shadow-[#ff375f]/20",
      features: [
        { text: t("pricing.features.month_2"), included: true },
        { text: t("pricing.features.res_ultra"), included: true },
        { text: t("pricing.features.availability"), included: true },
        { text: t("pricing.features.any_device"), included: true },
        { text: t("pricing.features.support_24"), included: true },
      ],
      buttonText: t("pricing.choose"),
    },
  ];

  return (
    <section className="py-24 border-y border-border relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-16">
          <h2 className="text-foreground text-5xl font-bebas tracking-wider mb-4">
            {t("pricing.title")}{" "}
            <span className="text-primary">{t("pricing.title_accent")}</span>
          </h2>
          <p className="text-muted text-lg">{t("pricing.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`group relative bg-card/40 backdrop-blur-sm rounded-2xl p-8 border border-border border-t-4 ${plan.color} flex flex-col h-full transition-all duration-500 hover:-translate-y-2 shadow-2xl ${plan.glow}`}
            >
              <div className="flex justify-between items-center mb-6">
                <div className={`p-2 rounded-lg bg-white/5 ${plan.priceColor}`}>
                  {plan.icon}
                </div>
                <h3 className="text-foreground text-2xl font-bebas tracking-widest">
                  {plan.name}
                </h3>
              </div>
              <div className="mb-8 p-6 rounded-xl bg-white/5 border border-white/5 text-center">
                <div className="flex items-baseline justify-center gap-1">
                  <span
                    className={`text-4xl font-bold tracking-tighter ${plan.priceColor}`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted text-sm font-medium italic">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    {feature.included ? (
                      <div className="bg-green-500/10 p-1 rounded-full">
                        <Check className="w-3.5 h-3.5 text-green-500" />
                      </div>
                    ) : (
                      <div className="bg-white/5 p-1 rounded-full">
                        <CircleMinus className="w-3.5 h-3.5 text-muted opacity-40" />
                      </div>
                    )}
                    <span
                      className={`text-[14px] font-medium ${feature.included ? "text-foreground/90" : "text-muted line-through opacity-50"}`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 rounded-xl border-2 transition-all duration-300 uppercase font-black text-[12px] tracking-[0.2em] ${plan.color} ${plan.priceColor} bg-transparent hover:bg-white/5 active:scale-95`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
