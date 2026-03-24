import Link from 'next/link';
import { DGMark } from './DGMark';

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/[0.07] pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <DGMark size={32} />
              <span className="font-syne font-black text-base tracking-widest uppercase text-white">
                DRIVIN <span className="text-lime">GURU</span>
              </span>
            </div>
            <p className="font-syne text-xs tracking-widest uppercase text-lime mb-4">
              Learn The Safe Way, Right Away
            </p>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Professional driving lessons nationwide. Building confident, capable drivers across the UK.
            </p>
            <div className="flex gap-2 mt-5">
              <a
                href="https://www.facebook.com/share/1CNxLhhBnh/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-ink2 border border-white/[0.08] rounded flex items-center justify-center text-white/60 hover:bg-lime/10 hover:border-lime hover:text-lime transition-all text-sm font-bold"
              >
                f
              </a>
              <a
                href="https://www.instagram.com/drivin_guru/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-ink2 border border-white/[0.08] rounded flex items-center justify-center text-white/60 hover:bg-lime/10 hover:border-lime hover:text-lime transition-all text-xs font-bold"
              >
                ig
              </a>
              <a
                href="https://wa.me/447360271186?text=Hi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-ink2 border border-white/[0.08] rounded flex items-center justify-center text-white/60 hover:bg-lime/10 hover:border-lime hover:text-lime transition-all text-xs font-bold"
              >
                wa
              </a>
            </div>
          </div>

          {/* Lessons */}
          <div>
            <h4 className="font-syne font-bold text-xs tracking-widest uppercase text-white mb-5">Lessons</h4>
            <ul className="space-y-3">
              {[
                ['#courses', 'Daytime — £40/hr'],
                ['#courses', 'Evening/Weekend — £50/hr'],
                ['#courses', 'Mock Test — £80'],
                ['#courses', 'Intensive Course'],
              ].map(([href, label]) => (
                <li key={label}>
                  <a href={href} className="text-white/40 hover:text-lime text-sm transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-syne font-bold text-xs tracking-widest uppercase text-white mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                ['#why', 'About Us'],
                ['#testimonials', 'Reviews'],
                ['/instructors', 'Join Our Team'],
                ['#book', 'Contact'],
              ].map(([href, label]) => (
                <li key={label}>
                  <Link href={href} className="text-white/40 hover:text-lime text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-syne font-bold text-xs tracking-widest uppercase text-white mb-5">Contact</h4>
            <ul className="space-y-3">
              {[
                ['https://wa.me/447360271186?text=Hi', '💬 WhatsApp Chat'],
                ['tel:+447939515479', '📞 +44 7939 515479'],
                ['mailto:officialdrivinguru@gmail.com', '✉️ officialdrivinguru@gmail.com'],
                ['https://drivin-guru.co.uk', '🌐 drivin-guru.co.uk'],
              ].map(([href, label]) => (
                <li key={label}>
                  <a href={href} className="text-white/40 hover:text-lime text-sm transition-colors break-all">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.07] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/25">
          <span>© 2025 Drivin Guru Driving School · United Kingdom</span>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-lime transition-colors">Terms & Conditions</Link>
            <Link href="/terms" className="hover:text-lime transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
