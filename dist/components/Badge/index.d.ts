import { ReactNode } from "react";
type Props = {
    children: ReactNode;
    state: "success" | "warning" | "danger";
    className?: string;
};
/** Primary Badge components */
declare function Badge({ children, state, className }: Props): import("react/jsx-runtime").JSX.Element;
export default Badge;
