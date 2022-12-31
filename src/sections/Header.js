import ButtonToggler from '../components/Toggle'
import React, {useState} from 'react';
import { DrawerButton, DrawerLayout } from '../components/Drawer'
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