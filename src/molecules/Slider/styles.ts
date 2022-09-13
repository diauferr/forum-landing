import styled from "styled-components";

import { SwiperSlide } from "swiper/react";

export const Main = styled.div`
    min-height: 350px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .swiper {
        width: 100%;
        height: 100%;
        padding-bottom: 50px;
    }

    .swiper-slide {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;

        @media (min-width: 768px) {
            width: 80%;
        }

        @media (min-width: 1024px) {
            width: 60%;
        }
    }

    .swiper-pagination-bullet {
        background-color: #6B6B6B;
        transition: all ease 0.2s;
    }

    .swiper-pagination-bullet-active {
        background-color: #D7282F;
        padding: 0 9px 0 9px;
        border-radius: 4px 4px 4px 4px;
    }

    .swiper-pagination {
    }
`;
