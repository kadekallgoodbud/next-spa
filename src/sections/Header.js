import ButtonToggler from '../components/toggle'
import React, {useState} from 'react';
import { DrawerButton, DrawerLayout } from '../components/drawer'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export default function Header(){
    const [open, setOpen] = useState(false);
    
    //check if it's in server or browser
    if (typeof window !== 'undefined') {
        open ? disableBodyScroll(document) : enableBodyScroll(document);
    }
    
    return (
        <header className='header'>
            <DrawerButton open={open} setOpen={setOpen} />
            <DrawerLayout open={open} setOpen={setOpen} />
            <ButtonToggler/>
        </header>
    )
}