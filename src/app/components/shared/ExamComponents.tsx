import React from "react";
import { Monitor, User, Smartphone, Play, Square, Pause } from "lucide-react";

interface VideoStreamProps {
  label: string;
  icon?: "user" | "mobile" | "screen";
  className?: string;
  isLarge?: boolean;
}

export const VideoStream: React.FC<VideoStreamProps> = ({ label, icon = "user", className = "", isLarge = false }) => {
  const IconComponent = icon === "user" ? User : icon === "mobile" ? Smartphone : Monitor;

  return (
    <div className={`relative bg-slate-200 border border-slate-300 rounded overflow-hidden flex items-center justify-center min-h-[120px] ${className}`}>
      <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
        <IconComponent className="w-3.5 h-3.5 text-white" />
        <span className="text-[10px] font-medium text-white uppercase tracking-wider">{label}</span>
      </div>
      
      {/* Mocking static/interference for realism or just a clean icon */}
      <div className="flex flex-col items-center gap-2 opacity-20">
        <IconComponent className={`${isLarge ? 'w-16 h-16' : 'w-8 h-8'} text-slate-900`} />
      </div>

      <div className="absolute bottom-2 right-2 flex gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[8px] text-slate-500 font-bold uppercase">LIVE</span>
      </div>
    </div>
  );
};

export const Timer: React.FC<{ duration?: number; className?: string }> = ({ duration = 3600, className = "" }) => {
  const [seconds, setSeconds] = React.useState(duration);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`font-mono font-semibold tabular-nums ${className}`}>
      {formatTime(seconds)}
    </div>
  );
};
