import React, { useState } from 'react';

interface WebinarPopupProps {
  variant: 'hero' | 'card-blur' | 'businessman';
  isOpen: boolean;
  onClose: () => void;
}

const WebinarPopup: React.FC<WebinarPopupProps> = ({ variant, isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  if (!isVisible) return null;

  const renderHeroVariant = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-4xl h-96 rounded-2xl overflow-hidden shadow-2xl">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://drbalcony.com/wp-content/uploads/2025/09/daily-webinar-drb.jpg.webp")' }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 to-orange-500/75" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-8">
          {/* Logo/Brand */}
          <div className="mb-6">
            <div className="text-white text-2xl font-bold mb-2">DrBalcony</div>
            <div className="text-orange-300 text-sm font-medium tracking-wider">FREE WEBINAR</div>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 leading-tight">
            2025 CALIFORNIA<br />
            <span className="text-orange-400">LAW UPDATES</span>
          </h1>
          
          {/* Subtext */}
          <p className="text-white text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
            Stay SB 721 & SB 326 Compliant — Join Our Free Daily Webinar
          </p>
          
          {/* CTA Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
            Reserve Your Spot
          </button>
          
          {/* Schedule Info */}
          <div className="mt-6 text-white text-sm">
            <span className="font-medium">DAILY AT 11AM PST</span>
          </div>
        </div>
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-white hover:text-orange-300 transition-colors z-20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );

  const renderCardBlurVariant = () => (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      {/* Blurred Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter blur-lg scale-110"
        style={{ backgroundImage: 'url("https://drbalcony.com/wp-content/uploads/2025/09/daily-webinar-drb.jpg.webp")' }}
      />
      
      {/* Content Card */}
      <div className="relative z-10 w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Navy Header */}
          <div className="bg-blue-900 px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white text-2xl font-bold">DrBalcony</div>
                <div className="text-orange-300 text-sm font-medium tracking-wider">FREE WEBINAR</div>
              </div>
              <button 
                onClick={handleClose}
                className="text-white hover:text-orange-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="px-8 py-8">
            {/* Headline */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Avoid Costly Fines — Learn From<br />
              <span className="text-orange-500">California Balcony Experts</span>
            </h1>
            
            {/* Subtext */}
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Get the latest updates on balcony inspection laws. Join live or watch the replay — hosted by certified inspectors.
            </p>
            
            {/* Features List */}
            <div className="mb-8">
              <div className="flex items-center mb-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                <span className="text-gray-700">SB 721 & SB 326 Compliance Updates</span>
              </div>
              <div className="flex items-center mb-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                <span className="text-gray-700">Expert Q&A Session</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                <span className="text-gray-700">Free Resources & Checklists</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <button className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
              Join Free Webinar
            </button>
            
            {/* Schedule */}
            <div className="mt-6 text-center text-gray-500 text-sm">
              <span className="font-medium">DAILY AT 11AM PST</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBlueprintVariant = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-3xl">
        <div className="bg-white rounded-lg border-2 border-blue-900 overflow-hidden shadow-2xl">
          {/* Header with Blueprint Pattern */}
          <div className="bg-blue-50 px-8 py-6 border-b-2 border-blue-900" style={{
            backgroundImage: 'linear-gradient(rgba(0, 45, 98, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 45, 98, 0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-blue-900 text-2xl font-bold">DrBalcony</div>
                  <div className="text-orange-500 text-sm font-medium">CERTIFIED INSPECTORS</div>
                </div>
              </div>
              
              {/* Compliance Badge */}
              <div className="bg-gradient-to-r from-blue-900 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-bold">
                SB 721 READY
              </div>
              
              <button 
                onClick={handleClose}
                className="text-blue-900 hover:text-orange-500 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="px-8 py-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Content */}
              <div>
                {/* Headline */}
                <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 leading-tight">
                  2025 Balcony Inspection<br />
                  <span className="text-orange-500">Law Updates</span>
                </h1>
                
                {/* Subtext */}
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Everything California property owners must know for 2025 compliance.
                </p>
                
                {/* Technical Features */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">SB 721 & SB 326 Compliance</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Inspection Checklists & Forms</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Expert Q&A Session</span>
                  </div>
                </div>
                
                {/* CTA Button */}
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
                  Watch Now →
                </button>
              </div>
              
              {/* Right Column - Visual Elements */}
              <div className="flex flex-col items-center justify-center">
                {/* Balcony Icon */}
                <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-16 h-16 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                
                {/* Schedule Info */}
                <div className="text-center">
                  <div className="text-blue-900 font-bold text-lg">DAILY AT</div>
                  <div className="text-orange-500 font-bold text-2xl">11AM PST</div>
                  <div className="text-gray-500 text-sm mt-2">FREE WEBINAR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSplitVariant = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-5xl">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 min-h-96">
            {/* Left Side - Image */}
            <div 
              className="relative bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url("https://drbalcony.com/wp-content/uploads/2025/09/daily-webinar-drb.jpg.webp")' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-orange-500/60" />
              
              {/* Close Button */}
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 text-white hover:text-orange-300 transition-colors z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Image Content */}
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-8">
                {/* Logo */}
                <div className="mb-6">
                  <div className="text-white text-3xl font-bold mb-2">DrBalcony</div>
                  <div className="text-orange-300 text-sm font-medium tracking-wider">FREE WEBINAR</div>
                </div>
                
                {/* Schedule */}
                <div className="text-center">
                  <div className="text-white text-2xl font-bold mb-2">DAILY AT</div>
                  <div className="text-orange-400 text-4xl font-bold mb-4">11AM PST</div>
                  <div className="text-white text-sm">Join live or watch the replay</div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Content */}
            <div className="p-8 flex flex-col justify-center">
              {/* Headline */}
              <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 leading-tight">
                Stay SB 721 & SB 326<br />
                <span className="text-orange-500">Compliant</span>
              </h1>
              
              {/* Subtext */}
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Get the latest updates on balcony inspection laws. Everything California property owners must know for 2025.
              </p>
              
              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Expert-led sessions by certified inspectors</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Free resources & inspection checklists</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Live Q&A with industry experts</span>
                </div>
              </div>
              
              {/* CTA Button */}
              <button className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg mb-4">
                Reserve Your Spot
              </button>
              
              {/* Trust Indicators */}
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Certified Inspectors</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Daily Sessions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMinimalVariant = () => (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-lg">
        <div className="bg-white rounded-lg shadow-lg border-2 border-blue-900 overflow-hidden">
          {/* Header */}
          <div className="bg-blue-900 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-white text-lg font-bold">DrBalcony</div>
              </div>
              <button 
                onClick={handleClose}
                className="text-white hover:text-orange-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="px-6 py-6">
            {/* Trust Icons Row */}
            <div className="flex items-center justify-center space-x-6 mb-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-900 to-orange-500 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-xs text-gray-600 text-center">Certified</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-900 to-orange-500 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-xs text-gray-600 text-center">Balcony</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-900 to-orange-500 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xs text-gray-600 text-center">Daily</span>
              </div>
            </div>
            
            {/* Headline */}
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3 leading-tight text-center">
              2025 California<br />
              <span className="text-orange-500">Law Updates</span>
            </h1>
            
            {/* Subtext */}
            <p className="text-gray-600 text-center mb-6 leading-relaxed">
              Free daily webinar on balcony inspection laws. Stay compliant with SB 721 & SB 326.
            </p>
            
            {/* Key Points */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-700">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                <span>SB 721 & SB 326 compliance updates</span>
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                <span>Expert Q&A with certified inspectors</span>
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                <span>Free resources & checklists</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <button className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg mb-4">
              Join Free Webinar
            </button>
            
            {/* Schedule */}
            <div className="text-center">
              <div className="text-blue-900 font-bold text-sm">DAILY AT 11AM PST</div>
              <div className="text-gray-500 text-xs mt-1">Join live or watch the replay</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBusinessmanVariant = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-4xl">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 min-h-96">
            {/* Left Side - Businessman Image */}
            <div 
              className="relative bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url("https://drbalcony.com/wp-content/uploads/2025/09/surprised-businessman-pointing-looking-left-saying-wow-advertisement-showing-diagram-company-brand-name-white-background-copy-Medium-min.png")' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent" />
              
              {/* Close Button */}
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 text-white hover:text-orange-300 transition-colors z-10 bg-black/20 rounded-full p-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* WOW Badge */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                  WOW!
                </div>
              </div>
              
              {/* Speech Bubble */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg relative">
                  <div className="text-blue-900 font-bold text-lg mb-2">"This webinar saved us thousands!"</div>
                  <div className="text-gray-600 text-sm">- Property Manager, Los Angeles</div>
                  <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Content */}
            <div className="p-8 flex flex-col justify-center">
              {/* Logo */}
              <div className="mb-6">
                <div className="text-blue-900 text-2xl font-bold mb-1">DrBalcony</div>
                <div className="text-orange-500 text-sm font-medium tracking-wider">FREE WEBINAR</div>
              </div>
              
              {/* Headline */}
              <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 leading-tight">
                Don't Get Caught Off Guard<br />
                <span className="text-orange-500">Like This Manager!</span>
              </h1>
              
              {/* Subtext */}
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Join thousands of property managers who've avoided costly fines with our free daily webinar on California balcony inspection laws.
              </p>
              
              {/* Urgency Elements */}
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                  </svg>
                  <div>
                    <div className="text-orange-800 font-bold text-sm">URGENT: New 2025 Requirements</div>
                    <div className="text-orange-700 text-sm">SB 721 & SB 326 compliance deadlines approaching</div>
                  </div>
                </div>
              </div>
              
              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Real case studies from California properties</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Avoid $10,000+ fines with proper compliance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Expert Q&A with certified inspectors</span>
                </div>
              </div>
              
              {/* CTA Button */}
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg mb-4">
                Don't Get Caught Off Guard - Join Now
              </button>
              
              {/* Schedule & Trust */}
              <div className="flex items-center justify-between text-sm">
                <div className="text-blue-900 font-bold">DAILY AT 11AM PST</div>
                <div className="flex items-center text-gray-500">
                  <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>100% Free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDiagramVariant = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-5xl">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header with Compliance Grid */}
          <div className="bg-blue-50 px-8 py-6 border-b-2 border-blue-900" style={{
            backgroundImage: 'linear-gradient(rgba(0, 45, 98, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 45, 98, 0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-blue-900 text-2xl font-bold">DrBalcony</div>
                  <div className="text-orange-500 text-sm font-medium">CERTIFIED INSPECTION EXPERTS</div>
                </div>
              </div>
              
              {/* Compliance Badges */}
              <div className="flex space-x-2">
                <div className="bg-blue-900 text-white px-3 py-1 rounded-lg text-xs font-bold">
                  SB 721
                </div>
                <div className="bg-orange-500 text-white px-3 py-1 rounded-lg text-xs font-bold">
                  SB 326
                </div>
              </div>
              
              <button 
                onClick={handleClose}
                className="text-blue-900 hover:text-orange-500 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="grid md:grid-cols-2 min-h-96">
            {/* Left Side - Diagram Image */}
            <div 
              className="relative bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url("https://drbalcony.com/wp-content/uploads/2025/09/78084cff-9af6-4d56-af20-d331bacd6a03-copy-Medium-min-e1756998447613.png")' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-orange-500/60" />
              
              {/* Floating Compliance Badge */}
              <div className="absolute top-4 left-4 animate-bounce">
                <div className="bg-white text-blue-900 px-4 py-2 rounded-lg shadow-lg">
                  <div className="text-xs font-bold">COMPLIANCE</div>
                  <div className="text-sm font-bold">READY</div>
                </div>
              </div>
              
              {/* Technical Info Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-blue-900 font-bold text-sm mb-2">Technical Specifications</div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    <div>• Load Testing</div>
                    <div>• Structural Analysis</div>
                    <div>• Safety Protocols</div>
                    <div>• Code Compliance</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Content */}
            <div className="p-8 flex flex-col justify-center">
              {/* Headline */}
              <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 leading-tight">
                Professional Inspection<br />
                <span className="text-orange-500">Standards & Methods</span>
              </h1>
              
              {/* Subtext */}
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Learn the exact inspection protocols used by certified professionals. Get access to technical diagrams, compliance checklists, and industry best practices.
              </p>
              
              {/* Technical Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold">Technical Diagrams & Blueprints</div>
                    <div className="text-gray-600 text-sm">Step-by-step inspection procedures</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold">Compliance Checklists</div>
                    <div className="text-gray-600 text-sm">SB 721 & SB 326 requirements</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold">Expert Q&A Sessions</div>
                    <div className="text-gray-600 text-sm">Live technical discussions</div>
                  </div>
                </div>
              </div>
              
              {/* CTA Button */}
              <button className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg mb-4">
                Access Technical Resources
              </button>
              
              {/* Schedule & Trust */}
              <div className="flex items-center justify-between">
                <div className="text-blue-900 font-bold text-sm">DAILY AT 11AM PST</div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Certified</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Daily</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTechnicalVariant = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-6xl">
        <div className="bg-white rounded-lg border-2 border-blue-900 overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="bg-blue-900 px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white text-2xl font-bold">DrBalcony</div>
                  <div className="text-orange-300 text-sm font-medium">TECHNICAL INSPECTION EXPERTS</div>
                </div>
              </div>
              
              {/* Technical Badges */}
              <div className="flex space-x-2">
                <div className="bg-orange-500 text-white px-3 py-1 rounded text-xs font-bold">
                  ENGINEERED
                </div>
                <div className="bg-white text-blue-900 px-3 py-1 rounded text-xs font-bold">
                  CERTIFIED
                </div>
              </div>
              
              <button 
                onClick={handleClose}
                className="text-white hover:text-orange-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-0">
            {/* Left Side - Technical Diagram */}
            <div 
              className="lg:col-span-2 relative bg-cover bg-center bg-no-repeat min-h-96"
              style={{ backgroundImage: 'url("https://drbalcony.com/wp-content/uploads/2025/10/a6f516ac-811b-4054-a099-ddd86de92b44.png")' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-orange-500/60" />
              
              {/* Technical Annotations */}
              <div className="absolute top-4 left-4 animate-bounce">
                <div className="bg-white text-blue-900 px-3 py-2 rounded-lg shadow-lg">
                  <div className="text-xs font-bold">STRUCTURAL ANALYSIS</div>
                </div>
              </div>
              
              <div className="absolute top-4 right-4 animate-bounce">
                <div className="bg-orange-500 text-white px-3 py-2 rounded-lg shadow-lg">
                  <div className="text-xs font-bold">LOAD TESTING</div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-blue-900 font-bold text-sm mb-2">Technical Specifications</div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    <div>• Load Capacity: 100 PSF</div>
                    <div>• Safety Factor: 2.5x</div>
                    <div>• Deflection Limit: L/360</div>
                    <div>• Code: CBC 2019</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Content */}
            <div className="p-8 flex flex-col justify-center bg-gray-50">
              {/* Headline */}
              <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 leading-tight">
                Technical Inspection<br />
                <span className="text-orange-500">Standards & Methods</span>
              </h1>
              
              {/* Subtext */}
              <p className="text-gray-600 text-base mb-6 leading-relaxed">
                Master the technical aspects of balcony inspections with detailed diagrams, load calculations, and structural analysis methods.
              </p>
              
              {/* Technical Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm font-medium">Load testing procedures</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm font-medium">Structural analysis methods</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm font-medium">Code compliance requirements</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm font-medium">Safety protocol implementation</span>
                </div>
              </div>
              
              {/* CTA Button */}
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg mb-4">
                Access Technical Resources
              </button>
              
              {/* Schedule */}
              <div className="text-center">
                <div className="text-blue-900 font-bold text-sm">DAILY AT 11AM PST</div>
                <div className="text-gray-500 text-xs mt-1">Technical deep-dive sessions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render based on variant
  switch (variant) {
    case 'hero':
      return renderHeroVariant();
    case 'card-blur':
      return renderCardBlurVariant();
    case 'businessman':
      return renderBusinessmanVariant();
    default:
      return renderHeroVariant();
  }
};

export default WebinarPopup;

