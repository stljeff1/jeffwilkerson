import { Box, Typography, Grid, styled, Container } from '@mui/material';
import variables from "../../assets/scss/variables.module.scss";

const clients = [{
        name: "Bob's Red Mill",
        logo: "/images/logo-bobs-red-mill.png",
    }, {
        name: "Papa Murphy's Franchising",
        logo: "/images/papa-murphys-logo.png",
    }, {
        name: "Singing Success",
        logo: "/images/ss360-logo.png",
    }, {
        name: "NASA",
        logo: "/images/nasa-logo.png",
    }
];

export default function PastClients() {

    const ClientTitle = styled('div')(({theme}) => ({
        ...theme.typography.h6,
        fontWeight: 700,
        color: variables.backgroundLight,
        textAlign: 'center'
    }))
  return (

    <Box sx={{
        backgroundColor: 'secondary.main',
        py: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
        }}>
        <Container maxWidth="lg">
            <Typography variant="h2" color='info'>Past Clients Include</Typography>

            <Grid container columns={{ xs: 2, md: 4 }} spacing={{ xs: 2, md: 3, lg: 4 }}>
                {clients.map((client, index) => (
                <Grid item xs={1} key={index} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <ClientTitle className="client-title">{client.name}</ClientTitle>
                    <img className="img-fluid client-logo" src={client.logo} alt={client.name} />
                </Grid>
                ))}
            </Grid>
        </Container>
    </Box>
  );
}
