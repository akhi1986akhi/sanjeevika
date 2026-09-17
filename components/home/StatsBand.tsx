/**
 * StatsBand — matches the <div class="band"> stats strip in the reference
 * index.html (the rose → teal gradient band that sits between Services and
 * Contact). Built from the Mamta theme's `bg-band-gradient` token plus the
 * inverted stat-number/stat-label pair added alongside it.
 */

const STATS = [
  { value: "2", label: "Specialists under one roof" },
  { value: "16+", label: "Women's & child services" },
  { value: "KGMU", label: "Lucknow-trained doctors" },
  { value: "ESIC", label: "Hospital experience, New Delhi" },
];

export default function StatsBand() {
  return (
    <div className="bg-band-gradient py-16">
      <div className="wrap grid grid-cols-2 gap-x-4 gap-y-[30px] text-center sm:gap-6 md:grid-cols-4 md:gap-6">
        {STATS.map(({ value, label }) => (
          <div key={label}>
            <b className="stat-number-invert">{value}</b>
            <span className="stat-label-invert">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}