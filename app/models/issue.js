import card from 'card';

var Issue = {
  /*
    @public

    Fetch an issue

    @method findByNumber
    @param  repositoryName {String}, number {Number}
    @returns {Ember.RSVP.Promise}
  */
  findByNumber: function(repositoryName, number) {
    var service;

    if (card.data.user) {
      service = card.consumers.authenticatedGithubApi;
    } else {
      service = card.consumers.unauthenticatedGithubApi;
    }

    return service.request("ajax", {
      url: '/repos/' + repositoryName + '/issues/' + number,
      dataType: 'json'
    });
  }
};

export default Issue;
