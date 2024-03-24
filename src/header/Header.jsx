import './Header.scss'
import Navbar from '../navbar/Navbar'

function Header() {
    return (
        <>
            <div className='navbar_left'>
                <div className='navbar_logo'><i class="fa-brands fa-joomla"></i> compo</div>
                <button className='btn' type='button'><i class="fa-solid fa-bars"></i> Меню</button>
                <input className='navbar_input' type='search' />
                <i class="fa-regular fa-bell"></i>
                <i class="fa-solid fa-grip-lines-vertical"></i>
                <i class="fa-regular fa-heart heart"></i>
                <button className='navbar_btn' type='button'><i class="fa-solid fa-cart-shopping"></i> 144 235<i class="fa-solid fa-ruble-sign"></i></button>
                <div className='frame_user'>
                    <p> <img src={require('../images/IMG-20240113-WA0025 (1).jpg')} alt="" /> Ермаков Е.</p>
                </div>
            </div>
            <Navbar/>
        </>
    )
}

export default Header