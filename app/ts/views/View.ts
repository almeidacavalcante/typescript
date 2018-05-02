abstract class View<T> {
    
    private _element: Element;

    constructor(selector: string){  
        this._element = document.querySelector(selector);
    }

    public update(model: T) : void {
        this._element.innerHTML = this.template(model);
    }

    abstract template(model: T) : string;
}