import * as React from "react"
import { bool, func } from 'prop-types'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import useMediaQuery from '@mui/material/useMediaQuery'

const DrawerAction = styled.button`
    position: fixed;
    /* position: ${({ open }) => open ? 'fixed' : 'relative'}; */
    top: 5%;
    left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 15;

    &:focus {
        outline: none;
      }
      
      div {
        width: 2rem;
        height: 0.25rem;
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
        background: var(--clr-secondary);

        :first-child {
          transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        :nth-child(2) {
          opacity: ${({ open }) => open ? '0' : '1'};
          transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
        }
        :nth-child(3) {
          transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
      }
      
      @media (max-width: 600px) {
        position: absolute;
        top: 4%;
        left: 1.5rem;
      }

    `;

export const DrawerButton = ({open, setOpen }) => {
  return (
    <>
      <DrawerAction
      open={open} onClick={() => setOpen(!open)}>
          <div></div>
          <div></div>
          <div></div>
      </DrawerAction>
    </>
    );
}


export const Drawer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--clr-sidebar);
  height: 100vh;
  width: 270px;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.35s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  z-index: 10;
  box-shadow: 0 0 10px 1px rgba(0,0,0,0.18);
  
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;



export const DrawerLayout = ({ open,setOpen}) => {
  const isMobile = useMediaQuery('(max-width:600px)');

    return (
      <>
        { isMobile ? (
            <Drawer open={open}>
              <Link to="section1" spy={true} onClick={() => setOpen(!open)} smooth={true} duration={500} className="cursor-pointer text-3xl text-[color:var(--clr-secondary)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4">
                About
              </Link>
              <Link to="section2" spy={true} onClick={() => setOpen(!open)} smooth={true} duration={500} className="cursor-pointer text-3xl text-[color:var(--clr-secondary)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4">
                Project
              </Link>
              <Link to="section3" spy={true} onClick={() => setOpen(!open)} smooth={true} duration={500} className="cursor-pointer text-3xl text-[color:var(--clr-secondary)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4">
                Tech
              </Link>
              <Link to="section5" spy={true} onClick={() => setOpen(!open)} smooth={true} duration={500} className="cursor-pointer text-3xl text-[color:var(--clr-secondary)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4">
                Contact
              </Link>
            </Drawer>
          ):(
            <Drawer open={open}>
              <Link to="section1" spy={true} smooth={true} duration={500} className="cursor-pointer text-3xl text-[color:var(--clr-secondary)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4">
                About
              </Link>
              <Link to="section2" spy={true} smooth={true} duration={500} className="cursor-pointer text-3xl text-[color:var(--clr-secondary)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4">
                Project
              </Link>
              <Link to="section3" spy={true} smooth={true} duration={500} className="cursor-pointer text-3xl text-[color:var(--clr-secondary)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4">
                Tech
              </Link>
              <Link to="section5" spy={true} smooth={true} duration={500} className="cursor-pointer text-3xl text-[color:var(--clr-secondary)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4">
                Contact
              </Link>
            </Drawer>
          )}    
      </>
    )
}



DrawerLayout.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
DrawerButton.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
};
