// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
      //Idea get
      db.collection('Ideas').onSnapshot(snapshot=>{
      setupIdeas(snapshot.docs);
      setupUI(user);

      });
    } else {
        setupIdeas([]);
        setupUI();
      
    }
});

const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(createForm['title']);
    
    db.collection('Ideas').add({
        title: createForm['title'].value,
        content: createForm['content'].value,
        time: new Date (Date.now()),
        epoch : Date.now()
    }).then(()=>{
    //close and clear form
    const modal = document.querySelector('#modal-create');
    M.Modal.getInstance(modal).close();
    createForm.reset();
    })

})


// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    //console.log(cred.user);
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});
//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e)=> {
    e.preventDefault();
    auth.signOut()//.then(() => {
        //console.log("signthed out");
    
});
//login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('click',(e)=> {
    e.preventDefault();
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    auth.signInWithEmailAndPassword(email,password).then(cred=>{
        //console.log(email,password);
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
        
    });
        

});