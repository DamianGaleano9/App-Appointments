var users = [
    {
        name: 'Bob',
        gender: 'F',
        hobby: 'Video Games',
        avatar: 'avatar1.png'
    },
    {
        name: 'Jerry',
        gender: 'F',
        hobby: 'Video Games',
        avatar: 'avatar2.png'
    },
    {
        name: 'Sue',
        gender: 'M',
        hobby: 'Student',
        avatar: 'avatar3.png'
    },
    {
        name: 'Adrien',
        gender: 'M',
        hobby: 'Singer',
        avatar: 'avatar4.png'
    },
    {
        name: 'Paul',
        gender: 'F',
        hobby: 'RockStar',
        avatar: 'avatar5.png'
    },
    {
        name: 'Michael',
        gender: 'F',
        hobby: 'Web Desing',
        avatar: 'avatar6.png'
    },
    {
        name: 'Scoot',
        gender: 'F',
        hobby: 'Programming',
        avatar: 'avatar7.png'
    },
];


window.addEventListener('load', function() {

    function search () {

            //Get Hobby
    
            var hobbyField = document.getElementById('hobby');
            var hobby = hobbyField.value;
    
            //Get Gender
    
            var genderField = document.getElementById('gender');
            var selected = genderField.selectedIndex;
            var gender = genderField.options[selected].value;
            console.log(gender);
    
            var resultsHTML = '';
            var numUsers = users.length;
    
            for(var i = 0; i < numUsers; i++) {
                resultsHTML +=  '<div class="person-row">\
                <img src="images/' + users[i].avatar + '"/>\
                <div class="person-info">\
                    <div>' + users[i].name + '</div>\
                    <div>' + users[i].hobby + '</div></div>\
                    <button>Add as a Friend</button></div>';  
    
            }
    
                results.innerHTML = resultsHTML;
            };



    var results = document.getElementById('results');
    var searchBtn = document.getElementById('searchBtn');
        searchBtn.addEventListener('click', search);
});