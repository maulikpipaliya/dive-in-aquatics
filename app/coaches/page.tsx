import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { COACHES } from "@/lib/constants";
import { Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coaches",
  description:
    "Meet our certified swimming coaches with years of experience in teaching all age groups. Professional, patient, and passionate about swimming.",
  alternates: {
    canonical: "https://www.diveinaquatics.in/coaches",
  },
};

export default function CoachesPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Coaches</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our certified coaches bring years of experience, passion, and dedication to help you
            achieve your swimming goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {COACHES.map((coach) => (
            <Card key={coach.name} className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-brand-blue shadow-lg">
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover object-center"
                    style={coach.name === "Raj Bhanvadia" ? { objectPosition: "center 0" } : {}}
                  />
                </div>
                <CardTitle className="text-2xl">{coach.name}</CardTitle>
                <p className="text-brand-blue font-medium">{coach.title}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{coach.bio}</p>
                <div className="space-y-2">
                  {coach.certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-center justify-center space-x-2 text-sm">
                      <Award className="w-4 h-4 text-brand-blue flex-shrink-0" />
                      <span className="text-left">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Why Our Coaches Stand Out</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-brand-blue">
                Certified & Experienced
              </h3>
              <p className="text-gray-600">
                All our coaches hold recognized certifications and have extensive teaching
                experience.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-brand-blue">Safety First</h3>
              <p className="text-gray-600">
                Lifeguard certified and trained in water safety and emergency response.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-brand-blue">Patient & Supportive</h3>
              <p className="text-gray-600">
                We understand every student learns at their own pace and provide personalized
                attention.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-brand-blue">Continuous Training</h3>
              <p className="text-gray-600">
                Our coaches regularly update their skills with the latest teaching methodologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
