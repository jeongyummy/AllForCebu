"use client"

import Link from 'next/link'
import styles from "@/app/scss/header/Header.module.scss"
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import Sidebar from '../sidebar/Sidebar';


export default function Header() {
    const [isLogin, setIsLogin] = useState(false);
    const [menuToggle, setMenuToggle] = useState(false);

    // 소셜로그인
    const loginModalOpen = () => {
        console.log("login 구현중");
    }

    //사이드 메뉴
    const sidebarMenuToggle = () => {
        console.log("넌뭐니 menuToggle:", menuToggle)
    }
    
    return (
        <>
            <div className={styles.header_wrapper}>
                <div onClick={() => {sidebarMenuToggle}}>
                    <span><RxHamburgerMenu size="24"/></span>
                </div>
                <div>
                    <Link 
                        href={'/'} 
                        className={styles.header_title}
                    >
                        All for CEBU🌴
                    </Link>
                </div>
                <div>
                {/* 추후 로그인 아이콘 / 로그아웃 */}
                    {isLogin ? <><span>마이페이지</span><span>로그아웃</span></> : <span onClick={() => (loginModalOpen)}>로그인</span> }
                </div>
            </div>

            { menuToggle && <Sidebar /> }
        </>
    )
}