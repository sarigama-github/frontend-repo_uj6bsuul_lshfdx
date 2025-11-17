import { Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b border-white/60"
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2 min-w-0">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 shadow-sm" />
          <span className="text-lg font-semibold tracking-tight truncate">apifydata.dev</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#upload" className="hover:text-gray-900 transition-colors">Upload</a>
          <a href="#faq" className="hover:text-gray-900 transition-colors">Docs</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#signin" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Sign in</a>
          <a
            href="#signup"
            className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-black/90 active:scale-[0.98] transition"
          >
            Create account
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <a href="#signin" className="text-sm font-medium text-gray-700">Sign in</a>
          <button className="p-2 text-gray-700" aria-label="Open menu"><Menu size={20} /></button>
        </div>
      </div>
    </motion.header>
  );
}
