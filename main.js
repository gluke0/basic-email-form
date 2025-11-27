// emailjs integration
(function (){
    // need to put my public key
    emailjs.init("cos4HUrZtOJDYD_J0");
})();

// getting the DOM elements
let contactForm = document.getElementById('contactForm');
let successMessage = document.getElementById('success-message');
let unsuccessMessage = document.getElementById('unsuccess-message');

contactForm.addEventListener('submit', function (event){
    event.preventDefault();

let formContent = {
    to_name: "Admin",
    sender_name: document.getElementById('name').value,
    sender_email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
    reply_to: document.getElementById('email').value,
};

// send the email and confirmation
    // first service id and then template id
    emailjs.send('service_fcpvo6e', 'template_kkm533k', formContent).then(function (response){
      // alert('Message sent successfully!');
        successMessage.classList.remove('hidden');
        contactForm.reset();
        setTimeout(() =>{
            successMessage.classList.add('hidden');
        }, 5000);
    }).catch(function (error){
        // alert('Failed to send message. Please try again.');
        unsuccessMessage.classList.remove('hidden');
        setTimeout(() =>{
            unsuccessMessage.classList.add('hidden');
        }, 5000);
    });
});

// faq toggle
let question = document.getElementsByClassName('question-card');
let answer = document.getElementsByClassName('ans');

for (let i = 0; i < question.length; i++){
  question[i].addEventListener('click', function(){
    if (answer[i].classList.contains('hidden')){
      answer[i].classList.remove('hidden');
    }else{
      answer[i].classList.add('hidden');
    }
  });
}