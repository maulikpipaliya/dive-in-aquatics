export interface Lead {
  id: string;
  type: 'trial' | 'contact';
  name: string;
  email: string;
  phone: string;
  message?: string;
  childName?: string;
  childAge?: number;
  programInterest?: string;
  preferredDate?: string;
  createdAt: Date;
  status: 'new' | 'contacted' | 'converted' | 'closed';
}

export interface CreateLeadInput {
  type: 'trial' | 'contact';
  name: string;
  email: string;
  phone: string;
  message?: string;
  childName?: string;
  childAge?: number;
  programInterest?: string;
  preferredDate?: string;
}
