import React, { useState, useEffect } from 'react';

const SingleColor = ({ hex, type, weight }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const copying = setInterval(() => setCopied(false), 3000);
    return () => clearInterval(copying);
  }, [copied]);

  return (
    <div
      className={`color ${type === 'shade' && 'color-light'}`}
      style={{background: hex}}
      onClick={() => {
        setCopied(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hex}</p>
      {copied && <p className='alert'>copied to clipboard</p>}
    </div>
  );
}

export default SingleColor;
