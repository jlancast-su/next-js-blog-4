import {useState} from 'react'

import Image from 'next/image'
import Link from 'next/link'

import ButtonUI from './buttonui'
import NavOverlay from './navoverlay'

import styles from './header.module.scss'


export default function Header () {
    const [isMenuVisable, setMenuVisable] = useState(false)

    return(
        <header className={styles.header}> 
        
        <Link href="/">
            <a>
                <Image 
                src="/images/starbucks-logo.svg"
                width={100}
                height={100}
                alt="starbucks logo"
             />
             </a>
         </Link>

         <ButtonUI 
            icon='menu' 
            clickHandler={()=> {setMenuVisable(true)}}
        />
         {
             isMenuVisable && 
             <NavOverlay  

                closeClickHandler={()=> {setMenuVisable(false)}}
                
             />
         }
        
         </header>
    )
}