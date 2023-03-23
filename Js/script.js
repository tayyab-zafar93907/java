function nameError(){
    Toastify({
        text: "Please Enter Full Name",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(290deg, #6b70ff 40%,#d611e8 75%)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
      return;
    }
    function emailError(){
        Toastify({
            text: 'Use "user@gmail.com"',
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(290deg, #6b70ff 40%,#d611e8 75%)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
          return;
        }
        function passwordError(){
            Toastify({
                text: 'Use "123456" as a Password',
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(290deg, #6b70ff 40%,#d611e8 75%)",
                },
                onClick: function(){} // Callback after click
              }).showToast();
              return;
            }
            function Thankyou(){
                Toastify({
                    text: 'Thank You',
                    duration: 3000,
                    newWindow: true,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "center", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                      background: "linear-gradient(290deg, #6b70ff 40%,#d611e8 75%)",
                    },
                    onClick: function(){} // Callback after click
                  }).showToast();
                  return;
                }
                function cityError(){
                    Toastify({
                        text: 'Please Enter Your City',
                        duration: 3000,
                        newWindow: true,
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: "center", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                          background: "linear-gradient(290deg, #6b70ff 40%,#d611e8 75%)",
                        },
                        onClick: function(){} // Callback after click
                      }).showToast();
                      return;
                    }
                
function Login(){
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("inputEmail").value;
        email = email.toLowerCase()
    let password = document.getElementById("inputPassword").value;
    if(!fullName || fullName.length < 3){
        nameError()
        return;
    }
    if(email !== "user@gmail.com"){
        emailError()
        return;
    }
    if(password !== "123456"){
        passwordError()
        return;
    }
    window.location.href = 'home.html'
}

// let newName = document.getElementById("fullName").value;
// document.getElementById("wellcome").innerHTML = 'WELL COME' + newName ;

let cities = ["Faislabad", "Lahore", "Karachi", "Islamabad", "Burewala ", "Sheikhupura", "Kashmir"]



function printCity (){
    document.getElementById("Output").innerHTML = "";
    for(let i = 0; i < cities.length ; i++){
        let num = i + 1;
            document.getElementById("Output").innerHTML += num + ')' + cities[i] + '<br>' 
        }
    }

    // add city---
    function addCity(){
        let newCity = document.getElementById("Input").value;
        
        
        if(!newCity || newCity.length < 3){
            cityError();
            return;
        }
       
            let cityFound = false;
            for (i = 0; i < cities.length; i++) {
                if (cities[i] === newCity) {
                    cityFound = true;
                    document.getElementById("Output").innerHTML = '<span style="color:red">"'  + newCity  + '"</span>' +  ' is already in  list'
                }
            }
        
            if (cityFound === false) {
                cities.push(newCity);
                document.getElementById("Output").innerHTML = '<span style="color:green">"' + newCity  + '"</span>' + ' has been successfully added into the list'
            }
        }
        document.getElementById("Clear").onclick = function(){
            document.getElementById("Output").innerHTML = ""
        }
        document.getElementById("clear").onclick = function(){
          document.getElementById("Output").innerHTML = ""
      }