import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import 'swiper/swiper.min.css';
import 'swiper/css/autoplay';

import axios from 'axios';
import Link from 'next/link';
import { useEffect } from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { Autoplay, EffectCreative, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useUtilityStore } from '../../store/utility-store';
import FAQ from '../common/faq';
import Footer from '../common/footer';
import Stats from '../common/stats';
import Testimonials from '../common/testimonial';
import UtilityCard from '../common/utlity-card';
import HeroController from './hero/hero.controller';

const Dashboard = () => {
  useEffect(() => {
    const params = {
      page: 1,
      limit: '15',
    };
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/utilities/all`, {
        params,
      })
      .then((res) => {
        useUtilityStore.getState().setAllUtilities(res.data.result);
      });
  }, []);

  const utilities = useUtilityStore((state) => state.allUtilities);

  const breakpoints = {
    360: {
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  };

  return (
    <>
      <div className="bg-slate-200 animated-bg">
        <HeroController />

        <div className="mx-auto max-w-7xl sm:px-6 px-4 lg:px-8 pb-8 pt-16 md:pt-24 ">
          {/* Trending Utilities  */}
          <div>
            <div className="pt-11 text-center">
              <p className="text-3xl font-bold text-gray-900">
                Trending Utilities
              </p>
            </div>
            <ul className="mt-12">
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectCreative]}
                spaceBetween={40}
                loop={true}
                loopFillGroupWithBlank={true}
                className="mySwiper"
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={breakpoints}
              >
                {utilities.map((utility) => {
                  return (
                    <SwiperSlide key={utility._id}>
                      <UtilityCard
                        id={utility._id}
                        collectionName={utility.nftCollectionName}
                        claims={utility.claims.total}
                        utilityName={utility.title}
                        image={utility.image}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </ul>
          </div>

          <Testimonials />

          {/* Explore all Utilities  */}
          <div className=" pb-16">
            <div className="pt-16 text-center">
              <p className="text-3xl font-bold text-gray-900 flex gap-2 items-center justify-center">
                Explore all Utilities{' '}
                <Link href="/utilities" passHref>
                  <BiLinkExternal />
                </Link>
              </p>
            </div>
            <ul className="mt-12">
              <Swiper
                spaceBetween={40}
                loop={true}
                loopFillGroupWithBlank={true}
                className="mySwiper"
                autoplay={true}
                breakpoints={breakpoints}
              >
                {utilities.map((utility) => {
                  return (
                    <SwiperSlide key={utility._id}>
                      <UtilityCard
                        id={utility._id}
                        collectionName={utility.nftCollectionName}
                        claims={utility.claims.total}
                        utilityName={utility.title}
                        image={utility.image}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </ul>
          </div>
        </div>

        <Stats />
        <FAQ />
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
