const fs = require('fs');

const millitomeId = 'http://purl.org/ccf/millitome/vhf-right-kidney';
const dims = { x: 15, y: 15, z: 30, cols: 4, rows: 8, layers: 2, bezel: 2 };

function intToChar(number) {
  const code = 'A'.charCodeAt(0);
  return String.fromCharCode(code + number);
}

function makeBlocks(baseUrl, baseLabel, dims) {
  const blocks = [];
  for (let layer = 0; layer < dims.layers; layer++) {
    for (let row = 0; row < dims.rows; row++) {
      for (let col = 0; col < dims.cols; col++) {
        const cell = `${layer === 0 ? 'b' : 't'}${intToChar(col)}${dims.rows - row}`;
        const baseId = `${baseUrl}/${cell}`;
        const x = col * (dims.x + dims.bezel) - 34 + dims.x / 2;
        const y = row * (dims.y + dims.bezel) - 68 + dims.y / 2;
        const z = layer * (dims.z + dims.bezel) - 32 + dims.z / 2;

        blocks.push({
          '@id': `${baseId}#MetaDonor`,
          '@type': 'Donor',
          'label': `${baseLabel} (${cell})`,
          'description': 'description',
          'link': 'https://github.com/hubmapconsortium/hra-millitome/tree/main/millitomes/VH_F_Kidney_R/',
          sex: 'Female',
          consortium_name: 'HuBMAP',
          provider_name: 'MC-IU',
          provider_uuid: '0e7bb88f-1a4b-4d3a-b93c-02cb5b76d7cd',
          samples: [{
            '@id': `${baseId}#TissueBlock`,
            '@type': 'Sample',
            label: `${baseLabel} (${cell})`,
            description: `${cell} description`,
            link: 'https://github.com/hubmapconsortium/hra-millitome/tree/main/millitomes/VH_F_Kidney_R/',
            sample_type: 'Tissue Block',
            section_count: 1,
            section_size: 0.11,
            section_units: 'millimeter',
            rui_location: {
              '@context': 'https://hubmapconsortium.github.io/hubmap-ontology/ccf-context.jsonld',
              '@id': baseId,
              '@type': 'SpatialEntity',
              "creator": "Bruce Herr",
              "creator_first_name": "Bruce",
              "creator_last_name": "Herr",
              "creation_date": "2022-09-13",
              "ccf_annotations": [
                "http://purl.obolibrary.org/obo/UBERON_0013702",
                "http://purl.obolibrary.org/obo/UBERON_0002113",
                "http://purl.obolibrary.org/obo/UBERON_0004539",
                "http://purl.obolibrary.org/obo/UBERON_0002015",
                "http://purl.obolibrary.org/obo/UBERON_0008716",
                "http://purl.obolibrary.org/obo/UBERON_0001225",
                "http://purl.obolibrary.org/obo/UBERON_0002189",
                "http://purl.obolibrary.org/obo/UBERON_0001284",
                "http://purl.obolibrary.org/obo/UBERON_0000362",
                "http://purl.obolibrary.org/obo/UBERON_0001228",
                "http://purl.obolibrary.org/obo/UBERON_0004200"
              ],
              "x_dimension": dims.x,
              "y_dimension": dims.y,
              "z_dimension": dims.z,
              "dimension_units": "millimeter",
              "placement": {
                "@context": "https://hubmapconsortium.github.io/hubmap-ontology/ccf-context.jsonld",
                "@id": `${baseId}#SpatialPlacement`,
                "@type": "SpatialPlacement",
                "target": baseUrl,
                "placement_date": "2022-09-13",
                "x_scaling": 1,
                "y_scaling": 1,
                "z_scaling": 1,
                "scaling_units": "ratio",
                "x_rotation": 0,
                "y_rotation": 0,
                "z_rotation": 0,
                "rotation_order": "XYZ",
                "rotation_units": "degree",
                "x_translation": x,
                "y_translation": y,
                "z_translation": z,
                "translation_units": "millimeter"
              }
            },
            datasets: []
          }]
        });
      }
    }
  }

  return blocks;
}

fs.writeFileSync('millitome.vhf-right-kidney.jsonld',
  JSON.stringify({
    "@context": {
      "@base": "http://purl.org/ccf/latest/ccf-entity.owl#",
      "@vocab": "http://purl.org/ccf/latest/ccf-entity.owl#",
      "ccf": "http://purl.org/ccf/latest/ccf.owl#",
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "label": "rdfs:label",
      "description": "rdfs:comment",
      "link": {
        "@id": "rdfs:seeAlso",
        "@type": "@id"
      },
      "samples": {
        "@reverse": "has_donor"
      },
      "sections": {
        "@id": "has_tissue_section",
        "@type": "@id"
      },
      "datasets": {
        "@id": "has_dataset",
        "@type": "@id"
      },
      "rui_location": {
        "@id": "has_spatial_entity",
        "@type": "@id"
      },
      "ontologyTerms": {
        "@id": "has_ontology_term",
        "@type": "@id"
      },
      "cellTypeTerms": {
        "@id": "has_cell_type_term",
        "@type": "@id"
      },
      "thumbnail": {
        "@id": "has_thumbnail"
      }
    },
    '@graph': [
      {
        "@context": "https://hubmapconsortium.github.io/hubmap-ontology/ccf-context.jsonld",
        "@id": millitomeId,
        "@type": "SpatialEntity",
        "creator": "Bruce Herr",
        "creator_first_name": "Bruce",
        "creator_last_name": "Herr",
        "creation_date": "2022-09-13",
        "ccf_annotations": [
          "http://purl.obolibrary.org/obo/UBERON_0013702",
          "http://purl.obolibrary.org/obo/UBERON_0002113",
          "http://purl.obolibrary.org/obo/UBERON_0004539",
          "http://purl.obolibrary.org/obo/UBERON_0002015",
          "http://purl.obolibrary.org/obo/UBERON_0008716",
          "http://purl.obolibrary.org/obo/UBERON_0001225",
          "http://purl.obolibrary.org/obo/UBERON_0002189",
          "http://purl.obolibrary.org/obo/UBERON_0001284",
          "http://purl.obolibrary.org/obo/UBERON_0000362",
          "http://purl.obolibrary.org/obo/UBERON_0001228",
          "http://purl.obolibrary.org/obo/UBERON_0004200"
        ],
        "x_dimension": 68,
        "y_dimension": 136,
        "z_dimension": 64,
        "dimension_units": "millimeter",
        "placement": {
          "@context": "https://hubmapconsortium.github.io/hubmap-ontology/ccf-context.jsonld",
          "@id": "http://purl.org/ccf/1.5/96267a1d-d37e-4193-98ac-25044f279a57_placement",
          "@type": "SpatialPlacement",
          "target": "http://purl.org/ccf/latest/ccf.owl#VHFRightKidneyV1.1",
          "placement_date": "2022-09-13",
          "x_scaling": 1,
          "y_scaling": 1,
          "z_scaling": 1,
          "scaling_units": "ratio",
          "x_rotation": -42,
          "y_rotation": -24,
          "z_rotation": -32,
          "rotation_order": "XYZ",
          "rotation_units": "degree",
          "x_translation": 36.391,
          "y_translation": 56.964,
          "z_translation": 34.77,
          "translation_units": "millimeter"
        }
      },
      // {
      //   '@id': `${millitomeId}#MetaDonor`,
      //   '@type': 'Donor',
      //   'label': 'VHF right kidney millitome',
      //   'description': 'millitome description',
      //   'link': 'https://github.com/hubmapconsortium/hra-millitome/tree/main/millitomes/VH_F_Kidney_R/',
      //   sex: 'Female',
      //   consortium_name: 'HuBMAP',
      //   provider_name: 'MC-IU',
      //   provider_uuid: '0e7bb88f-1a4b-4d3a-b93c-02cb5b76d7cd',
      //   samples: [{
      //     '@id': `${millitomeId}#TissueBlock`,
      //     '@type': 'Sample',
      //     label: 'VHF right kidney millitome',
      //     description: 'millitome description',
      //     link: 'https://github.com/hubmapconsortium/hra-millitome/tree/main/millitomes/VH_F_Kidney_R/',
      //     sample_type: 'Tissue Block',
      //     section_count: 1,
      //     section_size: 0.11,
      //     section_units: 'millimeter',
      //     rui_location: millitomeId,
      //     datasets: []
      //   }]
      // },
      ...makeBlocks(millitomeId, 'VHF right kidney millitome', dims),
    ]
  }, null, 2)
);
