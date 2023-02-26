import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from "@mui/system";
import ObieLogo from '../../assets/images/obie-logo.png';

export default function Header(props: any) {
    return (
        <Box bgcolor={'#F5F5F6'} py={'12px'}>
            <Container sx={{ maxWidth: { xs: '400px', md: '1200px' } }}>
                <Grid container>
                    <Grid item xs={6}>
                        <img src={ObieLogo.src} height='53' width='auto'></img>
                    </Grid>
                    <Grid item xs={6} container alignContent="right" spacing={1}>
                        <Grid item md={2} display={{ xs: "none", md: "block" }}></Grid>
                        <Grid item md={6} alignContent="right" display={{ xs: "none", md: "block" }}>
                            <Typography align="right" variant="body2">
                                Budget-friendly plans and installment options available
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} alignContent="right" >
                            <Button fullWidth variant="contained">
                                GET OBIE
                            </Button>
                        </Grid>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}