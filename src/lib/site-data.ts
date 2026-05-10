import { Factory, Building2, Wrench, Settings, Sun, Zap, Cable, Plug, Battery, BatteryCharging, Lightbulb, SlidersHorizontal, Fuel, ShieldCheck, Snowflake, Hammer, Activity, Power, Sparkles } from "lucide-react";

export const services = [
  { icon: Factory, title: "Industrial Electrical Work", desc: "End-to-end industrial electrical installation, planning and execution for plants & factories." },
  { icon: Building2, title: "Commercial Electrical Work", desc: "Reliable electrical systems for offices, malls, hospitals and commercial complexes." },
  { icon: Hammer, title: "Electrical Project Work", desc: "Turnkey project execution from design and procurement to commissioning." },
  { icon: Wrench, title: "Electrical Maintenance", desc: "Preventive and breakdown maintenance to keep your operations running 24/7." },
  { icon: Sun, title: "Solar Energy Solutions", desc: "Customized rooftop & ground-mounted solar power plant solutions." },
  { icon: Sparkles, title: "Solar Panel Erections", desc: "Professional structure & module erection for utility-scale solar projects." },
  { icon: Plug, title: "LT & HT Terminations", desc: "Precision LT & HT cable terminations with quality compliance." },
  { icon: Cable, title: "LT & HT Cable Joints", desc: "Expert jointing of LT & HT cables using approved kits and methods." },
  { icon: Activity, title: "LT & HT Cable Laying", desc: "Trenching, ducting and full cable laying for HT/LT distribution networks." },
  { icon: Zap, title: "Transformer Maintenance", desc: "Routine maintenance, oil testing and overhauling of power transformers." },
  { icon: Battery, title: "UPS Maintenance", desc: "Preventive maintenance and battery health checks for UPS systems." },
  { icon: BatteryCharging, title: "Inverter Services", desc: "Inverter overhauling, repairs and AMC for solar & industrial inverters." },
  { icon: Lightbulb, title: "LED Lighting Solutions", desc: "Energy-efficient LED lighting design and installation." },
  { icon: SlidersHorizontal, title: "Lighting Controls", desc: "Smart automation & control systems for industrial lighting." },
  { icon: Fuel, title: "Generators", desc: "DG set installation, AMC and 24/7 emergency repair services." },
  { icon: ShieldCheck, title: "Electrical Safety", desc: "Audits, earthing, lightning protection and safety compliance." },
  { icon: Settings, title: "AC Fault Rectifications", desc: "Quick diagnosis and rectification of AC electrical faults." },
  { icon: Power, title: "Wiring Upgrades", desc: "Modern wiring upgrades for safety, capacity and code compliance." },
  { icon: Snowflake, title: "Air Conditioning Repairs", desc: "Repair and servicing of split, window and central AC systems." },
];

export const projects = [
  {
    name: "Adani Green Energy",
    capacity: "648 MW",
    location: "Solar Power Plant",
    works: ["Skilled Manpower Supply", "Inverter Overhauling & Non-Overhauling", "String Combiner Box Maintenance", "Switchgear Maintenance", "HT Cable Joint Works", "LT Cable Crimping & Glanding"],
  },
  {
    name: "NLC – Kadamangalam",
    capacity: "100 MW",
    location: "Solar Power Plant",
    works: ["Skilled Manpower Supply", "PCB Installation at String Monitoring Box"],
  },
  {
    name: "FEBL Global – Vilaththikulam",
    capacity: "60 MW",
    location: "Solar Power Plant",
    works: ["HT Cable Joint Works", "PV Module Junction Box Repair"],
  },
  {
    name: "Bharathidasan University",
    capacity: "500 KW",
    location: "Trichy",
    works: ["Inverter Service", "Inverter Duty Transformer Maintenance", "PV Module JB Box Repair"],
  },
  {
    name: "Crescent Solar Power Plant",
    capacity: "15 MW",
    location: "Kamuthi",
    works: ["String Fault Rectification", "String Conduit Laying", "33KV Vacuum Circuit Breaker Maintenance"],
  },
];

export const testimonials = [
  { name: "Rajesh Kumar", role: "Plant Manager, Solar EPC", rating: 5, quote: "VS Electrical delivered our HT cable joint works ahead of schedule with flawless execution. Their technicians are top-class." },
  { name: "Priya Subramanian", role: "Facility Head, Commercial Project", rating: 5, quote: "Professional, prompt and transparent. From wiring upgrades to maintenance AMC, they have been reliable for years." },
  { name: "Arun Vetri", role: "Project Director, EPC Firm", rating: 5, quote: "Their inverter overhauling and switchgear maintenance saved us significant downtime. Highly recommended." },
];

export const contact = {
  phones: ["+91 94866 72632", "+91 63837 35253"],
  email: "vselectricworld@gmail.com",
  whatsapp: "919486672632",
};
