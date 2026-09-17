import { useEffect } from 'react';
import { motion } from 'motion/react';
import { projects, settings } from '../data';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  useEffect(() => {
    // Force scroll to top on every page load/refresh
    window.scrollTo(0, 0);
    // Remove any leftover hash from the URL to prevent automatic jumping
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  return (
    <>
      {/* SECTION 1 - HERO */}
      <section className="hero">
        <div className="hero-grid-bg" aria-hidden="true"></div>
        <div className="container hero-inner">
          <motion.div 
            className="hero-copy"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="hero-title">
              YOUR GAME DESERVES<br />TO BE SEEN.
            </h1>
            <p className="hero-sub text-lg mt-6 text-[#6E6153]">
              I help indie games turn great ideas into attention, wishlists and communities.
            </p>
            <div className="hero-actions mt-10 flex gap-4">
              <a href="/#work" className="btn btn-primary">VIEW MY WORK ↓</a>
              <a href="/#contact" className="btn btn-ghost">LET'S TALK →</a>
            </div>
          </motion.div>

          <motion.div 
            className="hero-visual" aria-hidden="true"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-[#B7A3E3] rounded-[40px] rotate-6 scale-95 opacity-80 z-0"></div>
              <div className="absolute inset-0 bg-[#C2E2FA] rounded-[40px] -rotate-3 scale-95 opacity-80 z-0"></div>
              <div className="relative z-10 w-[260px] h-[300px] rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-white">
                 <img src={settings.heroPortrait} alt="Melisa Portrait" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="marquee" aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="marquee-track">
            <span>STRATEGY</span><span>•</span>
            <span>CONTENT</span><span>•</span>
            <span>STEAM</span><span>•</span>
            <span>COMMUNITY</span><span>•</span>
            <span>LAUNCH</span><span>•</span>
            <span>PR & OUTREACH</span><span>•</span>
            <span>STRATEGY</span><span>•</span>
            <span>CONTENT</span><span>•</span>
            <span>STEAM</span><span>•</span>
            <span>COMMUNITY</span><span>•</span>
            <span>LAUNCH</span><span>•</span>
            <span>PR & OUTREACH</span><span>•</span>
          </div>
          <div className="marquee-track">
            <span>STRATEGY</span><span>•</span>
            <span>CONTENT</span><span>•</span>
            <span>STEAM</span><span>•</span>
            <span>COMMUNITY</span><span>•</span>
            <span>LAUNCH</span><span>•</span>
            <span>PR & OUTREACH</span><span>•</span>
            <span>STRATEGY</span><span>•</span>
            <span>CONTENT</span><span>•</span>
            <span>STEAM</span><span>•</span>
            <span>COMMUNITY</span><span>•</span>
            <span>LAUNCH</span><span>•</span>
            <span>PR & OUTREACH</span><span>•</span>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 - WHAT I ACTUALLY DO */}
      <section className="py-24 bg-[#FFF9EB]" id="services">
        <motion.div 
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="section-title center !text-4xl md:!text-5xl !leading-tight">SO… WHAT CAN I DO<br/>FOR YOUR GAME?</motion.h2>
          <motion.p variants={fadeInUp} className="text-center mt-6 mb-16 text-lg text-[#6E6153] max-w-2xl mx-auto">From figuring out who should care about your game to getting them to actually click “Wishlist”.</motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.article variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-[#2B2118]/10 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 duration-300">
              <h3 className="font-['Baloo_2'] text-2xl font-bold text-[#FF8F8F] mb-4">🎯 STRATEGY</h3>
              <p className="text-[#6E6153] text-[1.05rem] leading-relaxed">Finding your audience, positioning and marketing direction.</p>
            </motion.article>
            <motion.article variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-[#2B2118]/10 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 duration-300">
              <h3 className="font-['Baloo_2'] text-2xl font-bold text-[#FF8F8F] mb-4">📱 CONTENT</h3>
              <p className="text-[#6E6153] text-[1.05rem] leading-relaxed">Social media content that feels like your game, not generic marketing.</p>
            </motion.article>
            <motion.article variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-[#2B2118]/10 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 duration-300">
              <h3 className="font-['Baloo_2'] text-2xl font-bold text-[#FF8F8F] mb-4">🛒 STEAM</h3>
              <p className="text-[#6E6153] text-[1.05rem] leading-relaxed">Store presence, wishlist campaigns and Steam-focused marketing.</p>
            </motion.article>
            <motion.article variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-[#2B2118]/10 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 duration-300">
              <h3 className="font-['Baloo_2'] text-2xl font-bold text-[#FF8F8F] mb-4">👥 COMMUNITY</h3>
              <p className="text-[#6E6153] text-[1.05rem] leading-relaxed">Building an audience before your game launches.</p>
            </motion.article>
            <motion.article variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-[#2B2118]/10 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 duration-300">
              <h3 className="font-['Baloo_2'] text-2xl font-bold text-[#FF8F8F] mb-4">🚀 LAUNCH</h3>
              <p className="text-[#6E6153] text-[1.05rem] leading-relaxed">Campaign planning and communication around your biggest moments.</p>
            </motion.article>
            <motion.article variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-[#2B2118]/10 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 duration-300">
              <h3 className="font-['Baloo_2'] text-2xl font-bold text-[#FF8F8F] mb-4">📰 PR & OUTREACH</h3>
              <p className="text-[#6E6153] text-[1.05rem] leading-relaxed">Getting your game in front of the right people.</p>
            </motion.article>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3 - WHY ME? */}
      <section className="py-32" id="why-me">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
            
            {/* Left side: Sticky Heading */}
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="font-['Baloo_2'] font-bold text-5xl md:text-6xl text-[#2B2118] leading-[1.1] m-0"
                >
                  WHY WORK<br/>WITH ME?
                </motion.h2>
              </div>
            </div>

            {/* Right side: Vertical List */}
            <div className="lg:w-2/3">
              <motion.div 
                className="relative pl-16 md:pl-20 space-y-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                {/* Connecting Line behind dots */}
                <div className="absolute top-2 bottom-2 left-[5px] md:left-[7px] w-[2px] bg-[#B7A3E3]/40 z-0 rounded-full"></div>

                <motion.div variants={fadeInUp} className="relative z-10">
                  <div className="absolute -left-[59px] md:-left-[73px] top-[7px] w-[12px] h-[12px] rounded-full bg-[#B7A3E3]"></div>
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl md:text-2xl text-[#2B2118] mb-4">🎮 I UNDERSTAND INDIE GAMES.</h3>
                  <p className="text-lg md:text-xl text-[#6E6153] leading-relaxed max-w-2xl">
                    I work closely with indie teams, so I know that marketing often means doing a lot with limited time, people and budget.
                  </p>
                </motion.div>

                <motion.div variants={fadeInUp} className="relative z-10">
                  <div className="absolute -left-[59px] md:-left-[73px] top-[7px] w-[12px] h-[12px] rounded-full bg-[#B7A3E3]"></div>
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl md:text-2xl text-[#2B2118] mb-4">🧠 I DON'T BELIEVE IN POSTING JUST TO POST.</h3>
                  <p className="text-lg md:text-xl text-[#6E6153] leading-relaxed max-w-2xl">
                    Every campaign starts with a question: who are we trying to reach, and why would they care?
                  </p>
                </motion.div>

                <motion.div variants={fadeInUp} className="relative z-10">
                  <div className="absolute -left-[59px] md:-left-[73px] top-[7px] w-[12px] h-[12px] rounded-full bg-[#B7A3E3]"></div>
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl md:text-2xl text-[#2B2118] mb-4">🌱 I'M BIG ON ORGANIC GROWTH.</h3>
                  <p className="text-lg md:text-xl text-[#6E6153] leading-relaxed max-w-2xl">
                    Content, community, Steam, Reddit, creators and social media can work together to build momentum without relying entirely on paid ads.
                  </p>
                </motion.div>

                <motion.div variants={fadeInUp} className="relative z-10">
                  <div className="absolute -left-[59px] md:-left-[73px] top-[7px] w-[12px] h-[12px] rounded-full bg-[#B7A3E3]"></div>
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl md:text-2xl text-[#2B2118] mb-4">🤝 I'M PART OF YOUR TEAM.</h3>
                  <p className="text-lg md:text-xl text-[#6E6153] leading-relaxed max-w-2xl">
                    I don't just hand you a strategy and disappear. I work alongside developers to turn what makes their game special into something people want to talk about.
                  </p>
                </motion.div>

              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - SELECTED WORK */}
      <section className="py-24 bg-[#FFF9EB]" id="work">
        <motion.div 
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="section-title center mb-16 !text-4xl md:!text-5xl">I'VE WORKED ON GAMES LIKE THESE ↓</motion.h2>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {projects.map((project) => (
              <motion.article variants={fadeInUp} key={project.slug} className="group cursor-pointer">
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-[#2B2118]/10 bg-[#C2E2FA]">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-[0.8rem] font-bold tracking-widest text-[#2B2118] opacity-80 uppercase mb-3">{project.tag}</p>
                <h3 className="font-['Baloo_2'] text-3xl font-bold text-[#2B2118] mb-3 group-hover:text-[#FF8F8F] transition-colors">{project.title}</h3>
                <p className="text-[#6E6153] text-[1.05rem] leading-relaxed mb-6">{project.shortDescription}</p>
                <a href={project.steamUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-[#2B2118] hover:text-[#FF8F8F] transition-colors text-sm uppercase tracking-wide">
                  CHECK ON STEAM <span aria-hidden="true" className="text-xl leading-none">→</span>
                </a>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION 5 - DIFFERENTIATOR */}
      <section className="bg-[#B7A3E3] text-[#2B2118] py-32 overflow-hidden relative" id="differentiator">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(43,33,24,1) 1px, transparent 1px), linear-gradient(90deg, rgba(43,33,24,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <motion.div 
          className="container text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="font-['Baloo_2'] text-5xl md:text-[5rem] font-bold leading-none mb-6 text-[#2B2118]">
            I DON'T JUST<br />MAKE POSTS.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl md:text-3xl text-[#2B2118] font-bold mb-20 tracking-wide opacity-80">
            I BUILD REASONS FOR PEOPLE<br />TO CARE ABOUT YOUR GAME.
          </motion.p>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 0.3 }
              }
            }}
            className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 font-['Baloo_2'] font-bold text-xl md:text-2xl"
          >
            <motion.div variants={fadeInUp} className="bg-white px-8 py-5 rounded-xl border border-[#2B2118]/10 w-full lg:w-auto shadow-sm">GAME</motion.div>
            <motion.div variants={fadeInUp} className="text-[#2B2118] rotate-90 lg:rotate-0 text-3xl opacity-60">→</motion.div>
            <motion.div variants={fadeInUp} className="bg-white px-8 py-5 rounded-xl border border-[#2B2118]/10 w-full lg:w-auto shadow-sm">STORY / POSITIONING</motion.div>
            <motion.div variants={fadeInUp} className="text-[#2B2118] rotate-90 lg:rotate-0 text-3xl opacity-60">→</motion.div>
            <motion.div variants={fadeInUp} className="bg-white px-8 py-5 rounded-xl border border-[#2B2118]/10 w-full lg:w-auto shadow-sm">CONTENT</motion.div>
            <motion.div variants={fadeInUp} className="text-[#2B2118] rotate-90 lg:rotate-0 text-3xl opacity-60">→</motion.div>
            <motion.div variants={fadeInUp} className="bg-white px-8 py-5 rounded-xl border border-[#2B2118]/10 w-full lg:w-auto shadow-sm">COMMUNITY</motion.div>
            <motion.div variants={fadeInUp} className="text-[#2B2118] rotate-90 lg:rotate-0 text-3xl opacity-60">→</motion.div>
            <motion.div variants={fadeInUp} className="bg-[#2B2118] text-white px-10 py-5 rounded-xl w-full lg:w-auto shadow-xl">WISHLIST</motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 6 - HOW I WORK */}
      <section className="py-32 bg-white" id="process">
        <motion.div 
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="section-title center mb-24 !text-4xl md:!text-5xl">HOW WE'D WORK TOGETHER</motion.h2>
          
          <div className="grid md:grid-cols-4 gap-12 relative max-w-6xl mx-auto">
            <div className="hidden md:block absolute top-10 left-12 right-12 h-[2px] bg-[#FF8F8F]/20 z-0"></div>
            
            <motion.div variants={fadeInUp} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white border-[3px] border-[#FF8F8F] flex items-center justify-center text-2xl font-bold font-['Baloo_2'] text-[#FF8F8F] mb-8 shadow-sm">01</div>
              <h3 className="text-xl font-bold mb-4 text-[#2B2118]">UNDERSTAND</h3>
              <p className="text-[#6E6153] leading-relaxed">I learn your game, audience, goals and what makes it different.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white border-[3px] border-[#FF8F8F] flex items-center justify-center text-2xl font-bold font-['Baloo_2'] text-[#FF8F8F] mb-8 shadow-sm">02</div>
              <h3 className="text-xl font-bold mb-4 text-[#2B2118]">STRATEGIZE</h3>
              <p className="text-[#6E6153] leading-relaxed">We figure out what to say, where to say it and who we're saying it to.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white border-[3px] border-[#FF8F8F] flex items-center justify-center text-2xl font-bold font-['Baloo_2'] text-[#FF8F8F] mb-8 shadow-sm">03</div>
              <h3 className="text-xl font-bold mb-4 text-[#2B2118]">CREATE</h3>
              <p className="text-[#6E6153] leading-relaxed">Content, campaigns, community initiatives and whatever the game needs.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white border-[3px] border-[#FF8F8F] flex items-center justify-center text-2xl font-bold font-['Baloo_2'] text-[#FF8F8F] mb-8 shadow-sm">04</div>
              <h3 className="text-xl font-bold mb-4 text-[#2B2118]">LEARN & ADAPT</h3>
              <p className="text-[#6E6153] leading-relaxed">We look at what's working, what's not and keep improving.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 7 - ABOUT MELISA */}
      <section className="py-24 bg-[#FFF9EB]" id="about">
        <motion.div 
          className="container max-w-5xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-20 items-center">
            <motion.div variants={fadeInUp} className="flex justify-center">
              <div className="w-[280px] h-[340px] rounded-2xl overflow-hidden border-4 border-white shadow-xl rotate-[-2deg]">
                <img src={settings.aboutPhoto} alt="Melisa Akgül" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2 className="section-title !text-5xl mb-8">HI, I'M MELISA. 👋</h2>
              <div className="space-y-6 text-[#6E6153] text-lg leading-relaxed">
                <p>
                  I'm a game marketer who genuinely enjoys figuring out why people fall in love with games.
                </p>
                <p>
                  I've worked across indie game marketing, social media, content, community and campaigns, and I love working with teams that are building something they genuinely care about.
                </p>
              </div>
              
              <div className="mt-10 p-8 bg-[#FF8F8F]/10 rounded-2xl border-l-4 border-[#FF8F8F]">
                <p className="text-[1.1rem] font-medium text-[#6E6153] italic mb-4">
                  If you're making a game and thinking:<br/>
                  “we should probably start marketing this…”
                </p>
                <p className="text-2xl font-bold font-['Baloo_2'] text-[#FF8F8F] leading-tight">
                  Hi.<br/>
                  That's literally what I'm here for.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 8 - FINAL CTA */}
      <section className="py-32 bg-white" id="contact">
        <motion.div 
          className="container max-w-4xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="font-['Baloo_2'] text-5xl md:text-7xl font-bold leading-none mb-10 text-[#2B2118]">
            LET'S TALK ABOUT<br />YOUR GAME.
          </motion.h2>
          <motion.div variants={fadeInUp} className="text-xl md:text-[1.35rem] text-[#6E6153] mb-12 leading-relaxed space-y-2">
            <p>Still in development?</p>
            <p>Getting ready for launch?</p>
            <p>Already launched and struggling to get noticed?</p>
          </motion.div>
          <motion.p variants={fadeInUp} className="text-2xl font-bold font-['Baloo_2'] text-[#FF8F8F] mb-14">Let's figure it out.</motion.p>
          
          <motion.a variants={fadeInUp} href={`mailto:${settings.email}`} className="btn btn-primary btn-large mb-20 inline-flex">
            LET'S WORK TOGETHER →
          </motion.a>

          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-[0.9rem] font-bold tracking-widest text-[#2B2118]">
            <a href={`mailto:${settings.email}`} className="hover:text-[#FF8F8F] transition-colors">EMAIL</a>
            <a href={settings.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF8F8F] transition-colors">LINKEDIN</a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
