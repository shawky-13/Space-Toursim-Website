let linksTwo = document.querySelectorAll(".crew section li a");
let crewName = document.querySelector(".crew-name");
let crewBio = document.querySelector(".crew-bio");
let crewRole = document.querySelector(".crew-role");
let crewImg = document.getElementById("crewImg");

// selecting the tabs of crew page
fetch("/js/data.json")
  .then((Response) => {
    if (!Response.ok) {
      throw new Error(`Response Status: ${Response.status}`);
    }
    return Response.json();
  })
  .then((data) => {
    crewName.textContent = data.crew[0].name;
    crewBio.textContent = data.crew[0].bio;
    crewRole.textContent = data.crew[0].role;
    crewImg.src = `${data.crew[0].images.png}`;

    linksTwo.forEach((link) => {
      link.onclick = function () {
        linksTwo.forEach((link) => {
          link.classList.remove("active-1");
        });
        link.classList.add("active-1");
        if (link.classList.contains("one")) {
          crewName.textContent = data.crew[0].name;
          crewBio.textContent = data.crew[0].bio;
          crewRole.textContent = data.crew[0].role;
          crewImg.src = `${data.crew[0].images.png}`;
        } else if (link.classList.contains("two")) {
          crewName.textContent = data.crew[1].name;
          crewBio.textContent = data.crew[1].bio;
          crewRole.textContent = data.crew[1].role;
          crewImg.src = `${data.crew[1].images.png}`;
        } else if (link.classList.contains("three")) {
          crewName.textContent = data.crew[2].name;
          crewBio.textContent = data.crew[2].bio;
          crewRole.textContent = data.crew[2].role;
          crewImg.src = `${data.crew[2].images.png}`;
        } else {
          crewName.textContent = data.crew[3].name;
          crewBio.textContent = data.crew[3].bio;
          crewRole.textContent = data.crew[3].role;
          crewImg.src = `${data.crew[3].images.png}`;
        }
      };
    });
  });
