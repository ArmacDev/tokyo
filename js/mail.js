function send() {
    const name = document.getElementById("form").fname
    const message = document.getElementById('form').message
    document.getElementById('form-link').href = "mailto:arsene.carpentier@eleve.lyceefrancais.org.uk?subject=Nouveau%20Message%20de%20" + name.value + "&body=" + message.value;

}
function buttonClick() {
    send()
    document.getElementById("fname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

}