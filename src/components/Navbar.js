import React from 'react'
import "./style.css";

function Navbar() {
    return (
        <div className="Navbar">
            <div className="Navbar-left-content">
                <div className="logo-Container">
                    <a className="FistandArrow-Container" href='/'>
                        <div className="Fist-Logo"> <svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" fill="#D13639" width="85" height="27" viewBox="0 0 110 35"><path d="M17.8 31.7l-1.6-4.1 15.4.8-.7 6.6zM21.5 0L0 10.2l3.3 15.3h4.4l-.7-11 .6-.2 2.7 11.2h4.5l-.1-13.4.6-.2 2.3 13.6h4.9l1.1-16.1.7-.3 1.2 16.4h6.3l2.3-22.4zm84.9 31.2l-6.1-1v-.8l5.9-.2-.1-1.5h-7.5l-.4 3.8 6.2 1.1v.7l-6.5.3-.2 1.4h9.1l-.4-3.8zM48 30.6l-.1 1.4 2.2.1v1.4l-4.7-.1.2-4.1 6.4-.1-.1-1.5h-8.3l-.7 7.3h9.4l-.2-4.5-4.1.1zm39.9 2.7V32l4.4-.1v-1.4l-4.5-.1v-1.3l5.9-.1v-1.5h-8l-.2 7.5h8.4l-.1-1.5-5.9-.2zM81.5 35l-.8-7.4h-2.1l-3.1 3.5-3.1-3.5h-2.1l-.7 7.4h2.5l.2-4.8 3.2 3.3 3.2-3.3.2 4.8zM70.9.5h-5l-.4 22.9h6zm20.4 0H75.7l-.6 22.9h17.3L91.3.5zm-4.8 17.9l-5.5.2-.3-13.5 5.8.2v13.1zM110 5.5l-.6-5H94l.2 4.4 4.9.2.5 18.3h6.1l-1.8-18.1zM56.1 23.4h6.6l-4.3-10.3 3.4-1.9L59.5.5H42.7l-.6 5 3.8-.1-1.8 18.1H50l.2-5.8 4.2-2.3 1.7 8zM50.5 5.1l4.8-.1.6 4.6-5.6 2.6.2-7.1zm13 29.9H66l-2-7.4h-6L56 35h2.5l.4-1.9 4.1.1.5 1.8zm-4.2-3.3l.5-2.4 2.4-.1.5 2.4-3.4.1z" fill="#D13639"></path></svg></div>
                        <div className="Logo-Arrow" style={{ padding: 6 }}> <svg class viewBox="0 0 8 5" width="15px" height="15px" fill="#fff"><title>Navbar logo arrow</title> <path d="M.707 1.707l2.586 2.586a1 1 0 001.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707z"></path></svg></div>
                    </a>
                </div>
            </div>

            <div className="Navbar-center-content">
                <div className="desktop-logo-container">
                    <div>
                        <a href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" class="league" width="30" height="32" viewBox="0 0 30 32" fill="none"><g><path d="M1.80644 9.75049C0.655032 11.8373 0 14.2271 0 16.7683C0 19.3095 0.655032 21.7015 1.80644 23.7883V9.75049Z" fill="#C28F2C"></path> <path d="M15 2.02222C13.7829 2.02222 12.602 2.16921 11.4688 2.43647V4.75718C12.5907 4.44093 13.7738 4.26721 15 4.26721C22.0218 4.26721 27.7153 9.84627 27.7153 16.7305C27.7153 19.8307 26.5571 22.6659 24.6464 24.8463L24.2838 26.118L23.4814 28.9331C27.4184 26.2761 30.0023 21.8195 30.0023 16.7705C30 8.62355 23.2843 2.02222 15 2.02222Z" fill="#C28F2C"></path> <path d="M11.4688 24.4209H22.9737H23.2253C25.1723 22.4209 26.3713 19.7126 26.3713 16.7305C26.3713 10.5746 21.2806 5.58569 15 5.58569C13.767 5.58569 12.5816 5.78168 11.4688 6.1358V24.4209Z" fill="#C28F2C"></path> <path d="M10.1088 0H1.55029L3.16634 3.29844V28.7038L1.55029 32H21.1922L22.9737 25.7572H10.1088V0Z" fill="#C28F2C"></path></g></svg>
                        </a>
                    </div>
                </div>
                <div className='navigation-wrapper'>
                    <div className='desktop-link-item'>
                        <a className="Navigation-game-link" href="/">
                            <p>Game</p>
                            <div className="desktop-link-underline"></div>
                        </a>
                    </div>
                    <div className='desktop-link-item'>
                        <a className="Navigation-game-link" href="/">
                            <p>Champions</p>
                            <div className="desktop-link-underline"></div>
                        </a>
                    </div>
                    <div className='desktop-link-item'>
                        <a className="Navigation-game-link" href="/">
                            <p>News
                                <svg width="10" height="5" class="menu-item-arrowdown-svg" viewBox="0 0 8 5"><title>mainNavArrowDownHover</title><path d="M.707 1.707l2.586 2.586a1 1 0 001.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707z" fill="#fff"></path></svg>
                            </p>
                            <ul class="submenu-wrapper">
                                <li class="submenu-item"><a class="submenu-link" href='/'>All</a></li>
                                <li class="submenu-item"><a class="submenu-link" href='/'>Game Updates</a></li>
                                <li class="submenu-item"><a class="submenu-link" href='/'>Esports</a></li>
                                <li class="submenu-item"><a class="submenu-link" href='/'>Dev</a></li>
                                <li class="submenu-item"><a class="submenu-link" href='/'> Lore</a></li>
                                <li class="submenu-item"><a class="submenu-link" href='/'>Media</a></li>
                                <li class="submenu-item"><a class="submenu-link" href='/'>Merch</a></li>
                                <li class="submenu-item"><a class="submenu-link" href='/'>Community</a></li>
                                <li class="submenu-item"><a class="submenu-link" href='/'>Riot Games</a></li>
                            </ul>
                            <div className="desktop-link-underline"></div>
                        </a>
                    </div>
                    <div className='desktop-link-item'>
                        <a className="Navigation-game-link" href="/">
                            <p>Patch Notes</p>
                            <div className="desktop-link-underline"></div>
                        </a>
                    </div>
                    <div className='desktop-link-item'>
                        <a className="Navigation-game-link" href="/">
                            <p>More
                                <svg width="10" height="5" class="menu-item-arrowdown-svg" viewBox="0 0 8 5"><title>mainNavArrowDownHover</title><path d="M.707 1.707l2.586 2.586a1 1 0 001.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707z" fill="#fff"></path></svg>
                            </p>
                            <div className="desktop-link-underline"></div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="Navbar-right-content">
                <div className='Navbar-locale-switcher'>
                    <div className='locale-switcher-icon'>
                        <a className='lang-switch-trigger' href='/'>
                            <svg width="24" height="24" class viewBox="0 0 16 16">
                                <title>globe icon</title>
                                <path d="M7.992 0C3.576 0 0 3.584 0 8s3.576 8 7.992 8C12.416 16 16 12.416 16 8s-3.584-8-8.008-8zm5.544 4.8h-2.36c-.256-1-.624-1.96-1.104-2.848A6.424 6.424 0 0113.536 4.8zM8 1.632A11.27 11.27 0 019.528 4.8H6.472A11.27 11.27 0 018 1.632zM1.808 9.6A6.594 6.594 0 011.6 8c0-.552.08-1.088.208-1.6h2.704A13.212 13.212 0 004.4 8c0 .544.048 1.072.112 1.6H1.808zm.656 1.6h2.36c.256 1 .624 1.96 1.104 2.848A6.39 6.39 0 012.464 11.2zm2.36-6.4h-2.36a6.39 6.39 0 013.464-2.848A12.52 12.52 0 004.824 4.8zM8 14.368A11.27 11.27 0 016.472 11.2h3.056A11.27 11.27 0 018 14.368zM9.872 9.6H6.128A11.77 11.77 0 016 8c0-.544.056-1.08.128-1.6h3.744C9.944 6.92 10 7.456 10 8s-.056 1.072-.128 1.6zm.2 4.448a12.52 12.52 0 001.104-2.848h2.36a6.424 6.424 0 01-3.464 2.848zM11.488 9.6c.064-.528.112-1.056.112-1.6s-.048-1.072-.112-1.6h2.704c.128.512.208 1.048.208 1.6s-.08 1.088-.208 1.6h-2.704z" fill="#E8E8E8"></path></svg>
                        </a>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}


export default Navbar