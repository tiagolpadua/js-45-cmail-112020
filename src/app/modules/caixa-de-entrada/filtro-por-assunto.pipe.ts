import { Pipe, PipeTransform } from '@angular/core';
import { Email } from '../../models/email';
@Pipe({
    name: 'filtroPorAssunto'
})
export class FiltroPorAssunto implements PipeTransform {
    transform(listaEmails: Email[], termoFiltro: string): Email[] {
        return listaEmails
            .filter(
                email => {
                    if (!termoFiltro) {
                        return true;
                    }
                    return email.assunto && email.assunto.toLowerCase()
                        .includes(termoFiltro.toLowerCase()
                        );
                }
            );
    }
}
