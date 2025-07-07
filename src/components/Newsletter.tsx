import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call - replace with actual newsletter signup endpoint
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          timestamp: new Date().toISOString(),
          source: 'Website Newsletter'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      setSubmitStatus('success');
      setEmail('');

      // Auto-hide success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);

    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8">
      <div className="text-center mb-6">
        <Mail className="w-12 h-12 text-white mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">
          Marketing Insights & Tips
        </h3>
        <p className="text-gray-300">
          Get weekly marketing strategies, case studies, and industry insights delivered to your inbox.
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 mb-6 flex items-center space-x-3">
          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
          <p className="text-green-300 text-sm">Successfully subscribed! Check your email for confirmation.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6 flex items-center space-x-3">
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
          <p className="text-red-300 text-sm">Something went wrong. Please try again.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors duration-300"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
              <span>Subscribing...</span>
            </div>
          ) : (
            'Subscribe to Newsletter'
          )}
        </button>
      </form>

      <p className="text-xs text-gray-400 mt-4 text-center">
        No spam, ever. Unsubscribe anytime with one click.
      </p>
    </div>
  );
};

export default Newsletter;