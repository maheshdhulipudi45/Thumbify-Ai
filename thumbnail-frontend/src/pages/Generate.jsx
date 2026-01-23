import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import Title from "../components/Title";

/* ======================
   CONFIG
====================== */
const RATIOS = {
  "16:9": { width: 16, height: 9 },
  "1:1": { width: 1, height: 1 },
  "9:16": { width: 9, height: 16 },
};

const COLOR_SCHEMES = [
  { name: "Vibrant", bg: "from-pink-500/30 to-indigo-500/30", ring: "ring-pink-500" },
  { name: "Dark", bg: "from-gray-800 to-black", ring: "ring-gray-500" },
  { name: "Blue", bg: "from-sky-500/30 to-indigo-600/30", ring: "ring-sky-500" },
  { name: "Green", bg: "from-emerald-500/30 to-teal-500/30", ring: "ring-emerald-500" },
  { name: "Purple", bg: "from-violet-500/30 to-fuchsia-500/30", ring: "ring-violet-500" },
];

export default function Generate() {
  const [ratio, setRatio] = useState("16:9");
  const [color, setColor] = useState(COLOR_SCHEMES[0]);

  /* Responsive preview size */
  const baseWidth = 420;
  const previewWidth =
    typeof window !== "undefined" && window.innerWidth < 640 ? 280 : baseWidth;

  const previewHeight =
    (previewWidth * RATIOS[ratio].height) / RATIOS[ratio].width;

  return (
    <section className="py-15 mt-6 sm:py-16 md:py-20 2xl:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* ======================
           PAGE TITLE (LIKE ABOUT)
        ====================== */}
        <div className="text-center md:text-left mb-12 md:mb-16">
          <Title
            title="Generate"
            heading="Create high-click thumbnails in seconds"
            description="Customize your style, colors, and format — our AI helps you design thumbnails that stand out and get more clicks."
          />
        </div>

        {/* ======================
           MAIN GRID
        ====================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

          {/* LEFT PANEL */}
          <div className="glass-panel rounded-2xl p-5 sm:p-6 space-y-5">
            <h2 className="text-base sm:text-lg font-semibold">
              Create your thumbnail
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Describe your idea and customize your thumbnail.
            </p>

            {/* Title */}
            <div>
              <label className="text-xs sm:text-sm text-gray-300">
                Title or Topic
              </label>
              <input
                type="text"
                placeholder="e.g. 10 Tips for Better Sleep"
                className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-sm outline-none focus:border-indigo-500"
              />
            </div>

            {/* Aspect Ratio */}
            <div>
              <label className="text-xs sm:text-sm text-gray-300">
                Aspect Ratio
              </label>
              <div className="flex gap-2 sm:gap-3 mt-2 flex-wrap">
                {Object.keys(RATIOS).map((key) => (
                  <button
                    key={key}
                    onClick={() => setRatio(key)}
                    className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm border transition ${
                      ratio === key
                        ? "border-indigo-500 bg-indigo-500/10"
                        : "border-white/10 hover:border-white/30 text-gray-300"
                    }`}
                  >
                    {key}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Scheme */}
            <div>
              <label className="text-xs sm:text-sm text-gray-300">
                Color Scheme
              </label>
              <div className="flex gap-3 mt-2 flex-wrap">
                {COLOR_SCHEMES.map((scheme) => (
                  <button
                    key={scheme.name}
                    onClick={() => setColor(scheme)}
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br ${scheme.bg} ring-2 transition ${
                      color.name === scheme.name
                        ? `${scheme.ring} ring-offset-2 ring-offset-gray-950`
                        : "ring-transparent"
                    }`}
                    title={scheme.name}
                  />
                ))}
              </div>
            </div>

            {/* Style */}
            <div>
  <label className="text-xs sm:text-sm text-gray-300">
    Thumbnail Style
  </label>

  <select
  className="
    mt-2 w-full rounded-lg
   bg-white/5 border border-white/10 px-4 py-2 
   text-sm outline-none focus:border-indigo-500 resize-none
  "
>
  <option className="bg-indigo-950 text-white ">
    Bold & Graphic
  </option>
  <option className="bg-indigo-950 text-white">
    Minimal
  </option>
  <option className="bg-indigo-950 text-white">
    Dark & Cinematic
  </option>
  <option className="bg-indigo-950 text-white">
    Bright & Colorful
  </option>
</select>

</div>


            {/* Prompt */}
            <div>
              <label className="text-xs sm:text-sm text-gray-300">
                Additional prompts (optional)
              </label>
              <textarea
                rows={3}
                placeholder="Add mood, colors, emotions..."
                className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-sm outline-none focus:border-indigo-500 resize-none"
              />
            </div>

            {/* Button */}
            <button className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-semibold hover:opacity-90 transition">
              Generate Thumbnail
            </button>
          </div>

          {/* RIGHT PANEL */}
          <div className="glass-panel rounded-2xl p-5 sm:p-6">
            <h3 className="text-xs sm:text-sm font-medium text-gray-300 mb-4">
              Preview
            </h3>

            <div className="flex items-center justify-center min-h-[260px] sm:min-h-[400px]">
              <motion.div
                key={`${ratio}-${color.name}`}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                style={{ width: previewWidth, height: previewHeight }}
                className={`relative rounded-xl overflow-hidden border border-white/20 bg-gradient-to-br ${color.bg} flex items-center justify-center`}
              >
                <div className="text-center text-white/80 text-xs sm:text-sm">
                  <ImageIcon className="mx-auto mb-2 opacity-70" />
                  Your thumbnail preview
                  <p className="text-[10px] sm:text-xs opacity-70 mt-1">
                    {ratio} • {color.name}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
