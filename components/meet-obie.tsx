import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from "@mui/system";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import FamilyIcon from '../assets/icons/family.svg';
import GiftIcon from '../assets/icons/gift.svg';
import ObieIcon from '../assets/icons/obie.svg';
import PlayIcon from '../assets/icons/play-button.svg';
import UniqueIcon from '../assets/icons/unique.svg';
import DimensionIcons from '../assets/image/dimension-icons.png';
import ShopHeroRight from '../assets/image/ShopHeroRight.png';
import TextBlock from "./layout/textBlock";
import 'swiper/css';

export default function MeetObie(props: any) {
    return (
        <Box bgcolor={'#FFE4A5'} pt={'50px'}>
            <Container sx={{ maxWidth: { xs: '400px', md: '1200px' } }}>
                <Typography variant="h2" align="center">Active. Educational. Fun. Meet Obie</Typography>
                <Grid container columnSpacing={2} mt={3}>
                    <Grid item md={3} spacing={0} container display={{ xs: 'none', md: 'block' }}>
                        <TextBlock
                            minHeight={'320px'}
                            icon={UniqueIcon.src}
                            title={'All-inclusive affordable package'}
                            content={'Obie offers an all-inclusive package of an interactive projector, game library, installation, support and insurance in budget-friendly pricing plans and installment options.'}
                        />
                        <TextBlock
                            minHeight={'320px'}
                            icon={ObieIcon.src}
                            title={'Suits Any Space'}
                            content={'Obie transforms any space into a playground. Whether a blank floor, table, or wall, ceiling mounted console easily fits any size room or office.'}
                        />
                    </Grid>
                    <Grid item md={6} xs={12} rowGap={2}>
                        <Grid item xs={12} position='relative' textAlign={'center'}>
                            <img src={PlayIcon.src} style={{ top: '50%', left: '50%', position: 'absolute', transform: 'translate(-50%, -50%)' }} />
                            <img src={ShopHeroRight.src} width="100%" height="auto" />

                        </Grid>
                        <Grid item xs={12} textAlign={'center'}>
                            <Typography my={2} variant="h4">Whether a blank floor, table, or wall -  install Obie in an open space for a no-maintenance solution</Typography>
                            <img src={DimensionIcons.src} />
                        </Grid>
                    </Grid>
                    <Grid item md={3} spacing={0} container display={{ xs: 'none', md: 'block' }}>
                        <TextBlock
                            minHeight={'320px'}

                            icon={FamilyIcon.src}
                            title={'Simple & Safe'}
                            content={'Obie is simple to use, maintenance-free, friendly remote for easy control. A germ-free virtual playground - no cleaning or fuss.'}
                        />
                        <TextBlock
                            minHeight={'320px'}
                            icon={GiftIcon.src}
                            title={'Interactive games package'}
                            content={'200+ games variety: Education, Sports, Memory and Action. Obie provides active play, educational, healthy and social experience. Endless fun.'}
                        />
                    </Grid>
                    <Grid xs={12} item textAlign="left" mt={3} display={{ xs: 'block', md: 'none' }}>
                        <Swiper
                            pagination={true}
                            modules={[Pagination]}
                            slidesPerView={1}
                            style={{ paddingBottom: '50px' }}
                        >
                            <SwiperSlide>
                                <TextBlock
                                    icon={UniqueIcon.src}
                                    title={'All-inclusive affordable package'}
                                    content={'Obie offers an all-inclusive package of an interactive projector, game library, installation, support and insurance in budget-friendly pricing plans and installment options.'}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <TextBlock
                                    icon={ObieIcon.src}
                                    title={'Suits Any Space'}
                                    content={'Obie transforms any space into a playground. Whether a blank floor, table, or wall, ceiling mounted console easily fits any size room or office.'}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <TextBlock

                                    icon={FamilyIcon.src}
                                    title={'Simple & Safe'}
                                    content={'Obie is simple to use, maintenance-free, friendly remote for easy control. A germ-free virtual playground - no cleaning or fuss.'}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <TextBlock
                                    icon={GiftIcon.src}
                                    title={'Interactive games package'}
                                    content={'200+ games variety: Education, Sports, Memory and Action. Obie provides active play, educational, healthy and social experience. Endless fun.'}
                                />
                            </SwiperSlide>

                        </Swiper>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    )
}