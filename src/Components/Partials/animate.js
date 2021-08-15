import { bounceInLeft } from 'react-animations';
import Radium from 'radium';


const styles = {
    bounce : {
        animation: 'x 1s',
        animationName: Radium.keyframes(bounceInLeft, 'bounceInLeft')
    }
}

export default styles;