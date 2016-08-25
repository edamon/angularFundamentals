angular
  .module('sn-techs')
  .component('fountainTech', {
    templateUrl: 'techs/tech.html',
    bindings: {
      tech: '<'
    }
  });
