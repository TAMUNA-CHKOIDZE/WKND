// შავი ჰედერის ექაუნთი
let account = document.querySelector(".header_black_img");
let signUp = document.querySelector(".signUp");
let cencel = document.querySelector(".cancelbtn");
let sign = document.querySelector(".signupbtn");

account.addEventListener("click", function (e) {
    signUp.classList.toggle("signUp_active")
    document.querySelector(".form").classList.toggle("opacity")
});

cencel.addEventListener("click", function (e) {
    signUp.classList.toggle("signUp_active")
    document.querySelector(".form").classList.toggle("opacity")
});





// თეთრი ჰედერის ნავიგაციაზე ჰოვერი

let ul = document.querySelector(".ul");
let text = ["MAGAZINE", "ADVENTURES", "FAQ", "About us"];
for (let i = 0; i < 4; i++) {
    let list = document.createElement('li');
    list.innerHTML = text[i];
    ul.appendChild(list);
    list.addEventListener("mouseover", function (e) {
        list.classList.add("liActive");
    })
    list.addEventListener("mouseout", function (e) {
        list.classList.remove("liActive");
    })
}




// მენიუს ბურგერი მობილური ვერსიისთვის

let text1 = ["MAGAZINE", "ADVENTURES", "FAQ", "About us"];
let menuUl = document.createElement("ul");
let menu = document.querySelector(".menu");
let headerWhite = document.querySelector(".header_white");
menu.addEventListener("click", function (e) {
    let meniuList = document.createElement("div");
    meniuList.classList.add("meniudiv");
    headerWhite.appendChild(meniuList);
    headerWhite.appendChild(menuUl);
    let cencel = document.createElement("img");
    cencel.classList.add("cencel")
    cencel.src = "https://uxwing.com/wp-content/themes/uxwing/download/48-checkmark-cross/cancel.png";
    meniuList.appendChild(cencel);
    cencel.addEventListener("click", function (e) {
        meniuList.style.display = "none";
        meniuList.appendChild(menuUl);
    })


    for (let i = 0; i < 4; i++) {
        let list = document.createElement('li');
        list.innerHTML = text1[i];
        menuUl.appendChild(list);
        list.addEventListener("mouseover", function (e) {
            list.classList.add("liActive");
        })
        list.addEventListener("mouseout", function (e) {
            list.classList.remove("liActive");
        })
        menuUl.classList.add("menuUl");
        list.classList.add("menuli")
    }



})









// სერჩის ინფუთზე ანიმაცია
let imageSearch = document.querySelector(".search");
let searchInput = document.querySelector(".inputForSearch");
let hasPlaceholder = false;
imageSearch.addEventListener("click", function () {
    searchInput.classList.toggle("search_active");
    hasPlaceholder ? searchInput.setAttribute('disabled', true) : searchInput.removeAttribute("Disabled")
    hasPlaceholder ? searchInput.removeAttribute('placeholder') : searchInput.setAttribute('placeholder', 'Search...')
    hasPlaceholder = !hasPlaceholder
})




// სლაიდერი
let slides = document.querySelectorAll(".slider, .item, .item.active");
let nextSlide = document.querySelector(".right_arrow");
let prevSlide = document.querySelector(".left_arrow");
let totalSlides = slides.length;
let index = 1;

let dots = document.querySelectorAll(".second_section_dots, .second_section_dots1, .second_section_dots1.black");

nextSlide.onclick = function () {
    next("next");
}
prevSlide.onclick = function () {
    next("prev");
}



function next(direction) {

    if (direction == "next") {
        if (index == totalSlides - 1) {
            index = 0;
        }
        index++;
    }
    else
        if (direction == "prev") {
            if (index <= 1) {
                index = totalSlides - 1;
            }
            else {
                index--;
            }
        }
    for (i = 0; i < totalSlides; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("black");
    }
    console.log(index);
    slides[index].classList.add("active");
    dots[index].classList.add("black");
}








// Last_Article-ში ანიმაციური ხაზი
let line = document.querySelector(".Last_Article_line");
let rect = line.getBoundingClientRect();
document.addEventListener("scroll", function () {
    if (window.scrollY = rect.top) {
        line.classList.add("lineAnimation");
    }
})







// დაიწყო მეხუთე სექცია: Where do you want to go ?
let go1 = document.getElementById("go1");
let go2 = document.getElementById("go2");
let go3 = document.getElementById("go3");
let go4 = document.getElementById("go4");

let nextAdventures = document.querySelector(".Next_Adventures");
let adventureTitle = document.querySelector(".Next_Adventures_text_title");
let adventuresText = document.querySelector(".Next_Adventures_text_content");

go1.addEventListener("mouseover", function (e) {
    nextAdventures.style.backgroundImage = "url('/image/where1.png')";
    adventureTitle.innerHTML = "WHISTLER MOUNTAIN BIKING";
    adventuresText.innerHTML = "CYCLING";
})
go1.addEventListener("mouseout", function (e) {
    nextAdventures.style.backgroundImage = "url('/image/climbing.png')";
    adventureTitle.innerHTML = "Climbing New Zealand";
    adventuresText.innerHTML = "Let us help you make your New Zealand climbing vacation a memory you will cherish forever! Come join us for a guided rock climbing adventure in the mountains that trained Sir Edmund Hilary."
})


go2.addEventListener("mouseover", function (e) {
    nextAdventures.style.backgroundImage = "url('../image/where2.png')";
    adventureTitle.innerHTML = "SURF CAMP IN COSTA RICA"
    adventuresText.innerHTML = "Surfing"
})
go2.addEventListener("mouseout", function (e) {
    nextAdventures.style.backgroundImage = "url('../image/climbing.png')";
    adventureTitle.innerHTML = "Climbing New Zealand"
    adventuresText.innerHTML = "Let us help you make your New Zealand climbing vacation a memory you will cherish forever! Come join us for a guided rock climbing adventure in the mountains that trained Sir Edmund Hilary."
})


go3.addEventListener("mouseover", function (e) {
    nextAdventures.style.backgroundImage = "url('../image/where3.png')";
    adventureTitle.innerHTML = "SKI TOURING MONT BLANC"
    adventuresText.innerHTML = "SKIING"
})
go3.addEventListener("mouseout", function (e) {
    nextAdventures.style.backgroundImage = "url('../image/climbing.png')";
    adventureTitle.innerHTML = "Climbing New Zealand"
    adventuresText.innerHTML = "Let us help you make your New Zealand climbing vacation a memory you will cherish forever! Come join us for a guided rock climbing adventure in the mountains that trained Sir Edmund Hilary."
})


go4.addEventListener("mouseover", function (e) {
    nextAdventures.style.backgroundImage = "url('../image/where4.png')";
    adventureTitle.innerHTML = "RIVERSIDE CAMPING"
    adventuresText.innerHTML = "CAMPING"
})
go4.addEventListener("mouseout", function (e) {
    nextAdventures.style.backgroundImage = "url('../image/climbing.png')";
    adventureTitle.innerHTML = "Climbing New Zealand"
    adventuresText.innerHTML = "Let us help you make your New Zealand climbing vacation a memory you will cherish forever! Come join us for a guided rock climbing adventure in the mountains that trained Sir Edmund Hilary."
})
// დასრულდა მეხუთე სექცია: Where do you want to go ?





// დაიწყო მეექვსე სექცია:wknd_inbox  
let wkndBox = document.querySelector(".wknd_inbox_text");
let emailInput = document.querySelector(".email_input");
let inboxBtn = document.querySelector(".wknd_inbox_btn");
let title1 = document.querySelector(".wknd_inbox_text_title");
let wkndPH = document.querySelector(".wknd_inbox_text_p_h");
let wkntP = document.querySelector(".wknd_inbox_text_content");
let title = document.createElement("h1");
wkndPH.appendChild(title);

inboxBtn.addEventListener("click", function () {
    if (emailInput.value == "") {
        title.innerHTML = "Please enter your email address!!!"
        title.classList.add("inboxTitlee");
        wkntP.style.display = "none";
        title1.style.display = "none";
    } else if (emailInput.value.includes("@gmail.com") == true) {
        title.innerHTML = "WKND in your inbox."
        title.classList.add(".inboxTitle");
        wkntP.style.display = "none";
        emailInput.style.display = "none";
        inboxBtn.style.display = "none";
        title1.style.display = "none";
    }
})
