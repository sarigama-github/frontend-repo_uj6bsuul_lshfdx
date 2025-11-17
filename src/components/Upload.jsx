import { useRef, useState } from "react";
import { motion } from "framer-motion";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

export default function Upload() {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const onDrop = (e) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f) handleUpload(f);
  };

  const handleUpload = async (file) => {
    setError(null);
    setResult(null);
    setLoading(true);
    try {
      const form = new FormData();
      form.append("file", file);
      const res = await fetch(`${API_BASE}/api/datasets/upload`, {
        method: "POST",
        body: form,
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      setResult(data);
    } catch (e) {
      setError(String(e.message || e));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="upload" className="py-20 bg-gradient-to-b from-white to-gray-50 border-t border-white/50">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-dashed border-gray-300 bg-white/70 backdrop-blur p-10 text-center shadow-sm"
        >
          <div
            className="rounded-xl border border-gray-200 bg-gray-50 p-10 cursor-pointer hover:bg-gray-100 transition"
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop}
            onClick={() => inputRef.current?.click()}
          >
            <p className="text-sm text-gray-600">Drag and drop your CSV here, or click to browse</p>
            <input
              ref={inputRef}
              type="file"
              accept=".csv"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) {
                  setFileName(f.name);
                  handleUpload(f);
                }
              }}
            />
            {fileName && <p className="mt-2 text-xs text-gray-500">Selected: {fileName}</p>}
            <div className="mt-6">
              <button
                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-white font-medium shadow disabled:opacity-50 active:scale-[0.98] transition"
                disabled={loading}
              >
                {loading ? "Uploading..." : "Upload CSV"}
              </button>
            </div>
          </div>
          {error && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-sm text-red-600">{error}</motion.p>
          )}
          {result && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 text-left">
              <h3 className="text-lg font-semibold">Dataset created</h3>
              <p className="text-sm text-gray-600 mt-1">Columns: {result.columns.join(", ")}</p>
              <div className="mt-4 rounded-lg bg-gray-50 p-4 border border-gray-200 font-mono text-sm overflow-x-auto">
                <div>GET {API_BASE}/api/datasets/{result.id}</div>
                <div>GET {API_BASE}/api/datasets/{result.id}/rows?limit=50</div>
                <div>GET {API_BASE}/api/datasets/{result.id}/rows?country=US&amp;limit=100</div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
