/*Template.additem.helpers({
    'credititem': function(){
        return Creditor.find();
    }
 }); */


 Template.additemsingle.events({
 	'click .submit': function() {
 		Creditor.insert({
 			creditorname: $('.creditor_name').val(),
      creditoraccountnumber: $('.creditor_account_number').val(),
      creditorbalance: $('.creditor_balance').val(),
      creditorstatus: $('.creditor_status').val(),
      creditoragency: $('.creditor_agency').val(),
      icon: $('.icon_status').val(),
      reportdate: $('.report_date').val(),
      createdAt: new Date()
 		});
      Router.go('creditProfile');
 	}
 });
