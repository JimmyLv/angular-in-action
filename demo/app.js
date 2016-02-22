angular.module('app', [])
	.controller('TestCtrl', function($scope, $rootScope) {
		$scope.fname = 'jimmy';
		$scope.sayHi = function(){
			alert("Hi, " + $scope.fname)
		};
		console.log('0. rootScope id inside contorller: ', $rootScope);
		console.log('1. scope id inside contorller: ', $scope)
	})
	.directive('testDirective', function() {
		return {
			scope: {},
			controller: function($scope) {
				this.name3 = 'just name3 inside directive controller.';
				console.log('2. scope in contorller inside directive: ', $scope)
			},
			controllerAs: 'vm',
			bindToController: {
				name: '@',
				fname2: '='
			},
			link: function(scope, $elem, $attr, $ctrl) {
				console.log('3. scope in link inside directive:', scope);
				console.log('element:', $elem);
				console.log('attr:', $attr);
				console.log('ctrl:', $ctrl);
				console.log('scope.vm:', scope.vm);
				console.log('ctrl === scope.vm:', $ctrl === scope.vm);

				console.log('scope.name:', scope.name, $ctrl.name);
				console.log('scope.fname2:', scope.fname2, $ctrl.fname2)
			},
			template: ['<span>ng-click: </span><button ng-click="vm.fname2=vm.fname2+1">{{vm.name}} + 1</button>',
				'<div>in directive: {{vm.fname2}}</div>',
				'<div>in directive: {{vm.name3}}</div>'
			].join('')
		}
	})
	.directive('simpleDirective', function() {
		return {
			controller: function($scope) {
				$scope.name4 = 'just name4 inside another directive which shared scpoe with outside controller.';
				console.log('simple directive: ', $scope.$id, $scope.$parent.$id, $scope)
			},
			template: 'in simple Directive: {{name4}}'
		}
	});
angular.module('app');