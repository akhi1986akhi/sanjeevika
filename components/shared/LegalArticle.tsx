/**
 * LegalArticle — the reusable body for /terms and /privacy: a single
 * `.card-surface` sheet (same token used by the FAQ rows) holding a list
 * of heading + paragraph(s) + optional bullet list sections, so both
 * policy pages stay pixel-consistent with each other and the rest of the
 * site without duplicating markup.
 */

export type LegalSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export default function LegalArticle({
  sections,
}: {
  sections: LegalSection[];
}) {
  return (
    <section className="section bg-paper">
      <div className="wrap">
        <div className="card-surface mx-auto max-w-[760px] p-[42px_28px] md:p-[56px_60px]">
          {sections.map((s, i) => (
            <div key={s.heading} className={i === 0 ? "" : "mt-9"}>
              <h2 className="heading-card mb-3">{s.heading}</h2>

              {s.paragraphs.map((p, pi) => (
                <p
                  key={pi}
                  className="mb-3 text-[0.98rem] leading-relaxed text-ink-soft last:mb-0"
                >
                  {p}
                </p>
              ))}

              {s.list && (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[0.95rem] leading-relaxed text-ink-soft">
                  {s.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}