
var users = [
    { username: "Phani ram", password: "pass1" },
    { username: "Kowshik", password: "pass2" },
    { username: "Manikanta", password: "pass3" },
    { username: "Pavan", password: "pass4" },
    { username: "Chandu", password: "pass5" },
    { username: "Sampath", password: "pass6" },
    { username: "Nivas", password: "pass7" },
    { username: "Suryanadh", password: "pass8" },
    { username: "Rajesh", password: "pass9" },
    { username: "Kiran", password: "pass10" },
     { username: "Chandan", password: "pass11" },
    { username: "Sujay", password: "pass12" },
];


function checkLogin() {
    
    var enteredUser = document.getElementById("username").value;
    var enteredPass = document.getElementById("password").value;

   
    var found = false;

    
    for (var i = 0; i < users.length; i++) {
        if (enteredUser === users[i].username && enteredPass === users[i].password) {
            found = true;
            break;
        }
    }

    if (found) {
        alert("✅ Login successful!");
    
    } else {
        alert("❌ Invalid username or password.");
    }

    return false;
}
