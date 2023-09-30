'use client';

import styled, { css } from 'styled-components';

export const LoadingSpinner = () => {
    const Spinner = styled.span`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 14px solid transparent;
        border-top: 14px solid #ff8d28;

        border-radius: 50%;
        width: 430px;
        height: 430px;
        animation: spin 3s linear infinite;

        @keyframes spin {
            0% {
                transform: translate(-50%, -50%) rotate(0deg);
            }
            100% {
                transform: translate(-50%, -50%) rotate(360deg);
            }
        }
    `;

    return (
        <>
            <Spinner></Spinner>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="201"
                height="210"
                viewBox="0 0 201 210"
                fill="none">
                <mask
                    id="mask0_24_21651"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="201"
                    height="210">
                    <rect width="201" height="209.835" fill="white" />
                </mask>
                <g mask="url(#mask0_24_21651)">
                    <path
                        d="M33.0809 219.723C16.5846 185.862 -3.36087 114.076 75.8212 79.7634L159.052 100.08L129.809 118.139"
                        stroke="#ff8d28"
                        stroke-width="9"
                    />
                    <mask id="path-3-inside-1_24_21651" fill="white">
                        <ellipse cx="96.0671" cy="106.854" rx="6.74847" ry="6.77223" />
                    </mask>
                    <ellipse cx="96.0671" cy="106.854" rx="6.74847" ry="6.77223" fill="#ff8d28" />
                    <path
                        d="M93.8156 106.854C93.8156 105.654 94.7939 104.626 96.0671 104.626V122.626C104.795 122.626 111.816 115.535 111.816 106.854H93.8156ZM96.0671 104.626C97.3404 104.626 98.3187 105.654 98.3187 106.854H80.3187C80.3187 115.535 87.3397 122.626 96.0671 122.626V104.626ZM98.3187 106.854C98.3187 108.055 97.3404 109.082 96.0671 109.082V91.082C87.3397 91.082 80.3187 98.1734 80.3187 106.854H98.3187ZM96.0671 109.082C94.7939 109.082 93.8156 108.055 93.8156 106.854H111.816C111.816 98.1734 104.795 91.082 96.0671 91.082V109.082Z"
                        fill="#ff8d28"
                        mask="url(#path-3-inside-1_24_21651)"
                    />
                    <path
                        d="M147.803 138.457C147.803 149.701 138.724 158.789 127.559 158.789C116.393 158.789 107.314 149.701 107.314 138.457C107.314 127.214 116.393 118.126 127.559 118.126C138.724 118.126 147.803 127.214 147.803 138.457Z"
                        stroke="#ff8d28"
                        stroke-width="9"
                    />
                    <path
                        d="M190.544 217.466C190.544 199.407 179.297 161.031 141.056 154.258M75.8205 79.7638C64.573 78.2588 38.5434 70.7341 44.3276 43.6452C49.7263 18.3622 78.0701 21.0711 89.3175 30.1007C95.3161 21.0711 118.561 3.01178 143.305 18.8137C174.891 38.9845 163.551 88.7934 120.81 91.0508"
                        stroke="#ff8d28"
                        stroke-width="9"
                    />
                </g>
            </svg>
        </>
    );
};
