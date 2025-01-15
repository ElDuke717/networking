// src/config/sections.js
export const sections = {
    layerNetworking: {
      id: 'layer-networking-model',
      title: 'Layer Networking Model',
      subsections: [
        {
          id: 'osi-introduction',
          title: 'OSI Model Introduction',
          content: {
            overview: 'Understanding the OSI (Open Systems Interconnection) model and its seven layers',
            keyPoints: [
              'What is the OSI model?',
              'Why was it developed?',
              'The seven layers overview',
              'How data flows through the layers'
            ]
          }
        },
        {
          id: 'physical-layer',
          title: 'Layer 1 - Physical',
          content: {
            overview: 'Exploring the Physical Layer of the OSI model',
            keyPoints: [
              'Physical layer characteristics',
              'Transmission media',
              'Signaling',
              'Data transmission'
            ]
          }
        },
        // Add more subsections...
      ]
    },
    otherNetworking: {
      id: 'other-networking',
      title: 'Other Networking',
      subsections: [
        {
          id: 'nat-part1',
          title: 'Network Address Translation (NAT) - Part 1',
          content: {
            overview: 'Understanding Network Address Translation fundamentals',
            keyPoints: [
              'What is NAT?',
              'Why do we need NAT?',
              'Types of NAT',
              'Basic NAT operation'
            ]
          }
        },
        // Add more subsections...
      ]
    }
    // Add more main sections...
  };