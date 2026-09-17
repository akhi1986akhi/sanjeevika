/**
 * LegalPageHeader — small page-title band used at the top of /terms and
 * /privacy (and any future policy page). A lighter cousin of the hero:
 * cream background, the same section-tag / heading-section pair used
 * everywhere else, no imagery. `pt-32` clears the fixed Header, which is
 * transparent but keeps dark nav text, so it reads fine even without a
 * hero image behind it.
 */

export default function LegalPageHeader({
  eyebrow,
  title,
  updated,
}: {
  eyebrow: string;
  title: string;
  updated: string;
}) {
  return (
    <div className="bg-cream pt-32 pb-14 md:pt-40 md:pb-16">
      <div className="wrap">
        <span className="section-tag text-hi">{eyebrow}</span>
        <h1 className="heading-section mt-3.5">{title}</h1>
        <p className="mt-3 text-[0.9rem] text-ink-soft">
          Last updated: {updated}
        </p>
      </div>
    </div>
  );
}