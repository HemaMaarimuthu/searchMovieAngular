var app = angular.module('myApp', []);

app.controller('movieSearhCtrl', function($scope, $http) {
    
 $scope.moviename="";     
 $scope.getMovies = function(){
    console.log($scope.moviename);
    var url = "http://www.omdbapi.com/?s="+ $scope.moviename ;    
    $http.get(url)
    .then(function(response) {
        console.log(response.data);
        if (response.data.Response === "True"){
            $scope.results = response.data.Search;
            console.log($scope.results);        
        }else{
            var trElements = angular.element( document.querySelectorAll( '.dynTr' ) );
            console.log(trElements);
            trElements.empty(); 
            $scope.issue=response.data.Error;
            alert(response.data.Error);       
        }
         
      });
    };
    
  });