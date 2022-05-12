import { Suspense, lazy } from 'react';

interface DynamicOptions {
  fallback?(): any,
}

function DefaultFallback() {
  return (
    <></>
  );
}

/**
 * Next-like dynamic component import
 * @example ```tsx
 * const Component = dynamic(
 *   () => import('./path/to/component'),
 *   { fallback: <p>Loading</p> }
 * );
 * ```
 */
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
