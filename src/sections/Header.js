import { ButtonToggler } from '../components/Toggle'
import * as React from 'react';
import SwipeableTemporaryDrawer from '../components/Muidrawer';
import { DrawerButton, DrawerLayout } from '../components/Drawer'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export const Header = () => {
    const [open, setOpen] = React.useState(false);
    
    //check if it's in server or browser
    if (typeof window !== 'undefined') {
        open ? disableBodyScroll(document) : enableBodyScroll(document);
    }
    
    return ( 
        <header className='header'>
            <DrawerButton open={open} setOpen={setOpen} />
            <SwipeableTemporaryDrawer open={open} setOpen={setOpen} />
            <ButtonToggler/>
        </header>
    )
}