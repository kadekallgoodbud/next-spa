import React, { useEffect, useRef, useState } from "react"
import { data, timelineData } from "../data/data"
import styled from 'styled-components'

const defaultTheme = {
  
  // Breakpoints for responsive design
  breakpoints: {
    xs: 'screen and (max-width: 480px)',
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  },
}

export const CarouselContainer = styled.ul`
  max-width: 1040px;
  padding: 0;
  list-style:none;
  display: flex;
  justify-content: space-between; 
  /* overflow-x: hidden; */

  margin-left: 32px;
  &:first-of-type{
    margin-left: 0;
  }

  margin-bottom: 30px;

  //remove scrollbar
  scrollbar-width: none;  
   &::-webkit-scrollbar {
     display: none;
   }

  @media ${defaultTheme.breakpoints.sm} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
`
export const CarouselMobileScrollNode = styled.li`
  @media ${defaultTheme.breakpoints.sm} {
    display: flex;
    min-width: ${({ final }) => final ? `120%;` : `min-content`}
  }
`

export const CarouselItem = styled.div`
  max-width: 196px;

  @media ${defaultTheme.breakpoints.md} {
    max-width: 124px;
  }
  
  @media ${defaultTheme.breakpoints.sm} {
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
    background: "red";
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    background: var(--clr-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media not all and (min-resolution:.001dpcm) {
        //@supports () {}
        display: inline-block;
    }

    @media ${defaultTheme.breakpoints.md} {
        margin-bottom: 4px;
        font-size: 20px;
        line-height: 28px;
    }
  
    @media ${defaultTheme.breakpoints.sm} {
      font-size: 16px;
      line-height: 24px;
    }
`
export const CarouselItemImg = styled.svg`
    margin-left: 21px;
    width: 100%;
    fill: "red"
        
    path {
        fill: "red"
    }

    @media ${defaultTheme.breakpoints.sm} {
        -webkit-mask-image: none;
        margin-left: 16px;
        overflow: visible;
    }

    @media not all and (min-resolution:.001dpcm) {
    //@supports () {}
      width: 110px;
    
      @media ${defaultTheme.breakpoints.sm} {
          width: 32px;
      }
    }
`

export const CarouselItemText = styled.p`
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.02em;
    padding-right: 16px;

    @media ${defaultTheme.breakpoints.md} {  
        padding-right: 32px;
        font-size: 12px;
        line-height: 18px;
    }
    
    @media ${defaultTheme.breakpoints.sm} {  
        padding-right: 0;
        font-size: 10px;
        line-height: 16px;
    }
`
export const CarouselButtons = styled.div`
    width: 288px;
    display: none;
    visibility: hidden;

    @media ${defaultTheme.breakpoints.sm} {
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
    opacity: ${(props) => props.active === props.index ? `1` : `1`};
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
    const [itemActive, setItemActive] = useState(0);
    const carouselRef = useRef();

    const AboutProps = {
        title: (data.about.title),
        desc: (data.about.desc),
    }

    const TOTAL_ITEMS_COUNT = timelineData.length;


    const scroll = (node, left) => {
        return node.scrollTo({ left, behavior: "smooth" });
      };

    const handleClick = (e, i) => {
        e.preventDefault();
        if(carouselRef.current) {
            const scrollLeft = Math.floor(
                carouselRef.current.scrollWidth * 0.7 * (i/ timelineData.length)
            );

            scroll(carouselRef.current, scrollLeft)
        }
    };

    const handleScroll = () => {
        if (carouselRef.current) {
          const index = Math.round(
            (carouselRef.current.scrollLeft /
              (carouselRef.current.scrollWidth * 0.7)) *
              timelineData.length
          );

            setItemActive(index);
        }
    };

    useEffect(() => {
        const handleSize = () => {
            scroll(carouselRef.current, 0);
        };

        window.addEventListener('resize' , handleSize);

        return () => {
            window.removeEventListener('scroll', handleSize);
        };
    },[]);

    return(
        <>
            <div className='container w-3/5 mx-auto '>
                <div className='m-auto text-left flex flex-col space-y-3 '>
                    <h2 className='text-4xl font-semibold text-[color:var(--clr-body)] '>{AboutProps.title}</h2>
                    <p className='text-lg font-normal text-[color:var(--clr-body)]'>{AboutProps.desc}</p>
                </div>
                <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
                    <>
                    {timelineData.map((item, index) => (
                      <CarouselMobileScrollNode
                      key={index}
                      index={index}
                      final={index ? TOTAL_ITEMS_COUNT - 1 : undefined}>
                        <CarouselItem
                        className=" max-w-[124px] "
                        key={index}
                        id={`carousel__item-${index}`}
                        active={itemActive}
                        onClick={(e) => handleClick(e,index)}
                        >
                          <CarouselItemTitle>
                            {`${item.year}`}
                            <CarouselItemImg
                              width="208"
                              height="6"
                              viewBox="0 0 208 6"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                                fillOpacity="1"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear"
                                  x1="-4.30412e-10"
                                  y1="0.5"
                                  x2="208"
                                  y2="0.500295"
                                  gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#ffffff"></stop>
                                  <stop
                                    offset="0.79478"
                                    stopColor="#fff"
                                    stopOpacity="0"></stop>
                                </linearGradient>
                              </defs>
                            </CarouselItemImg>
                          </CarouselItemTitle>
                          <CarouselItemText>{item.desc}</CarouselItemText>
                        </CarouselItem>
                      </CarouselMobileScrollNode>
                    ))}
                    </>
                </CarouselContainer>
                <CarouselButtons
                >
                    {timelineData.map((item, index) => {
                      return (
                        <CarouselButton
                          key={index}
                          index={index}
                          active={itemActive}
                          onClick={(e) => handleClick(e, index)}
                          type="button"
                          name={`slide-${index}`}
                          aria-label={`slide ${index} was selected`}
                        >
                          <CarouselButtonDot active={itemActive} />
                        </CarouselButton>
                      );
                    })}
                </CarouselButtons>
            </div>
        </>
    )

}