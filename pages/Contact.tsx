import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import ScrollReveal from '../components/ScrollReveal';

const Contact: React.FC = () => {
  const { addMessage } = useContent();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addMessage({
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      message: formData.message,
      date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
    });

    setStatus('success');
    setFormData({ name: '', email: '', message: '' });

    // Reset success message after 3 seconds
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className="py-20 bg-white min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-serif mb-8 text-anvitam-charcoal">Get in Touch</h1>
            <p className="text-gray-500 text-lg mb-12 max-w-md">
              Whether you have a project in mind or just want to say hello, we'd love to hear from you.
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            <ScrollReveal delay={100}>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-50 rounded-full">
                  <MapPin className="text-arch-black" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-widest mb-1">Visit Us</h3>
                  <p className="text-gray-500">Alkapura, Vadodara, Gujarat</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-50 rounded-full">
                  <Mail className="text-arch-black" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-widest mb-1">Email Us</h3>
                  <p className="text-gray-500">anvitamarchitects@gmail.com</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-50 rounded-full">
                  <Phone className="text-arch-black" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-widest mb-1">Call Us</h3>
                  <p className="text-gray-500">+91 7990657190</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={400}>
          <div className="bg-gray-50 p-8 md:p-12 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-serif mb-6 text-anvitam-charcoal">Send a Message</h3>

            {status === 'success' ? (
              <div className="bg-anvitam-stone/30 border border-anvitam-green text-anvitam-charcoal p-6 text-center animate-fade-in">
                <h4 className="font-bold mb-2">Message Sent!</h4>
                <p>Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-anvitam-green transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-anvitam-green transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-anvitam-green transition-colors"
                  ></textarea>
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-anvitam-charcoal text-white py-4 text-sm font-bold uppercase tracking-widest hover:bg-anvitam-green transition-colors">
                  <span>Send Message</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Contact;