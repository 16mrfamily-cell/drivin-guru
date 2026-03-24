import Nav from '../components/Nav';
import Marquee from '../components/Marquee';
import Footer from '../components/Footer';
import { DGMark } from '../components/DGMark';

export default function Home() {
  return (
    <main className="bg-ink min-h-screen">
      <Nav />

      {/* ── HERO ── */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-end pb-16 pt-24 px-4 sm:px-8 lg:px-14 overflow-hidden bg-ink">
        {/* Background text */}
        <div
          className="absolute top-1/2 -translate-y-1/2 left-[-1rem] font-syne font-black text-white/[0.03] select-none pointer-events-none leading-none"
          style={{ fontSize: 'clamp(10rem, 28vw, 26rem)', letterSpacing: '-4px', whiteSpace: 'nowrap' }}
        >
          DG
        </div>

        {/* Lime diagonal panel - desktop only */}
        <div
          className="hidden lg:block absolute top-0 right-0 w-[42%] h-full bg-lime"
          style={{ clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0% 100%)' }}
        />

        {/* L Plate on lime panel - desktop only */}
        <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-[8%] items-center justify-center" style={{ zIndex: 2 }}>
          <LPlate size={240} />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-6 animate-fadeUp opacity-0" style={{ animationFillMode: 'forwards' }}>
            <span className="w-8 h-0.5 bg-lime" />
            <span className="font-syne font-bold text-xs tracking-[3px] uppercase text-lime">
              Nationwide · DVSA Approved · 100% Recommended
            </span>
          </div>

          <h1
            className="font-syne font-black leading-[0.88] tracking-tight animate-fadeUp opacity-0"
            style={{ fontSize: 'clamp(4rem, 12vw, 9rem)', letterSpacing: '-2px', animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            {/* L as L-plate */}
            <span className="block text-lime" style={{ WebkitTextStroke: '2px #CAFF00', color: 'transparent' }}>
              <span
                className="inline-flex items-center justify-center bg-white rounded overflow-hidden border-4 border-[#ccc] align-middle mr-1"
                style={{ width: '0.72em', height: '0.72em', verticalAlign: 'top', position: 'relative', top: '0.06em' }}
              >
                <span
                  className="font-black"
                  style={{
                    color: '#CC0000',
                    fontSize: '0.75em',
                    lineHeight: 1,
                    fontFamily: 'Arial Black, Arial, sans-serif',
                    WebkitTextStroke: '0.04em #CC0000',
                    paintOrder: 'stroke fill',
                  }}
                >
                  L
                </span>
              </span>
              EARN
            </span>
            <span className="block text-white">THE</span>
            <span className="block text-lime">ROAD.</span>
          </h1>

          <p
            className="font-syne font-medium text-xs sm:text-sm tracking-[4px] uppercase text-white/35 mt-5 animate-fadeUp opacity-0"
            style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
          >
            Learn The Safe Way, Right Away
          </p>

          <div
            className="flex flex-wrap gap-3 mt-8 animate-fadeUp opacity-0"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            <a
              href="#book"
              className="bg-lime text-ink font-syne font-bold text-sm tracking-widest uppercase px-6 py-4 rounded hover:bg-white transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              Book a Lesson ↗
            </a>
            <a
              href="https://wa.me/447360271186?text=Hi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white font-syne font-bold text-sm tracking-widest uppercase px-6 py-4 rounded hover:bg-[#1db954] transition-all hover:-translate-y-0.5"
            >
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
            <a
              href="#courses"
              className="border border-white/25 text-white font-syne font-bold text-sm tracking-widest uppercase px-6 py-4 rounded hover:border-lime hover:text-lime transition-all"
            >
              View Courses
            </a>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap gap-8 sm:gap-12 mt-12 pt-8 border-t border-white/[0.07] animate-fadeUp opacity-0"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            {[
              { n: '100%', l: 'Recommend' },
              { n: '★★★★★', l: 'Highly Trusted' },
              { n: '7', l: 'Days a Week' },
            ].map(({ n, l }) => (
              <div key={l}>
                <div className="font-syne font-black text-3xl sm:text-4xl text-lime leading-none">{n}</div>
                <div className="font-syne text-xs tracking-widest uppercase text-white/35 mt-1.5">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile L plate */}
        <div className="flex lg:hidden justify-center mt-10">
          <LPlate size={140} />
        </div>
      </section>

      <Marquee />

      {/* ── COURSES ── */}
      <section id="courses" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-14 bg-ink">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-0.5 bg-lime" />
                <span className="font-syne font-bold text-xs tracking-[3px] uppercase text-lime">What We Offer</span>
              </div>
              <h2 className="font-syne font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
                Pick Your <span className="text-lime">Course</span>
              </h2>
              <p className="text-white/45 text-sm sm:text-base mt-3 max-w-md leading-relaxed">
                Every learner is different. Every lesson is tailored to you.
              </p>
            </div>
            <a
              href="#book"
              className="flex-shrink-0 bg-lime text-ink font-syne font-bold text-sm tracking-widest uppercase px-6 py-3 rounded hover:bg-white transition-colors"
            >
              Book Today ↗
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5">
            {[
              { num: '01', icon: '🚗', level: 'Daytime', name: 'Single Lesson', desc: 'Your standard 60-minute lesson, Mon–Fri 8am–4pm. Fully tailored to your level.', price: '£40', tag: 'Per Hour', highlight: false },
              { num: '02', icon: '🌙', level: 'Evening & Weekend', name: 'Flexible Lessons', desc: 'Evenings from 4pm and all day Saturday & Sunday. Same expert instruction.', price: '£50', tag: 'Per Hour', highlight: true },
              { num: '03', icon: '🎯', level: 'Test Prep', name: 'Mock Test Session', desc: 'A full 2-hour test simulation. Real routes, honest feedback. Know where you stand.', price: '£80', tag: '2 Hours', highlight: false },
              { num: '04', icon: '⚡', level: 'Intensive', name: 'Intensive Course', desc: 'Get test-ready in weeks not months. Get in touch to discuss your bespoke package.', price: 'Enquire', tag: 'Bespoke', highlight: false },
            ].map((c) => (
              <div
                key={c.num}
                className={`relative p-7 sm:p-8 group transition-all ${
                  c.highlight ? 'bg-lime' : 'bg-ink2 hover:bg-ink3'
                }`}
              >
                {!c.highlight && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-lime scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                )}
                <div className={`font-syne font-bold text-xs tracking-widest mb-6 ${c.highlight ? 'text-black/25' : 'text-white/15'}`}>
                  {c.num}
                </div>
                <div className="text-4xl mb-5">{c.icon}</div>
                <div className={`font-syne font-bold text-xs tracking-widest uppercase mb-2 ${c.highlight ? 'text-black/45' : 'text-lime'}`}>
                  {c.level}
                </div>
                <h3 className={`font-syne font-black text-2xl sm:text-3xl mb-3 leading-tight ${c.highlight ? 'text-ink' : 'text-white'}`}>
                  {c.name}
                </h3>
                <p className={`text-sm leading-relaxed mb-7 ${c.highlight ? 'text-black/50' : 'text-white/45'}`}>
                  {c.desc}
                </p>
                <div className={`flex justify-between items-center pt-5 border-t ${c.highlight ? 'border-black/10' : 'border-white/[0.07]'}`}>
                  <span className={`font-syne font-black text-2xl ${c.highlight ? 'text-ink' : 'text-lime'}`}>{c.price}</span>
                  <span className={`font-syne font-bold text-xs tracking-widest uppercase px-3 py-1.5 rounded text-[0.65rem] ${c.highlight ? 'bg-black/10 text-black/45' : 'bg-white/[0.06] text-white/35'}`}>
                    {c.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section id="why" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-14 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-0.5 bg-ink" />
              <span className="font-syne font-bold text-xs tracking-[3px] uppercase text-gray-500">Why Drivin Guru</span>
            </div>
            <h2 className="font-syne font-black text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight leading-none">
              We Build <span style={{ color: '#CAFF00', WebkitTextStroke: '2px #a8d400' }}>Confident</span><br />Drivers.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="divide-y divide-gray-100">
              {[
                { n: '01', title: 'DVSA-Approved Instruction', body: 'Fully certified lessons meeting the highest national standards. Your safety comes first, always.' },
                { n: '02', title: '7 Days a Week Flexibility', body: 'Morning, evening or weekends — lessons that slot into your life. Easy to book, easy to reschedule.' },
                { n: '03', title: 'Local Road Knowledge', body: 'Lessons on the roads you\'ll actually be tested on. No surprises on test day — just confidence.' },
                { n: '04', title: 'Truly Tailored to You', body: 'Your pace, your style, your needs. No rigid plans — just instruction that actually works for you.' },
              ].map(({ n, title, body }) => (
                <div key={n} className="flex gap-5 py-7 hover:pl-2 transition-all group">
                  <span className="font-syne font-black text-3xl sm:text-4xl text-gray-100 leading-none flex-shrink-0 w-12">{n}</span>
                  <div>
                    <h3 className="font-syne font-bold text-base sm:text-lg text-ink mb-1.5 group-hover:text-[#a8d400] transition-colors">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-ink rounded-xl p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-lime/[0.05]" />
              <div className="font-syne font-black text-8xl sm:text-9xl text-lime leading-none">100%</div>
              <p className="text-white/45 text-sm sm:text-base mt-3 leading-relaxed max-w-xs">
                of students recommend Drivin Guru — verified on Google and Facebook.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {[
                  { n: '★★★★★', l: 'Highly Trusted' },
                  { n: '£40', l: 'From per hour' },
                  { n: '7', l: 'Days a week' },
                  { n: 'UK', l: 'Wide Network' },
                ].map(({ n, l }) => (
                  <div key={l} className="bg-white/[0.04] border border-white/[0.07] rounded-lg p-4">
                    <div className="font-syne font-black text-2xl text-white">{n}</div>
                    <div className="font-syne text-xs tracking-widest uppercase text-white/35 mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INSTRUCTOR ── */}
      <section id="instructors" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-14 bg-ink2">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-0.5 bg-lime" />
              <span className="font-syne font-bold text-xs tracking-[3px] uppercase text-lime">Our Instructors</span>
            </div>
            <h2 className="font-syne font-black text-4xl sm:text-5xl text-white tracking-tight leading-none">
              You're in <span className="text-lime">Good Hands</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 max-w-2xl">
            {/* Instructor card */}
            <div className="bg-ink3 p-8 border-2 border-lime/30 hover:border-lime transition-colors">
              <div className="w-16 h-16 rounded-full bg-lime flex items-center justify-center text-3xl mb-5">🧑‍🏫</div>
              <h3 className="font-syne font-black text-2xl text-white mb-1">Drivin Guru Instructor</h3>
              <p className="text-lime text-xs font-semibold tracking-widest uppercase mb-3">DVSA Approved · Nationwide</p>
              <div className="text-[#C8151B] text-lg tracking-widest mb-1">★★★★★</div>
              <p className="text-white/35 text-xs mb-4">100% recommend · verified Google reviews</p>
              <blockquote className="text-white/50 text-sm italic leading-relaxed border-l-2 border-lime/30 pl-4">
                "Lessons adapted to my needs — everything made so simple. Really easy to get along with. Passed first time!"
              </blockquote>
            </div>

            {/* Hire card */}
            <div className="bg-transparent border border-dashed border-white/15 p-8 flex flex-col justify-center items-start gap-4 hover:border-lime transition-colors group">
              <span className="text-4xl text-lime">+</span>
              <h3 className="font-syne font-black text-2xl text-[#C8151B]">Instructors Wanted Nationwide</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Qualified ADIs across the UK — join a fast-growing driving school with real marketing behind you.
              </p>
              <a
                href="/instructors"
                className="bg-lime text-ink font-syne font-bold text-xs tracking-widest uppercase px-5 py-2.5 rounded hover:bg-white transition-colors"
              >
                Apply Now ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-14 bg-ink">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-6 h-0.5 bg-lime" />
              <span className="font-syne font-bold text-xs tracking-[3px] uppercase text-lime">Pricing</span>
              <span className="w-6 h-0.5 bg-lime" />
            </div>
            <h2 className="font-syne font-black text-4xl sm:text-5xl text-white tracking-tight">
              Simple. <span className="text-lime">Honest.</span>
            </h2>
            <p className="text-white/40 text-sm mt-3">No hidden fees. No surprises. Ever.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 max-w-2xl mx-auto mb-0.5">
            {/* Daytime */}
            <div className="bg-ink2 p-8 sm:p-10 border-2 border-white/[0.07] hover:border-lime transition-all group">
              <p className="font-syne font-bold text-xs tracking-widest uppercase text-white/35 mb-4">Daytime Lesson</p>
              <div className="font-syne font-black text-7xl text-white leading-none tracking-tighter">
                <sup className="text-3xl align-top mt-2">£</sup>40
              </div>
              <p className="text-white/35 text-sm mt-2 mb-8">Per hour · Mon–Fri 8am–4pm</p>
              <ul className="space-y-3 mb-8">
                {['60-min in-car lesson', 'DVSA-approved instruction', 'Tailored to your level', 'Local road knowledge'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-white/55 text-sm">
                    <span className="text-lime font-bold">→</span>{f}
                  </li>
                ))}
              </ul>
              <a href="#book" className="block text-center border border-white/15 text-white font-syne font-bold text-sm tracking-widest uppercase py-3 rounded group-hover:border-lime group-hover:bg-lime group-hover:text-ink transition-all">
                Book Now
              </a>
            </div>

            {/* Evening */}
            <div className="bg-lime p-8 sm:p-10">
              <p className="font-syne font-bold text-xs tracking-widest uppercase text-black/40 mb-4">Evening & Weekend</p>
              <div className="font-syne font-black text-7xl text-ink leading-none tracking-tighter">
                <sup className="text-3xl align-top mt-2">£</sup>50
              </div>
              <p className="text-black/40 text-sm mt-2 mb-8">Per hour · evenings & all weekend</p>
              <ul className="space-y-3 mb-8">
                {['Mon–Fri from 4pm', 'All day Saturday & Sunday', 'Same expert tuition', 'Perfect for busy learners', '7 days a week availability'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-black/55 text-sm">
                    <span className="text-ink font-bold">→</span>{f}
                  </li>
                ))}
              </ul>
              <a href="#book" className="block text-center bg-ink text-lime font-syne font-bold text-sm tracking-widest uppercase py-3 rounded hover:bg-ink2 transition-colors">
                Book Now
              </a>
            </div>
          </div>

          {/* Mock test row */}
          <div className="bg-ink2 p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5">
            <div>
              <h3 className="font-syne font-black text-xl text-white">Mock Test Session</h3>
              <p className="text-white/35 text-sm mt-1">2-hour full test simulation — honest feedback before your real test</p>
            </div>
            <div className="flex items-center gap-6 flex-shrink-0">
              <span className="font-syne font-black text-4xl text-lime">£80</span>
              <a href="#book" className="bg-lime text-ink font-syne font-bold text-xs tracking-widest uppercase px-5 py-3 rounded hover:bg-white transition-colors whitespace-nowrap">
                Book Now ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-14 bg-ink2 relative overflow-hidden">
        <div className="absolute right-8 top-4 font-syne font-black text-white/[0.03] select-none pointer-events-none leading-none" style={{ fontSize: '20rem' }}>"</div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-0.5 bg-lime" />
              <span className="font-syne font-bold text-xs tracking-[3px] uppercase text-lime">Student Reviews</span>
            </div>
            <h2 className="font-syne font-black text-4xl sm:text-5xl text-white tracking-tight leading-none">
              100% <span className="text-lime">Recommend</span>
            </h2>
            <p className="text-white/35 text-sm mt-2">Verified Google reviews from real students.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5">
            {[
              '"Absolutely amazing instruction! My lessons were adapted to my learning needs and everything was made so simple. Time on lessons was well spent and my instructor was really easy to get along with. Passed first time. Highest recommendations!"',
              '"Can not recommend Drivin Guru enough. My instructor made the whole learning experience really fun, whilst teaching me every single thing I needed to know, and then some. So grateful for the patience and determination. 5 stars all day."',
              '"Excellent support — my instructor recognised my needs and showed me all the difficult places and situations. That\'s why I passed my test on the first attempt. Thank you very much, highly recommended."',
            ].map((text, i) => (
              <div key={i} className="bg-ink3 p-7 sm:p-8 hover:bg-[#252525] transition-colors border border-transparent hover:border-lime/20">
                <div className="text-[#C8151B] text-base tracking-widest mb-4">★★★★★</div>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed italic mb-6">{text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lime to-[#C8151B] flex items-center justify-center font-syne font-bold text-ink text-sm flex-shrink-0">G</div>
                  <div>
                    <div className="font-syne font-bold text-white text-sm">Google Review</div>
                    <div className="text-white/30 text-xs mt-0.5">Verified · 5 Stars</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.google.com/search?q=Drivin+Guru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white/20 text-white font-syne font-bold text-sm tracking-widest uppercase px-8 py-4 rounded hover:border-lime hover:text-lime transition-all"
            >
              Read Our Reviews on Google ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── JOIN BANNER ── */}
      <section id="join" className="py-16 sm:py-20 px-4 sm:px-8 lg:px-14 bg-lime relative overflow-hidden">
        <div className="absolute right-[-1rem] top-1/2 -translate-y-1/2 font-syne font-black text-black/[0.06] select-none pointer-events-none leading-none text-[14rem] sm:text-[20rem] whitespace-nowrap">
          ADI
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-5 h-0.5 bg-black/30" />
                <span className="font-syne font-bold text-xs tracking-[3px] uppercase text-black/45">Nationwide Recruitment</span>
              </div>
              <h2 className="font-syne font-black text-3xl sm:text-4xl lg:text-5xl text-ink leading-none tracking-tight mb-4">
                Are You a Driving Instructor?<br />Join the Drivin Guru Team.
              </h2>
              <p className="text-black/55 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
                We're building a nationwide network of ADIs. You teach — we handle the marketing, bookings and brand. Any area. Any hours. Genuinely fair pay.
              </p>
              <div className="flex flex-wrap gap-2">
                {['✓ ADIs & PDIs Welcome', '✓ Any Location in the UK', '✓ Self Employed'].map(t => (
                  <span key={t} className="bg-black/[0.08] font-syne font-bold text-xs tracking-wider uppercase text-black/55 px-3 py-2 rounded">{t}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:max-w-xs">
              <a
                href="/instructors"
                className="flex-1 lg:flex-none text-center bg-ink text-lime font-syne font-bold text-sm tracking-widest uppercase px-8 py-4 rounded hover:bg-ink2 transition-colors"
              >
                Find Out More ↗
              </a>
              <a
                href="/instructors#apply"
                className="flex-1 lg:flex-none text-center bg-black/10 text-ink font-syne font-bold text-sm tracking-widest uppercase px-8 py-4 rounded hover:bg-black/20 transition-colors"
              >
                Apply Now ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOK ── */}
      <section id="book" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-14 bg-[#C8151B] relative overflow-hidden">
        <div className="absolute right-[-1rem] top-1/2 -translate-y-1/2 font-syne font-black text-black/[0.08] select-none pointer-events-none leading-none text-[10rem] sm:text-[16rem] whitespace-nowrap">
          BOOK
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2 className="font-syne font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-none tracking-tight mb-5">
                READY TO HIT THE ROAD?
              </h2>
              <p className="text-white/65 text-sm sm:text-base leading-relaxed mb-8">
                Book your first lesson today. No pressure, no commitment — just expert instruction when it suits you.
              </p>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/447360271186?text=Hi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-ink text-lime font-syne font-bold text-sm tracking-widest uppercase px-6 py-4 rounded hover:bg-ink2 transition-colors mb-6 w-full sm:w-auto justify-center sm:justify-start"
              >
                <WhatsAppIcon /> Chat With Our AI on WhatsApp
              </a>

              {/* QR Code */}
              <div className="bg-black/10 rounded-lg p-5 inline-block mb-6">
                <p className="font-syne font-bold text-xs tracking-widest uppercase text-white/50 mb-3">📱 Scan to Chat Instantly</p>
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://wa.me/447360271186?text=Hi&bgcolor=CAFF00&color=0A0A0A&margin=2"
                  alt="WhatsApp QR Code"
                  width={140}
                  height={140}
                  className="rounded"
                />
                <p className="text-white/40 text-xs mt-2">Scan with your phone — opens WhatsApp instantly</p>
              </div>

              <div className="flex flex-col gap-2 text-sm">
                <a href="tel:+447939515479" className="text-white/70 hover:text-white flex items-center gap-2 transition-colors">📞 +44 7939 515479</a>
                <a href="mailto:officialdrivinguru@gmail.com" className="text-white/70 hover:text-white flex items-center gap-2 transition-colors">✉️ officialdrivinguru@gmail.com</a>
                <a href="https://www.facebook.com/share/1CNxLhhBnh/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white flex items-center gap-2 transition-colors">📘 Drivin Guru on Facebook</a>
                <a href="https://www.instagram.com/drivin_guru/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white flex items-center gap-2 transition-colors">📸 @drivin_guru on Instagram</a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-black/10 rounded-lg p-6 sm:p-8">
              <BookForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function LPlate({ size = 200 }) {
  return (
    <div
      className="bg-white rounded-xl border-4 border-[#ccc] flex items-center justify-center shadow-2xl flex-shrink-0"
      style={{ width: size, height: size }}
    >
      <span
        className="font-black select-none"
        style={{
          color: '#CC0000',
          fontSize: size * 0.68,
          lineHeight: 1,
          fontFamily: 'Arial Black, Arial, sans-serif',
          WebkitTextStroke: `${size * 0.032}px #CC0000`,
          paintOrder: 'stroke fill',
        }}
      >
        L
      </span>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.107 1.523 5.83L.057 23.25a.75.75 0 00.917.912l5.562-1.49A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.73 9.73 0 01-4.964-1.355l-.356-.211-3.683.987.974-3.596-.232-.371A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
    </svg>
  );
}

function BookForm() {
  return (
    <form className="flex flex-col gap-3" onSubmit={e => e.preventDefault()}>
      <h3 className="font-syne font-black text-2xl text-white mb-2">Reserve My Spot</h3>
      <input
        type="text"
        placeholder="Your Full Name"
        className="w-full px-4 py-3.5 rounded bg-white/15 border border-white/20 text-white placeholder-white/40 font-jakarta text-sm focus:outline-none focus:border-white transition-colors"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full px-4 py-3.5 rounded bg-white/15 border border-white/20 text-white placeholder-white/40 font-jakarta text-sm focus:outline-none focus:border-white transition-colors"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="w-full px-4 py-3.5 rounded bg-white/15 border border-white/20 text-white placeholder-white/40 font-jakarta text-sm focus:outline-none focus:border-white transition-colors"
      />
      <select className="w-full px-4 py-3.5 rounded bg-white/15 border border-white/20 text-white font-jakarta text-sm focus:outline-none focus:border-white transition-colors">
        <option value="" className="bg-gray-800">Select a Lesson Type</option>
        <option value="day" className="bg-gray-800">Daytime Lesson — £40/hr</option>
        <option value="eve" className="bg-gray-800">Evening / Weekend — £50/hr</option>
        <option value="mock" className="bg-gray-800">Mock Test Session — £80</option>
        <option value="intensive" className="bg-gray-800">Intensive Course — Enquire</option>
      </select>
      <button
        type="submit"
        className="w-full bg-ink text-lime font-syne font-bold text-sm tracking-widest uppercase py-4 rounded hover:bg-ink2 transition-colors mt-1"
      >
        Reserve My Spot ↗
      </button>
    </form>
  );
}
