export default function routes($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    template: require('./templates/home.html'),
    controller: 'HomeController',
    controllerAs: 'vm'
  });
}
