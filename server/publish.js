// publishing the timetable
Meteor.publish('timetable', function(){
    return Timetable.find();
});


// publishing the notes
Meteor.publish('notes', function(){
    return Notes.find();
});