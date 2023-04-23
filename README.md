LIVE SITE: [""]

# RUNDOWN

- Swiper slides set up to full widht and full height.
- Swipers different animation affects have been commented out to change them easily.
- Can change swiper animation speed with the speed property.

- Use of an event listener on scroll which checks the scroll direction with deltaY which triggers the slidePrev()/slideNext() swiper object function.
- Uses a timeout in order to limit how much the user can scroll any one time.

- Found a swiper object property called allowTouchMove which can be set to false which stops the user from scrolling with a mouse click and drag. 
- Could have only mousewheel scroll in desktop mode and then only mouse click and drag(or screen tap and drag) in mobile/tablet mode!

# Learnt

- Make sure always to always put the swiper cdn script before the javascript file used for its config. ALWAYS DEFER BOTH OF THEM!