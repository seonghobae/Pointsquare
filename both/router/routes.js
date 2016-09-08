FlowRouter.notFound = {
    action: function() {
      BlazeLayout.render("mainLayout", {
          main: "notFound"
      });
    }
};

FlowRouter.route('/', {
    name: 'home',
    action: function(params) {
        BlazeLayout.render("mainLayout", {
            main: "home"
        });
    }
});

FlowRouter.route('/exam/:nodeId', {
    name: 'examPage',
    action: function(params) {
        BlazeLayout.render("mainLayout", {
            main: "examPage"
        });
    }
});

FlowRouter.route('/create/exam', {
    name: 'examCreate',
    action: function(params) {
        BlazeLayout.render("mainLayout", {
            main: "createExam"
        });
    }
});

FlowRouter.route('/exam/:nodeId/edit', {
    name: 'examEdit',
    action: function(params) {
        BlazeLayout.render("mainLayout", {
            main: "examEdit"
        });
    }
});
// WARNING: END OF NEW ROUTES

FlowRouter.route('/search', {
    name: 'search',
    action: function(params) {
        BlazeLayout.render("mainLayout", {
            main: "search"
        });
    }
});

FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action: function(params) {
        BlazeLayout.render("mainLayout", {
            main: "dashboard"
        });
    }
});

FlowRouter.route('/content/:nodeId', {
    name: 'unitPage',
    action: function(params) {
        BlazeLayout.render("mainLayout", {
            main: "unitPage"
        });
    }
});

FlowRouter.route('/content/:nodeId/edit', {
    name: 'unitEdit',
    action: function(params) {
        BlazeLayout.render("mainLayout", {
            main: "unitEdit"
        });
    }
});

// WARNING: Concept page currently does not exist
// FlowRouter.route('/concept/:nodeId', {
//     name: 'conceptPage',
//     action: function(params) {
//         BlazeLayout.render("mainLayout", {
//             main: "conceptPage"
//         });
//     }
// });

FlowRouter.route('/concept/:nodeId/edit', {
    name: 'conceptEdit',
    action: function(params) {
        BlazeLayout.render("mainLayout", {
            main: "conceptEdit"
        });
    }
});

FlowRouter.route('/create/concept', {
    name: 'conceptCreate',
    action: function(params) {
        BlazeLayout.render("mainLayout", {
            main: "createConcept"
        });
    }
});

FlowRouter.route('/create/content', {
    name: 'contentCreate',
    action: function(params) {
        BlazeLayout.render("mainLayout", {
            main: "createUnit"
        });
    }
});

FlowRouter.route('/goal', {
    name: 'goalPage',
    action: function(params) {
        BlazeLayout.render("mainLayout", {
            main: "goalPage"
        });
    }
});
