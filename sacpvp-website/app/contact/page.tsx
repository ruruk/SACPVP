import type { Metadata } from "next";
import { generateMetadata, generateStructuredData } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Contact Us",
  description:
    "Get in touch with SACPVP for inquiries about property valuer registration, examinations, professional standards, and general information about the property valuation profession in South Africa.",
  keywords: [
    "SACPVP contact",
    "property valuer contact",
    "registration inquiries",
    "examination information",
    "professional support",
    "contact SACPVP",
  ],
  url: "/contact",
});

export default function ContactPage() {
  const contactInfo = {
    organization: "South African Council for the Property Valuers Profession",
    email: "info@sacpvp.co.za",
    phone: "+27 (0) 11 123 4567",
    address: {
      street: "123 Professional Street",
      city: "Johannesburg",
      province: "Gauteng",
      postalCode: "2000",
      country: "South Africa",
    },
    officeHours: "Monday to Friday: 8:00 AM - 5:00 PM",
    timezone: "SAST (UTC+2)",
  };

  const structuredData = generateStructuredData("ContactPage", {
    mainEntity: {
      "@type": "Organization",
      name: contactInfo.organization,
      email: contactInfo.email,
      telephone: contactInfo.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: contactInfo.address.street,
        addressLocality: contactInfo.address.city,
        addressRegion: contactInfo.address.province,
        postalCode: contactInfo.address.postalCode,
        addressCountry: "ZA",
      },
      openingHours: "Mo-Fr 08:00-17:00",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: contactInfo.phone,
        contactType: "customer service",
        availableLanguage: "English",
        areaServed: "ZA",
      },
    },
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
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                Get in Touch
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="hover:text-blue-600"
                    >
                      {contactInfo.email}
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="hover:text-blue-600"
                    >
                      {contactInfo.phone}
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">Office Hours</h3>
                  <p className="text-gray-600">{contactInfo.officeHours}</p>
                  <p className="text-gray-600 text-sm">
                    {contactInfo.timezone}
                  </p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                Our Address
              </h2>
              <address className="text-gray-600 not-italic">
                <p>{contactInfo.organization}</p>
                <p>{contactInfo.address.street}</p>
                <p>
                  {contactInfo.address.city}, {contactInfo.address.province}
                </p>
                <p>{contactInfo.address.postalCode}</p>
                <p>{contactInfo.address.country}</p>
              </address>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Send us a Message
            </h2>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a subject</option>
                  <option value="registration">Registration Inquiry</option>
                  <option value="examination">Examination Information</option>
                  <option value="standards">Professional Standards</option>
                  <option value="complaint">Complaint</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Please provide details about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Response Times</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                General Inquiries
              </h3>
              <p className="text-gray-600">
                We typically respond within 2-3 business days
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Urgent Matters
              </h3>
              <p className="text-gray-600">
                For urgent matters, please call our office during business hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
