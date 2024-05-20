import { ReactNode } from "react";
type Props = {
    number: {
        text: ReactNode;
        className: string;
    };
    content: {
        preheading: string;
        heading: string;
        paragraph: string;
    };
    button: ReactNode;
    badge: {
        title: string;
        content: string;
    };
    image: string | ReactNode;
};
declare function FeaturedSection({ number, content, button, badge, image }: Props): import("react/jsx-runtime").JSX.Element;
export default FeaturedSection;
