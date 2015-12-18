angular.module('csgo_bombtimer.controllers', [])
  .controller("BarcodeCtrl", function($scope, $cordovaBarcodeScanner) {
    console.log('barcode');
    $scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            alert(imageData.text);
            console.log("Barcode Format -> " + imageData.format);
            console.log("Cancelled -> " + imageData.cancelled);
        }, function(error) {
            console.log("An error happened -> " + error);
        });
    };
 
  })
  .controller("IndexCtrl", function($scope) {
    console.log('index');
  })
  .controller("CountdownCtrl", function($scope, $interval) {
    console.log('countdown');
    $scope.startCountdown = function() {
      $scope.countDown = 4;    
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
 
});