import React from 'react';

import { PageContainer, Breadcrumbs, HelpElements } from '../../../src/components';

const { NodeRedUrl } = HelpElements;

const PreviewPage = () => {
  return (
    <PageContainer className="page-users">
      <Breadcrumbs pages={['Landing page', 'Preview']}/>
      <div style={{ paddingBottom: '15px' }}>
        Landing page address <NodeRedUrl>{window.location.protocol + '//' + window.location.host + '/home'}</NodeRedUrl>
      </div>
      <div>
        <iframe
          src="/home"
          style={{ width: '100%', height: '500px', border: '1px solid #cccccc' }}
        />
      </div>
    </PageContainer>
  );
};

export default PreviewPage;
