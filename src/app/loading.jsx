import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
      <div className="flex flex-col items-center my-12">
        <Spinner size="xl" />
      </div>

    );
};

export default loading;