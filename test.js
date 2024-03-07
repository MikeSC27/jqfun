

function generateCharacterString(char, count) {
    return char.repeat(count);
}

window.onload = function(){
    const body = document.body 
    console.log("Keep Going")

    const nav = createPageElement("nav", body, "nav", "", "")
    const navMenu = createPageElement("ul", nav, "nav__menu", "", "")
    const navMenuHome = createPageElement("li", navMenu, "nav__menu__item", "", "GVN I/O:")

    const contentSelect = createPageElement("select", body, "", "");
    contentSelect.id = "contentSelect";

    const options = ["Choose", "Five", "Ten", "Fifteen", "Twenty", "Thirty"];
    options.forEach(optionText => {
        createPageElement("option", contentSelect, "", optionText, "");
    });

    const contentArea = createPageElement("textarea", body, "", "");

    contentSelect.addEventListener('change', () => {
        const selectedValue = contentSelect.value;
        let characterString = '';

        // Generate character string based on selected value
        switch(selectedValue) {
            case 'Five':
                characterString = generateCharacterString('A', 5);
                break;
            case 'Ten':
                characterString = generateCharacterString('B', 10);
                break;
            case 'Fifteen':
                characterString = generateCharacterString('C', 15);
                break;
            case 'Twenty':
                characterString = generateCharacterString('D', 20);
                break;
            case 'Thirty':
                characterString = generateCharacterString('F', 100);
                break;
            default:
                characterString = '';
        }

        // Update text area with character string
        contentArea.value = characterString;
    });

    function createPageElement($element = "div", $parent = body, $classList = null, $innerText = "", $innerHTML = "")
    {
        const element = document.createElement($element)
        if($classList != null) element.className = $classList
        if($innerHTML != "") element.innerHTML = $innerHTML
        if($innerText != "") element.innerText = $innerText

        if($parent == null || $parent === undefined) $parent = body
        $parent.appendChild(element)
        return element
    }

}



// window.addEventListener('DOMContentLoaded',() => {
//     console.log('Doc Rdy');

//     const body = document.querySelector("body");

//     const div = document.
// })


window.onload = function(){
    
}
const docBod = document.body;

const nav = createPageElement("nav", docBod, "nav", "", "");
const navMenu = createPageElement("ul", nav, "nav__menu", "", "");
const navMenuHome = createPageElement(
  "li",
  navMenu,
  "nav__menu__item",
  "",
  "Home"
);
const navMenuAbout = createPageElement(
  "li",
  navMenu,
  "nav__menu__item",
  "",
  "About"
);
const navMenuGallery = createPageElement(
  "li",
  navMenu,
  "nav__menu__item",
  "",
  "Gallery"
);
const navMenuContact = createPageElement(
  "li",
  navMenu,
  "nav__menu__item",
  "",
  "Contact"
);

document.querySelectorAll(".nav__menu__item").forEach((navItem) => {
  navItem.onclick = (e) => {
    window.location = "#" + navItem.innerText;
  };
});

const main = createPageElement("main", docBod);

const sectionHome = createPageElement("section", main, "section");
sectionHome.id = "Home";
const sectionHomeArticleMain = createPageElement(
  "article",
  sectionHome,
  "article"
);
const sectionHomeArticleMainHeading = createPageElement(
  "h1",
  sectionHomeArticleMain,
  "section__heading",
  "",
  "Hello World"
);
const sectionHomeArticleMainContent = createPageElement(
  "p",
  sectionHomeArticleMain,
  "section__content",
  "",
  "Please wipe your feet"
);

const sectionAbout = createPageElement("section", main, "section");
sectionAbout.id = "About";
const sectionAboutArticleMain = createPageElement(
  "article",
  sectionAbout,
  "article"
);
const sectionAboutArticleMainHeading = createPageElement(
  "h1",
  sectionAboutArticleMain,
  "section__heading",
  "",
  "About"
);
const sectionAboutArticleMainContent = createPageElement(
  "p",
  sectionAboutArticleMain,
  "section__content",
  "",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a magna nec massa congue pretium. Mauris vehicula condimentum tempor. Suspendisse ullamcorper neque ac mi condimentum, a sollicitudin ligula lacinia. Sed scelerisque urna at tortor aliquet euismod. Quisque eleifend enim sollicitudin vulputate auctor. Integer pulvinar, ipsum eu pharetra aliquet, libero odio pretium turpis, vitae semper dolor leo id purus. Praesent leo odio, volutpat nec erat eget, rhoncus tincidunt libero. Donec a enim sed arcu volutpat hendrerit a eget nunc. Integer euismod molestie metus et hendrerit. Etiam venenatis condimentum lorem, sed porttitor dui vulputate vitae."
);

const sectionGallery = createPageElement("section", main, "section");
sectionGallery.id = "Gallery";
const sectionGalleryArticleMain = createPageElement(
  "article",
  sectionGallery,
  "article"
);
const sectionGalleryArticleMainHeading = createPageElement(
  "h1",
  sectionGalleryArticleMain,
  "section__heading",
  "",
  "Gallery"
);
const sectionGallerArticleMainContent = createPageElement(
  "p",
  sectionGalleryArticleMain,
  "section__content",
  "",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a magna nec massa congue pretium. Mauris vehicula condimentum tempor. Suspendisse ullamcorper neque ac mi condimentum, a sollicitudin ligula lacinia. Sed scelerisque urna at tortor aliquet euismod. Quisque eleifend enim sollicitudin vulputate auctor. Integer pulvinar, ipsum eu pharetra aliquet, libero odio pretium turpis, vitae semper dolor leo id purus. Praesent leo odio, volutpat nec erat eget, rhoncus tincidunt libero. Donec a enim sed arcu volutpat hendrerit a eget nunc. Integer euismod molestie metus et hendrerit. Etiam venenatis condimentum lorem, sed porttitor dui vulputate vitae."
);

const sectionContact = createPageElement("section", main, "section");
sectionContact.id = "Contact";
const sectionContactArticleMain = createPageElement(
  "article",
  sectionContact,
  "article"
);
const sectionContactArticleMainHeading = createPageElement(
  "h1",
  sectionContactArticleMain,
  "section__heading",
  "",
  "Contact"
);
const sectionContactArticleMainContent = createPageElement(
  "p",
  sectionContactArticleMain,
  "section__content",
  "",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a magna nec massa congue pretium. Mauris vehicula condimentum tempor. Suspendisse ullamcorper neque ac mi condimentum, a sollicitudin ligula lacinia. Sed scelerisque urna at tortor aliquet euismod. Quisque eleifend enim sollicitudin vulputate auctor. Integer pulvinar, ipsum eu pharetra aliquet, libero odio pretium turpis, vitae semper dolor leo id purus. Praesent leo odio, volutpat nec erat eget, rhoncus tincidunt libero. Donec a enim sed arcu volutpat hendrerit a eget nunc. Integer euismod molestie metus et hendrerit. Etiam venenatis condimentum lorem, sed porttitor dui vulputate vitae."
);

function createPageElement(
  $elem = "div",
  $parent = docBod,
  $classList = null,
  $innerText = "",
  $innerHTML = ""
) {
  const elem = document.createElement($elem);
  if ($classList != null) elem.className = $classList;
  if ($innerHTML != "") elem.innerHTML = $innerHTML;
  if ($innerText != "") elem.innerText = $innerText;

  if ($parent == null || $parent === undefined) $parent = docBod;
  $parent.appendChild(elem);
  return elem;
}