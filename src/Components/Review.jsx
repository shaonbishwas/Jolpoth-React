import "./components.css";

export const Review = () => {
  const wrapper = document.querySelector(".wrapper");
  const carousel = document.querySelector(".carousel");
  const firstCardWidth = carousel.querySelector(".card").offsetWidth;
  const arrowBtns = document.querySelectorAll(".wrapper i");
  const carouselChildrens = [...carousel.children];

  let isDragging = false,
    isAutoPlay = true,
    startX,
    startScrollLeft,
    timeoutId;

  // Get the number of cards that can fit in the carousel at once
  let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

  // Insert copies of the last few cards to beginning of carousel for infinite scrolling
  carouselChildrens
    .slice(-cardPerView)
    .reverse()
    .forEach((card) => {
      carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

  // Insert copies of the first few cards to end of carousel for infinite scrolling
  carouselChildrens.slice(0, cardPerView).forEach((card) => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
  });

  // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
  carousel.classNameList.add("no-transition");
  carousel.scrollLeft = carousel.offsetWidth;
  carousel.classNameList.remove("no-transition");

  // Add event listeners for the arrow buttons to scroll the carousel left and right
  arrowBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      carousel.scrollLeft +=
        btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
  });

  const dragStart = (e) => {
    isDragging = true;
    carousel.classNameList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
  };

  const dragStop = () => {
    isDragging = false;
    carousel.classNameList.remove("dragging");
  };

  const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if (carousel.scrollLeft === 0) {
      carousel.classNameList.add("no-transition");
      carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
      carousel.classNameList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if (
      Math.ceil(carousel.scrollLeft) ===
      carousel.scrollWidth - carousel.offsetWidth
    ) {
      carousel.classNameList.add("no-transition");
      carousel.scrollLeft = carousel.offsetWidth;
      carousel.classNameList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if (!wrapper.matches(":hover")) autoPlay();
  };

  const autoPlay = () => {
    if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
  };
  autoPlay();

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  carousel.addEventListener("scroll", infiniteScroll);
  wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
  wrapper.addEventListener("mouseleave", autoPlay);
  return (
    <div className="mx-auto">
      <div className="text-center mt-20 space-y-3">
        <h1 className="text-4xl font-bold">What Our Client Says</h1>
        <p className="font-mono">
          Explore Authentic Travel Stories: Dive Into Personal Testimonials from
          Our Valued Clients Sharing Their Unforgettable Adventures!
        </p>
      </div>
      <div className="wrapper">
        <i id="left" className="fa-solid fa-angle-left arrow"></i>
        <ul className="carousel py-2">
          <li className="card space-y-3 shadow rounded-2xl">
            <div className="flex justify-between w-4/5 mx-auto">
              <div className="flex items-center gap-4">
                <img src="./assets/Ellipse 2.png" alt="" />
                <div>
                  <h3 className="font-bold text-lg">611hildev</h3>
                  <h6>Oostrozebeke, Bélgica</h6>
                </div>
              </div>
              <h5 className="text-6xl">
                <i className="fa-solid fa-quote-left" style="color: #f7a582"></i>
              </h5>
            </div>
            <p className="w-4/5 mx-auto">
              This was one of the most beautiful experiences in my life!!! so
              beautiful!! the people..so warm! so colourfull! unforgettable!
            </p>
          </li>
          <li className="card space-y-3 shadow rounded-2xl">
            <div className="flex justify-between w-4/5 mx-auto">
              <div className="flex items-center gap-4">
                <img src="./assets/Ellipse 3.png" alt="" />
                <div>
                  <h3 className="font-bold text-lg">Masseroliviero</h3>
                  <h6>Bergamo, Italia</h6>
                </div>
              </div>
              <h5 className="text-6xl">
                <i className="fa-solid fa-quote-left" style="color: #f7a582"></i>
              </h5>
            </div>
            <p className="w-4/5 mx-auto">
              I highly recommend this guide. I have been 22 times to Bangladesh
              and I have been able to discover the truest and most exciting
              Bangladesh. I will be back soon and will be with him. Very
              professional and helpful.
            </p>
          </li>
          <li className="card space-y-3 shadow rounded-2xl">
            <div className="flex justify-between w-4/5 mx-auto">
              <div className="flex items-center gap-4">
                <img src="./assets/Ellipse 2.png" alt="" />
                <div>
                  <h3 className="font-bold text-lg">snorkelmilano</h3>
                  <h6>Milán, Italia</h6>
                </div>
              </div>
              <h5 className="text-6xl">
                <i className="fa-solid fa-quote-left" style="color: #f7a582"></i>
              </h5>
            </div>
            <p className="w-4/5 mx-auto">
              The boat on the Buriganga River, The visit to the ethnic villages,
              Fantastic landskapes, People smiling and asking to be photografed,
              Very tasted food
            </p>
          </li>
          <li className="card space-y-3 shadow rounded-2xl">
            <div className="flex justify-between w-4/5 mx-auto">
              <div className="flex items-center gap-4">
                <img src="./assets/Ellipse 3.png" alt="" />
                <div>
                  <h3 className="font-bold text-lg">Jules B</h3>
                  <h6>Unknown</h6>
                </div>
              </div>
              <h5 className="text-6xl">
                <i className="fa-solid fa-quote-left" style="color: #f7a582"></i>
              </h5>
            </div>
            <p className="w-4/5 mx-auto">
              Fue un hermoso viaje de unos días en el Bramaputra, visitando
              pueblos a los que solo se puede llegar en barco. Towfiqul fue una
              guía amable y valiosa para visitar este hermoso y difícil país.
            </p>
          </li>
          <li className="card space-y-3 shadow rounded-2xl">
            <div className="flex justify-between w-4/5 mx-auto">
              <div className="flex items-center gap-4">
                <img src="./assets/Ellipse 2.png" alt="" />
                <div>
                  <h3 className="font-bold text-lg">Mona L</h3>
                  <h6>Oostrozebeke, Bélgica</h6>
                </div>
              </div>
              <h5 className="text-6xl">
                <i className="fa-solid fa-quote-left" style="color: #f7a582"></i>
              </h5>
            </div>
            <p className="w-4/5 mx-auto">
              This was one of the most beautiful experiences in my life!!! so
              beautiful!! the people..so warm! so colourfull! unforgettable!
              Titu is an excellent guide!
            </p>
          </li>
          <li className="card space-y-3 shadow rounded-2xl">
            <div className="flex justify-between w-4/5 mx-auto">
              <div className="flex items-center gap-4">
                <img src="./assets/Ellipse 2.png" alt="" />
                <div>
                  <h3 className="font-bold text-lg">andrealorenzato7</h3>
                  <h6>Unknown</h6>
                </div>
              </div>
              <h5 className="text-6xl">
                <i className="fa-solid fa-quote-left" style="color: #f7a582"></i>
              </h5>
            </div>
            <p className="w-4/5 mx-auto">
              Fui a Bangladesh para vivir y descubrir el país y puedo decir
              fácilmente que fue increíble. Visité la mayor parte del país en un
              viaje por carretera y también tuve la oportunidad de navegar por
              el río Brahmaputra en un barco con el tour Waterways. Una gran
              experiencia que recomendaría a cualquiera.
            </p>
          </li>
        </ul>
        <i id="right" className="fa-solid fa-angle-right arrow"></i>
      </div>
    </div>
  );
};
