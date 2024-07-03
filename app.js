const carForm = document.getElementById('carForm');

carForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get user input
  const cid = document.getElementById('cid').value;
  const carModel = document.getElementById('carModel').value;
  const plate = document.getElementById('plate').value;

  // Save to Firebase
  firebase.database().ref('carData').push({
    cid: cid,
    carModel: carModel,
    plate: plate
  })
  .then(function() {
    alert('Data saved successfully!');
    carForm.reset();
  })
  .catch(function(error) {
    alert('Failed to save data: ' + error.message);
  });
});
