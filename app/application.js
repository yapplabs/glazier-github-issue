import Resolver from 'resolver';

var App = Ember.Application.create({
  modulePrefix: 'app',
  rootElement: '#card',
  Resolver: Resolver
});

App.Router.map(function(){
  this.route('disabled');
});

App.deferReadiness();
requireModule('templates');

export default App;
