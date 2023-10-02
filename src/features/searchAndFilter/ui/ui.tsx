'use client';
import { SearchLoupeIcon20Regular } from '@skbkontur/icons/SearchLoupeIcon20Regular';
import { ThemeContext, ThemeFactory, Input, Modal, Checkbox, Button } from '@skbkontur/react-ui';
import styles from './ui.module.scss';
import { Filter } from '@/entities/icons/filter';
import { useState, useEffect } from 'react';
import { CheckBoxData, CheckBoxDataProps } from '../data';
export const SearchAndFilter = () => {
    const [filterOpen, setFilterOpen] = useState<boolean>(false);
    const [checkBoxStates, setCheckBoxStates] = useState(
        CheckBoxData.map((el) => ({ id: el.id, checked: false })),
    );
    const [modalBtnDisabled, setButtonDisabled] = useState(true);

    function onValueChange(id: number, newValue: boolean) {
        setCheckBoxStates((prevState) =>
            prevState.map((checkbox) =>
                checkbox.id === id ? { ...checkbox, checked: newValue } : checkbox,
            ),
        );
    }
    useEffect(() => {
        const atLeastOneChecked = checkBoxStates.some((checkbox) => checkbox.checked);
        setButtonDisabled(!atLeastOneChecked);
    }, [checkBoxStates]);
    function renderModal() {
        return (
            <ThemeContext.Provider value={modalTheme}>
                <Modal width="512px" className={styles.modal} onClose={() => setFilterOpen(false)}>
                    <Modal.Header>Категории</Modal.Header>
                    <Modal.Body className={styles.modalBody}>
                        {CheckBoxData.map((el: CheckBoxDataProps) => {
                            const checkboxState = checkBoxStates.find(
                                (checkbox) => checkbox.id === el.id,
                            );
                            return (
                                <Checkbox
                                    checked={checkboxState?.checked || false}
                                    onValueChange={(newValue) => onValueChange(el.id, newValue)}
                                    size="medium"
                                    key={el.id}>
                                    {el.title}
                                </Checkbox>
                            );
                        })}
                    </Modal.Body>
                    <Modal.Footer>
                        <span className={styles.modalFooter}>
                            <Button
                                disabled={modalBtnDisabled}
                                size="medium"
                                borderless
                                use="primary">
                                Применить
                            </Button>
                            <Button onClick={() => setFilterOpen(false)} size="medium">
                                Отменить
                            </Button>
                        </span>
                    </Modal.Footer>
                </Modal>
            </ThemeContext.Provider>
        );
    }

    return (
        <>
            <ThemeContext.Provider value={myTheme}>
                {filterOpen && renderModal()}
                <section className={styles.header}>
                    <Input
                        leftIcon={<SearchLoupeIcon20Regular />}
                        style={{ width: '320px' }}
                        placeholder="Найти..."
                        size="medium"
                    />
                    <Filter onClick={() => setFilterOpen(true)} />
                </section>
            </ThemeContext.Provider>
        </>
    );
};

const myTheme = ThemeFactory.create({
    borderColorFocus: '#FF9A42',
    inputBorderRadiusMedium: '5px',
});
const modalTheme = ThemeFactory.create({
    modalHeaderFontWeight: '600',
    modalBorderRadius: '16px',
    btnBorderRadiusMedium: '8px',
    btnPrimaryBg: '#FF9A42',
    btnPrimaryHoverBg: '#FF8F2D',
    btnPrimaryActiveBg: '#FF9A42',
    btnPrimaryTextColor: '#fff',
    btnDisabledBg: '#FF9A4299',
    btnDisabledTextColor: '#fff',
    checkboxActiveBg: '#FFA236',
    checkboxCheckedBg: '#FFA236',
});
