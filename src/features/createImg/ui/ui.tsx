'use client';

import styles from './ui.module.scss';
import { MediaPictureIcon24Regular } from '@skbkontur/icons/MediaPictureIcon24Regular';
import { CheckA2Icon24Regular } from '@skbkontur/icons/CheckA2Icon24Regular';
import { ThemeContext, ThemeFactory, Button } from '@skbkontur/react-ui';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { useState, useRef } from 'react';
import { instanceLogged } from '@/shared/api/axios';
import { CreateProductImg } from '@/entities/createProductImg';
export const CreateImg = ({
    isChange = false,
    fileValue,
    setFile,
    btnDisabled = true,
    onClick,
}: {
    isChange?: boolean;
    onClick: () => void;
    fileValue?: File | null;
    setFile: (fileValue: File | null) => void;
    btnDisabled?: boolean;
}) => {
    const [selectedImg, setSelectedImg] = useState<string | StaticImport>('');
    const filePicker = useRef<HTMLInputElement | null>(null);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setSelectedImg(URL.createObjectURL(file));
            setFile(file);
        }
    };

    const handlePick = () => {
        if (filePicker.current) {
            filePicker.current.click();
        } else return;
    };

    return (
        <>
            <ThemeContext.Provider value={myTheme}>
                <section className={styles.layout}>
                    <span className={styles.bigImgStyles}>
                        {<CreateProductImg newImg={selectedImg} />}
                    </span>
                    {isChange && (
                        <span className={styles.btnLayout}>
                            <input
                                type="file"
                                hidden
                                accept="image/*"
                                ref={filePicker}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                    handleChange(event)
                                }
                            />
                            <Button
                                onClick={handlePick}
                                icon={<MediaPictureIcon24Regular />}
                                size="large"
                                borderless
                                width="100%"
                                use="primary">
                                Изменить фото
                            </Button>
                            <Button
                                onClick={onClick}
                                disabled={btnDisabled}
                                icon={<CheckA2Icon24Regular />}
                                size="large"
                                width="100%">
                                Создать товар
                            </Button>
                        </span>
                    )}
                </section>
            </ThemeContext.Provider>
        </>
    );
};

const myTheme = ThemeFactory.create({
    borderColorFocus: '#FF9A42',
    btnBorderRadiusLarge: '8px',
    btnPrimaryBg: '#FF9A42',
    btnPrimaryHoverBg: '#FF8F2D',
    btnPrimaryActiveBg: '#FF9A42',
    btnPrimaryTextColor: '#fff',
    btnDisabledBg: '#FF9A4299',
    btnDisabledTextColor: '#fff',
    btnIconGapLarge: '8px',
    btnIconColor: '#FF9A42',
    btnDefaultBorderColor: '#FF9A42',
    btnDefaultTextColor: '#FF9A42',
});
