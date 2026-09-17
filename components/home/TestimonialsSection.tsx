/**
 * TestimonialsSection — new section (not in the original reference page),
 * extended to match Sanjeevika's visual language: tinted rose/teal cards
 * and the same section-tag / heading-section rhythm used by Doctors,
 * Services and Contact. Alternates rose (women's care) and teal (child
 * care) per card so it reads as one family with the rest of the page.
 */

import { Star } from "lucide-react";

type Testimonial = {
  tone: "rose" | "teal";
  initials: string;
  name: string;
  role: string;
  quote: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    tone: "rose",
    initials: "PS",
    name: "Priya Srivastava",
    role: "Mother of 2, Rapti Nagar",
    quote:
      "Dr. Ruby Verma made my second pregnancy feel calm and cared for from the very first visit. The clinic feels warm, not clinical.",
  },
  {
    tone: "teal",
    initials: "AM",
    name: "Anjali Mishra",
    role: "Mother, Chargawan",
    quote:
      "Dr. Ashish Verma is so patient with my son during checkups — he actually looks forward to vaccination day now.",
  },
  {
    tone: "rose",
    initials: "KP",
    name: "Kavita Pandey",
    role: "Patient, Gorakhpur",
    quote:
      "I'd been putting off a PCOS concern for months. Got straightforward advice and timely care, without unnecessary tests.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section testimonials bg-cream" id="testimonials">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag text-hi">मरीज़ों की राय</span>
          <h2 className="heading-section mt-3.5">
            What families say about Sanjeevika
          </h2>
          <p className="body-base mt-[14px] text-[1.02rem]">
            Real experiences from mothers and families who&apos;ve trusted us
            with their care.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.initials} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ tone, initials, name, role, quote }: Testimonial) {
  const isRose = tone === "rose";

  return (
    <div
      className={`flex h-full flex-col rounded-xl p-[34px_30px] transition-transform duration-300 hover:-translate-y-1 ${
        isRose ? "card-tint-rose" : "card-tint-teal"
      }`}
    >
      <div className="mb-4 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={isRose ? "fill-rose text-rose" : "fill-teal text-teal"}
          />
        ))}
      </div>

      <p className="flex-1 text-[0.98rem] leading-relaxed text-ink-soft">
        &ldquo;{quote}&rdquo;
      </p>

      <div className="mt-6 flex items-center gap-3">
        <div
          className={`flex size-11 flex-none items-center justify-center rounded-full font-display text-[0.92rem] font-semibold text-white ${
            isRose ? "bg-rose" : "bg-teal"
          }`}
        >
          {initials}
        </div>
        <div>
          <p className="text-[0.92rem] font-semibold text-ink">{name}</p>
          <span className="text-[0.82rem] text-ink-soft">{role}</span>
        </div>
      </div>
    </div>
  );
}