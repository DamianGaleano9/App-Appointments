





window.addEventListener('load', function() {


    console.log("Successfully loaded page");

    var results = document.getElementById('result');

    var searchBtn = document.getElementById('searchBtn');
        searchBtn.addEventListener('click', function() {

        //Get Hobby

        var hobieField = document.getElementById('hobby');
        var hobby = hobieField.value;

        //Get Gender

        var genderField = document.getElementById('gender');
        var selected = genderField.selectedIndex;
        var gender = genderField.options[selected].value;

        console.log(gender);



        results.innerHTML = "Hello"
        });
});