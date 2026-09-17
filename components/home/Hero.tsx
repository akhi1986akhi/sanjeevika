/**
 * Hero — matches the <section class="hero"> block in the reference index.html
 * 1:1, rebuilt with Tailwind v4 utilities generated from the Mamta theme
 * tokens (styles/theme.css) plus the shared typography/button classes.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-11 pb-10 md:pt-[76px] md:pb-[60px]">
      <div className="wrap grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* ---------------- Left: copy ---------------- */}
        <div>
          <div className="eyebrow mb-[22px]">
            <span className="dot" />
            Gorakhpur, Rapti Nagar Phase-2
          </div>

          <h1 className="heading-hero">
            Care for <span className="accent">mother</span> and child, at every
            stage.
          </h1>

          <p className="body-lead mt-[22px]">
            From pregnancy to parenthood, Sanjeevika brings gynaecology and
            paediatric care together under one roof — led by two specialists
            your family can grow with.
            <span className="text-hi-sans mt-2 block text-[1.12rem] text-ink">
              माँ और बच्चे की सम्पूर्ण देखभाल, एक ही छत के नीचे।
            </span>
          </p>

          <div className="mt-[34px] flex flex-wrap gap-[14px]">
            <a className="btn-primary" href="tel:+919453022762">
              📞 Call 94530 22762
            </a>
            <a className="btn-secondary" href="#contact">
              Get Directions
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 sm:mt-[46px] sm:gap-[34px]">
            <div>
              <b className="stat-number">2</b>
              <span className="stat-label">Specialist doctors</span>
            </div>
            <div>
              <b className="stat-number">KGMU</b>
              <span className="stat-label">Trained &amp; ESIC experienced</span>
            </div>
            <div>
              <b className="stat-number">16+</b>
              <span className="stat-label">Care services offered</span>
            </div>
          </div>
        </div>

        {/* ---------------- Right: visual ---------------- */}
        <div className="relative flex min-h-[340px] items-center justify-center lg:order-none lg:min-h-[440px]">
          <div className="absolute top-[-14px] right-2 z-[3] rounded-md bg-teal px-[18px] py-[10px] text-[0.82rem] font-semibold text-white shadow-teal-md">
            🍼 Newborn care
          </div>

          <div className="card-surface animate-float-in relative z-[2] w-full max-w-[380px] rounded-2xl px-8 py-[38px] shadow-card">
            <VisualBadge
              tone="rose"
              icon="🤰"
              title="Prenatal & delivery care"
              subtitle="Normal & cesarean, by Dr. Ruby Verma"
            />
            <VisualBadge
              tone="teal"
              icon="🩺"
              title="Vaccination & growth checks"
              subtitle="By Dr. Ashish Verma, Paediatrician"
            />
            <VisualBadge
              tone="rose"
              icon="🌸"
              title="PCOS & fertility consults"
              subtitle="Confidential, women-first care"
              last
            />
          </div>

          <div className="absolute bottom-[26px] left-[-22px] z-[3] rounded-md bg-rose px-[18px] py-[10px] text-[0.82rem] font-semibold text-white shadow-rose-sm">
            💗 Women&apos;s health
          </div>
        </div>
      </div>
    </section>
  );
}

function VisualBadge({
  tone,
  icon,
  title,
  subtitle,
  last = false,
}: {
  tone: "rose" | "teal";
  icon: string;
  title: string;
  subtitle: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-[14px] py-[14px] ${
        last ? "" : "border-b border-line"
      }`}
    >
      <div
        className={`flex size-11 flex-none items-center justify-center rounded-sm ${
          tone === "rose" ? "bg-blush" : "bg-mint"
        }`}
      >
        {icon}
      </div>
      <div>
        <p className="text-[0.95rem] font-semibold text-ink">{title}</p>
        <span className="text-[0.8rem] text-ink-soft">{subtitle}</span>
      </div>
    </div>
  );
}