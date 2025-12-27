
import React from 'react';

export const LotusIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10C50 10 35 40 50 60C65 40 50 10 50 10Z" fill="currentColor" opacity="0.8"/>
    <path d="M50 10C50 10 20 25 30 50C40 75 50 60 50 60C50 60 60 75 70 50C80 25 50 10 50 10Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M50 60C50 60 20 60 10 40C0 20 30 30 50 60Z" stroke="currentColor" strokeWidth="1"/>
    <path d="M50 60C50 60 80 60 90 40C100 20 70 30 50 60Z" stroke="currentColor" strokeWidth="1"/>
    <circle cx="50" cy="60" r="5" fill="currentColor"/>
  </svg>
);

export const ChakraIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="4"/>
    <circle cx="50" cy="50" r="10" fill="currentColor"/>
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <line
        key={angle}
        x1="50"
        y1="50"
        x2={50 + 30 * Math.cos((angle * Math.PI) / 180)}
        y2={50 + 30 * Math.sin((angle * Math.PI) / 180)}
        stroke="currentColor"
        strokeWidth="2"
      />
    ))}
  </svg>
);
