import card from 'card';
import Issue from 'app/models/issue';

var ApplicationRoute = Ember.Route.extend({
  model: function() {
    var repositoryName = card.data.repositoryName,
      number = card.data.intent.data.number;

    return Issue.findByNumber(repositoryName, number);
  }
});

export default ApplicationRoute;
