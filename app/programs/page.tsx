import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PROGRAMS } from '@/lib/constants';
import { Check } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programs',
  description: 'Swimming programs for all ages and skill levels - from toddlers to competitive swimmers. Professional coaching with certified instructors.',
  alternates: {
    canonical: 'https://www.diveinaquatics.in/programs',
  },
};

export default function ProgramsPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Swimming Programs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you&apos;re taking your first splash or training for competition, we have the perfect program for you.
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {PROGRAMS.map((program, index) => (
            <Card key={program.id} className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/3">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-2xl text-brand-blue">{program.title}</CardTitle>
                      <span className="text-sm bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full">
                        {program.duration}
                      </span>
                    </div>
                    <CardDescription className="text-base">{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">What You&apos;ll Learn:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Check className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
                <div className="md:w-1/3 bg-gradient-to-br from-brand-blue-light to-brand-blue flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <p className="text-sm uppercase tracking-wide mb-2">Starting from</p>
                    <p className="text-4xl font-bold mb-4">₹3,000</p>
                    <Link href="/schedule">
                      <Button variant="secondary" className="w-full">
                        View Schedule
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center bg-gray-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Program is Right for You?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Book a free trial class and our coaches will help you find the perfect fit.
          </p>
          <Link href="/contact?trial=true">
            <Button size="lg" className="bg-brand-blue hover:bg-brand-blue-dark">
              Book a Free Trial Class
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
