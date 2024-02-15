// /* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect } from "react";

// const useDebounce = (func: any, delay: number = 300) => {
//   let timer;
//   useEffect(() => {
//     timer = setTimeout(() => {
//       func();
//     }, delay);
//     return clearTimeout(timer);
//   }, [delay]);

//   return
// };
// export default useDebounce;

import { useCallback } from "react";

function useDebounce(func: any, delay = 500) {
  // Use useCallback to memoize a debounced version of 'func'
  const debouncedFunc = useCallback(() => {
    const handler = setTimeout(() => {
      func();
    }, delay);

    return () => clearTimeout(handler);
  }, [func, delay]);

  return debouncedFunc;
}

export default useDebounce;
