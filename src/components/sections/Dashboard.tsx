import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import {
  automationStatus,
  conversationSeries,
  leadsByDay,
  liveThread,
} from "@/data/content";

const stats = [
  { label: "Messages handled", value: 1284, suffix: "", note: "▲ 18% vs yesterday", sub: "last 24 hours" },
  { label: "Avg response", value: 8, suffix: "s", note: "▲ 73% faster than manual", sub: "AI reply time" },
  { label: "Leads captured", value: 37, suffix: "", note: "▲ 12 in last hour", sub: "today" },
  { label: "Active workflows", value: 14, suffix: "", note: "▲ all healthy", sub: "running now" },
];

const statusColor: Record<string, string> = {
  healthy: "bg-mint shadow-[0_0_8px_var(--color-mint)]",
  running: "bg-amber shadow-[0_0_8px_var(--color-amber)] animate-pulse-dot",
  idle: "bg-faint",
};

/** "Live AI Dashboard" — the most important visual proof section. */
export function Dashboard() {
  return (
    <section id="dashboard" className="relative z-10 mx-auto max-w-[1200px] px-6 py-24 sm:px-7">
      <SectionHeading
        eyebrow="Live AI Dashboard"
        title={
          <>
            Watch your <span className="text-gradient">automations run</span> in real time.
          </>
        }
        description="Every workflow we build ships with a control console — conversations, leads, analytics and automation health, all in one view."
      />

      <Reveal>
        <div className="mt-14 grid grid-cols-12 gap-4 rounded-[20px] border border-stroke bg-gradient-to-b from-white/[0.035] to-white/[0.008] p-5 sm:p-6">
          {/* KPI cards */}
          {stats.map((s) => (
            <Card key={s.label} className="col-span-6 lg:col-span-3">
              <CardHead title={s.label} live={s.label === "Messages handled"} />
              <div className="font-display text-[30px] font-extrabold tracking-[-0.02em]">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="font-mono text-[11px] uppercase tracking-wide text-faint">
                {s.sub}
              </div>
              <div className="mt-1 font-mono text-[11px] text-mint">{s.note}</div>
            </Card>
          ))}

          {/* conversations area chart */}
          <Card className="col-span-12 lg:col-span-8">
            <CardHead title="Conversations handled — 14 days" live />
            <div className="h-[160px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={conversationSeries} margin={{ top: 6, right: 4, bottom: 0, left: 4 }}>
                  <defs>
                    <linearGradient id="convFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#46E6C9" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="#46E6C9" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="convStroke" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#46E6C9" />
                      <stop offset="100%" stopColor="#7E74FF" />
                    </linearGradient>
                  </defs>
                  <Tooltip
                    cursor={{ stroke: "rgba(255,255,255,0.15)" }}
                    contentStyle={tooltipStyle}
                    labelStyle={{ color: "#8a92a6", fontSize: 11 }}
                    itemStyle={{ color: "#eaedf5", fontSize: 12 }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="url(#convStroke)"
                    strokeWidth={2.6}
                    fill="url(#convFill)"
                    animationDuration={1600}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* automation rate donut */}
          <Card className="col-span-12 lg:col-span-4">
            <CardHead title="Automation rate" />
            <div className="flex items-center gap-4">
              <div className="relative h-[112px] w-[112px] shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: "AI", value: 92 },
                        { name: "Human", value: 8 },
                      ]}
                      dataKey="value"
                      innerRadius={38}
                      outerRadius={52}
                      startAngle={90}
                      endAngle={-270}
                      stroke="none"
                      animationDuration={1400}
                    >
                      <Cell fill="url(#donutGrad)" />
                      <Cell fill="rgba(255,255,255,0.07)" />
                    </Pie>
                    <defs>
                      <linearGradient id="donutGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#46E6C9" />
                        <stop offset="100%" stopColor="#7E74FF" />
                      </linearGradient>
                    </defs>
                  </PieChart>
                </ResponsiveContainer>
                <span className="absolute inset-0 grid place-items-center font-display text-[21px] font-extrabold">
                  92%
                </span>
              </div>
              <p className="text-[13px] text-muted">
                of all customer messages resolved by AI without human handoff.
              </p>
            </div>
          </Card>

          {/* leads bar chart */}
          <Card className="col-span-12 lg:col-span-5">
            <CardHead title="Leads by day" />
            <div className="h-[150px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={leadsByDay} margin={{ top: 8, right: 4, bottom: 0, left: 4 }}>
                  <defs>
                    <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#7E74FF" />
                      <stop offset="100%" stopColor="#46E6C9" stopOpacity={0.5} />
                    </linearGradient>
                  </defs>
                  <Tooltip
                    cursor={{ fill: "rgba(255,255,255,0.04)" }}
                    contentStyle={tooltipStyle}
                    labelStyle={{ color: "#8a92a6", fontSize: 11 }}
                    itemStyle={{ color: "#eaedf5", fontSize: 12 }}
                  />
                  <Bar
                    dataKey="value"
                    fill="url(#barGrad)"
                    radius={[5, 5, 0, 0]}
                    animationDuration={1300}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* live thread */}
          <Card className="col-span-12 lg:col-span-4">
            <CardHead title="AI agent — live thread" live />
            <div className="flex flex-col gap-2.5">
              {liveThread.map((m, i) => (
                <div
                  key={i}
                  className={
                    m.role === "user"
                      ? "max-w-[90%] self-end rounded-[10px] rounded-br-sm border border-stroke bg-gradient-to-br from-mint/20 to-indigo/20 px-3 py-2"
                      : "max-w-[90%] self-start rounded-[10px] rounded-bl-sm border border-stroke bg-white/[0.06] px-3 py-2"
                  }
                >
                  <span className="mb-0.5 block font-mono text-[9px] uppercase tracking-wide text-faint">
                    {m.who}
                  </span>
                  <span className="text-[12.5px] leading-snug">{m.text}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* automation status */}
          <Card className="col-span-12 lg:col-span-3">
            <CardHead title="Automation status" />
            <div className="flex flex-col gap-3">
              {automationStatus.map((a) => (
                <div key={a.name} className="flex items-center gap-2.5 text-[13px]">
                  <span className={`h-2 w-2 shrink-0 rounded-full ${statusColor[a.status]}`} />
                  <span className="flex-1">{a.name}</span>
                  <span className="font-mono text-[10px] text-muted">{a.status}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Reveal>
    </section>
  );
}

const tooltipStyle: React.CSSProperties = {
  background: "#0c0f18",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 10,
  padding: "8px 12px",
};

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-[14px] border border-stroke bg-bg-2 p-[18px] ${className}`}>
      {children}
    </div>
  );
}

function CardHead({ title, live }: { title: string; live?: boolean }) {
  return (
    <div className="mb-3.5 flex items-center justify-between">
      <h4 className="font-display text-[14px] font-semibold">{title}</h4>
      {live && (
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wide text-mint">
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-mint" />
          LIVE
        </span>
      )}
    </div>
  );
}
