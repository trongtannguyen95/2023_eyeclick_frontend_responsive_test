import Box from '@mui/material/Box'
import { Container } from "@mui/system"
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import BGCImg from '../assets/image/brandsLogo/boys&girls-club.png'
import FPImage from '../assets/image/brandsLogo/fisher-price.png'
import KFCImage from '../assets/image/brandsLogo/kfc.png'
import KAImage from '../assets/image/brandsLogo/kiddie-academy.png'
import KRKImage from '../assets/image/brandsLogo/kids-r-kids.png'
import NCHImage from '../assets/image/brandsLogo/nicklaus-children-hospital.png'
import PHImage from '../assets/image/brandsLogo/pizza-hut.png'
import SHImage from '../assets/image/brandsLogo/shriners-hospitals.png'
import TNEmage from '../assets/image/brandsLogo/the-learning-experience.png'

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