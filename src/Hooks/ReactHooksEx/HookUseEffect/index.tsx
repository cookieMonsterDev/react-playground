import { useEffect, useRef } from 'react';

const HookUseEffect = () => {
  /**
   * Clean up function will help to resolve future problems when component
   * can be umounted several times (e.g. Strict mode)
   */
  useEffect(() => {
    const callback = () => console.log('Click');

    document.addEventListener('click', callback);

    return () => {
      document.removeEventListener('click', callback);
    };
  }, []);

  /**
   * The solution for one time usage useEffect, in case effect do not requier clean up!!!!
   */
  const oneTimeLog = useRef(true);

  useEffect(() => {
    if (oneTimeLog.current) {
      oneTimeLog.current = false;
      console.log('Hello word');
    }
  }, []);

  return <div>HookUseEffect</div>;
};

export default HookUseEffect;
