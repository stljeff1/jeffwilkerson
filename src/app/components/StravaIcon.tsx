import { useTheme } from '@mui/material';
import React, { useState } from 'react';
import { adjustColor } from '../lib/adjustColor';


interface StravaIconProps extends React.SVGProps<SVGSVGElement> {
    color1?: string;
    color2?: string
}

const StravaIcon:React.FC<StravaIconProps> = ({color1 = '#FFF3E0', color2 = '#bdbdbd', ...props}) => {

    const theme = useTheme();
    const hoverOffset = (theme.palette.mode == 'light') ? 25 : -25;
    const hoverColor1 = adjustColor(color1, hoverOffset);
    const hoverColor2 = adjustColor(color2, hoverOffset);
    
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
        return (
    <svg xmlns="http://www.w3.org/2000/svg"
        width={props.width || "24"}
        height={props.height || "24"}
        viewBox="0 0 64 64"
        {...props}

        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        <path d="M41.03 47.852l-5.572-10.976h-8.172L41.03 64l13.736-27.124h-8.18" fill={isHovered ? hoverColor1 : color1}/>

        <path d="M27.898 21.944l7.564 14.928h11.124L27.898 0 9.234 36.876H20.35" fill={isHovered ? hoverColor2 : color2}/>
    </svg>
    );
};

export default StravaIcon;