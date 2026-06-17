import type { FC } from 'react';
import styles from '../../css/UI/select.module.css';
import type { OptionType } from '../../types/ui-types';

interface ThemedSelectProps {
    children?: any;
    value: number;
    options: OptionType[];
    onChange: (e: any) => void;
    readOnly?: boolean;
}


const ThemedSelect: FC<ThemedSelectProps> = ({children, value, options, onChange, readOnly=false, ...props }) => {

    if (readOnly) {
        const valueText: string = ( value === 0 
            ? children
            : (options && options.length > 0 ? options.filter(option => option.value === value)[0]!.name : children)
        )
        return (
            <h5>{valueText}</h5>
        )
    }

    return (
        <select className={styles.themedSelect} {...props}
            value={value}
            onChange={e => { onChange(e.target.value) }}
        >
            {children && <option disabled value='0'>{children}</option>}
            {options && options.map((option) => (
                <option value={option.value} key={option.value}>{option.name}</option>
            ))}
        </select>
    )
}

export default ThemedSelect