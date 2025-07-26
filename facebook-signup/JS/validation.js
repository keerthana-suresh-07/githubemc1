$(document).ready(function() {
  $('#signup').validate({
    rules:{
      fname: {
        required: true,
        minlength: 5,

      },
      Sname: {
        required: true,
        minlength: 5,
      },
      Mobile: {
       required: true,
       minlength: 10, 
      },
      password: {
        required: true,
        minlength: 8,
      },
      day: {
        required: true,

      },
      month: {
        required: true,
      },
      year: {
        required: true,
      },
      gender: {
        required: true,
      },
      

    },
    messages: {
        fname:{
            required: "Please enter the first name",
            minlength: "Please enter minimum 5 letters for first name"
 
        }

    }
  })
  
});