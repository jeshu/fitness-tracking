import React from 'react';

import './progress-counter.module.scss';

/* eslint-disable-next-line */
export interface ProgressCounterProps {}

export function ProgressCounter(props: ProgressCounterProps) {
  const radius:number = 100;
  const stroke:number = 8;
  
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset:number = circumference - 30 / 100 * circumference;
  return (
    <div className='inline-flex flex-col p-2 justify-center'>
      
    <svg
      height={radius * 2}
      width={radius * 2}
      >
      <circle
        stroke="grey"
        fill="transparent"
        strokeWidth={ stroke }
        strokeDasharray={ circumference + ' ' + circumference }
        style={ { strokeDashoffset } }
        stroke-width={ stroke }
        r={ normalizedRadius }
        cx={ radius }
        cy={ radius }
        />
        <circle
          stroke="red"
          fill="transparent"
          strokeWidth={ stroke }
          strokeDasharray={ circumference + ' ' + circumference }
          style={ { strokeDashoffset } }
          stroke-width={ stroke }
          r={ normalizedRadius }
          cx={ radius }
          cy={ radius }
          />
    </svg>
  
      <div className='flex justify-center text-lg font-medium pt-2'>label</div>
    </div>
  );
}

export default ProgressCounter;
