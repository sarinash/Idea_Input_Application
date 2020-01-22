const loggedOutLink = document.querySelectorAll('.logged-out');
const loggedInLink = document.querySelectorAll('.logged-in');
const accountDetails =document.querySelector('.account-details');
const setupUI = (user)=>{
  if (user){
    const html=`
      <div> participant Id: ${user.email}</div>
    `;
    accountDetails.innerHTML = html ;
    loggedInLink.forEach(item=>item.style.display='block');
    loggedOutLink.forEach(item=>item.style.display='none');

  } else {
    accountDetails.innerHTML='not a participant';
    loggedInLink.forEach(item=>item.style.display='none')
    loggedOutLink.forEach(item=>item.style.display='block')
  }
}



const ideaList =document.querySelector('.guides');
const setupIdeas =(data)=>{
  if (data.length){
    let html =''
    data.forEach(element => {
      const idea = element.data()
      //console.log(idea);
      const li =`
        <li>
          <div class="collapsible-header green lighten-4">${idea.title}</div>
          <div class="collapsible-body white">${idea.content}</div>
        </li>
    
    
         `;
      html+=li
    });
    ideaList.innerHTML=html;

  }else{
    ideaList.innerHTML='<h4 class ="center-align"style="color:blue;">Lets start</h4>'

  }
  
    
  

}




// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});