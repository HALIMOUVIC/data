document.addEventListener('DOMContentLoaded', function() {

  // Function to format date to dd-mm-yyyy
  function formatDate(date) {
      var d = new Date(date);
      var day = ('0' + d.getDate()).slice(-2);
      var month = ('0' + (d.getMonth() + 1)).slice(-2);
      var year = d.getFullYear();
      return day + '-' + month + '-' + year;
  }

  // Retrieve stored data and display in the respective elements
  document.getElementById('Date').innerText = localStorage.getItem('Date');
  document.getElementById('omi-number').innerText = localStorage.getItem('omi-number');
  document.getElementById('fullName').innerText = localStorage.getItem('fullName');
  document.getElementById('Matricule').innerText = localStorage.getItem('Matricule');
  document.getElementById('jobTitle').innerText = localStorage.getItem('jobTitle');
  document.getElementById('division').innerText = localStorage.getItem('division');
  document.getElementById('service').innerText = localStorage.getItem('service');
  document.getElementById('itineraire').innerText = localStorage.getItem('itineraire');
  document.getElementById('objet').innerText = localStorage.getItem('objet');
  document.getElementById('date-depart').innerText = formatDate(localStorage.getItem('date-depart'));
  document.getElementById('heure-depart').innerText = localStorage.getItem('heure-depart');
  document.getElementById('date-retour').innerText = formatDate(localStorage.getItem('date-retour'));
  document.getElementById('heure-retour').innerText = localStorage.getItem('heure-retour');
  document.getElementById('transport').innerText = localStorage.getItem('transport');

 

  document.getElementById('print-button').addEventListener('click', function() {
      window.print();
  });
  document.getElementById('retour-button').addEventListener('click', function() {
  
        window.location.href = 'form.html';
    });
});

