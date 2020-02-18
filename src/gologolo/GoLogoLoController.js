import AppsterController from '../appster/AppsterController.js'

export default class GoLogoLoController
 extends AppsterController {
    constructor() {
        super();
    }

    processEditText() {
        this.model.updateText();
    }

    /**
     * This function responds to when the user changes the
     * name of the list via the textfield.
     */
    processChangeNameGoLogoLo = () => {
        var nameTextField = document.getElementById("appster_text_input_modal_textfield_edit").value;
        var getWorkToEdit = this.model.getWorkToEdit();
        getWorkToEdit.setText(nameTextField);
        this.model.view.hideDialog4();
        this.model.view.loadWork(getWorkToEdit);
    }

    addEventHandlersForTheEditScreen()
    {
        var editTextButtonClick = document.getElementById("gologolo_edit_text_button");
        editTextButtonClick.onclick = this.model.view.showDialog4;
        var cancelEditTextButtonModal = document.getElementById("appster_text_input_modal_cancel_button_edit");
        cancelEditTextButtonModal.onclick = this.model.view.hideDialog4;
        var enterEditTextButtonModal = document.getElementById("appster_text_input_modal_enter_button_edit");
        enterEditTextButtonModal.onclick = this.processChangeNameGoLogoLo;
    }
}