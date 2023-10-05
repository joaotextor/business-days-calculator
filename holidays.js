const CURRENT_YEAR = "2023";

const holidays = {
  national: [
    `01/01/${CURRENT_YEAR}`,
    `02/01/${CURRENT_YEAR}`,
    `03/01/${CURRENT_YEAR}`,
    `04/01/${CURRENT_YEAR}`,
    `05/01/${CURRENT_YEAR}`,
    `06/01/${CURRENT_YEAR}`,
    `07/01/${CURRENT_YEAR}`,
    `08/01/${CURRENT_YEAR}`,
    `09/01/${CURRENT_YEAR}`,
    `10/01/${CURRENT_YEAR}`,
    `11/01/${CURRENT_YEAR}`,
    `12/01/${CURRENT_YEAR}`,
    `13/01/${CURRENT_YEAR}`,
    `14/01/${CURRENT_YEAR}`,
    `15/01/${CURRENT_YEAR}`,
    `16/01/${CURRENT_YEAR}`,
    `17/01/${CURRENT_YEAR}`,
    `18/01/${CURRENT_YEAR}`,
    `19/01/${CURRENT_YEAR}`,
    `20/01/${CURRENT_YEAR}`,
    `20/02/${CURRENT_YEAR}`,
    `21/02/${CURRENT_YEAR}`,
    `05/04/${CURRENT_YEAR}`,
    `06/04/${CURRENT_YEAR}`,
    `07/04/${CURRENT_YEAR}`,
    `21/04/${CURRENT_YEAR}`,
    `01/05/${CURRENT_YEAR}`,
    `11/08/${CURRENT_YEAR}`,
    `07/09/${CURRENT_YEAR}`,
    `12/10/${CURRENT_YEAR}`,
    `28/10/${CURRENT_YEAR}`,
    `01/11/${CURRENT_YEAR}`,
    `02/11/${CURRENT_YEAR}`,
    `08/12/${CURRENT_YEAR}`,
    `20/12/${CURRENT_YEAR}`,
    `21/12/${CURRENT_YEAR}`,
    `22/12/${CURRENT_YEAR}`,
    `23/12/${CURRENT_YEAR}`,
    `24/12/${CURRENT_YEAR}`,
    `25/12/${CURRENT_YEAR}`,
    `26/12/${CURRENT_YEAR}`,
    `27/12/${CURRENT_YEAR}`,
    `28/12/${CURRENT_YEAR}`,
    `29/12/${CURRENT_YEAR}`,
    `30/12/${CURRENT_YEAR}`,
    `31/12/${CURRENT_YEAR}`,
    `01/01/${Number(CURRENT_YEAR) + 1}`,
    `02/01/${Number(CURRENT_YEAR) + 1}`,
    `03/01/${Number(CURRENT_YEAR) + 1}`,
    `04/01/${Number(CURRENT_YEAR) + 1}`,
    `05/01/${Number(CURRENT_YEAR) + 1}`,
    `06/01/${Number(CURRENT_YEAR) + 1}`,
    `07/01/${Number(CURRENT_YEAR) + 1}`,
    `08/01/${Number(CURRENT_YEAR) + 1}`,
    `09/01/${Number(CURRENT_YEAR) + 1}`,
    `10/01/${Number(CURRENT_YEAR) + 1}`,
    `11/01/${Number(CURRENT_YEAR) + 1}`,
    `12/01/${Number(CURRENT_YEAR) + 1}`,
    `13/01/${Number(CURRENT_YEAR) + 1}`,
    `14/01/${Number(CURRENT_YEAR) + 1}`,
    `15/01/${Number(CURRENT_YEAR) + 1}`,
    `16/01/${Number(CURRENT_YEAR) + 1}`,
    `17/01/${Number(CURRENT_YEAR) + 1}`,
    `18/01/${Number(CURRENT_YEAR) + 1}`,
    `19/01/${Number(CURRENT_YEAR) + 1}`,
    `20/01/${Number(CURRENT_YEAR) + 1}`,
  ],
  rs: {
    stateHolidays: [`20/09/${CURRENT_YEAR}`],
    cities: {
      alegrete: {
        name: `Alegrete`,
        holidays: [`08/06/${CURRENT_YEAR}`, `08/12/${CURRENT_YEAR}`],
      },
      bage: {
        name: `Bagé`,
        holidays: [
          `20/01/${CURRENT_YEAR}`,
          `24/05/${CURRENT_YEAR}`,
          `03/06/${CURRENT_YEAR}`,
          `08/06/${CURRENT_YEAR}`,
        ],
      },
      bentoGoncalves: {
        name: `Bento Gonçalves`,
        holidays: [`08/06/${CURRENT_YEAR}`, `13/06/${CURRENT_YEAR}`],
      },
      cachoeiraDoSul: {
        name: `Cachoeira do Sul`,
        holidays: [`08/06/${CURRENT_YEAR}`, `08/12/${CURRENT_YEAR}`],
      },
      camaqua: {
        name: `Camaquã`,
        holidays: [
          `02/02/${CURRENT_YEAR}`,
          `08/06/${CURRENT_YEAR}`,
          `24/06/${CURRENT_YEAR}`,
        ],
      },
      canela: {
        name: `Canela`,
        holidays: [
          `18/05/${CURRENT_YEAR}`,
          `26/05/${CURRENT_YEAR}`,
          `08/06/${CURRENT_YEAR}`,
        ],
      },
      canoas: {
        name: `Canoas`,
        holidays: [`02/02/${CURRENT_YEAR}`, `08/06/${CURRENT_YEAR}`],
      },
      capaoDaCanoa: {
        name: `Capão da Canoa`,
        holidays: [
          `11/02/${CURRENT_YEAR}`,
          `12/04/${CURRENT_YEAR}`,
          `08/06/${CURRENT_YEAR}`,
        ],
      },
      carazinho: {
        name: `Carazinho`,
        holidays: [`24/01/${CURRENT_YEAR}`, `08/06/${CURRENT_YEAR}`],
      },
      erechim: {
        name: `Erechim`,
        holidays: [`19/03/${CURRENT_YEAR}`, `08/06/${CURRENT_YEAR}`],
      },
      fredericoWestphalen: {
        name: `Frederico Westphalen`,
        holidays: [
          `27/02/${CURRENT_YEAR}`,
          `08/06/${CURRENT_YEAR}`,
          `13/06/${CURRENT_YEAR}`,
        ],
      },
      gramado: {
        name: `Gramado`,
        holidays: [
          `18/05/${CURRENT_YEAR}`,
          `08/06/${CURRENT_YEAR}`,
          `29/06/${CURRENT_YEAR}`,
        ],
      },
      gravatai: {
        name: `Gravataí`,
        holidays: [`08/06/${CURRENT_YEAR}`, `02/08/${CURRENT_YEAR}`],
      },
      ijui: {
        name: `Ijuí`,
        holidays: [`08/06/${CURRENT_YEAR}`, `19/10/${CURRENT_YEAR}`],
      },
      itaqui: {
        name: `Itaquí`,
        holidays: [
          `17/03/${CURRENT_YEAR}`,
          `08/06/${CURRENT_YEAR}`,
          `06/12/${CURRENT_YEAR}`,
        ],
      },
      jaguarao: {
        name: `Jaguarão`,
        holidays: [
          `02/02/${CURRENT_YEAR}`,
          `08/06/${CURRENT_YEAR}`,
          `23/11/${CURRENT_YEAR}`,
        ],
      },
      lajeado: {
        name: `Lajeado`,
        holidays: [`08/06/${CURRENT_YEAR}`, `31/10/${CURRENT_YEAR}`],
      },
      montenegro: {
        name: `Montenegro`,
        holidays: [
          `08/06/${CURRENT_YEAR}`,
          `24/06/${CURRENT_YEAR}`,
          `31/10/${CURRENT_YEAR}`,
        ],
      },
      novaPrata: {
        name: `Nova Prata`,
        holidays: [`08/06/${CURRENT_YEAR}`, `24/06/${CURRENT_YEAR}`],
      },
      palmeiraDasMissoes: {
        name: `Palmeira das Missões`,
        holidays: [
          `06/05/${CURRENT_YEAR}`,
          `08/06/${CURRENT_YEAR}`,
          `13/06/${CURRENT_YEAR}`,
        ],
      },
      passoFundo: {
        name: `Passo Fundo`,
        holidays: [`08/06/${CURRENT_YEAR}`, `08/12/${CURRENT_YEAR}`],
      },
      portoAlegre: {
        name: `Porto Alegre`,
        holidays: [`02/02/${CURRENT_YEAR}`, `08/06/${CURRENT_YEAR}`],
      },
      rioGrande: {
        name: `Rio Grande`,
        holidays: [
          `02/02/${CURRENT_YEAR}`,
          `08/06/${CURRENT_YEAR}`,
          `29/06/${CURRENT_YEAR}`,
        ],
      },
      staCruzDoSul: {
        name: `Santa Cruz do Sul`,
        holidays: [`08/06/${CURRENT_YEAR}`, `25/07/${CURRENT_YEAR}`],
      },
      staMaria: {
        name: `Santa Maria`,
        holidays: [
          `17/05/${CURRENT_YEAR}`,
          `08/06/${CURRENT_YEAR}`,
          `08/12/${CURRENT_YEAR}`,
        ],
      },
      santAnaDoLivramento: {
        name: `Santana do Livramento`,
        holidays: [`08/06/${CURRENT_YEAR}`, `30/07/${CURRENT_YEAR}`],
      },
      santiago: {
        name: `Santiago`,
        holidays: [`04/01/${CURRENT_YEAR}`, `08/06/${CURRENT_YEAR}`],
      },
      saoBorja: {
        name: `São Borja`,
        holidays: [`10/10/${CURRENT_YEAR}`],
      },
      saoJeronimo: {
        name: `São Jerônimo`,
        holidays: [
          `08/06/${CURRENT_YEAR}`,
          `30/09/${CURRENT_YEAR}`,
          `08/12/${CURRENT_YEAR}`,
        ],
      },
      saoLeopoldo: {
        name: `São Leopoldo`,
        holidays: [
          `08/06/${CURRENT_YEAR}`,
          `25/07/${CURRENT_YEAR}`,
          `08/12/${CURRENT_YEAR}`,
        ],
      },
      uruguaiana: {
        name: `Uruguaiana`,
        holidays: [`08/06/${CURRENT_YEAR}`, `26/12/${CURRENT_YEAR}`],
      },
      vacaria: {
        name: `Vacaria`,
        holidays: [
          `08/06/${CURRENT_YEAR}`,
          `22/10/${CURRENT_YEAR}`,
          `08/12/${CURRENT_YEAR}`,
        ],
      },
    },
  },
  sc: {
    stateHolidays: [],
    //cities,
  },
  pr: {
    stateHolidays: [],
    //cities,
  },
};

export { holidays };
