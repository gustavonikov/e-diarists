import { TextFieldStyled } from "../TextField/styles";
import InputMask from 'react-input-mask'
import { OutlinedTextFieldProps } from "@material-ui/core";

export interface TextFieldMaskProps extends OutlinedTextFieldProps {
    mask: string;
}

export default function TextField({ mask, value, onChange, ...props }: TextFieldMaskProps) {
    return (
        <InputMask mask={mask} value={value} onChange={onChange}>
            {
                () => {
                    return <TextFieldStyled {...props} />
                }
            }
        </InputMask>
    )
}
