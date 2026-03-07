import { CreateLeadInput } from './db-schema';

export async function createLead(data: CreateLeadInput) {
  try {
    console.log('Lead submission:', data);
    
    return {
      success: true,
      message: 'Thank you! We will contact you shortly.',
    };
  } catch (error) {
    console.error('Error creating lead:', error);
    return {
      success: false,
      message: 'Something went wrong. Please try again or call us directly.',
    };
  }
}
