'use client'
import { Check, CircleMinus } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "Free",
    period: "",
    color: "border-[#f9ab00]",
    priceColor: "text-[#f9ab00]",
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
    color: "border-[#ff6b35]",
    priceColor: "text-[#ff6b35]",
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
    color: "border-[#ff375f]",
    priceColor: "text-[#ff375f]",
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
    <section className="py-20 bg-background border-t border-b">
      <div className="container">
        <h2 className="text-white text-4xl mb-12 font-bebas tracking-wide">
          Select your plan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-[#151419] rounded-lg p-8 border-t-2 ${plan.color} flex flex-col h-full shadow-xl`}
            >
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-white text-2xl font-normal">{plan.name}</h3>
                <div className="text-right">
                  <span className={`text-3xl font-bold ${plan.priceColor}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-zinc-500 text-sm ml-1">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-500/80" />
                    ) : (
                      <CircleMinus className="w-5 h-5 text-zinc-600" />
                    )}
                    <span
                      className={`text-[15px] ${
                        feature.included ? "text-zinc-200" : "text-zinc-500"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3.5 rounded-lg border-2 transition-all duration-300 uppercase font-bold text-[13px] tracking-widest ${plan.color} ${plan.priceColor} bg-transparent hover:bg-white/5 active:scale-95`}
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