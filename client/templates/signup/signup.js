Template.signup.onRendered(function(){
  $('#application-signup').validate({
    rules: {
      name: {
        required: true,
        minlength: 3
      },
      emailAddress: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6
      },
      phone: {
        required: true,
        minlength: 9
      }
    },
    messages: {
      emailAddress: {
        required: "Please enter your email address to sign up.",
        email: "Please enter a valid email address."
      },
      password: {
        required: "Please enter a password to sign up.",
        minlength: "Please use at least six characters."
      },
      fullName: {
        required: "Please enter your name to sign up.",
        minlength: "Co'mon, tell us who you are!"
      },
      phoneNumber: {
        required: "Please enter your phone number to sign up.",
        minlength: "Please use at least 9 characters."
      }
    },
    submitHandler: function(){
      var user = {
        name: $('[name="fullName"]').val(),
        phone: $('[name="phoneNumber"]').val(),
        email: $('[name="emailAddress"]').val(),
        password: $('[name="password"]').val()
      };

      Accounts.createUser( {
        email: user.email,
        password: user.password,
        phone: user.phone,
        name: user.name,
        profile: {
          customer: {
            userId: "",
            name: "",
            streetAddress: "",
            secondaryAddress: "",
            city: "",
            state: "",
            zipCode: "",
            telephone: ""
          }
        }
      }, function( error, userId ){
        if( error ) {
          Bert.alert(error.reason, 'danger');
        } else {
          Bert.alert('Welcome to Credit Bee!', 'success');
        }
      });
    }
  });
});

Template.signup.events({
  'submit form': function(e){
    // Prevent form from submitting.
    e.preventDefault();
  }
});
