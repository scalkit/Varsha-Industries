import { Mail, Phone, MapPin, Send } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function ContactUs() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal width="100%">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-accent/90 max-w-3xl mx-auto">
              Have a product enquiry or custom manufacturing request? We are here to help.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

          {/* Contact Details */}
          <ScrollReveal width="100%" className="h-full">
            <div className="h-full flex flex-col justify-between p-4">
              <div>
                <h2 className="font-heading text-2xl font-bold text-secondary mt-4 mb-10">Contact Details</h2>
                <div className="space-y-12">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-secondary mb-2">Email</h3>
                      <a href="mailto:sanchit@plastx.in" className="text-gray-600 hover:text-primary transition-colors text-lg">sanchit@plastx.in</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent/20 p-3 rounded-full text-primary">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-secondary mb-2">Phone</h3>
                      <a href="tel:+919999790300" className="text-gray-600 hover:text-primary transition-colors text-lg">+91 99997 90300</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent/20 p-3 rounded-full text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-secondary mb-2">Address</h3>
                      <address className="text-gray-600 text-lg not-italic leading-relaxed">
                        <strong>Plastx Labs Pvt. Ltd.</strong><br />
                        A - 245, Pocket C<br />
                        Okhla Phase I, Okhla Industrial Estate<br />
                        New Delhi, Delhi 110020
                      </address>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </ScrollReveal>

          {/* Query Form */}
          <ScrollReveal direction="right" delay={0.2} width="100%" className="h-full">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
              <div className="mb-8">
                <h3 className="font-heading text-2xl font-bold text-secondary mb-4">Get in Touch With Us</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fill out the form below and our team will get back to you with the right solution.
                </p>
              </div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-secondary mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-secondary mb-2">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    placeholder="ABC Diagnostics Pvt. Ltd."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-secondary mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-secondary mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-secondary mb-2">How can we help you?</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your product requirement, application, OEM needs, quantities, or any technical questions you may have."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-white font-bold py-4 rounded-xl hover:bg-secondary transition-colors shadow-md transform duration-200"
                >
                  Submit Enquiry <Send className="w-5 h-5" />
                </button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  Our team typically responds within 48 business hours.
                </p>
              </form>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </div>
  );
}
