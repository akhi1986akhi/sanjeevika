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
      "These Terms of Service govern your use of the Sanjeevika Mother & Child Care website. By browsing this site, submitting an enquiry, or contacting us by phone or WhatsApp, you agree to these terms.",
    ],
  },
  {
    heading: "2. Use of this website",
    paragraphs: [
      "This website is provided for general information about Sanjeevika, our doctors, and our services. Submitting a contact form, call, or WhatsApp message is a request for an appointment or information — it is not a confirmed booking until our clinic acknowledges it.",
      "You agree to provide accurate contact details so we can reach you, and not to use this website for any unlawful or disruptive purpose.",
    ],
  },
  {
    heading: "3. Medical disclaimer",
    paragraphs: [
      "Content on this website is provided for general informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult Dr. Ruby Verma, Dr. Ashish Verma, or another qualified doctor regarding any medical condition.",
      "If you are experiencing a medical emergency, call your local emergency services or go to the nearest hospital immediately — do not wait for a response through this website, phone, or WhatsApp.",
    ],
  },
  {
    heading: "4. Appointments & communication",
    paragraphs: [
      "We aim to respond to calls, WhatsApp messages, and enquiries as quickly as possible during clinic hours, but response times are not guaranteed. For anything urgent, please call the clinic directly rather than relying on a written message.",
    ],
  },
  {
    heading: "5. Intellectual property",
    paragraphs: [
      "The Sanjeevika name, logo, and the text, images, and design on this website belong to Sanjeevika Mother & Child Care unless stated otherwise, and may not be copied or reused without our permission.",
    ],
  },
  {
    heading: "6. Third-party links & services",
    paragraphs: [
      "This site may link to, or connect you with, third-party services such as WhatsApp or map/navigation apps. We are not responsible for the content, availability, or privacy practices of those third-party services.",
    ],
  },
  {
    heading: "7. Limitation of liability",
    paragraphs: [
      "To the extent permitted by law, Sanjeevika Mother & Child Care is not liable for any indirect or consequential loss arising from your use of this website. Nothing in these terms limits liability that cannot be excluded under applicable law.",
    ],
  },
  {
    heading: "8. Changes to these terms",
    paragraphs: [
      "We may update these Terms of Service from time to time. Changes take effect once posted on this page, so please check back periodically.",
    ],
  },
  {
    heading: "9. Governing law",
    paragraphs: [
      "These terms are governed by the laws of India, and any disputes will be subject to the jurisdiction of the courts in Gorakhpur, Uttar Pradesh.",
    ],
  },
  {
    heading: "10. Contact us",
    paragraphs: [
      "Questions about these terms can be sent to us at the address, phone number, or WhatsApp number listed on our Contact section.",
    ],
    list: [
      "Shop No. 102, A-5 Rapti Nagar, Phase-2, Dhruv Complex, Chargawan, Gorakhpur – 273013",
      "Phone / WhatsApp: 94530 22762, 92142 16616",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <LegalPageHeader
          eyebrow="नियम एवं शर्तें"
          title="Terms of Service"
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