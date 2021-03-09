var generatorApp = angular.module('generatorApp', []);

generatorApp.controller('pageCtrl', function ($scope) {
  
	jQuery.nl2br = function(varTest){
	    return varTest.replace(/(\r\n|\n\r|\r|\n)/g, "<br>");
	};

	$(".onlynumbers").keydown(function (e) {
      // Allow: backspace, delete, tab, escape, enter and .
      
      if(e.keyCode == 109){
        $(this).val("");
        $(this).focus();
      }


      if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190,110]) !== -1 ||
           // Allow: Ctrl+A
          (e.keyCode == 65 && e.ctrlKey === true) || 
           // Allow: home, end, left, right
          (e.keyCode >= 35 && e.keyCode <= 39)) {
               // let it happen, don't do anything
               return;
      }

      // Ensure that it is a number and stop the keypress
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
          e.preventDefault();
      }
  });


	$scope.NoFA = function(){
		$scope.fa = "0";
	}
	$scope.NoImg = function(){
		$scope.icon = "0";
	}

	$scope.AddColor = function(){
		if($scope.firstColor){
			$scope.colors += '"#'+ $scope.newColor +'"';	
			$scope.firstColor = false;
		}else{
			$scope.colors += ',"#'+ $scope.newColor +'"';	
		}
		
	}

	$scope.AddButton = function(Label){
		if(Label.length == 0){
			$("#txtButtons").focus();
			return;
		}

		$scope.buttons = "";
		$("#txtButtons").focus();

		var Content = "<li class='lblButton'><a>"+ Label +"</a></li>";
		$("#buttonArray").append(Content);


	}

	$("body").on("keyup","#txtButtons",function(e){

		if( e.keyCode == 13){
			$scope.AddButton( $(this).val() );
			$scope.buttons = "";
			$scope.$apply();
		}

	});

	$("body").on("click", "#buttonArray a",function(){

		$(this).parent().remove();

	});


	$scope.newColor = "6D1D99";
	$scope.firstColor = true;


	$scope.position          = "1";
	$scope.title             = "Title";
	$scope.content           = "Some content";
	$scope.iframe            = "";
	$scope.iframecache       = "1";
	$scope.loadingmessage    = "";
	$scope.width             = "";
	$scope.fa                = "1";
	$scope.faloading         = "fa-refresh";
	$scope.img               = "0";
	$scope.shadow            = "1";
	$scope.backgroundcontent = "662d91";
	$scope.colortime         = "1500";
	$scope.colors            = "";
	$scope.timeout           = "0";
	$scope.blocked           = "0";






	$scope.CloseAll = function(){
		$.sidePanelKill();
	}



	$scope.TestCode = function(){

		$scope.GetCode();

		var SmallBox = $scope.codeneeded;

		eval( SmallBox );

	}


	$scope.GetCode = function(){

		$scope.codeneeded = "";



		var CodeNeeded = "$.metroSidePanel({\n";

			if($scope.position != "1"){
				CodeNeeded += '   position:'+ $scope.position +',\n';
			}

			if( $scope.title.length > 0 && $scope.iframe.length == 0 ){
				CodeNeeded += '   title: "'+ $scope.title +'",\n';
			}

			if( $scope.content.length > 0 && $scope.iframe.length == 0 ){
				CodeNeeded += '   content: "'+ $.nl2br( $scope.content ) +'",\n';
			}

			if( $scope.iframe.length > 0 ){
				CodeNeeded += '   iframe: "'+ $scope.iframe +'",\n';
			}

			if( $scope.iframecache != "1" ){
				CodeNeeded += '   iframecache: false,\n';
			}

			if( $scope.loadingmessage.length > 0 ){
				CodeNeeded += '   loadingmessage: "'+ $scope.loadingmessage +'",\n';
			}

			if( $scope.width.length > 0 ){
				CodeNeeded += '   width:'+ $scope.width +',\n';
			}

			if( $scope.fa != "0" ){
				CodeNeeded += '   fa: "fa-star-o",\n';
			}

			if( $scope.faloading != "fa-refresh" ){
				CodeNeeded += '   faloading: "'+ $scope.faloading +'",\n';
			}

			if( $scope.img != "0" ){
				CodeNeeded += '   img: "images/mountain_biking.png",\n';
			}

			if( $scope.shadow != "1" ){
				CodeNeeded += '   shadow: false,\n';
			}

			if( $scope.backgroundcontent != "662d91" ){
				CodeNeeded += '   backgroundcontent: "#'+ $scope.backgroundcontent +'",\n';
			}

			if( $scope.colortime !="1500"){
				CodeNeeded += '   colortime:'+ $scope.colortime +',\n';
			}

			if( $scope.colors.length >0 ){
				CodeNeeded += '   colors: ['+ $scope.colors +'],\n';
			}

			if( $scope.timeout !="0" ){
				CodeNeeded += '   timeout:'+ $scope.timeout +',\n';
			}

			if( $scope.blocked  != "0"){
				CodeNeeded += '   blocked:true,\n';
			}


		CodeNeeded += "});"	

		// if( $scope.callback == "0"){
		// 	CodeNeeded += "});"	
		// }else{
		// 	CodeNeeded += "},function(action, button){\n";
		// 	CodeNeeded += "//Do something here\n\n";
		// 	CodeNeeded += "alert(action + ' ' + button);\n";
		// 	CodeNeeded += "});";

		// }

		

		$scope.codeneeded = CodeNeeded;

	}





});
