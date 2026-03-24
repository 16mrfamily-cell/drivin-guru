import ApplyForm from '../../components/ApplyForm';
import Nav from '../../components/Nav';
import Marquee from '../../components/Marquee';
import Footer from '../../components/Footer';
import { DGMark } from '../../components/DGMark';

export const metadata = {
  title: 'Join Our Team — Drivin Guru Instructor Recruitment UK',
  description: 'Become a driving instructor with Drivin Guru. Work anywhere in the UK, set your own hours, keep more of what you earn. ADIs and PDIs welcome.',
};

export default function InstructorsPage() {
  return (
    <main className="bg-ink min-h-screen">
      <Nav instructorPage />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-end pb-16 pt-24 px-4 sm:px-8 lg:px-14 overflow-hidden bg-ink">
        <div className="hidden lg:block absolute top-0 right-0 w-[42%] h-full bg-lime" style={{ clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0% 100%)' }} />

        {/* Stats on lime panel */}
        <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-[6%] flex-col items-center gap-8 z-10">
          {[
            { n: '£40', l: 'From per hour' },
            { n: 'UK', l: 'Nationwide' },
            { n: 'ADI', l: '& PDI Welcome' },
          ].map(({ n, l }) => (
            <div key={l} className="text-center">
              <div className="font-syne font-black text-5xl text-ink leading-none">{n}</div>
              <div className="font-syne font-bold text-xs tracking-widest uppercase text-black/45 mt-1">{l}</div>
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-8 h-0.5 bg-lime" />
            <span className="font-syne font-bold text-xs tracking-[3px] uppercase text-lime">Nationwide Instructor Recruitment — Now Open</span>
          </div>
          <h1 className="font-syne font-black leading-[0.88] tracking-tight text-white" style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', letterSpacing: '-2px' }}>
            <span className="block" style={{ WebkitTextStroke: '2px #CAFF00', color: 'transparent' }}>DRIVE</span>
            <span className="block">YOUR</span>
            <span className="block text-lime">CAREER.</span>
          </h1>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-lg mt-5 mb-8">
            Join Drivin Guru anywhere in the UK. You bring the expertise — we bring the students, the brand, and the marketing to fill your diary.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <a href="#apply" className="bg-lime text-ink font-syne font-bold text-sm tracking-widest uppercase px-6 py-4 rounded hover:bg-white transition-all hover:-translate-y-0.5">
              Apply Now ↗
            </a>
            <a href="https://wa.me/447360271186?text=Hi" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white font-syne font-bold text-sm tracking-widest uppercase px-6 py-4 rounded hover:bg-[#1db954] transition-all">
              <WAIcon /> Chat on WhatsApp
            </a>
            <a href="#perks" className="border border-white/25 text-white font-syne font-bold text-sm tracking-widest uppercase px-6 py-4 rounded hover:border-lime hover:text-lime transition-all">
              Why Join Us
            </a>
          </div>
          <div className="flex flex-wrap gap-2">
            {['✓ Fully Qualified ADIs', '✓ PDIs Welcome', '✓ Any Location in the UK', '🔥 Now Recruiting'].map(t => (
              <span key={t} className={`font-syne font-bold text-xs tracking-wider uppercase px-3 py-1.5 rounded border ${t.includes('🔥') ? 'bg-red-500/10 border-red-500/25 text-red-400' : 'bg-lime/10 border-lime/25 text-lime'}`}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee - recruiting version */}
      <div className="bg-lime py-3 overflow-hidden whitespace-nowrap">
        <div className="inline-flex animate-marquee">
          {[...Array(2)].flatMap(() =>
            ['Competitive Pay', 'Work Anywhere in the UK', 'We Handle Marketing', 'ADIs & PDIs Welcome', 'Set Your Own Hours', 'Self Employed', 'Fast Growing Brand', 'Now Recruiting'].map((item, i) => (
              <span key={`${item}-${i}`} className="font-syne font-bold text-xs sm:text-sm tracking-widest uppercase text-ink px-6 sm:px-8 inline-flex items-center gap-4">
                {item}<span className="text-[0.5rem] opacity-40">✦</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* ── PERKS ── */}
      <section id="perks" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-14 bg-ink2">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-0.5 bg-lime" />
              <span className="font-syne font-bold text-xs tracking-[3px] uppercase text-lime">Why Join Drivin Guru</span>
            </div>
            <h2 className="font-syne font-black text-4xl sm:text-5xl text-white tracking-tight leading-none">
              What You <span className="text-lime">Get</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5">
            {[
              { num: '01', icon: '💷', title: 'Keep More of What You Earn', body: 'Fair, transparent split from day one. No hidden fees, no surprises. You know exactly what you\'re taking home.' },
              { num: '02', icon: '📣', title: 'We Invest in Marketing', body: 'Google Ads, social media, SEO — we spend real money bringing students to you so your diary stays full.' },
              { num: '03', icon: '🗓️', title: 'Total Scheduling Freedom', body: 'Full-time or part-time. Set your own days and hours. No rigid rotas, no pressure, no micromanagement.' },
              { num: '04', icon: '🌍', title: 'Work Anywhere in the UK', body: 'No territory restrictions. Operate in your area under the Drivin Guru brand with national recognition behind you.' },
              { num: '05', icon: '🛡️', title: 'Trusted Brand Behind You', body: 'A growing reputation students already trust. Operate under a brand that does the hard work for you.' },
              { num: '06', icon: '📱', title: 'Admin Handled For You', body: 'Bookings, enquiries, AI chat — we handle the admin so you can focus entirely on teaching.' },
              { num: '07', icon: '🤝', title: 'Genuine Partnership', body: 'We treat our instructors as partners, not employees. Your success is our success — and we mean that.' },
              { num: '08', icon: '🚀', title: 'Get in Early', body: 'We\'re scaling fast. The instructors who join now will have the greatest opportunity as we grow nationally.' },
            ].map(({ num, icon, title, body }) => (
              <div key={num} className="bg-ink3 p-7 group hover:bg-[#252525] transition-all relative">
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-lime scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                <div className="font-syne font-bold text-xs tracking-widest text-white/10 mb-5">{num}</div>
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-syne font-black text-lg text-white mb-2 leading-snug">{title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-14 bg-ink">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-6 h-0.5 bg-lime" />
              <span className="font-syne font-bold text-xs tracking-[3px] uppercase text-lime">The Process</span>
              <span className="w-6 h-0.5 bg-lime" />
            </div>
            <h2 className="font-syne font-black text-4xl sm:text-5xl text-white tracking-tight">How It <span className="text-lime">Works</span></h2>
            <p className="text-white/35 text-sm mt-2">From application to first lesson in four steps.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5">
            {[
              { n: '01', title: 'Apply Online', body: 'Fill in the form below. Takes 2 minutes. Tell us where you are, your qualifications and your availability.' },
              { n: '02', title: 'We Get in Touch', body: 'Our team contacts you quickly for a relaxed, no-pressure conversation about how we work.' },
              { n: '03', title: 'Get Set Up', body: 'We onboard you to the Drivin Guru brand, set up your profile and get your area ready for bookings.' },
              { n: '04', title: 'Start Teaching', body: 'Students come to you. You teach, we handle everything else. Simple as that.' },
            ].map(({ n, title, body }) => (
              <div key={n} className="bg-ink2 p-8 text-center">
                <div className="w-16 h-16 rounded-full border-2 border-lime flex items-center justify-center mx-auto mb-5">
                  <span className="font-syne font-black text-2xl text-lime">{n}</span>
                </div>
                <h3 className="font-syne font-black text-xl text-white mb-3">{title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EARNINGS ── */}
      <section id="earnings" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-14 bg-lime relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 font-syne font-black text-black/[0.07] select-none pointer-events-none leading-none" style={{ fontSize: 'clamp(8rem,18vw,18rem)', whiteSpace: 'nowrap' }}>£££</div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-syne font-black text-4xl sm:text-5xl lg:text-6xl text-ink leading-none tracking-tight mb-5">WHAT COULD YOU EARN?</h2>
              <p className="text-black/55 text-sm sm:text-base leading-relaxed mb-4">
                Our instructors set their own hours and keep the majority of their lesson fees. The more you teach, the more you earn — with no cap on your potential.
              </p>
              <p className="text-black/55 text-sm sm:text-base leading-relaxed mb-8">
                With Drivin Guru's marketing investment bringing students directly to you, filling your diary is far easier than going it alone.
              </p>
              <a href="#apply" className="inline-flex bg-ink text-lime font-syne font-bold text-sm tracking-widest uppercase px-8 py-4 rounded hover:bg-ink2 transition-colors">
                Apply Now ↗
              </a>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { n: '£40', label: 'Daytime rate', sub: 'Mon–Fri 8am–4pm standard rate per hour' },
                { n: '£50', label: 'Evening & weekend', sub: 'Higher earnings for flexible availability' },
                { n: '30+', label: 'Lessons per week', sub: 'A full diary delivers a strong full-time income' },
              ].map(({ n, label, sub }) => (
                <div key={n} className="bg-black/[0.09] rounded-lg p-5 flex items-center gap-5">
                  <div className="font-syne font-black text-4xl text-ink min-w-[80px]">{n}</div>
                  <div>
                    <div className="font-syne font-bold text-ink text-sm">{label}</div>
                    <div className="text-black/50 text-xs mt-0.5">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-14 bg-ink2">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-6 h-0.5 bg-lime" />
              <span className="font-syne font-bold text-xs tracking-[3px] uppercase text-lime">Common Questions</span>
              <span className="w-6 h-0.5 bg-lime" />
            </div>
            <h2 className="font-syne font-black text-4xl sm:text-5xl text-white tracking-tight">FAQ<span className="text-lime">s</span></h2>
          </div>
          <div className="flex flex-col gap-0.5">
            {[
              { q: 'Do I need to be a fully qualified ADI?', a: 'Not necessarily. We welcome fully qualified ADIs and PDIs who are currently in training. If you\'re not yet qualified but interested, get in touch and we can point you in the right direction.' },
              { q: 'Can I work anywhere in the UK?', a: 'Yes — no territory restrictions. You operate in your local area under the Drivin Guru brand. We\'re actively recruiting across England, Scotland, Wales and Northern Ireland.' },
              { q: 'Do I need my own car?', a: 'Yes, you\'ll need your own dual-controlled vehicle. If you don\'t currently have one, we can point you towards leasing options that work well for instructors.' },
              { q: 'How does the payment split work?', a: 'Fair and transparent — you keep the majority of your lesson fees. Full details are discussed during your onboarding conversation. No nasty surprises.' },
              { q: 'How quickly will I get students?', a: 'We actively invest in Google Ads and social media to generate enquiries in your area. Most instructors start receiving leads within the first few weeks of being set up.' },
              { q: 'Is this employed or self-employed?', a: 'Self-employed. You operate under the Drivin Guru brand with full flexibility over your hours and earnings — with the benefit of our brand and marketing support behind you.' },
            ].map(({ q, a }) => (
              <FAQItem key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLY ── */}
      <section id="apply" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-14 bg-ink">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-0.5 bg-lime" />
                <span className="font-syne font-bold text-xs tracking-[3px] uppercase text-lime">Apply Now</span>
              </div>
              <h2 className="font-syne font-black text-4xl sm:text-5xl text-white leading-none tracking-tight mb-5">
                READY TO <span className="text-lime">JOIN US?</span>
              </h2>
              <p className="text-white/45 text-sm sm:text-base leading-relaxed mb-6">
                Fill in the form and we'll be in touch quickly. No hard sell — just an honest conversation about whether Drivin Guru is the right fit for you.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Open to ADIs and PDIs across the whole UK',
                  'Any area — we\'re expanding everywhere',
                  'Self-employed with full flexibility',
                  'We handle marketing — you focus on teaching',
                  'Fair, transparent earnings from day one',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-white/55 text-sm">
                    <span className="text-lime font-bold">→</span>{item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2 text-sm">
                <a href="https://wa.me/447360271186?text=Hi" target="_blank" rel="noopener noreferrer" className="text-white/45 hover:text-lime flex items-center gap-2 transition-colors">💬 Chat on WhatsApp</a>
                <a href="mailto:officialdrivinguru@gmail.com" className="text-white/45 hover:text-lime flex items-center gap-2 transition-colors">✉️ officialdrivinguru@gmail.com</a>
                <a href="tel:+447939515479" className="text-white/45 hover:text-lime flex items-center gap-2 transition-colors">📞 +44 7939 515479</a>
              </div>
            </div>

            <div className="bg-ink3 p-7 sm:p-10 relative overflow-hidden">
              <div className="absolute right-[-1rem] bottom-[-2rem] font-syne font-black text-lime/[0.04] select-none pointer-events-none leading-none" style={{ fontSize: '9rem' }}>APPLY</div>
              <h3 className="font-syne font-black text-2xl text-white mb-6 relative z-10">Apply in 2 Minutes</h3>
              <ApplyForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function FAQItem({ q, a }) {
  return (
    <details className="bg-ink3 group">
      <summary className="flex justify-between items-center px-6 py-5 cursor-pointer font-syne font-bold text-white text-base hover:text-lime transition-colors list-none">
        {q}
        <span className="text-lime ml-4 group-open:rotate-180 transition-transform flex-shrink-0">▼</span>
      </summary>
      <div className="px-6 pb-5 text-white/45 text-sm leading-relaxed">
        {a}
      </div>
    </details>
  );
}

function WAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.107 1.523 5.83L.057 23.25a.75.75 0 00.917.912l5.562-1.49A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.73 9.73 0 01-4.964-1.355l-.356-.211-3.683.987.974-3.596-.232-.371A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
    </svg>
  );
}
