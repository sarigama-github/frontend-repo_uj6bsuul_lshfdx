import { Upload, Database, Search, Code } from "lucide-react";
import { motion } from "framer-motion";

const feats = [
  { icon: Upload, title: "One-click upload", desc: "Drag-and-drop your CSV and we do the rest." },
  { icon: Database, title: "Auto storage", desc: "Your rows are stored and indexed for fast reads." },
  { icon: Search, title: "Query with params", desc: "Filter, paginate, and retrieve exactly what you need." },
  { icon: Code, title: "Clean REST endpoints", desc: "Consistent URLs you can ship to production." }
];

export default function Features() {
  return (
    <section id="features" className="py-20 border-t border-white/50">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } } }}
          className="grid md:grid-cols-4 gap-6"
        >
          {feats.map((f, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              className="group rounded-xl border border-gray-200 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
