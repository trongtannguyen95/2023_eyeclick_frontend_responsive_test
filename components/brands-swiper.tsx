import Box from '@mui/material/Box'
import { Container } from "@mui/system"
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import BGCImg from '../assets/images/brandsLogo/boys&girls-club.png'
import FPImage from '../assets/images/brandsLogo/fisher-price.png'
import KFCImage from '../assets/images/brandsLogo/kfc.png'
import KAImage from '../assets/images/brandsLogo/kiddie-academy.png'
import KRKImage from '../assets/images/brandsLogo/kids-r-kids.png'
import NCHImage from '../assets/images/brandsLogo/nicklaus-children-hospital.png'
import PHImage from '../assets/images/brandsLogo/pizza-hut.png'
import SHImage from '../assets/images/brandsLogo/shriners-hospitals.png'
import TNEmage from '../assets/images/brandsLogo/the-learning-experience.png'

export default function BrandsSwiper(props: any) {
    const Logos = [BGCImg, FPImage, KFCImage, KAImage, KRKImage, NCHImage, PHImage, SHImage, TNEmage]
    return (
        <Box bgcolor={'#F5F5F6'} py={'12px'}>
            <Container sx={{ maxWidth: { xs: '400px', md: '1200px' } }}>
                <Swiper
                    breakpoints={{
                        900: {
                            slidesPerView: 9
                        },

                    }}
                    spaceBetween={50}
                    slidesPerView={3}
                    loop={true}
                >
                    {Logos.map((l, idx) => {
                        return (
                            <SwiperSlide key={`brand-logo-${idx}`}><img src={l.src} height='100%' /></SwiperSlide>
                        )
                    })}
                </Swiper>

            </Container>
        </Box>
    )
}