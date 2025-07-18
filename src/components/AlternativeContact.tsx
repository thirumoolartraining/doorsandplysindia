import React from 'react';
import { Card } from './Card';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants/contact';

export const AlternativeContact: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: CONTACT_INFO.email,
      description: 'Response within 24 hours',
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: CONTACT_INFO.phone,
      description: CONTACT_INFO.businessHours,
      color: 'text-green-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: CONTACT_INFO.whatsapp,
      description: 'Quick responses available',
      color: 'text-[#25D366]'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/40 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <Card variant="basic" className="text-center">
          <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
            Alternative Contact Methods
          </h2>
          <p className="text-[#1A1A1A]/70 mb-8 max-w-2xl mx-auto">
            Prefer to reach out directly? Our export specialists are available through multiple channels
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="space-y-4">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:scale-105 transition-all duration-300 hover:shadow-lg">
                  <method.icon className={`w-8 h-8 mx-auto mb-4 ${method.color}`} />
                  <h3 className="font-bold text-[#4B3A2A] text-lg mb-2">{method.title}</h3>
                  <p className="text-[#1A1A1A] font-medium mb-2">
                    {method.title === 'Email' ? (
                      <a href={`mailto:${method.value}`} className="hover:text-[#C3A572] transition-colors">
                        {method.value}
                      </a>
                    ) : method.title === 'Phone' || method.title === 'WhatsApp' ? (
                      <a href={`tel:${method.value}`} className="hover:text-[#C3A572] transition-colors">
                        {method.value}
                      </a>
                    ) : (
                      method.value
                    )}
                  </p>
                  <p className="text-[#1A1A1A]/60 text-sm">{method.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-[#C3A572]/10 backdrop-blur-sm rounded-xl border border-[#C3A572]/20">
            <h3 className="font-bold text-[#4B3A2A] mb-2">Export Specialists Available</h3>
            <p className="text-[#1A1A1A]/70 text-sm">
              Our dedicated export team handles international inquiries, documentation, logistics, and custom requirements for UPVC door supply worldwide. Contact us at {CONTACT_INFO.email} or {CONTACT_INFO.phone}.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};