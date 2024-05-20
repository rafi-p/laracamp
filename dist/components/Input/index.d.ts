import { ReactNode } from "react";
type Props = {
    id: string;
    name: string;
    type: "text" | "number" | "email" | "tel" | "date" | "file";
    state?: "success" | "loading";
    wrapperClassName?: string;
    label?: ReactNode;
    readOnly?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    inputClassName?: string;
    placeholder?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    accept?: string;
};
/** Primary Badge components */
declare function Input(props: Props): import("react/jsx-runtime").JSX.Element;
export default Input;
