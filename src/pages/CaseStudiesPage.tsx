import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Store, Globe, Home, TrendingUp, Target, Smartphone, ArrowRight, ExternalLink } from 'lucide-react';

const CaseStudiesPage = () => {
  const [filter, setFilter] = useState('All');

  const caseStudies = [
    {
      id: 1,
      title: "The Corner Café Revolution",
      category: "Retail Marketing",
      industry: "Food & Beverage",
      challenge: "Local café struggling with foot traffic and competing against chain stores",
      solution: "Complete store redesign, local SEO optimization, and community engagement strategy",
      results: {
        metric1: { label: "Foot Traffic Increase", value: "340%" },
        metric2: { label: "Daily Revenue Growth", value: "$2,800" },
        metric3: { label: "Customer Retention", value: "89%" }
      },
      image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Store className="w-6 h-6" />,
      testimonial: "Underdog transformed our struggling café into the neighborhood's favorite spot. We now have lines out the door!",
      client: "Maria Santos, Owner"
    },
    {
      id: 2,
      title: "EcoStyle's Digital Empire",
      category: "E-Commerce",
      industry: "Fashion",
      challenge: "Sustainable fashion startup with great products but zero online presence",
      solution: "Complete e-commerce platform build, influencer partnerships, and social commerce strategy",
      results: {
        metric1: { label: "First Year Revenue", value: "$1.2M" },
        metric2: { label: "Conversion Rate", value: "8.9%" },
        metric3: { label: "Social Followers", value: "150K" }
      },
      image: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Globe className="w-6 h-6" />,
      testimonial: "From zero to seven figures in 12 months. Underdog made our sustainable fashion dream a reality.",
      client: "James Chen, Founder"
    },
    {
      id: 3,
      title: "Luxury Loft Lightning Sale",
      category: "Real Estate",
      industry: "Real Estate",
      challenge: "$2.8M luxury loft sitting on market for 6 months with no serious offers",
      solution: "Professional staging, virtual tours, targeted digital advertising, and luxury market positioning",
      results: {
        metric1: { label: "Days to Sale", value: "7" },
        metric2: { label: "Above Asking Price", value: "12%" },
        metric3: { label: "Qualified Showings", value: "23" }
      },
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Home className="w-6 h-6" />,
      testimonial: "Sold in one week after 6 months of nothing. The marketing strategy was absolutely brilliant.",
      client: "Robert Kim, Real Estate Agent"
    },
    {
      id: 4,
      title: "TechFlow's Brand Transformation",
      category: "Brand Development",
      industry: "Technology",
      challenge: "B2B software company with outdated brand struggling to compete with modern competitors",
      solution: "Complete rebrand, new visual identity, website redesign, and thought leadership content strategy",
      results: {
        metric1: { label: "Brand Recognition", value: "450%" },
        metric2: { label: "Lead Quality Increase", value: "280%" },
        metric3: { label: "Sales Cycle Reduction", value: "40%" }
      },
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Target className="w-6 h-6" />,
      testimonial: "The rebrand completely changed how prospects perceive us. We're now seen as the premium option.",
      client: "Sarah Williams, CMO"
    },
    {
      id: 5,
      title: "FitLife's Ad Performance Breakthrough",
      category: "Digital Advertising",
      industry: "Fitness",
      challenge: "Fitness equipment company burning through ad budget with poor ROAS",
      solution: "Complete ad account restructure, audience research, creative testing, and funnel optimization",
      results: {
        metric1: { label: "ROAS Improvement", value: "12.5x" },
        metric2: { label: "Cost Per Acquisition", value: "-78%" },
        metric3: { label: "Monthly Revenue", value: "$450K" }
      },
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <TrendingUp className="w-6 h-6" />,
      testimonial: "From losing money on ads to 12.5x ROAS. Underdog turned our advertising into a profit machine.",
      client: "Mike Johnson, Founder"
    },
    {
      id: 6,
      title: "BeautyBar's Social Media Empire",
      category: "Social Media",
      industry: "Beauty",
      challenge: "Local beauty salon with amazing services but struggling to attract younger customers",
      solution: "TikTok and Instagram strategy, influencer partnerships, user-generated content campaigns",
      results: {
        metric1: { label: "Social Followers", value: "250K" },
        metric2: { label: "Viral Video Views", value: "5.2M" },
        metric3: { label: "New Customer Bookings", value: "340%" }
      },
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Smartphone className="w-6 h-6" />,
      testimonial: "We went viral and now have a 3-week waiting list. Social media completely transformed our business.",
      client: "Lisa Park, Owner"
    }
  ];

  const categories = ['All', 'Retail Marketing', 'E-Commerce', 'Real Estate', 'Brand Development', 'Digital Advertising', 'Social Media'];

  const filteredCaseStudies = filter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === filter);

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Success stories"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Success
            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Stories
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Real businesses, real challenges, real results. See how we've transformed underdogs 
            into market leaders across every industry.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Success Story
            </button>
            <Link 
              to="/"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-center"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-white text-black'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredCaseStudies.map((study) => (
              <div key={study.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-500 group">
                <div className="relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <div className="text-white bg-black/50 p-2 rounded-full">
                      {study.icon}
                    </div>
                    <span className="text-sm text-white bg-black/50 px-3 py-1 rounded-full">
                      {study.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-xs text-gray-300 bg-black/50 px-2 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    {study.title}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">{study.results.metric1.value}</div>
                      <div className="text-xs text-gray-400">{study.results.metric1.label}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">{study.results.metric2.value}</div>
                      <div className="text-xs text-gray-400">{study.results.metric2.label}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">{study.results.metric3.value}</div>
                      <div className="text-xs text-gray-400">{study.results.metric3.label}</div>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-gray-600 pl-4 mb-4">
                    <p className="text-gray-300 italic text-sm mb-2">"{study.testimonial}"</p>
                    <cite className="text-gray-400 text-xs">— {study.client}</cite>
                  </blockquote>

                  <button className="flex items-center text-white hover:text-gray-300 transition-colors duration-300 text-sm font-medium">
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of businesses that have transformed their marketing with Underdog
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Your Free Strategy Session
            </button>
            <Link 
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-center"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;