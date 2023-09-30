'use client';
import React, { FC } from 'react';
import styled from 'styled-components';

export interface SpinnerComponentProps {
    icon: boolean;
}

export const Spinner: FC<SpinnerComponentProps> = ({ icon }) => {
    const Spinner = styled.span`
        position: ${icon ? 'relative' : 'absolute'};
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1.5px solid transparent;
        border-top: 1.5px solid #757575;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        animation: spin 1s linear infinite;

        @keyframes spin {
            0% {
                transform: translate(-50%, -50%) rotate(0deg);
            }
            100% {
                transform: translate(-50%, -50%) rotate(360deg);
            }
        }
    `;
    return <Spinner></Spinner>;
};
