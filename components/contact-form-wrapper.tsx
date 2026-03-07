'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ContactForm } from '@/components/contact-form';
import { TrialForm } from '@/components/trial-form';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const showTrialForm = searchParams.get('trial') === 'true';

  return showTrialForm ? <TrialForm /> : <ContactForm />;
}

export function ContactFormWrapper() {
  return (
    <Suspense fallback={<ContactForm />}>
      <ContactFormContent />
    </Suspense>
  );
}
