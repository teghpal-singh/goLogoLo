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

    /**
     * This function responds to when the user changes the
     * font size slider.
     */
    processChangeFontSizeGoLogoLo = () => {
        var fontSizeSlider = document.getElementById("gologolo_font_size_slider").value;
        if (fontSizeSlider <= 5)
        {
            fontSizeSlider = 5;
        }
        var getWorkToEdit = this.model.getWorkToEdit();
        getWorkToEdit.setFontSize(fontSizeSlider);

        //var borderRadiusSlider = document.getElementById("gologolo_border_radius_slider");
        //var goLogoLoDiv = document.getElementById("gologolo_text").offsetHeight;
        //borderRadiusSlider.max = goLogoLoDiv;

        console.log(getWorkToEdit.getFontSize());
        this.model.view.loadWork(getWorkToEdit);
    }

    /**
     * This function responds to when the user changes the
     * text color picker.
     */
    processChangeTextColorGoLogoLo = () => {
        var textColorPicker = document.getElementById("gologolo_text_color_picker").value;
        var getWorkToEdit = this.model.getWorkToEdit();
        getWorkToEdit.setTextColor(textColorPicker);
        this.model.view.loadWork(getWorkToEdit);
    }

    /**
     * This function responds to when the user changes the
     * background color picker.
     */
    processChangeBackgroundColorGoLogoLo = () => {
        var backgroundColorPicker = document.getElementById("gologolo_background_color_picker").value;
        var getWorkToEdit = this.model.getWorkToEdit();
        getWorkToEdit.setBackgroundColor(backgroundColorPicker);
        this.model.view.loadWork(getWorkToEdit);
    }

    /**
     * This function responds to when the user changes the
     * border color picker.
     */
    processChangeBorderColorGoLogoLo = () => {
        var borderColorPicker = document.getElementById("gologolo_border_color_picker").value;
        var getWorkToEdit = this.model.getWorkToEdit();
        getWorkToEdit.setBorderColor(borderColorPicker);
        this.model.view.loadWork(getWorkToEdit);
    }

     /**
     * This function responds to when the user changes the
     * border radius slider.
     */
    processChangeBorderRadiusGoLogoLo = () => {
        var borderRadiusSlider = document.getElementById("gologolo_border_radius_slider");
        var getWorkToEdit = this.model.getWorkToEdit();
        getWorkToEdit.setBorderRadius(borderRadiusSlider.value);
        this.model.view.loadWork(getWorkToEdit);
    }

    /**
     * This function responds to when the user changes the
     * border thickness slider.
     */
    processChangeBorderThicknessGoLogoLo = () => {
        var borderThickSlider = document.getElementById("gologolo_border_thickness_slider").value;
        var getWorkToEdit = this.model.getWorkToEdit();
        getWorkToEdit.setBorderThickness(borderThickSlider);
        this.model.view.loadWork(getWorkToEdit);
    }

    /**
     * This function responds to when the user changes the
     * padding slider.
     */
    processChangePaddingGoLogoLo = () => {
        var paddingSlider = document.getElementById("gologolo_padding_slider").value;
        var getWorkToEdit = this.model.getWorkToEdit();
        getWorkToEdit.setPadding(paddingSlider);
        this.model.view.loadWork(getWorkToEdit);
    }

    /**
     * This function responds to when the user changes the
     * margin slider.
     */
    processChangeMarginGoLogoLo = () => {
        var marginSlider = document.getElementById("gologolo_margin_slider").value;
        var getWorkToEdit = this.model.getWorkToEdit();
        getWorkToEdit.setMargin(marginSlider);
        this.model.view.loadWork(getWorkToEdit);
    }

    addEventHandlersForTheEditScreen()
    {
        //edit screen handlers
        //edit text button handler
        var editTextButtonClick = document.getElementById("gologolo_edit_text_button");
        editTextButtonClick.onclick = this.model.view.showDialog4;
        var cancelEditTextButtonModal = document.getElementById("appster_text_input_modal_cancel_button_edit");
        cancelEditTextButtonModal.onclick = this.model.view.hideDialog4;
        var enterEditTextButtonModal = document.getElementById("appster_text_input_modal_enter_button_edit");
        enterEditTextButtonModal.onclick = this.processChangeNameGoLogoLo;
        //font size handler
        var fontSizeSlider = document.getElementById("gologolo_font_size_slider");
        fontSizeSlider.onchange = this.processChangeFontSizeGoLogoLo;
        //text color handler
        var textColor = document.getElementById("gologolo_text_color_picker");
        textColor.onchange = this.processChangeTextColorGoLogoLo;
        //background color handler
        var backgroundColor = document.getElementById("gologolo_background_color_picker");
        backgroundColor.onchange = this.processChangeBackgroundColorGoLogoLo;
        //border color handler
        var borderColor = document.getElementById("gologolo_border_color_picker");
        borderColor.onchange = this.processChangeBorderColorGoLogoLo;
        //border radius handler
        var borderRadius = document.getElementById("gologolo_border_radius_slider");
        borderRadius.onchange = this.processChangeBorderRadiusGoLogoLo;
        //border thickness handler
        var borderThick = document.getElementById("gologolo_border_thickness_slider");
        borderThick.onchange = this.processChangeBorderThicknessGoLogoLo;
        //padding handler
        var padding = document.getElementById("gologolo_padding_slider");
        padding.onchange = this.processChangePaddingGoLogoLo;
        //margin handler
        var margin = document.getElementById("gologolo_margin_slider");
        margin.onchange = this.processChangeMarginGoLogoLo;
    }
}