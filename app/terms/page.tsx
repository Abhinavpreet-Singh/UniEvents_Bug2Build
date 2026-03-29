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
              Welcome to UNIEVENTS
            </h1>
            <p className="text-base md:text-lg text-[#475569] font-medium leading-relaxed mb-8">
              By accessing or using our platform, you agree to comply with and be bound by the following Terms and Conditions.
            </p>
            <div className="grid gap-8">
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  1. Platform Usage
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  UNIEVENTS provides a platform for users to discover events, book tickets, and for organizers to create and manage events. Users agree to use the platform only for lawful purposes.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  2. User Accounts
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  Users may be required to create an account to access certain features. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  3. Event Listings
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  Event organizers are solely responsible for the accuracy of event details, including date, time, venue, and pricing. UNIEVENTS is not responsible for any changes, cancellations, or inaccuracies in event information.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  4. Ticketing and Payments
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  All payments are processed through secure third-party payment gateways. UNIEVENTS does not store any card or banking details.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  5. Cancellation and Refunds
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  Refunds and cancellations are subject to the policies defined by the event organizer. UNIEVENTS is not responsible for refund decisions but may assist in communication where required.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  6. Certificates and Digital Services
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  Certificates and other digital services provided through the platform are generated based on the data provided by users and organizers. UNIEVENTS is not responsible for incorrect information submitted.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  7. Prohibited Activities
                </h2>
                <div className="text-[#475569] leading-relaxed">
                  Users agree not to:
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Use the platform for fraudulent activities</li>
                    <li>Upload false or misleading information</li>
                    <li>Attempt to disrupt or harm the platform</li>
                  </ul>
                </div>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  8. Intellectual Property
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  All content, branding, and technology on UNIEVENTS are the property of the platform and may not be copied or reused without permission.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  9. Limitation of Liability
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  UNIEVENTS shall not be held liable for any direct or indirect damages arising from the use of the platform, including event cancellations or technical issues.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  10. Termination
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  We reserve the right to suspend or terminate user accounts that violate these terms without prior notice.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  11. Changes to Terms
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  UNIEVENTS may update these Terms and Conditions at any time. Continued use of the platform constitutes acceptance of the updated terms.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  12. Governing Law
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  These Terms shall be governed by and interpreted in accordance with the laws of India.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  13. Contact
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  For any queries, contact us at:<br/><br/>
                  <a href="mailto:contactt@unievent.in" className="text-blue-600 hover:text-blue-800 underline">contactt@unievent.in</a>
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
