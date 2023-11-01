import { SVGProps } from "react";

export const SearchIcon = ({
    width = '24',
    height = '24',
    fill = 'none',
    paths = ['stroke-black stroke-2'],
}: {
    width?: string;
    height?: string;
    fill?: string;
    paths?: string[];
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path className={paths[0]} d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z" strokeLinecap= 'round' strokeLinejoin= 'round' />
        </svg>
    );
};
