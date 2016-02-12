// onlogin and onlogout functions
if(Meteor.isClient) {
    
    // logout page
    Accounts.onLogout(function() {
        Router.go('login')
    });  
    
    Accounts.onLogin(function() {
         Router.go('timetable'); 
    });
    
}

// router ya login

Router.route('/login');

// main route
Router.route('/',{
    name: "timetable",
    template:"timetable",
    fastRender: true
});

// the layout
Router.configure({
    layoutTemplate: 'layout'
});

// the update timetable route


Router.route('/timeupdate/:_id',{
    
    name: 'timeupdate',
    template: 'timeupdate',
    
    subscriptions: function() {
    // returning a subscription handle or an array of subscription handles
    // adds them to the wait list.
    var currentPatient = this.params._id;
    return Meteor.subscribe('timetable', currentPatient);
  },
    data: function(){
        var currentPatient = this.params._id;
        return Timetable.findOne({ _id: currentPatient});
    }
});

// the timetable create route

Router.route('/time');

//  notes create

Router.route('/notescreate');


// the view notes route

Router.route('/viewnotes');


// the update notes route

Router.route('/updatenotes/:_id',{
    
    name: 'updatenotes',
    template: 'updatenotes',
    
    subscriptions: function() {
    // returning a subscription handle or an array of subscription handles
    // adds them to the wait list.
    var currentPatient = this.params._id;
    return Meteor.subscribe('notes', currentPatient);
  },
    data: function(){
        var currentPatient = this.params._id;
        return Notes.findOne({ _id: currentPatient});
    }
});