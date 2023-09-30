import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';

export interface GappedComponentProps {
    children?: React.ReactNode | undefined;
    /**
     * HTML атрибут class
     */
    className?: string | undefined;

    /**
     * CSS свойство gap
     */
    gap?: CSSProperties['gap'] | undefined;

    /**
     * HTML атрибут style
     */
    style?: CSSProperties | undefined;

    /**
     * Позиционирование элементов по вертикали
     */
    vertical?: boolean | undefined;

    /**
     * CSS свойство vertical-align
     */
    verticalAlign?: CSSProperties['verticalAlign'] | undefined;

    /**
     * CSS свойство flex-wrap
     */
    wrap?: CSSProperties['flexWrap'] | undefined;

    /**
     * CSS свойство align-items
     */
    alignItems?: CSSProperties['alignItems'] | undefined;
}

export const Gapped: FC<GappedComponentProps> = ({
    children,
    className,
    gap = '8px',
    style,
    vertical,
    verticalAlign = 'baseline',
    wrap = 'false',
    alignItems,
}) => {
    const Gapped = styled.div`
    display: flex;
    flex-direction: ${vertical ? 'column' : 'row'},
    vertical-align: ${verticalAlign};
    flex-wrap: ${wrap}
    align-items: ${alignItems}
    gap: ${gap}
    `;
    return (
        <>
            <Gapped className={className} style={style}>
                {children}
            </Gapped>
        </>
    );
};
