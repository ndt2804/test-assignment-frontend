import React, { useState, useEffect } from "react";
import ModalContact from "../ui/modal-contact";
const Header = () => {
    // State to track scroll position
    const [scrolled, setScrolled] = useState(false);

    // Effect to handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <><header
            className={`w-full fixed top-0 left-0 right-0 z-20 transition-colors duration-300 ${scrolled ? 'bg-white text-gray-800' : 'bg-transparent text-white'
                }`}
        >
            <div className="mx-auto">
                <div className="mx-auto flex   max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 ">
                    <a className="block text-teal-600" href="#">
                        <span className="sr-only">Home</span>
                        <img className="my-4" src="https://www.nashtechglobal.com/wp-content/uploads/2023/12/nashTech-logo-red.svg" />

                    </a>
                    <div className="flex items-center justify-end md:justify-between">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-12 text-xl">
                                <li> <a className=" transition hover:text-gray-500/75" href="#"> Solutions </a></li>
                                <li><a className=" transition hover:text-gray-500/75" href="#"> Industries </a> </li>
                                <li><a className=" transition hover:text-gray-500/75" href="#"> Our Thinking </a></li>
                                <li><a className="transition hover:text-gray-500/75" href="#"> Case Studies </a></li>
                                <li><a className=" transition hover:text-gray-500/75" href="#"> About Us </a></li>
                                <li>
                                    <a href="#" className="text-sm leading-6 text-white">
                                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--gis" preserveAspectRatio="xMidYMid meet" fill="#000000" stroke="#000000" style={{ width: '24px', height: '24px' }}>
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path d="M50 0C22.404 0 0 22.404 0 50s22.404 50 50 50c27.546 0 49.911-22.324 49.992-49.852A1.5 1.5 0 0 0 100 50a1.5 1.5 0 0 0-.006-.133C99.922 22.332 77.552 0 50 0zm0 3c5.065 0 9.938.81 14.508 2.29c.328.328.644.678.937 1.064c2.707-1.147 3.34 4.238.621 1.974c-3.315-.246-3.525-4.696-6.238-2.58c1.428.85-1.87 3.47 1.783 3.203c1.301-2.94.598 2.176 3.606.97c-1.864.578-.397 1.484.87 1.86c4.243 2.794-1.21 1.23-3.054 2.117c.88 2.466 1.304 5.09 4.057 5.772c-1.902 1.767-1.107 5.197-3.68 6.365l-1.1 1.016c-.168 1.68-4.21 5.68-1.322 5.73c-1.693.439-.03 2.544.092 4.063c-1.482 2.827-.975 7.322 2.371 8.482c1.955 2.906 5.448 7.116 9.524 5.522c3.555 1.848 7.319-4.876 9.402-.385c3.758-.167 3.284 2.971 2.652 5.982c2.253 3.283 3.157 8.185.71 11.703c-2.281 4.899-.869 10.688-3.741 15.432c.296.054.589.045.879.006C74.403 91.88 62.807 97 50 97a46.8 46.8 0 0 1-24.104-6.643c-.12-1.147 1.6-2.122 1.32-3.107c1.022-.058 4.27-3.85 3.557-6.572c3.225-1.505 7.424-1.64 6.875-6.621c-1.4-4.57 4.608-6.312 3.86-10.643c-1.686-3.546-6.647-4.57-10.213-5.596c-2.214-2.038-5.875-1.727-6.576-5.578c-.452-4.489-6.617-3.135-7.877-7.133c.691-3.578-.199-1.217-2.377-2.35c-.79-.194-.3 1.044-2.45.45c.697-1.842-1.324-2.37-1.61-1.549c-1.851-.77-4.581 5.065-5.622 1.28c1.116-2.752-.066-4.79.285-6.772c.106-.345.227-.684.34-1.025c.65-1.047.843-1.764.762-2.121c.909-2.348 2-4.602 3.258-6.749c.289.544-.012 1.846-.53 3.422c.428.79 2.65-3.019.75 1.262c1.804-2.58.295 1.28 1.348 1.305c1.29 2.491-3.706-3.615-4.277.386c2.159-.457 1.18 2.814 3.676 2.194c-2.082 2.814 2.883 1.234 4.52 1.771c2.227-1.456-2.23-.354-2.108-2.084c-2.716-.399-.472-1.663-.752-2.326c-1.438-.734.326-4.852-1.588-4.299c1.17-4.903 6.012-7.457 9.201-10.947c3.112-2.862 5.325-2.099 8.943-4.396c-1.607-.465-1.459-1.415.748-2.098c4.144-1.52-1.097.826.631 1.475c4.089 1.37 2.315-1.933 3.776-3.375c-.604-.515-.091-1.939-.223-2.598a46.677 46.677 0 0 1 6.33-1.858c-.037.933.71 1.758 2.229 1.073c1.566-1.08 3.36-1.667 5.185-2.096A47.759 47.759 0 0 1 50 3zm23.541 11.19a.827.827 0 0 1 .256.01c1.366.282.923 4.227 2.963 3.33c-2.2-2.693-.641-2.218 1.484-.68c3.363 1.1-1.281 1.126.986 2.328c2.49 3.992.519-3.882 3.145-.31c1.602 2.65 3.325 2.004 4.977 2.6a47.098 47.098 0 0 1 1.984 2.805c-1.245-.14-5.357-2.953-4.443-.45c-.388.727-5.226-2.01-5.98-3.743c-2.159-3.453-7.365.328-10.481-.4c3.126.232 2.142-4.392 4.078-4.987c.42-.321.756-.474 1.031-.504zm-14.51 11.328c-2.366.279.418 1.453 2.32 1.273l-.017-1.217c-.699.159-1.482.319-2.303-.056zM16.738 35.994c-.045-.012-.091 0-.136.041c-.98.637.956 4.753-.618 6.703c2.044-.816 1.432-6.56.754-6.744zM3.631 42.34c.169 1.722.438 3.557 1.31 4.183c1.393-2.232 1.198 2.584.752 4.145c-1.725 3.72-.965 8.298.772 11.918c1.049 4.092 4.048 7.077 6.445 10.344c1.431 3.83 2.81 7.859 4.963 11.373C8.723 75.73 3 63.542 3 50c0-2.61.223-5.167.63-7.66z" fill="#000000"></path>
                                            </g>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="flex items-center gap-4 mx-8">
                            <div className="sm:flex sm:gap-4 items-center">
                                <a href="#" className="text-sm leading-6 flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-search"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                </a>
                                {/* <button className="ml-24 cursor-pointer transition-all bg-red-500 text-white px-6 py-2 border-red-600 hover:brightness-110 hover:translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                                    Get in touch
                                </button> */}
                                <ModalContact /> {/* Đặt Modal ở đây */}

                            </div>


                            <button
                                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                            >
                                <span className="sr-only">Toggle menu</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        </>
    );
};
export default Header;