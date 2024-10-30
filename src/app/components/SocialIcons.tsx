import variables from "../assets/scss/variables.module.scss";
import { Box, Palette, PaletteColor, PaletteMode, rgbToHex, useTheme } from "@mui/material";
import StravaIcon from './StravaIcon';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import { adjustColor } from "../lib/adjustColor";

interface SocialIconsParams {
    mode?: PaletteMode;
    color?: string;
    gap?: number
    size?: 'small' | 'medium' | 'large';
    hideEmail?: boolean
}

export default function SocialIcons({ mode, hideEmail, color, gap = 3, size = 'medium' }: SocialIconsParams) {

    const theme = useTheme();
    const getColor = (secondColor?: boolean) => {
        if(color) {
            const paletteColor = theme.palette[color as keyof Palette];
            console.log('paletteColor', paletteColor);
            if(paletteColor) {
                return (secondColor) ? rgbToHex((paletteColor as PaletteColor).dark) : rgbToHex((paletteColor as PaletteColor).main);
            }
            return (secondColor) ? color : theme.palette.grey[700];
        }

        // mode         
        if(mode == 'light') {
            return (secondColor) ? '#4d4d4d' : variables.textDark;
        }
        return (secondColor) ? '#bdbdbd' : variables.textLight 

    }      

    const fillColor = getColor();
    const color2 = getColor(true);

    const hoverOffset = (theme.palette.mode == 'light') ? 25 : -25;
    const hoverColor = adjustColor(fillColor, hoverOffset);

    const linkStyle = {
        color: fillColor,
        transition: 'color 0.3s ease',
        '&:hover': {
            color: hoverColor,
        },
    }

    let svgSize = 24;

    if(size == 'small') {
        svgSize = 16;
    }
    else if(size == 'large') {
        svgSize = 35;
    }


    
    return (

        <Box
        display="flex"
        alignItems="center"
        gap={gap}
    >
        { !hideEmail &&
            <a href="mailto:hi@jeffwilkerson.net">
                <MailIcon fontSize={size} className='footer-icon'  sx={linkStyle} ></MailIcon>
            </a>
        }

        <a href="https://github.com/stljeff1" target="_blank">
            <GitHubIcon fontSize={size} className='footer-icon'  sx={linkStyle} />
        </a>
        <a href="https://www.instagram.com/still_runningantelope/" target="_blank">
            <InstagramIcon fontSize={size} sx={linkStyle} className='footer-icon'/>
        </a>
        <a href="https://www.strava.com/athletes/35290825" target="_blank">
            <StravaIcon width={svgSize} height={svgSize} color1={fillColor} color2={color2} className='footer-icon'/>
        </a>
        
        
        
    </Box>
    )
}