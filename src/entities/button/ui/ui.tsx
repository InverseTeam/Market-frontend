'use client';

import { Spinner } from '@/shared/spinner';
import React, {
    FC,
    ReactNode,
    MouseEventHandler,
    FocusEventHandler,
    KeyboardEventHandler,
    CSSProperties,
} from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonUse =
    | 'default'
    | 'custom'
    | 'success'
    | 'danger'
    | 'pay'
    | 'link'
    | 'text'
    | 'backless';

export interface ButtonComponentProps {
    children?: ReactNode;

    /**
     * 	Отключенное состояние кнопки
     */
    disabled?: boolean;

    /**
     * Убирает обводку у кнопки
     */
    borderless?: boolean;

    /**
     * Определяет размер
     */
    size?: ButtonSize | undefined;

    /**
     * 	CSS-свойство width
     */
    width?: string | undefined;

    /**
     * 	HTML-событие onblur
     */
    onBlur?: FocusEventHandler<HTMLButtonElement> | undefined;

    /**
     * HTML-событие onclick
     */
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;

    /**
     * 	HTML-событие onfocus
     */
    onFocus?: FocusEventHandler<HTMLButtonElement> | undefined;

    /**
     * HTML-событие keydown
     */
    onKeyDown?: KeyboardEventHandler<HTMLButtonElement> | undefined;

    /**
     * HTML-событие onmouseenter
     */
    onMouseEnter?: MouseEventHandler<HTMLButtonElement> | undefined;

    /**
     * HTML-событие mouseleave
     */
    onMouseLeave?: MouseEventHandler<HTMLButtonElement> | undefined;

    /**
     * HTML-событие onmouseover
     */
    onMouseOver?: MouseEventHandler<HTMLButtonElement> | undefined;

    /**
     * CSS-свойство `text-align`
     */
    align?: React.CSSProperties['textAlign'];

    /**
     * Сужает кнопку
     */
    narrow?: boolean;

    /**
     * HTML-атрибут style
     */
    style?: CSSProperties | undefined;

    /**
     * HTML-атрибут title
     */
    title?: string | undefined;

    /**
     * HTML-атрибут `type`.
     */
    type?: ButtonType;

    /**
     * 	Переводит кнопку в состояние загрузки
     */
    loading?: boolean | undefined;

    /**
     * Стиль кнопки
     */
    use?: ButtonUse;

    /**
     * Задний фон кнопки, если стиль `custom`
     */
    bgColor?: CSSProperties['background'];

    /**
     * Цвет текста кнопки, если стиль `custom`
     */
    color?: CSSProperties['color'];

    /**
     * Иконка слева от текста кнопки
     */
    icon?: string | StaticImport | undefined;

    /**
     * HTML атрибут `class`
     */
    className?: string | undefined;
}

export const Button: FC<ButtonComponentProps> = ({
    children,
    size = 'small',
    disabled = false,
    width,
    onBlur,
    onClick,
    onFocus,
    onKeyDown,
    onMouseEnter,
    onMouseLeave,
    onMouseOver,
    align = 'center',
    borderless,
    narrow,
    style,
    title,
    type = 'button',
    loading = false,
    use = 'default',
    bgColor = '#3D3D3D',
    color = '#fff',
    icon,
    className,
}) => {
    const Button = styled.button`
        background: ${use === 'default'
            ? '#fff'
            : use === 'custom' && bgColor
            ? bgColor
            : use === 'text'
            ? 'transparent'
            : null};

        width: ${width ? width : 'fit-content'};
        height: ${size === 'small' ? '32px' : size === 'medium' ? '40px' : '48px'};

        font-size: ${size === 'small' ? '14px' : size === 'medium' ? '16px' : '18px'};
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        -ms-user-select: none;
        user-select: none;
        user-select: none;

        cursor: pointer;
        border-radius: 8px;
        border: ${borderless || use === 'text' ? 'none' : '1px solid rgba(0, 0, 0, 0.16)'};

        display: inline-flex;
        padding: ${narrow
            ? '6px 12px'
            : icon
            ? '6px 12px 6px 8px'
            : size === 'small'
            ? '6px 12px'
            : size === 'medium'
            ? '8px 16px'
            : size === 'large'
            ? '12px 20px'
            : null};
        justify-content: center;
        align-items: center;
        text-align: ${align};
        transition: all 0.2s;
        position: relative;

        &:hover {
            background: ${use === 'text' ? 'rgba(0, 0, 0, 0.06)' : null};
            filter: brightness(96%);
        }
        &:active {
            background: ${use === 'text' ? 'rgba(0, 0, 0, 0.10)' : null};
            filter: brightness(85%);
        }
        &:disabled {
            cursor: default;
            color: #adadad;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background: rgba(0, 0, 0, 0.06);

            /* Отключение hover-эффекта */
            &:hover {
                filter: brightness(100%);
            }
            /* Отключение active-эффекта */
            &:active {
                filter: brightness(100%);
            }
        }
    `;
    const SpinnerContainer = styled.div`
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;

        z-index: -1;
    `;

    const ChildrenText = styled.span`
        visibility: ${loading && !icon ? 'hidden' : 'visible'};
        display: inline-flex;
        justify-content: center;
        align-items: center;
        text-align: ${align};
        color: ${disabled || loading
            ? '#adadad'
            : use === 'default'
            ? '#222'
            : use === 'custom' && color
            ? color
            : null};
    `;

    const IconContainer = styled.span`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-right: 4px;
        width: 16px;
        height: 16px;
    `;

    return (
        <>
            <Button
                type={type}
                title={title}
                style={style}
                onBlur={onBlur}
                onClick={onClick}
                onKeyDown={onKeyDown}
                onFocus={onFocus}
                onMouseLeave={onMouseLeave}
                onMouseEnter={onMouseEnter}
                onMouseOver={onMouseOver}
                disabled={loading ? true : disabled ? true : false}
                className={className}>
                {loading && !icon && (
                    <SpinnerContainer>
                        <Spinner icon={false} />
                    </SpinnerContainer>
                )}
                {icon && (
                    <IconContainer>
                        {loading ? (
                            <Spinner icon={true} />
                        ) : (
                            <Image src={icon} width={16} height={16} alt="" />
                        )}
                    </IconContainer>
                )}
                <ChildrenText>{children}</ChildrenText>
            </Button>
        </>
    );
};
