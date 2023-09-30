'use client';

import React, { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { getTextAreaHeight } from '../model';

export type TextareaSize = 'small' | 'medium' | 'large';
export interface TextAreaComponentProps {
    /**
     * Автоматический ресайз в зависимости от содержимого
     */
    autoResize?: boolean | undefined;

    /**
     * HTML атрибут `class`
     */
    className?: string | undefined;

    /**
     * Не активное состояние
     */
    disabled?: boolean | undefined;

    /**
     * Состояние валидации при ошибке
     */
    error?: boolean | undefined;

    /**
     * 	Добавлять дополнительную свободную строку при авто-ресайзе
     */
    extraRow?: boolean | undefined;

    /**
     * Допустимое количество символов в поле. Отображается в счетчике. Если не указано, равно `maxLength`
     */
    lengthCounter?: number | undefined;

    /**
     * 	Максимальное число строк при автоматическом ресайзе
     */
    maxRows?: string | number | undefined;

    /**
     * Минимальное число строк при автоматическом ресайзе
     */
    minRows?: string | number | undefined;

    /**
     * 	Вызывается при изменении `value`
     */
    onValueChange?: ((value: string) => void) | undefined;

    /**
     * Число строк
     */
    rows?: number | undefined;

    /**
     * Состояние валидации при предупреждении
     */
    warning?: boolean | undefined;

    /**
     * Длина
     */
    width?: React.CSSProperties['width'] | undefined;

    /**
     * Размер
     */
    size?: TextareaSize;

    /**
     * Значение
     */
    value?: string | undefined;

    /**
     * Placeholder
     */
    placeholder?: string | undefined;
}

export const TextArea: FC<TextAreaComponentProps> = ({
    size = 'small',
    width,
    warning,
    rows = 3,
    onValueChange,
    minRows = 3,
    maxRows = 15,
    lengthCounter,
    extraRow = true,
    error,
    disabled,
    className,
    autoResize,
    value,
    placeholder,
}) => {
    const StyledTextArea = styled.textarea`
        width: ${width || '200px'};
        min-width: 200px;
        height: ${size === 'small' ? '72px' : size === 'medium' ? '82px' : '92px'};
        padding: ${size === 'small' ? '6px 8px' : size === 'medium' ? '9px 12px' : '12px 16px'};
        font-size: ${size === 'small' ? '14px' : size === 'medium' ? '16px' : '18px'};
        border: ${error
            ? '2px solid #DD473B'
            : warning
            ? '2px solid #FCB73E'
            : '1.5px solid rgba(0, 0, 0, 0.16)'};
        border-radius: 2px;
        resize: ${autoResize ? 'vertical' : 'none'};
        background-color: #fff;

        ${disabled && 'background-color: #F0F0F0; cursor: not-allowed; color: #adadad;'};
        transition: border-color 0.2s, height 0.2s ease-out;
        white-space: pre-wrap;
        line-height: ${size === 'small' ? '20px' : size === 'medium' ? '22px' : '24px'};
        font-style: normal;
        font-weight: 400;
        flex-shrink: 0;
        overflow-y: hidden;

        &::placeholder {
            font-size: ${size === 'small' ? '12px' : size === 'medium' ? '12px' : '13px'};
            line-height: ${size === 'small' ? '20px' : size === 'medium' ? '18px' : '18px'};
            -ms-user-select: none;
            user-select: none;
            color: #aaa;
        }

        &:disabled {
            &:hover {
                border: 1.5px solid rgba(0, 0, 0, 0.16);
            }
        }

        &:hover {
            border: ${error
                ? '2px solid #DD473B'
                : warning
                ? '2px solid #FCB73E'
                : '1.5px solid rgba(0, 0, 0, 0.32)'};
        }

        &:focus {
            border: none;
            outline: #3d3d3d solid 2px;
        }
    `;
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const AutoResizeHandler = () => {
        if (!textareaRef) {
            return;
        }
        if (rows === undefined || maxRows === undefined) {
            return;
        }
        const { height, exceededMaxHeight } = getTextAreaHeight({
            node: textareaRef.current!,
            minRows: typeof rows === 'number' ? rows : parseInt(rows, 10),
            maxRows: typeof maxRows === 'number' ? maxRows : parseInt(maxRows, 10),
            extraRow: extraRow,
        });

        if (textareaRef.current) {
            console.log(height, '|', exceededMaxHeight);
            textareaRef.current.style.height = height + 'px';
            textareaRef.current.style.overflowY = exceededMaxHeight ? 'scroll' : 'hidden';
        }
    };
    //TODO: пофиксить баг с частым увеличением ширины
    useEffect(() => {
        const handleResize = () => {
            AutoResizeHandler();
        };

        const textarea = textareaRef.current;
        if (textarea) {
            textarea.addEventListener('input', handleResize);
        }

        return () => {
            if (textarea) {
                textarea.removeEventListener('input', handleResize);
            }
        };
    });
    return (
        <>
            <StyledTextArea
                ref={textareaRef}
                rows={rows}
                maxLength={lengthCounter}
                value={value}
                disabled={disabled}
                className={className}
                placeholder={placeholder}
                onChange={(e) => {
                    if (onValueChange) {
                        onValueChange(e.target.value);
                    }
                }}
            />
            {extraRow && <br />}
            {lengthCounter && (
                <div>
                    {value && value.length}/{lengthCounter}
                </div>
            )}
        </>
    );
};
