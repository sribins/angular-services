
var app = angular.module("myApp",[]);

/*app.provider("myProvider", function(){


		var myObj = {};
		myObj.name="srikanth";
		myObj.lastName="anth";
		myObj.getName = function(){
			return this.name;

		} 
		this.$get = function(){
		return myObj;
	}
})

app.service("CustomerService" , function(){
	this.getCustomerDetails = function(){
		return "this will return CustomerDetails .."
	}

})*/

/*app.run(["CustomerService", function(CustomerService){
	console.log("my custom-service :" + CustomerService.getCustomerDetails())
	}])

app.config(["myProviderProvider", function(myProvider){
	console.log("my config-provider service :" + myProvider.$get().name)
	console.log("my config-provider service :" + myProvider.$get().getName())
}])*/
 app.controller("myController",["$scope","myProvider","CustomerService","CustomFactory","AppName","AppVersion",function($scope,myProvider,CustomerService,CustomFactory,AppName,AppVersion){
 	console.log("My controller-provider :" +myProvider.name )
 	console.log("My service :" + CustomerService.getCustomerDetails())
 	 $scope.customerMessage = CustomerService.getCustomerDetails()
 	 $scope.CustomFactorymessage= CustomFactory
 	 console.log(AppName)
 	 console.log(AppVersion)
 	 //$scope.Constant= Appname
 }])