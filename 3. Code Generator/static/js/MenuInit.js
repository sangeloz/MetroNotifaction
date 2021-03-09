$(document).ready(function(){

	$.MetroMenu( 
		{
			animation: "fadeInLeft", 
			position: "bottom", 
			withtooltip: false,
			closeonclick: false,
			escclose: false, 
			items:[
				{   name: "Calendar",
					icon: "static/img/calendar.png"
				},
				{   name: "Office",
					icon: "static/img/office.png"
				},
				{   name: "Mailing",
					icon: "static/img/mail.png"					
				},
				{   name: "Adobe Suit",
					icon: "static/img/ps.png"
				},
				{   name: "Options",
					icon: "static/img/gear.png"
				}]
		}
	);


});
