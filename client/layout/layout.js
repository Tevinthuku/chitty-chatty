Template.layout.rendered = function() {
    
    // the side nav
    $('.button-collapse').sideNav({
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
  
  
}

// the layout navigation
Template.layout.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});