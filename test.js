const currentPage = window.location.pathname.split('/').pop();

// Navigation highlighting
document.querySelectorAll('#nav-menu a').forEach(link => {
  if(link.getAttribute('href') === currentPage || (currentPage === '' && link.getAttribute('href') === 'index.html')) {
    link.style.textDecoration = 'underline';
  }
});

// Quiz functionality (for test.html)
const quizQuestions = [
  {
    question: "What does HTTPS stand for?",
    options: [
      "HyperText Transfer Protocol Secure",
      "HyperText Transfer Protocol Standard",
      "HyperText Transfer Protocol Simple"
    ],
    answer: 0
  },
  {
    question: "What is a strong password composed of?",
    options: [
      "Only letters",
      "Letters, numbers, and symbols",
      "Only numbers"
    ],
    answer: 1
  },
  {
    question: "What is phishing?",
    options: [
      "A type of cyber attack to steal personal info",
      "A way to backup data",
      "An antivirus software"
    ],
    answer: 0
  },
  {
    question: "Which of these is a safe practice?",
    options: [
      "Sharing passwords with friends",
      "Using two-factor authentication",
      "Clicking on all email links"
    ],
    answer: 1
  }
];

if(currentPage === "test.html") {
  const quizContainer = document.getElementById('quiz-container');
  const submitQuizBtn = document.getElementById('submit-quiz');
  const resultDiv = document.getElementById('result');

  function loadQuiz() {
    let quizHTML = '';
    quizQuestions.forEach((q, i) => {
      quizHTML += `<div class="question-block">
        <p><strong>Q${i + 1}. ${q.question}</strong></p>`;
      q.options.forEach((opt, idx) => {
        quizHTML += `
          <label>
            <input type="radio" name="q${i}" value="${idx}" /> ${opt}
          </label><br />`;
      });
      quizHTML += '</div><br />';
    });
    quizContainer.innerHTML = quizHTML;
    submitQuizBtn.style.display = 'inline-block';
    resultDiv.textContent = '';
  }

  submitQuizBtn.addEventListener('click', () => {
    let score = 0;
    let answeredAll = true;

    quizQuestions.forEach((q, i) => {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (!selected) {
        answeredAll = false;
      } else if (parseInt(selected.value) === q.answer) {
        score++;
      }
    });

    if (!answeredAll) {
      alert("Please answer all questions before submitting!");
      return;
    }

    resultDiv.textContent = `You scored ${score} out of ${quizQuestions.length}.`;
  });

  loadQuiz();
}

// Payment simulation for courses.html
if (currentPage === "courses.html") {
  document.querySelectorAll('.buy-now-btn').forEach(button => {
    button.addEventListener('click', () => {
      const courseName = button.getAttribute('data-course');
      const coursePrice = button.getAttribute('data-price');
      alert(`You've selected "${courseName}" for ₹${coursePrice}. In a real application, you would now be redirected to a payment gateway.`);
      console.log(`User wants to buy: ${courseName}, Price: ₹${coursePrice}`);
      // In a real application, you would integrate with a payment gateway here.
      // Example: window.location.href = "https://your-payment-gateway.com/checkout?item=" + courseName + "&price=" + coursePrice;
    });
  });
}

// Contact form submission (for contact.html)
if (currentPage === "contact.html") {
  const contactForm = document.getElementById('contact-form');
  const contactMessageDiv = document.getElementById('contact-message');

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // In a real application, you would send this data to a server.
    // For this client-side only example, we'll just display a success message.
    console.log("Contact Form Submission:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    contactMessageDiv.textContent = "Thank you for your message! We'll get back to you soon.";
    contactMessageDiv.style.color = "green";
    contactForm.reset(); // Clear the form
  });
}