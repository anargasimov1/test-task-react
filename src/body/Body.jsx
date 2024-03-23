import Body_left from '../body_left/Body_left';
import Body_rigth from '../body_rigth/Body_rigth';
import Body_top from '../body_top/Body_top';
import './Body.scss';

function Body() {
    return (
        <>
            <Body_top />
            <div className="bodys">
                <Body_left />
                <Body_rigth />
            </div>
        </>
    )
}

export default Body