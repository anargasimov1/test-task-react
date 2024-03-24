import { useState } from 'react';
import Body_buttom from '../Body_buttom/Body_buttom';
import './Body_rigth.scss';

function Body_rigth() {

    const [toggle, setToggle] = useState(false);
    const [count, setCount] = useState(1);

    const modal = () => setToggle(true)


    function countMinus() {
        if (count >= 1)
            setCount(count - 1)
        if (count <= 1)
            setToggle(false)
        if (count == 1)
            setCount(1)
    }


    return (
        <>
            <div className="body_rigth">
                <div className="body_head">
                    <div className="frame">

                        <div className="frame1">
                            <div className="frame1_1">
                                <p className='sale'>166 534.00 цена без скидки</p>
                                <p className='price'>122 566 ₽ <p> -15%</p></p>
                            </div>


                            <div className="frame_2">
                                <p className='p1'>12 штук в уп.</p>
                                <p><i class="fa-solid fa-toggle-on"></i></p>
                                <p>Заказ упаковкой</p>
                            </div>


                            <div className="frame_3">
                                <div className="frame_3_1">
                                    <p className='info'>Завтра</p>
                                    <p className='info_1'>Доставка</p>
                                </div>
                                <div className="frame3_2">
                                    <p className='info'>7 шт.</p>
                                    <p className='info_1'>Тарасовка</p>
                                </div>
                                <div className="frame_3_3">
                                    <p className='info'>7 шт.</p>
                                    <p className='info_1'>Тарасовка</p>
                                </div>
                            </div>

                            <div className="frame_4">
                                <div style={{ display: toggle ? "flex" : "none" }} className='new_btn'>
                                    <button onClick={countMinus} type='button'><i class="fa-solid fa-minus"></i></button>
                                    {
                                        count
                                    }
                                    <button onClick={() => setCount(count + 1)} type='button'><i class="fa-solid fa-plus"></i></button>
                                </div>
                                <button style={{ display: toggle ? "none" : "block" }} className='to_sale' onClick={modal} type='button'><i className="fa-solid fa-cart-shopping"></i> в корзину</button>
                                <p className='icon'><i className="fa-regular fa-heart"></i></p>
                            </div>
                        </div>
                    </div>
                    <div className="rigth_next">
                        <p className='rigth_next_tittle'>Характеристики</p>
                        <div className="rigth_next_frame">

                            <div className="rigth_next_frame_1">
                                <div className="rigth_next_frame_1_1">
                                    <h3>ELC00696</h3>
                                    <p className='article'>Код поставщика</p>
                                </div>
                                <div className="rigth_next_frame_1_2">
                                    <h3>ELC0200000696</h3>
                                    <p className='article'>Артикул</p>
                                </div>
                            </div>

                            <div className="rigth_next_frame_2">
                                <div className="rigth_next_frame_2_1">
                                    <h3>Electric used</h3>
                                    <p className='article'>Бренд</p>
                                </div>
                                <div className="rigth_next_frame_2_2">
                                    <h3>ELC00696</h3>
                                    <p className='article'>Код ЕТМ</p>
                                </div>
                            </div>

                            <div className="rigth_next_frame_3">
                                <div className="rigth_next_frame_3_1">
                                    <h3>Electric used</h3>
                                    <p className='article'>Бренд</p>
                                </div>
                                <div className="rigth_next_frame_3_2">
                                    <h3>ELC00696</h3>
                                    <p className='article'>Серия</p>
                                </div>
                            </div>

                            <div className="rigth_next_frame_4">
                                <div className="rigth_next_frame_4_1">
                                    <h3>ELC0200000696</h3>
                                    <p className='article'>Код производителя</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Body_buttom />
            </div>
        </>

    )
}

export default Body_rigth