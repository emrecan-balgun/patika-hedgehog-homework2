import React, { useState } from 'react';
import Loading from '../components/Loading';

const withLoading = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(false);
    return (
      <>
        {loading && ( <Loading /> )}
        <WrappedComponent setLoading={setLoading} />
      </>
    );
  };
};

export default withLoading;
