import { useState } from 'react';
import Body_buttom from '../Body_buttom/Body_buttom';
import './Body_rigth.scss';

function Body_rigth() {

const [count, setCount] = useState(false);

function toggle(){
    setCount(true)
}
console.log(count)


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
                                <button className='to_sale' onClick={toggle} type='button'><i className="fa-solid fa-cart-shopping"></i> в корзину</button>
                                <p className='icon'><i className="fa-regular fa-heart"></i></p>
                            </div>
                        </div>
                    </div>
                    <div className="rigth_next">
                        <p className='rigth_next_tittle'>Характеристики</p>
                        <div className="rigth_next_frame">

                            <div className="rigth_next_frame_1">
                                <div className="rigth_next_frame_1_1">
                                    <p>ELC00696</p>
                                    <p>Код поставщика</p>
                                </div>
                                <div className="rigth_next_frame_1_2">
                                    <p>ELC0200000696</p>
                                    <p>Артикул</p>
                                </div>
                            </div>

                            <div className="rigth_next_frame_2">
                                <div className="rigth_next_frame_2_1">
                                    <p>Electric used</p>
                                    <p>Бренд</p>
                                </div>
                                <div className="rigth_next_frame_2_2">
                                    <p>ELC00696</p>
                                    <p>Код ЕТМ</p>
                                </div>
                            </div>

                            <div className="rigth_next_frame_3">
                                <div className="rigth_next_frame_3_1">
                                    <p>Electric used</p>
                                    <p>Бренд</p>
                                </div>
                                <div className="rigth_next_frame_3_2">
                                    <p>ELC00696</p>
                                    <p>Серия</p>
                                </div>
                            </div>

                            <div className="rigth_next_frame_4">
                                <div className="rigth_next_frame_4_1">
                                    <p>ELC0200000696</p>
                                    <p>Код производителя</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Body_buttom/>
            </div>
        </>

    )
}

export default Body_rigth