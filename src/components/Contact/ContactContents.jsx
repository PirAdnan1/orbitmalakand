"use client";

// components
import { useState } from "react";
import PageHero from "@/components/common/PageHero";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebook,
  FaPaperPlane,
} from "react-icons/fa";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", email: "", message: "" });
    }, 4000);
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
      <h3 className="text-2xl font-black font-heading text-gray-800 mb-2">
        Send Us a Message
      </h3>
      <p className="text-gray-500 text-sm mb-7">
        Fill out the form and we&apos;ll get back to you as soon as possible.
      </p>

      {submitted ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="font-bold text-gray-800 text-xl">Message Sent!</p>
          <p className="text-gray-500 mt-2">We&apos;ll respond within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="e.g. 0313-5999944"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-2">
              Message *
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="How can we help you?"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-colors text-base"
          >
            <FaPaperPlane /> Send Message
          </button>
        </form>
      )}
    </div>
  );
}

function ContactInfo() {
  const contacts = [
    {
      icon: FaPhone,
      label: "Phone",
      value: "0932-311333",
      sub: "0313-5999944",
      href: "tel:09322311333",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+92 313-5999944",
      href: "https://wa.me/+923135999944",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "info@theorbitmalakand.com",
      href: "mailto:info@theorbitmalakand.com",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Address",
      value: "Sakhakot, Malakand Division",
      sub: "KPK, Pakistan",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: FaFacebook,
      label: "Facebook",
      value: "The Orbit Malakand",
      href: "https://www.facebook.com/OrbitSakhakot",
      color: "bg-indigo-100 text-indigo-600",
    },
  ];

  return (
    <div>
      <h3 className="text-2xl font-black font-heading text-gray-800 mb-2">
        Get in Touch
      </h3>
      <p className="text-gray-500 text-sm mb-8">
        We&apos;re here to help. Reach out via any of the channels below.
      </p>
      <div className="space-y-5">
        {contacts.map((c) => (
          <div key={c.label} className="flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${c.color}`}
            >
              <c.icon size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                {c.label}
              </p>
              {c.href ? (
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-gray-800 font-semibold text-sm hover:text-primary transition-colors"
                >
                  {c.value}
                </a>
              ) : (
                <p className="text-gray-800 font-semibold text-sm">{c.value}</p>
              )}
              {c.sub && (
                <p className="text-gray-500 text-xs">{c.sub}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Map placeholder */}
      <div className="mt-8 rounded-2xl overflow-hidden bg-gray-100 h-48 flex items-center justify-center">
        <div className="text-center">
          <FaMapMarkerAlt className="text-primary text-3xl mx-auto mb-2" />
          <p className="text-gray-500 text-sm font-medium">
            Sakhakot, Malakand Division, KPK
          </p>
          <a
            href="https://maps.google.com/?q=Sakhakot+Malakand+Pakistan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-sm font-semibold hover:underline mt-1 inline-block"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ContactContents() {
  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Get in touch with The Orbit School & College Malakand."
        breadcrumbs={[{ label: "Contact" }]}
      />
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
