"use client";
import dynamic from 'next/dynamic';

export const MapComponent = dynamic(() => import('./map'), {ssr: false});

