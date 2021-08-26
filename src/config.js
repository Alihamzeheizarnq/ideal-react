

const ideal = {
    url : 'http://localhost:8000',
}



const ckeditor = {

    ckfinder:{

        uploadUrl: ideal.url+"/api/v1/upload/images/ckeditor?command=QuickUpload&type=Files&responseType=json",
 
    },
    fontFamily: {
        options: [
            'IRANSansfanum',
        ],
    },

    toolbar: {
        items: [
            'heading', '|',
            'fontfamily', 'fontsize', '|',
            'alignment', '|',
            'fontColor', 'fontBackgroundColor', '|',
            'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
            'link', '|',
            'outdent', 'indent', '|',
            'bulletedList', 'numberedList', 'todoList', '|',
            'code', 'codeBlock', '|',
            'insertTable', '|',
            'uploadImage', 'blockQuote', '|',
            'sourceEditing' , '|',

            'undo', 'redo',
            
        ],
        shouldNotGroupWhenFull: true
    },
    image: {
        toolbar: [
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side',
            '|',
            'toggleImageCaption',
            'imageTextAlternative'
        ]
    },
    language: 'fa'

};

export {
    ckeditor,
    ideal
}