import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

type SEOProps = {
  publishTime?: string;
  modifiedTime?: string;
  type?: 'website' | 'article';
  description?: string;
  title?: string;
  /**
   * Relative path to image
   */
  image?: string;
  tags?: string[];
};

const baseUrl = 'https://law-point.vecel.app';
const defaultMeta = {
  title: 'Law Point – Online collection of all Bangladesh law',
  description: 'Online collection of all Bangladesh law',
  type: 'website',
  image: '',
};

const SEO: React.FC<SEOProps> = ({ children, ...customMeta }) => {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...customMeta,
    image: customMeta.image ?? defaultMeta.image,
  };
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={`${baseUrl}${router.asPath}`} />

      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={`${baseUrl}${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Law point" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={`${baseUrl}${meta.image}`} />
      {meta.publishTime && (
        <meta property="article:published_time" content={meta.publishTime} />
      )}
      {meta.modifiedTime && (
        <meta property="article:modified_time" content={meta.modifiedTime} />
      )}
      {meta.tags &&
        meta.tags.map((tag) => (
          <meta property="article:tag" content={tag} key={tag} />
        ))}
    </Head>
  );
};

export default SEO;
