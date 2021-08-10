import instance from "./Ideal"


function Login(username , password ) {
    console.log(username , password)

        instance.post('login').then((res) => {
            console.log(res)

        }).catch(err => {
            console.log(err.respons)
        });


}

export default Login;