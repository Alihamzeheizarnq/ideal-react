import instance from "./Ideal"

function login(email , password , callback) {

      instance.post('login' , {email , password , device_name : 'mobile'}).then((res) => {
            localStorage.setItem('token', res.data.token);
            callback()
        }).catch(err => {
            console.log(err.respons)
        });

}
function CheckUser(callback) {

    instance.get('user').then((res) => {
          callback(res.data)
      }).catch(err => {
          console.log(err.respons)
      });

}
export default { login , CheckUser };