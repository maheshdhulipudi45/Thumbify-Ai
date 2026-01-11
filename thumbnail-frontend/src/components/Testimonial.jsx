import React from 'react'

const cardsData = [
  {
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
    name: 'Rohit Sharma',
    handle: '@rohitcreates',
    date: 'July 12, 2025',
    text: 'ThumbifyAI completely changed my CTR. My views doubled within a week.'
  },
  {
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
    name: 'Ananya Verma',
    handle: '@ananyatube',
    date: 'July 18, 2025',
    text: 'I have zero design skills, but my thumbnails now look professional.'
  },
  {
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
    name: 'Karthik R',
    handle: '@karthikedits',
    date: 'July 25, 2025',
    text: 'Best AI thumbnail tool I’ve used. Fast, clean, and click-focused.'
  },
  {
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
    name: 'Sneha Patel',
    handle: '@snehagrows',
    date: 'August 2, 2025',
    text: 'CTR improved instantly. ThumbifyAI saves me hours every week.'
  }
]

const TestimonialCard = ({ card }) => {
  return (
    <div className="
      p-5 rounded-2xl mx-4 w-72 shrink-0
       backdrop-blur-xl
      border border-white/10
      shadow-lg hover:shadow-indigo-500/10
      transition-all duration-300
    ">
      {/* Header */}
      <div className="flex gap-3 items-center">
        <img
          className="w-11 h-11 rounded-full object-cover border border-white/10"
          src={card.image}
          alt={card.name}
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <p className="font-medium text-sm text-white">
              {card.name}
            </p>
            <span className="text-xs text-indigo-400 font-medium">
              ✔ Verified
            </span>
          </div>
          <span className="text-xs text-gray-400">
            {card.handle}
          </span>
        </div>
      </div>

      {/* Testimonial */}
      <p className="text-sm py-4 text-gray-300 leading-relaxed text-left sm:text-justify">
        “{card.text}”
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between text-gray-400 text-xs">
        <span>Posted on X</span>
        <span>{card.date}</span>
      </div>
    </div>
  )
}

export default function TestimonialsMarquee() {
  return (
    <>
      {/* Animation styles */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .marquee-inner {
          animation: marqueeScroll 32s linear infinite;
        }

        .marquee-reverse {
          animation-direction: reverse;
        }

        .marquee-inner:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="
        relative py-24 overflow-hidden
      ">
        {/* background glow */}
        <div className="absolute inset-0 -z-10  blur-3xl" />

        {/* Title */}
        <div className="max-w-5xl mx-auto text-center mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Loved by creators worldwide
          </h2>
          <p className="text-gray-400 mt-2">
            Real feedback from creators using ThumbifyAI to grow faster.
          </p>
        </div>

        {/* Row 1 */}
        <div className="relative max-w-5xl mx-auto overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-24 " />
          <div className="marquee-inner flex min-w-[200%] py-6">
            {[...cardsData, ...cardsData].map((card, i) => (
              <TestimonialCard key={i} card={card} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-24  " />
        </div>

        {/* Row 2 */}
        <div className="relative max-w-5xl mx-auto overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-24 " />
          <div className="marquee-inner marquee-reverse flex min-w-[200%] py-6">
            {[...cardsData, ...cardsData].map((card, i) => (
              <TestimonialCard key={i} card={card} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-24 " />
        </div>
      </section>
    </>
  )
}
