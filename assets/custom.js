
if (!customElements.get('announcement-bar')) {
  customElements.define('announcement-bar', class AnnoucmentBar extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.swiperContainer = this.querySelector('.announcement-bar-swiper');
      this.autoplay = this.getAttribute('autoplay');
      this.delay = Number(this.getAttribute('delay'));

      console.log('autoplay', this.autoplay);
      const settings = {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      }

      if(this.autoplay === 'true'){
        settings.autoplay ={
          delay: this.delay,
          disableOnInteraction: false,
        }
      }
      this.swiper = new Swiper(this.swiperContainer, settings);
    }

    disconnectedCallback() {
      this.swiper.destroy( true, true )
    }
  })
}

  