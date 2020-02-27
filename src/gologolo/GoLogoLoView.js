import {GoLogoLoGUIClass, GoLogoLoGUIId, GoLogoLoText} from './GoLogoLoConstants.js'
import {AppsterHTML, AppsterSymbols, AppsterGUIId, AppsterGUIClass} from '../appster/AppsterConstants.js'
import AppsterView from '../appster/AppsterView.js'
import GoLogoLoLogo from './GoLogoLoLogo.js';

export default class GoLogoLoView extends AppsterView {
    constructor() {
        super();
    }

    fillAppWorkspace(workspace) {
        let colorPickerAttributes = [];
        colorPickerAttributes[AppsterHTML.TYPE] = AppsterHTML.COLOR;
        let rangeAttributes = [];
        rangeAttributes[AppsterHTML.TYPE] = AppsterHTML.RANGE;

        // FIRST MAKE THE TOOLBAR
        let toolbar = this.buildElement(AppsterHTML.DIV, GoLogoLoGUIId.GOLOGOLO_TOOLBAR);
        let editTextButton = this.buildElement(AppsterHTML.BUTTON, GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_BUTTON, [], [], GoLogoLoText.GOLOGOLO_EDIT_TEXT_TEXT);
        //editTextButton.innerHTML = AppsterSymbols.EDIT;
        let fontSizeSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER, [], rangeAttributes);
        let textColorPicker = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER, [], colorPickerAttributes);
        let backgroundColorPicker = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER, [], colorPickerAttributes);
        let borderColorPicker = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER, [], colorPickerAttributes);
        let borderRadiusSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER, [], rangeAttributes);
        let borderThicknessSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER, [], rangeAttributes);
        let paddingSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER, [], rangeAttributes);
        let marginSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER, [], rangeAttributes);
        let textDiv = this.buildElement(AppsterHTML.DIV, GoLogoLoGUIId.GOLOGOLO_TEXT);
        let promptClass = [GoLogoLoGUIClass.GOLOGOLO_CONTROL_PROMPT];
        toolbar.appendChild(editTextButton);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_FONT_SIZE_TEXT));
        toolbar.appendChild(fontSizeSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_TEXT_COLOR_TEXT));
        toolbar.appendChild(textColorPicker);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BACKGROUND_COLOR_TEXT));
        toolbar.appendChild(backgroundColorPicker);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BORDER_COLOR_TEXT));
        toolbar.appendChild(borderColorPicker);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BORDER_RADIUS_TEXT));
        toolbar.appendChild(borderRadiusSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BORDER_THICKNESS_TEXT));
        toolbar.appendChild(borderThicknessSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_PADDING_TEXT));
        toolbar.appendChild(paddingSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_MARGIN_TEXT));
        toolbar.appendChild(marginSlider);

        workspace.appendChild(toolbar);
        workspace.appendChild(textDiv);
        return workspace;
    }

    loadWork(work) {
        let textDiv = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        textDiv.innerHTML = work.getText();
        let fontSizeSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER);
        fontSizeSlider.value = work.getFontSize();
        let textColorPicker = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER);
        textColorPicker.value = work.getTextColor();
        let backgroundColorPicker = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER);
        backgroundColorPicker.value = work.getBackgroundColor();
        let borderColorPicker = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER);
        borderColorPicker.value = work.getBorderColor();
        let borderRadiusSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER);
        borderRadiusSlider.value = work.getBorderRadius();
        let borderThicknessSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER);
        borderThicknessSlider.value = work.getBorderThickness();
        let paddingSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER);
        paddingSlider.value = work.getPadding();
        let marginSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER);
        marginSlider.value = work.getMargin();
        this.loadWorkStyle(work);
    }

    loadWorkStyle(work) {
        let textDiv = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        textDiv.style.fontSize = work.getFontSize() + "px";
        textDiv.style.color = work.getTextColor();
        textDiv.style.backgroundColor = work.getBackgroundColor();
        textDiv.style.borderColor = work.getBorderColor();
        textDiv.style.borderRadius = work.getBorderRadius() + "px";
        textDiv.style.borderWidth = work.getBorderThickness() + "px";
        textDiv.style.borderStyle = work.getBorderStyle();
        textDiv.style.padding = work.getPadding() + "px";
        textDiv.style.margin = work.getMargin() + "px";
    }

    addListItem(initText) {
        let textList = document.getElementById(RTA_GUIId.RTA_TEXT_LIST);
        let listItemCount = textList.childNodes.length;
        let newListItem = this.buildElement(AppsterHTML.LI, RTA_GUIId.RTA_TEXT_LIST_ITEM 
            + listItemCount);
        newListItem.innerHTML = initText;
        textList.appendChild(newListItem);
    }

    appendLetter(listItemId, letterToAppend) {
        let textList = document.getElementById(listItemId);
        textList.innerHTML += textList.innerHTML + letterToAppend;
    }

    /**
    * This method is for hiding the illegal character dialog.
    */
   hideDialog() {
       let dialog = document.getElementById(AppsterGUIId.APPSTER_CONFIRM_MODAL);
       dialog.classList.remove(AppsterGUIClass.IS_VISIBLE);
   }

   /**
    * This method is for showing the illegal character dialog.
    */
   showDialog() {
       let dialog = document.getElementById(AppsterGUIId.APPSTER_CONFIRM_MODAL);
       dialog.classList.add(AppsterGUIClass.IS_VISIBLE);
   }

   /**
    * This method is for showing the name of the logo user input textbox modal.
    */
   showDialog2() {
    let dialog2 = document.getElementById(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL);
    dialog2.classList.add(AppsterGUIClass.IS_VISIBLE);
    }

    /**
    * This method is for hiding the name of the logo user input textbox modal.
    */
   hideDialog2() {
    let dialog2 = document.getElementById(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL);
    dialog2.classList.remove(AppsterGUIClass.IS_VISIBLE);
    }

    /**
    * This method is for showing if user wants to delete the current editing logo modal.
    */
   showDialog3() {
    let dialog3 = document.getElementById(AppsterGUIId.APPSTER_YES_NO_MODAL);
    dialog3.classList.add(AppsterGUIClass.IS_VISIBLE);
    }

    /**
    * This method is for hiding if user wants to delete the current editing logo modal.
    */
   hideDialog3() {
    let dialog3 = document.getElementById(AppsterGUIId.APPSTER_YES_NO_MODAL);
    dialog3.classList.remove(AppsterGUIClass.IS_VISIBLE);
    }

    /**
    * This method is for showing if user wants to delete the current editing logo modal.
    */
   showDialog4 = () => {
    let edit_textbox = document.getElementById("appster_text_input_modal_textfield_edit");
    edit_textbox.value = this.controller.model.workToEdit.getText();
    let dialog4 = document.getElementById(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_EDIT);
    dialog4.classList.add(AppsterGUIClass.IS_VISIBLE);
    }

    /**
    * This method is for hiding if user wants to delete the current editing logo modal.
    */
   hideDialog4() {
    let dialog4 = document.getElementById(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_EDIT);
    dialog4.classList.remove(AppsterGUIClass.IS_VISIBLE);
    }

    /**
    * This method is for checking if logo name is at least 1 character or not unique.
    */
   minText = () => {
       //console.log(this);
       var textboxLogoCreation = document.getElementById("appster_text_input_modal_textfield");
       var okButtonErrorLogo = document.getElementById("appster_confirm_modal_ok_button");
       okButtonErrorLogo.onclick = this.hideDialog;
       textboxLogoCreation.value = textboxLogoCreation.value.toString().replace(/  +/g, ' ');
        if (textboxLogoCreation.value.length < 1)
        {
            this.hideDialog2();
            this.showDialog();
            textboxLogoCreation.value = "";
        }
        else if (textboxLogoCreation.value.toString().trim().length < 1)
        {
            this.hideDialog2();
            this.showDialog();
            textboxLogoCreation.value = "";
        }
        else if (this.controller.model.getRecentWork(textboxLogoCreation.value) != null)
        {
            this.hideDialog2();
            this.showDialog();
            textboxLogoCreation.value = "";
        }
        else
        {
            let x = new GoLogoLoLogo(textboxLogoCreation.value);
            this.controller.model.prependWork(x);
            this.controller.model.workToEdit = x;
            textboxLogoCreation.value = "";
            this.hideDialog2();
            this.goToEditScreen(x);
            this.loadWork(x);
        }
    }
}