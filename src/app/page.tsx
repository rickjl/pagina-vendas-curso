"use client";

import {
  Check, Shield, Users, Star, ArrowRight, Lock,
  MessageCircle, Zap, Rocket, X, Sparkles,
  DollarSign, AlertCircle, Gift, Send, Brain, BookOpen,
  Video, FileText, CheckCircle, Play, Wifi, Battery,
  TrendingUp, ChevronRight, ThumbsDown, ThumbsUp, ChevronDown,
  Clock, Target
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

/* ─── Paleta central ─── */
const G = {
  primary: "#00C853",
  primaryLight: "#69F0AE",
  bg: "#060d06",
  bgDark: "#040a04",
  bgCard: "#0a1a0a",
  bgCardBorder: "#0f2a0f",
  red: "#ff4444",
  amber: "#FFB300",
  text: "#dddddd",
  muted: "#555555",
  mutedLight: "#888888",
};

const CTAButton = ({
  onClick,
  children,
  size = "lg",
  full = false,
  className = "",
}: {
  onClick: () => void;
  children: React.ReactNode;
  size?: "lg" | "md" | "sm";
  full?: boolean;
  className?: string;
}) => {
  const py = size === "lg" ? "py-5 sm:py-6" : size === "md" ? "py-4" : "py-3";
  const px = size === "lg" ? "px-10 sm:px-14" : size === "md" ? "px-8" : "px-6";
  const text = size === "lg" ? "text-lg sm:text-xl" : size === "md" ? "text-base sm:text-lg" : "text-sm sm:text-base";
  return (
    <button
      onClick={onClick}
      className={`${full ? "w-full" : "w-full sm:w-auto"} flex items-center justify-center gap-3 font-black ${py} ${px} ${text} rounded-2xl transition-all duration-300 hover:scale-[1.03] relative overflow-hidden group ${className}`}
      style={{
        background: `linear-gradient(135deg, ${G.primary}, #00E676)`,
        color: "#000",
        boxShadow: `0 0 40px rgba(0,200,83,0.45), 0 4px 24px rgba(0,0,0,0.5)`,
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(135deg, #00E676, ${G.primaryLight})` }}
      />
      <span className="relative z-10 flex items-center gap-3">{children}</span>
    </button>
  );
};

const pad = (n: number) => String(n).padStart(2, "0");

export default function Home() {
  const [chatType, setChatType] = useState<"whatsapp" | "telegram" | null>(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 0, seconds: 0 });
  const [chatMessages, setChatMessages] = useState<Array<{ type: "bot" | "user"; text: string }>>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [onlineCount, setOnlineCount] = useState(247);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simula variação de pessoas online para criar senso de presença
    const base = 230 + Math.floor(Math.random() * 40);
    setOnlineCount(base);
    const t = setInterval(() => {
      setOnlineCount((p) => {
        const delta = Math.floor(Math.random() * 7) - 3;
        return Math.max(190, Math.min(320, p + delta));
      });
    }, 8000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const STORAGE_KEY = "offer_deadline_v2";
    const stored = localStorage.getItem(STORAGE_KEY);
    let deadline: number;
    if (stored) {
      deadline = parseInt(stored, 10);
    } else {
      deadline = Date.now() + 2 * 60 * 60 * 1000;
      localStorage.setItem(STORAGE_KEY, String(deadline));
    }
    const tick = () => {
      const diff = Math.max(0, deadline - Date.now());
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTimeLeft({ hours: h, minutes: m, seconds: s });
    };
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const CHECKOUT_URL = "https://pay.kiwify.com.br/2VJCa4D";
  const handleCheckout = () => window.open(CHECKOUT_URL, "_blank");

  const openChat = (type: "whatsapp" | "telegram") => {
    setChatType(type);
    setChatMessages(
      type === "whatsapp"
        ? [
            { type: "bot", text: "👋 Olá! Sou assistente do suporte!" },
            { type: "bot", text: "📱 WhatsApp: +55 (19) 98116-8970" },
            { type: "bot", text: "Escolha uma pergunta abaixo:" },
          ]
        : [
            { type: "bot", text: "👋 Olá! Bem-vindo ao suporte Telegram!" },
            { type: "bot", text: "🔒 O grupo VIP é exclusivo para alunos." },
            { type: "bot", text: "Posso tirar suas dúvidas aqui mesmo:" },
          ]
    );
  };

  const faqDatabase = [
    { q: "💳 Como funciona o pagamento?", a: "Cartão em até 12x de R$ 4,70, PIX com desconto extra ou boleto. Acesso imediato após confirmação. 100% seguro via Kiwify." },
    { q: "⏰ Por quanto tempo tenho acesso?", a: "Acesso VITALÍCIO! Paga uma vez e acessa para sempre. Todas as atualizações futuras também são gratuitas." },
    { q: "🛡️ Como funciona a garantia?", a: "Garantia INCONDICIONAL de 7 dias. Acesse tudo — se não gostar, 100% do dinheiro de volta. Sem perguntas, sem burocracia." },
    { q: "👤 Preciso aparecer ou mostrar rosto?", a: "NÃO! Método 100% anônimo. Sem gravar vídeos, sem redes sociais, sem mostrar rosto. Funciona nos bastidores." },
    { q: "🎓 Sou iniciante, funciona para mim?", a: "SIM! Criado especialmente para iniciantes. Explicado do zero, passo a passo. Os alunos que mais faturam são os que começaram do absoluto zero." },
    { q: "💰 Quanto posso ganhar realmente?", a: "Alunos ganham de R$ 1.000 a R$ 5.000/mês. Depende da dedicação, mas seguindo o método você tem tudo para alcançar resultados reais." },
    { q: "⏱️ Quanto tempo por dia preciso dedicar?", a: "Apenas 2 a 3 horas por dia. Muitos fazem nas horas vagas, após o trabalho ou nos finais de semana. Total flexibilidade." },
    { q: "📱 Terei suporte se tiver dúvidas?", a: "SIM! Grupo VIP no Telegram + suporte via WhatsApp. Equipe pronta para te ajudar. Ninguém fica sem resposta." },
    { q: "🚀 Quando posso começar?", a: "AGORA MESMO! Após confirmar o pagamento (instantâneo no cartão/PIX), acesso por email em até 2 minutos." },
  ];

  const handleFaqQ = (q: string, a: string) => {
    setChatMessages((p) => [...p, { type: "user", text: q }, { type: "bot", text: a }, { type: "bot", text: "Mais alguma dúvida? Clique no botão abaixo para garantir sua vaga!" }]);
  };

  /* ──────────────────────────────────── */
  return (
    <div className="min-h-screen" style={{ background: G.bg, color: G.text }}>

      {/* ═══ STICKY CTA MOBILE ═══ */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 flex items-center gap-3 p-3 md:hidden"
        style={{
          background: "rgba(4,10,4,0.97)",
          borderTop: `2px solid ${G.primary}`,
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex-1 min-w-0">
          <p className="font-black text-white text-xs leading-tight">R$ 297 → apenas R$ 47</p>
          <p className="text-[10px]" style={{ color: G.muted }}>⚡ Acesso imediato · Garantia 7 dias</p>
        </div>
        <button
          onClick={handleCheckout}
          className="flex-shrink-0 flex items-center gap-2 font-black text-sm px-5 py-3 rounded-xl"
          style={{
            background: `linear-gradient(135deg, ${G.primary}, #00E676)`,
            color: "#000",
            boxShadow: `0 0 20px rgba(0,200,83,0.5)`,
          }}
        >
          GARANTIR VAGA
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* ═══ FLOATING CHAT BUTTONS ═══ */}
      <div className="fixed bottom-20 md:bottom-6 right-4 z-50 flex flex-col gap-3">
        <button
          onClick={() => openChat("whatsapp")}
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
          style={{ background: "#25D366", boxShadow: "0 0 20px rgba(37,211,102,0.5)" }}
        >
          <MessageCircle className="w-6 h-6 text-white" />
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-[10px] font-black flex items-center justify-center animate-pulse" style={{ background: G.red, color: "#fff" }}>1</span>
        </button>
        <button
          onClick={() => openChat("telegram")}
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
          style={{ background: "#229ED9", boxShadow: "0 0 20px rgba(34,158,217,0.4)" }}
        >
          <Send className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* ═══ CHAT BOX ═══ */}
      {chatType && (
        <div
          className="fixed bottom-20 md:bottom-6 right-4 z-50 w-[calc(100vw-2rem)] max-w-[380px] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          style={{ maxHeight: "80vh", background: "#fff" }}
        >
          <div className="flex items-center justify-between p-4 flex-shrink-0" style={{ background: chatType === "whatsapp" ? "#075E54" : "#229ED9" }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.2)" }}>
                {chatType === "whatsapp" ? <MessageCircle className="w-5 h-5 text-white" /> : <Send className="w-5 h-5 text-white" />}
              </div>
              <div>
                <p className="text-white font-black text-sm">{chatType === "whatsapp" ? "WhatsApp Suporte" : "Telegram Suporte"}</p>
                <p className="text-green-300 text-xs font-bold">🟢 Online agora</p>
              </div>
            </div>
            <button onClick={() => { setChatType(null); setChatMessages([]); }} className="text-white p-2 hover:bg-white/20 rounded-full"><X className="w-5 h-5" /></button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0" style={{ background: "#ECE5DD" }}>
            {chatMessages.map((m, i) => (
              <div key={i} className={`flex gap-2 ${m.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className="max-w-[82%] p-3 rounded-2xl text-sm font-medium leading-relaxed shadow-sm"
                  style={m.type === "bot" ? { background: "#fff", color: "#222", borderRadius: "4px 16px 16px 16px" } : { background: "#DCF8C6", color: "#111", borderRadius: "16px 4px 16px 16px" }}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div className="p-3 bg-white border-t overflow-y-auto flex-shrink-0" style={{ maxHeight: "170px" }}>
            <p className="text-[11px] text-gray-400 text-center font-bold mb-2">Escolha uma dúvida:</p>
            <div className="space-y-1.5">
              {faqDatabase.map((f, i) => (
                <button key={i} onClick={() => handleFaqQ(f.q, f.a)}
                  className="w-full text-left text-xs p-2.5 rounded-xl font-bold transition-all border"
                  style={{ background: "#f0fdf4", borderColor: "#bbf7d0", color: "#166534" }}>
                  {f.q}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 flex-shrink-0" style={{ background: "#075E54", borderTop: `3px solid ${G.primary}` }}>
            <button onClick={handleCheckout}
              className="w-full py-3.5 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              style={{ background: G.primary, color: "#000", boxShadow: `0 0 20px rgba(0,200,83,0.5)` }}>
              <Sparkles className="w-4 h-4" />
              GARANTIR MINHA VAGA AGORA
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-[10px] text-white/70 mt-2 font-bold">⚡ Acesso imediato · 🛡️ Garantia 7 dias</p>
          </div>
        </div>
      )}

      {/* ═══ BARRA DE ONLINE ═══ */}
      <div className="py-2 px-4 flex items-center justify-center gap-2 text-xs font-bold"
        style={{ background: "#0a1a0a", borderBottom: "1px solid #1a2a1a" }}>
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
        <span style={{ color: "#888" }}>
          <span className="font-black" style={{ color: G.primary }}>{onlineCount} pessoas</span> estão visualizando esta página agora
        </span>
      </div>

      {/* ═══ BARRA DE URGÊNCIA ═══ */}
      <div className="py-3 px-4 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-sm font-black"
        style={{ background: "#cc0000", color: "#fff" }}>
        <span className="flex items-center gap-1.5"><AlertCircle className="w-4 h-4" /> OFERTA ESPECIAL EXPIRA EM:</span>
        <span className="bg-black text-white px-4 py-1 rounded-lg tabular-nums tracking-widest text-base font-black border border-white/20">
          {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
        </span>
        <span className="hidden sm:inline">· Após o timer: R$ 297,00</span>
      </div>

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative px-4 pt-12 pb-16 md:pt-20 md:pb-28 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,200,83,0.1) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* Social proof topo */}
          <div className="flex justify-center mb-6">
            <div className="flex flex-col sm:flex-row items-center gap-3 px-5 py-3 rounded-2xl border text-sm font-bold"
              style={{ background: "rgba(0,200,83,0.08)", borderColor: "rgba(0,200,83,0.25)" }}>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {["🟢","🟢","🟢","🟢","🟢"].map((s, i) => <span key={i} className="text-xs">{s}</span>)}
                </div>
                <span style={{ color: G.primary }} className="font-black">+3.847 pessoas</span>
                <span style={{ color: "#999" }}>já estão ganhando com o método</span>
              </div>
              <div className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black" style={{ background: "rgba(0,200,83,0.15)", color: G.primary }}>
                <Star className="w-3 h-3 fill-current" /> 4.9/5 de avaliação
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* ── Texto ── */}
            <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest mb-5 px-3 py-1.5 rounded-full"
                style={{ background: "rgba(0,200,83,0.12)", color: G.primary, border: "1px solid rgba(0,200,83,0.3)" }}>
                <TrendingUp className="w-3.5 h-3.5" />
                Método validado · +3.847 alunos · desde 2022
              </div>

              {/* HEADLINE CIRÚRGICA */}
              <h1 className="font-black leading-[1.05] mb-4" style={{ fontSize: "clamp(2rem, 5.5vw, 3.6rem)" }}>
                Como Pessoas Comuns Estão{" "}
                <span style={{ color: G.primary }}>Ganhando R$ 1.000 a R$ 5.000/mês</span>
                {" "}Usando IA — Sem Aparecer, Sem Experiência
              </h1>
              <h2 className="font-bold mb-6 leading-relaxed" style={{ fontSize: "clamp(1.05rem, 2.5vw, 1.4rem)", color: "#bbb" }}>
                O método passo a passo que já gerou renda extra para mais de 3.847 brasileiros comuns, trabalhando apenas 2h por dia de casa
              </h2>

              {/* Mini prova social inline */}
              <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
                {[
                  { emoji: "💰", val: "R$ 4.100/mês", name: "Carlos S." },
                  { emoji: "💰", val: "R$ 2.800/mês", name: "Ana Paula" },
                  { emoji: "💰", val: "R$ 3.500/mês", name: "Mariana C." },
                ].map((p, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border font-bold"
                    style={{ background: "rgba(0,200,83,0.06)", borderColor: "rgba(0,200,83,0.2)", color: "#aaa" }}>
                    {p.emoji} <span style={{ color: G.primary }}>{p.val}</span> — {p.name}
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
                {[
                  { icon: CheckCircle, text: "Acesso Vitalício", c: G.primary },
                  { icon: Shield, text: "Garantia 7 Dias", c: G.primary },
                  { icon: Zap, text: "1ª venda em 30 dias", c: G.amber },
                  { icon: Target, text: "Método 100% anônimo", c: "#00BFA5" },
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-bold" style={{ color: "#aaa" }}>
                    <t.icon className="w-4 h-4 flex-shrink-0" style={{ color: t.c }} />
                    {t.text}
                  </div>
                ))}
              </div>

              {/* Preço visível no hero */}
              <div className="mb-4 p-4 rounded-2xl border-2 text-center lg:text-left"
                style={{ background: "rgba(0,200,83,0.05)", borderColor: "rgba(0,200,83,0.3)" }}>
                <p className="text-sm line-through mb-0.5" style={{ color: "#555" }}>De R$ 297,00</p>
                <div className="flex items-baseline gap-2 justify-center lg:justify-start">
                  <span className="text-2xl font-black" style={{ color: G.primary }}>Hoje por apenas</span>
                  <span className="font-black" style={{ fontSize: "3rem", color: G.primary, lineHeight: 1 }}>R$ 47</span>
                </div>
                <p className="text-xs mt-1" style={{ color: "#666" }}>ou 12x de R$ 4,70 · PIX com desconto extra</p>
              </div>

              {/* CTA Hero */}
              <div className="space-y-3">
                <CTAButton onClick={handleCheckout} size="lg">
                  <Lock className="w-6 h-6" />
                  ACESSAR AGORA POR R$ 47
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </CTAButton>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs" style={{ color: G.muted }}>
                  <span>🔒 Pagamento 100% seguro via Kiwify</span>
                  <span>·</span>
                  <span>💳 Cartão, PIX ou Boleto</span>
                  <span>·</span>
                  <span>⚡ Acesso em 2 minutos</span>
                </div>
              </div>
            </div>

            {/* ── Mockup Celular ── */}
            <div className="flex-shrink-0 flex justify-center pb-6 md:pb-0">
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-3xl pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(0,200,83,0.2) 0%, transparent 70%)" }} />

                <div className="relative mx-auto rounded-[40px] border-[6px] overflow-hidden"
                  style={{ width: "220px", height: "460px", borderColor: "#1a2a1a", background: "#0a0f0a", boxShadow: "0 40px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.06)" }}>

                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 rounded-b-2xl z-10 flex items-center justify-center gap-1" style={{ background: "#050d05" }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: "#1a2a1a" }} />
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#1e3a2f" }} />
                  </div>
                  <div className="absolute -right-2 top-28 w-1 h-16 rounded-r-sm" style={{ background: "#1a2a1a" }} />

                  {/* Screen */}
                  <div className="h-full" style={{ background: "#060d06" }}>
                    <div className="flex items-center justify-between px-4 pt-8 pb-2">
                      <span className="text-[10px] font-bold" style={{ color: "#aaa" }}>9:41</span>
                      <div className="flex items-center gap-1">
                        <Wifi className="w-3 h-3" style={{ color: "#aaa" }} />
                        <Battery className="w-3.5 h-3.5" style={{ color: "#aaa" }} />
                      </div>
                    </div>

                    <div className="px-3 space-y-2.5">
                      <div className="rounded-xl p-3 text-center" style={{ background: "linear-gradient(135deg, #00C853, #004d20)" }}>
                        <p className="text-white font-black text-[11px]">IA QUE DÁ DINHEIRO</p>
                        <p className="text-white/70 text-[8px] mt-0.5">Painel do Aluno</p>
                      </div>

                      <div className="rounded-xl p-2.5 flex items-center gap-2 border" style={{ background: "rgba(0,200,83,0.08)", borderColor: "rgba(0,200,83,0.25)" }}>
                        <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: G.primary }}>
                          <DollarSign className="w-3.5 h-3.5 text-black" />
                        </div>
                        <div>
                          <p className="font-black text-[9px]" style={{ color: G.primary }}>VENDA REALIZADA!</p>
                          <p className="text-[8px]" style={{ color: "#666" }}>Pix recebido · + R$ 247,00</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="rounded-xl p-2.5 text-center" style={{ background: "#0f1a0f" }}>
                          <p className="font-black text-sm" style={{ color: G.primary }}>R$3.2k</p>
                          <p className="text-[8px]" style={{ color: "#555" }}>Este mês</p>
                        </div>
                        <div className="rounded-xl p-2.5 text-center" style={{ background: "#0f1a0f" }}>
                          <p className="font-black text-sm" style={{ color: G.primaryLight }}>47</p>
                          <p className="text-[8px]" style={{ color: "#555" }}>Vendas</p>
                        </div>
                      </div>

                      <div className="rounded-xl p-2.5" style={{ background: "#0f1a0f" }}>
                        <div className="flex justify-between mb-2">
                          <p className="text-[9px] font-bold text-white">Meta mensal</p>
                          <p className="text-[9px] font-black" style={{ color: G.primary }}>64%</p>
                        </div>
                        <div className="h-2 rounded-full" style={{ background: "#1a2a1a" }}>
                          <div className="h-full w-[64%] rounded-full" style={{ background: `linear-gradient(90deg, ${G.primary}, ${G.primaryLight})` }} />
                        </div>
                      </div>

                      {["Fundamentos IA", "Monetização", "Primeira Venda"].map((m, i) => (
                        <div key={i} className="flex items-center gap-2 px-2.5 py-2 rounded-lg" style={{ background: "#0f1a0f" }}>
                          <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: i < 2 ? G.primary : "#1a2a1a" }}>
                            {i < 2 ? <Check className="w-2.5 h-2.5 text-black" /> : <Play className="w-2 h-2 text-white" />}
                          </div>
                          <p className="text-[9px] font-medium" style={{ color: "#aaa" }}>{m}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute -top-3 -right-4 text-[10px] font-black px-2.5 py-1 rounded-full animate-bounce whitespace-nowrap"
                  style={{ background: G.red, color: "#fff", boxShadow: "0 4px 12px rgba(255,68,68,0.5)" }}>
                  47 VAGAS
                </div>
                <div className="absolute -bottom-3 -left-4 text-[10px] font-black px-2.5 py-1.5 rounded-full whitespace-nowrap"
                  style={{ background: G.primary, color: "#000", boxShadow: `0 4px 12px rgba(0,200,83,0.5)` }}>
                  +R$ 3.200/mês
                </div>
              </div>
            </div>
          </div>

          {/* Barra de escassez */}
          <div className="mt-14 max-w-md mx-auto rounded-2xl p-5 border text-center"
            style={{ background: "rgba(255,68,68,0.05)", borderColor: "rgba(255,68,68,0.2)" }}>
            <p className="font-black text-sm mb-2" style={{ color: "#ff6666" }}>⚠️ APENAS 47 VAGAS NESTE PREÇO</p>
            <div className="h-2.5 rounded-full mb-2" style={{ background: "#111" }}>
              <div className="h-full w-[85%] rounded-full" style={{ background: "linear-gradient(90deg, #ff4444, #ff8800)" }} />
            </div>
            <p className="text-xs" style={{ color: G.muted }}>85% preenchidas · Preço volta para R$ 297 ao atingir o limite</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SEÇÃO VSL / VÍDEO
      ═══════════════════════════════════════ */}
      <section className="py-12 px-4" style={{ background: G.bgDark }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 text-xs font-black px-3 py-1.5 rounded-full mb-3 animate-pulse"
              style={{ background: "rgba(255,68,68,0.12)", color: "#ff6666", border: "1px solid rgba(255,68,68,0.3)" }}>
              <div className="w-2 h-2 rounded-full bg-red-500" />
              ASSISTA ANTES DE SAIR — APENAS 3 MINUTOS
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Veja Como Funciona na Prática
            </h2>
          </div>

          {/* Player de vídeo — substitua o src pelo seu link do YouTube/Vimeo */}
          <div className="relative rounded-2xl overflow-hidden border-2 cursor-pointer group"
            style={{ borderColor: "rgba(0,200,83,0.4)", boxShadow: "0 0 40px rgba(0,200,83,0.15)" }}
            onClick={handleCheckout}>
            <div className="aspect-video w-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #060d06, #0a1a0a)" }}>
              {/* Thumbnail de fundo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-0 opacity-20"
                  style={{ background: "radial-gradient(circle at center, #00C853 0%, transparent 60%)" }} />
                <div className="text-center z-10">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: "rgba(0,200,83,0.2)", border: "3px solid rgba(0,200,83,0.6)", boxShadow: "0 0 40px rgba(0,200,83,0.4)" }}>
                    <Play className="w-10 h-10 sm:w-12 sm:h-12 ml-1" style={{ color: G.primary }} />
                  </div>
                  <p className="font-black text-white text-lg sm:text-xl mb-1">Como ganhar R$ 1.000 a R$ 5.000/mês com IA</p>
                  <p className="text-sm" style={{ color: "#666" }}>Clique para assistir · 3 minutos que podem mudar sua vida</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 text-center">
            <p className="text-sm mb-4" style={{ color: "#888" }}>
              Mais de <strong className="text-white">38.000 pessoas</strong> já assistiram a essa apresentação
            </p>
            <CTAButton onClick={handleCheckout} size="md">
              <Rocket className="w-5 h-5" />
              QUERO COMEÇAR AGORA POR R$ 47
              <ArrowRight className="w-5 h-5" />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PARA QUEM É / NÃO É
      ═══════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: G.bg }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: G.primary }}>TRANSPARÊNCIA TOTAL</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Este Curso é Para Você?</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Para quem É */}
            <div className="rounded-2xl p-6 border-2" style={{ background: "rgba(0,200,83,0.05)", borderColor: "rgba(0,200,83,0.25)" }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,200,83,0.15)" }}>
                  <ThumbsUp className="w-5 h-5" style={{ color: G.primary }} />
                </div>
                <h3 className="font-black text-lg" style={{ color: G.primary }}>É para você se...</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Quer uma renda extra sem sair de casa",
                  "Não tem experiência com tecnologia ou IA",
                  "Tem apenas 2-3 horas disponíveis por dia",
                  "Não quer aparecer ou gravar vídeos",
                  "Está cansado de não ter dinheiro sobrando",
                  "Quer resultados reais em até 30 dias",
                  "Busca liberdade financeira de verdade",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: G.primary }}>
                      <Check className="w-3 h-3 text-black" />
                    </div>
                    <span className="text-sm" style={{ color: "#ccc" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Para quem NÃO É */}
            <div className="rounded-2xl p-6 border-2" style={{ background: "rgba(255,68,68,0.04)", borderColor: "rgba(255,68,68,0.2)" }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,68,68,0.1)" }}>
                  <ThumbsDown className="w-5 h-5" style={{ color: G.red }} />
                </div>
                <h3 className="font-black text-lg" style={{ color: G.red }}>Não é para você se...</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Quer ficou rico sem fazer nada",
                  "Não está disposto a dedicar 2h por dia",
                  "Busca uma solução mágica da noite pro dia",
                  "Não vai seguir o método passo a passo",
                  "Já tem uma renda que te satisfaz completamente",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(255,68,68,0.15)", border: "1px solid rgba(255,68,68,0.3)" }}>
                      <X className="w-3 h-3" style={{ color: G.red }} />
                    </div>
                    <span className="text-sm" style={{ color: "#888" }}>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl border" style={{ background: "rgba(0,200,83,0.06)", borderColor: "rgba(0,200,83,0.2)" }}>
                <p className="text-sm font-bold" style={{ color: G.primary }}>
                  Se você se identificou com o lado esquerdo, esse curso foi feito para você. 👆
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SEÇÃO DE PREÇO
      ═══════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: G.bg }}>
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: G.primary }}>INVESTIMENTO ÚNICO · ACESSO VITALÍCIO</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Comece Hoje Por Apenas</h2>
          </div>

          <div className="relative rounded-2xl p-8 border-2"
            style={{ background: "linear-gradient(145deg, #0a1a0a, #060d06)", borderColor: G.primary, boxShadow: `0 0 60px rgba(0,200,83,0.15)` }}>

            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full font-black text-xs whitespace-nowrap"
              style={{ background: `linear-gradient(90deg, ${G.primary}, #00E676)`, color: "#000" }}>
              95% DE DESCONTO — OFERTA LIMITADA
            </div>

            <div className="text-center mb-6 pt-2">
              <p className="text-sm line-through mb-1" style={{ color: "#555" }}>De R$ 297,00</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-2xl font-black" style={{ color: G.primary }}>R$</span>
                <span className="font-black leading-none" style={{ fontSize: "5.5rem", color: G.primary, lineHeight: 1 }}>47</span>
              </div>
              <p className="text-sm mt-1" style={{ color: "#666" }}>ou 12x de R$ 4,70 · PIX com desconto extra</p>
            </div>

            <div className="space-y-3 mb-8">
              {[
                "4 módulos + 9 aulas práticas completas",
                "Acesso vitalício + atualizações grátis",
                "5 bônus exclusivos (valor R$ 197)",
                "Grupo VIP no Telegram",
                "Suporte via WhatsApp",
                "Certificado de conclusão incluso",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: G.primary }}>
                    <Check className="w-3 h-3 text-black" />
                  </div>
                  <span className="text-sm sm:text-base" style={{ color: "#ddd" }}>{item}</span>
                </div>
              ))}
            </div>

            <CTAButton onClick={handleCheckout} full>
              <Lock className="w-5 h-5" />
              GARANTIR ACESSO AGORA
              <ArrowRight className="w-5 h-5" />
            </CTAButton>

            <div className="flex items-center justify-center gap-5 mt-4">
              {[
                { icon: Shield, text: "Garantia 7 dias", c: G.primary },
                { icon: Lock, text: "100% seguro", c: G.primaryLight },
                { icon: Zap, text: "Acesso imediato", c: G.amber },
              ].map((x, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs font-bold" style={{ color: "#555" }}>
                  <x.icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: x.c }} />
                  {x.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BENEFÍCIOS
      ═══════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: G.bgDark }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: G.primary }}>O QUE VOCÊ VAI CONQUISTAR</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Sua Nova Realidade em 30 Dias</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: DollarSign, title: "Renda Extra Real", desc: "De R$ 1.000 a R$ 5.000/mês trabalhando de casa", accent: G.primary },
              { icon: Clock, title: "Apenas 2-3h por Dia", desc: "Trabalhe no seu ritmo, sem abrir mão da sua rotina atual", accent: G.primaryLight },
              { icon: Rocket, title: "Resultado em 30 Dias", desc: "Primeira venda seguindo o método passo a passo garantido", accent: G.amber },
              { icon: Brain, title: "Método Simples", desc: "IA aplicada de forma prática, sem termos técnicos ou complicações", accent: "#00BFA5" },
              { icon: Shield, title: "100% Anônimo", desc: "Sem mostrar rosto, sem gravar vídeos, sem aparecer nas redes", accent: G.primary },
              { icon: Users, title: "Suporte Completo", desc: "Grupo VIP Telegram + WhatsApp — nenhuma dúvida sem resposta", accent: G.primaryLight },
            ].map((b, i) => (
              <div key={i} className="rounded-xl p-6 border transition-all duration-300 hover:translate-y-[-3px] group"
                style={{ background: G.bgCard, borderColor: G.bgCardBorder }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ background: `${b.accent}15` }}>
                  <b.icon className="w-6 h-6" style={{ color: b.accent }} />
                </div>
                <h3 className="font-black text-lg text-white mb-2">{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: G.muted }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          AUTORIDADE
      ═══════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: G.bg }}>
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl p-6 sm:p-10 border flex flex-col sm:flex-row items-center sm:items-start gap-8"
            style={{ background: G.bgCard, borderColor: G.bgCardBorder }}>
            <div className="flex-shrink-0 text-center">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 mx-auto" style={{ borderColor: G.primary }}>
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" alt="Júlia" className="w-full h-full object-cover" />
              </div>
              <p className="font-black text-white text-sm mt-3">Júlia</p>
              <p className="text-xs" style={{ color: G.primary }}>Especialista em IA</p>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="font-black text-xl sm:text-2xl text-white mb-4">
                De onde surgiu o <span style={{ color: G.primary }}>método</span>
              </p>
              <div className="space-y-3 text-sm sm:text-base leading-relaxed" style={{ color: "#aaa" }}>
                <p>Quando descobri a IA, estava precisando de uma renda extra e sem ideia de por onde começar.</p>
                <p>Em poucos meses percebi que era <strong className="text-white">muito mais simples do que parecia</strong> e que qualquer pessoa conseguia aplicar — sem experiência técnica, sem aparecer.</p>
                <p style={{ color: G.primary, fontWeight: 700 }}>Hoje minha missão é provar que você também consegue, partindo do zero.</p>
              </div>
              <div className="flex flex-wrap gap-3 mt-6 justify-center sm:justify-start">
                {["+3.847 alunos", "97% aprovação", "Desde 2022"].map((s, i) => (
                  <div key={i} className="px-4 py-2 rounded-xl border text-center"
                    style={{ background: "rgba(0,200,83,0.08)", borderColor: "rgba(0,200,83,0.2)" }}>
                    <p className="font-black text-sm" style={{ color: G.primary }}>{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          DEPOIMENTOS
      ═══════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: G.bgDark }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: G.primary }}>RESULTADOS REAIS DE ALUNOS</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
              Eles Duvidaram. Tentaram. <span style={{ color: G.primary }}>Transformaram.</span>
            </h2>
            <p className="mt-3 text-sm" style={{ color: "#666" }}>Depoimentos reais de quem aplicou o método</p>
          </div>

          {/* Depoimentos estilo print de mensagem */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                msg: "Gente, fiz minha PRIMEIRA VENDA! R$ 247 de uma vez! Comecei há 3 semanas 😱🔥",
                result: "Hoje: R$ 2.800/mês",
                name: "Ana Paula S.",
                role: "Ex-atendente de loja",
                time: "há 2 dias",
                initials: "AP",
                color: "#FF6B9D"
              },
              {
                msg: "Não acredito que fiquei tanto tempo sem fazer isso. Já superei meu salário de motorista. Melhor R$ 47 da minha vida!",
                result: "Hoje: R$ 4.100/mês",
                name: "Carlos S.",
                role: "Antes motorista de app",
                time: "há 5 dias",
                initials: "CS",
                color: "#4ECDC4"
              },
              {
                msg: "Achei que era mais um golpe... mas a garantia de 7 dias me deu coragem. Erro meu foi ter esperado 2 meses para comprar 😅",
                result: "Hoje: R$ 3.500/mês",
                name: "Mariana C.",
                role: "Designer freelancer",
                time: "há 1 semana",
                initials: "MC",
                color: "#A78BFA"
              },
            ].map((t, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border" style={{ background: "#0d1a0d", borderColor: "#1a2a1a" }}>
                {/* Cabeçalho tipo app de mensagem */}
                <div className="flex items-center gap-3 p-3 border-b" style={{ background: "#0a140a", borderColor: "#1a2a1a" }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 text-white"
                    style={{ background: t.color }}>
                    {t.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-black text-white text-sm">{t.name}</p>
                    <p className="text-[11px]" style={{ color: "#555" }}>{t.role}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array(5).fill(0).map((_, j) => <Star key={j} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                  </div>
                </div>
                {/* Bolha de mensagem */}
                <div className="p-4">
                  <div className="p-3 rounded-2xl rounded-tl-sm mb-3" style={{ background: "#1a2a1a" }}>
                    <p className="text-sm leading-relaxed" style={{ color: "#ddd" }}>&quot;{t.msg}&quot;</p>
                    <p className="text-[10px] mt-1.5 text-right" style={{ color: "#444" }}>{t.time} ✓✓</p>
                  </div>
                  {/* Tag de resultado */}
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ background: "rgba(0,200,83,0.1)", border: "1px solid rgba(0,200,83,0.25)" }}>
                    <TrendingUp className="w-4 h-4 flex-shrink-0" style={{ color: G.primary }} />
                    <p className="text-sm font-black" style={{ color: G.primary }}>{t.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA dentro da seção de depoimentos */}
          <div className="text-center mb-10">
            <p className="text-sm mb-4" style={{ color: "#666" }}>Você pode ser o próximo. Comece hoje por R$ 47.</p>
            <CTAButton onClick={handleCheckout} size="md">
              <DollarSign className="w-5 h-5" />
              QUERO MEU RESULTADO TAMBÉM
              <ArrowRight className="w-5 h-5" />
            </CTAButton>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[{ n: "3.847+", l: "Alunos ativos" }, { n: "97%", l: "Satisfação" }, { n: "30 dias", l: "1ª venda média" }, { n: "R$ 5k", l: "Máx. mensal" }].map((s, i) => (
              <div key={i} className="text-center py-4 rounded-xl border" style={{ background: G.bgCard, borderColor: G.bgCardBorder }}>
                <p className="font-black text-2xl sm:text-3xl" style={{ color: G.primary }}>{s.n}</p>
                <p className="text-xs mt-1" style={{ color: G.muted }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BÔNUS
      ═══════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: G.bg }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: G.amber }}>BÔNUS EXCLUSIVOS</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">
              +5 Bônus <span style={{ color: G.primary }}>Completamente Grátis</span>
            </h2>
            <p style={{ color: G.muted }}>Valor total: R$ 197 · Inclusos sem custo adicional por tempo limitado</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              { title: "Lista de Prompts Prontos", icon: FileText, desc: "Templates validados para usar hoje mesmo", val: "R$ 47" },
              { title: "Ferramentas Recomendadas", icon: Zap, desc: "As melhores IAs para cada tarefa", val: "R$ 37" },
              { title: "Checklist Primeira Venda", icon: CheckCircle, desc: "Passo a passo para sua 1ª venda", val: "R$ 47" },
              { title: "Scripts de Vídeos", icon: Video, desc: "Roteiros prontos para criar conteúdo", val: "R$ 37" },
              { title: "Modelos de Post", icon: Sparkles, desc: "Templates para Instagram e Facebook", val: "R$ 29" },
            ].map((b, i) => (
              <div key={i} className="rounded-xl p-5 border transition-all duration-300 hover:border-green-800"
                style={{ background: G.bgCard, borderColor: G.bgCardBorder }}>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,200,83,0.1)" }}>
                    <b.icon className="w-5 h-5" style={{ color: G.primary }} />
                  </div>
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(0,200,83,0.12)", color: G.primary, border: `1px solid rgba(0,200,83,0.3)` }}>
                    GRÁTIS
                  </span>
                </div>
                <h3 className="font-black text-white text-base mb-1">{b.title}</h3>
                <p className="text-sm mb-3" style={{ color: G.muted }}>{b.desc}</p>
                <p className="text-xs line-through" style={{ color: "#333" }}>Valor: {b.val}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton onClick={handleCheckout} size="lg">
              <Gift className="w-6 h-6" />
              QUERO OS BÔNUS GRÁTIS AGORA
              <ArrowRight className="w-6 h-6" />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MÓDULOS
      ═══════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: G.bgDark }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: G.primary }}>CONTEÚDO COMPLETO</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">4 Módulos Estratégicos</h2>
          </div>
          <div className="space-y-3">
            {[
              { n: "01", title: "Fundamentos e Primeiros Passos", lessons: "2 aulas", tags: ["Setup completo", "Primeiros passos", "Ferramentas essenciais"], c: G.primary },
              { n: "02", title: "Métodos Práticos de Monetização", lessons: "3 aulas", tags: ["Templates prontos", "Casos reais", "Atalhos validados"], c: G.primaryLight },
              { n: "03", title: "Sua Primeira Venda Garantida", lessons: "2 aulas", tags: ["Scripts de venda", "Onde buscar clientes", "Como fechar"], c: G.amber },
              { n: "04", title: "Escala e Multiplicação de Renda", lessons: "2 aulas", tags: ["Automação", "Escala 10x", "Gestão de tempo"], c: "#00BFA5" },
            ].map((m, i) => (
              <div key={i} className="rounded-xl p-5 sm:p-6 border flex flex-col sm:flex-row items-start gap-4 sm:gap-6 transition-all duration-300 hover:translate-x-1"
                style={{ background: G.bgCard, borderColor: G.bgCardBorder }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg flex-shrink-0"
                  style={{ background: `${m.c}15`, color: m.c }}>{m.n}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                    <h3 className="font-black text-white text-lg">{m.title}</h3>
                    <span className="text-xs font-bold flex-shrink-0" style={{ color: "#444" }}>{m.lessons}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {m.tags.map((tag, j) => (
                      <div key={j} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border"
                        style={{ background: G.bg, borderColor: "#1a2a1a", color: "#666" }}>
                        <ChevronRight className="w-3 h-3 flex-shrink-0" style={{ color: m.c }} />
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button onClick={handleCheckout}
              className="w-full sm:w-auto flex items-center justify-center gap-3 font-black text-base sm:text-lg px-8 py-4 rounded-xl mx-auto transition-all duration-300 hover:scale-[1.02]"
              style={{ background: "rgba(0,200,83,0.1)", color: G.primary, border: `1px solid rgba(0,200,83,0.3)` }}>
              <BookOpen className="w-5 h-5" />
              QUERO ACESSO AOS 4 MÓDULOS
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GARANTIA
      ═══════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: G.bg }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-2xl p-8 sm:p-12 border-2"
            style={{ background: G.bgCard, borderColor: "rgba(0,200,83,0.3)", boxShadow: `0 0 60px rgba(0,200,83,0.06)` }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: "rgba(0,200,83,0.1)", border: `2px solid rgba(0,200,83,0.3)` }}>
              <Shield className="w-10 h-10" style={{ color: G.primary }} />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3">Garantia de 7 Dias</h2>
            <p className="font-black text-xl sm:text-2xl mb-6" style={{ color: G.primary }}>Risco zero. 100% do dinheiro de volta.</p>
            <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: "#aaa" }}>
              Acesse o curso completo, aplique o método. Se por qualquer motivo não gostar em até 7 dias,
              <strong className="text-white"> devolvemos 100% do seu dinheiro</strong>. Sem perguntas. O risco é todo nosso.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mb-8">
              {[
                { t: "100% do valor", d: "Devolução integral" },
                { t: "Até 7 dias", d: "Sem precisar justificar" },
                { t: "Sem burocracia", d: "Um email e pronto" },
              ].map((x, i) => (
                <div key={i} className="py-4 px-3 rounded-xl border" style={{ background: "rgba(0,200,83,0.05)", borderColor: "rgba(0,200,83,0.15)" }}>
                  <p className="font-black text-sm text-white mb-0.5">{x.t}</p>
                  <p className="text-xs" style={{ color: G.muted }}>{x.d}</p>
                </div>
              ))}
            </div>
            <CTAButton onClick={handleCheckout} full>
              <Shield className="w-6 h-6" />
              COMEÇAR SEM RISCO AGORA
              <ArrowRight className="w-6 h-6" />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ VISÍVEL NA PÁGINA
      ═══════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: G.bgDark }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-black text-xs uppercase tracking-widest mb-3" style={{ color: G.primary }}>PERGUNTAS FREQUENTES</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Ainda tem dúvidas?</h2>
            <p className="mt-3" style={{ color: G.muted }}>Respondemos as mais comuns abaixo</p>
          </div>

          <div className="space-y-3">
            {faqDatabase.map((item, i) => (
              <div key={i} className="rounded-xl border overflow-hidden transition-all duration-300"
                style={{ background: G.bgCard, borderColor: openFaq === i ? "rgba(0,200,83,0.4)" : G.bgCardBorder }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left transition-colors"
                  style={{ color: openFaq === i ? G.primary : "#ddd" }}
                >
                  <span className="font-bold text-sm sm:text-base">{item.q}</span>
                  <ChevronDown
                    className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
                    style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)", color: openFaq === i ? G.primary : G.muted }}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <div className="pt-3 border-t text-sm sm:text-base leading-relaxed" style={{ borderColor: G.bgCardBorder, color: "#aaa" }}>
                      {item.a}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm mb-5" style={{ color: G.muted }}>Ainda tem alguma dúvida? Fale direto no WhatsApp</p>
            <button onClick={() => openChat("whatsapp")}
              className="inline-flex items-center gap-2 font-black text-sm px-6 py-3 rounded-xl transition-all hover:scale-[1.02]"
              style={{ background: "#25D366", color: "#fff", boxShadow: "0 0 20px rgba(37,211,102,0.3)" }}>
              <MessageCircle className="w-4 h-4" />
              FALAR NO WHATSAPP
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA FINAL
      ═══════════════════════════════════════ */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: G.bg }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(0,200,83,0.09) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-xs font-bold" style={{ color: "#666" }}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span><strong style={{ color: G.primary }}>{onlineCount} pessoas</strong> estão nesta página agora · Apenas 47 vagas neste preço</span>
          </div>

          <h2 className="font-black leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Enquanto Você Hesita,<br />
            <span style={{ color: G.primary }}>Outros Estão Faturando</span>
          </h2>

          <p className="text-base sm:text-lg" style={{ color: "#888" }}>
            Cada dia que passa sem o método é mais um mês perdido. Por <strong className="text-white">R$ 47</strong> — menos que uma pizza — você tem acesso a um sistema que pode gerar <strong className="text-white">R$ 1.000 a R$ 5.000/mês</strong>. Com garantia de 7 dias. Risco zero.
          </p>

          {/* Box de valor */}
          <div className="p-6 rounded-2xl border-2 text-left" style={{ background: "rgba(0,200,83,0.05)", borderColor: "rgba(0,200,83,0.3)" }}>
            <p className="font-black text-center text-white mb-4 text-lg">Você leva tudo isso por R$ 47:</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                "4 módulos + 9 aulas práticas",
                "Acesso vitalício + atualizações",
                "5 bônus exclusivos (valor R$ 197)",
                "Grupo VIP no Telegram",
                "Suporte via WhatsApp",
                "Certificado de conclusão",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm" style={{ color: "#bbb" }}>
                  <Check className="w-4 h-4 flex-shrink-0" style={{ color: G.primary }} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <CTAButton onClick={handleCheckout} size="lg">
            <Lock className="w-6 h-6" />
            SIM! QUERO ACESSO AGORA POR R$ 47
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </CTAButton>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { icon: Lock, text: "Pagamento 100% seguro", c: G.primaryLight },
              { icon: Zap, text: "Acesso em 2 minutos", c: G.amber },
              { icon: Shield, text: "Garantia de 7 dias", c: G.primary },
            ].map((x, i) => (
              <div key={i} className="flex items-center gap-2 text-sm" style={{ color: "#555" }}>
                <x.icon className="w-4 h-4 flex-shrink-0" style={{ color: x.c }} />
                {x.text}
              </div>
            ))}
          </div>

          {/* Timer final */}
          <div className="p-4 rounded-xl border text-center" style={{ background: "rgba(255,68,68,0.06)", borderColor: "rgba(255,68,68,0.25)" }}>
            <p className="text-xs font-bold mb-1" style={{ color: "#ff6666" }}>⚠️ Esta oferta expira em:</p>
            <p className="font-black text-2xl tabular-nums" style={{ color: "#ff6666" }}>
              {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
            </p>
            <p className="text-xs mt-1" style={{ color: "#444" }}>Após isso: R$ 297,00</p>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-10 px-4 text-center border-t" style={{ background: "#020702", borderColor: "#0a150a" }}>
        <p className="text-sm font-bold mb-3" style={{ color: "#2a2a2a" }}>© 2024 IA que Dá Dinheiro · Todos os direitos reservados</p>
        <p className="text-xs max-w-2xl mx-auto mb-6 leading-relaxed" style={{ color: "#222" }}>
          Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como garantia de resultados. Os resultados podem variar de pessoa para pessoa.
        </p>
        <div className="flex justify-center gap-8">
          <button onClick={() => openChat("whatsapp")} className="text-sm font-bold transition-colors hover:text-green-400" style={{ color: "#2a2a2a" }}>WhatsApp</button>
          <button onClick={() => openChat("telegram")} className="text-sm font-bold transition-colors hover:text-blue-400" style={{ color: "#2a2a2a" }}>Telegram</button>
        </div>
      </footer>

      {/* Espaço para o sticky mobile não cobrir conteúdo */}
      <div className="h-20 md:hidden" />
    </div>
  );
}
