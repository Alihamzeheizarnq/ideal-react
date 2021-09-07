
import React from "react";
class Test extends React.PureComponent {


    state = {
        name :' alihamzeei'
    }
    constructor(props){
        super(props);
        console.log('constructor' , arguments)

    }

    static getDerivedStateFromProps(){

        console.log('getDerivedStateFromProps' , arguments)
    }



    render() {
        console.log('render' , arguments)

        return (
            <>
                <div>alihamzehi</div>
            </>
        )
    }
    componentDidMount(){
        console.log('componentDidMount' , arguments)

    }

}

export default Test;