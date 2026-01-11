import { footerLinks } from '../assets/dummy-data'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      className="bg-black/50 backdrop-blur-md pt-10 pb-9 text-gray-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-white/10">
          
          {/* Left section */}
          <div>
            <img src="/thumbifyai-logo.svg" alt="logo" className="h-9" />
            <p className="max-w-[410px] mt-6 text-sm leading-relaxed">
              ThumbnailAI helps creators generate high-click YouTube thumbnails using AI. 
              Save time, stand out in feeds, and grow your channel faster.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-base text-white md:mb-5 mb-2">
                  {section.title}
                </h3>

                <ul className="text-sm space-y-1">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.url}
                        className="hover:text-white transition"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <p className="py-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} ThumbnailAI. Built for creators.
        </p>
      </div>
    </motion.footer>
  )
}
