export const BackIcon = ({
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
            <path className={paths[0]} d="M20 12H4M4 12L10 18M4 12L10 6" strokeLinecap= 'round' strokeLinejoin= 'round' />
        </svg>
       
    );
};
