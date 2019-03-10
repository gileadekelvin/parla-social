export class Parlamentar {

    public id: string;
    public house: string;
    public electoral_name: string;
    public civil_name: string;
    public party: string;
    public state: string;
    public twitter: string;
    public facebook: string;
    
    constructor(parlamentar: any) {
      this.id = parlamentar.id; 
      this.house = parlamentar.house;
      this.electoral_name = parlamentar.electoral_name;
      this.civil_name = parlamentar.civil_name;
      this.party = parlamentar.party;
      this.state = parlamentar.state;
      this.twitter = parlamentar.twitter;
      this.facebook = parlamentar.facebook;      
    }
  
    getFoto(): string {
      return "https://www.camara.leg.br/internet/deputado/bandep/" + this.id + ".jpg";
    }
  }