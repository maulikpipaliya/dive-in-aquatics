import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SCHEDULE_FEES } from '@/lib/constants';
import { Calendar, Clock, IndianRupee } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule & Fees',
  description: 'View our swimming class schedules and affordable monthly fees. Flexible timings for all age groups with competitive pricing.',
  alternates: {
    canonical: 'https://www.diveinaquatics.in/schedule',
  },
};

export default function SchedulePage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Schedule & Fees</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible timings and affordable pricing for all our swimming programs
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-brand-blue text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Program</th>
                  <th className="px-6 py-4 text-left font-semibold">Days</th>
                  <th className="px-6 py-4 text-left font-semibold">Time</th>
                  <th className="px-6 py-4 text-left font-semibold">Monthly Fee</th>
                </tr>
              </thead>
              <tbody>
                {SCHEDULE_FEES.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-brand-blue/5 transition-colors`}
                  >
                    <td className="px-6 py-4 font-medium">{item.program}</td>
                    <td className="px-6 py-4">{item.days}</td>
                    <td className="px-6 py-4">{item.time}</td>
                    <td className="px-6 py-4 font-semibold text-brand-blue">{item.monthlyFee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Calendar className="w-10 h-10 text-brand-blue mb-2" />
              <CardTitle>Flexible Scheduling</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Multiple batch timings available throughout the day. Choose what works best for your schedule.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Clock className="w-10 h-10 text-brand-blue mb-2" />
              <CardTitle>Make-up Classes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Missed a class? No worries! We offer make-up classes to ensure you don&apos;t fall behind.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <IndianRupee className="w-10 h-10 text-brand-blue mb-2" />
              <CardTitle>No Hidden Fees</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Transparent pricing with no registration fees. One-time costume and equipment cost applies.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Family Discount</h3>
              <p className="text-white/90">10% off when you enroll 2 or more family members</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Early Bird Special</h3>
              <p className="text-white/90">15% off if you pay for 3 months in advance</p>
            </div>
          </div>
          <Link href="/contact?trial=true">
            <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100">
              Book Your Free Trial
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
