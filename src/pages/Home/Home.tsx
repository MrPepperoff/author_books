import { Carousel, Col, Container, Row } from "react-bootstrap";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import style from './Home.module.sass';
import { Link } from "react-router-dom";
import airImg from '../../assets/images/air.jpg';
import Book1Img from '../../assets/images/book/1.png';
import Book2Img from '../../assets/images/book/2.png';
import poster1Img from '../../assets/images/poster/1.png';
import poster2Img from '../../assets/images/poster/2.png';
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Home(){
    useEffect(() => {
        document.title = "Александр ПИТ | Главная";
    }, []);

    const carusels =[
        {
            id:1,
            img: poster1Img,
            link: '#poster1',
            public: true,
        },
        {
            id:2,
            img: poster2Img,
            link: '#poster2',
            public: true,
        },
        {
            id:3,
            img:'https://imgplaceholdr.com/1300x460/777/200/png?text=3&text_size=40',
            link: '#poster3',
            public: true,

        },
        {
            id:4,
            img: airImg,
            link: '#poster4',
            public: true
        },
        {
            id:5,
            img: 'https://imgplaceholdr.com/1300x460/777/200/png?text=5&text_size=40',
            link: '#poster5',
            public: true
        },
        {
            id:6,
            img: 'https://imgplaceholdr.com/1300x460/777/200/png?text=6&text_size=40',
            link: '#poster6',
            public: true
        },
        {
            id:7,
            img: 'https://imgplaceholdr.com/1300x460/777/200/png?text=7&text_size=40',
            link: '#poster7',
            public: true
        },
    ];
    const news =[
        {
            id: 1,
            img: Book2Img,
            date: '23.05.2026',
            title: 'Описание примера',
            text:`
В мире, где прошлое не умирает, а продолжает отравлять настоящее, граница между реальностью и страхом становится всё тоньше.\\
\\
После катастрофы, изменившей судьбы тысяч людей, зона отчуждения живёт по своим законам. Здесь время словно застыло, а тишина скрывает то, о чём лучше не знать. Разрушенные города, ржавые конструкции и забытые дороги хранят больше, чем просто воспоминания.  
\\
Главный герой отправляется туда, откуда многие не возвращаются — в самое сердце Чернобыля. Но его цель — не только выжить. Ему предстоит столкнуться с тайнами, которые десятилетиями оставались в тени, и сделать выбор, способный изменить не только его жизнь.  
\\
Что скрывается за пределами запретной зоны?  
И какую цену придётся заплатить за правду?

---
[Я.Книги](#new1_yandex)
[Литрес](#new1_litres)
[Я.Книги](#new1_yandex2)

`,
            public: true,
            link: '#new1',
        },
        {
            id: 2,
            img: null,
            date: '16.05.2026',
            title: 'Воздушный бой 2',
            text:`В литературном мире состоялось заметное событие — вышла новая книга, уже успевшая привлечь внимание читателей и критиков. Издание сочетает в себе оригинальный сюжет, глубокую проработку персонажей и актуальные темы, близкие современной аудитории.
                    По словам представителей издательства, работа над книгой велась на протяжении нескольких лет. Автор стремился создать произведение, которое не только увлекает, но и заставляет задуматься о важных жизненных вопросах. Особое внимание уделено атмосфере и стилю повествования, благодаря чему книга читается легко, но оставляет сильное впечатление.
                    Критики отмечают, что новинка может занять достойное место среди самых обсуждаемых релизов сезона. Читатели, в свою очередь, уже делятся первыми отзывами, подчеркивая динамичный сюжет и эмоциональную глубину.
                    Ожидается, что в ближайшее время книга появится в широком доступе как в печатном, так и в электронном формате, а также будет представлена на крупных литературных мероприятиях.`,
            public: true,
            link: null,
        },
        {
            id: 3,
            img: Book1Img,
            date: '07.05.2026',
            title: 'Воздушный бой',
            text:`Небо больше не принадлежит никому — ни людям, ни машинам, ни даже времени.

В эпоху, когда границы государств стерлись в дыму бесконечных конфликтов, в небе осталась только одна истина: выживает тот, кто быстрее принимает решение.

### Сюжет

Пилот-новичок попадает в элитное боевое подразделение, где каждый вылет — это не тренировка, а реальный шанс не вернуться обратно.

Ему предстоит столкнуться с:
- перегрузками, которые ломают тело и сознание  
- противниками, не знающими страха  
- и системой, где ошибка стоит жизни

Но главный враг окажется не в небе…

### Атмосфера

> "В воздухе нет укрытий. Есть только выбор: атаковать или исчезнуть."

Скорость, адреналин и постоянное ощущение границы между жизнью и падением.

### Темы

- Цена долга  
- Человеческие пределы  
- Технологии войны  
- Выбор между приказом и совестью

---
[Я.Книги](#new3_yandex)
[Литрес](#new3_litres)
[Я.Книги](#new3_yandex2)

`,
            public: true,
            link: '#new3',
        },
        {
            id: 4,
            img: airImg,
            date: '07.05.2026',
            title: 'Воздушный бой',
            text:`Небо больше не принадлежит никому — ни людям, ни машинам, ни даже времени.

В эпоху, когда границы государств стерлись в дыму бесконечных конфликтов, в небе осталась только одна истина: выживает тот, кто быстрее принимает решение.

### Сюжет

Пилот-новичок попадает в элитное боевое подразделение, где каждый вылет — это не тренировка, а реальный шанс не вернуться обратно.

Ему предстоит столкнуться с:
- перегрузками, которые ломают тело и сознание  
- противниками, не знающими страха  
- и системой, где ошибка стоит жизни

Но главный враг окажется не в небе…

---
`,
            public: true,
            link: 'null',
        },
    ];
    const soon = [
        {
            id: 1,
            img: Book2Img,
            link: '#soon1',
            dateSoon: '22.10.2027',
            date: '23.05.2026',
            title: 'Описание примера',
            text:`
Он отправится туда, откуда не возвращаются.
В место, где тишина обманчива, а каждая ошибка — последняя.
Зона не прощает. И она уже ждёт.`,
            public: true
        },
        {
            id: 2,
            img: airImg,
            link: '#soon2',
            dateSoon: null,
            date: '23.05.2026',
            title: 'Воздушный бой',
            text:`В литературном мире состоялось заметное событие — вышла новая книга, уже успевшая привлечь внимание читателей и критиков. Издание сочетает в себе оригинальный сюжет, глубокую проработку персонажей и актуальные темы, близкие современной аудитории.
                    По словам представителей издательства, работа над книгой велась на протяжении нескольких лет. Автор стремился создать произведение, которое не только увлекает, но и заставляет задуматься о важных жизненных вопросах. Особое внимание уделено атмосфере и стилю повествования, благодаря чему книга читается легко, но оставляет сильное впечатление.
                    Критики отмечают`,
            public: true
        },
    ];
    
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        
    
        const block = document.getElementById('home');
        if(block){
            block.classList.add(style.home_color);
        }

        const handleResize = () => setWidth(
            window.innerWidth
        );

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const hasPublicCarusel = carusels.some(item => item.public === true);
    const hasPublicNews = news.some(item => item.public === true);
    const hasPublicSoon = soon.some(item => item.public === true);
    return(
        <MainLayout className={`${style.home} ${style.home_color}`} id="home">
            {hasPublicCarusel && (
                <section className={style.hero}>
                    <div style={
                        width <= 578
                        ? ({
                            "--width": `${width}px`,
                            "--height": `calc(${width}px / 2.4)`
                            } as React.CSSProperties)
                        : undefined
                    }>
                        <Container>
                            <Carousel fade className={style.hero__carusel}>
                                {carusels.map((item)=>
                                    (item.public == true)?
                                    <Carousel.Item key={item.id} className={style.hero__carusel__item}>
                                        <Link to={item.link}  className={style.hero__carusel__link}>
                                            <img src={item.img} />
                                        </Link>
                                    </Carousel.Item>
                                    : undefined
                                )}
                            </Carousel>    
                        </Container>
                    </div>
                </section>    
            )}
            
            <section className={style.line}>
                <Container>
                    <Link to='#all_book' className={style.line__link}>Все книги</Link>
                </Container>
            </section>
            <Container>
                <Row>
                    <Col xs={12} md={8} className={style.news}>
                        <section className={style.authorNews}>
                            <div className={style.authorNews__container}>
                                <h1 className={style.authorNews__h1}>Новости</h1>
                                {(hasPublicNews)? 
                                    <ul className={style.authorNews__list}>
                                    {news.map((item)=>
                                        (item.public && (
                                            <div className={style.authorNews__item}>
                                                <div className={style.authorNews__item__title}>
                                                    <h2>
                                                        {item.title}    
                                                    </h2>
                                                </div>
                                                <div className={style.authorNews__item__date}>
                                                    <div>
                                                        {item.date}
                                                    </div>
                                                </div>
                                                <div className={style.authorNews__item__context}>
                                                    <ReactMarkdown>{item.text}</ReactMarkdown>
                                                </div>
                                                {item.link != null && (
                                                <div className={style.authorNews__item__btn}>
                                                    <a href={item.link}>Подробнее</a>
                                                </div>)}
                                                {item.img != null && (
                                                <div className={style.authorNews__item__img__wrap}>
                                                    <div  className={style.authorNews__item__img__bg} style={{ backgroundImage: `url(${item.img})` }}></div>
                                                    <div className={style.authorNews__item__img}>
                                                        <img src={item.img} alt={item.title} />
                                                    </div>
                                                </div>)
                                                }
                                            </div>
                                        ))
                                    )}
                                    </ul>
                                :
                                <p>Нет новостей!</p>} 
                            </div>
                        </section>
                    </Col>
                    <Col xs={12} md={4} className={style.soon}>
                        <h4 className={style.soon__title}>Скоро</h4>
                        {(hasPublicSoon)?
                        <ul className={style.soon__list}>
                            {soon.map((item)=>
                                item.public &&(
                                    <li className={style.soon__card} key={item.id}>
                                        <Link to={item.link}>
                                            {item.dateSoon &&(
                                               <div className={style.soon__dateSoon}>Выходит в {item.dateSoon}</div>
                                            )}
                                            <div className={style.soon__image__wrap}>
                                                <div className={style.soon__image__bg} style={{ backgroundImage: `url(${item.img})` }}></div>
                                                <img src={item.img} alt={item.title} className={style.soon__image}/>    
                                            </div>
                                            <div className={style.soon__content}>
                                                <div className={style.soon__date}>{item.date}</div>
                                                <div className={style.soon__title}>
                                                    {item.title}
                                                </div>
                                                <div className={style.soon__text}>
                                                    {item.text}
                                                </div>
                                                <a href={item.link} className={style.soon__button}>Читать далее</a>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                        : 
                        <p className={style.soon__empty}>
                            Здесь скоро появятся новые книги и анонсы
                        </p>
                        }
                        
                        
                    </Col>
                </Row>
                
            </Container>
            
        </MainLayout>
    )
}