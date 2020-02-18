import AppsterController from '../appster/AppsterController.js'

export default class GoLogoLoController
 extends AppsterController {
    constructor() {
        super();
    }

    processEditText() {
        this.model.updateText();
    }

    addEventHandlersForTheEditScreen()
    {
        console.log("This is being called on.");
    }
}