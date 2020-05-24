import {Injectable} from '@angular/core';

@Injectable()
export class empresasService
{
private empresas:any[]= [
    {
      nombre: "Colanta",
      bio: "Colanta es una cooperativa colombiana sin ánimo de lucro fabricante de productos alimenticios que incluye lácteos, refrescos, embutidos, vinos y cereales y exporta a Canadá, Curazao, Estados Unidos, Guatemala, San Martín y Venezuela.",
      img: "assets/img/colanta.png",
      aparicion: "Olímpica, 30 ago. 2019",
      casa:"colanta"
    },
    {
      nombre: "Zenú",
      bio: "El originen del nombre Zenú nace como homenaje a la región donde realizaban sus actividades de ganadería. Los habitantes nativos llamaban Zenú al río que hoy conocemos como Sinú. En 1959, se realiza un gran avance en la presentación de las carnes frías, pues es en este año cuando el empaque incluye un abre fácil el cual consistía en una llave en forma de T, es decir, ya no se requería de abre-latas, lo cual le daba el concepto de portabilidad al producto.",
      img: "assets/img/zenu.png",
      aparicion: "Olímpica, 30 ago. 2019",
      casa:"zenu"
    },
    {
      nombre: "Alpina",
      bio: "Alpina Productos Alimenticios S.A. es una empresa multinacional colombiana productora de alimentos  a base de lácteos.Tiene operación en Colombia, Ecuador, Venezuela y Estados Unidos y comercializa sus productos en centro América.Alpina se caracteriza por sus productos que son en su mayoría enfocados a los niños.",
      img: "assets/img/alpina.png",
      aparicion: "Mercaldas, 24 abril 2020",
      casa: "alpina"
    },
    {
      nombre: "luker",
      bio: "Esta es una lista de las empresas más representativas del tercer país más poblado de América Latina, Colombia. Sus principales industrias incluyen productos textiles, procesamiento de alimentos, petróleo, ropa y calzado, bebidas, productos químicos, cemento, oro, carbón y esmeraldas..",
      img: "assets/img/luker.png",
      aparicion: "Mercaldas, 24 abril 2020",
      casa:"luker"
    },
    {
      nombre: "Super",
      bio: "Un visionario emprendedor llega a Manizales para fabricar chicles y turrones de coco, en un pequeño taller llamado Fábrica de dulces Superman.",
      img: "assets/img/super.png",
      aparicion: "Mercaldas, 12 de marzo 2020",
      casa: "super"
    },
    {
      nombre: "Nutresa",
      bio: "Grupo Nutresa, anteriormente Grupo Nacional de Chocolates S.A. es un conglomerado de procesamiento de alimentos con sede en Medellín, Colombia. La principal actividad del grupo es operar la industria alimenticia con enfoque en producir, distribuir y vender embutidos, galletas, chocolates, café, helado y pasta.",
      img: "assets/img/nutresa.png",
      aparicion: "Ara, 24 de diciembre 2020",
      casa: "nutresa"
    },
    {
      nombre: "Frito lay",
      bio: "es una filial estadounidense de PepsiCo que fabrica, comercializa y vende chips de maíz, patatas fritas y otros aperitivos. Las principales marcas de snacks producidas bajo el nombre de Frito-Lay incluyen los chips de maíz Fritos, Cheetos, Doritos y Tostitos, Lay's y Ruffles, Gold Rold y Walkers, cada uno de los cuales generó ventas mundiales anuales por más de mil millones de dólares en 2009.La sede principal está ubicada en Plano, un suburbio de Dallas. También operan desde una planta ubicada en Beloit que está en proceso de expansión.",
      img: "assets/img/frito-lay.png",
      aparicion: "Mercaldas,30 de marzo 2020",
      casa: "frito-lay"
    }
  ];
  constructor()
  {}
  getEmpresas():Empresa[]
  {
      return this.empresas
  }
}

export interface Empresa{
  bio: string;
    img: string;
    aparicion: string;
    casa: string;
}