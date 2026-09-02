import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path: string;          // e.g. "/" or "/ventures/bitra-colony"
  image?: string;
  jsonLd?: object;
}

const SITE_URL = 'https://gomatharealtors.in';

const SEO: React.FC<SEOProps> = ({ title, description, path, image, jsonLd }) => {
  const url = `${SITE_URL}${path}`;
  const ogImage = image ? `${SITE_URL}${image}` : `${SITE_URL}/Gomatha-Logo.png`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
