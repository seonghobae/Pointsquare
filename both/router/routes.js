Router.route('/', {
    name: 'home',
    template: 'home',
    waitOn: function() {
        if (Meteor.user()) {
            console.log("logged");
            return [Meteor.subscribe('user_info'), Meteor.subscribe('knowledge_network')];
        } else {
            console.log("not logged");
            return Meteor.subscribe('knowledge_network');;
        };
    }
});

Router.route('/unit/:_name', {
    name: 'unitPage',
    data: function() {
        return Units.findOne({
            name: this.params._name
        });
    }
});
Router.route('/concept/:_name', {
    name: 'conceptPage',
    data: function() {
        return Concepts.findOne({
            name: this.params._name
        });
    }
});

//Router.route('/dashboard', {
//  name: 'dashboard'
//});
//
//Router.route('/items/new', {
//  name: 'items.new'
//});
//
//Router.plugin('ensureSignedIn', {
//  only: ['dashboard']
//});
