/**
 * ContactSection — matches <section class="section contact" id="contact">
 * in the reference index.html: an info column (address / phone / hours)
 * paired with a gradient "book a visit" card of tap-to-call rows. Uses the
 * theme's existing `.form-card` (matches `.contact-card`) and
 * `.btn-call-row` (matches `.call-btn`) — no new tokens were needed.
 */

const ROWS = [
  {
    icon: "📍",
    title: "Shop No. 102, A-5 Rapti Nagar, Phase-2",
    detail: "Dhruv Complex, Chargawan, Gorakhpur – 273013",
  },
  {
    icon: "📞",
    title: "94530 22762  /  92142 16616",
    detail: "Available for calls & appointment booking",
  },
  {
    icon: "🕐",
    title: "Open all days",
    detail: "Call ahead to confirm doctor's timing",
  },
];

const CALLS = [
  { number: "94530 22762", tel: "+919453022762", tag: "Primary" },
  { number: "92142 16616", tel: "+919214216616", tag: "Alternate" },
];

export default function ContactSection() {
  return (
    <section className="section contact bg-paper" id="contact">
      <div className="wrap grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* ---------------- Left: info ---------------- */}
        <div>
          <span className="section-tag text-hi">संपर्क करें</span>
          <h2 className="heading-section mt-3.5 mb-4">
            Visit or call Sanjeevika
          </h2>
          <p className="mb-7 max-w-[44ch] text-[1rem] text-ink-soft">
            Walk in for a consultation, or call ahead to book a slot with Dr.
            Ruby Verma or Dr. Ashish Verma.
          </p>

          {ROWS.map(({ icon, title, detail }, i) => (
            <div
              key={title}
              className={`flex items-start gap-3.5 border-t border-line py-4 ${
                i === ROWS.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="flex size-[42px] flex-none items-center justify-center rounded-xs bg-blush">
                {icon}
              </div>
              <div>
                <p className="text-[0.98rem] font-semibold text-ink">
                  {title}
                </p>
                <span className="text-[0.88rem] text-ink-soft">{detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ---------------- Right: book-a-visit card ---------------- */}
        <div className="form-card">
          <h3 className="heading-card mb-2">Book a visit</h3>
          <p className="mb-6 text-[0.94rem] text-ink-soft">
            Choose a number below to call directly from your phone.
          </p>

          {CALLS.map(({ number, tel, tag }, i) => (
            <a
              key={tel}
              className={`btn-call-row ${i === CALLS.length - 1 ? "" : "mb-3"}`}
              href={`tel:${tel}`}
            >
              {number} <span>{tag}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}