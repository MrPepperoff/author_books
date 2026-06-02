import { Button, Carousel, Col, Container, Modal, Row } from "react-bootstrap";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import style from './About.module.sass';
import { useEffect, useState } from "react";
import authorImg from '../../assets/images/about/author.png';

export default function About(){
    useEffect(() => {
        let block = document.getElementById('about');
        if(block){
            block.classList.add(style.about_color);
        }
        document.title = "Александр ПИТ | Об Авторе";
    }, []);
    const [show, setShow] = useState(false);
    const [index, setIndex] = useState(1);

    const handleSelect = (selectedIndex : number) => {
        setIndex(selectedIndex);
    };

    function ModalActive(id : number){
        setIndex(id-2);
        setShow(true)
    } 
    const author = 
        {
            name: 'Александр ПИТ',
            titles:[
                'Личное Дело',
                'Фото из архива',
                'Заметки редакции',
                'Вне работы',
                'Цитата',
                'Что известно', 
                'Источники вдохновения'
            ],

            texts:[
                ' родился в 1989 году в промышленном городе, где серые дворы и однотипные дома формировали особую тишину — ту самую, в которой человек чаще остаётся наедине с собой. Его ранние годы прошли на фоне перемен и нестабильности, что рано научило его замечать детали и чувствовать скрытое напряжение в обыденных вещах.',
                'К письму он впервые обратился в 2005 году, ещё школьником. Это были неровные, местами наивные тексты, но уже тогда в них чувствовалось главное — стремление не к красивому слогу, а к точности переживания.',
                'Период с 2007 по 2012 год стал временем отдаления от литературы. Он выбрал практичное образование, стараясь вписаться в предсказуемую жизнь. Однако именно в эти годы внутри него накапливался тот материал, который позже ляжет в основу его книг: наблюдения за людьми, ощущение внутренней разобщённости и поиск смысла в повседневности.',
                'Возвращение к письму произошло в 2016 году — на фоне личного кризиса, который он позже назовёт «точкой сборки». С этого момента его тексты приобретают жёсткость, честность и ту сдержанную глубину, за которую его впоследствии полюбят читатели.',
                '2017 год — первые анонимные публикации в сети. Без имени, без биографии, без попытки заявить о себе. Только текст. Этот принцип — «сначала слово, потом всё остальное» — станет для него определяющим.',
                'Первая книга выходит в 2019 году в цифровом формате. Она распространяется почти незаметно, но находит своего читателя. Не массового, но внимательного.',
                'К 2021 году, с выходом второй книги, становится ясно: перед читателями — сформировавшийся голос. Его стиль узнают, цитируют, обсуждают. Он пишет о внутренней жизни человека без украшений, без попытки понравиться — и именно это делает тексты точными и живыми.',
                '2023 год становится переломным: интерес к его личности резко возрастает. Появляются версии, догадки, «расследования». Но автор остаётся в тени, принципиально отказываясь от публичности.',
                'На сегодняшний день (2024–2026 годы) он продолжает работать анонимно. Его книги выходят без фотографий и интервью, а редкие комментарии публикуются в виде коротких текстов без подписи.',
                'Он так и остаётся фигурой без лица — и, возможно, именно поэтому его голос звучит громче многих других.',
                '«Самые страшные вещи рождаются не в темноте,а в голове человека.»',
            ],
            images: [
                {
                    id: 1,
                    title: '',
                    src: authorImg
                },
                {
                    id: 2,
                    title: '',
                    src: 'https://imgplaceholdr.com/230x360/d27108/fff/png?text=1&text_size=40'
                },
                {
                    id: 3,
                    title: '',
                    src: 'https://imgplaceholdr.com/300x400/d27108/fff/png?text=2&text_size=40'
                },
                {
                    id: 4,
                    title: '',
                    src: 'https://imgplaceholdr.com/200x260/d27108/fff/png?text=3&text_size=40'
                },
                {
                    id: 5,
                    title: '',
                    src: 'https://imgplaceholdr.com/450x460/d27108/fff/png?text=4&text_size=40'
                },
                {
                    id: 6,
                    title: '',
                    src: 'https://imgplaceholdr.com/130x160/d27108/fff/png?text=5&text_size=40'
                },
                {
                    id: 7,
                    title: '',
                    src: 'https://imgplaceholdr.com/900x760/d27108/fff/png?text=6&text_size=40'
                },
                {
                    id: 8,
                    title: '',
                    src: 'https://imgplaceholdr.com/1300x460/d27108/fff/png?text=7&text_size=40'
                },
                {
                    id: 9,
                    title: '',
                    src: 'https://imgplaceholdr.com/1300x460/d27108/fff/png?text=8&text_size=40'
                },
                {
                    id: 10,
                    title: '',
                    src: 'https://imgplaceholdr.com/1300x460/d27108/fff/png?text=9&text_size=40'
                },
                {
                    id: 11,
                    title: '',
                    src: 'https://imgplaceholdr.com/1300x460/d27108/fff/png?text=10&text_size=40'
                }
            ]
        }
    
    return(
        <MainLayout className={style.about} id='about'>
            <div className={style.about__content}>
                <Container className={style.about__content__container}>
                    <Row className={`mt-5`}>
                        <Col xs={12}>
                            <div className={style.right}>
                                <div className={style.photo}>
                                    <img src={author.images[0].src} alt={author.name} />
                                </div>
                                <div className={style.quote}>
                                    <h3>{author.titles[4]}:</h3>
                                    <p><i>{author.texts[10]}</i></p>
                                </div>   
                            </div>
                            <h1>{author.titles[0]}</h1>
                            <p>
                                {author.texts[2]}
                                {author.texts[2]}
                                {author.texts[2]}
                                {author.texts[2]}
                                {author.texts[2]}
                                {author.texts[2]}
                                {author.texts[2]}
                                {author.texts[2]}
                                {author.texts[2]}
                                {author.texts[2]}
                                {author.texts[2]}
                            </p>
                        </Col>
                        <Col className={style.archive}>
                            <h3 className={style.archive__title}>{author.titles[1]}</h3>
                            <Row className={style.archive__list}>
                                {author.images.map((img)=>
                                    (img.id != 1 && img.id <= 9  &&
                                        <Col xs={3} className={style.archive__item} key={img.id}>
                                            <Button variant="primary" onClick={() => ModalActive(img.id)} >
                                                <img className={style.archive__img} src={img.src} alt={img.title} />
                                            </Button>
                                        </Col>
                                    )

                                )}
                                
                            </Row>
                            

                            <Modal
                                show={show}
                                onHide={() => setShow(false)}
                                dialogClassName={style.modal__dialog}
                                aria-labelledby="example-custom-modal-styling-title"
                                className={style.modal}
                            >
                                <Modal.Header closeButton className={style.modal__header}>
                                </Modal.Header>
                                <Modal.Body>
                                    <Carousel data-bs-theme="dark" activeIndex={index} onSelect={handleSelect} interval={null} className={style.carusel}>
                                        {author.images.map((img)=>
                                            (img.id != 1 &&
                                            <Carousel.Item className={style.carusel__item}>
                                                <div className={style.carusel__img__wrap}>
                                                    <img src={img.src} className={style.carusel__img}/>
                                                </div>
                                                
                                                <Carousel.Caption>
                                                    <h3>{img.title}</h3>
                                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            )
                                        )}
                                    </Carousel>
                                </Modal.Body>
                            </Modal>
                        </Col>
                        <Col xs={12}  className={style.doubleBlock}>
                            <h3>------</h3>
                            <Row>
                                <Col xs={6} className={style.doubleBlock__left}>
                                    <h3>{author.titles[3]}</h3>
                                    <p>
                                        {author.texts[2]}
                                        {author.texts[2]}
                                        {author.texts[2]}
                                        {author.texts[2]}
                                    </p>
                                </Col>
                                <Col xs={6} className={style.doubleBlock__right}>
                                    <h3>{author.titles[5]}</h3>
                                    <p>
                                        {author.texts[2]}
                                        {author.texts[2]}
                                        {author.texts[2]}
                                        {author.texts[2]}
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12}>
                            {author.texts[2]}
                        </Col>
                    </Row>
                    
                </Container>    
            </div>
            
        </MainLayout>
    );
}