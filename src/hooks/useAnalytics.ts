import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Custom hook for analytics tracking
export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname
      });
    }

    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
      fbq('track', 'PageView');
    }

    // Custom analytics
    console.log('Page view:', location.pathname);
  }, [location]);

  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, parameters);
    }

    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
      fbq('track', eventName, parameters);
    }

    console.log('Event tracked:', eventName, parameters);
  };

  const trackFormSubmission = (formType: string, serviceType?: string) => {
    trackEvent('form_submit', {
      event_category: 'engagement',
      event_label: formType,
      service_type: serviceType
    });

    // Facebook Pixel Lead event
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Lead');
    }
  };

  const trackButtonClick = (buttonName: string, location: string) => {
    trackEvent('click', {
      event_category: 'engagement',
      event_label: buttonName,
      click_location: location
    });
  };

  return {
    trackEvent,
    trackFormSubmission,
    trackButtonClick
  };
};

declare global {
  function gtag(...args: any[]): void;
  function fbq(...args: any[]): void;
}