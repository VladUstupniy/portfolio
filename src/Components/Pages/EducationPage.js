import {useState, useEffect} from 'react';
import '../../Css/PagesCss/Page.css';

const EducationPage = () => {
    const [isShowPage, setIsShowPage] = useState(false);
    useEffect(() => {
        setTimeout(() => setIsShowPage(true));
    }, []);
    return(
        <div className={`page Bg ${isShowPage ? 'pageShow' : 'pageUnshow'}`}>
            <div className='page__section'>
                <h2>Основное образование:</h2>
                <p>с 2023 по н.в. - Московский финансово-промышленный университет "Синергия", Москва</p>
                <p>Факультет - Информационные технологии и программирование</p>
                <p>Специальность - Разработчик мультимедийных приложений и игр</p>
                <p>На основном направлении изучаю язык программирования C#, концепции ООП, игровой движок Unity, 3D-моделирование, Sound-дизайн.</p>
            </div>
            <div className='page__section'>
                <h2>Дополнительное образование:</h2>
                <p>Принял участие в программе по повышению квалификации при поддержке Минцифр России - прошел базовый курс по языку программирования Python.</p>
            </div>
            <div className='page__section'>
                <h2>Самостоятельное развитие:</h2>
                <p>Самообучаюсь по видеоматериалам на Ютубе.</p>
                <p>Изучаю различные технологии на практике.</p>
                <p>При возникновении ошибок и трудностей не боюсь просить помощи на различных ресурсах и искать ответы на StackOverflow, GitHub, или других платформах для программистов и разработчиков.</p>
            </div>
            <div className='page__section'>
                <h2>Чему хочу научиться:</h2>
                <p>Разрабатывать игры для ПК на профессиональном уровне.</p>
                <p>Осуществлять функционал мульплеера и связь с базами данных.</p>
                <p>Создавать передовой функционал и игровые механики.</p>
            </div>
        </div>
    );
}

export default EducationPage;
