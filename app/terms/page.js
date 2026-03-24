import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions — Drivin Guru',
  description: 'Terms and conditions for Drivin Guru driving lessons. Please read before booking.',
};

const terms = [
  {
    num: '01',
    title: 'Lesson Duration',
    body: 'The term "lesson" refers to a duration of 1 hour. Our normal blocks of 10 lessons do not constitute as an offer.',
  },
  {
    num: '02',
    title: 'Cancellation & Rearrangement Policy',
    body: 'At least 48 hours notice MUST be given to cancel or rearrange any lessons booked. Any late cancellations will be charged at the normal rate, or if the lesson is prepaid, it will be forfeited.',
  },
  {
    num: '03',
    title: 'Offer Redemption',
    body: "Where an offer is taken, it is entirely at the instructor's discretion when the lessons can be redeemed.",
  },
  {
    num: '04',
    title: 'Offers & Test Day Charge',
    body: "All offers apply only if a test has not been booked prior to or during the offer period, without the instructor's consent. Otherwise, the normal rate in your area applies. Regardless of which offer is used, a charge of £100 (2.5 hours at the normal rate) will apply on test day.",
  },
  {
    num: '05',
    title: 'Refunds & Prepaid Lessons',
    body: 'All offers and prepaid lessons are non-refundable unless otherwise specified and must be used within 12 months. If a refund is made, an admin fee of £50 will be charged at the current rate.',
  },
  {
    num: '06',
    title: 'Test Booking Without Consultation',
    body: "Offers will be forfeited if a test is booked without prior consultation with your instructor and a prior agreement is reached. On occasions where the instructor's advice is ignored, we cannot guarantee the use of the instructor's car for the test.",
  },
  {
    num: '07',
    title: 'Breaks Between Lessons',
    body: 'If you have a break of longer than two weeks between lessons, we cannot guarantee availability as your instructor cannot hold slots open. This includes the period of time after taking a driving test.',
  },
  {
    num: '08',
    title: 'Payment of Prepaid Courses',
    body: "All prepaid courses must be paid directly to 'Drivin' Guru Ltd'. Drivin' Guru Ltd will not be accountable for any lessons paid directly to any instructor.",
  },
  {
    num: '09',
    title: 'COVID-19 Cancellations',
    body: 'During the current climate, our cancellation policy may be relaxed if the cancellation can be proved to be attributed to a risk of COVID-19 infection. Each case will be assessed on its own merits.',
  },
];

export default function TermsPage() {
  return (
    <main className="bg-ink min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4 sm:px-8 lg:px-14 border-b border-white/[0.07] relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 font-syne font-black text-white/[0.025] select-none pointer-events-none leading-none" style={{ fontSize: 'clamp(6rem,18vw,18rem)', whiteSpace: 'nowrap' }}>T&C</div>
        <div className="max-w-3xl relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-0.5 bg-lime" />
            <span className="font-syne font-bold text-xs tracking-[3px] uppercase text-lime">Legal</span>
          </div>
          <h1 className="font-syne font-black text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-none mb-5">
            Terms &amp; <span className="text-lime">Conditions</span>
          </h1>
          <p className="text-white/40 text-sm sm:text-base leading-relaxed">
            Please read these terms carefully before booking any lessons with Drivin Guru. By booking a lesson you agree to the terms outlined below.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-14">
        <div className="max-w-3xl mx-auto">

          {/* Intro box */}
          <div className="bg-lime/[0.05] border border-lime/15 rounded-lg p-6 mb-12">
            <p className="text-white/55 text-sm leading-relaxed">
              <span className="text-lime font-semibold">Drivin' Guru Ltd</span> — These terms and conditions apply to all lessons, courses and offers booked through Drivin Guru. All bookings are subject to the following conditions.
            </p>
          </div>

          {/* Terms list */}
          <div className="flex flex-col">
            {terms.map(({ num, title, body }) => (
              <div key={num} className="flex gap-5 sm:gap-7 py-8 border-b border-white/[0.07] hover:pl-2 transition-all group">
                <span className="font-syne font-black text-3xl sm:text-4xl text-lime/20 leading-none flex-shrink-0 w-10 sm:w-12 pt-1">{num}</span>
                <div>
                  <h2 className="font-syne font-bold text-base sm:text-lg text-white mb-2 group-hover:text-lime transition-colors">{title}</h2>
                  <p className="text-white/45 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Hygiene notice */}
          <div className="mt-10 bg-red-500/[0.06] border border-red-500/20 rounded-lg p-6">
            <h3 className="font-syne font-bold text-sm tracking-widest uppercase text-red-400 mb-3">⚠️ Use of Training Vehicle</h3>
            <p className="text-white/45 text-sm leading-relaxed">
              Your instructor reserves the right to withhold the use of the training vehicle for a lesson if, in the opinion of the instructor, the client is lacking in personal hygiene (smelling unwashed and/or teeth unbrushed), covered in pet hair, or under the influence of drugs or alcohol. In any of these circumstances the lesson will not go ahead and{' '}
              <span className="text-white/70 font-semibold">you will forfeit the lesson fee</span>{' '}
              as the lesson will be deemed as a late cancellation on your part.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <p className="text-white/25 text-xs">© 2025 Drivin' Guru Ltd · United Kingdom</p>
            <Link href="/" className="font-syne font-bold text-sm tracking-widest uppercase text-lime hover:text-white transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
