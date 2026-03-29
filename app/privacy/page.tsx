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
              Your Privacy at UNIEVENTS
            </h1>
            <p className="text-base md:text-lg text-[#475569] font-medium leading-relaxed mb-8">
              At UNIEVENTS, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our platform.
            </p>
            <div className="grid gap-8">
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  1. Information We Collect
                </h2>
                <div className="text-[#475569] leading-relaxed">
                  We may collect the following information:
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Name, email address, and phone number</li>
                    <li>College or organization details</li>
                    <li>Event participation and ticket information</li>
                    <li>Payment-related information (processed via third-party services)</li>
                  </ul>
                </div>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  2. How We Use Your Information
                </h2>
                <div className="text-[#475569] leading-relaxed">
                  We use the collected data to:
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Enable event registration and ticket booking</li>
                    <li>Process payments securely</li>
                    <li>Generate certificates and provide event-related services</li>
                    <li>Communicate updates, notifications, and important information</li>
                    <li>Improve our platform and user experience</li>
                  </ul>
                </div>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  3. Payment Processing
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  We use secure third-party payment gateways to process payments. We do not store your card or banking details on our servers.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  4. Data Sharing
                </h2>
                <div className="text-[#475569] leading-relaxed">
                  We do not sell or rent your personal data. However, we may share limited information with trusted third-party services such as:
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Payment gateways</li>
                    <li>Email and notification service providers</li>
                  </ul>
                  only to operate and improve our platform.
                </div>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  5. Data Security
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  We implement reasonable security measures to protect your information from unauthorized access, misuse, or disclosure.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  6. Cookies
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  We may use cookies and similar technologies to enhance user experience and improve our services.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  7. User Rights
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  Users may request access, correction, or deletion of their personal data by contacting us.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  8. Third-Party Links
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  Our platform may contain links to third-party websites. We are not responsible for their privacy practices.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  9. Changes to This Policy
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  We may update this Privacy Policy from time to time. Users are advised to review this page periodically.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  10. Contact Us
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  If you have any questions or concerns regarding this Privacy Policy, you can contact us at:<br/><br/>
                  <a href="mailto:support@unievents.in" className="text-blue-600 hover:text-blue-800 underline">support@unievents.in</a><br/><br/>
                  By using our platform, you agree to this Privacy Policy.
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
