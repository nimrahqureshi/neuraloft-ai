import { useEffect, useState } from "react";
import { MessageSquare, Cpu, Database, Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { workflowSteps } from "@/data/content";

const icons = [MessageSquare, Cpu, Database, Send];

/** Animated 4-step automation loop: message → processing → CRM → response. */
export function Workflow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % workflowSteps.length);
    }, 1100);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="workflow" className="relative z-10 mx-auto max-w-[1200px] px-6 py-24 sm:px-7">
      <SectionHeading
        eyebrow="Automation Workflow"
        title={
          <>
            From a message to a <span className="text-gradient">finished task</span> —
            automatically.
          </>
        }
        description="Every NeuroFlow system follows the same proven loop: capture, understand, act and respond. No human in the loop unless one is needed."
      />

      <Reveal>
        <div className="mt-14 overflow-hidden rounded-[20px] border border-stroke bg-gradient-to-b from-indigo/[0.05] to-mint/[0.03] px-6 py-12 sm:px-8">
          <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
            {workflowSteps.map((step, i) => {
              const Icon = icons[i];
              const isActive = active === i;
              return (
                <div key={step.label} className="contents">
                  <div
                    className={`flex-1 rounded-[14px] border bg-bg-2 px-4 py-6 text-center transition-all duration-300 ${
                      isActive
                        ? "-translate-y-1 border-mint shadow-[0_0_30px_-8px_rgba(70,230,201,0.45)]"
                        : "border-stroke"
                    }`}
                  >
                    <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-[11px] border border-stroke bg-gradient-to-br from-mint/[0.18] to-indigo/[0.18]">
                      <Icon size={21} className="text-mint" />
                    </div>
                    <h4 className="font-display text-[14.5px] font-semibold">{step.label}</h4>
                    <p className="mt-1 text-[11.5px] text-muted">{step.copy}</p>
                  </div>

                  {/* connector (not after the last node) */}
                  {i < workflowSteps.length - 1 && <Connector delay={i * 0.8} />}
                </div>
              );
            })}
          </div>

          <p className="mt-7 text-center font-mono text-[12px] text-muted">
            // average end-to-end completion time:{" "}
            <span className="text-mint">~8 seconds</span>
          </p>
        </div>
      </Reveal>
    </section>
  );
}

/** Glowing connector with a traveling pulse — vertical on mobile, horizontal on desktop. */
function Connector({ delay }: { delay: number }) {
  return (
    <div className="relative mx-auto h-8 w-0.5 shrink-0 bg-gradient-to-b from-transparent via-white/20 to-transparent md:h-0.5 md:w-8 md:bg-gradient-to-r">
      <span
        className="absolute left-1/2 top-0 h-[7px] w-[7px] rounded-full bg-mint shadow-[0_0_12px_var(--color-mint)]
                   [animation:flow-y_3.2s_linear_infinite] md:left-0 md:top-1/2 md:[animation:flow-x_3.2s_linear_infinite]"
        style={{ transform: "translate(-50%,-50%)", animationDelay: `${delay}s` }}
      />
    </div>
  );
}
