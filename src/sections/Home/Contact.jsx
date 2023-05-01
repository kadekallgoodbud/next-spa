import React, { useState } from "react";
import ContactForm from "@/components/Form/Form";
import CloseIcon from '@mui/icons-material/Close';
import { ButtonMui } from '@/components/Material UI/Button';
import Modal from '@mui/material/Modal';
import { data } from "@/data/data";
import { Box } from "@mui/system";


export default function Contact() {
  const [formResetKey, setFormResetKey] = useState(0);


  const ContactProps = {
    title: (data.contact.title),
    placeholder: (data.contact.placeholder)
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    handleResetForm()
  }

  const handleResetForm = () => {
    setFormResetKey(prevKey => prevKey + 1); // Increment key to reset form
  }

  return (
    <>
      <div className="container mx-auto w-3/5 xs:w-4/5 min-h-[500px] xs:min-h-[320px] flex flex-col justify-center align-middle">
        <div className=" flex flex-col items-center ">

          <h3
            className="text-5xl xs:text-3xl xs:text-center font-bold bg-gradient-to-r from-[color:var(--clr-gradient-text)] to-[color:var(--clr-gradient-text-secondary)] bg-clip-text text-transparent leading-normal">
            {ContactProps.title}
          </h3>

          <ButtonMui
            sx={{
              margin: "30px 0px",
              padding: "7px 30px",
              backgroundColor: "var(--clr-button)",
              borderColor: "var(--clr-button)",
              borderRadius: "24px",
              "&:hover": {
                backgroundColor: 'var(--clr-link)',
                borderColor: 'var(--clr-link)'
              },
              '&:not(:hover)': {
                backgroundColor: "var(--clr-button)",
                borderColor: "var(--clr-button)"
              },
            }}
            onClick={handleOpen}>
            {ContactProps.placeholder}
          </ButtonMui>

          <Modal
            sx={{
              backdropFilter: setOpen ? 'blur(3px)' : 'blur(0px)',
              '@media (max-width: 600px)': {
                padding: '0px 20px'
              }
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
                  height: 'auto',
                  padding: "25px 40px 25px 40px",
                  position: "relative",
                  '@media (max-width: 600px)': {
                    width: '100%',
                    height: 'auto',
                    padding: "20px 20px 20px 20px",
                  }
                }}
                padding={5}
                margin={5}
              >
                <ContactForm key={formResetKey} onClick={() => setOpen(false)} />
              </Box>
            </></Modal>
        </div>

      </div>
    </>
  )
}
