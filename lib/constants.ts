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
    id: 'toddler',
    title: 'Toddler Splash (3-5 years)',
    description: 'Gentle introduction to water with fun activities and water safety basics.',
    duration: '30 minutes',
    features: ['Water familiarization', 'Basic floating', 'Safety skills', 'Parent participation'],
  },
  {
    id: 'beginner',
    title: 'Beginner Swimmers (6-12 years)',
    description: 'Learn fundamental swimming strokes and build confidence in the water.',
    duration: '45 minutes',
    features: ['Freestyle technique', 'Backstroke basics', 'Breathing control', 'Water safety'],
  },
  {
    id: 'intermediate',
    title: 'Intermediate Level (8-16 years)',
    description: 'Refine technique and learn advanced strokes for competitive swimming.',
    duration: '60 minutes',
    features: ['All four strokes', 'Flip turns', 'Endurance training', 'Competition prep'],
  },
  {
    id: 'adult',
    title: 'Adult Swimming',
    description: 'Never too late to learn! Classes designed for adult learners of all levels.',
    duration: '60 minutes',
    features: ['Beginner to advanced', 'Fitness swimming', 'Stroke correction', 'Flexible timing'],
  },
  {
    id: 'competitive',
    title: 'Competitive Training',
    description: 'Advanced training for swimmers preparing for competitions and championships.',
    duration: '90 minutes',
    features: ['Race strategy', 'Speed training', 'Advanced techniques', 'Competition coaching'],
  },
];

export const SCHEDULE_FEES = [
  {
    program: 'Toddler Splash',
    days: 'Mon, Wed, Fri',
    time: '4:00 PM - 4:30 PM',
    monthlyFee: '₹3,000',
  },
  {
    program: 'Beginner Swimmers',
    days: 'Tue, Thu, Sat',
    time: '5:00 PM - 5:45 PM',
    monthlyFee: '₹4,500',
  },
  {
    program: 'Intermediate Level',
    days: 'Mon to Fri',
    time: '6:00 PM - 7:00 PM',
    monthlyFee: '₹6,000',
  },
  {
    program: 'Adult Swimming',
    days: 'Mon, Wed, Fri',
    time: '7:00 AM - 8:00 AM',
    monthlyFee: '₹5,000',
  },
  {
    program: 'Competitive Training',
    days: 'Mon to Sat',
    time: '6:00 AM - 7:30 AM',
    monthlyFee: '₹8,000',
  },
];

export const COACHES = [
  {
    name: 'Raj Bhanvadia',
    title: 'Head Coach',
    certifications: [
      'South Asian Games Gold Medalist',
      'ASCA Level 4 Coach',
      'ASCA Level 1 – S & C',
      'NIS Diploma in Sports Coaching',
    ],
    image: '/coaches/raj.jpg',
    bio: 'South Asian Games Gold Medalist with extensive coaching experience and international certifications.',
  },
  {
    name: 'Rashi Rana',
    title: 'Senior Coach',
    certifications: [
      'National Games Medalist',
      'ASCA Level 3 Coach',
      'B.P.Ed | M.P.Ed',
      'NIS Diploma in Sports Coaching',
    ],
    image: '/coaches/rashi.jpg',
    bio: 'National Games Medalist with advanced education in physical education and proven coaching expertise.',
  },
];
