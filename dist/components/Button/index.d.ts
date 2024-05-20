/// <reference types="react" />
type Props = {
    children: JSX.Element;
    state: "primary" | "secondary" | "alternative" | "disabled" | "loading";
    className?: string;
    isDisabled?: boolean;
    isLoading?: boolean;
};
/** Primary Badge components */
declare function Button(props: Props): import("react").FunctionComponentElement<any>;
export default Button;
