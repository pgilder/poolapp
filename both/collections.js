Creditor = new Meteor.Collection('credititem');
/*
Creditor.insert({ creditorname: "Wells Fargo Home Loans", creditoraccountnumber: "53247246452", creditorbalance: "$312,178", creditorstatus: "Charge Off", date: "Jan 12, 2017" });
/*Creditor.attachSchema(new SimpleSchema({
  creditorname: {
    type: String,
    label: "Creditor Name",
    max: 200,
    autoform: {
      'label-type': 'stacked'
    }
  },
  creditorbalance: {
    type: String,
    label: "Balance",
    max: 200,
    autoform: {
      'label-type': 'stacked'
    }
  },
  creditorstatus: {
    type: String,
    label: "Debt Status",
    max: 200,
    autoform: {
      'label-type': 'stacked'
    }
  },
  creditoraccountnumber: {
    type: String,
    label: "Account Number",
    autoform: {
      max: 50,
      'label-type': 'stacked'
    }
  },
  submitletter: {
    type: Boolean,
    label: "Submit Letter?",
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  },
  published: {
    type: Boolean,
    label: "Active",
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  },
  "credititemsId": {
  type: String,
  label: "Customer User ID"
}
}));
*/
