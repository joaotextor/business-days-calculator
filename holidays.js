const CURRENT_YEAR = "2025";
const CORPUS_CHRISTI = `19/06/${CURRENT_YEAR}`;
const ASCENCAO_SENHOR = `29/05/${CURRENT_YEAR}`;

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
    `03/03/${CURRENT_YEAR}`,
    `04/03/${CURRENT_YEAR}`,
    `16/04/${CURRENT_YEAR}`,
    `17/04/${CURRENT_YEAR}`,
    `18/04/${CURRENT_YEAR}`,
    `21/04/${CURRENT_YEAR}`,
    `01/05/${CURRENT_YEAR}`,
    `11/08/${CURRENT_YEAR}`,
    `07/09/${CURRENT_YEAR}`,
    `12/10/${CURRENT_YEAR}`,
    `28/10/${CURRENT_YEAR}`,
    `01/11/${CURRENT_YEAR}`,
    `02/11/${CURRENT_YEAR}`,
    `15/11/${CURRENT_YEAR}`,
    `20/11/${CURRENT_YEAR}`,
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
        holidays: [`${CORPUS_CHRISTI}`, `08/12/${CURRENT_YEAR}`],
      },
      bage: {
        name: `Bagé`,
        holidays: [
          `20/01/${CURRENT_YEAR}`,
          `24/05/${CURRENT_YEAR}`,
          `${CORPUS_CHRISTI}`,
        ],
      },
      bentoGoncalves: {
        name: `Bento Gonçalves`,
        holidays: [`${CORPUS_CHRISTI}`, `13/06/${CURRENT_YEAR}`],
      },
      cachoeiraDoSul: {
        name: `Cachoeira do Sul`,
        holidays: [`${CORPUS_CHRISTI}`, `08/12/${CURRENT_YEAR}`],
      },
      camaqua: {
        name: `Camaquã`,
        holidays: [
          `02/02/${CURRENT_YEAR}`,
          `${CORPUS_CHRISTI}`,
          `24/06/${CURRENT_YEAR}`,
        ],
      },
      canela: {
        name: `Canela`,
        holidays: [
          `${ASCENCAO_SENHOR}`,
          `26/05/${CURRENT_YEAR}`,
          `${CORPUS_CHRISTI}`,
        ],
      },
      canoas: {
        name: `Canoas`,
        holidays: [`02/02/${CURRENT_YEAR}`, `${CORPUS_CHRISTI}`],
      },
      capaoDaCanoa: {
        name: `Capão da Canoa`,
        holidays: [
          `11/02/${CURRENT_YEAR}`,
          `12/04/${CURRENT_YEAR}`,
          `${CORPUS_CHRISTI}`,
        ],
      },
      carazinho: {
        name: `Carazinho`,
        holidays: [`24/01/${CURRENT_YEAR}`, `${CORPUS_CHRISTI}`],
      },
      caxiasDoSul: {
        name: `Caxias do Sul`,
        holidays: [`26/05/${CURRENT_YEAR}`, `${CORPUS_CHRISTI}`],
      },
      cruzAlta: {
        name: `Cruz Alta`,
        holidays: [`${CORPUS_CHRISTI}`, `18/08/${CURRENT_YEAR}`],
      },
      erechim: {
        name: `Erechim`,
        holidays: [`19/03/${CURRENT_YEAR}`, `${CORPUS_CHRISTI}`],
      },
      fredericoWestphalen: {
        name: `Frederico Westphalen`,
        holidays: [
          `28/02/${CURRENT_YEAR}`,
          `${CORPUS_CHRISTI}`,
          `13/06/${CURRENT_YEAR}`,
        ],
      },
      gramado: {
        name: `Gramado`,
        holidays: [`${ASCENCAO_SENHOR}`, `${CORPUS_CHRISTI}`],
      },
      gravatai: {
        name: `Gravataí`,
        holidays: [`${CORPUS_CHRISTI}`, `02/08/${CURRENT_YEAR}`],
      },
      ijui: {
        name: `Ijuí`,
        holidays: [`${CORPUS_CHRISTI}`, `19/10/${CURRENT_YEAR}`],
      },
      itaqui: {
        name: `Itaquí`,
        holidays: [
          `17/03/${CURRENT_YEAR}`,
          `${CORPUS_CHRISTI}`,
          `06/12/${CURRENT_YEAR}`,
        ],
      },
      jaguarao: {
        name: `Jaguarão`,
        holidays: [
          `02/02/${CURRENT_YEAR}`,
          `${CORPUS_CHRISTI}`,
          `23/11/${CURRENT_YEAR}`,
        ],
      },
      lajeado: {
        name: `Lajeado`,
        holidays: [`${CORPUS_CHRISTI}`, `31/10/${CURRENT_YEAR}`],
      },
      montenegro: {
        name: `Montenegro`,
        holidays: [
          `${CORPUS_CHRISTI}`,
          `24/06/${CURRENT_YEAR}`,
          `31/10/${CURRENT_YEAR}`,
        ],
      },
      novaPrata: {
        name: `Nova Prata`,
        holidays: [`${CORPUS_CHRISTI}`, `24/06/${CURRENT_YEAR}`],
      },
      novoHamburgo: {
        name: `Novo Hamburgo`,
        holidays: [
          `05/04/${CURRENT_YEAR}`,
          `${ASCENCAO_SENHOR}`,
          `${CORPUS_CHRISTI}`,
        ],
      },
      palmeiraDasMissoes: {
        name: `Palmeira das Missões`,
        holidays: [
          `06/05/${CURRENT_YEAR}`,
          `${CORPUS_CHRISTI}`,
          `13/06/${CURRENT_YEAR}`,
        ],
      },
      passoFundo: {
        name: `Passo Fundo`,
        holidays: [`${CORPUS_CHRISTI}`, `08/12/${CURRENT_YEAR}`],
      },
      pelotas: {
        name: `Pelotas`,
        holidays: [`02/02/${CURRENT_YEAR}`, `${CORPUS_CHRISTI}`],
      },
      portoAlegre: {
        name: `Porto Alegre`,
        holidays: [`02/02/${CURRENT_YEAR}`, `${CORPUS_CHRISTI}`],
      },
      rioGrande: {
        name: `Rio Grande`,
        holidays: [
          `02/02/${CURRENT_YEAR}`,
          `${CORPUS_CHRISTI}`,
          `29/06/${CURRENT_YEAR}`,
        ],
      },
      staCruzDoSul: {
        name: `Santa Cruz do Sul`,
        holidays: [`${CORPUS_CHRISTI}`, `25/07/${CURRENT_YEAR}`],
      },
      staMaria: {
        name: `Santa Maria`,
        holidays: [
          `17/05/${CURRENT_YEAR}`,
          `${CORPUS_CHRISTI}`,
          `08/12/${CURRENT_YEAR}`,
        ],
      },
      staRosa: {
        name: `Santa Rosa`,
        holidays: [
          `${CORPUS_CHRISTI}`,
          `10/08/${CURRENT_YEAR}`,
          `31/10/${CURRENT_YEAR}`,
        ],
      },
      staVitoriaDoPalmar: {
        name: `Santa Vitória do Palmar`,
        holidays: [`02/02/${CURRENT_YEAR}`, `${CORPUS_CHRISTI}`],
      },
      santAnaDoLivramento: {
        name: `Santana do Livramento`,
        holidays: [
          `02/02/${CURRENT_YEAR}`,
          `${CORPUS_CHRISTI}`,
          `30/07/${CURRENT_YEAR}`,
        ],
      },
      santiago: {
        name: `Santiago`,
        holidays: [
          `04/01/${CURRENT_YEAR}`,
          `${CORPUS_CHRISTI}`,
          `08/12/${CURRENT_YEAR}`,
        ],
      },
      stoAngelo: {
        name: `Santo Ângelo`,
        holidays: [`22/05/${CURRENT_YEAR}`, `${CORPUS_CHRISTI}`],
      },
      saoBorja: {
        name: `São Borja`,
        holidays: [`10/10/${CURRENT_YEAR}`, `${CORPUS_CHRISTI}`],
      },
      saoJeronimo: {
        name: `São Jerônimo`,
        holidays: [
          `${CORPUS_CHRISTI}`,
          `30/09/${CURRENT_YEAR}`,
          `08/12/${CURRENT_YEAR}`,
        ],
      },
      saoLeopoldo: {
        name: `São Leopoldo`,
        holidays: [
          `${CORPUS_CHRISTI}`,
          `25/07/${CURRENT_YEAR}`,
          `08/12/${CURRENT_YEAR}`,
        ],
      },
      saoLuizGonzaga: {
        name: `São Luiz Gonzaga`,
        holidays: [`${CORPUS_CHRISTI}`, `03/06/${CURRENT_YEAR}`],
      },
      torres: {
        name: `Torres`,
        holidays: [
          `02/02/${CURRENT_YEAR}`,
          `21/05/${CURRENT_YEAR}`,
          `${CORPUS_CHRISTI}`,
          `08/08/${CURRENT_YEAR}`,
        ],
      },
      uruguaiana: {
        name: `Uruguaiana`,
        holidays: [`${CORPUS_CHRISTI}`, `26/07/${CURRENT_YEAR}`],
      },
      vacaria: {
        name: `Vacaria`,
        holidays: [
          `${CORPUS_CHRISTI}`,
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
        holidays: [`${CORPUS_CHRISTI}`, `02/09/${CURRENT_YEAR}`],
      },
      cacador: {
        name: `Caçador`,
        holidays: [`25/03/${CURRENT_YEAR}`, `${CORPUS_CHRISTI}`],
      },
      chapeco: {
        name: `Chapecó`,
        holidays: [`25/08/${CURRENT_YEAR}`],
      },
      concordia: {
        name: `Concórdia`,
        holidays: [`29/07/${CURRENT_YEAR}`],
      },
      florianopolis: {
        name: `Florianópolis`,
        holidays: [`23/03/${CURRENT_YEAR}`, `${CORPUS_CHRISTI}`],
      },
      itajai: {
        name: `Itajaí`,
        holidays: [`${CORPUS_CHRISTI}`, `15/06/${CURRENT_YEAR}`],
      },
      joinville: {
        name: `Joinville`,
        holidays: [`09/03/${CURRENT_YEAR}`, `${CORPUS_CHRISTI}`],
      },
      joacaba: {
        name: `Joaçaba`,
        holidays: [`${CORPUS_CHRISTI}`, `25/08/${CURRENT_YEAR}`],
      },
      laguna: {
        name: `Laguna`,
        holidays: [
          `02/02/${CURRENT_YEAR}`,
          `${CORPUS_CHRISTI}`,
          `13/06/${CURRENT_YEAR}`,
        ],
      },
      mafra: {
        name: `Mafra`,
        holidays: [`08/09/${CURRENT_YEAR}`, `${CORPUS_CHRISTI}`],
      },
      rioDoSul: {
        name: `Rio do Sul`,
        holidays: [`15/04/${CURRENT_YEAR}`, `${CORPUS_CHRISTI}`],
      },
      saoBentoDoSul: {
        name: `São Bento do Sul`,
        holidays: [`23/09/${CURRENT_YEAR}`, `${CORPUS_CHRISTI}`],
      },
      saoFranciscoDoSul: {
        name: `São Francisco do Sul`,
        holidays: [
          `15/04/${CURRENT_YEAR}`,
          `${CORPUS_CHRISTI}`,
          `08/09/${CURRENT_YEAR}`,
        ],
      },
      saoMiguelDoOeste: {
        name: `São Miguel do Oeste`,
        holidays: [
          `15/02/${CURRENT_YEAR}`,
          `${CORPUS_CHRISTI}`,
          `29/09/${CURRENT_YEAR}`,
        ],
      },
      videira: {
        name: `Videira`,
        holidays: [`${CORPUS_CHRISTI}`, `08/12/${CURRENT_YEAR}`],
      },
    },
  },
  pr: {
    stateHolidays: [""],
    cities: {
      apucarana: {
        name: `Apucarana`,
        holidays: [
          `28/01/${CURRENT_YEAR}`,
          `11/02/${CURRENT_YEAR}`,
          `${CORPUS_CHRISTI}`,
        ],
      },
      arapongas: {
        name: `Arapongas`,
        holidays: [`10/10/${CURRENT_YEAR}`, `${CORPUS_CHRISTI}`],
      },
      astorga: {
        name: `Astorga`,
        holidays: [
          `02/01/${CURRENT_YEAR}`,
          `20/01/${CURRENT_YEAR}`,
          `${CORPUS_CHRISTI}`,
        ],
      },
      campoMourao: {
        name: `Campo Mourão`,
        holidays: [`19/03/${CURRENT_YEAR}`, `13/10/${CURRENT_YEAR}`],
      },
      cascavel: {
        name: `Cascavel`,
        holidays: [`14/11/${CURRENT_YEAR}`, `${CORPUS_CHRISTI}`],
      },
      curitiba: {
        name: `Curitiba`,
        holidays: [`08/09/${CURRENT_YEAR}`],
      },
      fozDoIguacu: {
        name: `Foz do Iguaçu`,
        holidays: [
          `10/06/${CURRENT_YEAR}`,
          `24/06/${CURRENT_YEAR}`,
          `${CORPUS_CHRISTI}`,
        ],
      },
      franciscoBeltrao: {
        name: `Francisco Beltrão`,
        holidays: [
          `15/08/${CURRENT_YEAR}`,
          `14/11/${CURRENT_YEAR}`,
          `${CORPUS_CHRISTI}`,
        ],
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
        holidays: [
          `02/02/${CURRENT_YEAR}`,
          `09/12/${CURRENT_YEAR}`,
          `${CORPUS_CHRISTI}`,
        ],
      },
      ibaiti: {
        name: `Ibaiti`,
        holidays: [
          `${CORPUS_CHRISTI}`,
          `16/06/${CURRENT_YEAR}`,
          `09/11/${CURRENT_YEAR}`,
        ],
      },
      ivaipora: {
        name: `Ivaiporã`,
        holidays: [
          `06/08/${CURRENT_YEAR}`,
          `19/11/${CURRENT_YEAR}`,
          `${CORPUS_CHRISTI}`,
        ],
      },
      jacarezinho: {
        name: `Jacarezinho`,
        holidays: [
          `20/01/${CURRENT_YEAR}`,
          `02/04/${CURRENT_YEAR}`,
          `${CORPUS_CHRISTI}`,
        ],
      },
      londrina: {
        name: `Londrina`,
        holidays: [
          `10/12/${CURRENT_YEAR}`,
          `${CORPUS_CHRISTI}`,
          `27/06/${CURRENT_YEAR}`,
        ],
      },
      maringa: {
        name: `Maringá`,
        holidays: [
          `12/05/${CURRENT_YEAR}`,
          `15/08/${CURRENT_YEAR}`,
          `${CORPUS_CHRISTI}`,
        ],
      },
      paranagua: {
        name: `Paranaguá`,
        holidays: [
          `29/07/${CURRENT_YEAR}`,
          `07/10/${CURRENT_YEAR}`,
          `${CORPUS_CHRISTI}`,
        ],
      },
      paranavai: {
        name: `Paranavaí`,
        holidays: [`20/01/${CURRENT_YEAR}`],
      },
      patoBranco: {
        name: `Pato Branco`,
        holidays: [
          `29/06/${CURRENT_YEAR}`,
          `14/12/${CURRENT_YEAR}`,
          `${CORPUS_CHRISTI}`,
        ],
      },
      pitanga: {
        name: `Pitanga`,
        holidays: [
          `28/01/${CURRENT_YEAR}`,
          `26/07/${CURRENT_YEAR}`,
          `${CORPUS_CHRISTI}`,
        ],
      },
      pontaGrossa: {
        name: `Ponta Grossa`,
        holidays: [`26/07/${CURRENT_YEAR}`, `15/09/${CURRENT_YEAR}`],
      },
      saoFranciscoDoSul: {
        name: `São Francisco do Sul`,
        holidays: [
          `15/04/${CURRENT_YEAR}`,
          `${CORPUS_CHRISTI}`,
          `08/09/${CURRENT_YEAR}`,
        ],
      },
      telemacoBorba: {
        name: `Telêmaco Borba`,
        holidays: [
          `01/03/${CURRENT_YEAR}`,
          `21/03/${CURRENT_YEAR}`,
          `${CORPUS_CHRISTI}`,
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
        holidays: [`27/03/${CURRENT_YEAR}`, `27/06/${CURRENT_YEAR}`],
      },
      wenceslauBraz: {
        name: `Wenceslau Braz`,
        holidays: [`20/01/${CURRENT_YEAR}`, `26/11/${CURRENT_YEAR}`],
      },
    },
  },
};

export { holidays };
