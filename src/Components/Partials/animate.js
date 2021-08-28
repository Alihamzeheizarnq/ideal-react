import { fadeIn } from 'react-animations';
import Radium from 'radium';


const styles = {
    bounce : {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
}
// bounceInLeft
// fadeIn
export default styles;