import { Container, Navbar } from 'react-bootstrap';
import style from './Header.module.sass';
import MyNavBar from '../MyNavBar/MyNavBar';
import { useEffect, useState } from 'react';
export default function Header(){
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 25);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return(

        <header className={`${style.header} ${scrolled ? style.header_scrolled : ''}`}>

            <div className={style.header__position}>
                <Navbar expand="lg" className={`bg-body-tertiary ${style.navbar} ${scrolled ? style.navbar_scrolled : ''}`}>
                    <Container className={style.header__line}>
                        <Navbar.Brand href="/" className={style.brand}>
                            
                            <span className={style.brand__first}>Александр</span>
                            <span className={style.brand__last}>Пит</span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className={style.navbar__button}/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <MyNavBar/>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </header>
    )
}