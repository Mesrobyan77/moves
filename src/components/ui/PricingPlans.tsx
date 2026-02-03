'use client'
import { Check, CircleMinus, Crown, Sparkles, Zap } from "lucide-react";

export const plans = [
  {
    name: "Basic",
    price: "Free",
    period: "",
    icon: <Zap className="w-5 h-5" />,
    color: "border-primary",
    priceColor: "text-primary",
    glow: "hover:shadow-primary/20",
    features: [
      { text: "7 days", included: true },
      { text: "720p Resolution", included: true },
      { text: "Limited Availability", included: false },
      { text: "Desktop Only", included: false },
      { text: "Limited Support", included: false },
    ],
    buttonText: "Register",
  },
  {
    name: "Premium",
    price: "$34.99",
    period: "/ month",
    icon: <Sparkles className="w-5 h-5" />,
    color: "border-[#ff6b35]",
    priceColor: "text-[#ff6b35]",
    glow: "hover:shadow-[#ff6b35]/20",
    features: [
      { text: "1 Month", included: true },
      { text: "Full HD", included: true },
      { text: "Limited Availability", included: true },
      { text: "TV & Desktop", included: false },
      { text: "24/7 Support", included: false },
    ],
    buttonText: "Choose Plan",
  },
  {
    name: "Cinematic",
    price: "$49.99",
    period: "/ month",
    icon: <Crown className="w-5 h-5" />,
    color: "border-[#ff375f]",
    priceColor: "text-[#ff375f]",
    glow: "hover:shadow-[#ff375f]/20",
    features: [
      { text: "2 Months", included: true },
      { text: "Ultra HD", included: true },
      { text: "Limited Availability", included: true },
      { text: "Any Device", included: true },
      { text: "24/7 Support", included: true },
    ],
    buttonText: "Choose Plan",
  },
];

const PricingSection = () => {
  return (
    <section className="py-24 border-y border-border relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff375f]/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-16">
          <h2 className="text-foreground text-5xl font-bebas tracking-wider mb-4">
            Choose Your <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted text-lg">
            Flexible plans designed for every movie lover. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`group relative bg-card/40 backdrop-blur-sm rounded-2xl p-8 border border-border border-t-4 ${plan.color} flex flex-col h-full transition-all duration-500 hover:-translate-y-2 shadow-2xl ${plan.glow}`}
            >
              {/* Card Header */}
              <div className="flex justify-between items-center mb-6">
                <div className={`p-2 rounded-lg bg-white/5 ${plan.priceColor}`}>
                  {plan.icon}
                </div>
                <h3 className="text-foreground text-2xl font-bebas tracking-widest">
                  {plan.name}
                </h3>
              </div>

              {/* Price Section */}
              <div className="mb-8 p-6 rounded-xl bg-white/5 border border-white/5 text-center">
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-4xl font-bold tracking-tighter ${plan.priceColor}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted text-sm font-medium italic">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 group/item">
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
                      className={`text-[14px] font-medium transition-colors ${
                        feature.included ? "text-foreground/90" : "text-muted line-through opacity-50"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-xl border-2 transition-all duration-300 uppercase font-black text-[12px] tracking-[0.2em] relative overflow-hidden group-hover:scale-[1.02] active:scale-95
                  ${plan.color} ${plan.priceColor} bg-transparent hover:bg-white/5`}
              >
                <span className="relative z-10">{plan.buttonText}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;