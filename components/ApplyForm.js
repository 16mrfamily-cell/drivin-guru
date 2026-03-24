'use client';

export default function ApplyForm() {
  return (
    <form className="flex flex-col gap-3 relative z-10" onSubmit={e => e.preventDefault()}>
      <div className="grid grid-cols-2 gap-3">
        <input type="text" placeholder="First Name" className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.08] text-white placeholder-white/25 font-jakarta text-sm rounded focus:outline-none focus:border-lime transition-colors" />
        <input type="text" placeholder="Last Name" className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.08] text-white placeholder-white/25 font-jakarta text-sm rounded focus:outline-none focus:border-lime transition-colors" />
      </div>
      <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.08] text-white placeholder-white/25 font-jakarta text-sm rounded focus:outline-none focus:border-lime transition-colors" />
      <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.08] text-white placeholder-white/25 font-jakarta text-sm rounded focus:outline-none focus:border-lime transition-colors" />
      <input type="text" placeholder="Your Town / City" className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.08] text-white placeholder-white/25 font-jakarta text-sm rounded focus:outline-none focus:border-lime transition-colors" />
      <input type="text" placeholder="Your Postcode" className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.08] text-white placeholder-white/25 font-jakarta text-sm rounded focus:outline-none focus:border-lime transition-colors" />
      <select className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.08] text-white/70 font-jakarta text-sm rounded focus:outline-none focus:border-lime transition-colors">
        <option value="" className="bg-gray-800">ADI Status</option>
        <option className="bg-gray-800">Fully Qualified ADI</option>
        <option className="bg-gray-800">PDI — Currently Training</option>
        <option className="bg-gray-800">Interested in Training</option>
      </select>
      <select className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.08] text-white/70 font-jakarta text-sm rounded focus:outline-none focus:border-lime transition-colors">
        <option value="" className="bg-gray-800">Hours available per week?</option>
        <option className="bg-gray-800">Under 10 hrs (part-time)</option>
        <option className="bg-gray-800">10–20 hrs</option>
        <option className="bg-gray-800">20–30 hrs</option>
        <option className="bg-gray-800">30+ hrs (full-time)</option>
      </select>
      <textarea rows={2} placeholder="Anything else? (optional)" className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.08] text-white placeholder-white/25 font-jakarta text-sm rounded focus:outline-none focus:border-lime transition-colors resize-none" />
      <button type="submit" className="w-full bg-lime text-ink font-syne font-bold text-sm tracking-widest uppercase py-4 rounded hover:bg-white transition-colors mt-1">
        Send My Application ↗
      </button>
      <p className="text-center text-white/20 text-xs">We&apos;ll be in touch within 24 hours. No spam, ever.</p>
    </form>
  );
}
