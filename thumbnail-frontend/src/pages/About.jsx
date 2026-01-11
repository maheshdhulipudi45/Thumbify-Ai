import { motion } from 'framer-motion'
import { Sparkles, Rocket, Users, BarChart3 } from 'lucide-react'
import Title from '../components/Title'

export default function About() {
  return (
    <section className="relative mt-6 overflow-hidden py-16 sm:py-20 2xl:py-32 px-4 sm:px-6">

      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-600/10 via-purple-600/5 to-pink-600/10 blur-3xl" />

      <div className="max-w-6xl mx-auto">

        {/* ================= Page Title ================= */}
        <div className="text-center md:text-left">
          <Title
            title="About"
            heading="Built for creators who want more clicks"
            description="ThumbnailAI uses AI-powered design intelligence to help creators stand out and grow faster."
          />
        </div>

        {/* ================= Intro Section ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 180, damping: 26 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">
              Why ThumbnailAI?
            </h3>

            <p className="text-gray-300 leading-relaxed  text-justify text-left
 >
">
              In a world of endless content, thumbnails decide everything.
              ThumbnailAI was built to help creators win attention instantly.
            </p>

            <p className="text-gray-300 leading-relaxed  text-justify text-left
 ">
              Our AI studies contrast, facial emotion, text placement, and
              high-CTR design patterns used by top creators.
            </p>

            <p className="text-gray-300 leading-relaxed text-justify text-left
 ">
              No design skills. No complex tools. Just faster growth.
            </p>
          </motion.div>

          {/* Right Glass Card */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 180, damping: 26 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl"
          >
            <div className="space-y-8">

              <div>
                <h4 className="font-semibold mb-3">What we focus on</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Click-optimized thumbnails</li>
                  <li>• AI-powered creative decisions</li>
                  <li>• Fast & simple workflow</li>
                  <li>• Creator-first pricing</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Who it’s for</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• YouTubers & streamers</li>
                  <li>• Content creators</li>
                  <li>• Digital marketers</li>
                  <li>• Growth-focused teams</li>
                </ul>
              </div>

            </div>
          </motion.div>
        </div>

        {/* ================= How It Works ================= */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 180, damping: 26 }}
          className="mt-24"
        >
          <h3 className="text-2xl font-semibold text-center mb-12">
            How ThumbnailAI works
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Sparkles, title: 'Describe', desc: 'Explain your video idea or upload an image.' },
              { icon: Rocket, title: 'Generate', desc: 'AI designs thumbnails optimized for clicks.' },
              { icon: Users, title: 'Publish', desc: 'Download and upload instantly.' }
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center hover:border-indigo-500/40 transition"
              >
                <item.icon className="mx-auto mb-4 text-indigo-400" />
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ================= Stats ================= */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 180, damping: 26 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-24"
        >
          {[
            { value: '10K+', label: 'Thumbnails created' },
            { value: '3x', label: 'Higher CTR' },
            { value: '5 min', label: 'Design time' },
            { value: '100%', label: 'Creator focused' }
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center backdrop-blur"
            >
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* ================= Mission ================= */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 180, damping: 26 }}
          className="mt-24 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Our mission
          </h3>
          <p className="text-gray-300 leading-relaxed text-justify text-left
 ">
            Empower creators to turn ideas into eye-catching thumbnails that
            drive clicks, views, and sustainable growth — without design skills.
          </p>
        </motion.div>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 180, damping: 26 }}
          className="mt-28 text-center"
        >
          <div className="inline-block rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 p-[1px]">
            <div className="rounded-3xl bg-linear-to-b from-indigo-600 to-indigo-800/10 border border-indigo-500/30 px-10 py-8">
              <h3 className="text-2xl font-semibold mb-4">
                Ready to get more clicks?
              </h3>
              <p className="text-gray-300 mb-6">
                Create high-converting thumbnails in minutes.
              </p>
              <button className="px-8 py-3 rounded-xl  bg-linear-to-r from-pink-500 to-indigo-500 text-white transition font-medium">
                Get Started Free
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
