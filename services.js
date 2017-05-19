/*app.config(["AppName",function(AppName){
	console.log("this is config :" +AppName)
	
}])*/

app.run(["AppName","AppVersion", function(AppName,AppVersion){
	console.log("this is run:" +AppName)
	console.log("this is run: - value:" +AppVersion)
}])


app.provider("myProvider", function(){


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

})

app.factory("CustomFactory", function(){
	return "this is my custom factory"
})

app.constant("AppName", "Angular service");
app.value("AppVersion","1.0.0.0")