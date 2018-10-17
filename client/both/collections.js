Creditor = new Mongo.Collection('credititem');
Creditor.attachSchema(new SimpleSchema({
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
