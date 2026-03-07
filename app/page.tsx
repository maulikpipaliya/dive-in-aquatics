import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PROGRAMS } from '@/lib/constants';
import { Droplets, Award, Users, Heart, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Dive-In Aquatics - Professional swimming classes for all ages in Delhi. Learn to swim with certified coaches including South Asian Games Gold Medalist.',
  alternates: {
    canonical: 'https://www.diveinaquatics.in',
  },
};

export default function HomePage() {
  return (
    <div className="-mt-20">
      <section className="relative bg-gradient-to-br from-blue-50 to-cyan-50 py-24 md:py-32 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <Image
                  src="/assets/logo-circle.png"
                  alt="Dive-In Aquatics Logo"
                  fill
                  className="object-contain opacity-90"
                  priority
                />
              </div>
            </div>
            
            <div className="text-gray-900">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-brand-blue">
                Dive Into Your Swimming Journey
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700">
                Professional swimming classes for all ages. Learn from certified coaches in a safe, supportive environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact?trial=true">
                  <Button size="lg" className="bg-brand-blue text-white hover:bg-brand-blue-dark text-lg px-8">
                    Book a Free Trial
                  </Button>
                </Link>
                <Link href="/programs">
                  <Button size="lg" variant="outline" className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white text-lg px-8 font-semibold">
                    View Programs
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue/10 rounded-full mb-4">
                <Award className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Coaches</h3>
              <p className="text-gray-600">Trained professionals with years of experience</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue/10 rounded-full mb-4">
                <Users className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Small Batches</h3>
              <p className="text-gray-600">Maximum 6 students per batch for personalized attention</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue/10 rounded-full mb-4">
                <Droplets className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Clean Facilities</h3>
              <p className="text-gray-600">Hygienic, well-maintained Olympic-size pool</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue/10 rounded-full mb-4">
                <Heart className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">All Ages Welcome</h3>
              <p className="text-gray-600">Programs designed for toddlers to adults</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored swimming programs for every age and skill level
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map((program) => (
              <Card key={program.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-blue">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Duration:</strong> {program.duration}
                  </p>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <ArrowRight className="w-4 h-4 text-brand-blue flex-shrink-0 mt-1" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/programs">
              <Button size="lg" className="bg-brand-blue hover:bg-brand-blue-dark">
                View All Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Splash?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of happy swimmers who have learned with us. Book your free trial class today!
          </p>
          <Link href="/contact?trial=true">
            <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100 text-lg px-8">
              Book Your Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
