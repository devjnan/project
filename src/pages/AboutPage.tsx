import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Globe, TrendingUp, Store, Home, Target, Heart, Zap } from 'lucide-react';

const AboutPage = () => {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  const stats = [
    { icon: <Store className="w-8 h-8" />, number: "200+", label: "Retail Stores Transformed" },
    { icon: <Globe className="w-8 h-8" />, number: "150+", label: "Online Businesses Launched" },
    { icon: <Home className="w-8 h-8" />, number: "500+", label: "Properties Sold" },
    { icon: <TrendingUp className="w-8 h-8" />, number: "500%", label: "Average Sales Growth" }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Retail Marketing Director",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "15+ years transforming retail stores into customer magnets with innovative in-store marketing strategies",
      expertise: ["Visual Merchandising", "Customer Experience", "Local Marketing", "Store Analytics"]
    },
    {
      name: "Marcus Rodriguez",
      role: "Digital Commerce Lead",
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "E-commerce specialist who has launched 150+ successful online stores with combined revenue of $50M+",
      expertise: ["E-commerce Strategy", "Conversion Optimization", "Digital Advertising", "Growth Hacking"]
    },
    {
      name: "Elena Kowalski",
      role: "Real Estate Marketing Expert",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Real estate marketing maven with expertise in luxury properties and commercial real estate ventures",
      expertise: ["Property Marketing", "Virtual Tours", "Lead Generation", "Market Analysis"]
    },
    {
      name: "David Kim",
      role: "Brand Strategy Director",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Brand strategist who has built memorable identities for Fortune 500 companies and startups alike",
      expertise: ["Brand Development", "Creative Strategy", "Market Positioning", "Brand Guidelines"]
    },
    {
      name: "Priya Patel",
      role: "Performance Marketing Manager",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Data-driven marketer specializing in high-ROI advertising campaigns across all digital platforms",
      expertise: ["Google Ads", "Facebook Advertising", "Analytics", "ROI Optimization"]
    },
    {
      name: "Alex Thompson",
      role: "Social Media Strategist",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Social media expert who has built viral campaigns and engaged communities for global brands",
      expertise: ["Content Creation", "Community Management", "Influencer Marketing", "Social Commerce"]
    }
  ];

  const values = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Results-Driven",
      description: "Every strategy we implement is designed to deliver measurable results that impact your bottom line."
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Client-Obsessed",
      description: "Your success is our success. We're not satisfied until you're thriving in your market."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Innovation First",
      description: "We stay ahead of trends and use cutting-edge strategies to give you a competitive advantage."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Collaborative",
      description: "We work as an extension of your team, bringing expertise while respecting your vision."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Meet The
            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Underdog Team
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            We're a team of marketing rebels who believe every business deserves to dominate their market. 
            From retail stores to digital empires, we turn underdogs into champions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Work With Us
            </button>
            <Link 
              to="/"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-center"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real businesses across every industry
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-white mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Underdog was born from a simple belief: every business, no matter how small, 
                  deserves marketing that drives real results. We started as a small team of 
                  marketing rebels who were tired of seeing great businesses struggle with 
                  ineffective marketing.
                </p>
                <p>
                  What began as a mission to help local retail stores has evolved into a 
                  comprehensive marketing agency that transforms businesses across every industry. 
                  From brick-and-mortar stores to e-commerce empires and real estate ventures, 
                  we've helped hundreds of businesses become market leaders.
                </p>
                <p>
                  Today, we're proud to be the agency that turns underdogs into champions. 
                  Our multi-disciplinary approach combines traditional marketing wisdom with 
                  cutting-edge digital strategies to deliver results that matter.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Team working together"
                className="w-full h-96 object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our core values shape everything we do and every strategy we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center hover:bg-gray-800/50 transition-all duration-300">
                <div className="text-white mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet The Experts
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A diverse team of marketing specialists who live and breathe results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800 hover:border-gray-600 hover:shadow-lg transition-all duration-300">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">{member.name}</h4>
                <p className="text-gray-300 font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
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
            Ready to Join the Underdog Success Stories?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our team can help transform your business into a market leader
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Transformation
            </button>
            <Link 
              to="/"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-center"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;