import React, { useState } from 'react';
import Head from 'next/head';
import WebinarPopup from '../WebinarPopup';

const HomePage: React.FC = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const variants = [
    { key: 'hero', name: 'Hero Image Overlay', description: 'Full-width background with gradient overlay - optimized for high conversion' },
    { key: 'card-blur', name: 'Card on Blur', description: 'Small pop-up box with clean design - perfect for subtle engagement' },
    { key: 'businessman', name: 'Businessman Engagement', description: 'Professional diagram with human-focused messaging' }
  ];

  return (
    <>
      <Head>
        <title>DrBalcony Webinar Pop-up Variations</title>
        <meta name="description" content="Conversion-focused pop-up banners for DrBalcony's Free Daily Webinar" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-gray-100 font-['Poppins']">
        {/* Header */}
        <div className="bg-blue-900 text-white py-8">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">DrBalcony Webinar Pop-up Variations</h1>
            <p className="text-lg text-blue-200">
              Conversion-focused pop-up banners for the Free Daily Webinar
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {variants.map((variant) => (
              <div key={variant.key} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{variant.name}</h3>
                <p className="text-gray-600 mb-4">{variant.description}</p>
                <button
                  onClick={() => setActivePopup(variant.key)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Preview {variant.name}
                </button>
              </div>
            ))}
          </div>

          {/* Design Rationale */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Design Rationale</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Brand Guidelines</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Navy: #002D62 (primary brand color)</li>
                  <li>• Orange: #F26522 (accent color)</li>
                  <li>• White: #FFFFFF (background)</li>
                  <li>• Poppins font family for modern, professional look</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Conversion Elements</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Clear, action-oriented headlines</li>
                  <li>• Prominent CTA buttons with hover effects</li>
                  <li>• Trust indicators (certified, daily, compliance badges)</li>
                  <li>• Mobile-responsive design</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copy Variations */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Copy Variations</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Headlines</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• "2025 California Law Updates"</li>
                  <li>• "Stay SB 721 & SB 326 Compliant"</li>
                  <li>• "Avoid Costly Fines — Learn From California Balcony Experts"</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Subtext</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• "Get the latest updates on balcony inspection laws"</li>
                  <li>• "Join live or watch the replay — hosted by certified inspectors"</li>
                  <li>• "Everything California property owners must know for 2025"</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">CTA Buttons</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• "Reserve Your Spot"</li>
                  <li>• "Join Free Webinar"</li>
                  <li>• "Watch Now →"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Render Active Popup */}
      {activePopup && (
        <WebinarPopup
          variant={activePopup as any}
          isOpen={true}
          onClose={() => setActivePopup(null)}
        />
      )}
    </>
  );
};

export default HomePage;

