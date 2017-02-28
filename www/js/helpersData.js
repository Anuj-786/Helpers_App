    $(document).ready(function () {
        //event handler for submit button
        $("#btnSubmit").click(function () {
            //call the authenticate function
            authenticate();
            categories();
        });
    });

    //authenticate function to make ajax call
    function authenticate() {
        var userName = $("#username").val();
        var password = $("#password").val();
        var flag = false;
        $.get( "http://helpers.pe/test/Services%20for%20App/userlogin.php", function( data ) {
            for (var i = 0; i < data.length; i++) {
                if (userName==data[i].user_mail && password == data[i].user_password) {

                    var email = data[i].user_mail;
                    console.log(email);
                    flag = true;
                }
                if(flag) { 
                    window.location = "categories.html";
                }
                else {
                    alert("Your Username or password is wrong !");
                    break;
                }

            }

        });        
    }

    function carpenterData() {
        $.get( "http://www.helpers.pe/test/Services%20for%20App/helpersServices.php", function( data ) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].categoria =='ELECTRICIDAD') {

                   var crow = document.createElement("tr");
                
                   var cdataIcon = document.createElement('td');
                   cdataIcon.className ="cicons"
                   cdataIcon.innerHTML = '<i class="material-icons">person_pin</i>';

                   var cdataName = document.createElement('td');
                   cdataName.className = "cnames";
                   cdataName.innerHTML = data[i].name;

                   var cdataRating = document.createElement('td');
                   cdataRating.className = "crating";
                   cdataRating.innerHTML = '<i class="material-icons">star_rate</i>';

                   crow.appendChild(cdataIcon);
                   crow.appendChild(cdataName);
                   //crow.appendChild(cdataRating);
                   
                   document.getElementById("Carpenter_data").appendChild(crow);


                  

                    // var helperIcon = document.createElement("BUTTON");
                    // helperIcon.innerHTML = '<i class="material-icons">person_pin</i>';
                    // var appendIcon = document.getElementById("helpers_icon").appendChild(helperIcon);

                    // var helperName = document.createElement("P");
                    // var nameNode = document.createTextNode(data[i].name);
                    // helperName.appendChild(nameNode);
                    // document.getElementById("helpers_name").appendChild(helperName);
                }   
            }
        })

    }
