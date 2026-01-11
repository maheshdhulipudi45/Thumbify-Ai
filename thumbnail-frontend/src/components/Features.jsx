import { useRef } from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Eye,
  SlidersHorizontal
} from 'lucide-react'
import Title from './Title'

const featuresData = [
  {
    icon: Sparkles,
    title: 'Smart Analysis',
    desc: 'Our AI analyzes your video content to suggest the most clickable thumbnail ideas.'
  },
  {
    icon: Eye,
    title: 'Eye-Catching Designs',
    desc: 'Generate vibrant, high-contrast thumbnails that stand out in crowded feeds.'
  },
  {
    icon: SlidersHorizontal,
    title: 'Fully Editable',
    desc: 'Get layered designs that you can tweak, customize, and perfect anytime.'
  }
]

export default function Features() {
  const refs = useRef([])

  return (
    <section id="features" className="py-20 2xl:py-32">
      <div className="max-w-6xl mx-auto px-4">

        <Title
          title="Why Us"
          heading="Built to help creators get more clicks"
          description="Powerful AI features designed specifically for YouTubers and content creators."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuresData.map((feature, i) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={i}
                ref={(el) => (refs.current[i] = el)}
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 60,
                  delay: i * 0.15
                }}
                className="rounded-2xl p-6 bg-white/5 backdrop-blur border border-white/10 hover:border-indigo-400/40 transition duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
                  <Icon className="text-indigo-400" size={22} />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed text-left sm:text-justify">
                  {feature.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
