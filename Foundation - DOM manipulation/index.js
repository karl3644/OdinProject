const container = document.querySelector("#container");

const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.color = "red";
container.appendChild(para);

const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm a blue h3!";
blueH3.style.color = "blue";
container.appendChild(blueH3);

const div = document.createElement("div");
div.style.border = "2px black solid";
div.style.backgroundColor = "pink";

const head1 = document.createElement("h1");
head1.textContent = "I'm in the div!";

const para2 = document.createElement("p");
para2.textContent = "ME TOO!";

div.appendChild(head1);
div.appendChild(para2);

container.appendChild(div);
