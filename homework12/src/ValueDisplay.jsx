import React, { useEffect, useRef } from 'react';

function ValueDisplay({ value }) {
  const prevValueRef = useRef('');

  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);

  return (
    <div className="value-display">
      <p><strong>Current Value:</strong> {value}</p>
      <p><strong>Previous Value:</strong> {prevValueRef.current}</p>
    </div>
  );
}

export default ValueDisplay;