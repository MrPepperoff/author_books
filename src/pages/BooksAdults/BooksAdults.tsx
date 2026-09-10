import { Col, Container, Row } from "react-bootstrap";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import style from './BookAdults.module.sass';
import { useEffect } from "react";
import Book2Img from '../../assets/images/book/2.png';

export default function BooksAduls(){
    useEffect(() => {
        let block = document.getElementById('about');
        if(block){
            block.classList.add(style.about_color);
        }
        document.title = "Александр ПИТ | Книги для взрослых";
    }, []);

    return(
        <MainLayout className={style.BooksAduls} id='book-aduls'>
            <Container>
                <h1>Книги для взрослых</h1>
                <div className={style.book1__wrap}>
                    <div className={style.book1}>
                        <div className={style.book1__cover}>
                            <img src={Book2Img} alt="" />
                            <span className={style.book1__list}></span>
                            <span className={style.book__list}></span>
                        </div>
                    </div>
                </div>
                <Row>
                    <Col className={style.book__card}>
                        <Row>
                            <Col xs={3}>
                                <div className={style.book__wrap}>
                                    <div className={style.book}>
                                        <div className={style.book__cover}>
                                            <img src={Book2Img} alt="" />
                                            <span className={style.book__pages}></span>
                                            <span className={style.book__pages}></span>
                                            <span className={style.book__pages}></span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <h2>Пример</h2>

                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem animi sed doloremque et error repellendus, voluptate perspiciatis fugit delectus ut iste minus facere, excepturi, sapiente autem magni beatae vel fugiat!</p>

                                <button type="button"> Подробнее ...</button>
                            </Col>
                        </Row>
                        

                    </Col>
                </Row>
                
            </Container>
        </MainLayout>
    )
}