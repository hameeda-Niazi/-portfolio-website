import { useEffect, useState } from 'react';

function Counter({ end, suffix = '+' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = end / 50;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.round(current));
      }
    }, 25);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default Counter;
