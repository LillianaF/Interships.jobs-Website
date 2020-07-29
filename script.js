function dropDown() {
  var x = document.getElementsByClassName('expand');
  if (x.style.display == 'none') {
    x.style.display = 'block';
  } else{
    x.style.display = 'none';
  }
}

function postToGoogle() {
                var field1 = $("#name").val();
                var field2 = $("#description").val();
                var field3 = $("#person").val();
                var field4 = $("#contact").val();

				if(field1 == ""){
					alert('Please Fill In Your Company Name');
					document.getElementById("name").focus();
					return false;
				}
				if(field2 == ""){
					alert('Please Describe Your Company');
					document.getElementById("description").focus();
					return false;
				}
				if(field3 == ""){
					alert('Please Fill In Your Contact Name');
					document.getElementById("person").focus();
					return false;
				}
        if(field4 == ""){
					alert('Please Fill In Your Contact Email');
					document.getElementById("contact").focus();
					return false;
				}

                $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSfFRDBlJv4Dz7x3w9vL477Izq7D7f_eapi1-TVCXh86Bh3fzw/formResponse?",
					data: {"entry.151408002": field1, "entry.519686267": field2, "entry.258138801": field3, "entry.1693006279": field4},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
					{
					},
					error: function(x, y, z)
						{
							/*$('#success-msg').show();
							$('#form').hide();*/
              alert('Your Response has been Recorded');
              document.getElementById('form').reset();

						}
                });
				return false;
            }

