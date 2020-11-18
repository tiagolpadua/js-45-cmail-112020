import { Component } from '@angular/core';
import { PageDataService } from 'src/app/services/page.service';
@Component({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.css',
        './header-search.css'
    ]
})
export class HeaderComponent {

    tituloDaPagina = 'CMail';

    private _isMenuOpen = false;

    constructor(private pageService: PageDataService) {
        // Assinando titulo de PageDataService.
        this.pageService
            .titulo
            .subscribe(novoTitulo => this.tituloDaPagina = novoTitulo);
    }

    get isMenuOpen(): boolean {
        return this._isMenuOpen;
    }

    toggleMenu(): void {
        this._isMenuOpen = !this.isMenuOpen;
    }
}
