'use client';

import { useState, useEffect } from 'react';

export const useWindowSize = (): number => {
    const [windowSize, setWindowSize] = useState<number>(
        typeof window !== 'undefined' ? window.innerWidth : 1920,
    );

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const handleWindowSizeChange = () => {
            setWindowSize(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    return windowSize;
};
