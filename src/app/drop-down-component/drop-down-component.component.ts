import { Component, OnInit, Input } from "@angular/core";
import { IDropdownSettings } from "ng-multiselect-dropdown";

@Component({
  selector: "app-drop-down-component",
  templateUrl: "./drop-down-component.component.html",
  styleUrls: ["./drop-down-component.component.css"]
})
export class DropDownComponentComponent implements OnInit {
  selectedItems = [];
  ngOnInit() {
    console.log("test" + this.dropDownObj);
  }

  @Input() dropDownObj: any;
}
