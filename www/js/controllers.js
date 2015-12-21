angular.module('csgo_bombtimer.controllers', [])
  .controller("BarcodeCtrl", function($scope, $cordovaBarcodeScanner, $state, $localStorage, socket) {

    $scope.$storage = $localStorage;

    socket.on('connect',function(){
      $scope.connected = true;
      console.log('socket connected');
    });

    $scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            $scope.$storage.room_id = imageData.text;
            $state.go('tab.countdown');
          
        }, function(error) {
            console.log("An error happened -> " + error);
        });
    };
 
  })
  .controller("IndexCtrl", function($scope) {
    console.log('index');
  })
  .controller("CountdownCtrl", function($scope, $interval, $localStorage, socket) {
    $scope.$storage = $localStorage;
    $scope.message = '';

    $scope.startCountdown = function(time) {
      $scope.countDown = time;    
      var interval = $interval(function(){
        if ($scope.countDown > 0) {
          $scope.countDown--;
        }
        else {
          $interval.cancel(interval);
          console.log('Cancelou');
        }
      },1000);
    };

    socket.on('bomb-status', function (data) {
      $scope.message = data.message;
      $scope.startCountdown(40);
    });

    
 
});