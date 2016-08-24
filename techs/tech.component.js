angular
  .module('ngApp')
  .component('fountainTech', {
    templateUrl: 'techs/tech.html',
    bindings: {
      tech: '<'
    }
  });
