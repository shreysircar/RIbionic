import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#025a6a] via-[#1a7385] to-[#4a9eb3]">
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative container mx-auto px-6 py-28">
          <div className="max-w-3xl">
            <span className="inline-block mb-4 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              Get In Touch
            </span>

            <h1 className="mb-6 text-5xl md:text-6xl font-bold text-white">
              Contact Us
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Have questions about our consulting, digital transformation,
              ERP, AI, or technology services? Our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <ContactForm />

            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Let's Start a Conversation
              </h2>

              <p className="mb-8 text-gray-600 leading-relaxed">
                Whether you're exploring business transformation,
                technology consulting, ERP implementation, or AI-driven
                solutions, we'd love to understand your needs and discuss
                how Ribionic can support your goals.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Email
                  </h3>
                  <p className="text-gray-600">
                    info@ribionic.com
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Business Inquiries
                  </h3>
                  <p className="text-gray-600">
                    We typically respond within 1 business day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}