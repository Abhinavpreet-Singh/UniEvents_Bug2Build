import NavigationBar from "../Components/NavigationBar";
import Footer from "../Footer/pages";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#EDF5FF] font-sans text-[#0A0A0A]">
      <NavigationBar />
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <section className="rounded-4xl bg-white border border-slate-200 shadow-sm p-10 md:p-14">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-[0.3em] text-[#4A7DFF] font-bold mb-4">
              Privacy Policy
            </p>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Your Privacy at UniEvents
            </h1>
            <p className="text-base md:text-lg text-[#475569] font-medium leading-relaxed mb-8">
              We collect and use information to help you discover and manage
              events while protecting your privacy. This policy explains how
              your data is handled.
            </p>
            <div className="grid gap-8">
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  1. Information We Collect
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  We collect information you provide directly, such as name,
                  email, event preferences, and payment details when you book
                  tickets or host events.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  2. How We Use Data
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  Your data is used to create your account, process bookings,
                  send updates, and improve the platform. We also use it to
                  personalize your event recommendations.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  3. Data Sharing
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  We do not sell your personal information. We may share it with
                  event organizers as needed to fulfill bookings and with
                  service providers under strict confidentiality.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  4. Security
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  We maintain reasonable security safeguards to protect your
                  information. However, no internet transmission is completely
                  secure, so please use care when sharing sensitive data.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  5. Changes to this Policy
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  We may update this policy to reflect changes in our service or
                  legal obligations. Continued use after updates means you
                  accept the new terms.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
