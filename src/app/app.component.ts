import { Component } from "@angular/core";
import { IDropdownSettings } from "ng-multiselect-dropdown";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  dropdownList = [
    { id: "1", title: "Button", path: "demo-button" },
    { id: "2", title: "Selection Control", path: "demo-selection-control" },
    { id: "3", title: "Input", path: "demo-input" },
    { id: "4", title: "Snackbar", path: "demo-snack-bar" },
    { id: "5", title: "Chips", path: "demo-chips" },
    { id: "6", title: "Progress Tabs", path: "demo-vertical-tabs" },
    { id: "7", title: "Typography", path: "demo-wip" },
    { id: "8", title: "Card", path: "demo-wip" },
    { id: "9", title: "Pagination", path: "demo-wip" },
    { id: "10", title: "Progress Tabs", path: "demo-wip" }
  ];
  dropdownSettings: IDropdownSettings = {
    singleSelection: true,
    idField: "id",
    textField: "title",
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  dropdownSettingsFoMultiple: IDropdownSettings = {
    singleSelection: false,
    idField: "id",
    textField: "title",
    selectAllText: "Select All",
    unSelectAllText: "UnSelect All",
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  dropDownObj = {
    dropdownHeading: "DEFAULT",
    dropdownList: this.dropdownList,
    dropdownSettings: this.dropdownSettings
  };
  dropDown = {
    dropdownHeading: "DROPDOWN",
    dropdownList: this.dropdownList,
    dropdownSettings: this.dropdownSettingsFoMultiple
  };
}
