import { motion } from "framer-motion";

export default function Hero({ onGetStarted }) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium mb-4"
          >
            Turn CSV into REST in seconds
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight"
          >
            Upload your CSV. Get an instant API.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 max-w-xl"
          >
            apifydata.dev lets you create production-ready endpoints from your spreadsheets. No servers, no schema design, just ship.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <button
              onClick={onGetStarted}
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-white font-medium shadow hover:bg-black/90 active:scale-[0.98] transition"
            >
              Get started — it's free
            </button>
            <a href="#features" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 font-medium text-gray-800 hover:bg-gray-50 transition">
              Learn more
            </a>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-sm text-gray-500 grid grid-cols-2 gap-2 max-w-md"
          >
            <li>Unlimited reads</li>
            <li>Secure uploads</li>
            <li>Filter & paginate</li>
            <li>Simple pricing</li>
          </motion.ul>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-10 bg-gradient-to-br from-blue-200/40 to-indigo-200/40 blur-3xl -z-10" />
          <div className="rounded-xl border border-gray-200 bg-white/70 backdrop-blur p-4 shadow-sm">
            <div className="h-64 md:h-80 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-100 flex items-end p-6">
              <div>
                <div className="text-xs text-gray-500">POST</div>
                <div className="text-sm font-mono bg-gray-900 text-white rounded px-2 py-1 inline-block">/api/datasets/upload</div>
                <p className="mt-2 text-gray-600 text-sm">Upload a CSV and get a dataset id with ready-to-query endpoints.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
