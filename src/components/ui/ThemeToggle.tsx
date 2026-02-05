"use client";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isMounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  if (!isMounted) return <div className="p-2 w-9 h-9" />;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-xl bg-white/5 border border-white/5 dark:border-white/10 hover:border-primary/50 transition-all text-gray-500 dark:text-gray-400 cursor-pointer"
    >
      {isDark ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} className="text-gray-700" />
      )}
    </button>
  );
}
