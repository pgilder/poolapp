/*
*  Controller: Header
*  Template: /client/includes/_navbar.html
*/

/*
* Created
*/

Template.navbar.onCreated(function(){
  // Code to run when template is created goes here.
});

/*
* Rendered
*/

Template.navbar.onRendered(function() {
  // Code to run when template is rendered goes here.
});

/*
* Helpers
*/

Template.navbar.helpers({
  example: function(){
    // Code to run for helper function.
  }
});

/*
* Events
*/

Template.navbar.events({
  'click .logout': function(){
    Meteor.logout(function(error){
      if(error){
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Succesfully logged out!', 'success');
      }
    });
  }
});
