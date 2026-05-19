import {
  Bot,
  MessageSquare,
  Database,
  PhoneCall,
  Users,
  Mail,
  type LucideIcon,
} from "lucide-react";

/* ============================================================
   BRAND
   ============================================================ */
export const brand = {
  name: "NeuroFlow",
  suffix: "AI",
  email: "hello@neuroflow.ai",
  tagline: "AI Automation Agency",
};

/* ============================================================
   NAVIGATION
   ============================================================ */
export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

/* ============================================================
   SERVICES
   ============================================================ */
export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  tag: string;
}

export const services: Service[] = [
  {
    title: "AI Chatbots",
    description:
      "Custom-trained assistants that answer questions, qualify visitors and resolve issues on your site 24/7.",
    icon: Bot,
    tag: "website + in-app",
  },
  {
    title: "WhatsApp Automation",
    description:
      "Instant AI replies, order updates and booking flows on the channel your customers actually use.",
    icon: MessageSquare,
    tag: "whatsapp business api",
  },
  {
    title: "CRM AI",
    description:
      "AI that updates records, scores deals and keeps your pipeline clean — without manual data entry.",
    icon: Database,
    tag: "hubspot · pipedrive",
  },
  {
    title: "AI Calling Assistant",
    description:
      "Voice agents that handle inbound calls, confirm appointments and route urgent issues to humans.",
    icon: PhoneCall,
    tag: "voice + telephony",
  },
  {
    title: "Lead Generation AI",
    description:
      "Automated prospecting, enrichment and outreach that fills your pipeline while you sleep.",
    icon: Users,
    tag: "outbound + enrichment",
  },
  {
    title: "AI Email Automation",
    description:
      "Drafts, replies and follow-up sequences written and sent by AI — fully on-brand and in your voice.",
    icon: Mail,
    tag: "inbox + sequences",
  },
];

/* ============================================================
   WORKFLOW STEPS
   ============================================================ */
export interface WorkflowStep {
  label: string;
  copy: string;
}

export const workflowSteps: WorkflowStep[] = [
  { label: "User Message", copy: "Customer writes in via chat, WhatsApp or email." },
  { label: "AI Processing", copy: "Intent is understood and the right action is chosen." },
  { label: "CRM Update", copy: "Records, deals and tags are updated instantly." },
  { label: "Automated Response", copy: "A clear, on-brand reply is sent back in seconds." },
];

/* ============================================================
   RESULT METRICS  (placeholders — replace with verified data)
   ============================================================ */
export interface ResultMetric {
  value: number | string;
  suffix?: string;
  label: string;
  decimals?: number;
}

export const resultMetrics: ResultMetric[] = [
  { value: 73, suffix: "%", label: "Faster response time" },
  { value: 3.4, suffix: "x", label: "More qualified leads", decimals: 1 },
  { value: "24/7", label: "AI customer support" },
  { value: 120, suffix: "+", label: "Hours saved / month" },
];

/* ============================================================
   TESTIMONIALS  (placeholders — use only real, approved quotes)
   ============================================================ */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "[Add a real client quote here once you complete a project — describe the problem NeuroFlow solved and the result they saw.]",
    name: "Client Name",
    role: "Role · Company",
  },
  {
    quote:
      "[Placeholder testimonial — swap in genuine feedback from a customer before publishing this site live.]",
    name: "Client Name",
    role: "Role · Company",
  },
  {
    quote:
      "[Placeholder testimonial — keep these honest; only use real quotes you have permission to publish.]",
    name: "Client Name",
    role: "Role · Company",
  },
];

/* ============================================================
   PRICING
   ============================================================ */
export interface PricingPlan {
  name: string;
  blurb: string;
  monthly: number | null; // null => "Custom"
  yearly: number | null;
  features: string[];
  featured?: boolean;
  cta: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    blurb: "For small businesses testing AI automation.",
    monthly: 299,
    yearly: 239,
    features: [
      "1 AI chatbot (website or WhatsApp)",
      "Up to 1,000 conversations / mo",
      "Basic CRM integration",
      "Email support",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    blurb: "For teams ready to automate sales & support.",
    monthly: 799,
    yearly: 639,
    features: [
      "Up to 4 AI agents (chat, WhatsApp, email)",
      "Unlimited conversations",
      "Lead generation + CRM automation",
      "Live dashboard & analytics",
      "Priority support",
    ],
    featured: true,
    cta: "Book a Demo",
  },
  {
    name: "Enterprise",
    blurb: "For companies automating at full scale.",
    monthly: null,
    yearly: null,
    features: [
      "Unlimited AI agents & workflows",
      "AI voice / calling assistant",
      "Custom integrations & SLAs",
      "Dedicated automation engineer",
    ],
    cta: "Contact Sales",
  },
];

/* ============================================================
   FAQ
   ============================================================ */
export interface FaqItem {
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  {
    q: "How long does it take to launch an AI system?",
    a: "Most Starter and Growth setups go live within 1–2 weeks. We begin with a short discovery call, map your workflows, then build and test in a staging environment before launch.",
  },
  {
    q: "Do I need technical knowledge to use it?",
    a: "No. We handle the build, integrations and training. You get a simple dashboard to monitor conversations, leads and automation health — no code required.",
  },
  {
    q: "Which tools does NeuroFlow integrate with?",
    a: "Common ones include WhatsApp Business, HubSpot, Pipedrive, Gmail/Outlook, Calendly, Shopify and Slack. If you use something else, we can usually connect via API or webhook.",
  },
  {
    q: "What happens when the AI can't handle a request?",
    a: "Every workflow has a human-handoff rule. When confidence is low or a request is sensitive, the AI escalates to your team with full context attached, so nothing slips through.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No lock-in. Plans are month-to-month, and yearly billing simply gives you a 20% discount. You can upgrade, downgrade or pause anytime.",
  },
];

/* ============================================================
   CHAT DEMO  — front-end canned responses (keyword matched)
   ============================================================ */
export const chatChips = [
  "Book appointment tomorrow",
  "How much does this cost?",
  "Show me today's leads",
];

export function getDemoReply(message: string): string {
  const m = message.toLowerCase();
  if (/book|appoint|schedul|meeting|tomorrow/.test(m))
    return "Done ✓ I've scheduled it for tomorrow at 2:00 PM and sent a confirmation on WhatsApp. Want me to add a reminder?";
  if (/price|cost|much|pricing|plan|\$/.test(m))
    return "Our plans start at $299/mo (Starter) and $799/mo (Growth), with custom Enterprise pricing. I've emailed the full breakdown — anything specific you'd like to compare?";
  if (/lead|leads|sales|pipeline/.test(m))
    return "I've qualified 3 new leads from today's traffic and pushed them into your CRM, tagged by intent. Two look hot — want me to draft a follow-up?";
  if (/support|refund|issue|problem|help|cancel/.test(m))
    return "I've opened a priority support ticket and drafted a reply for your approval. Estimated resolution: under 1 hour.";
  if (/email|follow.?up|sequence/.test(m))
    return "I've drafted a 3-step follow-up email sequence in your brand voice. It's queued and waiting for your one-click approval.";
  if (/\b(hi|hey|hello|yo)\b/.test(m))
    return "Hey! 👋 I can book appointments, answer pricing questions, qualify leads or open support tickets. What would you like to try?";
  return "Got it ✓ I've logged that request and triggered the matching automation. Your dashboard is updated — anything else I can handle?";
}

/* ============================================================
   DASHBOARD DATA
   ============================================================ */
export const conversationSeries = [
  { day: "D1", value: 22 },
  { day: "D2", value: 30 },
  { day: "D3", value: 26 },
  { day: "D4", value: 41 },
  { day: "D5", value: 38 },
  { day: "D6", value: 52 },
  { day: "D7", value: 48 },
  { day: "D8", value: 63 },
  { day: "D9", value: 57 },
  { day: "D10", value: 72 },
  { day: "D11", value: 68 },
  { day: "D12", value: 84 },
  { day: "D13", value: 79 },
  { day: "D14", value: 95 },
];

export const leadsByDay = [
  { day: "Mon", value: 14 },
  { day: "Tue", value: 22 },
  { day: "Wed", value: 18 },
  { day: "Thu", value: 27 },
  { day: "Fri", value: 23 },
  { day: "Sat", value: 31 },
  { day: "Sun", value: 37 },
];

export const automationStatus = [
  { name: "Support bot", status: "healthy" as const },
  { name: "Lead capture", status: "healthy" as const },
  { name: "Email sequence", status: "running" as const },
  { name: "CRM sync", status: "healthy" as const },
  { name: "Call agent", status: "idle" as const },
];

export const liveThread = [
  { who: "Customer · WhatsApp", role: "user" as const, text: "Hi, do you have the blue jacket in medium?" },
  {
    who: "NeuroFlow AI",
    role: "bot" as const,
    text: "Yes — 4 in stock. Want me to reserve one and send a checkout link?",
  },
  { who: "Customer · WhatsApp", role: "user" as const, text: "Yes please" },
  {
    who: "NeuroFlow AI",
    role: "bot" as const,
    text: 'Reserved ✓ Link sent. CRM updated & tagged "hot lead".',
  },
];
