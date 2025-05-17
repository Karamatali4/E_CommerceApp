import { Form } from "@remix-run/react";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-between">
      
      {/* Header Navigation */}
      <header className="w-full shadow-sm p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Exclusive</h1>
        <nav className="space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/contact" className="hover:underline font-bold">Contact</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/signup" className="hover:underline">Sign Up</a>
        </nav>
      </header>

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 px-6 py-4">Home / Contact</div>

      {/* Main Section */}
      <main className="flex flex-col lg:flex-row gap-6 px-6 pb-12">

        {/* Contact Info */}
        <div className="w-full lg:w-1/3 bg-white border rounded-lg p-6 space-y-6 shadow">
          <div>
            <div className="flex items-center gap-2 text-red-600 font-semibold">
              <Phone size={20} /> Call To Us
            </div>
            <p className="text-sm mt-1">We are available 24/7, 7 days a week.</p>
            <p className="text-sm mt-1">Phone: +8801611112222</p>
          </div>

          <hr />

          <div>
            <div className="flex items-center gap-2 text-red-600 font-semibold">
              <Mail size={20} /> Write To Us
            </div>
            <p className="text-sm mt-1">Fill out our form and we will contact you within 24 hours.</p>
            <p className="text-sm mt-1">customer@exclusive.com</p>
            <p className="text-sm mt-1">support@exclusive.com</p>
          </div>
        </div>

        {/* Form */}
        <Form method="post" className="w-full lg:w-2/3 bg-white border rounded-lg p-6 shadow space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input type="text" name="name" required placeholder="Your Name *" className="w-full border p-2 rounded" />
            <input type="email" name="email" required placeholder="Your Email *" className="w-full border p-2 rounded" />
            <input type="tel" name="phone" required placeholder="Your Phone *" className="w-full border p-2 rounded" />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
            className="w-full border p-2 rounded"
          ></textarea>
          <button type="submit" className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
            Send Message
          </button>
        </Form>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white p-6 grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
        <div>
          <h3 className="font-bold mb-2">Exclusive</h3>
          <p>Get 10% off your first order</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-2 px-3 py-1 rounded text-black"
          />
        </div>

        <div>
          <h3 className="font-bold mb-2">Support</h3>
          <p>111 Bijoy sarani, Dhaka, BD</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Account</h3>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Quick Link</h3>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Download App</h3>
          <img src="/qr.png" alt="QR" className="w-20 mb-2" />
          <div className="flex gap-2">
            <img src="/googleplay.png" alt="Google Play" className="w-24" />
            <img src="/appstore.png" alt="App Store" className="w-24" />
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="bg-black text-white text-center py-3 text-xs">
        © Copyright Rimel 2022. All rights reserved.
      </div>
    </div>
  );
}
