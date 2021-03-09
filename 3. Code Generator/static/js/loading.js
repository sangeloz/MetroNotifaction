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

	$scope.AddText = function(Label){
		if(Label.length == 0){
			$("#txtTexts").focus();
			return;
		}

		$scope.texts = "";
		$("#txtTexts").focus();

		var Content = "<li class='lblText'><a>"+ Label +"</a></li>";
		$("#textArray").append(Content);
	}



	$("body").on("keyup","#txtTexts",function(e){

		if( e.keyCode == 13){
			$scope.AddText( $(this).val() );
			$scope.texts = "";
			$scope.$apply();
		}

	});

	$("body").on("click", "#textArray a",function(){

		$(this).parent().remove();

	});


// newColor
	
	$scope.newColor = "6D1D99";
	$scope.firstColor = true;
	$scope.callback     = "0";


	$scope.title             =  "Loading Things...";
    $scope.content           =  "Please wait until process finish";
    $scope.fa                =  "fa-refresh";
    $scope.blockpage         =  "true";
    $scope.timeout           =  "0";
    $scope.texts             =  "";
    $scope.backgroundcolor   =  "000000";
    $scope.backgroundcontent =  "232323";
    $scope.opacity           =  0.7;
    $scope.colortime         =  1500;
    $scope.colors            =  [];


	$scope.CloseAll = function(){
		$.metroLoadingKill();
	}



	$scope.TestCode = function(){

		$scope.GetCode();

		var SmallBox = $scope.codeneeded;

		eval( SmallBox );

	}


	$scope.GetCode = function(){

		$scope.codeneeded = "";

		if ( $(".lblText").length > 0 ){
			$scope.backgroundcontent = $scope.backgroundcolor;
			$scope.opacity = 1;
		}


		var CodeNeeded = "$.metroLoading({\n";


			if( $scope.title.length >0 && $(".lblText").length == 0){
				CodeNeeded += '  title: "'+ $scope.title +'",\n';
			}

			if( $scope.content.length >0 && $(".lblText").length == 0 ){
				CodeNeeded += '  content:"'+ $.nl2br($scope.content) +'",\n';
			}

			if( $scope.fa != "0" && $(".lblText").length == 0 ){
				CodeNeeded += '  fa: "'+ $scope.fa +'",\n';
			}

			if( $scope.blockpage != "true" ){
				CodeNeeded += '  blockpage: '+ $scope.blockpage +',\n';
			}

			if( $scope.timeout != "0" ){
				CodeNeeded += '  timeout:'+ $scope.timeout +',\n';
			}

			if( $scope.backgroundcolor != "000000" ){
				CodeNeeded += '  backgroundcolor: "#'+ $scope.backgroundcolor +'",\n';
			}

			if( $scope.backgroundcontent != "232323" ){
				CodeNeeded += '  backgroundcontent: "#'+ $scope.backgroundcontent +'",\n';
			}

			if( $scope.opacity != "0.7" ){
				CodeNeeded += '  opacity:'+ $scope.opacity +',\n';
			}

			if( $scope.colortime != "1500" ){
				CodeNeeded += '  colortime:'+ $scope.colortime +',\n';
			}

			if( $scope.colors.length > 0 ){
				CodeNeeded += '  colors:['+ $scope.colors +'],\n';
			}



			if( $(".lblText").length>0 ){

				var Texts = "";
				var First = true;
				$(".lblText").each(function(){
					if(First){
						First = false;
						Texts += '"' + $(this).text() + '"';
					}else{
						Texts += ',"'+$(this).text()+'"';
					}
				});

				CodeNeeded += '  texts:['+ Texts +'],\n';
			}



		if( $scope.callback == "0"){
			CodeNeeded += "});"	
		}else{
			CodeNeeded += "},function(action, button){\n";
			CodeNeeded += "  //Do something here\n";
			CodeNeeded += "  alert( action );\n";
			CodeNeeded += "});";

		}

		

		$scope.codeneeded = CodeNeeded;

	}





});
