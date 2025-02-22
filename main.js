$(document).ready(function () {
  $('#header').load('header.html');
  $('#footer').load('footer.html');
  $('#about').load('about.html');
  $('#edu').load('edu.html');
  $('#contact').load('contact.html');
});

function toggleDetail(e) {
  const target = $(e.target);

  window.location.href = 'https://wa.me/085721272635';

  const cariParent = $(target).parents('.about-exp-item');
  const cariChild = $(cariParent).children('.about-exp-item-detail');
  console.log(cariChild);
  $(cariChild).slideToggle();
}

function onFormSubmit(e) {
  e.preventDefault();
  const email = $('#inp_email');
  const subject = $('#inp_subject');
  const message = $('#inp_message');

  if (!$(email).val()) {
    alert('Email is required');
  } else if (!$(subject).val()) {
    alert('Subject is required');
  } else if (!$(message).val()) {
    alert('Message is required');
  } else {
    alert('Form Submitted');
    $(email).val('');
    $(subject).val('');
    $(message).val('');
  }
}
