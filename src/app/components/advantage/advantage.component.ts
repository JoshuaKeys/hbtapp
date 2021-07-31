import { Component, Input } from "@angular/core";

@Component({
    templateUrl: "advantage.component.html",
    selector: "app-advantage",
    styleUrls: ["advantage.component.scss"]
})
export class AppAdvantageComponent {
    // @Input() title: string;
    // @Input() description: string;
    iconClasses = 'box__icon fas fa-hotel fa-5x';
    @Input() title: string;
    @Input() description: string = "My Description"
    @Input() icon: string;
    @Input() background: string;
}
