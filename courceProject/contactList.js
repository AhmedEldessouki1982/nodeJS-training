// Load Github Users
// Get from server the list of users and contact list

var url = 'https://api.github.com/users';

var xhr = new XMLHttpRequest();
xhr.open('GET',url, true);
xhr.onload = function() {
    if(this.status == 200){
        var favContactList = JSON.parse(this.responseText);
    }
    document.getElementsByClassName('noContacts').innerHTML = "fhdkshf";
    
    favContactList.forEach(user => {

        let contactList = `

                    <a href="#" class="fav-list-item">
                        <div class="card-list">
                            <div class="avatar">
                                <img src='${user.avatar_url}' alt="user avatar">
                            </div>

                            <div class="contact-name">
                                <h4 class="media-heading">${user.login}</h4>
                                <small>${user.type} UserID# ${user.id}</small>
                            </div>
                        </div>
                    </a>
    `;
    
    let newUserCardDiv = document.createElement ('div');
    newUserCardDiv.innerHTML = contactList;
    document.getElementsByClassName('fav-list')[0].append (newUserCardDiv);    
    });

}
xhr.send();

// searching logic
let searchField = document.querySelector('.contact-search input');
searchField.addEventListener (
    'input',(e) => {
         console.log(e.target.value);

    }
)






