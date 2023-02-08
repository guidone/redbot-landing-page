import React from 'react';
import { plug } from 'code-plug';

import { Content, withConfigurationPage } from '../../src/components';

const { Contents } = Content;

import ConfigurationForm from './views/configuration-form';
import PreviewPage from './views/preview';

const Legend = () => (
  <div>
    Configure your chatbot landing page, in this way your bot can be indexed by search engine.<br/>
    Setup the hero section (the big paragraphs at the top), the preview prompts (the user and bot sentences inside the pphone preview),
    the links to open the chatbot in the platforms and the features list.
    <br />
    <b>
      The landing page URL is <code>http://mybotaddress.com/home</code> or <code>http://localhost:1880/home</code>.
    </b>
  </div>
);

plug(
  'sidebar',
  null,
  {
    id: 'landing-page',
    label: 'Landing page',
    icon: 'file-code-o',
    options: [
      { label: 'Configuration', url: '/landing-page/configuration', id: 'landing-page-configuration' },
      { label: 'Features', url: '/landing-page/features', id: 'landing-page-features' },
      { label: 'Preview', url: '/landing-page/preview', id: 'landing-page-preview' }
    ]
  }
);
plug('pages', Contents, {
  url: '/landing-page/features',
  title: 'Landing page',
  id: 'landing-page-features',
  namespace: 'landing-page',
  sortable: true,
  labels: {
    createContent: 'Create feature block',
    emptyContent: 'No feature block',
    saveContent: 'Save feature block'
  }
});
plug(
  'pages',
  withConfigurationPage(
    'landing-page',
    ConfigurationForm,
    { Legend, title: 'Landing page' }
  ),
  {
    permission: 'configure',
    url: '/landing-page/configuration',
    title: 'Landing page configuration',
    id: 'landing-page-configuration'
  }
);
plug(
  'pages',
  PreviewPage,
  {
    permission: 'configure',
    url: '/landing-page/preview',
    title: 'Landing page configuration',
    id: 'landing-page-configuration'
  }
);
