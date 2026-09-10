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
            content:[
                // {
                //     id: 0,
                //     title: '',
                //     text: [
                //         '',
                //         ''
                //     ],
                // },
                
                {
                    id: 1,
                    title: 'Об Авторе',
                    icon: '',
                    text: [
                        'Я верю, что хорошие истории не знают возраста. Поэтому пишу книги как для детей, так и для взрослых. Меня зовут Александр, и я рад приветствовать вас на своём сайте.',
                    ],
                },
                {
                    id: 2,
                    title:'Кто я',
                    icon: '',
                    text:[
                        'Я занимаюсь разработкой цифровых продуктов и люблю искать простые решения сложных задач.',
                        'Интересуюсь современными технологиями, дизайном и всем, что помогает делать проекты полезными и удобными для людей.',
                    ]
                },
                {
                    id: 3,
                    title: 'Вдохновение',
                    icon: '',
                    text: [
                        'Идеи приходят из разных мест:',
                        'из книг, путишествий, общения и повседневных мелочей.',
                        'Я люблю наблюдать, задавать вопросы и учиться новому - это меня вдохновляет'
                    ],
                },
                {
                    id: 4,
                    title: 'Мой подход',
                    icon: '',
                    text: [
                        'В каждой работе для меня важны структуры, логика, внимание к деталям. Я верю, что хороший результат складывается из маленьких, но важных шагов.',
                        'Всегда стараюсь создать то, чем сам могу гордиться.'
                    ],
                },
                {
                    id: 5,
                    title: 'Вне работы',
                    icon: '',
                    text: [
                        'Свободное время я посвящаю спорту, чтению и путишествиям.',
                        'Это помогает перезагружаться, находить баланс и возвращаться к работе с новыми силами.'
                    ],
                },
                {
                    id: 6,
                    title: 'Цитата',
                    icon: '',
                    text: [
                        'Важно не бояться пробовать новое и делать шаги вперед. Даже маленький прогресс - это все равно движение.',
                        ''
                    ],
                },
                
                {
                    id: 7,
                    title: 'Что известно',
                    icon: '',
                    text: [
                        '',
                        ''
                    ],
                },
                {
                    id: 8,
                    title: 'Фото архив',
                    icon: '',
                    text: [
                        '',
                        ''
                    ],
                },
            ],

            texts:[
                
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
                            
                            <Row className={style.about__line}>
                                <Col>О&nbsp;людях</Col>
                                <Col></Col>
                                <Col>5</Col>
                            </Row>
                            
                            <div className={style.right}>
                                <div className={style.photo}>
                                    <img src={author.images[0].src} alt={author.name} />
                                </div>
                                <div className={style.quote}>
                                    <h3>{author.content[5].title}:</h3>
                                    <p><i>{author.content[5].text}</i></p>
                                </div>  
                                {author.content.map((item)=>
                                (item.id != 1 && item.id % 2 != 0)?
                                    <div className="" key={item.id}>
                                        <h3 className={style.first__title}>{item.title}</h3>
                                        {item.text.map((el)=>
                                            <p className={style.first__text}>
                                                {el}
                                            </p>
                                        )}
                                    </div>    
                                    :''
                                )} 
                            </div>
                            
                            <h1 className={style.about__title}>{author.content[0].title}</h1>
                            <div className={style.about__calligraphy}>
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 105">
                                    <g transform="translate(0.000000,105.000000) scale(0.100000,-0.100000)" stroke="none">
                                        <path d="M 5910 1009 c -51 -9 -146 -48 -186 -74 c -64 -45 -122 -143 -124 -210 c 0 -47 21 -102 57 -141 c 42 -47 89 -53 123 -17 c 31 34 25 64 -22 108 l -43 39 l 20 37 c 31 58 87 89 159 89 c 102 -1 177 -53 225 -155 c 31 -67 35 -157 8 -208 c -41 -76 -170 -136 -292 -136 c -90 1 -168 22 -335 90 c -277 114 -293 119 -415 119 c -129 0 -170 -14 -343 -116 l -103 -62 l -97 51 c -140 73 -213 93 -363 99 c -157 7 -202 -2 -352 -74 l -117 -56 l -153 76 c -83 42 -247 125 -362 184 c -318 163 -521 230 -769 254 c -255 26 -396 -26 -866 -316 c -377 -232 -432 -257 -621 -274 c -315 -29 -594 59 -852 269 c -96 78 -103 65 -10 -20 c 244 -223 561 -340 884 -327 c 194 8 277 40 653 250 c 240 133 413 219 511 252 c 164 56 385 41 647 -45 c 133 -44 295 -120 611 -288 l 189 -100 l -124 -60 c -170 -83 -217 -97 -313 -96 c -169 3 -337 64 -680 248 c -318 171 -406 206 -519 206 c -72 0 -143 -30 -204 -85 c -58 -52 -75 -104 -70 -213 c 5 -99 29 -156 90 -208 c 47 -39 147 -84 205 -90 c 138 -17 276 67 290 176 c 7 51 -1 82 -33 119 c -31 37 -66 40 -88 9 c -22 -31 -21 -35 16 -68 c 28 -26 30 -32 20 -55 c -6 -14 -26 -34 -44 -46 c -43 -26 -121 -22 -166 9 c -38 28 -82 114 -82 162 c 0 73 73 140 151 140 c 68 0 173 -42 429 -171 c 340 -172 516 -229 699 -229 c 43 0 102 7 132 16 c 61 18 217 95 315 155 l 66 40 l 92 -35 c 185 -70 340 -106 502 -113 c 166 -8 294 23 519 127 c 195 90 289 115 383 100 c 72 -12 70 -11 295 -101 c 297 -119 438 -146 592 -115 c 103 21 229 82 299 147 l 56 51 l 56 -51 c 70 -65 196 -126 299 -147 c 154 -31 295 -4 592 115 c 225 90 223 89 295 101 c 69 11 152 -3 250 -42 c 68 -27 77 -33 66 -47 c -11 -14 -11 -14 3 -3 c 14 10 36 4 134 -38 c 189 -81 247 -95 410 -95 c 176 0 332 31 517 102 l 66 25 l 59 -35 c 91 -55 233 -123 292 -141 c 30 -9 89 -16 132 -16 c 183 0 358 57 699 229 c 256 129 361 171 429 171 c 78 0 151 -67 151 -140 c 0 -48 -44 -134 -82 -162 c -45 -31 -123 -35 -166 -9 c -18 12 -38 32 -44 46 c -10 23 -8 29 20 55 c 37 33 38 37 16 68 c -42 60 -124 -13 -124 -111 c 0 -82 83 -165 189 -188 c 76 -16 144 -5 228 36 c 124 61 173 144 173 289 c 0 86 -21 138 -75 185 c -60 53 -130 81 -201 81 c -111 0 -204 -36 -503 -197 c -321 -173 -465 -231 -636 -254 c -112 -14 -185 2 -345 77 l -114 55 l 219 116 c 346 182 487 248 623 293 c 262 85 483 101 647 45 c 98 -33 271 -119 511 -252 c 376 -210 459 -242 653 -250 c 323 -13 640 104 884 327 c 93 85 86 98 -10 20 c -258 -210 -537 -298 -852 -269 c -189 17 -244 42 -621 274 c -350 216 -504 289 -667 317 c -135 23 -394 -17 -608 -92 c -135 -48 -244 -99 -525 -246 c -140 -73 -287 -147 -326 -164 l -71 -32 l -132 66 c -162 80 -208 90 -371 83 c -141 -5 -216 -25 -342 -88 l -77 -39 l -77 47 c -42 25 -108 60 -148 77 c -65 28 -80 31 -181 31 c -122 0 -138 -5 -415 -119 c -167 -68 -245 -89 -335 -90 c -122 0 -251 60 -292 136 c -27 51 -23 141 8 208 c 48 102 123 154 225 155 c 72 0 128 -31 159 -89 l 20 -37 l -43 -39 c -47 -44 -53 -74 -22 -108 c 34 -36 81 -30 123 17 c 73 81 73 178 1 282 c -85 124 -296 178 -464 120 c -105 -37 -215 -112 -263 -181 l -17 -24 l -17 24 c -48 69 -159 145 -259 179 c -62 20 -169 33 -214 25 z m -1500 -562 c 74 -23 152 -55 182 -76 c 20 -14 19 -15 -18 -34 c -174 -89 -404 -94 -664 -16 c -47 14 -88 29 -92 33 c -12 11 157 93 220 108 c 83 18 289 10 372 -15 z m 4256 17 c 54 -9 158 -55 243 -107 l 34 -20 l -69 -21 c -278 -82 -536 -61 -714 58 c -24 16 106 66 245 95 c 42 8 204 6 261 -5 z"/>
                                    </g>
                                </svg>
                            </div>
                            <div className={style.about__hero}>
                                {author.content[0].text[0]}
                            </div>
                            {author.content.map((item)=>
                                (item.id != 1 && item.id % 2 != 1 && item.id != 8 && item.id != 6)?
                                    <div className="" key={item.id}>
                                        <h3 className={style.first__title}>{item.title}</h3>
                                        
                                        {item.text.map((el)=>
                                            <p className={style.first__text}>
                                                {el}
                                            </p>
                                        )}
                                        
                                    </div>    
                                :''
                            )}
                            
                            
                        </Col>
                        <Col className={style.archive}>
                            <h3 className={style.archive__title}>{author.content[7].title}</h3>
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
                                    <h3>{author.content[3].title}</h3>
                                    <p>
                                        {author.texts[2]}
                                        {author.texts[2]}
                                        {author.texts[2]}
                                        {author.texts[2]}
                                    </p>
                                </Col>
                                <Col xs={6} className={style.doubleBlock__right}>
                                    <h3>{author.content[5].title}</h3>
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