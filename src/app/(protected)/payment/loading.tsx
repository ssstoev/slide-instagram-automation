import React from 'react';
import Loader from '@/components/global/loader';

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Loader state>...loading</Loader>
    </div>
  );
};

export default Loading;