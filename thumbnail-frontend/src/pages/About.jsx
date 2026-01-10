import { motion } from 'framer-motion'
import Title from '../components/Title'

export default function About() {
  return (
    <section className="py-12 sm:py-16 md:py-20 2xl:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Page Title */}
        <div className="text-center md:text-left">
          <Title
            title="About"
            heading="Built for creators who want more clicks"
            description="ThumbnailAI is designed to help creators generate high-performing thumbnails using AI — faster, easier, and smarter."
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 220, damping: 60 }}
            className="space-y-5 text-center md:text-left"
          >
            <h3 className="text-lg sm:text-xl font-semibold">
              Why ThumbnailAI?
            </h3>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed sm:leading-loose max-w-xl mx-auto md:mx-0">
              On platforms like YouTube, your thumbnail decides whether someone clicks
              or scrolls past. ThumbnailAI was built to solve this exact problem.
            </p>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed sm:leading-loose max-w-xl mx-auto md:mx-0">
              We use AI to analyze visual patterns, contrast, text placement, and
              attention-grabbing styles to help creators stand out.
            </p>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed sm:leading-loose max-w-xl mx-auto md:mx-0">
              Whether you are a beginner or a professional, ThumbnailAI helps you save
              time and grow faster.
            </p>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 220, damping: 60, delay: 0.1 }}
            className="rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 p-5 sm:p-7 md:p-8 backdrop-blur text-center md:text-left"
          >
            <div className="space-y-5">
              <div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">
                  What we focus on
                </h4>
                <ul className="text-gray-300 text-xs sm:text-sm space-y-2 max-w-sm mx-auto md:mx-0">
                  <li>• High-click YouTube thumbnails</li>
                  <li>• AI-powered design assistance</li>
                  <li>• Fast & simple workflow</li>
                  <li>• Creator-friendly pricing</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">
                  Who it’s for
                </h4>
                <ul className="text-gray-300 text-xs sm:text-sm space-y-2 max-w-sm mx-auto md:mx-0">
                  <li>• YouTubers & streamers</li>
                  <li>• Content creators</li>
                  <li>• Marketers & agencies</li>
                  <li>• Anyone who wants more clicks</li>
                </ul>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Mission Section */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 220, damping: 60, delay: 0.2 }}
          className="mt-14 sm:mt-16 md:mt-20 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-3">
            Our mission
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed sm:leading-loose">
            Help creators turn ideas into eye-catching thumbnails that drive clicks,
            views, and growth — without design skills.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
