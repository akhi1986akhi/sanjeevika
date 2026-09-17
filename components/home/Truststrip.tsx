/**
 * TrustStrip — matches the <div class="trust"> credentials bar in the
 * reference index.html (the dark strip listing degrees/affiliations right
 * below the hero). Built from the Mamta theme's `ink` / `mist` tokens.
 */

const CREDENTIALS = [
  { label: "MBBS", detail: "King George's Medical University, Lucknow" },
  { label: "MD Obs.&Gynae", detail: "KGMU, Lucknow" },
  { label: "DCH & DNB", detail: "KGMU / SGMH, Delhi" },
  { label: "Ex-ESIC Hospital", detail: "New Delhi" },
];

export default function TrustStrip() {
  return (
    <div className="bg-ink py-[22px] text-white">
      <div className="wrap flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {CREDENTIALS.map(({ label, detail }) => (
          <div
            key={label}
            className="flex items-center gap-2.5 text-[0.9rem] text-mist/90"
          >
            <b className="font-bold text-white">{label}</b>&nbsp;— {detail}
          </div>
        ))}
      </div>
    </div>
  );
}