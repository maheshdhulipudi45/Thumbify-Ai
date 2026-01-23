import { ArrowRightIcon } from 'lucide-react'
import { GhostButton } from './Buttons'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function CTA() {
  const navigate = useNavigate();
  return (
    <section className="py-11 2xl:pb-32 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="rounded-3xl bg-linear-to-b from-indigo-600 to-indigo-800/10 border border-violet-500/20 p-12 md:p-16 text-center relative overflow-hidden">
          
          {/* noise overlay */}
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20" />

          <div className="relative z-10">
            <motion.h2
              className="text-2xl sm:text-4xl font-semibold mb-6"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 250, damping: 70, mass: 1 }}
            >
              Ready to create thumbnails that get more clicks?
            </motion.h2>

            <motion.p
              className="max-sm:text-sm text-slate-300 mb-10 max-w-xl mx-auto"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                stiffness: 250,
                damping: 70,
                mass: 1,
                delay: 0.2
              }}
            >
              Use AI to generate scroll-stopping YouTube thumbnails in seconds and grow your channel faster.
            </motion.p>

            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                stiffness: 250,
                damping: 70,
                mass: 1,
                delay: 0.3
              }}
            >
              <GhostButton onClick={()=>navigate("/generate")}
               className="px-8 py-3 gap-2   bg-linear-to-r from-pink-500 to-indigo-500 text-white border-indigo-400/40 hover:border-indigo-400 hover:bg-indigo-500/10">
                Generate thumbnails now
                <ArrowRightIcon size={20} />
              </GhostButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
