"use client"

import Link from 'next/link'
import styles from "@/app/scss/header/Header.module.scss"
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";


export default function Header() {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <>
            <div className={styles.header_wrapper}>
                <div>
                    <span><RxHamburgerMenu size="24"/></span>
                </div>
                <div>
                    <Link href={'/'} className={styles.header_title}>All for CEBU🌴</Link>
                </div>
                <div>
                {/* 추후 로그인 아이콘 / 로그아웃 */}
                    {isLogin ? <><span>마이페이지</span><span>로그아웃</span></> : <span>로그인</span> }
                </div>
            </div>
        </>
    )
}