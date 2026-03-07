import { ContactForm } from '@/components/contact-form';
import { TrialForm } from '@/components/trial-form';
import { Card, CardContent } from '@/components/ui/card';
import { SITE_CONFIG } from '@/lib/constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Dive-In Aquatics. Book a trial class, ask questions, or visit our swimming facility in Safdarjung Enclave, New Delhi.',
  alternates: {
    canonical: 'https://www.diveinaquatics.in/contact',
  },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ trial?: string }>;
}) {
  const params = await searchParams;
  const showTrialForm = params.trial === 'true';

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {showTrialForm
              ? 'Book your free trial class and experience our world-class swimming program'
              : 'Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            {showTrialForm ? <TrialForm /> : <ContactForm />}
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Visit Us</h3>
                    <p className="text-gray-600">{SITE_CONFIG.contact.address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <div className="space-y-1">
                      <a
                        href={`tel:${SITE_CONFIG.contact.phone}`}
                        className="text-brand-blue hover:underline block"
                      >
                        {SITE_CONFIG.contact.phone}
                      </a>
                      <a
                        href={`tel:${SITE_CONFIG.contact.phoneSecondary}`}
                        className="text-brand-blue hover:underline block"
                      >
                        {SITE_CONFIG.contact.phoneSecondary}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="text-brand-blue hover:underline"
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Opening Hours</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>
                        <span className="font-medium">Weekdays:</span> {SITE_CONFIG.hours.weekdays}
                      </p>
                      <p>
                        <span className="font-medium">Weekends:</span> {SITE_CONFIG.hours.weekends}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-brand-blue/5 rounded-lg p-6 border-l-4 border-brand-blue">
              <h3 className="font-semibold mb-2 text-brand-blue">Quick Response</h3>
              <p className="text-gray-600">
                We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
