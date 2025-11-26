// emailjs integration
(function (){
    // need to put my public key
    emailjs.init("EMAILJS_PUBLIC_KEY");
})();

// getting the DOM elements
let contactForm = document.getElementById('contactForm');
let successMessage = document.getElementById('success-message');

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