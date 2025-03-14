import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
    
      <div className="relative bg-[#1a1a1a]">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-30"
            src="https://raw.githubusercontent.com/tech2etc/Build-and-Deploy-Ecommerce-Website/refs/heads/main/img/about/banner.png"
            alt="About background"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Story
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            We're passionate about bringing you the latest fashion trends with quality and style. Learn more about our journey and commitment to excellence.
          </p>
        </div>
      </div>

    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Our Journey</h2>
            <p className="text-lg text-gray-600 mb-4">
              Founded in 2020, Clothes2Wear has grown from a small boutique to a leading fashion destination. Our journey began with a simple mission: to provide high-quality, trendy clothing at accessible prices.
            </p>
            <p className="text-lg text-gray-600">
              Today, we're proud to serve customers worldwide, offering a carefully curated collection of clothing that combines style, comfort, and sustainability.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Our store"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a1a1a] text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#1a1a1a] text-white mx-auto mb-4">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">Quality First</h3>
              <p className="text-gray-600">We never compromise on quality, ensuring each piece meets our high standards.</p>
            </div>
            <div className="text-center p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#1a1a1a] text-white mx-auto mb-4">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">Customer Focus</h3>
              <p className="text-gray-600">Your satisfaction is our top priority, with excellent service at every step.</p>
            </div>
            <div className="text-center p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#1a1a1a] text-white mx-auto mb-4">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">Sustainability</h3>
              <p className="text-gray-600">We're committed to sustainable practices and eco-friendly materials.</p>
            </div>
          </div>
        </div>
      </div>

   
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-[#1a1a1a] text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              alt="Team member"
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-[#1a1a1a]"
            />
            <h3 className="text-xl font-semibold text-[#1a1a1a]">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
              alt="Team member"
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-[#1a1a1a]"
            />
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Jane Smith</h3>
            <p className="text-gray-600">Creative Director</p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Team member"
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-[#1a1a1a]"
            />
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Mike Johnson</h3>
            <p className="text-gray-600">Head of Operations</p>
          </div>
        </div>
      </div>

      {/* Achievements  */}
      <div className="bg-[#1a1a1a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <p className="text-gray-300">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <p className="text-gray-300">Products</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-gray-300">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
