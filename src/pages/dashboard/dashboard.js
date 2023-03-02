import React from 'react';
import LeftSidebar from './sidebar/LeftSidebar';
import Middle from './transactionContainer/transaction';

const MainContent = () => {
  return (
    <div>
      <section class='layout'>
        <div className='boxes'>
          <LeftSidebar />
          <Middle />
        </div>
      </section>
    </div>
  );
};

export default MainContent;
