import NavigationBar from "../Components/NavigationBar";
import Footer from "../Footer/pages";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#EBF4FF] font-sans text-[#0A0A0A]">
      <NavigationBar />
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <section className="rounded-4xl bg-white border border-blue-100 shadow-sm p-10 md:p-14">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-[0.3em] text-[#4A7DFF] font-bold mb-4">
              Terms & Conditions
            </p>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              UniEvents Terms of Use
            </h1>
            <p className="text-base md:text-lg text-[#475569] font-medium leading-relaxed mb-8">
              These terms govern your use of the UniEvents platform. By
              accessing or using the site, you agree to follow these terms and
              any policies referenced herein.
            </p>
            <div className="grid gap-8">
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  1. Access and Use
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  You may use UniEvents for lawful personal and organizational
                  event discovery, booking, and hosting. You agree not to misuse
                  the platform or attempt to interfere with other users’ access.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  2. Account Responsibility
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  Keep your account information secure and accurate. You are
                  responsible for activity that occurs under your account,
                  including bookings or event management actions.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  3. Content and Conduct
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  You agree not to post spam, abusive content, or illegal
                  material. UniEvents may remove content and suspend accounts
                  that violate these terms.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  4. Payment and Cancellation
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  Ticket purchases and refunds are subject to the event
                  organizer’s stated policies. UniEvents acts as a technology
                  platform and may not be responsible for organizer-specific
                  refund decisions.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  5. Updates to Terms
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  We may update these terms periodically. Continued use of
                  UniEvents after changes means you accept the revised terms.
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
