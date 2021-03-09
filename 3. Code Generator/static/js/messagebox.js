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

	$scope.checkPlaceHolder = function(){
		if($scope.input == "0" || $scope.input == "select"){
			return true;
		}else{
			return false;
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

	$scope.AddIcon = function(Icon){
		if(Icon.length == 0){
			$("#txtFontIcon").focus();
			return;
		}

		$scope.icons = "";
		$("#txtFontIcon").focus();

		var Content = "<li class='lblIcon'><a><i class='fa "+ Icon +"'></i>"+ Icon +"</a></li>";
		$("#iconArray").append(Content);
	}

	$scope.AddSelectOption = function(Icon){
		if(Icon.length == 0){
			$("#txtOptions").focus();
			return;
		}

		$scope.icons = "";
		$("#txtOptions").focus();

		var Content = "<li class='lblOption'><a>"+ Icon +"</a></li>";
		$("#optionArray").append(Content);
	}

	$scope.AddSelectValues = function(Value){
		if(Value.length == 0){
			$("#txtValue").focus();
			return;
		}

		$scope.values = "";
		$("#txtValue").focus();

		var Content = "<li class='lblValue'><a>"+ Value +"</a></li>";
		$("#valuesArray").append(Content);
	}




	$("body").on("keyup","#txtButtons",function(e){
		if( e.keyCode == 13){
			$scope.AddButton( $(this).val() );
			$scope.buttons = "";
			$scope.$apply();
		}
	});

	$("body").on("keyup","#txtFontIcon",function(e){
		if( e.keyCode == 13){
			$scope.AddIcon( $(this).val() );
			$scope.icons = "";
			$scope.$apply();
		}
	});

	$("body").on("keyup","#txtOptions",function(e){
		if( e.keyCode == 13){
			$scope.AddSelectOption( $(this).val() );
			$scope.options = "";
			$scope.$apply();
		}
	});

	$("body").on("keyup","#txtValue",function(e){
		if( e.keyCode == 13){
			$scope.AddSelectValues( $(this).val() );
			$scope.values = "";
			$scope.$apply();
		}
	});




	$("body").on("click", "#buttonArray a, #iconArray a, #optionArray a",function(){

		$(this).parent().remove();

	});


// newColor
	
	$scope.newColor = "6D1D99";
	$scope.firstColor = true;
	$scope.callback     = "0";

	$scope.title             = 'Are you sure?';
    $scope.content           = 'Are you sure that you want to do that?';
    $scope.normalbutton      = '232323';
    $scope.activebutton      = '6D1D99';
    $scope.buttons           = '';
    $scope.icons             = '';
    $scope.defaultbutton     = '';
    $scope.sound             = 'true';
    $scope.input             = '0';
    $scope.placeholder       = '';
    $scope.maxlength         = '1000';
    $scope.showcounter       = 'true';
    $scope.options           = '';
    $scope.values            = '';
    $scope.soundpath         = '';
    $scope.backgroundcolor   = '000000';
    $scope.backgroundcontent = '232323';
    $scope.blockpage         = 'true';
    $scope.opacity           = '0.7';
    $scope.colortime         = '1500';
    $scope.colors            = '';
    $scope.timeout           = '0';

		


	$scope.CloseAll = function(){
		$(".mnMmBackScreen").remove();
		$(".mnMsgBox").remove();

		document.body.style.overflow = "visible";
	}



	$scope.TestCode = function(){

		$scope.GetCode();

		var SmallBox = $scope.codeneeded;

		eval( SmallBox );

	}


	$scope.GetCode = function(){

		$scope.codeneeded = "";


//$.nl2br
		var CodeNeeded = "$.metroMessageBox({\n";

		
			if( $scope.title.length >0 ){
				CodeNeeded += '  title: "'+ $scope.title +'",\n';
			}

			if( $scope.content.length >0 ){
				CodeNeeded += '  content: "'+ $.nl2br( $scope.content ) +'",\n';
			}

			if( $scope.normalbutton != "232323" ){
				CodeNeeded += '  normalbutton: "#'+ $scope.normalbutton +'",\n';
			}

			if( $scope.activebutton != "6D1D99" ){
				CodeNeeded += '  activebutton: "#'+ $scope.activebutton +'",\n';
			}

			if( $(".lblButton").length>0 ){

				var Buttons = "";
				var First = true;
				$(".lblButton").each(function(){
					if(First){
						First = false;
						Buttons += '"' + $(this).text() + '"';
					}else{
						Buttons += ',"'+$(this).text()+'"';
					}
				});

				CodeNeeded += '  buttons:['+ Buttons +'],\n';
			}

			if( $(".lblIcon").length>0 ){

				var icons = "";
				var First = true;
				$(".lblIcon").each(function(){
					if(First){
						First = false;
						icons += '"' + $(this).text() + '"';
					}else{
						icons += ',"'+$(this).text()+'"';
					}
				});

				CodeNeeded += '  icons:['+ icons +'],\n';
			}

			if( $scope.defaultbutton.length >0 ){
				CodeNeeded += '  defaultbutton: '+ $scope.defaultbutton +',\n';
			}

			if( $scope.sound != "true" ){
				CodeNeeded += '  sound: '+ $scope.sound +',\n';
			}

			if( $scope.input != 0 ){
				CodeNeeded += '  input: "'+ $scope.input +'",\n';
			}

			if( $scope.placeholder.length > 0 ){
				CodeNeeded += '  placeholder: "'+ $scope.placeholder +'",\n';
			}

			if( $scope.maxlength != "1000" && $scope.maxlength.length != 0){
				CodeNeeded += '  maxlength: '+ $scope.maxlength +',\n';
			}

			if( $scope.showcounter != "true" ){
				CodeNeeded += '  showcounter: '+ $scope.showcounter +',\n';
			}

			if( $scope.options.length > 0 ){
				CodeNeeded += '  options: ['+ $scope.options +'],\n';
			}

			if( $(".lblOption").length>0 ){

				var option = "";
				var First  = true;
				$(".lblOption").each(function(){
					if(First){
						First = false;
						option += '"' + $(this).text() + '"';
					}else{
						option += ',"'+$(this).text()+'"';
					}
				});

				CodeNeeded += '  options:['+ option +'],\n';
			}


			if( $(".lblValue").length>0 ){

				var value = "";
				var First  = true;
				$(".lblValue").each(function(){
					if(First){
						First = false;
						value += '"' + $(this).text() + '"';
					}else{
						value += ',"'+$(this).text()+'"';
					}
				});

				CodeNeeded += '  values:['+ value +'],\n';
			}



			if( $scope.soundpath.length > 0 ){
				CodeNeeded += '  soundpath: "'+ $scope.soundpath +'",\n';
			}

			if( $scope.backgroundcolor != "000000" ){
				CodeNeeded += '  backgroundcolor: "#'+ $scope.backgroundcolor +'",\n';
			}

			if( $scope.backgroundcontent != "232323" ){
				CodeNeeded += '  backgroundcontent: "#'+ $scope.backgroundcontent +'",\n';
			}

			if( $scope.blockpage != "true" ){
				CodeNeeded += '  blockpage: '+ $scope.blockpage +',\n';
			}

			if( $scope.opacity != "0.7" ){
				CodeNeeded += '  opacity: '+ $scope.opacity +',\n';
			}

			if( $scope.colortime !="1500" ){
				CodeNeeded += '  colortime: '+ $scope.colortime +',\n';
			}

			if( $scope.colors.length > 0 ){
				CodeNeeded += '  colors: ['+ $scope.colors +'],\n';
			}

			if( $scope.timeout != "0" ){
				CodeNeeded += '  timeout: '+ $scope.timeout +',\n';
			}






		if( $scope.callback == "0"){
			CodeNeeded += "});"	
		}else{
			CodeNeeded += "},function( action, buttom, value, selectedText ){\n";
			CodeNeeded += "  //Do something here\n";
			CodeNeeded += "  alert( action + ' ' + buttom + ' ' + value + ' ' + selectedText );\n";
			CodeNeeded += "});";

		}

		

		$scope.codeneeded = CodeNeeded;

	}





});
