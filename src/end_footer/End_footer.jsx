import './End_footer.scss'

function End_footer() {
    return (
        <div className='end_footer'>
            <div className="end_footer_row_1">
                <p><i class="fa-regular fa-file"></i> PDF презентация</p>
                <p><i class="fa-solid fa-video"></i> Видео инструкция</p>
                <p>FAQ</p>
                <p style={{color:"blue"}}> <i class="fa-brands fa-youtube"></i> Мы на YouTube</p>
                <p>Политика конфиденциальности</p>
                <p>Лицензионное соглашение</p>
            </div>

            <div className="end_footer_row_2">
                <p>Настоящая Политика обработки персональных данных разработана в соответствии с Конституцией Российской Федерации, Трудовым кодексом Российской Федерации, Гражданским кодексом Российской Федерации, Федеральным законом от 27 июля 2006 года 149-ФЗ "Об информации, информационных технологиях и о защите информации"</p>
            </div>

            <div className="end_footer_row_3">
                <h4>Разработка платформы</h4>
            </div>
        </div>
    )
}

export default End_footer