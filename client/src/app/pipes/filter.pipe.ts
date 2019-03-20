import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filters: any): any[] {

    if (!items) return [];

    let itemsFiltered = items;

    if (filters.nome) {
      let searchText = filters.nome.toLowerCase();

      itemsFiltered = items.filter(value => {
        return value.electoral_name.toLowerCase().includes(searchText);
      });
    };

    if (filters.partido && filters.partido !== "Partido") {
      let partido = filters.partido.toLowerCase();
      itemsFiltered = itemsFiltered.filter(value => {        
        return value.party.toLowerCase() === partido;
      })
    }    

    if (filters.casa && filters.casa !== "Casa") {
      let casa = filters.casa.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      itemsFiltered = itemsFiltered.filter(value => {        
        return value.house.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") === casa;
      })
    }    

    return itemsFiltered;
  }
}