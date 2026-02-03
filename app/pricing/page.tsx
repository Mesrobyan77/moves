import PricingSection from "@/src/components/ui/PricingPlans";
import React from "react";
import {
  FiCheckCircle,
  FiMinusCircle,
  FiMonitor,
  FiActivity,
  FiTv,
  FiAirplay,
  FiGlobe,
  FiLayers,
} from "react-icons/fi";

export default function PricingPage() {
  return (
    // Used text-foreground to match your theme's main text color
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Header Section */}
      <section className="container mx-auto px-2 pt-8">
        <div className="flex justify-between items-end">
          <h1 className="text-4xl font-light tracking-tight">Pricing plan</h1>
          {/* Replaced text-gray-500 with text-muted */}
          <nav className="text-[10px] uppercase tracking-[0.2em] text-muted mb-2">
            <span className="hover:text-foreground cursor-pointer transition-colors">Home</span>
            <span className="mx-2">→</span>
            {/* Replaced text-[#f9ab00] with text-primary */}
            <span className="text-primary">Pricing plan</span>
          </nav>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="container mx-auto px-2 py-10">
          <PricingSection />
      </section>

      {/* Features Grid (Bottom Section) */}
      <section className="container mx-auto  pb-20 ">
        <p className="text-text-light text-sm max-w-4xl mb-16 leading-relaxed">
          Welcome to HotFlix movie site, the ultimate destination for all film
          enthusiasts. Immerse yourself in a world of captivating stories,
          stunning visuals, and unforgettable performances. Explore our
          extensive library of movies, spanning across genres, eras, and
          cultures.
        </p>

        <div className="grid md:grid-cols-3 gap-y-16 gap-x-12">
          <FeatureItem
            // Icons now use the primary theme color
            icon={<FiMonitor className="text-primary text-3xl" />}
            title="Ultra HD"
            desc="Experience movies like never before with our Ultra HD feature. Immerse yourself in stunning visuals, vibrant colors, and crystal-clear detail."
          />
          <FeatureItem
            icon={<FiLayers className="text-primary text-3xl" />}
            title="Large movie database"
            desc="Discover a vast and diverse collection of movies in our extensive database. With thousands of titles to choose from, you'll never run out of options."
          />
          <FeatureItem
            icon={<FiTv className="text-primary text-3xl" />}
            title="Online TV"
            desc="Expand your entertainment horizons with our Online TV. Stream live TV channels, catch up on your favorite shows, and enjoy a wide range of content."
          />
          <FeatureItem
            icon={<FiActivity className="text-primary text-3xl" />}
            title="Early access to new items"
            desc="Be the first to experience the latest movies and exclusive content with our Early Access feature. Get a sneak peek into upcoming releases."
          />
          <FeatureItem
            icon={<FiAirplay className="text-primary text-3xl" />}
            title="Airplay"
            desc="Seamlessly stream movies from your device to the big screen with Airplay integration. Experience the cinematic magic in the comfort of your living room."
          />
          <FeatureItem
            icon={<FiGlobe className="text-primary text-3xl" />}
            title="Multi language subtitles"
            desc="Break language barriers and enjoy movies from around the world with our multi-language subtitles. Explore different cultures and global cinema."
          />
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
    <div className="flex gap-6">
      <div className="mt-1">{icon}</div>
      <div>
        <h4 className="text-lg font-bold mb-3">{title}</h4>
        {/* Replaced text-gray-500 with text-text-light */}
        <p className="text-text-light text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}