// SETUP VARIABLES
// ==========================================================
		// name
		var name;
		var phoneNum;
		var email;
		var time;

var articleCounter = 0;

// FUNCTIONS
// ==========================================================

function runQuery(){


		var name = $('#name').val().trim();
		

		// Num Results
		var phoneNum = $("#phoneNum").val();

		// Start Year
		var email = $('#email').val().trim();

		var time = $('#time').val();


					articleCounter++;

					var wellSection = $("<div>");
					wellSection.addClass('well');
					wellSection.attr('id', 'articleWell-' + articleCounter)
					$('#wellSection').append(wellSection);
				

		

					$("#articleWell-"+ articleCounter).append('<h5>' + name + "</h5>");
					$("#articleWell-"+ articleCounter).append('<h5>' + phoneNum + "</h5>");
					$("#articleWell-"+ articleCounter).append('<h5>' + email + "</h5>");
					$("#articleWell-"+ articleCounter).append('<h5>' + time + "</h5>");

					
	
}

// METHODS
// ==========================================================
	
	// On Click button associated with the Search Button
	$('#runSearch').on('click', function(){

		articleCounter++;
		
		$("#wellSection").empty();

		// name
		name = $('#name').val().trim();

		phoneNum = $("#phoneNum").val();


		email = $('#email').val().trim();

		time = $('#time').val().trim();


		runQuery();

		// This line allows us to take advantage of the HTML "submit" property. This way we can hit enter on the keyboard and it registers the search (in addition to clicks).
		return false;
	});	

// This button clears the top articles section
// $('#clearAll').on('click', function(){
// 	articleCounter = 0;
// 	$("#wellSection").empty();

// });
