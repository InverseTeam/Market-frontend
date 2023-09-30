'use client';

import styled from 'styled-components';
import React, { FC } from 'react';

export type RadioSize = 'small' | 'medium' | 'large';

interface RadioComponentProps {
    /**
     * Размер
     */
    size?: RadioSize;

    /**
     * HTML-атрибут `value`
     */
    value?: string | undefined;

    /**
     * Функция, вызываемая при изменении `value`
     */
    onValueChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;

    /**
     * HTML-событие `onmouseenter`
     */
    onMouseEnter?: React.MouseEventHandler<HTMLLabelElement>;

    /**
     * HTML-событие `mouseleave`
     */
    onMouseLeave?: React.MouseEventHandler<HTMLLabelElement>;

    /**
     * HTML-событие `onmouseover`
     */
    onMouseOver?: React.MouseEventHandler<HTMLLabelElement>;

    /**
     *  Состояние валидации при ошибке
     */
    error?: boolean;

    /**
     * Состояние валидации при предупреждении
     */
    warning?: boolean;

    /**
     * Состояние фокуса
     */
    focused?: boolean;

    /**
     * Состояние disabled
     */
    disabled?: boolean;
}

export const Radio: FC<RadioComponentProps> = ({
    value,
    onValueChange,
    focused,
    error,
    warning,
    disabled,
    size = 'small',
    onMouseOver,
    onMouseEnter,
    onMouseLeave,
}) => {
    const RadioWrapper = styled.label`
        display: inline-flex;
        align-items: center;
        cursor: ${disabled ? 'default' : 'pointer'};

        width: fit-content;
        height: ${size === 'small' ? '16px' : size === 'medium' ? '20px' : '24px'};
    `;

    const RadioInput = styled.input`
        position: absolute;
        opacity: 0;
        cursor: ${disabled ? 'default' : 'pointer'};
    `;

    const RadioControl = styled.span`
        position: relative;
        display: inline-block;
        width: ${size === 'small' ? '16px' : size === 'medium' ? '20px' : '24px'};
        height: ${size === 'small' ? '16px' : size === 'medium' ? '20px' : '24px'};
        border-radius: 50%;
        border: ${error
            ? '2px solid #DD473B'
            : warning
            ? '2px solid #FCB73E'
            : size === 'medium'
            ? '2px solid #adadad'
            : size === 'large'
            ? '2px solid #adadad'
            : '1.6px solid #adadad'};
        transition: all 0.2s;
        background: ${disabled ? '#0000001A' : '#fff'};

        &:disabled {
            border: 1.5px solid #0000001a;
            &:focus {
                border-color: #0000001a;
                background-color: #f0f0f0;
            }

            &::after {
                content: '';
                position: absolute;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) scale(0);
                transition: transform 0.2s, opacity 0.2s;
            }
        }

        ${RadioInput}:checked + & {
            border-color: #3d3d3d;
        }

        &:hover {
            background-color: #f0f0f0;
            background: ${disabled ? '#0000001A' : null};
        }

        &:focus {
            border-color: #3d3d3d;
        }
        &:after {
            content: '';
            position: absolute;
            width: ${size === 'small' ? '8px' : size === 'medium' ? '10px' : '12px'};
            height: ${size === 'small' ? '8px' : size === 'medium' ? '10px' : '12px'};
            border-radius: 50%;
            background-color: #3d3d3d;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            transition: transform 0.2s, opacity 0.2s;
        }

        ${RadioInput}:checked + &::after {
            transform: translate(-50%, -50%) scale(1);
        }
    `;
    return (
        <>
            <RadioWrapper
                onMouseEnter={onMouseEnter}
                onMouseOver={onMouseOver}
                onMouseLeave={onMouseLeave}>
                <RadioInput disabled={disabled} type="radio" checked={focused} />
                <RadioControl />
                {value && (
                    <span
                        onChange={onValueChange}
                        style={{
                            marginLeft: '8px',
                            fontSize:
                                size === 'small' ? '14px' : size === 'medium' ? '16px' : '18px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '20px',
                            color: disabled ? '#ADADAD' : '#222',
                        }}>
                        {value}
                    </span>
                )}
            </RadioWrapper>
        </>
    );
};
