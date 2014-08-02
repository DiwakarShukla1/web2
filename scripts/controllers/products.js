'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('ProductsCtrl', function ($scope,$http) {
    	
    	 var transition_timeout = 40;
  
		  $('.title_items').click(function() {
		    
		    // alert("hi");
		    var current = $(this).next().find('li');
		    
		    $(this).toggleClass('active');
		    current.toggleClass('visible');

		    
		    
		    if ($(this).hasClass('active')) {
		      for(var i = 0; i <= current.length; i++ ) {
		        $(current[i]).css('transition-delay', transition_timeout * i + 'ms');
		      }
		    }
		    else {
		      for(var i = current.length, j = -1; i >= 0; i--, j++) {
		        $(current[i]).css('transition-delay', transition_timeout * j + 'ms');
		      }
		    }
		  
		  });

		  $("#cbp-vm input[name='type']").click(function(){
		  		var current = $('.title_items').next().find('li')

		  		$(current).toggleClass('active');
		    	current.toggleClass('visible');

		    	

		    	$scope.$evalAsync(
                        function( $scope ) {
 
                            console.log( "$evalAsync" );
 							$scope.q = $('input:radio[name=type]:checked').val();
                        }
                    );
		  });

		  

		  (function() {

				var container = document.getElementById( 'cbp-vm' ),
					optionSwitch = Array.prototype.slice.call( container.querySelectorAll( 'div.cbp-vm-options > a' ) );

				function init() {
					optionSwitch.forEach( function( el, i ) {
						el.addEventListener( 'click', function( ev ) {
							ev.preventDefault();
							_switch( this );
						}, false );
					} );
				}

				function _switch( opt ) {
					// remove other view classes and any any selected option
					optionSwitch.forEach(function(el) { 
						classie.remove( container, el.getAttribute( 'data-view' ) );
						classie.remove( el, 'cbp-vm-selected' );
					});
					// add the view class for this option
					classie.add( container, opt.getAttribute( 'data-view' ) );
					// this option stays selected
					classie.add( opt, 'cbp-vm-selected' );
				}

				init();

			})();

	


			$http.get("data/Product_All.json").
		          success(function (data, status, headers, config) {
		              // deferred.resolve(data);
		              // console.log(data);
		              // return data.data;
		              $scope.data = data;
		          }).
		          error(function (data, status, headers, config) {
		              // deferred.reject(data);
		              alert("There is error occured while fetching data");
		              return null;
          		});


		    $scope.q = 'All';

		    $scope.isActive = function(product) {


		    		var q = $scope.q;
		    		


		    		if($scope.q ==="All"){
		    			console.log(q);
		    			return true;
		    		}
		    		else if($scope.q === product.Type){
		    			console.log(product.Type)
		   	   			return true;
		   			}
		   			else{
		   				return false;
		   			}
     		}

     		$scope.toggle = false;

     		$scope.toggleB = function(){
     			$scope.toggle = !$scope.toggle;
     		}


  });
