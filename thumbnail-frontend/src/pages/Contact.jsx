import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast, ToastContainer } from 'react-toastify'
import { User, Mail, MessageSquare } from 'lucide-react'
import Title from '../components/Title'
import 'react-toastify/dist/ReactToastify.css'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill all fields')
      return
    }

    toast.success('Message sent successfully !')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section className="relative mt-7 overflow-hidden py-16 sm:py-20 2xl:py-32 px-4 sm:px-6">

      {/* Background glow (same as About) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-600/10 via-purple-600/5 to-pink-600/10 blur-3xl" />

      <div className="max-w-6xl mx-auto">

        {/* ================= Page Title (SAME AS ABOUT) ================= */}
        <div className="text-center md:text-left">
          <Title
            title="Contact"
            heading="Let’s build better thumbnails together"
            description="Have questions, feedback, or feature ideas? We’d love to hear from you."
          />
        </div>

        {/* ================= Contact Form ================= */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 180, damping: 26 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          {/* Gradient Border */}
          <div className="relative p-[1px] rounded-3xl bg-gradient-to-br from-indigo-500/40 via-white/10 to-pink-500/40">
            <div className="rounded-3xl bg-black/70 backdrop-blur-xl p-8 sm:p-10">

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name */}
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-xl bg-white/5 border border-white/10 pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-400/60"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl bg-white/5 border border-white/10 pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-400/60"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-gray-400" size={18} />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us how we can help..."
                    className="w-full rounded-xl bg-white/5 border border-white/10 pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-400/60 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-medium bg-gradient-to-r from-pink-500 to-indigo-500 hover:opacity-90 transition"
                >
                  Send Message
                </button>

              </form>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ================= Toastify ================= */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="dark"
        toastStyle={{
          background: 'rgba(2,6,23,0.85)',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(12px)',
          color: '#fff'
        }}
      />
    </section>
  )
}
