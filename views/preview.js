import React from 'react';

import { Tag } from 'rsuite';
import { PageContainer, Breadcrumbs } from '../../../src/components';

// for retro-compatibility, remove after 1.22
const NodeRedUrl = ({ children }) => <Tag style={{ backgroundColor: '#3399AA', color: '#ffffff', fontSize: '14px' }}>{children}</Tag>;;

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
