import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-3xl"
        animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-cyan-400/20 to-violet-400/20 blur-3xl"
        animate={{ y: [0, 12, 0], x: [0, -12, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.02),transparent_60%)]" />
    </div>
  );
}
