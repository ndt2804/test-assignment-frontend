import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'
const RootLayout = () => {

    return (
        <div className='relative'>
            <Header id="header" />
            <div className="relative z-10">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default RootLayout