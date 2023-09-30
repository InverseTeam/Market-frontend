'use client';
import React, { CSSProperties, FC, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { MaskedInput } from '@/shared/maskInput';
import { match } from 'ts-pattern';
export const inputTypes = [
    'password',
    'text',
    'number',
    'tel',
    'search',
    'time',
    'date',
    'url',
    'email',
] as const;
export type InputSize = 'small' | 'medium' | 'large';
export type InputAlign = 'left' | 'center' | 'right';
export type InputType = (typeof inputTypes)[number];
export type InputAutoComplete =
    | 'on'
    | 'off'
    | 'email'
    | 'username'
    | 'new-password'
    | 'current-password'
    | 'country'
    | 'language'
    | 'tel'
    | undefined;

export interface InputComponentProps {
    /**
     * Размер Input
     */
    size?: InputSize;

    /**
     * 	Тип. Возможные значения: 'password' | 'text' | 'number' | 'tel' | 'search' | 'time' | 'date' | 'url' | 'email'
     */
    type?: InputType;

    /**
     * 	Значение
     */
    value?: string | undefined;

    /**
     * 	HTML-атрибут style
     */
    style?: CSSProperties | undefined;

    /**
     * 	HTML-атрибут `class`
     */
    className?: string | undefined;

    /**
     * Выравнивание текста
     */
    align?: InputAlign;

    /**
     * 	Режим прозрачной рамки
     */
    borderless?: boolean | undefined;

    /**
     * 	На равне с data-tid транслируются любые data-атрибуты. Они попадают на корневой элемент
     */
    data_tid?: string | undefined;

    /**
     * 	Состояние валидации при ошибке
     */
    error?: boolean | undefined;

    /**
     * Состояние валидации при предупреждении
     */
    warning?: boolean | undefined;

    /**
     * 	Отключенное состояние инпута
     */
    disabled?: boolean | undefined;

    /**
     * 	Иконка в инпуте слева от текста
     */
    leftIcon?: string | StaticImport | undefined;

    /**
     * 	Иконка в инпуте слва от текста
     */
    rightIcon?: string | StaticImport | undefined;

    /**
     * placeholder
     */
    placeholder?: string | undefined;

    /**
     * HTML-событие onclick для иконки справа от текста
     */
    rightIconOnClick?: () => void | undefined;

    /**
     * Текст для отображение информации о Input
     */
    labelText?: string | undefined;

    /**
     * Позиционирование input и labelText
     */
    labelFlexDirection?: CSSProperties['flexDirection'] | undefined;

    /**
     * HTML атрибут autoComplete
     */
    autoComplete?: InputAutoComplete;

    /**
     * Маска
     */
    mask?: string | undefined;

    /**
     * Вызывается на Mask
     */
    onMouseEnter?: MouseEventHandler<HTMLLabelElement> | undefined;

    /**
     * Вызывается на Mask
     */
    onMouseLeave?: MouseEventHandler<HTMLLabelElement> | undefined;

    /**
     * Вызывается на Mask
     */
    onMouseOver?: MouseEventHandler<HTMLLabelElement> | undefined;

    /**
     * MaskInput атрибут placeholder
     */
    maskPlaceholder?: string | undefined;
}

export const Input: FC<InputComponentProps> = ({
    size = 'small',
    type = 'text',
    value,
    style,
    className,
    align = 'left',
    borderless,
    data_tid,
    error,
    warning,
    disabled,
    leftIcon,
    placeholder,
    rightIcon,
    rightIconOnClick,
    labelText,
    labelFlexDirection = 'column',
    mask,
    autoComplete,
    maskPlaceholder = '',
    onMouseEnter,
    onMouseLeave,
    onMouseOver,
}) => {
    const Input = styled.input`
        border-radius: 2px;
        border: ${error
            ? '2px solid #DD473B'
            : warning
            ? '2px solid #FCB73E'
            : borderless
            ? 'none'
            : '1px solid rgba(0, 0, 0, 0.16)'};

        display: flex;
        justify-content: center;
        align-items: center;
        text-overflow: clip;
        white-space: nowrap;
        text-align: ${align};
        flex-shrink: 0;
        height: ${size === 'small' ? '32px' : size === 'medium' ? '40px' : '48px'};
        padding: ${leftIcon && size === 'small'
            ? '6px 28px'
            : leftIcon && size === 'medium'
            ? '9px 38px'
            : leftIcon && size === 'large'
            ? '12px 48px'
            : size === 'small'
            ? '6px 8px'
            : size === 'medium'
            ? '9px 12px'
            : '12px 16px'};
        min-width: 200px;
        width: 100%;
        -webkit-appearance: none;
        transition: border-color 0.1s;

        background-color: #fff;

        font-size: ${size === 'small' ? '14px' : size === 'medium' ? '16px' : '18px'};
        font-style: normal;
        font-weight: 400;
        line-height: ${size === 'small' ? '20px' : size === 'medium' ? '22px' : '24px'};

        &:hover {
            border-radius: 2px;
            border: ${error
                ? '2px solid #DD473B'
                : warning
                ? '2px solid #FCB73E'
                : ' 1px solid rgba(0, 0, 0, 0.32)'};
        }

        &:focus {
            outline: ${error
                ? '#dd473b solid 2px'
                : warning
                ? '#fcb73e solid 2px'
                : '#3d3d3d solid 2px'};
            border: none;
            border-radius: 2px;
        }

        &::placeholder {
            color: #aaa;
        }

        &:-moz-placeholder {
            opacity: 1;
        }
        &:-moz-placeholder {
            opacity: 1;
        }
        &:disabled {
            background: #f0f0f0;
            border-radius: 2px;
            border: 1px solid rgba(0, 0, 0, 0.16);
            color: #adadad;

            &:hover {
                border: 1px solid rgba(0, 0, 0, 0.16);
            }
            &:active {
                border: 1px solid rgba(0, 0, 0, 0.16);
            }
        }
    `;

    const InputContainer = styled.div`
        position: relative;
        display: flex;
        align-items: center;

        border: none;
    `;

    const IconContainer = styled.div`
        position: absolute;
        left: 8px;
        top: 50%;
        transform: translateY(-50%);
        width: ${size === 'small' ? '16px' : size === 'medium' ? '20px' : '24px'};
        height: ${size === 'small' ? '16px' : size === 'medium' ? '20px' : '24px'};
    `;

    const RightIconContainer = styled.div`
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
        width: ${size === 'small' ? '16px' : size === 'medium' ? '20px' : '24px'};
        height: ${size === 'small' ? '16px' : size === 'medium' ? '20px' : '24px'};

        cursor: ${rightIcon ? 'pointer' : 'default'};
    `;

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    gap: '8px',
                    flexDirection: labelFlexDirection,
                    alignItems:
                        labelFlexDirection === 'row'
                            ? 'center'
                            : labelFlexDirection === 'column'
                            ? 'flex-start'
                            : undefined,
                }}>
                {labelText && (
                    <label style={{ display: 'flex' }}>
                        {labelText && (
                            <span
                                style={{
                                    fontSize: '14px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                }}>
                                {labelText}
                            </span>
                        )}
                    </label>
                )}
                <InputContainer>
                    {leftIcon && (
                        <IconContainer>
                            <Image
                                src={leftIcon}
                                width={size === 'small' ? 16 : size === 'medium' ? 20 : 24}
                                height={size === 'small' ? 16 : size === 'medium' ? 20 : 24}
                                alt=""
                            />
                        </IconContainer>
                    )}
                    {match(typeof mask)
                        .with('string', () => (
                            <MaskedInput
                                mask={mask ? mask : ''}
                                maskPlaceholder={maskPlaceholder}
                                alwaysShowMask={false}
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                                onMouseOver={onMouseOver}
                                value={disabled ? 'Текст' : value}>
                                <Input
                                    placeholder={placeholder}
                                    className={className}
                                    style={style}
                                    type={type}
                                    autoComplete={autoComplete}
                                    disabled={disabled}
                                />
                            </MaskedInput>
                        ))
                        .with('undefined', () => (
                            <Input
                                data-tid={data_tid}
                                placeholder={placeholder}
                                className={className}
                                style={style}
                                value={disabled ? 'Текст' : value}
                                type={type}
                                disabled={disabled}
                            />
                        ))
                        .run()}
                    {rightIcon && (
                        <RightIconContainer onClick={rightIconOnClick}>
                            <Image
                                src={rightIcon}
                                width={size === 'small' ? 16 : size === 'medium' ? 20 : 24}
                                height={size === 'small' ? 16 : size === 'medium' ? 20 : 24}
                                alt=""
                            />
                        </RightIconContainer>
                    )}
                </InputContainer>
            </div>
        </>
    );
};
