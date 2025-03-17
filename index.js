const contactform = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#messageTextarea");

const publicKey = "yXfecxLf_napQcu42";
const serviceID = "service_aqyb957";
const templateID = "template_lw0tict";

emailjs.init(publicKey);

contactform.addEventListener("submit", e => {
  e.preventDefault();

  submitBtn.innerText = "....";

  const InputFields = {
    user_name: nameInput.value,
    user_email: emailInput.value,
    messageTextarea: messageInput.value,

   };
  emailjs.send(serviceID, templateID, InputFields)
  .then(() => {
    submitBtn.innerText = "Sent";
    
    user_name.value = "";
    user_email.value = "";
    messageTextarea.value = "";
  }, (error) => {
    console.log(error);
    submitBtn.innerText = "Error"

  });

});