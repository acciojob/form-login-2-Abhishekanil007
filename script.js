//your JS code here. If required.

function handleSubmit(event)
	{
		event.preventDefault();

		var fname = document.getElementById('fname').value;
		var lname = document.getElementById('lname').value;
		var phone = document.getElementById('phone').value;
		var email = document.getElementById('email').value;

		alert('First Name: ' + fname + '\nLast Name: ' + lname + '\nPhone Number: ' + phone + '\nEmail: ' + email);
	}


document.getElementById('myform').addEventListener('submit' , handleSubmit);

cy.on('window:alert', alertText => {
  expect(alertText).to.contain('First Name: John');
  expect(alertText).to.contain('Last Name: Doe');
  expect(alertText).to.contain('Phone Number: 1234567890');
  expect(alertText).to.contain('Email: john.doe@example.com');
});