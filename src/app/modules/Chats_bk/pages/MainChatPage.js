import React from 'react';

import ChatContent from '../components/ChatContent';
import LeftContent from '../components/LeftContent';

const NewsPage = props => {
  return (
    <div className="d-flex" style={{height: 'calc(100vh - 95px)', backgroundColor: '#fff'}}>
      <div className="d-flex flex-column p-3" style={{width: 350, backgroundColor: '#fff', borderRight: '1px solid rgba(0, 0, 0, 0.05)'}}>
        <LeftContent />
      </div>

      <div className="d-flex flex-grow-1 scroll-y">
        <ChatContent />
      </div>
    </div>
  );
};

export default NewsPage;
