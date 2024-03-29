const getStandards = () => {
  const standards = {
    standards: [
      {
        id: 1,
        value: "e30_2003",
        name: "E.030-2006",
        soilType: [
          {
            value: 1,
            name: "S1: Roca o suelos rígidos",
          },
          {
            value: 2,
            name: "S2 :Suelos intermedios",
          },
          {
            value: 3,
            name: "S3: Suelos flexibles o con estrato de gran espesor",
          },
        ],
      },
      {
        id: 2,
        value: "e30_2015",
        name: "E.030-2018",
        soilType: [
          {
            value: 1,
            name: "S1: Roca o suelos rígidos",
          },
          {
            value: 2,
            name: "S2 :Suelos intermedios",
          },
          {
            value: 3,
            name: "S3: Suelos flexibles o con estrato de gran espesor",
          },
        ],
      },
      {
        id: 3,
        value: "e30_2015_esp",
        name: "E.030-2018 (Z específico)",
        soilType: [
          {
            value: 1,
            name: "S1: Roca o suelos rígidos",
          },
          {
            value: 2,
            name: "S2 :Suelos intermedios",
          },
          {
            value: 3,
            name: "S3: Suelos flexibles o con estrato de gran espesor",
          },
        ],
      },
      {
        id: 4,
        value: "ibc",
        name: "IBC-2015",
        soilType: [
          {
            value: 1,
            name: "A: Roca muy dura",
          },
          {
            value: 2,
            name: "B: Roca",
          },
          {
            value: 3,
            name: "C: Roca blanda o suelo muy denso",
          },
          {
            value: 4,
            name: "D: Suelo firme",
          },
          {
            value: 5,
            name: "E: Suelo blando",
          },
        ],
      },
      {
        id: 5,
        value: "asce",
        name: "ASCE 7-16",
        soilType: [
          {
            value: 1,
            name: "A: Roca muy dura",
          },
          {
            value: 2,
            name: "B: Roca",
          },
          {
            value: 3,
            name: "C: Roca blanda o suelo muy denso",
          },
          {
            value: 4,
            name: "D: Suelo firme",
          },
          {
            value: 5,
            name: "E: Suelo blando",
          },
        ],
      },
    ],
  };

  return standards;
};

module.exports = getStandards;
