"use client";

import Image from "next/image";
import React from 'react';
import { Box, Typography, Divider, Container, useTheme } from '@mui/material';

import Grid from '@mui/material/Grid2';
import './assets/scss/home.scss';
import PastClients from "./components/content/PastClients";
import AboutMe from "./components/content/AboutMe";
import TitleSection from "./components/content/TitleSection";
import Projects from "./components/content/Projects";


export default function Home() {
	const theme = useTheme();

	return (

		<div>

			<TitleSection/>

			<section className="info intro-section content-section">

				<Container maxWidth="lg" className="container">

				<Grid container columns={{xs: 1, md: 3, lg: 5}}>
					<Grid size={{xs: 1, lg: 2}}>


					<Box sx={{
						display: 'flex',
						justifyContent: 'center',
						mb: {
							xs: 3,
							lg: 0
						}
					}}>
						<img src="/images/jeff-wilkerson.jpg" className="headshot-img"/>
					</Box>
						
					</Grid>
					<Grid size={{xs: 2, lg: 3}}>
						
					<Box>
						<p>
							Hi! I'm Jeff Wilkerson, an independent UI/UX developer with over 20 years of experience. I strive to create intuitive, user-focused experiences while collaborating with teams that complement my technical skills with creativity and flair.
						</p>
						<p>
							Recently my professional curiousities have exploded with the rise of AI and other sophisticated collaboration tools. In just 2024 I've done the following:
						</p>
						<Box sx={{
							px: 3
						}}>
							<ul>
								<li>Web application development with Angular and Material UI</li>
								<li>Custom content management solutions leveraging GrapesJS and Monaco Editor</li>
								<li>Shopify app creation using React and GraphQL</li>
								<li>API integration with RxJS</li>
							</ul>
						</Box>
						<p>
							I moved to PDX in 2014 to establish roots in a town valuing tolerance and accessibility. I continue to pursue these goals, offering my expertise to my community and fostering growth opportunities.
						</p>

					</Box>
					</Grid>
				</Grid>


				</Container>
				

			</section>

			<section className="parallax landscape-1">
				<div className="content-overlay">
					<Typography variant="h2">When not webdevvin'...</Typography>
					<Typography paragraph>
						I love exploring landscapes and hiking trails. I've been fortunate to have a loyal canine companion for many years.
					</Typography>
				</div>
			</section>


			<Projects/>

			<PastClients/>

			<section className="parallax landscape-2">
				<div className="content-overlay">
				<Typography variant="h2">Inspired by the Yoga Sutras!</Typography>
				<Typography paragraph>
					My yoga practice teaches me to be mindful, flexible, and present—qualities I bring to my work. Building digital experiences is about more than code; it's about cultivating human connections.
				</Typography>
				</div>
			</section>

			<AboutMe/>


		</div>
	);
}
