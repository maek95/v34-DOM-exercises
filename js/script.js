// Code here!
// 1. Byt namn på första hoodien från Ash till Potato.
// innerHTML because h3 and not a div or similar (then we use textContent)
const allArtOneElements = document.getElementsByClassName("art-1"); 
const artOneEl = allArtOneElements.item(0) // one and only <article> with class="art-1"
const artOneElHoodieName = artOneEl.querySelector("h3"); // find h3 inside art-1
artOneElHoodieName.innerHTML = "Potato";

// 2. Byt namn på Home till Start.
const navEl = document.querySelector("nav"); // find first <nav>, only have one on the page so
const homeLinkEl = navEl.querySelector("a"); // first <a> inside <nav>
//homeLinkEl.textContent = "Start"; // also works
homeLinkEl.innerHTML = "Start"; 
//homeLinkEl.innerHTML = "<p>Start</p>";

// 3. Byt namn på Contact till Mail Us.
const allLinkElementsInNav = navEl.querySelectorAll("a");
const lastLinkElementInNav = allLinkElementsInNav.item(allLinkElementsInNav.length - 1); // the CURRENT last <a> in <nav>... there can be a new last <a> further down in this code that will NOT affect this.
lastLinkElementInNav.innerHTML = "Mail Us";

// 4. Byt ut informationen om Sinus Hoodie  - Fire.
const artOneElText = artOneEl.querySelector("p");
artOneElText.innerHTML = "Buy this hoodie if you like potatos";

// 5. Byt bakgrundsfärg och text på en knapp.
const artOneElButton = artOneEl.querySelector("button");
artOneElButton.style.backgroundColor = "darkblue";
artOneElButton.style.color = "white";

// 6. Byt bakgrundsfärg på någon av produkterna.
const artOneElFigure = artOneEl.querySelector("figure");
artOneElFigure.style.backgroundColor = "white";

// 7. Byt ut adressen på sidan.
const footerEl = document.querySelector("footer");
/* const allArticleElementsInFooter = footerEl.querySelectorAll("article");
const addressArticleEl = allArticleElementsInFooter.item(1); // index 1, second <article> */
const firstTextElementInFooter = footerEl.querySelector("p");
firstTextElementInFooter.innerHTML = "221B Baker St<br>Marylebone<br>London NW1 6XE<br>UK"
firstTextElementInFooter.style.marginTop = "0";

// 8. Byt färg på samtliga <p>.
const rootEl = document.documentElement; // <html> element
const allPElements = rootEl.querySelectorAll("p");
allPElements.forEach(pElement => {
  pElement.style.color = "red";
})

// 9. Ändra text på samtliga knappar till add to cart.
const allButtonElements = rootEl.querySelectorAll("button");
allButtonElements.forEach((buttonElement) => {
  buttonElement.textContent = "Add to cart"
})

// 10. Lägg till classen active på menyalternativet home.
homeLinkEl.classList.add("active");

// 11. Ta bort classen logo på logotypen.
const logoClassElements = document.getElementsByClassName("logo");
const firstLogoEl = logoClassElements.item(0); // first and only one 
console.log(firstLogoEl.classList); // shows logo as a class
firstLogoEl.classList.remove("logo"); 
console.log(firstLogoEl.classList); // logo is not a class anymore

// 12. Lägg till ett nytt menyalternativ.
const navContainerEl = document.getElementById("navContainer");
const allLinkElements = navContainerEl.querySelectorAll("a"); // all <a> inside navContainerEl
const lastLinkEl = allLinkElements.item(allLinkElements.length - 1); // find the last <a>

const newLinkEl = document.createElement("a");
newLinkEl.innerHTML = "Account";
newLinkEl.href = "#"
//navContainerEl.appendChild(newLinkEl);
lastLinkEl.insertAdjacentElement("afterend", newLinkEl); // place new <a> next to the last <a>, rather than at the end of the whole navContainerEl

/* 
13. Lägg till en ny produkt med följande info.

img: hoodie-forrest.png
h2: Sinus Hoodie
h3: Forrest
p: Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores

    Tips
    använd el.insertAdjecentHTML('beforeend',...) 
*/

const mainEl = document.querySelector("main");
const newArticleEl = document.createElement("article");
newArticleEl.classList.add("art-4")
mainEl.appendChild(newArticleEl);

const newFigureEl = document.createElement("figure");
newArticleEl.appendChild(newFigureEl);

const newImgEl = document.createElement("img");
newImgEl.src = "img/hoodie-forrest.png";
newFigureEl.appendChild(newImgEl);

const newHoodieTitleEl = document.createElement("h2");
newHoodieTitleEl.textContent = "Sinus Hoodie";
newArticleEl.appendChild(newHoodieTitleEl);

const newHoodieNameEl = document.createElement("h3");
newHoodieNameEl.textContent = "Forrest";
newArticleEl.appendChild(newHoodieNameEl);

const newHoodieTextEl = document.createElement("p");
newHoodieTextEl.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores";
newArticleEl.appendChild(newHoodieTextEl);

const newHoodieButtonEl = document.createElement("button");
newHoodieButtonEl.textContent = "Add to cart"; // won't be affected by the DOM-manipulation further up where we changed ALL buttons to have this text? I guess it only affects all currently displayed at the time of running the code?
newArticleEl.appendChild(newHoodieButtonEl);


// 14. Lyssna efter ett klick på logotypen (.logo). När den registrerar ett klick skall du console.log:a "found you!";
  // Even though we removed the class 'logo' from the <img> we still have the variable saved from before that...
firstLogoEl.addEventListener("click", ((e) => {
  console.log("found you!");
}))
      /* const firstImgEl = document.querySelector("img");
      firstImgEl.addEventListener("click", ((e) => {
        console.log("found you!");
      })) */

// 15. Lyssna efter klick på samtliga produkter ( <article>). När den registrerar ett klick skall du console.log:a "Hi, Im article Fire / Ash / Water".

const allArticleElementsInMain = mainEl.querySelectorAll("article");
allArticleElementsInMain.forEach((articleElementInMain) => {

  const hoodieNameEl = articleElementInMain.querySelector("h3"); // find h3 inside the current <article>

  articleElementInMain.addEventListener("click", () => {
    console.log("Hi, I'm article " + hoodieNameEl.innerText);
    
  })
})





