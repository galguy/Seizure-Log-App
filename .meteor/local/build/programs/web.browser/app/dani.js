(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// dani.js                                                             //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Seizers = new Mongo.Collection("seizers");                             // 1
                                                                       //
if (Meteor.isClient) {                                                 // 3
                                                                       //
	Template.register.events({                                            // 5
		'submit form': function (event) {                                    // 6
			event.preventDefault();                                             // 7
			var emailVar = event.target.registerEmail.value;                    // 8
			var passwordVar = event.target.registerPassword.value;              // 9
			Accounts.createUser({                                               // 10
				email: emailVar,                                                   // 11
				password: passwordVar                                              // 12
			});                                                                 //
		}                                                                    //
	});                                                                   //
                                                                       //
	Template.login.events({                                               // 17
		'submit form': function (event) {                                    // 18
			event.preventDefault();                                             // 19
			var emailVar = event.target.loginEmail.value;                       // 20
			var passwordVar = event.target.loginPassword.value;                 // 21
			Meteor.loginWithPassword(emailVar, passwordVar);                    // 22
			console.log("Form submitted.");                                     // 23
		}                                                                    //
	});                                                                   //
}                                                                      //
                                                                       //
if (Meteor.isServer) {                                                 // 29
	Meteor.startup(function () {                                          // 30
		// code to run on server at startup                                  //
	});                                                                   //
}                                                                      //
/////////////////////////////////////////////////////////////////////////

}).call(this);
