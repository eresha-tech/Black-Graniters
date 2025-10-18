import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactUs = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Validate required fields
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        setSubmitStatus('error');
        setSubmitMessage('Please fill in all required fields.');
        return;
      }

      // Validate environment variables
      if (!serviceId || !templateId || !publicKey) {
        console.error('Missing EmailJS configuration');
        setSubmitStatus('error');
        setSubmitMessage('Email service configuration error. Please contact us directly.');
        return;
      }

      // Send email using EmailJS
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your message has been sent successfully. We\'ll get back to you soon.');

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const offices = [
    {
      city: "New Delhi",
      address: "20/36D, West Patel Nagar, New Delhi, Central Delhi, Delhi-110008",
      phone: "+91 9700159159",
      email: "care@graniters.com"
    },
    {
      city: "Chandigarh",
      address: "1403, SECTOR-44B, CHANDIGARH-160047",
      phone: "+91 9815344490",
      email: "care@graniters.com"
    },
    {
      city: "Kishangarh",
      address: "BLACK GRANITERS PRIVATE LIMITED, PROCESSING UNIT, KISHANGARH, RAJASTHAN",
      phone: "+91 9700159159",
      email: "care@graniters.com"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#502b21] to-[#7a3f2e] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Contact Us</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-white/90">
            Get in touch with us for inquiries, collaborations, or to learn more about our premium natural stones
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#502b21]">Our Offices</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {offices.map((office, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#F7A145]"
                >
                  <h3 className="text-2xl font-bold text-[#502b21] mb-6">{office.city}</h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-[#F7A145] flex-shrink-0 mt-1" size={20} />
                      <p className="text-gray-700">{office.address}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="text-[#F7A145] flex-shrink-0" size={20} />
                      <a
                        href={`tel:${office.phone}`}
                        className="text-gray-700 hover:text-[#502b21] transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="text-[#F7A145] flex-shrink-0" size={20} />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-gray-700 hover:text-[#502b21] transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-8 md:p-12 max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-[#502b21] mb-8 text-center">Send Us a Message</h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7A145] focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7A145] focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7A145] focus:border-transparent outline-none transition-all"
                      placeholder="+91 9876543210"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7A145] focus:border-transparent outline-none transition-all"
                      placeholder="Inquiry about granite"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7A145] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-8 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center justify-center ${isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#502b21] text-white hover:bg-[#F7A145]'
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus !== 'idle' && (
                  <div
                    className={`text-center p-4 rounded-lg ${submitStatus === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                      }`}
                  >
                    <div className="flex items-center justify-center">
                      {submitStatus === 'success' ? (
                        <CheckCircle className="w-5 h-5 mr-2" />
                      ) : (
                        <AlertCircle className="w-5 h-5 mr-2" />
                      )}
                      {submitMessage}
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-[#502b21] mb-6">Business Hours</h3>
            <p className="text-lg text-gray-700 mb-4">
              Monday - Saturday: 9:00 AM - 6:00 PM
            </p>
            <p className="text-lg text-gray-700">
              Sunday: Closed
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
