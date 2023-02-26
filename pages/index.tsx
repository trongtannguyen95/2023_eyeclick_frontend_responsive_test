import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import type { NextPage } from 'next';
import Head from 'next/head';
import MainBannerImg from '../assets/images/main-banner-img.png';
import BrandsSwiper from '../components/brands-swiper';
import MeetObie from '../components/meet-obie';
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Get Obie</title>
        <meta name="description" content="Get Obie" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container sx={{ maxWidth: { xs: '400px', md: '1200px' } }}>
          <Grid container columnSpacing={2}>
            <Grid md={6} xs={12} container alignItems="center" item >
              <Grid lg={9} xs={12} item>
                <Typography sx={{ textAlign: { md: 'left', xs: 'center' } }} gutterBottom variant="h1" component="h1">Grow your business and revenues with Obie</Typography>
                <Typography sx={{ textAlign: { md: 'left', xs: 'center' } }} color={'#565656'} gutterBottom variant="h3" component="h3">Obie gaming console transforms customers into regulars and revenues into growth.</Typography>
                <Grid mt={'30px'} md={8} xs={12} item>
                  <Button sx={{ textAlign: { md: 'left', xs: 'center' } }} fullWidth variant="contained">
                    GET OBIE
                  </Button>
                  <Typography color={'#565656'} display={{ xs: 'none', md: 'block' }} mt={'15px'} align='center' gutterBottom variant="subtitle1" component="p">Budget-friendly plans and installment options available</Typography>

                </Grid>
              </Grid>


            </Grid>
            <Grid md={6} display={{ xs: 'none', md: 'block' }} item >
              <img src={MainBannerImg.src} height='100%' style={{ width: '50vw' }}></img>
            </Grid>
            <Grid xs={12} display={{ md: 'none', xs: 'block' }} item >
              <div style={{ minHeight: '400px', backgroundImage: `url(${MainBannerImg.src})`, width: '100%', backgroundPositionX: 'left', backgroundSize: 'cover' }}></div>
            </Grid>
          </Grid>
        </Container>
        <BrandsSwiper />
        <MeetObie />
      </main>
    </div>
  )
}
export default Home
