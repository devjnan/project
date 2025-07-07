// SEO utilities for dynamic meta tags
export const updatePageMeta = (title: string, description: string, keywords?: string) => {
  // Update title
  document.title = title;

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  }

  // Update meta keywords
  if (keywords) {
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
  }

  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', title);
  }

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', description);
  }

  // Update canonical URL
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', window.location.href);
  }
};

// Structured data for SEO
export const generateStructuredData = (type: 'Organization' | 'Service' | 'LocalBusiness', data: any) => {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };

  // Remove existing structured data
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }

  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(baseData);
  document.head.appendChild(script);
};

// Organization structured data
export const organizationStructuredData = {
  name: 'Underdog Marketing Agency',
  description: 'Marketing agency specializing in retail, e-commerce, and real estate marketing solutions',
  url: 'https://underdog.agency',
  logo: 'https://underdog.agency/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-123-4567',
    contactType: 'customer service',
    email: 'hello@underdog.agency'
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New York',
    addressCountry: 'US'
  },
  sameAs: [
    'https://instagram.com/underdogagency',
    'https://twitter.com/underdogagency',
    'https://linkedin.com/company/underdog-agency'
  ]
};

// Service structured data templates
export const serviceStructuredData = {
  retailMarketing: {
    name: 'Retail Store Marketing',
    description: 'Comprehensive marketing solutions for retail stores and physical locations',
    provider: organizationStructuredData,
    serviceType: 'Marketing Service',
    areaServed: 'Worldwide'
  },
  ecommerce: {
    name: 'E-Commerce Marketing',
    description: 'Digital marketing solutions for online stores and e-commerce businesses',
    provider: organizationStructuredData,
    serviceType: 'Digital Marketing Service',
    areaServed: 'Worldwide'
  },
  realEstate: {
    name: 'Real Estate Marketing',
    description: 'Marketing solutions for real estate agents and property developers',
    provider: organizationStructuredData,
    serviceType: 'Real Estate Marketing Service',
    areaServed: 'Worldwide'
  }
};