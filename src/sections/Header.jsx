import ButtonToggler from '@/components/ThemeToggler'
import { useState } from 'react'
import { DrawerButton, DrawerLayout } from '@/components/Drawer/Drawer'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import Link from 'next/link'

export const Header = (props) => {
  // set different header with props
  const show_defaultHeader = props.show_defaultHeader;
  const show_errorHeader = props.show_errorHeader;
  // check either state is open or not
  const [open, setOpen] = useState(false);

  //check if it's in server or browser
  if (typeof window !== 'undefined') {
    open ? disableBodyScroll(document) : enableBodyScroll(document);
  }

  return (
    <header className='header'>
      {
        show_defaultHeader && (
          <>
            <DrawerButton open={open} setOpen={setOpen} />
            <DrawerLayout open={open} setOpen={setOpen} show_DefaultDrawerLayout="true" />
          </>
        )
      }
      {
        show_errorHeader && (
          <>
            <DrawerButton open={open} setOpen={setOpen} />
            <DrawerLayout open={open} setOpen={setOpen} show_ErrorDrawerLayout="true">
              <Link
                href="/"
                className="cursor-pointer text-3xl text-[color:var(--clr-navigation-text)] transition-transform duration-200 ease-in-out hover:scale-110 font-bold tracking-wider flex align-center justify-center my-4"
              >
                Home
              </Link>
            </DrawerLayout>
          </>
        )
      }
    </header>
  )
}
