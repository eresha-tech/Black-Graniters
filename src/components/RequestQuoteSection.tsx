import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle, Mail, Phone, User, Building, Package, FileText } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  productType: string;
  quantity: string;
  specifications: string;
  message: string;
}

const RequestQuoteSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    productType: '',
    quantity: '',
    specifications: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const productTypes = [
    'Granite Slabs',
    'Marble Slabs',
    'Sandstone Slabs',
    'Onyx Slabs',
    'Quartzite Slabs',
    'Tombstones & Monuments',
    'Sculptures & Carvings',
    'Washbasins & Sinks',
    'Custom Products',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      if (!formData.name || !formData.email || !formData.phone) {
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
        setSubmitMessage('Thank you! Your quote request has been sent successfully. We\'ll get back to you within 24 hours.');

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          productType: '',
          quantity: '',
          specifications: '',
          message: ''
        });
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Sorry, there was an error sending your request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="quote" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#F7A145]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#502b21]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="bg-gradient-to-r from-[#502b21] to-[#7a3f2e] text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg">
                Get Your Quote
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-[#502b21] mb-6"
            >
              Request a Custom
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-[#F7A145]"
              >
                {" "}Quote
              </motion.span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Tell us about your project requirements and we'll provide you with a detailed quote
              tailored to your specific needs. Our experts are ready to help you find the perfect stone solution.
            </motion.p>
          </motion.div>

          {/* Form */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-3xl shadow-2xl p-8 md:p-12">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative"
                  >
                    <label htmlFor="name" className="block text-sm font-semibold text-[#502b21] mb-2">
                      <User className="inline w-4 h-4 mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#F7A145] focus:ring-2 focus:ring-[#F7A145]/20 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      placeholder="Enter your full name"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative"
                  >
                    <label htmlFor="email" className="block text-sm font-semibold text-[#502b21] mb-2">
                      <Mail className="inline w-4 h-4 mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#F7A145] focus:ring-2 focus:ring-[#F7A145]/20 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      placeholder="Enter your email address"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative"
                  >
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#502b21] mb-2">
                      <Phone className="inline w-4 h-4 mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#F7A145] focus:ring-2 focus:ring-[#F7A145]/20 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      placeholder="Enter your phone number"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative"
                  >
                    <label htmlFor="company" className="block text-sm font-semibold text-[#502b21] mb-2">
                      <Building className="inline w-4 h-4 mr-2" />
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#F7A145] focus:ring-2 focus:ring-[#F7A145]/20 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      placeholder="Enter your company name (optional)"
                    />
                  </motion.div>
                </div>

                {/* Product Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative"
                  >
                    <label htmlFor="productType" className="block text-sm font-semibold text-[#502b21] mb-2">
                      <Package className="inline w-4 h-4 mr-2" />
                      Product Type *
                    </label>
                    <select
                      id="productType"
                      name="productType"
                      value={formData.productType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#F7A145] focus:ring-2 focus:ring-[#F7A145]/20 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    >
                      <option value="">Select product type</option>
                      {productTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative"
                  >
                    <label htmlFor="quantity" className="block text-sm font-semibold text-[#502b21] mb-2">
                      <FileText className="inline w-4 h-4 mr-2" />
                      Quantity Required
                    </label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#F7A145] focus:ring-2 focus:ring-[#F7A145]/20 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      placeholder="e.g., 100 sq ft, 50 slabs, etc."
                    />
                  </motion.div>
                </div>

                {/* Specifications */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative"
                >
                  <label htmlFor="specifications" className="block text-sm font-semibold text-[#502b21] mb-2">
                    <FileText className="inline w-4 h-4 mr-2" />
                    Specifications & Requirements
                  </label>
                  <textarea
                    id="specifications"
                    name="specifications"
                    value={formData.specifications}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#F7A145] focus:ring-2 focus:ring-[#F7A145]/20 transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none"
                    placeholder="Please specify dimensions, thickness, finish type, color preferences, etc."
                  />
                </motion.div>

                {/* Additional Message */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative"
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-[#502b21] mb-2">
                    <FileText className="inline w-4 h-4 mr-2" />
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#F7A145] focus:ring-2 focus:ring-[#F7A145]/20 transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none"
                    placeholder="Tell us more about your project, timeline, budget considerations, or any special requirements..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-center"
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-[#502b21] to-[#7a3f2e] hover:from-[#7a3f2e] hover:to-[#502b21] text-white'
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Sending Request...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-3" />
                        Send Quote Request
                      </>
                    )}
                  </button>
                </motion.div>

                {/* Status Messages */}
                {submitStatus !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center p-4 rounded-xl ${submitStatus === 'success'
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
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">
              Need immediate assistance? Contact us directly:
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8">
              <a
                href="tel:+919700159159"
                className="flex items-center text-[#502b21] hover:text-[#F7A145] transition-colors duration-300"
              >
                <Phone className="w-4 h-4 mr-2" />
                +91 97001 59159
              </a>
              <a
                href="mailto:info@blackgraniters.com"
                className="flex items-center text-[#502b21] hover:text-[#F7A145] transition-colors duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                info@blackgraniters.com
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RequestQuoteSection;
