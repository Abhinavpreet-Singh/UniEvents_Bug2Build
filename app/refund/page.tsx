import NavigationBar from "../Components/NavigationBar";
import Footer from "../Footer/pages";

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-[#EBF4FF] font-sans text-[#0A0A0A]">
      <NavigationBar />
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <section className="rounded-4xl bg-white border border-blue-100 shadow-sm p-10 md:p-14">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-[0.3em] text-[#4A7DFF] font-bold mb-4">
              Refund Policy
            </p>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Refund & Cancellation Policy
            </h1>
            <p className="text-base md:text-lg text-[#475569] font-medium leading-relaxed mb-8">
              At UNIEVENTS, we aim to provide a smooth experience for both users and event organizers. This policy outlines the terms related to cancellations and refunds.
            </p>
            <div className="grid gap-8">
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  1. Event-Based Refunds
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  All ticket purchases made through UNIEVENTS are subject to the refund and cancellation policies defined by the respective event organizers.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  2. Organizer Responsibility
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  Event organizers are solely responsible for deciding whether refunds are applicable in case of event cancellation, rescheduling, or other changes.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  3. Platform Role
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  UNIEVENTS acts only as a platform to facilitate event discovery and ticket booking. We do not guarantee refunds unless explicitly stated by the event organizer.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  4. Non-Refundable Cases
                </h2>
                <div className="text-[#475569] leading-relaxed">
                  Refunds will not be provided in the following cases:
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Change of personal plans</li>
                    <li>Failure to attend the event</li>
                    <li>Incorrect details provided by the user</li>
                  </ul>
                </div>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  5. Event Cancellation
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  If an event is canceled by the organizer, the refund (if applicable) will be processed as per the organizer's policy.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  6. Processing Time
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  If a refund is approved, it may take 5–10 business days for the amount to reflect in the original payment method.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  7. Service Fees
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  Platform or convenience fees (if any) may be non-refundable.
                </p>
              </article>
              <article className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  8. Contact
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  For any refund-related queries, users may contact:<br/><br/>
                  <a href="mailto:support@unievents.in" className="text-blue-600 hover:text-blue-800 underline">support@unievents.in</a>
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
