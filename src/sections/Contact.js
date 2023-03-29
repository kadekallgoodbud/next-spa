import React, { useState } from "react";
import ContactForm from "../components/Form/Form";
import CloseIcon from '@mui/icons-material/Close';
import { ButtonMui } from '../components/Material UI/Button';
import Modal from '@mui/material/Modal';
import { data } from "../data/data";
import { Box } from "@mui/system";


export default function Contact() {
  const ContactProps = {
      title : (data.contact.title),
      placeholder : (data.contact.placeholder)
  }
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return(
        <>
            <div className="container mx-auto w-3/5 min-h-[500px] flex flex-col justify-center align-middle">
                <div className=" flex flex-col items-center ">
                    <h3
                     className="text-5xl font-bold bg-gradient-to-r from-[color:var(--clr-gradient-text)] to-[color:var(--clr-gradient-text-secondary)] bg-clip-text text-transparent leading-normal">
                        {ContactProps.title}
                    </h3>
                    <ButtonMui 
                    sx={{
                      margin: "30px 0px",
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
                    sx={{
                        backdropFilter: setOpen ? 'blur(3px)': 'blur(0px)',
                    }} 
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    className="flex flex-col items-center justify-center"
                    ><>
                        <Box
                        sx={{
                            backgroundColor: "var(--clr-bg-modal)",
                            borderRadius: 5,
                            boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.28)",
                            width: 600,
                            height: 550,
                            position: "relative",
                        }}
                        padding={5}
                        margin={5}
                        >   
                            <ContactForm onClick={() => setOpen(false)}/>
                        </Box>
                    </></Modal>
                </div>

            </div>
        </>
    )   
}