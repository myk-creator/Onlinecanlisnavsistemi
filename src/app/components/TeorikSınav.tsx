import React, { useState } from "react";
import { VideoStream, Timer } from "./shared/ExamComponents";
import { Send, FileText, CheckCircle2, LayoutGrid, Clock, ListChecks } from "lucide-react";

interface Question {
  id: number;
  text: string;
  options: string[];
  answered: string | null;
}

interface Unit {
  id: number;
  name: string;
  duration: number;
  questions: Question[];
}

export const TeorikStudent: React.FC = () => {
  const [activeUnitId, setActiveUnitId] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [units, setUnits] = useState<Unit[]>([
    {
      id: 1,
      name: "Birim 1: Temel Bilgi Teknolojileri",
      duration: 1200,
      questions: [
        { id: 101, text: "Aşağıdakilerden hangisi bir ağ topolojisi değildir?", options: ["Yıldız", "Halka", "Üçgen", "Ağ"], answered: "C" },
        { id: 102, text: "Veri tabanı yönetim sistemlerinde 'Primary Key' nedir?", options: ["Yabancı Anahtar", "Birincil Anahtar", "İndeks", "Görünüm"], answered: null },
        { id: 103, text: "HTTP ve HTTPS arasındaki temel fark nedir?", options: ["Hız", "Güvenlik (SSL)", "Port Numarası", "Dosya Boyutu"], answered: null },
        { id: 104, text: "RAM bellek ile ilgili aşağıdakilerden hangisi doğrudur?", options: ["Kalıcıdır", "Geçicidir", "Sadece Okunur", "Dış Donanımdır"], answered: null },
        { id: 105, text: "CPU'nun açılımı nedir?", options: ["Central Processing Unit", "Control Process Unit", "Core Power Unit", "Computer Parts Union"], answered: null },
      ]
    },
    {
      id: 2,
      name: "Birim 2: Siber Güvenlik Esasları",
      duration: 900,
      questions: [
        { id: 201, text: "Phishing saldırısı nedir?", options: ["Şifre kırma", "Oltalama", "Ağ dinleme", "Virüs bulaştırma"], answered: null },
        { id: 202, text: "Güçlü bir şifre aşağıdakilerden hangisini içermelidir?", options: ["Sadece sayı", "Sadece harf", "Harf, sayı ve özel karakter", "Sadece özel karakter"], answered: null },
      ]
    },
    {
      id: 3,
      name: "Birim 3: Yazılım Geliştirme Süreçleri",
      duration: 1500,
      questions: [
        { id: 301, text: "Agile metodolojisinin temel prensibi nedir?", options: ["Esneklik", "Katılık", "Yavaşlık", "Sadece dökümantasyon"], answered: null },
        { id: 302, text: "Hangi dil bir programlama dili değildir?", options: ["Java", "Python", "HTML", "C++"], answered: null },
        { id: 303, text: "Git nedir?", options: ["Versiyon kontrol sistemi", "İşletim sistemi", "Veritabanı", "Sunucu"], answered: null },
      ]
    }
  ]);

  const activeUnit = units.find(u => u.id === activeUnitId)!;
  const currentQuestion = activeUnit.questions[currentQuestionIndex];

  const handleAnswer = (option: string) => {
    setUnits(prev => prev.map(u => u.id === activeUnitId ? {
      ...u,
      questions: u.questions.map((q, idx) => idx === currentQuestionIndex ? { ...q, answered: option } : q)
    } : u));
  };

  const handleClearAnswer = () => {
    setUnits(prev => prev.map(u => u.id === activeUnitId ? {
      ...u,
      questions: u.questions.map((q, idx) => idx === currentQuestionIndex ? { ...q, answered: null } : q)
    } : u));
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="h-14 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">T</div>
          <h1 className="font-semibold text-lg">Teorik Sınav - Aday Paneli</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-4 py-1.5 bg-slate-100 rounded-md flex items-center gap-2 border border-slate-200">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">GENEL DURUM:</span>
            <span className="text-xs font-bold text-slate-700">
              {units.reduce((acc, u) => acc + u.questions.filter(q => q.answered).length, 0)} / {units.reduce((acc, u) => acc + u.questions.length, 0)} Çözüldü
            </span>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm">
            Sınavı Tamamla
          </button>
        </div>
      </header>

      {/* Top Navigation: Units and Question Status */}
      <div className="bg-white border-b border-slate-200 shadow-sm z-10">
        <div className="max-w-7xl mx-auto flex flex-col">
          {/* Unit Tabs */}
          <div className="flex border-b border-slate-100">
            {units.map((unit) => (
              <button
                key={unit.id}
                onClick={() => {
                  setActiveUnitId(unit.id);
                  setCurrentQuestionIndex(0);
                }}
                className={`px-6 py-3 text-xs font-bold uppercase tracking-wider flex items-center gap-3 transition-all relative ${activeUnitId === unit.id ? 'text-indigo-600 bg-white' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${activeUnitId === unit.id ? 'bg-indigo-600' : 'bg-slate-200'}`} />
                {unit.name}
                <div className="flex items-center gap-1.5 bg-slate-100 px-2 py-0.5 rounded text-[10px] ml-2">
                  <Clock className="w-3 h-3" />
                  <Timer duration={unit.duration} className="min-w-[45px]" />
                </div>
                {activeUnitId === unit.id && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600" />}
              </button>
            ))}
          </div>

          {/* Question Numbers Grid */}
          <div className="p-3 px-6 flex items-center gap-4 overflow-x-auto bg-slate-50/50">
            <div className="flex items-center gap-2 pr-4 border-r border-slate-200">
              <LayoutGrid className="w-4 h-4 text-slate-400" />
              <span className="text-[10px] font-black text-slate-500 uppercase">SORULAR:</span>
            </div>
            <div className="flex gap-2">
              {activeUnit.questions.map((q, idx) => (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestionIndex(idx)}
                  className={`w-9 h-9 rounded-lg border text-sm font-bold flex items-center justify-center transition-all ${
                    idx === currentQuestionIndex 
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-md ring-2 ring-indigo-100' 
                      : q.answered 
                        ? 'bg-emerald-50 text-emerald-600 border-emerald-200' 
                        : 'bg-white text-slate-400 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-4 ml-auto pl-4 border-l border-slate-200">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-bold text-slate-500 uppercase">DOLU</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-white border border-slate-200" />
                <span className="text-[10px] font-bold text-slate-500 uppercase">BOŞ</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 flex overflow-hidden">
        {/* Left Side: Videos */}
        <aside className="w-80 bg-white border-r border-slate-200 p-4 flex flex-col gap-4 overflow-y-auto">
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase mb-1.5 block">Kameram (PC)</label>
              <VideoStream label="Kameram" />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase mb-1.5 block">Kameram (Mobil)</label>
              <VideoStream label="Mobil" icon="mobile" />
            </div>
            <div className="pt-4 border-t border-slate-100">
              <label className="text-xs font-bold text-slate-500 uppercase mb-1.5 block tracking-widest">DEĞERLENDİRİCİ</label>
              <VideoStream label="Gözetmen" />
            </div>
          </div>
        </aside>

        {/* Center: Current Question */}
        <section className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 space-y-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black text-lg">
                    {currentQuestionIndex + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 leading-none">Soru Detayı</h3>
                    <span className="text-xs text-slate-500 font-medium">{activeUnit.name}</span>
                  </div>
                </div>
                {currentQuestion.answered && (
                  <button 
                    onClick={handleClearAnswer}
                    className="text-[10px] font-black text-red-500 uppercase hover:text-red-600 transition-colors"
                  >
                    Seçimi Temizle
                  </button>
                )}
              </div>

              <div className="space-y-8">
                <h2 className="text-xl font-medium leading-relaxed text-slate-800">
                  {currentQuestion.text}
                </h2>

                <div className="grid grid-cols-1 gap-4">
                  {currentQuestion.options.map((option, idx) => {
                    const letter = String.fromCharCode(65 + idx);
                    const isSelected = currentQuestion.answered === letter;

                    return (
                      <button 
                        key={letter}
                        onClick={() => handleAnswer(letter)}
                        className={`w-full text-left p-5 rounded-xl border transition-all flex items-center gap-5 group relative ${
                          isSelected 
                            ? 'bg-indigo-50 border-indigo-600 shadow-sm' 
                            : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                        }`}
                      >
                        <span className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm transition-colors ${
                          isSelected 
                            ? 'bg-indigo-600 text-white' 
                            : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                        }`}>
                          {letter}
                        </span>
                        <span className={`font-medium ${isSelected ? 'text-indigo-900' : 'text-slate-700'}`}>
                          {option}
                        </span>
                        {isSelected && (
                          <div className="ml-auto">
                            <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                <button 
                  onClick={() => setCurrentQuestionIndex(idx => Math.max(0, idx - 1))}
                  disabled={currentQuestionIndex === 0}
                  className="px-8 py-2.5 rounded-xl text-sm font-bold border border-slate-200 disabled:opacity-30 hover:bg-slate-50 transition-all flex items-center gap-2"
                >
                  ← Önceki Soru
                </button>
                <button 
                  onClick={() => {
                    if (currentQuestionIndex < activeUnit.questions.length - 1) {
                      setCurrentQuestionIndex(idx => idx + 1);
                    } else {
                      // Maybe move to next unit or finish
                    }
                  }}
                  className="bg-indigo-600 text-white px-10 py-2.5 rounded-xl text-sm font-bold hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100 flex items-center gap-2"
                >
                  {currentQuestionIndex === activeUnit.questions.length - 1 ? 'Üniteyi Bitir' : 'Sonraki Soru →'}
                </button>
              </div>
            </div>
            
            <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Sistem güvenliği için tüm hareketleriniz kaydedilmektedir.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export const TeorikEvaluator: React.FC = () => {
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
