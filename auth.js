const signupForm = document.querySelector('#signup-form');
const loginForm = document.querySelector('#login-form');
const logout = document.querySelector('#logout');

auth.onAuthStateChanged(user => {
    console.log('user', user);
    getTodos();
    getUserUI(user);
})

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.querySelector('.error').innerHTML = '';
        signupForm.reset();
    })
    .catch((err) => {
        signupForm.querySelector('.error').innerHTML = err.message;
    })
});

loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password)
    .then(() => {
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.querySelector('.error').innerHTML = '';
        loginForm.reset()
    })
    .catch((err) => {
        loginForm.querySelector('.error').innerHTML = err.message;
    })
})

logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
})
