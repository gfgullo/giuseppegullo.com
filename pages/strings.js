import React from 'react'
import LocalizedStrings from 'react-localization';

export let strings = new LocalizedStrings({

  en: {
    heroTitle:"Giuseppe Gullo",
    heroSubtitle:"Impreditore Tech, AI Developer",

    who:{
      title:"Chi sono",
      content:"Ho imparato a programmare a <b>13 anni</b> da un letto di ospedale, fino alla maggiore età non mi sono mai focalizzato su di un argomento ma ho utilizzato un mio approccio hacker all'apprendimento per passare da una cosa all'altra senza sosta: sviluppo software, programmazione web, sviluppo web, etichal hacking, comunicazione e marketing. Negli anni ho lanciato alcune dozzine di servizi web e applicazioni per smartphone e tablet, collezionando <b>milioni di utenti</b> in giro per il mondo. Ho co-fondato 3 startup ricoprendo il ruolo di CEO e CTO. Poco più che maggiorenne ho trovato la mia strada: <b>l'intelligenza artificiale</b>, nella mia sfortuna ho avuto la fortuna di poter spendere 3 anni in casa totalmente immerso in questa fantastica disciplina.",
    },
    projects:{
      title:"Alcuni miei progetti",
      subtitle:"Mi sono occupato di progettazione, sviluppo e comunicazione."
    },
    avada:{
      name:"AVADA",
      desc:"La prima app per l'home fitness che crea programmi di allenamento personalizzati sfruttando l'intelligenza artificiale."
    },
    shapeapp:{
      name:"ShapeApp",
      desc:"App mobile per l'home fitness con workout e programmi di allenamento creati dai migliori personal trainer italiani."
    },
    hifit:{
      name:"HiFit",
      desc:"La skill per Alexa che trasforma il tuo Amazon Echo in un dispositivo per l'home fitness."
    },
    hicoach:{
      name:"HiCoach",
      desc:"Il primo assistente virtuale per la tua salute fisica e mentale, disponibile per te 24 ore su 24 su Facebook Messenger."
    },
    owlspot:{
      name:"OwlSpot",
      desc:"Social network di prossimità che permette agli utenti di scoprire eventi e fare nuove amicizie."
    },
    brainvsbrain:{
      name:"Brain VS Brain",
      desc:"Sfida i tuoi amici a colpi di logica, con questo social game per smartphone e tablet."
    },

    goals:{
      title:"I miei obiettivi",
      content:"Sono sempre stato impegnato in <b>progetti imprenditoriali tecnologici a sfondo sociale</b>, nel settore della salute e dell'istruzione. Sono un fervente sostenitore dell'impatto positivo che la tecnologia può avere sulla nostra società, specialemente le nuove tecniche di intelligenza artificiale. Nel tempo libero mi occupo di <b>divulgazione tecnologica</b>, pienamente convinto che una maggiore cultura digitale possa portare a una <b>rinascita tecnologica dell'Italia</b>, dove i talenti non mancano ma fanno fatica a emergere."
    },

    contact:"Contattami",
    follow:"Seguimi",

    footer:{
      title:"© Giuseppe Gullo",
      content:"Loghi e marchi mostrati in questo sito sono appartengono ai rispettivi proprietari."
    }
  },
 it: {
   heroTitle:"Giuseppe Gullo",
   heroSubtitle:"Impreditore Tech, AI Developer",

   who:{
     title:"Chi sono",
     content:"Ho imparato a programmare a <b>13 anni</b> da un letto di ospedale, fino alla maggiore età non mi sono mai focalizzato su di un argomento ma ho utilizzato un mio approccio hacker all'apprendimento per passare da una cosa all'altra senza sosta: sviluppo software, programmazione web, sviluppo web, etichal hacking, comunicazione e marketing. Negli anni ho lanciato alcune dozzine di servizi web e applicazioni per smartphone e tablet, collezionando <b>milioni di utenti</b> in giro per il mondo. Ho co-fondato 3 startup ricoprendo il ruolo di CEO e CTO. Poco più che maggiorenne ho trovato la mia strada: <b>l'intelligenza artificiale</b>, nella mia sfortuna ho avuto la fortuna di poter spendere 3 anni in casa totalmente immerso in questa fantastica disciplina.",
   },
   projects:{
     title:"Alcuni miei progetti",
     subtitle:"Mi sono occupato di progettazione, sviluppo e comunicazione."
   },
   avada:{
     name:"AVADA",
     desc:"La prima app ad utilizzare l'intelligenza artificiale per creare programmi di allenamento personalizzati."
   },
   shapeapp:{
     name:"ShapeApp",
     desc:"App mobile per l'home fitness con workout e programmi di allenamento creati dai migliori personal trainer italiani."
   },
   hifit:{
     name:"HiFit",
     desc:"La skill per Alexa che trasforma il tuo Amazon Echo in un dispositivo per l'home fitness."
   },
   hicoach:{
     name:"HiCoach",
     desc:"Il primo assistente virtuale per la tua salute fisica e mentale, disponibile per te 24 ore su 24 su Facebook Messenger."
   },
   owlspot:{
     name:"OwlSpot",
     desc:"Social network di prossimità che permette agli utenti di scoprire eventi e fare nuove amicizie."
   },
   brainvsbrain:{
     name:"Brain VS Brain",
     desc:"Sfida i tuoi amici a colpi di logica, con questo social game per smartphone e tablet."
   },

   goals:{
     title:"I miei obiettivi",
     content:"Sono sempre stato impegnato in <b>progetti imprenditoriali tecnologici a sfondo sociale</b>, nel settore della salute e dell'istruzione. Sono un fervente sostenitore dell'impatto positivo che la tecnologia può avere sulla nostra società, specialemente le nuove tecniche di intelligenza artificiale. Nel tempo libero mi occupo di <b>divulgazione tecnologica</b>, essendo pienamente convinto che una maggiore cultura digitale possa portare a una <b>rinascita tecnologica dell'Italia</b>, dove i talenti non mancano ma fanno fatica a emergere."
   },

   contact:"Contattami",
   follow:"Seguimi",

   footer:{
     title:"© Giuseppe Gullo",
     content:"Loghi e marchi mostrati in questo sito sono appartengono ai rispettivi proprietari."
   }
 }
});

export let place = (key, subkey=null) =>{

  try{
    if(subkey != null)
      return <td dangerouslySetInnerHTML={{__html: strings[key][subkey]}} />
    return <td dangerouslySetInnerHTML={{__html: strings[key]}} />
  }
  catch(err){
    return "ERROR"
  }
}
