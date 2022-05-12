import { Suspense, lazy } from 'react';

interface DynamicOptions {
  fallback?(): any,
}

function DefaultFallback() {
  return (
    <></>
  );
}

const dynamic = (dynamicImport: () => Promise<any>, options: DynamicOptions = {}) => {
  function DynamicComponent() {
    const Fallback = options.fallback || DefaultFallback;
    const Children = lazy(dynamicImport);

    return (
      <Suspense fallback={<Fallback />}>
        <Children />
      </Suspense>
    );
  }

  return DynamicComponent;
};

export default dynamic;
