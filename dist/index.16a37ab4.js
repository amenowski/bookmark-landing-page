"use strict";
// TABBED COMPOTENT
const btnContainer = document.querySelector(`.features__tabbed-btns-container`);
const btns = [
    ...document.querySelectorAll(`.features__tabbed-btn`)
];
const featuresContent = [
    ...document.querySelectorAll(`.features__content`)
];
btnContainer.addEventListener(`click`, (e)=>{
    const btn = e.target;
    if (btn.closest(`features__tabbed-btn`)) return;
    // Removing active state from btns
    btns.forEach((btn)=>btn.classList.remove(`features__tabbed-btn--active`));
    //   Removing active state from content
    featuresContent.forEach((con)=>con.classList.remove(`features__content--active`));
    btn.classList.add(`features__tabbed-btn--active`);
    document.querySelector(`.features__content--${btn.dataset.tab}`).classList.add(`features__content--active`);
});
// ACCORDION COMPONENT
const accordionContainer = document.querySelector(`.accordion__panel-container`);
accordionContainer.addEventListener(`click`, (e)=>{
    const clicked = e.target.closest(`.accordion__panel`);
    if (!clicked) return;
    toggleAccordion(clicked);
});
const toggleAccordion = (panelToActivate)=>{
    const activeBtn = panelToActivate.querySelector(`.accordion__panel-icon`);
    const activePanel = panelToActivate.querySelector(`.accordion__panel-content`);
    const activeIsPanelOpened = activeBtn.getAttribute(`aria-expanded`);
    if (activeIsPanelOpened === `true`) {
        panelToActivate.querySelector(`.accordion__panel-icon`).setAttribute(`aria-expanded`, false);
        panelToActivate.querySelector(`.accordion__panel-content`).setAttribute(`aria-hidden`, true);
        panelToActivate.querySelector(`.accordion__panel-icon`).classList.add(`accordion__panel-icon--deactive`);
        panelToActivate.querySelector(`.accordion__panel-icon`).classList.remove(`accordion__panel-icon--active`);
    }
    if (activeIsPanelOpened === `false`) {
        panelToActivate.querySelector(`.accordion__panel-icon`).setAttribute(`aria-expanded`, true);
        panelToActivate.querySelector(`.accordion__panel-content`).setAttribute(`aria-hidden`, false);
        panelToActivate.querySelector(`.accordion__panel-icon`).classList.remove(`accordion__panel-icon--deactive`);
        panelToActivate.querySelector(`.accordion__panel-icon`).classList.add(`accordion__panel-icon--active`);
    }
};
// MOBILE NAV
const mobileBtn = document.querySelectorAll(`.header__menu-icon`);
mobileBtn.forEach((btn)=>btn.addEventListener(`click`, function() {
        const mobileBtnOpen = document.querySelector(`.header__menu-icon--open`);
        const mobileBtnClose = document.querySelector(`.header__menu-icon--close`);
        const list = document.querySelector(`.header__list`);
        list.classList.toggle(`header__list--active`);
        mobileBtnOpen.classList.toggle(`header__menu-icon--active`);
        mobileBtnClose.classList.toggle(`header__menu-icon--active`);
        const circleSvg = document.querySelector(`.header__circle-svg`);
        circleSvg.classList.toggle(`header__circle-svg--active`);
    }));

//# sourceMappingURL=index.16a37ab4.js.map
