import React, { Suspense, lazy } from "react";

const LazyLoading = ({ path }) => {
  const LazyComponent = lazy(() => import(`../${path}`));

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <LazyComponent />
    </Suspense>
  );
};

export default LazyLoading;
