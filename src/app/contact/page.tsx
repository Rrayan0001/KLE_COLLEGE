"use client";

import React, { useState } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  program: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    program: "general",
    message: "",
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!form.name.trim()) {
      tempErrors.name = "Full Name is required.";
      isValid = false;
    } else if (form.name.trim().length < 3) {
      tempErrors.name = "Name must be at least 3 characters.";
      isValid = false;
    }

    if (!form.email.trim()) {
      tempErrors.email = "Email Address is required.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      tempErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!form.phone.trim()) {
      tempErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!/^\+?[0-9]{10,12}$/.test(form.phone.replace(/[\s-]/g, ""))) {
      tempErrors.phone = "Please enter a valid 10-12 digit phone number.";
      isValid = false;
    }

    if (!form.message.trim()) {
      tempErrors.message = "Message is required.";
      isValid = false;
    } else if (form.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setForm({
      name: "",
      email: "",
      phone: "",
      program: "general",
      message: "",
    });
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header Banner */}
      <section className="bg-college-navy text-white py-16 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-college-dark to-transparent opacity-60" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
          <h1 className="text-3xl md:text-5xl font-black font-display tracking-tight text-college-gold">Contact Us</h1>
          <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto font-light">
            Have questions about courses, admissions, or documentation? Get in touch with us today.
          </p>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details & Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-bold text-slate-800 text-xl font-display mb-4">
              Get in Touch Directly
            </h2>

            {/* Address */}
            <div className="bg-white border border-slate-100 p-6 rounded-2xl flex gap-4 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 bg-college-navy/5 text-college-navy rounded-lg flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-800 text-sm">College Campus Address</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  KLE Society's SCP Degree College Campus,<br />
                  Taluk: Mudhol, District: Bagalkot,<br />
                  Mahalingpur, Karnataka - 587312
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white border border-slate-100 p-6 rounded-2xl flex gap-4 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 bg-college-navy/5 text-college-navy rounded-lg flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-800 text-sm">Telephone Contacts</h3>
                <p className="text-slate-500 text-xs">Principal Office: <a href="tel:+918350270235" className="hover:text-college-navy underline transition">08350-270235</a></p>
                <p className="text-slate-500 text-xs">Admissions Desk: <a href="tel:+918350270235" className="hover:text-college-navy underline transition">+91 8350 270235</a></p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white border border-slate-100 p-6 rounded-2xl flex gap-4 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 bg-college-navy/5 text-college-navy rounded-lg flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-800 text-sm">Email Addresses</h3>
                <p className="text-slate-500 text-xs">General Support: <a href="mailto:scpdgcol@gmail.com" className="hover:text-college-navy underline transition">scpdgcol@gmail.com</a></p>
              </div>
            </div>

            {/* Location Map Placeholder */}
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm space-y-4">
              <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-college-gold" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Find Us on Map
              </h3>
              <div className="bg-slate-100 rounded-xl h-[180px] w-full flex flex-col items-center justify-center text-center p-4 border border-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-slate-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-xs text-slate-500 font-medium">Mahalingpur, Mudhol Taluk, Bagalkot District</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-2 text-[10px] text-college-navy font-bold hover:underline"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl shadow-md border border-slate-100 p-8 md:p-10">
            <h2 className="font-bold text-slate-800 text-xl font-display mb-2">
              Send an Inquiry
            </h2>
            <p className="text-slate-500 text-sm mb-6">
              Complete the form below to reach our support desk.
            </p>

            {submitSuccess ? (
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-emerald-950 text-lg">Inquiry Sent Successfully!</h3>
                <p className="text-emerald-700 text-sm max-w-sm mx-auto">
                  Thank you for writing. Our admissions cell will review your message and reply via email or phone within 48 business hours.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-6 py-2.5 rounded-lg shadow-sm transition"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div className="space-y-1">
                  <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
                      errors.name 
                        ? "border-red-300 focus:ring-red-200" 
                        : "border-slate-200 focus:ring-college-navy/20 focus:border-college-navy"
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-500 text-xs font-medium">{errors.name}</p>}
                </div>

                {/* Grid (Email, Phone) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Email */}
                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
                        errors.email 
                          ? "border-red-300 focus:ring-red-200" 
                          : "border-slate-200 focus:ring-college-navy/20 focus:border-college-navy"
                      }`}
                      placeholder="name@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs font-medium">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
                        errors.phone 
                          ? "border-red-300 focus:ring-red-200" 
                          : "border-slate-200 focus:ring-college-navy/20 focus:border-college-navy"
                      }`}
                      placeholder="e.g. 9876543210"
                    />
                    {errors.phone && <p className="text-red-500 text-xs font-medium">{errors.phone}</p>}
                  </div>
                </div>

                {/* Program of Interest */}
                <div className="space-y-1">
                  <label htmlFor="program" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Program of Interest
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={form.program}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-college-navy/20 focus:border-college-navy bg-white"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="ba">Bachelor of Arts (B.A.)</option>
                    <option value="bsc">Bachelor of Science (B.Sc.)</option>
                    <option value="bcom">Bachelor of Commerce (B.Com.)</option>
                    <option value="bca">Bachelor of Computer Applications (BCA)</option>
                    <option value="mcom">Master of Commerce (M.Com.)</option>
                    <option value="itep">Integrated Teacher Education Program (ITEP)</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
                      errors.message 
                        ? "border-red-300 focus:ring-red-200" 
                        : "border-slate-200 focus:ring-college-navy/20 focus:border-college-navy"
                    }`}
                    placeholder="Tell us what you would like to know..."
                  />
                  {errors.message && <p className="text-red-500 text-xs font-medium">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-college-navy hover:bg-college-blue text-white font-bold py-3.5 rounded-lg transition duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending inquiry...</span>
                    </>
                  ) : (
                    <span>Submit Message</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
