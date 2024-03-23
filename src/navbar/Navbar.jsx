import './Navbar.scss';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar_list'>
                <ul type='none' className='navbar_list_left'>
                    <li>Мои заказы</li>
                    <li>Сотрудники</li>
                    <li>Шаблоны заказов</li>
                    <li>Обращения</li>
                </ul>
            </div>

            <div className="navbar_rigth">
                <p className='navbar_rigth_messenger'><i class="fa-regular fa-comment-dots"></i><span><b>Ваш менеджер</b></span></p>
                <p className='navbar_rigth_aksiya'><i class="fa-solid fa-percent"></i><span><b>Акции</b></span></p>
                <p className='navbar_rigth_bloq'><b>Блог</b></p>
            </div>
        </div>
    )
}

export default Navbar