import instance from "./Ideal"

function login(email , password , callback) {

      instance.post('login' , {email , password , device_name : 'mobile'}).then((res) => {
            localStorage.setItem('token', res.data.token);
            callback()
        });

}
function CheckUser(success , erro) {

    instance.get('user').then((res) => {
        success(res.data)
      }).catch(err => {
        erro(err.response)
      });

}
export default { login , CheckUser };