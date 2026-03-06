import React, { useState } from "react";
import { VideoStream, Timer } from "./shared/ExamComponents";
import { FileText } from "lucide-react";

export const PerformansAday: React.FC = () => {
  const [activePdf, setActivePdf] = useState<string | null>("Senaryo 1: Ağ Yapılandırması");

  return (
    <div className="flex flex-col h-screen bg-slate-50 text-slate-900">
      <header className="h-14 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-white font-bold">P</div>
          <h1 className="font-semibold text-lg">Performans Sınavı - Aday Paneli</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase font-bold text-slate-500">Kalan Süre</span>
            <Timer duration={1800} className="text-orange-600" />
          </div>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden">
        <aside className="w-80 bg-white border-r border-slate-200 p-4 flex flex-col gap-4 overflow-y-auto">
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase mb-1.5 block">Değerlendirici</label>
              <VideoStream label="Değerlendirici" className="h-40" />
            </div>
            <div className="pt-4 border-t border-slate-100">
              <label className="text-xs font-bold text-slate-500 uppercase mb-1.5 block">Benim Kameralarım</label>
              <div className="grid grid-cols-2 gap-2">
                <VideoStream label="PC" className="h-24" />
                <VideoStream label="Mobil" icon="mobile" className="h-24" />
              </div>
            </div>
          </div>
        </aside>

        <section className="flex-1 flex flex-col p-6 bg-slate-100/50">
          {activePdf ? (
            <div className="flex-1 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
              <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between bg-white">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-indigo-500" />
                  <span className="font-bold text-sm">{activePdf}</span>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-12 bg-slate-200/50">
                <div className="max-w-3xl mx-auto bg-white min-h-full shadow-lg p-12 space-y-6">
                  <h1 className="text-2xl font-bold border-b-2 border-slate-100 pb-4">Senaryo Detayları</h1>
                  <p className="text-slate-600 leading-relaxed">Bu bölümde sizden istenen performans kriterlerini yerine getirmeniz beklenmektedir...</p>
                  <div className="h-40 bg-slate-50 rounded border-2 border-dashed border-slate-200" />
                  <div className="space-y-4">
                    <div className="h-4 w-full bg-slate-100 rounded" />
                    <div className="h-4 w-3/4 bg-slate-100 rounded" />
                    <div className="h-4 w-5/6 bg-slate-100 rounded" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center text-slate-400 font-medium">
              Henüz bir doküman paylaşılmadı.
            </div>
          )}
        </section>
      </main>
    </div>
  );
};
