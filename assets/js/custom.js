// assets/js/custom.js
document.addEventListener('DOMContentLoaded', function () {
    const siteHeader = document.querySelector('.site-header');
    const navigation = document.querySelector('.navigation');
  
    if (siteHeader && navigation) {
      const siteHeaderHeight = siteHeader.offsetHeight;
  
      window.addEventListener('scroll', function () {
        const scrollY = window.scrollY || window.pageYOffset;
  
        if (scrollY >= siteHeaderHeight) {
          navigation.style.position = 'fixed';
          navigation.style.top = '0';
        } else {
          navigation.style.position = 'absolute';
          navigation.style.top = siteHeaderHeight + 'px';
        }
      });
    }
  });
  