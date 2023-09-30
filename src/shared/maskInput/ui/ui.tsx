import React, { ReactElement, FC, CSSProperties, MouseEventHandler } from 'react';
import InputMask from 'react-input-mask';
import styles from './ui.module.scss';

interface MaskComponentProps {
    /**
     * Текст маски
     */
    mask: string | string[] | RegExp[];

    /**
     * Элемент, для которого применяется маска
     */
    children: ReactElement;

    /**
     * Символ маски
     */
    maskPlaceholder?: string | undefined;

    /**
     * Должны ли отображаться префикс маски и заполнитель, когда ввод пуст и не имеет фокуса
     */
    alwaysShowMask?: boolean | undefined;

    /**
     * Функция для изменения значения и выбора перед применением маски
     */
    beforeMaskedStateChange?: () => void | undefined;

    /**
     * Значение в Input
     */
    value?: string | undefined;

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
     * HTML атрибут style
     */
    style?: CSSProperties | undefined;
}

export const MaskedInput: FC<MaskComponentProps> = ({
    mask,
    children,
    maskPlaceholder = '_',
    alwaysShowMask = false,
    value,
    style,
}) => {
    return (
        <span className={styles.wrap}>
            <InputMask
                alwaysShowMask={alwaysShowMask}
                maskPlaceholder={maskPlaceholder}
                mask={mask}
                value={value}
                style={style}>
                {children}
            </InputMask>
        </span>
    );
};
