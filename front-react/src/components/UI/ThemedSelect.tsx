import type { FC } from 'react';
import type { OptionType } from '../../types/ui-types';
import MenuItem from '@mui/material/MenuItem';
import { TextField } from '@mui/material';

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
        <TextField select {...props}
            value={value}
            label={children}
            onChange={e => { onChange(e.target.value) }}
        >
            {children && <MenuItem disabled value='0'>{children}</MenuItem>}
            {options && options.map((option) => (
                <MenuItem value={option.value} key={option.value}>{option.name}</MenuItem>
            ))}
        </TextField>
    )
}

export default ThemedSelect;