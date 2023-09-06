import { useEffect } from 'react';

const useOutside = (ref, exRef = null, handler) => {
  useEffect(() => {
    const handleClick = (e) => {
      const element = ref?.current;
      const exception = exRef?.current;
  
      if(exception.contains(e.target)) return;
  
      if (!element || element.contains(e.target)) return;
    
      handler();
    };

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [ref, exRef, handler]);
};

export default useOutside;
