'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { trialFormSchema, type TrialFormData } from '@/lib/validations';
import { createLead } from '@/lib/actions';
import { PROGRAMS } from '@/lib/constants';
import { Loader2 } from 'lucide-react';

export function TrialForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TrialFormData>({
    resolver: zodResolver(trialFormSchema),
  });

  const onSubmit = async (data: TrialFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await createLead({
        type: 'trial',
        ...data,
      });

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        reset();
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Book Your Free Trial Class</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Label htmlFor="name">Parent/Guardian Name *</Label>
            <Input
              id="name"
              {...register('name')}
              placeholder="John Doe"
              className="mt-1"
            />
            {errors.name && (
              <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="john@example.com"
              className="mt-1"
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              {...register('phone')}
              placeholder="+91 98765 43210"
              className="mt-1"
            />
            {errors.phone && (
              <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="childName">Child&apos;s Name (or your name if adult) *</Label>
            <Input
              id="childName"
              {...register('childName')}
              placeholder="Jane Doe"
              className="mt-1"
            />
            {errors.childName && (
              <p className="text-sm text-red-600 mt-1">{errors.childName.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="childAge">Age *</Label>
            <Input
              id="childAge"
              type="number"
              {...register('childAge')}
              placeholder="8"
              className="mt-1"
            />
            {errors.childAge && (
              <p className="text-sm text-red-600 mt-1">{errors.childAge.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="programInterest">Program Interest *</Label>
            <select
              id="programInterest"
              {...register('programInterest')}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1"
            >
              <option value="">Select a program</option>
              {PROGRAMS.map((program) => (
                <option key={program.id} value={program.title}>
                  {program.title}
                </option>
              ))}
            </select>
            {errors.programInterest && (
              <p className="text-sm text-red-600 mt-1">{errors.programInterest.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="preferredDate">Preferred Trial Date (Optional)</Label>
            <Input
              id="preferredDate"
              type="date"
              {...register('preferredDate')}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="message">Additional Message (Optional)</Label>
            <Textarea
              id="message"
              {...register('message')}
              placeholder="Any questions or special requirements..."
              rows={3}
              className="mt-1"
            />
          </div>

          {submitStatus && (
            <div
              className={`p-4 rounded-md ${
                submitStatus.type === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-blue hover:bg-brand-blue-dark"
            size="lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Book Free Trial'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
