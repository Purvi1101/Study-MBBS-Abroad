// Simple Form Validation
document.querySelector("form").addEventListener("submit", function(event) {
    let name = document.querySelector("[name='name']").value;
    let email = document.querySelector("[name='email']").value;
    let phone = document.querySelector("[name='phone']").value;
    let country = document.querySelector("[name='country']").value;
    
    if (!name || !email || !phone || !country) {
        alert("Please fill out all fields.");
        event.preventDefault();
    }
});
