/*Template.credititem.events({
  'submit form': function(e, t) {
    Router.go('credit-profile');
  },
}); */

Template.creditlist.helpers({
    'credititem': function(){
        return Creditor.find();
    }
});

 Template.creditlist.events({
   'click .toggle-checked'() {
     // Set the checked property to the opposite of its current value
     Creditor.update(this._id, {
       $set: { checked: ! this.checked },
     });
   },
   'click .delete'() {
     Creditor.remove(this._id);
   },
 });

  Template.deleteitems.helpers({
      'credititem': function(){
          return Creditor.find();
      }
  });

   Template.deleteitems.events({
     'click .toggle-checked'() {
       // Set the checked property to the opposite of its current value
       Creditor.update(this._id, {
         $set: { checked: ! this.checked },
       });
     },
     'click .delete'() {
       Creditor.remove(this._id);
     },
   });
