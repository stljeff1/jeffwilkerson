import { Box, Container, styled, Typography } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

export default function Projects() {

    const TitleText = styled('h4')(({theme}) => ({
        color: theme.palette.info.main,
		fontSize: theme.typography.h4.fontSize
    }));
	const iconStyles = { fontSize: 'h4.fontSize', mr: 2 };
    return (

        <Box id="projects" sx={{
            py: 5,
            }}>
           <Container maxWidth="lg" className="container">
					<Typography variant="h2">Projects & Experience</Typography>
					<div className="project-list">
						<div className="project-item">
							<div className="item-title">

								<SchoolIcon sx={iconStyles} color="info"/>
								<TitleText>Digital Learning Platform</TitleText>
							</div>
							<Typography paragraph>
								Developed a scalable learning management system using Angular and REST APIs. Focused on ensuring seamless navigation and delivering a responsive UI for educational content.
							</Typography>
						</div>
						<div className="project-item">
							<div className="item-title">
								<ShoppingCartIcon sx={iconStyles} color="info" />
								<TitleText>E-Commerce Enhancements</TitleText>
							</div>
							<Typography paragraph>
								Enhanced the shopping experience for multiple e-commerce sites, integrating Shopify features and improving the user flow from landing pages to checkout.
							</Typography>
						</div>

						<div className="project-item">
							<div className="item-title">
								<SpaceDashboardIcon sx={iconStyles} color="info" />
								<TitleText>Branding Consistency Toolkit</TitleText>
							</div>
							<Typography paragraph>
								Created a unified library of reusable Material UI components, ensuring brand consistency across all company platforms. Collaborated with marketing teams for a cohesive design strategy.
							</Typography>
						</div>

						<div className="project-item">
							<div className="item-title">
								<DesignServicesIcon color="info" sx={iconStyles} />
								<TitleText>Content Creation Platform</TitleText>
							</div>
							<Typography paragraph>
								Built and maintained a content creation tool using GrapesJS, empowering non-technical users to design their own web pages effortlessly.
							</Typography>
						</div>

					</div>
				</Container>     
        </Box>
    )
}