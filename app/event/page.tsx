"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import HorizontalSlider from "../Components/HorizontalSlider";

import Howitwork from "../howitwork/page";

/* ---------------- TYPES ---------------- */
interface EventItem {
  id: string;
  title: string;
  date: string;
  isWeekend: boolean;
  location: string;
  seats: string;
  price?: string;
  tag: string;
  isFree?: boolean;
  image: string;
  gradient: string;
}

/* ---------------- FILTERS ---------------- */
const FILTERS = [
  "All Events",
  "This Weekend",
  "Free",
  "Paid",
  "Tech",
  "Workshop",
  "Hackathon",
];

/* ---------------- DATA ---------------- */
const EVENTS: EventItem[] = [
  {
    id: "1",
    title: "IIT BLR Techfest 2025",
    date: "Apr 15, 2026",
    isWeekend: true,
    location: "Bangalore, Karnataka",
    seats: "120 Seats",
    price: "₹399",
    tag: "Tech",
    isFree: false,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1500&q=80",
    gradient: "from-[#FFA500] to-[#B87333]",
  },
  {
    id: "2",
    title: "React & Next.js Deep Dive Workshop",
    date: "Apr 15, 2026",
    isWeekend: true,
    location: "Chandigarh, Punjab",
    seats: "120 Seats",
    price: "Free",
    tag: "Workshop",
    isFree: true,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1500&q=80",
    gradient: "from-[#FF00FF] to-[#800080]",
  },
  {
    id: "3",
    title: "National Tech Summit",
    date: "Apr 15, 2026",
    isWeekend: true,
    location: "Chandigarh, Punjab",
    seats: "120 Seats",
    price: "₹399",
    tag: "Tech",
    isFree: false,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1500&q=80",
    gradient: "from-[#7ED321] to-[#417505]",
  },

  {
    id: "4",
    title: "React & Next.js Deep Dive Workshop ",
    date: "Apr 16, 2026",
    isWeekend: true,
    location: "Chennai, Tamil Nadu",
    seats: "150 Seats",
    price: "Free",
    tag: "Workshop",
    isFree: true,
    image:
      "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?auto=format&fit=crop&w=1500&q=80",
    gradient: "from-[#FF00FF] to-[#800080]",
  },

  {
    id: "5",
    title: "Indie Nights – Acoustic Edition",
    date: "Apr 15, 2026",
    isWeekend: true,
    location: "Chandigarh, Punjab",
    seats: "120 Seats",
    price: "₹399",
    tag: "Music",
    isFree: false,
    image: "https://media.timeout.com/images/101815589/image.jpg",
    gradient: "from-[#F8E71C] to-[#BDB400]",
  },
  {
    id: "6",
    title: "Cultural Acoustic Night",
    date: "Apr 15, 2026",
    isWeekend: true,
    location: "Chandigarh, Punjab",
    seats: "120 Seats",
    price: "Free",
    tag: "Cultural",
    isFree: true,
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1500&q=80",
    gradient: "from-[#9333EA] to-[#581C87]",
  },
];

const STEPS = [
  { id: "01", label: "Step 1" },
  { id: "02", label: "Step 2" },
  { id: "03", label: "Step 3" },
  { id: "04", label: "Step 4" },
];

/* ---------------- COMPONENT ---------------- */
export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState("All Events");

  const filteredEvents = useMemo(() => {
    switch (activeFilter) {
      case "All Events":
        return EVENTS;
      case "This Weekend":
        return EVENTS.filter((e) => e.isWeekend);
      case "Free":
        return EVENTS.filter((e) => e.isFree);
      case "Paid":
        return EVENTS.filter((e) => !e.isFree);
      case "Tech":
        return EVENTS.filter((e) => e.tag === "Tech" || e.tag === "Hackathon");
      case "Workshop":
        return EVENTS.filter((e) => e.tag === "Workshop");
      case "Hackathon":
        return EVENTS.filter((e) => e.tag === "Hackathon");
      default:
        return EVENTS;
    }
  }, [activeFilter]);

  const handlePayment = async (event: EventItem) => {
    try {
      const amount = event.price ? parseInt(event.price.replace(/[₹,]/g, "")) : 0;
      
      if (amount <= 0 && !event.isFree) {
        alert("Invalid amount");
        return;
      }

      if (event.isFree) {
        alert("This event is free! Booking successful.");
        return;
      }

      const response = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const order = await response.json();

      if (order.error) {
        throw new Error(order.error);
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_placeholder",
        amount: order.amount,
        currency: order.currency,
        name: "UniEvents",
        description: `Booking for ${event.title}`,
        order_id: order.id,
        handler: function (response: any) {
          alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: "Test User",
          email: "test@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#2563EB",
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error: any) {
      console.error("Payment Error:", error);
      alert(`Payment failed: ${error.message}`);
    }
  };

  return (
    <div id="events" className="min-h-screen bg-[#EBF4FF] font-sans selection:bg-blue-200 relative overflow-hidden scroll-mt-24">
      <section className="px-6 md:px-16 pb-24">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-[40px] md:text-[64px] font-black text-[#0A0A0A] tracking-tight leading-none mb-4">
            Events Happening <span className="text-[#4A7DFF]">Near You</span>
          </h2>
          <p className="text-[#A0AEC0] font-bold text-lg md:text-xl">
            Handpicked Events Across The Cities For You. All For You Mood And
            Vibes.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-12 justify-center md:justify-center">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all border ${activeFilter === filter
                  ? "bg-[#2563EB] text-white border-[#2563EB] shadow-md"
                  : "bg-white text-gray-500 border-gray-100 hover:border-blue-200"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Event Grid */}
        {/* Event Grid */}
        <HorizontalSlider>
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col h-full border border-gray-100/50 w-[300px] md:w-[380px]"
            >
              {/* Card Header (Real Unsplash image for each event) */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={event.image}
                  alt={`${event.title} image`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/30" />

                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-end z-10">
                    {event.isFree && (
                      <span className="bg-[#C6F6D5] text-[#22543D] text-[11px] font-black px-3 py-1.5 rounded-full shadow-sm">
                        Free
                      </span>
                    )}
                  </div>
                  <div className="z-10">
                    <span className="px-4 py-1.5 rounded-full bg-[#F8FAFC87] backdrop-blur-md text-black text-[12px] font-bold border border-white/30 shadow-[inset_0_2px_6px_rgba(255,255,255,0.4),_0_2px_6px_rgba(0,0,0,0.1)]">
                      {event.tag}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="px-6 py-5 flex-grow">
                <h3 className="text-[22px] font-black text-[#0A0A0A] mb-4 tracking-tight">
                  {event.title}
                </h3>

                {/* Detailed info in a single flex-wrapped row */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
                  <div className="flex items-center gap-2 text-[#718096]">
                    <Calendar
                      size={20}
                      strokeWidth={2.5}
                      className="text-[#A0AEC0]"
                    />
                    <span className="font-bold text-sm tracking-tight">
                      {event.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[#718096]">
                    <MapPin
                      size={20}
                      strokeWidth={2.5}
                      className="text-[#A0AEC0]"
                    />
                    <span className="font-bold text-sm tracking-tight">
                      {event.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[#718096]">
                    <Users
                      size={20}
                      strokeWidth={2.5}
                      className="text-[#A0AEC0]"
                    />
                    <span className="font-bold text-sm tracking-tight">
                      {event.seats}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer (Matches image_2119e2.png) */}
              <div className="px-6 py-5 flex items-center justify-between border-t border-gray-100 mx-2">
                <div className="text-2xl font-black text-[#0A0A0A]">
                  {event.price || <span className="text-gray-300">Free</span>}
                </div>
                <button 
                  onClick={() => handlePayment(event)}
                  className="flex items-center gap-2 text-[#2563EB] font-black text-[15px] bg-[#DDE8FF] px-6 py-3 rounded-full hover:bg-blue-100 transition-all group/btn shadow-sm shadow-blue-100/50"
                >
                  Book Now
                  <ArrowRight
                    size={18}
                    strokeWidth={2.5}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}

          {filteredEvents.length === 0 && (
            <div className="py-20 text-center w-full">
              <p className="text-gray-400 font-bold text-lg">
                No events found for this filter.
              </p>
            </div>
          )}
        </HorizontalSlider>
      </section>

      {/* How It Works Section */}
      <section className="px-6 md:px-16 pb-32">
        <div className="max-w-[1200px] mx-auto border border-[#4A7DFF]/20 rounded-3xl p-12 relative overflow-hidden bg-[#EBF4FF]/50 backdrop-blur-sm">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-[#1E3A8A] rounded-full opacity-30"></div>
              <h3 className="text-[#1E3A8A] font-black text-xl tracking-tight">
                How It Works
              </h3>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-black tracking-tight leading-tight">
              Book your seat in 4 simple steps
            </h2>
          </div>

          {/* Steps Flow */}
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0 px-4">
            {/* Connecting Line (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#1E3A8A]/10 -translate-y-1/2 hidden md:block"></div>

            {STEPS.map((step) => (
              <div
                key={step.id}
                className="relative z-10 flex flex-col items-center"
              >
                {/* Numbered Circle */}
                <div className="w-24 h-24 md:w-32 md:h-32 bg-[#1E3A8A] text-white rounded-full flex items-center justify-center text-4xl md:text-5xl font-black border-8 border-white shadow-[0_10px_30px_rgba(30,58,138,0.2)] transition-transform hover:scale-105 cursor-default select-none">
                  {step.id}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Howitwork />

      {/* Background Decor */}
      <div className="pointer-events-none fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-100/30 via-white/10 to-transparent -z-10 blur-xl" />
      <div className="pointer-events-none fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent -z-10" />
    </div>
  );
}
