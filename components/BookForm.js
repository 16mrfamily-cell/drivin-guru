'use client';

export default function BookForm() {
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
