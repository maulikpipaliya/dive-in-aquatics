export const SITE_CONFIG = {
  name: 'Dive-In Aquatics',
  description: 'Professional swimming classes for all ages. Learn to swim with certified coaches in a safe, supportive environment.',
  url: 'https://www.diveinaquatics.in',
  ogImage: 'https://www.diveinaquatics.in/og-image.jpg',
  contact: {
    phone: '+91-9971114557',
    phoneSecondary: '+91-8527050620',
    email: 'divein.aquatics2713@gmail.com',
    whatsapp: '+919971114557',
    address: '112-A/2, St. No.7, Krishna Nagar, Safdarjung Enclave, New Delhi-110029',
  },
  hours: {
    weekdays: '6:00 AM - 9:00 PM',
    weekends: '7:00 AM - 8:00 PM',
  },
  social: {
    facebook: 'https://facebook.com/diveinaquatics',
    instagram: 'https://instagram.com/diveinaquatics',
    youtube: 'https://youtube.com/@diveinaquatics',
  },
};

export const PROGRAMS = [
  {
    id: 'level-1',
    title: 'Learn to Swim (Level 1)',
    description: 'Gentle introduction to water with building confidence',
    duration: '45 minutes',
    features: ['Water Familiarization', 'Floating', 'Basic Freestyle', 'Backstroke Kick'],
  },
  {
    id: 'level-2',
    title: 'Learn to Swim (Level 2)',
    description: 'Learn fundamentals and develop swimming strokes',
    duration: '45 minutes',
    features: ['Freestyle Breathing', 'Backstroke', 'Introduce Breaststroke Kick', 'Water Safety Skills'],
  },
  {
    id: 'self-swim',
    title: 'Self Swim',
    description: 'Refine Technique and Build Endurance',
    duration: '45 minutes',
    features: ['Self Paced Swimming', 'Equipments Provided'],
  },
  {
    id: 'competitive',
    title: 'Competitive Training',
    description: 'Turning your raw potential into definitive victories',
    duration: '120 minutes +/- depending on workout',
    features: ['Structured Programs', 'Long-Term Athlete Development', 'Race Strategy', 'Technique Oriented'],
  },
  {
    id: 'personal',
    title: 'Personal Training',
    description: 'Your Goals, Your Pace, Our Expertise',
    duration: '45 minutes',
    features: ['Personal Attention', 'Fast-track Learning', 'Self Paced', 'Customised Plan'],
  },
];

export const BATCH_TIMINGS = {
  learnToSwim: [
    { batch: 'Batch 1', time: '5:00 AM - 5:45 AM' },
    { batch: 'Batch 2', time: '6:00 AM - 6:45 AM' },
    { batch: 'Batch 3', time: '3:30 PM - 4:15 PM' },
    { batch: 'Batch 4', time: '4:15 PM - 5:00 PM' },
    { batch: 'Batch 5', time: '5:00 PM - 5:45 PM' },
    { batch: 'Batch 6', time: '6:00 PM - 6:45 PM' },
    { batch: 'Batch 7', time: '7:00 PM - 7:45 PM' },
    { batch: 'Batch 8', time: '8:00 PM - 8:45 PM' },
  ],
  selfSwim: [
    { batch: 'Batch 1', time: '5:00 AM - 5:45 AM' },
    { batch: 'Batch 2', time: '6:00 AM - 6:45 AM' },
    { batch: 'Batch 3', time: '3:30 PM - 4:15 PM' },
    { batch: 'Batch 4', time: '4:15 PM - 5:00 PM' },
    { batch: 'Batch 5', time: '5:00 PM - 5:45 PM' },
    { batch: 'Batch 6', time: '6:00 PM - 6:45 PM' },
    { batch: 'Batch 7', time: '7:00 PM - 7:45 PM' },
    { batch: 'Batch 8', time: '8:00 PM - 8:45 PM' },
  ],
  competitive: [
    { session: 'Morning Session', time: '5:00 AM - 7:00 AM', days: 'Tuesday to Sunday' },
    { session: 'Evening Session', time: '4:00 PM - 6:00 PM', days: 'Tuesday to Saturday' },
  ],
};

export const SCHEDULE_FEES = [
  {
    program: 'Learn To Swim (L1, L2, L3)',
    duration: '45 minutes',
    days: 'Tuesday to Sunday (Monday Off)',
    monthlyFee: '₹5,000',
    threeMonthsFee: '₹13,500',
    sixMonthsFee: '₹21,000',
    note: 'Batch preference selected at time of application',
  },
  {
    program: 'Self Swim',
    duration: '45 minutes',
    days: 'Tuesday to Sunday (Monday Off)',
    monthlyFee: '₹5,000',
    threeMonthsFee: '₹12,000',
    sixMonthsFee: '₹21,000',
    note: 'Batch preference selected at time of application',
  },
  {
    program: 'Personal Training (LTS)',
    duration: 'Customized',
    days: 'Flexible',
    monthlyFee: '₹18,000 (12 sessions)',
    threeMonthsFee: '₹36,000 (36 sessions)',
    sixMonthsFee: '-',
    note: 'One-on-one coaching',
  },
  {
    program: 'Competitive Batch',
    duration: '120 minutes',
    days: 'Tuesday to Saturday (Sunday Off for Competitive)',
    monthlyFee: '₹8,500',
    threeMonthsFee: '₹24,000',
    sixMonthsFee: '₹45,000',
    note: 'For advanced swimmers',
  },
];

export const COACHES = [
  {
    name: 'Raj Bhanvadia',
    title: 'Team Lead',
    certifications: [
      'South Asian Games Gold Medalist',
      'ASCA Level 4 Coach',
      'ASCA Level 1 – S & C',
      'NIS Diploma in Sports Coaching',
    ],
    image: '/assets/raj-dp.jpeg',
    bio: 'South Asian Games Gold Medalist with extensive coaching experience and international certifications.',
  },
  {
    name: 'Rashi Rana',
    title: 'Team Lead',
    certifications: [
      'National Games Medalist',
      'ASCA Level 3 Coach',
      'B.P.Ed | M.P.Ed',
      'NIS Diploma in Sports Coaching',
    ],
    image: '/assets/rashi-dp.jpeg',
    bio: 'National Games Medalist with advanced education in physical education and proven coaching expertise.',
  },
];
