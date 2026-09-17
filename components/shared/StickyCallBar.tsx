/**
 * StickyCallBar — new component (not in the original reference page): a
 * fixed bottom action bar, mobile-only, that keeps "Call Now" and
 * "WhatsApp" within thumb's reach at all times. Built entirely from
 * existing Mamta theme tokens (`btn-primary`, `btn-secondary`) — no new
 * styles were needed. Safe-area aware so it sits above the home-indicator
 * on notched phones instead of being clipped by it.
 */

export default function StickyCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 flex items-center gap-3 border-t border-line bg-cream/95 px-4 py-3 shadow-[0_-8px_20px_-10px_rgb(42_22_32_/_25%)] backdrop-blur-md md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href="https://wa.me/919453022762"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary flex-1 justify-center"
      >
        WhatsApp
      </a>
      <a
        href="tel:+919453022762"
        className="btn-primary flex-1 justify-center"
      >
        📞 Call Now
      </a>
    </div>
  );
}