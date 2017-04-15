var firstApp = angular.module('calendarApp', ['ui.calendar']);
firstApp.controller('MyController', function ($scope) {
		var events = [
			{ title: "U-8 Training", start: new Date(2016, 5, 10) }, //August 10
      { title: "U-12 Training", start: new Date(2016, 5, 20, 19, 30), end: new Date(2016, 5, 21, 07, 30), allDay:false }, //day and time
      
		];

		$scope.eventSources = [events];
		$scope.calOptions = {
			editable: true,
			header : {
				left: 'prev',
				center: 'title',
				right: 'next'
			}
		};

	});

// var firstApp = angular.module('calendarApp', []);
// 	firstApp.controller('MainController', function($scope){
// 		$scope.first = 'Some';
// 		$scope.last = 'One';
// 		$scope.heading = 'Message: ';
// 		$scope.updateMessage = function() {
// 			$scope.message = 'Hello ' + $scope.first + ' ' + $scope.last + '!';
// 		};
// 	});

// var app = angular.module('calendarApp', ['ui.calendar']);
// app.controller('MyController', function($scope) {
//     /* config object */
//     $scope.uiConfig = {
//       calendar:{
//         height: 450,
//         editable: true,
//         header:{
//           left: 'month basicWeek basicDay agendaWeek agendaDay',
//           center: 'title',
//           right: 'today prev,next'
//         },
//         dayClick: $scope.alertEventOnClick,
//         eventDrop: $scope.alertOnDrop,
//         eventResize: $scope.alertOnResize
//       }
//     };
// });