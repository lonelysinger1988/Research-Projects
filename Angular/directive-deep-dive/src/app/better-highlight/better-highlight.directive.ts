import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighLightDirective implements OnInit {

    @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
    constructor(private elRef: ElementRef, private render: Renderer2){}

    ngOnInit(): void {

    }

    @HostListener('mouseenter') mouseover(eventData: Event): void{
        // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = 'blue';
    }

    @HostListener('mouseleave') mouseleave(eventData: Event): void{
        // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = 'transparent';
    }
}
