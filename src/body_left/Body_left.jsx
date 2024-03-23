import './Body_left.scss';

function Body_left() {
    return (
        <div className='body_left'>
            <div className="image">
                <img src={require('../images/3ed7253831e622f0517f371778f9d89b.png')} alt="image" />
            </div>
            <div className="images">
                <button><i class="fa-solid fa-chevron-left"></i></button>
                <img src={require('../images/6fa22d07ab04b2e8fa5632eef95349d2.png')} alt="image" />
                <img src={require('../images/a30f75a7baf5473ed69eb315493cb154.png')} alt="image" />
                <img src={require('../images/b5e091f81dd952745bdf7fbd2749d792.png')} alt="image" />
                <img src={require('../images/da4ff00670137301808fb25720ed81e6.png')} alt="image" />
                <button><i class="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
    )
}

export default Body_left