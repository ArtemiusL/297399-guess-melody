class AbstractView {
	constructor ()

	get template () {
		return ` `;
	}
	render (template) {
		const element = document.createElement(`div`);
		const fragment = document.createDocumentFragment();
		element.innerHTML = template;
		fragment.appendChild(element.firstChild);
		return fragment;
	}
	bind(){

	}
	get element() {
		
	}

}