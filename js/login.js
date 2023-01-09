import {validEmail} from "./utils/validation";
import {LOGIN_URL} from "./settings/api";
import {saveToken, saveUser} from "./settings/storage";

const loginForm = document.getElementById('login-form')
const email = document.getElementById("email")
const emailError = document.getElementById("email-error")

loginForm.addEventListener('submit', e => {
    e.preventDefault();

    let isEmail = false;
    if (email.value.trim().length > 0) {
        emailError.classList.add('hidden');

        const loginForm = document.querySelector("#login-form");
        const loginEmail = document.querySelector("#email");
        const loginEmailErr = document.querySelector("#email-error");
        const loginEmailValid = document.querySelector("#email-error-valid");

        const password = document.querySelector("#password");
        const passwordError = document.querySelector("#password-error");
        const loginErrMessage = document.getElementById("general-message");
        if (loginForm) {
            loginForm.addEventListener("submit", function (e) {
                e.preventDefault();

                let isEmail = false;
                if (loginEmail.value.trim().length > 0) {
                    loginEmailErr.classList.add("hidden");

                    isEmail = true;
                } else {
                    loginEmailErr.classList.remove("hidden");
                }

                let isValidEmail = false;
                if (
                    loginEmail.value.trim().length &&
                    validEmail(loginEmail.value) === true
                ) {
                    loginEmailValid.classList.add("hidden");
                    isValidEmail = true;
                } else if (
                    loginEmail.value.trim().length &&
                    validEmail(loginEmail.value) !== true
                ) {
                    {
                        loginEmailValid.classList.remove("hidden");
                    }
                }


                let isPassword = false;
                if (password.value.trim().length >= 8) {
                    passwordError.classList.add("hidden");
                    isPassword = true;
                } else {
                    passwordError.classList.remove("hidden");
                }

                const isFromValid = isEmail && isValidEmail && isPassword;

                let userData;

                if (isFromValid) {
                    userData = {
                        email: loginEmail.value,
                        password: password.value,
                    };

                    const LOGIN_USER_URL = `${LOGIN_URL}`;
                    console.log("isFromValid : ", isFromValid);
                    console.log("userData: ", userData);

                    // API CALL HERE
                    (async function logInUser() {
                        console.log("logInUser userData ", userData);
                        console.log(JSON.stringify(userData))
                        console.log({
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(userData),
                        })

                        const response = await fetch(LOGIN_USER_URL, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(userData),
                        });
                        console.log("response: ", response);
                        if (response.ok) {
                            const data = await response.json();
                            console.log("data: ", data);
                            saveToken(data.accessToken);
                            const userToSave = {
                                name: data.name,
                                email: data.email,
                                avatar: data.avatar,
                                credit: data.credit,
                            };
                            saveUser(userToSave);
                            location.href = "/profile.html";
                        } else {
                            const err = await response.json();
                            console.log("err: ", err);
                            const message = `${err.errors[0].message}`;
                            throw new Error(message);
                        }
                    })().catch((err) => {
                        loginErrMessage.innerHTML = `${err}`;
                    });
                    // API CALL HERE
                }
            });
        }
    }
});
