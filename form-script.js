

//$(document).ready(function() {
//   
//
//    var currentDate = new Date().toISOString().slice(0, 10);
//    $('#Date').val(currentDate);
//        // Set current date in the form in dd-mm-yyyy format
//
//       // Handle form submission
//    $('#mission-form').submit(function(event) {
//        event.preventDefault(); // Prevent default form submission
//
//        // Serialize form data
//        var formData = $(this).serializeArray();
//
//        // Save each form field to localStorage
//        formData.forEach(function(item) {
//            localStorage.setItem(item.name, item.value);
//        });
//
//        // Save the date separately to ensure it's handled properly
//        localStorage.setItem('Date', $('#Date').val());
//
//        // Redirect to index.html
//        window.location.href = 'index.html';
//    });
//
//    $('#Date').on('input', function() {
//        var date = $(this).val().trim();
//
//        if (date === '') {
//            clearFormFields();
//            return;
//        }
//
//        // Fetch data from Excel file
//        fetchDataFromExcel(date);
//    });
//
//    function fetchDataFromExcel(date) {
//        var url = 'data.xlsx';
//        var req = new XMLHttpRequest();
//        req.open('GET', url, true);
//        req.responseType = 'arraybuffer';
//
//        req.onload = function(e) {
//            var data = new Uint8Array(req.response);
//            var workbook = XLSX.read(data, { type: 'array' });
//
//            // Assuming data is in the first sheet (index 0)
//            var sheetName = workbook.SheetNames[0];
//            var worksheet = workbook.Sheets[sheetName];
//
//            // Convert Excel data to JSON format
//            var jsonData = XLSX.utils.sheet_to_json(worksheet);
//
//            // Find matching row based on matricule
//            var result = jsonData.find(function(entry) {
//                return entry.Date === date;
//            });
//
//            // Populate form fields
//            if (result) {
//                $('#fullName').val(result.fullName );
//                $('#jobTitle').val(result.jobTitle);
//                // You can populate other fields similarly here
//            } else {
//                clearFormFields();
//            }
//        };
//
//        req.send();
//    }
//
//    function clearFormFields() {
//        $('#fullName').val('');
//        $('#jobTitle').val('');
//        // Clear other fields as needed
//    }
//});
//
//    
//

