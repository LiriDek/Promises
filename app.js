/**
 * PROMISES
 *
 * - This is what we use in order to get backend information.
 * How ?
 * We fetch them
 */

// fetch("https://jsonplaceholder.typicode.com/users/1")
const emailRef = document.querySelector(".email");
const statusRef = document.querySelector(".status");
const videoRef = document.querySelector(".video");
// First method 1/ Then
// fetch("https://jsonplaceholder.typicode.com/users/1")
// .then(response => {
//     return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         emailRef.innerHTML = data.email
//     })

// Second method 2/ Async/await
// async function main() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//     const data = await response.json()
//     console.log(data)
//     emailRef.innerHTML = data.email
// }

// main()

/**
 * CREATING PROMISE
 *
 */

function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("FREE");
    }, 2000);
  });
}

// 1. Then
// getSubscriptionStatus().then(response => console.log(response))

// 2. Async/Await
async function main() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await response.json();
  console.log(data);
  emailRef.innerHTML = data.email;
  const status = await getSubscriptionStatus();
  statusRef.innerHTML = status;
  const videoStatus = await getVideo(status);
  try {
    console.log(videoStatus);
    videoRef.innerHTML = videoStatus;
  } catch (e) {
    console.log(e);
  }
}

main();

/** * 1. Create a function called `getVideo` *
 * 2. Accept a parameter called ` subscriptionStatus` *
 * 3. Return a new Promise inside of the function that: *
 * -if "VIP" resolve("show video") - if "FREE" resolve("show trailer") *
 * - otherwise reject("no video") *
 * 4. console.log the result of getVideo() in main()
 * */

function getVideo(subscriptionStatus) {
  return new Promise((resolve, reject) => {
    if (subscriptionStatus === "VIP") {
      resolve("Show video");
    } else if (subscriptionStatus === "FREE") {
      resolve("show trailer");
    } else {
      reject("No video");
    }
  });
}
