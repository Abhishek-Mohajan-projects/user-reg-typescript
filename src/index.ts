const userForm = document.querySelector(".user-form") as HTMLFormElement;
const userName = document.querySelector("#name") as HTMLInputElement;
const userEmail = document.querySelector("#email") as HTMLInputElement;
const userDob = document.querySelector("#dob") as HTMLInputElement;
const userCountry = document.querySelector("#country") as HTMLSelectElement;
const userFeedback = document.querySelector("#feedback") as HTMLTextAreaElement;

userForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = {
    userName: userName.value,
    userEmail: userEmail.value,
    userDob: userDob.value,
    userCountry: userCountry.value,
    userFeedback: userFeedback.value,
  };
  localStorage.setItem("User Name", userName.value);
  localStorage.setItem("User Email", userEmail.value);
  localStorage.setItem("User Date of Birth", userDob.value);
  localStorage.setItem("User Country", userCountry.value);
  localStorage.setItem("User Feedback", userFeedback.value);

  userName.value = "";
  userEmail.value = "";
  userDob.value = "";
  userCountry.value = "";
  userFeedback.value = "";
});
