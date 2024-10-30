import variables from "../../assets/scss/variables.module.scss";
import { Box, Divider, styled, Typography } from "@mui/material"

export default function TitleSection() {

    const Name = styled('h1')(({theme}) => ({
        ...theme.typography.h1,
    }));

    const Title = styled('div')(({theme}) => ({
        color: theme.palette.mode == 'light' ? variables.textDark : variables.textLighyt,
        fontSize: theme.typography.h5.fontSize,
        fontWeight: 700
    }));

    const Location = styled('div')(({theme}) => ({
        color: theme.palette.info.main,
        fontSize: theme.typography.h4.fontSize
    }))

    return (

		<Box id="top" className="hero bg-film" sx={{
            p: {
                xs: 8,
                md: 12,
                lg: 15
            },
            pt: {
                xs: '75px'
            }
        }}>
            <Box className="content" sx={{
                textAlign: 'center'
            }}>
                <Name>Jeff Wilkerson</Name>

                <Title>Front End Web Developer</Title>
                <Divider sx={{
                    my: 3
                }} />
                <Box>
                    <Location>Portland, Oregon</Location>
                </Box>
            </Box>
        </Box>
    )
}