
//sahar function create.....

function showSectionById(id){
    //hight the section
    document.getElementById('hero-forme').classList.add('hidden');
    document.getElementById('Transaction-section').classList.add('hidden');

    //show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}
