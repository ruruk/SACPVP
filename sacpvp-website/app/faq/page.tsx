import type { Metadata } from "next";
import { generateMetadata, generateStructuredData } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about SACPVP, property valuer registration, examinations, and professional requirements in South Africa.",
  keywords: [
    "SACPVP FAQ",
    "property valuer questions",
    "registration questions",
    "examination FAQ",
    "professional requirements",
    "property valuation FAQ",
  ],
  url: "/faq",
});

export default function FAQPage() {
  const faqData = [
    {
      question: "What is SACPVP?",
      answer:
        "The South African Council for the Property Valuers Profession (SACPVP) is the regulatory body responsible for regulating and advancing the property valuation profession in South Africa.",
    },
    {
      question: "How do I register as a property valuer?",
      answer:
        "To register as a property valuer, you need to complete the application form available on our registration page, meet the educational requirements, and provide evidence of relevant experience in property valuation.",
    },
    {
      question: "What are the different types of registration?",
      answer:
        "SACPVP offers several registration categories including Professional Valuer (Pr Val), Professional Associated Valuer (Pr AVal), Candidate Valuer, and Single Residential Property Assessor.",
    },
    {
      question: "When are the examinations held?",
      answer:
        "Examinations are typically held twice a year. Please check our examinations page for the latest schedules and registration deadlines.",
    },
    {
      question: "What are the CPD requirements?",
      answer:
        "Professional valuers are required to complete 50 CPD hours over a 5-year cycle to maintain their registration status.",
    },
    {
      question: "How can I verify if someone is a registered valuer?",
      answer:
        "You can search for registered valuers using our member directory on the registered members page, which allows you to verify registration status by name or registration number.",
    },
    {
      question: "What standards do property valuers follow?",
      answer:
        "Property valuers in South Africa follow the South African Valuation Standards (SAVS), which include International Valuation Standards (IVS) and Municipal Valuations for Property Rating (MVPR).",
    },
    {
      question: "How do I lodge a complaint against a valuer?",
      answer:
        "Complaints can be lodged using the complaint form available in our legal documents section. The process is outlined in our disciplinary procedures.",
    },
  ];

  const structuredData = generateStructuredData("FAQPage", {
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div className="container py-10">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">
                {faq.question}
              </h2>
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
          <p className="text-gray-700 mb-4">
            If you can't find the answer you're looking for, please don't
            hesitate to contact us.
          </p>
          <div className="space-y-2">
            <p>
              <strong>Email:</strong> info@sacpvp.co.za
            </p>
            <p>
              <strong>Phone:</strong> +27 (0) 11 123 4567
            </p>
            <p>
              <strong>Address:</strong> SACPVP Office, Johannesburg, South
              Africa
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
