"use client";
// import SectionHeader from "../Common/SectionHeader";
import SectionHeader from "@/components/Common/SectionHeader";
import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import SingleTestimonial from "@/components/Testimonial/SingleTestimonial";

export default function DocsPage() {
  const data = [
    {
      id: 1,
      name: "Devid Smith",
      designation: "Founter @democompany",
      image: image1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit, ligula sit amet cursus tincidunt, lorem sem elementum nisi, convallis fringilla ante nibh non urna.",
    },
    {
      id: 2,
      name: "Jhon Abraham",
      designation: "Founter @democompany",
      image: image2,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit, ligula sit amet cursus tincidunt, lorem sem elementum nisi, convallis fringilla ante nibh non urna.",
    },
    {
      id: 3,
      name: "Devid Smith",
      designation: "Founter @democompany",
      image: image1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit, ligula sit amet cursus tincidunt, lorem sem elementum nisi, convallis fringilla ante nibh non urna.",
    },
    {
      id: 4,
      name: "Jhon Abraham",
      designation: "Founter @democompany",
      image: image2,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit, ligula sit amet cursus tincidunt, lorem sem elementum nisi, convallis fringilla ante nibh non urna.",
    },
  ];

  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
       <h1 className="pr-16 text-3xl font-bold text-black dark:text-white x:text-hero "> Mission:</h1>
        <p className="text-3xl font-bold text-black dark:text-white">At Greyalpha Tech, our mission is to empower businesses by
        delivering cutting-edge AI and Web3 solutions that drive innovation,
        enhance efficiency, and foster growth. We aim to provide tailored,
        high-impact technologies that help companies thrive in a rapidly
        evolving digital world, ensuring their success in the era of
        decentralization and artificial intelligence.</p>  
         <h1 className="pr-16 text-3xl font-bold text-black dark:text-white x:text-hero "> Vision:</h1>
         <p className="text-3xl font-bold text-black dark:text-white">Our vision is to
        be a global leader in AI and Web3 development, shaping the future of
        digital transformation. We strive to build a world where businesses are
        seamlessly connected through intelligent, decentralized systems, paving
        the way for a smarter, more transparent, and innovative digital
        ecosystem.</p>
         
      </section>

      <section>
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: ``,
                subtitle: `Team Introduction and Expertise`,
                description: `At Greyalpha Tech, our expert team specializes in AI, Web3, and innovative solutions that transform businesses digitally.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mx-auto mt-15 max-w-c-1235 px-4 md:px-8 xl:mt-20 xl:px-0"
        >
          {/* <!-- Slider main container --> */}
          <div className="swiper testimonial-01 mb-20 pb-22.5">
            {/* <!-- Additional required wrapper --> */}
            <Swiper
              spaceBetween={50}
              slidesPerView={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                // when window width is >= 640px
                0: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
              }}
            >
              {data.map((review) => (
                <SwiperSlide key={review?.id}>
                  <SingleTestimonial review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </section>
    </>
  );
}
