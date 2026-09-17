/**
 * WhatsAppFloatButton — new component (not in the original reference page):
 * a floating "chat on WhatsApp" bubble fixed to the bottom-right corner on
 * every breakpoint. Sits above StickyCallBar on mobile (bottom-24) so the
 * two never overlap, and settles into the plain corner (bottom-6) once
 * StickyCallBar is hidden at md+. A soft ping ring behind the icon keeps it
 * feeling alive rather than static.
 */

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloatButton() {
  return (
    <a
      href="https://wa.me/919453022762"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sanjeevika on WhatsApp"
      className="fixed right-5 bottom-24 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_24px_-8px_rgb(37_211_102_/_55%)] transition-transform duration-200 hover:scale-105 active:scale-95 md:right-6 md:bottom-6"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/60" />
      <MessageCircle size={26} strokeWidth={2} />
    </a>
  );
}