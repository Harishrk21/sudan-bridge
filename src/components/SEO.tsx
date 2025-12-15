import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = 'SudInd Smart Portal - Your Gateway to Healthcare & Education in India',
  description = 'SudInd Smart Portal connects Sudanese patients and students to India\'s premier hospitals and universities. Medical treatment, academic admissions, and comprehensive support services.',
  keywords = 'Sudan India, medical treatment India, study in India, Sudanese students India, medical tourism, MBBS India, healthcare India, academic admissions India, visa assistance, document management',
  ogTitle,
  ogDescription,
  ogImage = '/plain-logo.png',
  ogUrl,
  twitterCard = 'summary_large_image',
  canonical,
  noindex = false,
  nofollow = false,
}) => {
  const siteUrl = 'https://sudind.com'; // Update with your actual domain
  const fullTitle = title.includes('SudInd') ? title : `${title} | SudInd Smart Portal`;
  const fullOgTitle = ogTitle || fullTitle;
  const fullOgDescription = ogDescription || description;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
  const fullOgUrl = ogUrl ? (ogUrl.startsWith('http') ? ogUrl : `${siteUrl}${ogUrl}`) : siteUrl;
  const fullCanonical = canonical ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`) : siteUrl;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Robots meta
    const robotsContent = [
      noindex ? 'noindex' : 'index',
      nofollow ? 'nofollow' : 'follow',
    ].join(', ');
    updateMetaTag('robots', robotsContent);

    // Open Graph tags
    updateMetaTag('og:title', fullOgTitle, true);
    updateMetaTag('og:description', fullOgDescription, true);
    updateMetaTag('og:image', fullOgImage, true);
    updateMetaTag('og:url', fullOgUrl, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:site_name', 'SudInd Smart Portal', true);
    updateMetaTag('og:locale', 'en_US', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:title', fullOgTitle);
    updateMetaTag('twitter:description', fullOgDescription);
    updateMetaTag('twitter:image', fullOgImage);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonical);

    // Language attribute
    document.documentElement.setAttribute('lang', 'en');
  }, [
    fullTitle,
    description,
    keywords,
    fullOgTitle,
    fullOgDescription,
    fullOgImage,
    fullOgUrl,
    fullCanonical,
    twitterCard,
    noindex,
    nofollow,
  ]);

  return null;
};

export default SEO;

