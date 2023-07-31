///////////////////////////////////////////////////////////////////
//move to start

export function moveToInit() {
    const moveto = new MoveTo();
    const navItems = document.querySelectorAll('.nav__item');
    navItems.forEach((li) => moveto.registerTrigger(li.firstElementChild));
}
//move to end
