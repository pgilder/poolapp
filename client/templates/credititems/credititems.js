Template.listgroup.helpers({
    'credititem': function(){
        return Creditor.find();
    }
});

/*
Template.listgroup('fromNow', function(date) {
  if (date)
    return moment(date).fromNow(true);
});
 */
