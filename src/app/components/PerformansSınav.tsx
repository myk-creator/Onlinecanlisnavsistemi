import React, { useState } from "react";
import { VideoStream, Timer } from "./shared/ExamComponents";
import { FileText, Play, Square, Pause, Share2, Upload, CheckCircle2, X, Monitor, Globe, Calculator, Users, Settings, ClipboardList } from "lucide-react";

export const PerformansStudent: React.FC = () => {
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
        {/* Left Side: Evaluator & Cams */}
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

        {/* Center: PDF Content */}
        <section className="flex-1 flex flex-col p-6 bg-slate-100/50">
          {activePdf ? (
            <div className="flex-1 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
              <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between bg-white">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-indigo-500" />
                  <span className="font-bold text-sm">{activePdf}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-xs font-bold text-slate-500 uppercase px-2 py-1 rounded hover:bg-slate-100">Sayfa 1 / 4</button>
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

export const PerformansEvaluator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"adaylar" | "araçlar" | "senaryo">("senaryo");
  const [activeCandidate, setActiveCandidate] = useState({ id: 4501, name: "Ahmet Yılmaz" });
  
  const [candidates] = useState([
    { id: 4501, name: "Ahmet Yılmaz", status: "examining" },
    { id: 4502, name: "Mehmet Demir", status: "waiting" },
    { id: 4503, name: "Ayşe Kaya", status: "waiting" },
    { id: 4504, name: "Can Yıldız", status: "completed" }
  ]);

  const [pdfs, setPdfs] = useState([
    { id: 1, name: "Senaryo 1: Ağ Yapılandırması", status: "shared" },
    { id: 2, name: "Senaryo 2: Veri Kurtarma", status: "private" },
    { id: 3, name: "Teknik Şema", status: "private" },
    { id: 4, name: "Güvenlik Protokolü", status: "private" }
  ]);

  const togglePdf = (id: number) => {
    setPdfs(pdfs.map(p => p.id === id ? { ...p, status: p.status === "shared" ? "private" : "shared" } : p));
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50 text-slate-900">
      <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center text-white font-bold text-xl">D</div>
          <div>
            <h1 className="font-bold text-lg leading-none">Performans Sınavı Değerlendirici</h1>
            <span className="text-xs text-slate-500 font-medium">Aktif Aday: {activeCandidate.name} (ID: {activeCandidate.id})</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center bg-slate-100 rounded-md p-1 gap-1">
            <button className="flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-600 text-white text-xs font-bold uppercase transition-all shadow-sm">
              <Play className="w-3.5 h-3.5 fill-current" />
              Sınavı Başlat
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 rounded bg-white text-indigo-600 border border-indigo-100 text-xs font-bold uppercase transition-all shadow-sm">
              <ClipboardList className="w-3.5 h-3.5" />
              Değerlendirme Formu
            </button>
            <div className="w-[1px] h-4 bg-slate-300 mx-1" />
            <button className="flex items-center gap-2 px-3 py-1.5 rounded text-slate-600 hover:bg-white text-xs font-bold uppercase transition-all">
              <Square className="w-3.5 h-3.5 fill-current" />
              Sınav Kaydı
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 rounded text-slate-600 hover:bg-white text-xs font-bold uppercase transition-all border border-transparent hover:border-slate-200">
              <Share2 className="w-3.5 h-3.5" />
              Ekran Kaydı
            </button>
          </div>
          <div className="h-10 w-[1px] bg-slate-200 mx-2" />
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase font-bold text-slate-500">Sınav Süresi</span>
            <Timer duration={3600} className="text-lg text-slate-800" />
          </div>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden">
        {/* Left Side: Candidate Streams */}
        <aside className="w-72 bg-white border-r border-slate-200 p-4 flex flex-col gap-4 overflow-y-auto">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-slate-100 pb-2">ADAY KAMERALARI</label>
          <VideoStream label="PC Kamera" className="h-32" />
          <VideoStream label="Mobil Kamera" icon="mobile" className="h-32" />
          
          <div className="mt-auto pt-4 border-t border-slate-100">
            <VideoStream label="Kameram (Değerlendirici)" className="h-28 opacity-80" />
          </div>
        </aside>

        {/* Center: Main Screen Share */}
        <section className="flex-1 bg-slate-900 flex flex-col overflow-hidden relative">
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <div className="bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center gap-2">
              <Monitor className="w-4 h-4 text-emerald-400" />
              <span className="text-white text-xs font-bold uppercase tracking-wider">ADAY EKRAN PAYLAŞIMI</span>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full h-full max-w-6xl p-4">
              <div className="w-full h-full bg-slate-800 rounded-lg border border-slate-700 flex flex-col shadow-2xl overflow-hidden">
                 <div className="h-8 bg-slate-700 flex items-center px-3 gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                    </div>
                 </div>
                 <div className="flex-1 flex flex-col items-center justify-center text-slate-600 gap-4">
                    <Monitor className="w-24 h-24" />
                    <p className="text-sm font-medium">Uzaktan Bağlantı Aktif</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Side: Tabs & Controls */}
        <aside className="w-80 bg-white border-l border-slate-200 flex flex-col">
          {/* Tab Navigation */}
          <div className="flex border-b border-slate-200 bg-slate-50">
            <button 
              onClick={() => setActiveTab("adaylar")}
              className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-tight flex flex-col items-center gap-1 transition-all ${activeTab === "adaylar" ? 'bg-white text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <Users className="w-4 h-4" />
              Adaylar
            </button>
            <button 
              onClick={() => setActiveTab("senaryo")}
              className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-tight flex flex-col items-center gap-1 transition-all ${activeTab === "senaryo" ? 'bg-white text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <FileText className="w-4 h-4" />
              Senaryo
            </button>
            <button 
              onClick={() => setActiveTab("araçlar")}
              className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-tight flex flex-col items-center gap-1 transition-all ${activeTab === "araçlar" ? 'bg-white text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <Settings className="w-4 h-4" />
              Araçlar
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            {activeTab === "adaylar" && (
              <div className="space-y-2">
                {candidates.map(c => (
                  <div key={c.id} className={`p-3 rounded-lg border transition-all ${activeCandidate.id === c.id ? 'border-indigo-200 bg-indigo-50' : 'border-slate-100 hover:border-slate-200'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-700">{c.name}</span>
                      <span className={`text-[8px] font-black px-1.5 py-0.5 rounded uppercase ${c.status === 'examining' ? 'bg-indigo-100 text-indigo-600' : c.status === 'waiting' ? 'bg-slate-100 text-slate-500' : 'bg-emerald-100 text-emerald-600'}`}>
                        {c.status === 'examining' ? 'SINAVDA' : c.status === 'waiting' ? 'BEKLEMEDE' : 'TAMAMLANDI'}
                      </span>
                    </div>
                    {c.id !== activeCandidate.id && c.status !== 'completed' && (
                      <button 
                        onClick={() => setActiveCandidate(c)}
                        className="w-full py-1.5 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-600 hover:bg-slate-50 uppercase"
                      >
                        Sınava Al
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === "senaryo" && (
              <div className="space-y-3">
                {pdfs.map(pdf => (
                  <div key={pdf.id} className={`p-3 rounded-lg border transition-all ${pdf.status === 'shared' ? 'border-emerald-200 bg-emerald-50' : 'border-slate-100'}`}>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        <FileText className={`w-4 h-4 ${pdf.status === 'shared' ? 'text-emerald-600' : 'text-slate-400'}`} />
                        <span className={`text-xs font-bold leading-tight ${pdf.status === 'shared' ? 'text-emerald-900' : 'text-slate-700'}`}>{pdf.name}</span>
                      </div>
                      <div className={`px-1.5 py-0.5 rounded text-[8px] font-black uppercase ${pdf.status === 'shared' ? 'bg-emerald-200 text-emerald-700' : 'bg-slate-200 text-slate-500'}`}>
                        {pdf.status === 'shared' ? 'PAYLAŞILDI' : 'GİZLİ'}
                      </div>
                    </div>
                    <button 
                      onClick={() => togglePdf(pdf.id)}
                      className={`w-full py-1.5 rounded text-[10px] font-black uppercase transition-all ${pdf.status === 'shared' ? 'bg-white text-red-600 border border-red-100 hover:bg-red-50' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
                    >
                      {pdf.status === 'shared' ? 'PAYLAŞIMI KES' : 'ADAYA GÖNDER'}
                    </button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "araçlar" && (
              <div className="grid grid-cols-1 gap-3">
                <div className="p-4 rounded-xl border border-slate-200 hover:border-indigo-300 transition-colors group cursor-pointer bg-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Globe className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm text-slate-700 uppercase tracking-tight">Web Browser</span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium">Adayın ekranında güvenli bir tarayıcı penceresi açar.</p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 hover:border-indigo-300 transition-colors group cursor-pointer bg-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                      <Calculator className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm text-slate-700 uppercase tracking-tight">Hesap Makinesi</span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium">Temel ve bilimsel hesaplamalar için araç paneli açar.</p>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-100 bg-slate-50/50">
             <button className="w-full bg-slate-900 text-white py-2.5 rounded-lg text-xs font-bold uppercase tracking-wide hover:bg-slate-800 transition-colors shadow-lg">
                Sınavı Tamamla
             </button>
          </div>
        </aside>
      </main>
    </div>
  );
};
