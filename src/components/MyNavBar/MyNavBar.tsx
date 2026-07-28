
import style from './MyNavBar.module.sass'
import { Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const links = [
    {
        id: 1,
        name: 'Главная',
        link: '/',
        dropdown: false,
    },
    {
        id: 2,
        name: "Об Авторе",
        link: '/about',
        dropdown: false,
    },
    {
        id: 3,
        name: 'Детские',
        link: '/books-child',
        dropdown: true,
    },
    {
        id: 4,
        name: 'Взрослые',
        link: '/books-adults',
        dropdown: true,
    },
    {
        id: 5,
        name: `В_процессе`,
        link: '/in-progress',
        dropdown: true,
    },
]
export default function MyNavBar(){
    
    return(
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={"ms-auto "+ style.navList} >
                {links.map((item)=>
                    item.dropdown == false && <Nav.Link href={item.link} key={item.id}>{item.name}</Nav.Link>
                )}
                
                <NavDropdown title="Книги" id="basic-nav-dropdown " className={style.dropdown}>
                    {links.map((item)=>
                    item.dropdown == true && <Nav.Link href={item.link} key={item.id}>{item.name}</Nav.Link>
                )}
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>

    );
}
type MyNavBarFooterProps ={
    className?: string
}
export function MyNavBarFooter(props : MyNavBarFooterProps){
    return(
        <Nav className={`ms-auto ${style.navListFooter}  ${props.className}`} >
            {links.map((item)=>
                item.dropdown == false && <Nav.Link href={item.link} key={item.id}>{item.name}</Nav.Link>
            )}
            {links.map((item)=>
                item.dropdown == true && <Nav.Link href={item.link} key={item.id}>{item.name} Книги</Nav.Link>
            )}
        </Nav>
    );
}