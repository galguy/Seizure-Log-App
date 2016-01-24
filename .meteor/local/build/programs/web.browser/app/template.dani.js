(function(){
Template.body.addContent((function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n    ", HTML.P("You're logged in."), "\n" ];
  }, function() {
    return [ "\n    ", Spacebars.include(view.lookupTemplate("register")), "\n    ", Spacebars.include(view.lookupTemplate("login")), "\n" ];
  });
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("login");
Template["login"] = new Template("Template.login", (function() {
  var view = this;
  return HTML.Raw('<form>\n        <input type="email" name="loginEmail">\n        <input type="password" name="loginPassword">\n        <input type="submit" value="Login">\n    </form>');
}));

}).call(this);
