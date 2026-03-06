import React from "react";
import { VideoStream, Timer } from "./shared/ExamComponents";

export const TeorikDegerlendirici: React.FC = () => {
  const candidates = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: `Aday ${i + 1}`,
    status: 'online',
    time: 3600 - (i * 120)
  }));

  return (
    <div className="flex flex-col h-screen bg-slate-50 text-slate-900">
      <header className="h-14 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold">D</div>
          <h1 className="font-semibold text-lg">Teorik Sınav - Değerlendirici Paneli</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-slate-100 px-3 py-1 rounded text-xs font-bold text-slate-600">6 ADAY AKTİF</div>
          <VideoStream label="Kameram" className="w-32 h-10 min-h-0 rounded-md" />
        </div>
      </header>

      <main className="flex-1 p-6 overflow-y-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
          {candidates.map((c) => (
            <div key={c.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col shadow-sm">
              <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-bold text-sm">{c.name}</span>
                </div>
                <Timer duration={c.time} className="text-xs text-slate-500" />
              </div>
              
              <div className="p-3 grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <VideoStream label="Ekran Paylaşımı" icon="screen" isLarge className="h-48" />
                </div>
                <VideoStream label="PC Kamera" />
                <VideoStream label="Mobil Kamera" icon="mobile" />
              </div>

              <div className="px-4 py-3 border-t border-slate-100 flex gap-2">
                <button className="flex-1 py-1.5 text-xs font-bold border border-slate-200 rounded hover:bg-slate-50 transition-colors uppercase">Mesaj Gönder</button>
                <button className="flex-1 py-1.5 text-xs font-bold border border-red-200 text-red-600 rounded hover:bg-red-50 transition-colors uppercase">Uyarı Ver</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
