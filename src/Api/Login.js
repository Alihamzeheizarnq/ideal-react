import instance from "./Ideal"

function login(email , password , callback) {

      instance.post('login' , {email , password , device_name : 'mobile'}).then((res) => {
            callback(res.data.token)
        });

}
function CheckUser(success , erro) {

    instance.get('user').then((res) => {
        success(res.data)
      }).catch(err => {
        erro()
      });

}
export default { login , CheckUser };