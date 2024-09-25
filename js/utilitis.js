function showSectionById(id){
    //hight the section
    document.getElementById('hero-forme').classList.add('hidden');
    document.getElementById('Transaction-section').classList.add('hidden');

    //show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}

// document.addEventListener("DOMContentLoaded", function() {
//     const transactionHistoryButton = document.getElementById("show-transaction-history");
//     const transactionSection = document.getElementById("Transaction-section");

//     // Toggle the transaction history when the "History" button is clicked
//     transactionHistoryButton.addEventListener("click", function() {
//         if (transactionSection.classList.contains("hidden")) {
//             transactionSection.classList.remove("hidden");
//         } else {
//             transactionSection.classList.add("hidden");
//         }
//     });
// });