
if (!customElements.get('announcement-bar')) {
  customElements.define('announcement-bar', class AnnoucmentBar extends HTMLElement {
    constructor() {
      super();

      this.swiperContainer = this.querySelector('.swiper');
      const swiper = new Swiper(this.swiperContainer, {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });
    }
  })
}

  