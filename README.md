# UniEvents 🎓

UniEvents is a premium event discovery and booking platform tailored for university ecosystems. It allows students to explore campus life, workshops, and fests while providing organizers with a seamless hosting and ticketing experience.

## ✨ Features

- **Event Discovery**: Browse events by category (Tech, Music, Workshops, etc.).
- **Smart Filtering**: Quickly find free or paid events, or those happening this weekend.
- **Secure Payments**: Integrated with **Razorpay** for seamless ticket bookings.
- **Responsive Design**: Fully optimized for mobile and desktop with a modern aesthetic.
- **Interactive UI**: Smooth sliders, hover effects, and a landing-to-booking flow.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Payments**: [Razorpay SDK](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone <repository-url>
cd my-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory and add your Razorpay credentials:
```env
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
```

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📱 Project Structure

- `/app`: Application routes and main pages.
- `/app/Components`: Reusable UI components.
- `/app/api`: Backend API routes (e.g., Razorpay order creation).
- `/assets`: Brand logos and static images.

---
Built with ❤️ for better campus experiences.
