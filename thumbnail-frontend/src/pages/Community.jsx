import { motion } from 'framer-motion'
import Title from '../components/Title'
import { GhostButton } from '../components/Buttons'
import {
  UsersIcon,
  SparklesIcon,
  MessageCircleIcon,
  ArrowRightIcon
} from 'lucide-react'

export default function Community() {
  return (
    <section className="py-20 mt-7 2xl:py-32 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <Title
          title="Community"
          heading="Creators grow better together"
          description="Join a creator-first community focused on thumbnails, clicks, and real YouTube growth."
        />

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">

          {/* Card 1 */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 250, damping: 70 }}
            className="glass-panel rounded-2xl p-6 space-y-4"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
              <UsersIcon />
            </div>
            <h3 className="text-lg font-semibold">
              Creator Network
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Connect with YouTubers, creators, and marketers who are actively growing
              their channels using AI.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 250, damping: 70, delay: 0.1 }}
            className="glass-panel rounded-2xl p-6 space-y-4"
          >
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400">
              <SparklesIcon />
            </div>
            <h3 className="text-lg font-semibold">
              Thumbnail Feedback
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Share your thumbnails, get honest feedback, and learn what actually gets
              clicks and views.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 250, damping: 70, delay: 0.2 }}
            className="glass-panel rounded-2xl p-6 space-y-4"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <MessageCircleIcon />
            </div>
            <h3 className="text-lg font-semibold">
              Growth Discussions
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Learn about YouTube trends, AI workflows, and growth strategies from real
              creators.
            </p>
          </motion.div>
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 250, damping: 70, delay: 0.3 }}
          className="mt-20 rounded-3xl bg-linear-to-b from-indigo-600 to-indigo-800/10 border border-indigo-500/30 p-10 md:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20" />

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Be part of the ThumbnailAI community
            </h3>
            <p className="text-gray-200 max-w-2xl mx-auto mb-8">
              Learn faster, create better thumbnails, and grow your channel with creators
              who are serious about results.
            </p>

            <GhostButton className="px-10 py-3 gap-2   bg-linear-to-r from-pink-500 to-indigo-500 text-white border-white/40 hover:border-white hover:bg-white/10">
              Join the community
              <ArrowRightIcon size={20} />
            </GhostButton>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
