const bookBtn = document.getElementById('bookBtn');
const bookingModal = document.getElementById('bookingModal');
const closeModal = document.getElementById('closeModal');
const bookingForm = document.getElementById('bookingForm');
const modalOverlay = bookingModal.querySelector('.modal-overlay');
const trackingBtn = document.querySelector('.tracking-btn');
const trackingModal = document.getElementById('trackingModal');
const closeTrackingModal = document.getElementById('closeTrackingModal');
const trackingOverlay = trackingModal.querySelector('.modal-overlay');
const navLinks = document.querySelectorAll('.nav-link');
const serviceCards = document.querySelectorAll('.service-card');

function openModal() {
  bookingModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModalFunc() {
  bookingModal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

function openTrackingModal() {
  trackingModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeTrackingModalFunc() {
  trackingModal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const section = document.getElementById(sectionId);
  if (section) {
    section.classList.add('active');
    window.scrollTo(0, 0);
  }
}

function goHome() {
  showSection('home-section');
}

function trackBooking() {
  const phone = document.getElementById('trackingPhone').value;
  if (phone.length === 10) {
    document.getElementById('trackingInput').style.display = 'none';
    document.getElementById('trackingResult').style.display = 'block';
  } else {
    alert('Please enter a valid 10-digit phone number');
  }
}

function resetTracking() {
  document.getElementById('trackingInput').style.display = 'block';
  document.getElementById('trackingResult').style.display = 'none';
  document.getElementById('trackingPhone').value = '';
}

function toggleFaq(element) {
  const faqItem = element.parentElement;
  faqItem.classList.toggle('active');
}

function updatePrice() {
  const serviceSelect = document.getElementById('serviceSelect');
  const checkboxes = document.querySelectorAll('.addon-list input[type="checkbox"]:checked');
  
  let servicePrice = parseInt(serviceSelect.value) || 0;
  let addonsPrice = 0;
  
  checkboxes.forEach(checkbox => {
    addonsPrice += parseInt(checkbox.value);
  });
  
  const totalPrice = servicePrice + addonsPrice;
  
  document.getElementById('servicePrice').textContent = '₹' + servicePrice;
  document.getElementById('addonsPrice').textContent = '₹' + addonsPrice;
  document.getElementById('totalPrice').textContent = '₹' + totalPrice;
}

function bookWithPrice() {
  const serviceSelect = document.getElementById('serviceSelect');
  if (!serviceSelect.value) {
    alert('Please select a service');
    return;
  }
  openModal();
}

function showPolicy(type) {
  let message = '';
  if (type === 'terms') {
    message = 'Terms & Conditions:\n\n1. All services are provided with full warranty coverage.\n2. Pricing is transparent with no hidden charges.\n3. We guarantee 2-hour service completion or full refund.\n4. Only genuine parts are used in our services.\n5. For cancellations within 24 hours, a small fee applies.';
  } else if (type === 'privacy') {
    message = 'Privacy Policy:\n\nWe respect your privacy and keep all personal information confidential. Your phone number, email, and bike details are used only for service purposes and never shared with third parties. We comply with all data protection regulations.';
  } else if (type === 'refund') {
    message = 'Refund Policy:\n\n100% Money-Back Guarantee: If you\'re not satisfied with our service quality for any reason, we will refund your entire payment within 24 hours. No questions asked. Your satisfaction is our top priority.';
  }
  alert(message);
}

bookBtn.addEventListener('click', openModal);
closeModal.addEventListener('click', closeModalFunc);
modalOverlay.addEventListener('click', closeModalFunc);
trackingBtn.addEventListener('click', openTrackingModal);
closeTrackingModal.addEventListener('click', closeTrackingModalFunc);
trackingOverlay.addEventListener('click', closeTrackingModalFunc);

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const section = link.dataset.section;
    showSection(section + '-section');
  });
});

serviceCards.forEach(card => {
  card.addEventListener('click', () => {
    openModal();
  });
});

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Booking confirmed! Our team will contact you shortly at the provided mobile number.');
  closeModalFunc();
  bookingForm.reset();
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
  e.target.reset();
});

showSection('home-section');
