import { Col, Container, Nav, Row } from 'react-bootstrap'
import style from './Footer.module.sass'
import { MyNavBarFooter } from '../MyNavBar/MyNavBar'

const shops =[
    {
        id: 1,
        name: 'Яндекс Книги',
        link: '#shop1',
        physical: false
    },
    {
        id: 2,
        name: 'Литрес',
        link: '#shop2',
        physical: false
    },
    {
        id: 3,
        name: 'Читай город',
        link: '#shop2',
        physical: true
    },
]
export default function Footer(){
    return(
        <footer className={style.footer}>
            <Container className={style.footer__content}>
                <Row>
                    <Col>
                        <h2>Александр Пит</h2>
                    </Col>
                    <Col className={style.nav}>
                        <h2 className={style.nav__title}>Меню</h2>
                        <MyNavBarFooter className={style.nav__list}/>
                    </Col>
                    <Col>
                        <h2>Другие проекты</h2>
                    </Col>
                    <Col className={style.shop}>
                        <h2 className={style.shop__title}>Магазины</h2>
                        <Row>
                            <Col xs={6}>
                                <Nav className={style.shop__list}>
                                    <h3 className={style.shop__title2}>электроные</h3>
                                    {shops.map((item)=>
                                        !item.physical && <Nav.Link href={item.link} key={item.id}>{item.name}</Nav.Link>
                                    )}

                                </Nav>
                            </Col>
                            <Col xs={6}>
                                <Nav className={style.shop__list}>

                                    <h3 className={style.shop__title2}>физические</h3>
                                    {shops.map((item)=>
                                        item.physical && <Nav.Link href={item.link} key={item.id}>{item.name}</Nav.Link>
                                    )}
                                </Nav>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12}>
                        <div className={style.line}></div>
                    </Col>
                    <Col xs={12} className={style.copyright}>
                        <Row>
                            <Col>
                                copyright &#169;
                            </Col>
                            <Col>
                                <h4>разработчик <a href="#">Алексеев Максим</a></h4>
                            </Col>
                        </Row>
                    
                    </Col>
                </Row>
                
                
            </Container>    
        </footer>
        
    )
}