import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import StickyCallBar from "@/components/shared/StickyCallBar";
import WhatsAppFloatButton from "@/components/shared/WhatsAppFloatButton";
import LegalPageHeader from "@/components/shared/LegalPageHeader";
import LegalArticle, { LegalSection } from "@/components/shared/LegalArticle";

const SECTIONS: LegalSection[] = [
  {
    heading: "1. Introduction",
    paragraphs: [
      "Sanjeevika Mother & Child Care respects your privacy. This policy explains what information we collect through this website, how we use it, and the choices you have.",
    ],
  },
  {
    heading: "2. Information we collect",
    paragraphs: [
      "When you contact us through this website, by phone, or by WhatsApp, we may collect the information you choose to share — typically your name, phone number, and the details of your enquiry.",
      "Like most websites, basic technical information (such as browser type or general location) may be collected automatically for security and to keep the site running smoothly.",
    ],
  },
  {
    heading: "3. How we use your information",
    paragraphs: [
      "We use the information you share to respond to your enquiry, confirm or reschedule appointments, and answer questions about our services. We do not sell your information to third parties.",
    ],
  },
  {
    heading: "4. Calls & WhatsApp messages",
    paragraphs: [
      "When you call or message us on WhatsApp, that conversation is also subject to your phone carrier's and WhatsApp's own privacy practices, which are outside our control. We keep call and message details only as long as needed to assist you with your care.",
    ],
  },
  {
    heading: "5. Data security",
    paragraphs: [
      "We take reasonable steps to keep the information you share with us secure. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "6. Third-party services",
    paragraphs: [
      "This website may use third-party services (for example, maps or messaging platforms) that have their own privacy policies. We encourage you to review those policies if you choose to use those services.",
    ],
  },
  {
    heading: "7. Children's information",
    paragraphs: [
      "We provide care for children as part of our services, but any medical or personal information about a child is collected in person at the clinic, with a parent or guardian present — not through this website.",
    ],
  },
  {
    heading: "8. Your choices",
    paragraphs: [
      "You can ask us what information we hold about you, request a correction, or ask us to delete information you've shared with us, by contacting us using the details below.",
    ],
  },
  {
    heading: "9. Changes to this policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes to our practices. The date at the top of this page shows when it was last updated.",
    ],
  },
  {
    heading: "10. Contact us",
    paragraphs: [
      "For any privacy-related questions, reach us at:",
    ],
    list: [
      "Shop No. 102, A-5 Rapti Nagar, Phase-2, Dhruv Complex, Chargawan, Gorakhpur – 273013",
      "Phone / WhatsApp: 94530 22762, 92142 16616",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <LegalPageHeader
          eyebrow="गोपनीयता नीति"
          title="Privacy Policy"
          updated="17 September 2026"
        />
        <LegalArticle sections={SECTIONS} />
      </main>
      <Footer />
      <StickyCallBar />
      <WhatsAppFloatButton />
    </>
  );
}