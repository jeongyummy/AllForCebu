"use client"

import Link from 'next/link'
import styles from "@/app/scss/Sidebar.module.scss"

export default function Sidebar() {
    return (
        <>
           <div className={styles.sidebar_wrapper}>
                <ul>
                    <li><Link href={'/'} className={styles.sidebar_menu}>1</Link></li> 
                    <li><Link href={'/'} className={styles.sidebar_menu}>2</Link></li> 
                    <li><Link href={'/'} className={styles.sidebar_menu}>3</Link></li> 
                </ul>
           </div>
        </>
    )
}