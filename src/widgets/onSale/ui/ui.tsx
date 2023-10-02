import { SearchAndFilter } from '@/features/searchAndFilter';
import styles from './ui.module.scss';
import { ProductCard } from '@/entities/productCard';

export const PageSale = () => {
    return (
        <>
            <div className={styles.layout}>
                <SearchAndFilter />
                <ProductCard />
            </div>
        </>
    );
};
