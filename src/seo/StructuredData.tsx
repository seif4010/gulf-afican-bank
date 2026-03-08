import React from 'react';

const StructuredData: React.FC = () => {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Gulf African Bank',
    url: 'http://localhost:3000',
    logo: '/assets/images/app_logo.png',
    description: 'Gulf African Bank offers Sharia-compliant Islamic banking, personal, and corporate financial services across East Africa.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@gulfafricanbank.com',
    },
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Gulf African Bank — Ethical Banking for a Better Future',
    description: 'Gulf African Bank offers Sharia-compliant Islamic banking, personal, and corporate financial services across East Africa.',
    url: 'http://localhost:3000',
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'Gulf African Bank',
    description: 'Islamic and conventional banking services for individuals and businesses',
    areaServed: 'East Africa',
    serviceType: ['Islamic Banking', 'Personal Banking', 'Corporate Banking'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </>
  );
};

export default StructuredData;