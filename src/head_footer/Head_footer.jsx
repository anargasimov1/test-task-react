import './Head_footer.scss';

function Head_footer() {
    return (
        <div className="head_footer">
            <div className="head_footer_left">
                <img src={require('../images/6096286.jpeg')} alt="logo" />
                <div className="head_footer_left_1">
                    <h3>8 800 841-95-95</h3>
                    <p>Служба поддержки</p>
                </div>

                <div className="head_footer_left_2">
                    <h3>support@sport.ru</h3>
                    <p>Служба поддержки</p>
                </div>
            </div>

            <div className="head_footer_rigth">
                <h3>Вакансии</h3>
                <h3>Блог</h3>
                <h3>Акции</h3>
                <p>Предложить  идею</p>
            </div>
        </div>
    )
}

export default Head_footer