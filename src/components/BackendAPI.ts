// Backend API simulation - Replace with actual backend implementation

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  businessType: string;
  message: string;
  phone?: string;
  budget?: string;
  timeline?: string;
  serviceType?: string;
  timestamp: string;
  source: string;
}

interface NewsletterData {
  email: string;
  timestamp: string;
  source: string;
}

// Simulated API endpoints - Replace with actual backend URLs
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://api.underdog.agency' 
  : 'http://localhost:3001';

export const submitContactForm = async (data: ContactFormData): Promise<void> => {
  // In a real implementation, this would send data to your backend
  console.log('Contact form submission:', data);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simulate occasional errors for testing
  if (Math.random() < 0.1) {
    throw new Error('Network error - please try again');
  }
  
  // In production, you would:
  // 1. Send to your CRM (HubSpot, Salesforce, etc.)
  // 2. Send notification emails to your team
  // 3. Store in your database
  // 4. Trigger automated follow-up sequences
};

export const subscribeToNewsletter = async (data: NewsletterData): Promise<void> => {
  console.log('Newsletter subscription:', data);
  
  await new Promise(resolve => setTimeout(resolve, 800));
  
  if (Math.random() < 0.05) {
    throw new Error('Subscription failed - please try again');
  }
  
  // In production, you would:
  // 1. Add to email marketing platform (Mailchimp, ConvertKit, etc.)
  // 2. Send welcome email
  // 3. Add to CRM with newsletter tag
};

// Analytics tracking functions
export const trackPageView = (page: string): void => {
  // Google Analytics 4
  if (typeof gtag !== 'undefined') {
    gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: page,
      page_location: window.location.href
    });
  }
  
  // Facebook Pixel
  if (typeof fbq !== 'undefined') {
    fbq('track', 'PageView');
  }
  
  console.log('Page view tracked:', page);
};

export const trackFormSubmission = (formType: string, serviceType?: string): void => {
  // Google Analytics 4
  if (typeof gtag !== 'undefined') {
    gtag('event', 'form_submit', {
      event_category: 'engagement',
      event_label: formType,
      custom_parameter_1: serviceType
    });
  }
  
  // Facebook Pixel
  if (typeof fbq !== 'undefined') {
    fbq('track', 'Lead');
  }
  
  console.log('Form submission tracked:', { formType, serviceType });
};

export const trackButtonClick = (buttonName: string, location: string): void => {
  // Google Analytics 4
  if (typeof gtag !== 'undefined') {
    gtag('event', 'click', {
      event_category: 'engagement',
      event_label: buttonName,
      custom_parameter_1: location
    });
  }
  
  console.log('Button click tracked:', { buttonName, location });
};

// Lead scoring function
export const calculateLeadScore = (formData: ContactFormData): number => {
  let score = 0;
  
  // Budget scoring
  const budgetScores: { [key: string]: number } = {
    'under-5k': 10,
    '5k-10k': 20,
    '10k-25k': 40,
    '25k-50k': 60,
    '50k-100k': 80,
    'over-100k': 100
  };
  
  if (formData.budget && budgetScores[formData.budget]) {
    score += budgetScores[formData.budget];
  }
  
  // Timeline scoring
  const timelineScores: { [key: string]: number } = {
    'asap': 50,
    '1-month': 40,
    '2-3-months': 30,
    '3-6-months': 20,
    '6-months-plus': 10,
    'just-exploring': 5
  };
  
  if (formData.timeline && timelineScores[formData.timeline]) {
    score += timelineScores[formData.timeline];
  }
  
  // Business type scoring
  const businessTypeScores: { [key: string]: number } = {
    'retail-store': 30,
    'ecommerce': 35,
    'real-estate': 40,
    'professional-services': 25,
    'healthcare': 30,
    'other': 15
  };
  
  if (businessTypeScores[formData.businessType]) {
    score += businessTypeScores[formData.businessType];
  }
  
  // Company name provided
  if (formData.company && formData.company.trim().length > 0) {
    score += 20;
  }
  
  // Phone number provided
  if (formData.phone && formData.phone.trim().length > 0) {
    score += 15;
  }
  
  // Message length and quality
  if (formData.message.length > 100) {
    score += 10;
  }
  if (formData.message.length > 200) {
    score += 10;
  }
  
  return Math.min(score, 100); // Cap at 100
};

// Email templates for notifications
export const getNotificationEmailTemplate = (formData: ContactFormData, leadScore: number): string => {
  return `
    <h2>New Lead Submission - Score: ${leadScore}/100</h2>
    <p><strong>Name:</strong> ${formData.name}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
    <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
    <p><strong>Business Type:</strong> ${formData.businessType}</p>
    <p><strong>Budget:</strong> ${formData.budget || 'Not provided'}</p>
    <p><strong>Timeline:</strong> ${formData.timeline || 'Not provided'}</p>
    <p><strong>Service Type:</strong> ${formData.serviceType || 'General Inquiry'}</p>
    <p><strong>Source:</strong> ${formData.source}</p>
    <p><strong>Message:</strong></p>
    <p>${formData.message}</p>
    <p><strong>Submitted:</strong> ${formData.timestamp}</p>
  `;
};

declare global {
  function gtag(...args: any[]): void;
  function fbq(...args: any[]): void;
}