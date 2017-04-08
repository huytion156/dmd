angular.module('starter.controllers',[])

.controller('HomeController', function($scope, $state, $interval) {
  
  $scope.progressval = 0;
  $scope.stopinterval = null;
  
  $scope.updateProgressbar = function()
  {
    startprogress();
    
  }
  
  $scope.edit = function() {
      $state.go('editinfo');
  }

  function httpGet(theUrl)
  {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
      xmlHttp.send( null );
      return xmlHttp.responseText;
  }
  
  function startprogress()
  {
    $scope.name1 = "Nguyễn Văn A";
    $scope.progressval1 = 0.0;
    $scope.progressval2 = 0.0;
    $scope.st1 = "12:00";
    $scope.speed1 = "5";
    $scope.st1 = "12:00  1-1-2100";
    $scope.et1 = "16:00  1-1-2100";
    //$scope.progressval1 = 70; //set progressval1 to test 
    $scope.url1 = "http://172.29.192.79/info";
    //$scope.t0 = new Datetime()/1000;
    $scope.date = new Date();
    $scope.t0 =  $scope.date.getTime() / 1000;
    	
    		
    if ($scope.stopinterval)
    {
      $interval.cancel($scope.stopinterval);
    }
    
    $scope.stopinterval = $interval(function() {
          //$scope.progressval = $scope.progressval + 0.1;
          //$scope.progressval1 = $scope.progressval.toFixed(1);
          var obj = JSON.parse(httpGet($scope.url1))
          console.log(obj);
          //$scope.st1 = Date(1000*($scope.t0 + parseInt(obj.st))).toLocaleString();
          //$scope.et1 = Date(1000*($scope.t0 + parseInt(obj.et))).toLocaleString();
          $scope.st1 = obj.st;
          $scope.et1 = obj.et;
          $scope.speed1 = obj.speed;
          $scope.progressval1 = obj.percent;
           if( $scope.progressval >= 100 ) {
                 $interval.cancel($scope.stopinterval);
                 
                 
                 return;
            }
     }, 10000);
  }

  startprogress();
  
})



.controller('LoginController', function($scope, $state) {
    $scope.data = {};
    
    $scope.login = function() {
        console.log("LOGIN user: " + $scope.data.username + " - PW: " + $scope.data.password);
        if ($scope.data.username == "aaa") {
        	if ($scope.data.password == "123") {
        		$state.go('home');
        	}
        }
    }	  
})

.controller('EditController', function($scope, $state) {
  function httpGet(theUrl)
  {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
      xmlHttp.send( null );
      return xmlHttp.responseText;
  }


});



