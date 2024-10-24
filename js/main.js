// make the active class to the clicked link
let links = document.querySelectorAll("main section li a");
let moonName = document.querySelector(".moon-name");
let moonImg = document.getElementById("moonImg");
let moonDesc = document.querySelector(".moon-description");
let moonDist = document.querySelector(".moon-distance");
let moonTrav = document.querySelector(".moon-travel");

// selecting the tabs of destination page
fetch("/js/data.json")
  .then((Response) => {
    if (!Response.ok) {
      throw new Error(`Response Status: ${Response.status}`);
    }
    return Response.json();
  })
  .then((data) => {
    moonName.textContent = data.destinations[0].name;
    moonDesc.textContent = data.destinations[0].description;
    moonDist.textContent = data.destinations[0].distance;
    moonTrav.textContent = data.destinations[0].travel;
    moonImg.src = `${data.destinations[0].images.png}`;
    /////////////////////////////////////
    // crewName.textContent = data.crew[0].name;
    // crewBio.textContent = data.crew[0].bio;
    // crewRole.textContent = data.crew[0].role;
    // crewImg.src = `${data.crew[0].images.png}`;

    links.forEach((link) => {
      link.onclick = function () {
        links.forEach((link) => {
          link.classList.remove("active");
        });
        link.classList.add("active");
        data.destinations.forEach((data) => {
          if (data.name.toLowerCase() == link.textContent) {
            moonName.textContent = data.name;
            moonDesc.textContent = data.description;
            moonDist.textContent = data.distance;
            moonTrav.textContent = data.travel;
            moonImg.src = `${data.images.png}`;
          }
        });
      };
    });
  });
//   .catch((error) => {
//     console.error("Error:", error.message);
//   });
