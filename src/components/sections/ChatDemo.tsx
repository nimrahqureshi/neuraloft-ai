import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mic, Send, Zap, Workflow as WorkflowIcon, AudioLines } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { chatChips, getDemoReply } from "@/data/content";

interface Message {
  role: "user" | "bot";
  text: string;
}

const features = [
  {
    icon: Zap,
    title: "Instant intent detection",
    copy: "Understands bookings, pricing, support and lead questions.",
  },
  {
    icon: WorkflowIcon,
    title: "Acts, not just chats",
    copy: "Triggers real automations: scheduling, CRM updates, follow-ups.",
  },
  {
    icon: AudioLines,
    title: "Voice ready",
    copy: "Tap the mic to see how voice-enabled agents respond.",
  },
];

const SEED: Message = {
  role: "bot",
  text: "Hey 👋 I'm your Neuraloft AI assistant. I can book appointments, answer pricing questions and pull up your leads. What can I do for you?",
};

/** Front-end AI chat demo — canned, keyword-matched replies with typing indicator. */
export function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>([SEED]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [recording, setRecording] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing]);

  const send = (raw: string) => {
    const text = raw.trim();
    if (!text || typing) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setTyping(true);
    const delay = 850 + Math.random() * 650;
    window.setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { role: "bot", text: getDemoReply(text) }]);
    }, delay);
  };

  const handleMic = () => {
    if (recording || typing) return;
    setRecording(true);
    window.setTimeout(() => {
      setRecording(false);
      send("Book appointment tomorrow");
    }, 1500);
  };

  return (
    <section id="demo" className="relative z-10 mx-auto max-w-[1200px] px-6 py-24 sm:px-7">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* copy */}
        <Reveal>
          <Eyebrow>Live AI Demo</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.08] tracking-[-0.02em]">
            Talk to a <span className="text-gradient">Neuraloft agent</span> right now.
          </h2>
          <p className="mt-3.5 text-[16px] text-muted">
            This is a front-end preview of how your customers experience a Neuraloft AI assistant.
            Try a prompt below — or type your own.
          </p>
          <div className="mt-6 flex flex-col gap-3.5">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <div className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-lg border border-stroke bg-gradient-to-br from-mint/20 to-indigo/20">
                  <f.icon size={15} className="text-mint" />
                </div>
                <div>
                  <b className="text-[14.5px] font-semibold">{f.title}</b>
                  <p className="text-[13px] text-muted">{f.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* chat window */}
        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-[18px] border border-stroke bg-gradient-to-b from-white/[0.04] to-white/[0.01] shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)]">
            {/* header */}
            <div className="flex items-center gap-3 border-b border-stroke bg-white/[0.02] px-[18px] py-[15px]">
              <div className="relative h-[38px] w-[38px] shrink-0 rounded-[10px] bg-gradient-to-br from-mint to-indigo">
                <span className="absolute inset-0 m-auto h-3 w-3 rounded-full bg-bg" />
              </div>
              <div>
                <b className="block font-display text-[14px] font-semibold">Neuraloft Assistant</b>
                <span className="font-mono text-[10px] text-mint">
                  ● online · replies in seconds
                </span>
              </div>
            </div>

            {/* messages */}
            <div
              ref={bodyRef}
              className="flex h-[330px] flex-col gap-3 overflow-y-auto p-[18px]"
            >
              <AnimatePresence initial={false}>
                {messages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={
                      m.role === "user"
                        ? "max-w-[84%] self-end rounded-[13px] rounded-br-sm bg-gradient-to-br from-mint to-indigo px-3.5 py-2.5 text-[13.5px] font-medium leading-relaxed text-[#04120f]"
                        : "max-w-[84%] self-start rounded-[13px] rounded-bl-sm border border-stroke bg-white/[0.06] px-3.5 py-2.5 text-[13.5px] leading-relaxed"
                    }
                  >
                    {m.text}
                  </motion.div>
                ))}
                {typing && (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex w-max gap-1 self-start rounded-[13px] border border-stroke bg-white/[0.06] p-3.5"
                  >
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="h-1.5 w-1.5 rounded-full bg-muted"
                        style={{
                          animation: "typing-bounce 1.2s infinite",
                          animationDelay: `${d * 0.2}s`,
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* suggestion chips */}
            <div className="flex flex-wrap gap-2 px-[18px] pb-3">
              {chatChips.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => send(chip)}
                  className="rounded-full border border-stroke bg-white/[0.035] px-2.5 py-1.5 font-mono text-[11.5px] text-muted transition-colors hover:border-mint hover:text-ink"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* input row */}
            <div className="flex gap-2.5 border-t border-stroke bg-white/[0.02] px-[18px] py-3.5">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send(input)}
                placeholder="Type a message..."
                className="flex-1 rounded-[10px] border border-stroke bg-bg px-3.5 py-2.5 text-[13.5px] outline-none transition-colors focus:border-mint"
              />
              <button
                type="button"
                aria-label="Voice input (demo)"
                onClick={handleMic}
                className={`grid h-[42px] w-[42px] shrink-0 place-items-center rounded-[10px] border transition-colors ${
                  recording
                    ? "animate-pulse-dot border-mint bg-mint/15"
                    : "border-stroke bg-white/[0.04] hover:border-mint"
                }`}
              >
                <Mic size={16} className={recording ? "text-mint" : "text-muted"} />
              </button>
              <button
                type="button"
                aria-label="Send message"
                onClick={() => send(input)}
                className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-[10px] bg-gradient-to-br from-mint to-indigo"
              >
                <Send size={16} className="text-[#04120f]" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
