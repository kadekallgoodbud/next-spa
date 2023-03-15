import React, { useState } from "react";
import { ButtonMui } from '../components/Material UI/Button';
import Modal from '@mui/material/Modal';
import { data } from "../data/data";

export default function Contact() {
  const ContactProps = {
      title : (data.contact.title),
      placeholder : (data.contact.placeholder)
  }
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
     
    return(
        <>
            <div className="container mx-auto w-3/5">
                <div className=" flex flex-col items-center ">
                    <h3
                     className="text-3xl font-bold bg-gradient-to-r from-[color:var(--clr-gradient-text)] to-[color:var(--clr-gradient-text-secondary)] bg-clip-text text-transparent leading-normal">
                        {ContactProps.title}
                    </h3>
                    <ButtonMui 
                    sx={{
                      backgroundColor: "var(--clr-border)",
                      borderColor: "var(--clr-border)",
                      "&:hover": {
                          backgroundColor: 'var(--clr-link)',
                          borderColor: 'var(--clr-link)'
                      },
                      '&:not(:hover)': { 
                          backgroundColor: "var(--clr-border)",
                          borderColor: "var(--clr-border)"
                      },
                    }} 
                    onClick={handleOpen}>
                        {ContactProps.placeholder}
                    </ButtonMui>
                    <Modal 
                    open={open}
                    onClose={handleClose}
                    ><>
                      
                    </></Modal>
                </div>

            </div>
        </>
    )   
}