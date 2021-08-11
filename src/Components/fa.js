

import SimpleReactValidator from 'simple-react-validator';

    SimpleReactValidator.addLocale('FA', {
        accepted: 'Hab SoSlI’ Quch!',
        email: 'فرمت ایمیل صحیح نمیباشد',
        required : 'پر کردن  فیلد :attribute الزامی میباشد'
        });


    let validator = new SimpleReactValidator({locale : 'FA'});


    export default validator;