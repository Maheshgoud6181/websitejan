// Team data with names and image URLs
const teamData = {
  alumni: [
    { name: "Alumni 1", image: "images/alumni2.jpg" },
    { name: "Alumni 2", image: "path/to/alumni2.jpg" },
    { name: "Alumni 3", image: "path/to/alumni3.jpg" },
    { name: "Alumni 4", image: "path/to/alumni4.jpg" },
    { name: "Alumni 5", image: "path/to/alumni5.jpg" },
  ],
  fourthYears: [
    { name: "Fourth Year 1", image: "path/to/fourthYear1.jpg" },
    { name: "Fourth Year 2", image: "path/to/fourthYear2.jpg" },
    { name: "Fourth Year 3", image: "path/to/fourthYear3.jpg" },
    { name: "Fourth Year 4", image: "path/to/fourthYear4.jpg" },
    { name: "Fourth Year 5", image: "path/to/fourthYear5.jpg" },
  ],
  thirdYears: [
    { name: "Third Year 1", image: "path/to/thirdYear1.jpg" },
    { name: "Third Year 2", image: "path/to/thirdYear2.jpg" },
    { name: "Third Year 3", image: "path/to/thirdYear3.jpg" },
    { name: "Third Year 4", image: "path/to/thirdYear4.jpg" },
    { name: "Third Year 5", image: "path/to/thirdYear5.jpg" },
  ],
  secondYears: [
    { name: "Second Year 1", image: "path/to/secondYear1.jpg" },
    { name: "Second Year 2", image: "path/to/secondYear2.jpg" },
    { name: "Second Year 3", image: "path/to/secondYear3.jpg" },
    { name: "Second Year 4", image: "path/to/secondYear4.jpg" },
    { name: "Second Year 5", image: "path/to/secondYear5.jpg" },
  ],
};
function showTeam(teamKey) {
  const gallery = document.getElementById("team-gallery");
  gallery.innerHTML = ""; // Clear previous content

  // Generate cards for the selected team
  teamData[teamKey].forEach((member) => {
    const card = document.createElement("div");
    card.className = "team-card";

    // Add member image
    const img = document.createElement("img");
    img.src = member.image;
    img.alt = member.name;
    img.className = "team-img";

    // Add member name
    const name = document.createElement("p");
    name.className = "team-name";
    name.innerText = member.name;

    // Append image and name to the card
    card.appendChild(img);
    card.appendChild(name);

    // Append card to gallery
    gallery.appendChild(card);
  });
}
