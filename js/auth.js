// ========================================
// REGISTER
// ========================================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const fullName =
            document.getElementById("fullName").value.trim();

        const username =
            document.getElementById("username").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value;

        const message =
            document.getElementById("message");

        message.textContent = "Creating account...";

        try {

            const { data, error } =
                await supabaseClient.auth.signUp({

                    email: email,

                    password: password,

                    options: {
                        data: {
                            full_name: fullName,
                            username: username
                        }
                    }

                });

            if (error) {
                throw error;
            }

            message.textContent =
                "Account created successfully. Check your email if confirmation is required.";

            registerForm.reset();

        } catch (error) {

            console.error(error);

            message.textContent =
                error.message;

        }

    });

}


// ========================================
// LOGIN
// ========================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const email =
            document.getElementById("loginEmail").value.trim();

        const password =
            document.getElementById("loginPassword").value;

        const message =
            document.getElementById("loginMessage");

        message.textContent = "Logging in...";

        try {

            const { data, error } =
                await supabaseClient.auth.signInWithPassword({

                    email: email,

                    password: password

                });

            if (error) {
                throw error;
            }

            message.textContent =
                "Login successful. Redirecting...";

            window.location.href =
                "dashboard.html";

        } catch (error) {

            console.error(error);

            message.textContent =
                error.message;

        }

    });

}
