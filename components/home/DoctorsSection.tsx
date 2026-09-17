/**
 * DoctorsSection — matches <section class="section doctors" id="doctors">
 * in the reference index.html: section header + two tinted doctor cards.
 */

type Doctor = {
  tone: "rose" | "teal";
  initials: string;
  nameHi: string;
  roleHi: string;
  bio: string;
  credentials: string[];
};

const DOCTORS: Doctor[] = [
  {
    tone: "rose",
    initials: "RV",
    nameHi: "डॉ. रूबी वर्मा",
    roleHi: "स्त्री एवं प्रसूति रोग विशेषज्ञ",
    bio: "Gynaecologist & Obstetrician, specialising in prenatal care, deliveries and women's reproductive health.",
    credentials: [
      "M.B.B.S. — K.G.M.U., Lucknow",
      "M.D. Obs. & Gynae — K.G.M.U., Lucknow",
      "Former Senior Doctor, E.S.I.C. Hospital, New Delhi",
      "Dr. Baba Saheb Ambedkar Medical College, New Delhi",
    ],
  },
  {
    tone: "teal",
    initials: "AV",
    nameHi: "डॉ. आशीष वर्मा",
    roleHi: "बाल रोग विशेषज्ञ",
    bio: "Paediatrician, caring for newborns and children through checkups, vaccination and growth milestones.",
    credentials: ["MBBS — KGMU, Lucknow", "DCH — KGMU, Lucknow", "DNB — SGMH, Delhi"],
  },
];

export default function DoctorsSection() {
  return (
    <section className="section doctors bg-paper" id="doctors">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag text-hi">हमारे विशेषज्ञ चिकित्सक</span>
          <h2 className="heading-section mt-3.5">
            Meet the doctors behind Sanjeevika
          </h2>
          <p className="body-base mt-[14px] text-[1.02rem]">
            Two specialists, one shared belief — that mother and child
            deserve care that&apos;s thorough, gentle and close to home.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {DOCTORS.map((doc) => (
            <DoctorCard key={doc.initials} {...doc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DoctorCard({ tone, initials, nameHi, roleHi, bio, credentials }: Doctor) {
  const isRose = tone === "rose";

  return (
    <div
      className={`relative overflow-hidden rounded-xl p-[38px_34px] ${
        isRose ? "card-tint-rose" : "card-tint-teal"
      }`}
    >
      <div className="mb-[22px] flex items-center gap-[18px]">
        <div
          className={`flex size-[74px] flex-none items-center justify-center rounded-full font-display text-[1.5rem] font-semibold text-white ${
            isRose ? "bg-rose" : "bg-teal"
          }`}
        >
          {initials}
        </div>
        <div>
          <h3 className="heading-card text-hi">{nameHi}</h3>
          <div
            className={`mt-0.5 text-[0.92rem] font-semibold ${
              isRose ? "text-rose-deep" : "text-teal-deep"
            } text-hi`}
          >
            {roleHi}
          </div>
        </div>
      </div>

      <p className="text-[0.95rem] text-ink-soft">{bio}</p>

      <ul className="mt-5 border-t border-line pt-[18px]">
        {credentials.map((c) => (
          <li
            key={c}
            className={`relative py-[5px] pl-5 text-[0.92rem] text-ink-soft before:absolute before:left-0 before:top-3 before:size-[7px] before:rounded-full ${
              isRose ? "before:bg-rose" : "before:bg-teal"
            }`}
          >
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}