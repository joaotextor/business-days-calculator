const CURRENT_YEAR = "2024";

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
    `12/02/${CURRENT_YEAR}`,
    `13/02/${CURRENT_YEAR}`,
    `27/03/${CURRENT_YEAR}`,
    `28/03/${CURRENT_YEAR}`,
    `29/03/${CURRENT_YEAR}`,
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
        holidays: [`30/05/${CURRENT_YEAR}`, `08/12/${CURRENT_YEAR}`],
      },
      bage: {
        name: `Bagé`,
        holidays: [
          `20/01/${CURRENT_YEAR}`,
          `24/05/${CURRENT_YEAR}`,
          `30/05/${CURRENT_YEAR}`,
        ],
      },
      bentoGoncalves: {
        name: `Bento Gonçalves`,
        holidays: [`30/05/${CURRENT_YEAR}`, `13/06/${CURRENT_YEAR}`],
      },
      cachoeiraDoSul: {
        name: `Cachoeira do Sul`,
        holidays: [`30/05/${CURRENT_YEAR}`, `08/12/${CURRENT_YEAR}`],
      },
      camaqua: {
        name: `Camaquã`,
        holidays: [
          `02/02/${CURRENT_YEAR}`,
          `30/05/${CURRENT_YEAR}`,
          `24/06/${CURRENT_YEAR}`,
        ],
      },
      canela: {
        name: `Canela`,
        holidays: [
          `09/05/${CURRENT_YEAR}`,
          `26/05/${CURRENT_YEAR}`,
          `30/05/${CURRENT_YEAR}`,
        ],
      },
      canoas: {
        name: `Canoas`,
        holidays: [`02/02/${CURRENT_YEAR}`, `30/05/${CURRENT_YEAR}`],
      },
      capaoDaCanoa: {
        name: `Capão da Canoa`,
        holidays: [
          `11/02/${CURRENT_YEAR}`,
          `12/04/${CURRENT_YEAR}`,
          `30/05/${CURRENT_YEAR}`,
        ],
      },
      carazinho: {
        name: `Carazinho`,
        holidays: [`24/01/${CURRENT_YEAR}`, `30/05/${CURRENT_YEAR}`],
      },
      caxiasDoSul: {
        name: `Caxias do Sul`,
        holidays: [`26/05/${CURRENT_YEAR}`, `30/05/${CURRENT_YEAR}`],
      },
      cruzAlta: {
        name: `Cruz Alta`,
        holidays: [`30/05/${CURRENT_YEAR}`, `18/08/${CURRENT_YEAR}`],
      },
      erechim: {
        name: `Erechim`,
        holidays: [`19/03/${CURRENT_YEAR}`, `30/05/${CURRENT_YEAR}`],
      },
      fredericoWestphalen: {
        name: `Frederico Westphalen`,
        holidays: [
          `28/02/${CURRENT_YEAR}`,
          `30/05/${CURRENT_YEAR}`,
          `13/06/${CURRENT_YEAR}`,
        ],
      },
      gramado: {
        name: `Gramado`,
        holidays: [
          `09/05/${CURRENT_YEAR}`,
          `30/05/${CURRENT_YEAR}`,
          `29/06/${CURRENT_YEAR}`,
        ],
      },
      gravatai: {
        name: `Gravataí`,
        holidays: [`30/05/${CURRENT_YEAR}`, `02/08/${CURRENT_YEAR}`],
      },
      ijui: {
        name: `Ijuí`,
        holidays: [`30/05/${CURRENT_YEAR}`, `19/10/${CURRENT_YEAR}`],
      },
      itaqui: {
        name: `Itaquí`,
        holidays: [
          `17/03/${CURRENT_YEAR}`,
          `30/05/${CURRENT_YEAR}`,
          `06/12/${CURRENT_YEAR}`,
        ],
      },
      jaguarao: {
        name: `Jaguarão`,
        holidays: [
          `02/02/${CURRENT_YEAR}`,
          `30/05/${CURRENT_YEAR}`,
          `23/11/${CURRENT_YEAR}`,
        ],
      },
      lajeado: {
        name: `Lajeado`,
        holidays: [`30/05/${CURRENT_YEAR}`, `31/10/${CURRENT_YEAR}`],
      },
      montenegro: {
        name: `Montenegro`,
        holidays: [
          `30/05/${CURRENT_YEAR}`,
          `24/06/${CURRENT_YEAR}`,
          `31/10/${CURRENT_YEAR}`,
        ],
      },
      novaPrata: {
        name: `Nova Prata`,
        holidays: [`30/05/${CURRENT_YEAR}`, `24/06/${CURRENT_YEAR}`],
      },
      novoHamburgo: {
        name: `Novo Hamburgo`,
        holidays: [
          `05/04/${CURRENT_YEAR}`,
          `09/05/${CURRENT_YEAR}`,
          `30/05/${CURRENT_YEAR}`,
        ],
      },
      palmeiraDasMissoes: {
        name: `Palmeira das Missões`,
        holidays: [
          `06/05/${CURRENT_YEAR}`,
          `30/05/${CURRENT_YEAR}`,
          `13/06/${CURRENT_YEAR}`,
        ],
      },
      passoFundo: {
        name: `Passo Fundo`,
        holidays: [`30/05/${CURRENT_YEAR}`, `08/12/${CURRENT_YEAR}`],
      },
      pelotas: {
        name: `Pelotas`,
        holidays: [`02/02/${CURRENT_YEAR}`, `30/05/${CURRENT_YEAR}`],
      },
      portoAlegre: {
        name: `Porto Alegre`,
        holidays: [`02/02/${CURRENT_YEAR}`, `30/05/${CURRENT_YEAR}`],
      },
      rioGrande: {
        name: `Rio Grande`,
        holidays: [
          `02/02/${CURRENT_YEAR}`,
          `30/05/${CURRENT_YEAR}`,
          `29/06/${CURRENT_YEAR}`,
        ],
      },
      staCruzDoSul: {
        name: `Santa Cruz do Sul`,
        holidays: [`30/05/${CURRENT_YEAR}`, `25/07/${CURRENT_YEAR}`],
      },
      staMaria: {
        name: `Santa Maria`,
        holidays: [
          `17/05/${CURRENT_YEAR}`,
          `30/05/${CURRENT_YEAR}`,
          `08/12/${CURRENT_YEAR}`,
        ],
      },
      staRosa: {
        name: `Santa Rosa`,
        holidays: [
          `30/05/${CURRENT_YEAR}`,
          `10/08/${CURRENT_YEAR}`,
          `31/10/${CURRENT_YEAR}`,
        ],
      },
      staVitoriaDoPalmar: {
        name: `Santa Vitória do Palmar`,
        holidays: [
          `02/02/${CURRENT_YEAR}`,
          `30/05/${CURRENT_YEAR}`,
          `19/12/${CURRENT_YEAR}`,
        ],
      },
      santAnaDoLivramento: {
        name: `Santana do Livramento`,
        holidays: [
          `02/02/${CURRENT_YEAR}`,
          `30/05/${CURRENT_YEAR}`,
          `30/07/${CURRENT_YEAR}`,
        ],
      },
      santiago: {
        name: `Santiago`,
        holidays: [
          `04/01/${CURRENT_YEAR}`,
          `30/05/${CURRENT_YEAR}`,
          `08/12/${CURRENT_YEAR}`,
        ],
      },
      stoAngelo: {
        name: `Santo Ângelo`,
        holidays: [`22/03/${CURRENT_YEAR}`, `30/05/${CURRENT_YEAR}`],
      },
      saoBorja: {
        name: `São Borja`,
        holidays: [`21/05/${CURRENT_YEAR}`, `10/10/${CURRENT_YEAR}`],
      },
      saoJeronimo: {
        name: `São Jerônimo`,
        holidays: [
          `30/05/${CURRENT_YEAR}`,
          `30/09/${CURRENT_YEAR}`,
          `08/12/${CURRENT_YEAR}`,
        ],
      },
      saoLeopoldo: {
        name: `São Leopoldo`,
        holidays: [
          `30/05/${CURRENT_YEAR}`,
          `25/07/${CURRENT_YEAR}`,
          `08/12/${CURRENT_YEAR}`,
        ],
      },
      saoLuizGonzaga: {
        name: `São Luiz Gonzaga`,
        holidays: [`30/05/${CURRENT_YEAR}`, `03/06/${CURRENT_YEAR}`],
      },
      torres: {
        name: `Torres`,
        holidays: [
          `02/02/${CURRENT_YEAR}`,
          `21/05/${CURRENT_YEAR}`,
          `30/05/${CURRENT_YEAR}`,
          `08/08/${CURRENT_YEAR}`,
        ],
      },
      uruguaiana: {
        name: `Uruguaiana`,
        holidays: [`30/05/${CURRENT_YEAR}`, `26/07/${CURRENT_YEAR}`],
      },
      vacaria: {
        name: `Vacaria`,
        holidays: [
          `30/05/${CURRENT_YEAR}`,
          `22/10/${CURRENT_YEAR}`,
          `08/12/${CURRENT_YEAR}`,
        ],
      },
    },
  },
  sc: {
    stateHolidays: [""],
    cities: {
      blumenau: {
        name: `Blumenau`,
        holidays: [`30/05/${CURRENT_YEAR}`, `02/09/${CURRENT_YEAR}`],
      },
      cacador: {
        name: `Caçador`,
        holidays: [`25/03/${CURRENT_YEAR}`],
      },
      chapeco: {
        name: `Chapecó`,
        holidays: [`08/06/${CURRENT_YEAR}`, `25/08/${CURRENT_YEAR}`],
      },
      concordia: {
        name: `Concórdia`,
        holidays: [`29/07/${CURRENT_YEAR}`],
      },
      florianopolis: {
        name: `Florianópolis`,
        holidays: [`23/03/${CURRENT_YEAR}`, `30/05/${CURRENT_YEAR}`],
      },
      itajai: {
        name: `Itajaí`,
        holidays: [`30/05/${CURRENT_YEAR}`, `15/06/${CURRENT_YEAR}`],
      },
      joinville: {
        name: `Joinville`,
        holidays: [`09/03/${CURRENT_YEAR}`, `30/05/${CURRENT_YEAR}`],
      },
      joacaba: {
        name: `Joaçaba`,
        holidays: [`30/05/${CURRENT_YEAR}`, `25/08/${CURRENT_YEAR}`],
      },
      laguna: {
        name: `Laguna`,
        holidays: [
          `02/02/${CURRENT_YEAR}`,
          `30/05/${CURRENT_YEAR}`,
          `13/06/${CURRENT_YEAR}`,
        ],
      },
      mafra: {
        name: `Mafra`,
        holidays: [`08/09/${CURRENT_YEAR}`],
      },
      rioDoSul: {
        name: `Rio do Sul`,
        holidays: [`15/04/${CURRENT_YEAR}`],
      },
      saoBentoDoSul: {
        name: `São Bento do Sul`,
        holidays: [`23/09/${CURRENT_YEAR}`],
      },
      saoFranciscoDoSul: {
        name: `São Francisco do Sul`,
        holidays: [
          `15/04/${CURRENT_YEAR}`,
          `30/05/${CURRENT_YEAR}`,
          `08/09/${CURRENT_YEAR}`,
        ],
      },
      saoMiguelDoOeste: {
        name: `São Miguel do Oeste`,
        holidays: [
          `15/02/${CURRENT_YEAR}`,
          `30/05/${CURRENT_YEAR}`,
          `29/09/${CURRENT_YEAR}`,
        ],
      },
      videira: {
        name: `Videira`,
        holidays: [
          `01/03/${CURRENT_YEAR}`,
          `30/05/${CURRENT_YEAR}`,
          `08/12/${CURRENT_YEAR}`,
        ],
      },
    },
  },
  pr: {
    stateHolidays: [""],
    cities: {
      apucarana: {
        name: `Apucarana`,
        holidays: [`28/01/${CURRENT_YEAR}`, `11/02/${CURRENT_YEAR}`],
      },
      arapongas: {
        name: `Arapongas`,
        holidays: [`10/10/${CURRENT_YEAR}`],
      },
      astorga: {
        name: `Astorga`,
        holidays: [`02/01/${CURRENT_YEAR}`, `20/01/${CURRENT_YEAR}`],
      },
      campoMourao: {
        name: `Campo Mourão`,
        holidays: [`19/03/${CURRENT_YEAR}`, `14/10/${CURRENT_YEAR}`],
      },
      cascavel: {
        name: `Cascavel`,
        holidays: [`14/11/${CURRENT_YEAR}`],
      },
      curitiba: {
        name: `Curitiba`,
        holidays: [`08/09/${CURRENT_YEAR}`],
      },
      fozDoIguacu: {
        name: `Foz do Iguaçu`,
        holidays: [`10/06/${CURRENT_YEAR}`, `24/06/${CURRENT_YEAR}`],
      },
      franciscoBeltrao: {
        name: `Francisco Beltrão`,
        holidays: [`15/08/${CURRENT_YEAR}`, `14/11/${CURRENT_YEAR}`],
      },
      guaira: {
        name: `Guaíra`,
        holidays: [
          `02/02/${CURRENT_YEAR}`,
          `31/10/${CURRENT_YEAR}`,
          `14/11/${CURRENT_YEAR}`, // Guaíra aparece duas vezes na lista original.
        ],
      },
      guarapuava: {
        name: `Guarapuava`,
        holidays: [`02/02/${CURRENT_YEAR}`, `09/12/${CURRENT_YEAR}`],
      },
      ibaiti: {
        name: `Ibaiti`,
        holidays: [
          `30/05/${CURRENT_YEAR}`,
          `16/06/${CURRENT_YEAR}`,
          `09/11/${CURRENT_YEAR}`,
        ],
      },
      ivaipora: {
        name: `Ivaiporã`,
        holidays: [`06/08/${CURRENT_YEAR}`, `19/11/${CURRENT_YEAR}`],
      },
      jacarezinho: {
        name: `Jacarezinho`,
        holidays: [`20/01/${CURRENT_YEAR}`, `02/04/${CURRENT_YEAR}`],
      },
      londrina: {
        name: `Londrina`,
        holidays: [`07/06/${CURRENT_YEAR}`, `10/12/${CURRENT_YEAR}`],
      },
      maringa: {
        name: `Maringá`,
        holidays: [`13/05/${CURRENT_YEAR}`, `15/08/${CURRENT_YEAR}`],
      },
      paranagua: {
        name: `Paranaguá`,
        holidays: [`29/07/${CURRENT_YEAR}`, `07/10/${CURRENT_YEAR}`],
      },
      paranavai: {
        name: `Paranavaí`,
        holidays: [`20/01/${CURRENT_YEAR}`],
      },
      patoBranco: {
        name: `Pato Branco`,
        holidays: [`29/06/${CURRENT_YEAR}`, `14/12/${CURRENT_YEAR}`],
      },
      pitanga: {
        name: `Pitanga`,
        holidays: [`28/01/${CURRENT_YEAR}`, `26/07/${CURRENT_YEAR}`],
      },
      pontaGrossa: {
        name: `Ponta Grossa`,
        holidays: [`26/07/${CURRENT_YEAR}`, `15/09/${CURRENT_YEAR}`],
      },
      saoFranciscoDoSul: {
        name: `São Francisco do Sul`,
        holidays: [
          `15/04/${CURRENT_YEAR}`,
          `30/05/${CURRENT_YEAR}`,
          `08/09/${CURRENT_YEAR}`,
        ],
      },
      telemacoBorba: {
        name: `Telêmaco Borba`,
        holidays: [
          `01/03/${CURRENT_YEAR}`,
          `21/03/${CURRENT_YEAR}`,
          `30/05/${CURRENT_YEAR}`,
          `27/06/${CURRENT_YEAR}`,
        ],
      },
      toledo: {
        name: `Toledo`,
        holidays: [`26/11/${CURRENT_YEAR}`, `14/12/${CURRENT_YEAR}`],
      },
      umuarama: {
        name: `Umuarama`,
        holidays: [
          `26/06/${CURRENT_YEAR}`,
          `15/08/${CURRENT_YEAR}`,
          `04/10/${CURRENT_YEAR}`,
        ],
      },
      uniaoDaVitoria: {
        name: `União da Vitória`,
        holidays: [`27/03/${CURRENT_YEAR}`, `07/06/${CURRENT_YEAR}`],
      },
      wenceslauBraz: {
        name: `Wenceslau Braz`,
        holidays: [`20/01/${CURRENT_YEAR}`, `26/11/${CURRENT_YEAR}`],
      },
    },
  },
};

export { holidays };
