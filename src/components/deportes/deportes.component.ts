import { Component } from "@angular/core";

@Component ({
    selector: "app-deportes",
    templateUrl: "./deportes.component.html",
    styleUrl: "./deportes.component.css"
})

export class DeportesComponent {
    public sports: Array<string>;
    public numeros: Array<number>;

    constructor() {
        this.sports = ["Futbol", "Snowboard", "Surf", "Skateboard", "Padel", "Basket", "Dardos"]
        this.numeros = [1, 12, 23, 34, 45, 56, 67, 78, 89, 90]
    }
}