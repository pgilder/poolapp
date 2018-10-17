
/*Router.route( 'index', {
  path: '/',
  template: 'Home',
  onBeforeAction: function(){
    Session.set( 'currentRoute', 'index' );
    this.next();
  }
});


Router.route('/additem', function () {
  this.render('additem');
});


Router.configure({
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  layoutTemplate: 'Home'
});
 */

 Router.route('/', function () {
   this.render('landing');
 });

 // when you navigate to "/one" automatically render the template named "One".
 Router.route('/login');

 // when you navigate to "/two" automatically render the template named "Two".
 Router.route('/signup');

 // when you navigate to "/two" automatically render the template named "Two".
 Router.route('/additem');

 // when you navigate to "/two" automatically render the template named "Two".
 Router.route('/settings');

 // when you navigate to "/two" automatically render the template named "Two".
 Router.route('/profile');

 // when you navigate to "/two" automatically render the template named "Two".
 Router.route('/edit-profile');

 // when you navigate to "/two" automatically render the template named "Two".
  Router.route('/creditProfile');

  // when you navigate to "/two" automatically render the template named "Two".
   Router.route('/recover-password');

   // when you navigate to "/two" automatically render the template named "Two".
    Router.route('/reset-password');


  // when you navigate to "/two" automatically render the template named "Two".
  Router.route('/landing');

Router.route('creditlist', {
   path: '/creditlist/:_id/edit',
   template: "creditlist",
   data: function() {
     return Creditor.findOne({ _id: this.params._id });
   }
 });

 // when you navigate to "/two" automatically render the template named "Two".
  Router.route('/dashboard');


/* this.route('credit-profile', {
         path: '/credit-profile/:_id',
         data: function() { return credititem.findOne(this.params._id); }
     });
*/
