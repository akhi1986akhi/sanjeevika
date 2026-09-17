/**
 * ServicesSection — matches <section class="section services" id="services">
 * in the reference index.html: a centered header + two service columns
 * (women's care / child care), each a bulleted list of offerings.
 */

type ServiceColumn = {
  tone: "rose" | "teal";
  mark: string;
  titleHi: string;
  leaf: string;
  items: string[];
};

const COLUMNS: ServiceColumn[] = [
  {
    tone: "rose",
    mark: "🤰",
    titleHi: "महिला एवं प्रसूति रोग सेवाएं",
    leaf: "🌷",
    items: [
      "गर्भावस्था जाँच एवं देखभाल",
      "प्रसव पूर्व एवं प्रसवोत्तर देखभाल",
      "सामान्य एवं सिजेरियन डिलीवरी",
      "अनियमित पीरियड्स का इलाज",
      "पोलीसिस्टिक ओवरी (PCOS)",
      "फाइब्रॉयड, सिस्ट एवं ट्यूमर का इलाज एवं ऑपरेशन",
      "बांझपन (Infertility) परामर्श",
      "परिवार नियोजन एवं परामर्श",
    ],
  },
  {
    tone: "teal",
    mark: "👶",
    titleHi: "बाल एवं शिशु रोग सेवाएं",
    leaf: "🌿",
    items: [
      "नवजात शिशु की जांच एवं देखभाल",
      "टीकाकरण (Vaccination)",
      "बच्चों की नियमित स्वास्थ्य जांच",
      "बच्चों में होने वाले संक्रमण का इलाज",
      "बच्चों में खांसी, जुकाम, बुखार का इलाज",
      "पेट से जुड़ी समस्याओं का इलाज",
      "बच्चों की पोषण संबंधी परामर्श",
      "विकास संबंधी समस्याओं का मूल्यांकन",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="section services bg-cream" id="services">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag text-hi">हमारी सेवाएं</span>
          <h2 className="heading-section mt-3.5">
            Everything mother and child need, covered
          </h2>
          <p className="body-base mt-[14px] text-[1.02rem]">
            Two focused practices, side by side — women&apos;s health and
            child health, each with dedicated care pathways.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2">
          {COLUMNS.map((col) => (
            <ServiceCol key={col.titleHi} {...col} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCol({ tone, mark, titleHi, leaf, items }: ServiceColumn) {
  const isRose = tone === "rose";

  return (
    <div
      className={`rounded-lg p-[36px_32px] ${isRose ? "bg-blush" : "bg-mint"}`}
    >
      <div className="mb-[22px] flex items-center gap-3">
        <div
          className={`flex size-[38px] flex-none items-center justify-center rounded-2xs ${
            isRose ? "bg-rose" : "bg-teal"
          }`}
        >
          {mark}
        </div>
        <h3 className="heading-sm text-hi">{titleHi}</h3>
      </div>

      <ul>
        {items.map((item, i) => (
          <li
            key={item}
            className={`flex items-start gap-3 py-[11px] text-[0.98rem] text-ink ${
              i === items.length - 1 ? "" : "border-b border-hairline"
            }`}
          >
            <span className="mt-1 flex-none">{leaf}</span>
            <span className="text-hi">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}