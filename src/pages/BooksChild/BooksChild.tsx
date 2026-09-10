import { Col, Container, Row } from "react-bootstrap";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import style from './BooksChild.module.sass';

export default function BooksChild(){
    return(
        <MainLayout className={style.bookChild} id='bookChild'>
            <Container>
                <h1>Книги для детей</h1>
                <Row>
                    <Col xs={12} md={8}>
                        
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    )
}