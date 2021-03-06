import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-testimonial',
    templateUrl: './testimonial.component.html',
    styleUrls: ['./testimonial.component.scss']
})
export class AppTestimonialComponent {
    @Input()
    imageSrc!: string;

    @Input()
    bodyText!: string;
}