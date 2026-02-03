import React from "react";
import Card from "@/src/components/ui/Card";
import { IMovie } from "../types";

interface MovieDiscoverySectionProps {
  upcomingMovies: IMovie[];
}

const MovieDiscoverySection = ({ upcomingMovies }: MovieDiscoverySectionProps) => {
  return (
    <section className="py-16 pb-32 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Tabs & Community Content */}
          <div className="flex-1">
            <h2 className="text-4xl font-bebas tracking-wider mb-8 text-foreground">
              Discover <span className="text-primary italic">Community</span>
            </h2>
            
            {/* Tabs - Themed with primary and border variables */}
            <div className="flex gap-8 border-b border-border mb-8 text-[11px] font-black uppercase tracking-[0.2em]">
              <button className="text-primary border-b-2 border-primary pb-4 -mb-[1px] transition-all">
                Comments
              </button>
              <button className="text-muted hover:text-foreground pb-4 transition-colors">
                Reviews
              </button>
              <button className="text-muted hover:text-foreground pb-4 transition-colors">
                Photos
              </button>
            </div>

            {/* Comments List - Themed with bg-card */}
            <div className="space-y-6">
              {[1, 2].map((_, i) => (
                <div key={i} className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border hover:border-primary/20 transition-all group">
                  <div className="flex items-center gap-4 mb-4">
                    {/* User Avatar Placeholder */}
                    <div className="w-12 h-12 bg-background rounded-xl border border-border group-hover:border-primary/30 transition-colors flex items-center justify-center">
                       <span className="text-primary font-bebas text-lg">U</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                        John Doe
                      </h4>
                      <span className="text-[10px] text-muted uppercase tracking-widest">
                        30.08.2026, 17:53
                      </span>
                    </div>
                  </div>
                  <p className="text-muted text-sm leading-relaxed group-hover:text-foreground/80 transition-colors">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Sidebar Recommendations */}
          <div className="w-full lg:w-[320px]">
            <h2 className="text-3xl font-bebas tracking-wider mb-8 text-foreground italic">
              You may <span className="text-primary">also like...</span>
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {upcomingMovies.slice(0, 4).map((m) => (
                <div key={m.id} className="transition-transform hover:-translate-y-1">
                  {/* showName=false keeps the sidebar clean and focused on posters */}
                  <Card movies={m} showName={false} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MovieDiscoverySection;