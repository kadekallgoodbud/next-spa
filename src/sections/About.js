import React, { useEffect, useRef, useState } from "react";
import { data, timelineData } from "../data/data";
import styled from 'styled-components';

export const CarouselContainer = styled.ul`
  max-width: 100%;
  padding: 0;
  list-style:none;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between; 
  /* overflow-x: hidden; */
  margin: 10px 0px;

  //remove scrollbar
  scrollbar-width: none;  
   &::-webkit-scrollbar {
     display: none;
   }

  @media (max-width: 600px) {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
`
export const CarouselMobileScrollNode = styled.li`
  @media (max-width: 600px) {
    display: flex;
    min-width: ${({ final }) => final ? `120%;` : `100%`}
  }
`

export const CarouselItem = styled.div`
  

  @media (max-width: 600px) {
    margin-left: 32px;
    min-width: 120px;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;
    ${(props) => props.active === props.index ? `opacity: 1` : `opacity: 0.5`}; 
  }
`

export const CarouselItemTitle = styled.span`
    margin-bottom: 8px;
    display: flex;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.02em;
    background: var(--clr-gradient);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    @media not all and (min-resolution:.001dpcm) {
        //@supports () {}
        display: inline-block;
    }
  
    @media (max-width: 600px) {
      font-size: 18px;
      line-height: 24px;
    }
`
export const CarouselItemImg = styled.svg`
    margin-left: 20px;
    width: 100%;
    fill: var(--clr-link);
    margin-top: 8px;
    
    path {
        fill: var(--clr-link);
    }

    @media (max-width: 600px) {
        -webkit-mask-image: none;
        margin-left: 16px;
        overflow: visible;
    }

    @media not all and (min-resolution:.001dpcm) {
    //@supports () {}
      width: 110px;
    
      @media (max-width: 600px) {
          width: 32px;
      }
    }
`

export const CarouselItemText = styled.p`
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.02em;
    padding-right: 16px;
    color: var(--clr-body);
    
    @media (max-width: 600px) {  
        padding-right: 0;
        font-size: 13px;
        line-height: 16px;
    }
`
export const CarouselButtons = styled.div`
    width: 288px;
    display: none;
    visibility: hidden;

    @media (max-width: 600px) {
      margin-bottom: 48px;
      display: flex;
      visibility: visible;
    }
`

export const CarouselButton = styled.button`
    box-sizing: border-box;
    background: none;
    padding: 4px;
    cursor: pointer;
    margin-right: 4px;
    opacity: ${(props) => props.active === props.index ? `1` : `.33`};
    transform: ${(props) => props.active === props.index ? `scale(1.6)` : `scale(1)`};

    &:focus {
      outline: none;
    }
`

export const CarouselButtonDot = styled.div`
    background: var(--clr-secondary);
    border-radius: 10px;
    margin: auto;
    width: 3px;
    height: 3px;
`


export default function About({}) {
    const [activeItem, setActiveItem] = useState(0);
    const carouselRef = useRef();

    const AboutProps = {
        title: (data.about.title),
        desc: (data.about.desc),
    }

    const TOTAL_ITEMS_COUNT = timelineData.length;

    const scroll = (node, left) => {
        return node.scrollTo({left, behavior: 'smooth'});
    }

    const handleClick = (e, i) => {
        e.preventDefault();

        if(carouselRef.current) {
            const scrollLeft = Math.floor(
                carouselRef.current.scrollWidth * 1 * (i/ timelineData.length)
            );

            scroll(carouselRef.current, scrollLeft)
        }
    };

    const handleScroll = () => {
        if (carouselRef.current) {
          const index = Math.round(
            (carouselRef.current.scrollLeft /
              (carouselRef.current.scrollWidth * 1 )) *
              timelineData.length
          );

          setActiveItem(index);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            scroll(carouselRef.current, 0);
        };

        window.addEventListener('resize' , handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[]);

    return(
        <>
            <div className='container w-3/5 xs:w-4/5 mx-auto flex flex-col gap-5 pt-6 pb-3'>
                <div className='m-auto text-left flex flex-col gap-5 '>
                    <h2 className='text-5xl xs:text-2xl font-bold bg-gradient-to-r from-[color:var(--clr-gradient-text)] to-[color:var(--clr-gradient-text-secondary)] bg-clip-text text-transparent'>{AboutProps.title}</h2>
                    <p className='text-lg xs:text-sm font-normal text-[color:var(--clr-body)]'>{AboutProps.desc}</p>
                </div>
                <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
                    {
                      timelineData.map((item, index) => (
                        <CarouselMobileScrollNode
                        key={index}
                        final={index === TOTAL_ITEMS_COUNT - 1}
                        >
                          <CarouselItem
                          index={index}
                          id={`carousel__item-${index}`}
                          active={activeItem}
                          onClick={(e) => handleClick(e,index)}
                          >
                            <CarouselItemTitle>
                              {`${item.year}`}
                              <CarouselItemImg
                                width="150"
                                height="5"
                                viewBox="0 0 200 5"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                                  fillOpacity="1"
                                />
                              </CarouselItemImg>
                            </CarouselItemTitle>
                            <CarouselItemText>
                              {`${item.desc}`}
                            </CarouselItemText>
                          </CarouselItem>
                        </CarouselMobileScrollNode>
                      ))
                    }
                </CarouselContainer>
                <CarouselButtons>
                    {
                      timelineData.map((item, index) => {
                        return (
                          <CarouselButton
                            key={index}
                            index={index}
                            active={activeItem}
                            onClick={(e) => handleClick(e, index)}
                            type="button"
                            name={`slide-${index}`}
                            aria-label={`slide ${index} was selected`}
                          >
                            <CarouselButtonDot active={activeItem} />
                          </CarouselButton>
                        );
                      })
                    }
                </CarouselButtons>
            </div>
        </>
    )

}