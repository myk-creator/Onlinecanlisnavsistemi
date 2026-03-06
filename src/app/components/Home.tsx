import React from "react";
import { Link } from "react-router";
import { GraduationCap, Briefcase, User, ShieldCheck } from "lucide-react";

export const Home: React.FC = () => {
  const modes = [
    {
      title: "Teorik Sınav",
      icon: GraduationCap,
      color: "bg-indigo-600",
      roles: [
        { name: "Aday Paneli", path: "/teorik-aday", icon: User },
        { name: "Değerlendirici Paneli", path: "/teorik-degerlendirici", icon: ShieldCheck },
      ]
    },
    {
      title: "Performans Sınavı",
      icon: Briefcase,
      color: "bg-orange-600",
      roles: [
        { name: "Aday Paneli", path: "/performans-aday", icon: User },
        { name: "Değerlendirici Paneli", path: "/performans-degerlendirici", icon: ShieldCheck },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Sistem Hazır</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Online Canlı Sınav Sistemi</h1>
          <p className="text-slate-500 font-medium max-w-lg mx-auto">Hafif, hızlı ve güvenli sınav yönetimi için modül seçimi yapınız.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modes.map((mode) => (
            <div key={mode.title} className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
              <div className={`${mode.color} p-8 flex items-center justify-between`}>
                <h2 className="text-2xl font-bold text-white uppercase tracking-wide">{mode.title}</h2>
                <mode.icon className="w-12 h-12 text-white/40" />
              </div>
              <div className="p-4 grid grid-cols-1 gap-3">
                {mode.roles.map((role) => (
                  <Link 
                    key={role.path} 
                    to={role.path}
                    className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-slate-900 transition-colors">
                        <role.icon className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-slate-700 group-hover:text-slate-900 uppercase text-sm tracking-wide">{role.name}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-white border border-transparent group-hover:border-slate-200 transition-all">
                      <svg className="w-4 h-4 text-slate-400 group-hover:text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <footer className="text-center">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">© 2026 SINAV SİSTEMİ | TÜM HAKLARI SAKLIDIR</p>
        </footer>
      </div>
    </div>
  );
};
