function validateForm() {
	event.preventDefault();
    var x = document.forms['form']["dname"].value;
    var y = document.forms['form']["dsubject"].value;
    var z = document.forms['form']["dmessage"].value;
    if (x == "" || y == "" || z == "") {
        document.getElementById("mess").innerHTML = "Do not leave any fields empty! All required.";
        return false;
    } else {
        var xhttp = new XMLHttpRequest();
		xhttp.open("POST","/f",true);
		s = xhttp.send('{"name":"' + x + '","subject":"' + y + '","msg":"' + z + '"}')
		z.value = "";
		y.value = "";
        document.getElementById("mess").innerHTML = "Hi " + x + ", your message has been sent!";
        x.value = "";
    }
}

var x = document.getElementById("form");
var createform = document.createElement('form'); 
createform.setAttribute("name", "form")
createform.setAttribute("action", "");
createform.setAttribute("method", "post");
x.appendChild(createform);

var heading = document.createElement('h2');
heading.innerHTML = "Contact Us!";
createform.appendChild(heading);

var line = document.createElement('hr'); 
createform.appendChild(line);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var namelabel = document.createElement('label');
namelabel.innerHTML = "Your Name : "; 
createform.appendChild(namelabel);

var inputelement = document.createElement('input');
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dname");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var sublabel = document.createElement('label');
sublabel.innerHTML = "Subject : ";
createform.appendChild(sublabel);

var subelement = document.createElement('input');
subelement.setAttribute("type", "text");
subelement.setAttribute("name", "dsubject");
createform.appendChild(subelement);

var subbreak = document.createElement('br');
createform.appendChild(subbreak);

var messagelabel = document.createElement('label'); 
messagelabel.innerHTML = "Your Message : ";
createform.appendChild(messagelabel);

var texareaelement = document.createElement('textarea');
texareaelement.setAttribute("name", "dmessage");
createform.appendChild(texareaelement);

var messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

var submitelement = document.createElement('input'); 
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Submit");
submitelement.setAttribute("onclick", "validateForm()");
createform.appendChild(submitelement);
