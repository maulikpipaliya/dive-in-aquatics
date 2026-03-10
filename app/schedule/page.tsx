import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SCHEDULE_FEES, BATCH_TIMINGS } from '@/lib/constants';
import { Calendar, Clock, IndianRupee, Info } from 'lucide-react';
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

        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-blue-50 border-l-4 border-brand-blue p-4 mb-8 rounded-r-lg">
            <div className="flex items-start">
              <Info className="w-5 h-5 text-brand-blue mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Batch preference may be selected only at the time of submitting the application form.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Fee Structure</h2>
            <div className="overflow-x-auto shadow-lg rounded-lg">
              <table className="w-full border-collapse bg-white">
                <thead className="bg-brand-blue text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Program</th>
                    <th className="px-6 py-4 text-left font-semibold">Monthly Fees</th>
                    <th className="px-6 py-4 text-left font-semibold">Quarterly Fees</th>
                    <th className="px-6 py-4 text-left font-semibold">Half-Yearly Fees</th>
                  </tr>
                </thead>
                <tbody>
                  {SCHEDULE_FEES.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-brand-blue/5 transition-colors`}
                    >
                      <td className="px-6 py-4 font-medium">{item.program}</td>
                      <td className="px-6 py-4 font-semibold text-brand-blue">{item.monthlyFee}</td>
                      <td className="px-6 py-4 font-semibold text-brand-blue">{item.threeMonthsFee}</td>
                      <td className="px-6 py-4 font-semibold text-brand-blue">{item.sixMonthsFee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Batch Timings</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Learn To Swim & Self Swim</h3>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Duration:</strong> 45 minutes | <strong>Days:</strong> Tuesday to Sunday (Monday Off)
              </p>
              <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="w-full border-collapse bg-white">
                  <thead className="bg-brand-blue-light text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Program</th>
                      <th className="px-6 py-4 text-left font-semibold">Batch</th>
                      <th className="px-6 py-4 text-left font-semibold">Time Slot</th>
                    </tr>
                  </thead>
                  <tbody>
                    {BATCH_TIMINGS.learnToSwim.map((batch, idx) => (
                      <tr
                        key={idx}
                        className={`border-b ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-brand-blue/5 transition-colors`}
                      >
                        <td className="px-6 py-4 font-medium">
                          {idx === 0 ? 'Learn To Swim & Self Swim' : ''}
                        </td>
                        <td className="px-6 py-4 text-gray-700">{batch.batch}</td>
                        <td className="px-6 py-4 font-semibold text-brand-blue">{batch.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Competitive Swimming</h3>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Duration:</strong> 120 minutes +/- depending on workout | <strong>Note:</strong> Sunday off for competitive swimming
              </p>
              <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="w-full border-collapse bg-white">
                  <thead className="bg-brand-blue-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Program</th>
                      <th className="px-6 py-4 text-left font-semibold">Session</th>
                      <th className="px-6 py-4 text-left font-semibold">Time Slot</th>
                    </tr>
                  </thead>
                  <tbody>
                    {BATCH_TIMINGS.competitive.map((session, idx) => (
                      <tr
                        key={idx}
                        className={`border-b ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-brand-blue/5 transition-colors`}
                      >
                        <td className="px-6 py-4 font-medium">
                          {idx === 0 ? 'Competitive Training' : ''}
                        </td>
                        <td className="px-6 py-4 text-gray-700">{session.session}</td>
                        <td className="px-6 py-4 font-semibold text-brand-blue">{session.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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
          <h2 className="text-3xl font-bold mb-4">Special Offer</h2>
          <div className="max-w-xl mx-auto mb-8">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-2">Family Discount</h3>
              <p className="text-white/90 text-lg">5% off when you enroll 2 or more family members</p>
            </div>
          </div>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100">
              Register Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
