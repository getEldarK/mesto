export default class Section {
    constructor({ items, renderer }, selector) {
        this._initialArray = items;
        this._renderer = renderer; // renderer — это функция
      
        this._container = document.querySelector(selector);
    }

    renderItems() {
        this._initialArray.forEach(item => {
        this._renderer(item);
        });
    };
    
    setItem(element) {
        this._container.prepend(element);
    };
} 