'use client';

import styles from './ui.module.scss';
import { MediaPictureIcon24Regular } from '@skbkontur/icons/MediaPictureIcon24Regular';
import { TrashCanIcon24Regular } from '@skbkontur/icons/TrashCanIcon24Regular';
import { ToolPencilIcon24Regular } from '@skbkontur/icons/ToolPencilIcon24Regular';
import { ProductBigImg } from '@/entities/productInfo/productBigImg';
import { ThemeContext, ThemeFactory, Button } from '@skbkontur/react-ui';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { useState, useRef } from 'react';
import { instanceLogged } from '@/shared/api/axios';
export const ProductImgs = ({ isChange = false }: { isChange?: boolean }) => {
    const [selectedImg, setSelectedImg] = useState<string | StaticImport>('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const filePicker = useRef<HTMLInputElement | null>(null);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setSelectedImg(URL.createObjectURL(file));
            setSelectedFile(file);
            setIsUploading(true);
        }
    };
    const handleUpload = async () => {
        try {
            if (!selectedFile) return;
            const formData = new FormData();
            formData.append('productImg', selectedFile);
            const { data } = await instanceLogged.post('/api/sendimga', formData);
        } catch (er: any) {
            console.log(er.response?.data);
        }
        setIsUploading(false);
    };

    const handlePick = () => {
        if (filePicker.current) {
            filePicker.current.click();
        } else return;
        handleUpload();
    };

    return (
        <>
            <ThemeContext.Provider value={myTheme}>
                <section className={styles.layout}>
                    <span className={styles.bigImgStyles}>
                        {
                            <ProductBigImg
                                newImg={selectedFile && isUploading ? selectedImg : undefined}
                            />
                        }
                    </span>

                    {isChange && (
                        <>
                            <span className={styles.btnLayout}>
                                <input
                                    type="file"
                                    hidden
                                    ref={filePicker}
                                    accept="image/*"
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                        handleChange(event)
                                    }
                                />
                                <Button
                                    onClick={handlePick}
                                    disabled={isUploading}
                                    loading={isUploading}
                                    icon={<MediaPictureIcon24Regular />}
                                    size="large"
                                    borderless
                                    width="100%"
                                    use="primary">
                                    Изменить фото
                                </Button>
                                <Button
                                    icon={<TrashCanIcon24Regular />}
                                    use="danger"
                                    size="large"
                                    borderless
                                    width="100%">
                                    Удалить товар
                                </Button>
                            </span>
                            <Button
                                use="backless"
                                icon={<ToolPencilIcon24Regular />}
                                size="large"
                                width="100%">
                                Применить изменения
                            </Button>
                        </>
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
    btnDangerBg: '#FD7163',
    btnDangerHoverBg: '#FF5A49',
    btnDangerActiveBg: '#FD7163',
});
