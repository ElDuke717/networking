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
            ],
            visualizations: [
              {
                id: 'osi-layers-interactive',
                type: 'interactive-diagram',
                title: 'Interactive OSI Model',
                config: {
                  type: 'layered-stack',
                  layers: [
                    {
                      name: 'Application',
                      color: '#FF6B6B',
                      description: 'End-user layer, provides network services to applications',
                      examples: ['HTTP', 'FTP', 'SMTP'],
                      interactive: true
                    },
                    {
                      name: 'Presentation',
                      color: '#4ECDC4',
                      description: 'Data translation and encryption',
                      examples: ['SSL/TLS', 'JPEG', 'ASCII'],
                      interactive: true
                    },
                    {
                      name: 'Session',
                      color: '#45B7D1',
                      description: 'Manages communication sessions',
                      examples: ['NetBIOS', 'RPC'],
                      interactive: true
                    },
                    {
                      name: 'Transport',
                      color: '#96CEB4',
                      description: 'End-to-end connections and reliability',
                      examples: ['TCP', 'UDP'],
                      interactive: true
                    },
                    {
                      name: 'Network',
                      color: '#FFEEAD',
                      description: 'Routing and logical addressing',
                      examples: ['IP', 'ICMP'],
                      interactive: true
                    },
                    {
                      name: 'Data Link',
                      color: '#FFD93D',
                      description: 'Physical addressing and media access',
                      examples: ['Ethernet', 'MAC'],
                      interactive: true
                    },
                    {
                      name: 'Physical',
                      color: '#FF6F69',
                      description: 'Physical transmission medium',
                      examples: ['Cables', 'Signals'],
                      interactive: true
                    }
                  ],
                  interactions: {
                    onClick: {
                      action: 'expand',
                      showDetails: true,
                      animateFlow: true
                    },
                    dataFlow: {
                      enabled: true,
                      animationSpeed: 'medium',
                      showEncapsulation: true
                    }
                  }
                }
              },
              {
                id: 'data-encapsulation',
                type: 'animation',
                title: 'Data Encapsulation Process',
                config: {
                  type: 'flow-diagram',
                  steps: [
                    {
                      id: 'data',
                      label: 'User Data',
                      description: 'Raw application data'
                    },
                    {
                      id: 'segment',
                      label: 'Segment',
                      description: 'Data with transport header'
                    },
                    {
                      id: 'packet',
                      label: 'Packet',
                      description: 'Segment with IP header'
                    },
                    {
                      id: 'frame',
                      label: 'Frame',
                      description: 'Packet with MAC header'
                    }
                  ],
                  animations: {
                    type: 'sequential',
                    timing: 'auto',
                    showHeaders: true,
                    interactive: true
                  }
                }
              }
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
        {
          id: 'data-link-layer',
          title: 'Layer 2 - Data Link',
          content: {
            overview: 'Understanding the Data Link Layer and its functions',
            keyPoints: [
              'MAC addressing',
              'Error detection and correction',
              'Flow control',
              'Media access control'
            ]
          }
        },
        {
          id: 'network-layer',
          title: 'Layer 3 - Network',
          content: {
            overview: 'Exploring the Network Layer and routing concepts',
            keyPoints: [
              'IP addressing and subnetting',
              'Routing protocols',
              'Packet forwarding',
              'Network layer protocols'
            ]
          }
        },
        {
          id: 'transport-layer',
          title: 'Layer 4 - Transport',
          content: {
            overview: 'Understanding Transport Layer protocols and reliability',
            keyPoints: [
              'TCP vs UDP',
              'Port numbers and multiplexing',
              'Connection management',
              'Flow and congestion control'
            ]
          }
        },
        {
          id: 'session-layer',
          title: 'Layer 5 - Session',
          content: {
            overview: 'Learning about Session Layer management',
            keyPoints: [
              'Session establishment',
              'Session maintenance',
              'Session termination',
              'Synchronization points'
            ]
          }
        },
        {
          id: 'presentation-layer',
          title: 'Layer 6 - Presentation',
          content: {
            overview: 'Understanding data representation and encryption',
            keyPoints: [
              'Data formatting',
              'Encryption/Decryption',
              'Character encoding',
              'Data compression'
            ]
          }
        },
        {
          id: 'application-layer',
          title: 'Layer 7 - Application',
          content: {
            overview: 'Exploring Application Layer protocols and services',
            keyPoints: [
              'Common application protocols',
              'Client-server model',
              'API concepts',
              'Application services'
            ]
          }
        }
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
        {
          id: 'nat-part2',
          title: 'Network Address Translation (NAT) - Part 2',
          content: {
            overview: 'Advanced NAT concepts and implementations',
            keyPoints: [
              'Port Address Translation (PAT)',
              'NAT traversal techniques',
              'NAT64 and IPv6 transition',
              'NAT security considerations'
            ]
          }
        },
        {
          id: 'subnetting',
          title: 'IP Subnetting',
          content: {
            overview: 'Understanding IP addressing and subnetting concepts',
            keyPoints: [
              'IPv4 address classes',
              'Subnet mask calculations',
              'VLSM and CIDR',
              'Subnetting best practices'
            ]
          }
        },
        {
          id: 'routing-basics',
          title: 'Routing Fundamentals',
          content: {
            overview: 'Basic concepts of network routing',
            keyPoints: [
              'Static vs Dynamic routing',
              'Common routing protocols',
              'Route selection process',
              'Route redistribution basics'
            ]
          }
        }
      ]
    },
    security: {
      id: 'security',
      title: 'Security',
      subsections: [
        {
          id: 'security-fundamentals',
          title: 'Security Fundamentals',
          content: {
            overview: 'Core concepts of network security',
            keyPoints: [
              'CIA Triad (Confidentiality, Integrity, Availability)',
              'Authentication vs Authorization',
              'Security policies and procedures',
              'Risk assessment basics'
            ],
            visualizations: [
              {
                id: 'cia-triad',
                type: 'interactive-diagram',
                title: 'CIA Security Triad',
                config: {
                  type: 'triangle-diagram',
                  vertices: [
                    {
                      id: 'confidentiality',
                      label: 'Confidentiality',
                      color: '#FF6B6B',
                      description: 'Ensuring data is accessible only to authorized parties',
                      examples: [
                        'Encryption',
                        'Access Controls',
                        'Data Classification'
                      ]
                    },
                    {
                      id: 'integrity',
                      label: 'Integrity',
                      color: '#4ECDC4',
                      description: 'Maintaining accuracy and trustworthiness of data',
                      examples: [
                        'Checksums',
                        'Digital Signatures',
                        'Version Control'
                      ]
                    },
                    {
                      id: 'availability',
                      label: 'Availability',
                      color: '#45B7D1',
                      description: 'Ensuring systems and data are accessible when needed',
                      examples: [
                        'Redundancy',
                        'Backup Systems',
                        'Disaster Recovery'
                      ]
                    }
                  ],
                  interactions: {
                    onClick: {
                      action: 'expand',
                      showDetails: true
                    },
                    hover: {
                      highlightConnections: true,
                      showExamples: true
                    }
                  }
                }
              },
              {
                id: 'auth-flow',
                type: 'animation',
                title: 'Authentication vs Authorization Flow',
                config: {
                  type: 'sequence-diagram',
                  actors: [
                    { id: 'user', label: 'User' },
                    { id: 'auth-service', label: 'Auth Service' },
                    { id: 'resource', label: 'Protected Resource' }
                  ],
                  steps: [
                    {
                      phase: 'Authentication',
                      actions: [
                        {
                          from: 'user',
                          to: 'auth-service',
                          message: 'Login Request (credentials)',
                          type: 'request'
                        },
                        {
                          from: 'auth-service',
                          to: 'auth-service',
                          message: 'Verify Identity',
                          type: 'process'
                        },
                        {
                          from: 'auth-service',
                          to: 'user',
                          message: 'Access Token',
                          type: 'response'
                        }
                      ]
                    },
                    {
                      phase: 'Authorization',
                      actions: [
                        {
                          from: 'user',
                          to: 'resource',
                          message: 'Request + Access Token',
                          type: 'request'
                        },
                        {
                          from: 'resource',
                          to: 'auth-service',
                          message: 'Verify Permissions',
                          type: 'request'
                        },
                        {
                          from: 'auth-service',
                          to: 'resource',
                          message: 'Permission Grant/Deny',
                          type: 'response'
                        },
                        {
                          from: 'resource',
                          to: 'user',
                          message: 'Resource Access',
                          type: 'response'
                        }
                      ]
                    }
                  ],
                  animations: {
                    timing: 'auto',
                    showPhaseLabels: true,
                    highlightCurrentStep: true,
                    interactive: true
                  }
                }
              }
            ]
          }
        }
      ]
    },
    dnsAndDnssec: {
      id: 'dns-dnssec',
      title: 'DNS & DNSSEC',
      subsections: [
        {
          id: 'dns-basics',
          title: 'DNS Fundamentals',
          content: {
            overview: 'Understanding Domain Name System and its secure extension',
            keyPoints: [
              'DNS hierarchy and structure',
              'DNS record types',
              'DNS resolution process',
              'DNSSEC fundamentals'
            ],
            visualizations: [
              {
                id: 'dns-hierarchy',
                type: 'interactive-diagram',
                title: 'DNS Hierarchy Structure',
                config: {
                  type: 'tree-diagram',
                  rootNode: {
                    name: 'Root (.)',
                    description: 'DNS root zone'
                  },
                  levels: [
                    {
                      name: 'Top-Level Domains',
                      nodes: [
                        { name: '.com', type: 'gTLD' },
                        { name: '.org', type: 'gTLD' },
                        { name: '.net', type: 'gTLD' },
                        { name: '.edu', type: 'gTLD' },
                        { name: '.uk', type: 'ccTLD' },
                        { name: '.jp', type: 'ccTLD' }
                      ]
                    },
                    {
                      name: 'Second-Level Domains',
                      nodes: [
                        { name: 'example.com', parent: '.com' },
                        { name: 'google.com', parent: '.com' },
                        { name: 'wikipedia.org', parent: '.org' }
                      ]
                    },
                    {
                      name: 'Subdomains',
                      nodes: [
                        { name: 'mail.example.com', parent: 'example.com' },
                        { name: 'blog.example.com', parent: 'example.com' }
                      ]
                    }
                  ],
                  interactions: {
                    onClick: {
                      action: 'expand',
                      showDetails: true
                    },
                    hover: {
                      showTooltip: true,
                      highlightPath: true
                    }
                  }
                }
              },
              {
                id: 'dns-resolution',
                type: 'animation',
                title: 'DNS Resolution Process',
                config: {
                  type: 'sequence-diagram',
                  actors: [
                    { id: 'client', label: 'Client' },
                    { id: 'resolver', label: 'DNS Resolver' },
                    { id: 'root', label: 'Root Server' },
                    { id: 'tld', label: 'TLD Server' },
                    { id: 'auth', label: 'Authoritative Server' }
                  ],
                  steps: [
                    {
                      from: 'client',
                      to: 'resolver',
                      message: 'Query: example.com?',
                      type: 'request'
                    },
                    {
                      from: 'resolver',
                      to: 'root',
                      message: 'Query: .com NS?',
                      type: 'request'
                    },
                    {
                      from: 'root',
                      to: 'resolver',
                      message: 'Response: TLD servers',
                      type: 'response'
                    },
                    {
                      from: 'resolver',
                      to: 'tld',
                      message: 'Query: example.com NS?',
                      type: 'request'
                    },
                    {
                      from: 'tld',
                      to: 'resolver',
                      message: 'Response: Auth servers',
                      type: 'response'
                    },
                    {
                      from: 'resolver',
                      to: 'auth',
                      message: 'Query: example.com A?',
                      type: 'request'
                    },
                    {
                      from: 'auth',
                      to: 'resolver',
                      message: 'Response: IP address',
                      type: 'response'
                    },
                    {
                      from: 'resolver',
                      to: 'client',
                      message: 'Response: IP address',
                      type: 'response'
                    }
                  ],
                  animations: {
                    timing: 'auto',
                    showStepDetails: true,
                    pauseOnStep: true,
                    interactive: true
                  }
                }
              }
            ]
          }
        }
      ]
    },
    containersAndVirtualization: {
      id: 'containers-virtualization',
      title: 'Containers & Virtualization',
      subsections: [
        {
          id: 'virtualization-basics',
          title: 'Virtualization Fundamentals',
          content: {
            overview: 'Introduction to virtualization technologies',
            keyPoints: [
              'Types of virtualization',
              'Hypervisors and their roles',
              'Virtual networking concepts',
              'Container basics and Docker'
            ]
          }
        }
      ]
    },
    backupsAndDR: {
      id: 'backups-dr',
      title: 'Backups & Disaster Recovery',
      subsections: [
        {
          id: 'backup-fundamentals',
          title: 'Backup Fundamentals',
          content: {
            overview: 'Essential concepts of data backup and disaster recovery',
            keyPoints: [
              'Backup types and strategies',
              'Recovery Point Objective (RPO)',
              'Recovery Time Objective (RTO)',
              'Disaster recovery planning'
            ]
          }
        }
      ]
    },
    dataFormats: {
      id: 'data-formats',
      title: 'Data Formats & Configuration Formats',
      subsections: [
        {
          id: 'common-data-formats',
          title: 'Common Data Formats',
          content: {
            overview: 'Understanding various data and configuration formats',
            keyPoints: [
              'JSON structure and usage',
              'XML fundamentals',
              'YAML in configuration',
              'INI and other formats'
            ]
          }
        }
      ]
    },
    cloudComputing: {
      id: 'cloud-computing',
      title: 'Cloud Computing 101',
      subsections: [
        {
          id: 'cloud-basics',
          title: 'Cloud Computing Fundamentals',
          content: {
            overview: 'Introduction to cloud computing concepts and services',
            keyPoints: [
              'Cloud service models (IaaS, PaaS, SaaS)',
              'Cloud deployment models',
              'Major cloud providers overview',
              'Cloud networking basics'
            ]
          }
        }
      ]
    },
    advancedOSI: {
      id: 'advanced-osi',
      title: 'Advanced OSI Layers',
      subsections: [
        {
          id: 'advanced-protocols',
          title: 'Advanced Protocol Analysis',
          content: {
            overview: 'Deep dive into complex protocols across OSI layers',
            keyPoints: [
              'Protocol encapsulation',
              'Cross-layer protocol interaction',
              'Protocol security considerations',
              'Performance optimization'
            ]
          }
        }
      ]
    },
    wirelessNetworking: {
      id: 'wireless-networking',
      title: 'Wireless Networking',
      subsections: [
        {
          id: 'wireless-fundamentals',
          title: 'Wireless Networking Fundamentals',
          content: {
            overview: 'Understanding wireless network technologies and standards',
            keyPoints: [
              'WiFi standards and protocols',
              'Wireless security',
              'Radio frequency basics',
              'Wireless network design'
            ]
          }
        }
      ]
    },
    networkMonitoring: {
      id: 'network-monitoring',
      title: 'Network Monitoring and Management',
      subsections: [
        {
          id: 'monitoring-basics',
          title: 'Network Monitoring Fundamentals',
          content: {
            overview: 'Essential concepts of network monitoring and management',
            keyPoints: [
              'Monitoring tools and platforms',
              'Performance metrics and KPIs',
              'Alert management and thresholds',
              'Network management protocols (SNMP)'
            ]
          }
        }
      ]
    },
    advancedSecurity: {
      id: 'advanced-security',
      title: 'Advanced Security Topics',
      subsections: [
        {
          id: 'advanced-security-concepts',
          title: 'Advanced Security Concepts',
          content: {
            overview: 'Deep dive into advanced network security topics',
            keyPoints: [
              'Zero Trust Architecture',
              'Advanced threat detection',
              'Security information and event management (SIEM)',
              'Penetration testing methodologies'
            ]
          }
        }
      ]
    },
    incidentResponse: {
      id: 'incident-response',
      title: 'Incident Response and Management',
      subsections: [
        {
          id: 'incident-response-basics',
          title: 'Incident Response Fundamentals',
          content: {
            overview: 'Understanding incident response procedures and management',
            keyPoints: [
              'Incident response lifecycle',
              'Incident classification and triage',
              'Response procedures and playbooks',
              'Post-incident analysis and reporting'
            ]
          }
        }
      ]
    },
    sdn: {
      id: 'software-defined-networking',
      title: 'Software-Defined Networking (SDN)',
      subsections: [
        {
          id: 'sdn-fundamentals',
          title: 'SDN Fundamentals',
          content: {
            overview: 'Introduction to software-defined networking concepts',
            keyPoints: [
              'SDN architecture and components',
              'Control plane vs. Data plane',
              'SDN controllers and protocols',
              'Network function virtualization (NFV)'
            ],
            visualizations: [
              {
                id: 'sdn-architecture',
                type: 'interactive-diagram',
                title: 'SDN Architecture Layers',
                config: {
                  type: 'layered-architecture',
                  layers: [
                    {
                      name: 'Application Layer',
                      color: '#FF6B6B',
                      description: 'Network applications and services',
                      components: [
                        {
                          name: 'Network Services',
                          examples: ['Load Balancing', 'Firewall', 'QoS']
                        },
                        {
                          name: 'Business Applications',
                          examples: ['Traffic Engineering', 'Network Analytics']
                        }
                      ]
                    },
                    {
                      name: 'Control Layer',
                      color: '#4ECDC4',
                      description: 'Network intelligence and control logic',
                      components: [
                        {
                          name: 'SDN Controller',
                          features: ['Network State Management', 'Policy Enforcement']
                        },
                        {
                          name: 'Control Protocols',
                          examples: ['OpenFlow', 'NETCONF', 'OVSDB']
                        }
                      ]
                    },
                    {
                      name: 'Infrastructure Layer',
                      color: '#45B7D1',
                      description: 'Physical and virtual network devices',
                      components: [
                        {
                          name: 'Network Devices',
                          examples: ['Switches', 'Routers', 'Virtual Switches']
                        },
                        {
                          name: 'Forwarding Tables',
                          features: ['Flow Rules', 'Packet Processing']
                        }
                      ]
                    }
                  ],
                  interfaces: [
                    {
                      name: 'Northbound API',
                      between: ['Application', 'Control'],
                      protocols: ['REST', 'JSON-RPC']
                    },
                    {
                      name: 'Southbound API',
                      between: ['Control', 'Infrastructure'],
                      protocols: ['OpenFlow', 'NETCONF']
                    }
                  ],
                  interactions: {
                    onClick: {
                      action: 'expandLayer',
                      showComponents: true
                    },
                    hover: {
                      showInterfaces: true,
                      highlightDataFlow: true
                    }
                  }
                }
              },
              {
                id: 'control-data-plane',
                type: 'animation',
                title: 'Control vs Data Plane Separation',
                config: {
                  type: 'flow-diagram',
                  planes: [
                    {
                      name: 'Control Plane',
                      color: '#4ECDC4',
                      components: [
                        'Route Computation',
                        'Policy Definition',
                        'Topology Management'
                      ]
                    },
                    {
                      name: 'Data Plane',
                      color: '#FF6B6B',
                      components: [
                        'Packet Forwarding',
                        'Flow Tables',
                        'Traffic Processing'
                      ]
                    }
                  ],
                  interactions: {
                    type: 'packet-flow',
                    steps: [
                      {
                        id: 'new-flow',
                        description: 'New packet flow arrives'
                      },
                      {
                        id: 'table-lookup',
                        description: 'Flow table lookup'
                      },
                      {
                        id: 'controller-query',
                        description: 'Query controller for unknown flow'
                      },
                      {
                        id: 'rule-installation',
                        description: 'Install new flow rule'
                      },
                      {
                        id: 'packet-forward',
                        description: 'Forward packet based on rule'
                      }
                    ],
                    animations: {
                      timing: 'auto',
                      showStepDetails: true,
                      highlightActive: true,
                      interactive: true
                    }
                  }
                }
              }
            ]
          }
        }
      ]
    },
    iot: {
      id: 'iot-networking',
      title: 'Internet of Things (IoT) Networking and Security',
      subsections: [
        {
          id: 'iot-fundamentals',
          title: 'IoT Networking Fundamentals',
          content: {
            overview: 'Understanding IoT network architecture and security considerations',
            keyPoints: [
              'IoT network protocols',
              'IoT security challenges',
              'Edge computing in IoT',
              'IoT device management'
            ]
          }
        }
      ]
    },
    troubleshooting: {
      id: 'network-troubleshooting',
      title: 'Network Troubleshooting Techniques',
      subsections: [
        {
          id: 'troubleshooting-basics',
          title: 'Network Troubleshooting Fundamentals',
          content: {
            overview: 'Essential network troubleshooting methodologies and tools',
            keyPoints: [
              'Systematic troubleshooting approach',
              'Network diagnostic tools',
              'Common network issues and solutions',
              'Performance troubleshooting'
            ]
          }
        }
      ]
    },
    remoteAccess: {
      id: 'remote-access',
      title: 'Remote Access Technologies',
      subsections: [
        {
          id: 'remote-access-fundamentals',
          title: 'Remote Access Fundamentals',
          content: {
            overview: 'Understanding remote access solutions and protocols',
            keyPoints: [
              'VPN technologies',
              'Remote desktop protocols',
              'Secure remote access practices',
              'Mobile access solutions'
            ]
          }
        }
      ]
    },
    networkDesign: {
      id: 'network-design',
      title: 'Network Design and Architecture',
      subsections: [
        {
          id: 'network-design-fundamentals',
          title: 'Network Design Fundamentals',
          content: {
            overview: 'Principles of effective network design and architecture',
            keyPoints: [
              'Network design methodologies',
              'Scalability and redundancy',
              'Network segmentation',
              'High availability design'
            ],
            visualizations: [
              {
                id: 'network-topologies',
                type: 'interactive-diagram',
                title: 'Common Network Topologies',
                config: {
                  type: 'topology-grid',
                  topologies: [
                    {
                      name: 'Star',
                      description: 'Central node connected to all other nodes',
                      advantages: ['Simple management', 'Easy troubleshooting'],
                      disadvantages: ['Single point of failure', 'Limited scalability'],
                      nodes: [
                        { id: 'center', type: 'switch', position: 'center' },
                        { id: 'node1', type: 'device', position: 'top' },
                        { id: 'node2', type: 'device', position: 'right' },
                        { id: 'node3', type: 'device', position: 'bottom' },
                        { id: 'node4', type: 'device', position: 'left' }
                      ],
                      connections: [
                        { from: 'center', to: 'node1' },
                        { from: 'center', to: 'node2' },
                        { from: 'center', to: 'node3' },
                        { from: 'center', to: 'node4' }
                      ]
                    },
                    {
                      name: 'Mesh',
                      description: 'Each node connected to multiple other nodes',
                      advantages: ['High redundancy', 'No single point of failure'],
                      disadvantages: ['Complex management', 'Higher cost'],
                      nodes: [
                        { id: 'node1', type: 'device', position: 'topleft' },
                        { id: 'node2', type: 'device', position: 'topright' },
                        { id: 'node3', type: 'device', position: 'bottomright' },
                        { id: 'node4', type: 'device', position: 'bottomleft' }
                      ],
                      connections: [
                        { from: 'node1', to: 'node2' },
                        { from: 'node2', to: 'node3' },
                        { from: 'node3', to: 'node4' },
                        { from: 'node4', to: 'node1' },
                        { from: 'node1', to: 'node3' },
                        { from: 'node2', to: 'node4' }
                      ]
                    }
                  ],
                  interactions: {
                    onClick: {
                      action: 'showDetails',
                      highlightConnections: true
                    },
                    hover: {
                      showProperties: true,
                      emphasizeNode: true
                    }
                  }
                }
              },
              {
                id: 'network-segmentation',
                type: 'interactive-diagram',
                title: 'Network Segmentation Patterns',
                config: {
                  type: 'layered-network',
                  zones: [
                    {
                      name: 'DMZ',
                      color: '#FF6B6B',
                      description: 'Demilitarized Zone for public-facing services',
                      components: ['Web Servers', 'Email Servers', 'DNS']
                    },
                    {
                      name: 'Application',
                      color: '#4ECDC4',
                      description: 'Business application servers',
                      components: ['App Servers', 'API Gateways', 'Load Balancers']
                    },
                    {
                      name: 'Database',
                      color: '#45B7D1',
                      description: 'Data storage and management',
                      components: ['Database Servers', 'Storage Systems', 'Backup Systems']
                    },
                    {
                      name: 'Management',
                      color: '#96CEB4',
                      description: 'Network administration and monitoring',
                      components: ['Management Servers', 'Monitoring Tools', 'Security Controls']
                    }
                  ],
                  security: {
                    firewalls: [
                      { between: ['DMZ', 'Internet'], rules: ['Restricted inbound'] },
                      { between: ['DMZ', 'Application'], rules: ['Controlled access'] },
                      { between: ['Application', 'Database'], rules: ['Strict isolation'] }
                    ],
                    monitoring: {
                      points: ['Zone transitions', 'Critical assets'],
                      types: ['IDS/IPS', 'Flow analysis', 'Security logs']
                    }
                  },
                  interactions: {
                    onClick: {
                      action: 'expandZone',
                      showComponents: true
                    },
                    hover: {
                      showSecurityControls: true,
                      highlightDataFlow: true
                    }
                  }
                }
              }
            ]
          }
        }
      ]
    },
    networkPerformance: {
      id: 'network-performance',
      title: 'Network Performance Optimization',
      subsections: [
        {
          id: 'performance-optimization',
          title: 'Performance Optimization Fundamentals',
          content: {
            overview: 'Techniques for optimizing network performance',
            keyPoints: [
              'Performance metrics and benchmarking',
              'Traffic optimization techniques',
              'Quality of Service (QoS)',
              'Capacity planning'
            ]
          }
        }
      ]
    },
    advancedFirewall: {
      id: 'advanced-firewall',
      title: 'Advanced Firewall Concepts',
      subsections: [
        {
          id: 'advanced-firewall-concepts',
          title: 'Advanced Firewall Technologies',
          content: {
            overview: 'Deep dive into modern firewall technologies and implementations',
            keyPoints: [
              'Next-generation firewalls',
              'Application-layer filtering',
              'IDS/IPS integration',
              'Firewall architecture and deployment'
            ]
          }
        }
      ]
    },
    networkProtocols: {
      id: 'network-protocols',
      title: 'Network Protocols and Services',
      subsections: [
        {
          id: 'protocol-fundamentals',
          title: 'Protocol and Service Fundamentals',
          content: {
            overview: 'Comprehensive study of network protocols and services',
            keyPoints: [
              'Application layer protocols',
              'Transport protocols deep dive',
              'Network services architecture',
              'Protocol security considerations'
            ],
            visualizations: [
              {
                id: 'protocol-stack',
                type: 'interactive-diagram',
                title: 'Protocol Stack Interaction',
                config: {
                  type: 'layered-interaction',
                  protocols: [
                    {
                      layer: 'Application',
                      protocols: [
                        {
                          name: 'HTTP',
                          port: 80,
                          description: 'Web browsing protocol',
                          features: ['Request-Response', 'Stateless', 'Text-based']
                        },
                        {
                          name: 'FTP',
                          port: 21,
                          description: 'File transfer protocol',
                          features: ['File operations', 'Authentication', 'Control/Data channels']
                        },
                        {
                          name: 'SMTP',
                          port: 25,
                          description: 'Email transmission',
                          features: ['Mail transfer', 'Store and forward', 'Text commands']
                        }
                      ]
                    },
                    {
                      layer: 'Transport',
                      protocols: [
                        {
                          name: 'TCP',
                          description: 'Connection-oriented transport',
                          features: ['Reliable', 'Ordered', 'Flow control']
                        },
                        {
                          name: 'UDP',
                          description: 'Connectionless transport',
                          features: ['Fast', 'Simple', 'No guarantees']
                        }
                      ]
                    },
                    {
                      layer: 'Network',
                      protocols: [
                        {
                          name: 'IPv4',
                          description: '32-bit addressing',
                          features: ['Routing', 'Fragmentation', 'Best effort']
                        },
                        {
                          name: 'IPv6',
                          description: '128-bit addressing',
                          features: ['Larger address space', 'Built-in security', 'Auto-configuration']
                        }
                      ]
                    }
                  ],
                  interactions: {
                    onClick: {
                      action: 'expand',
                      showDetails: true
                    },
                    hover: {
                      showFeatures: true,
                      highlightRelated: true
                    }
                  }
                }
              },
              {
                id: 'tcp-handshake',
                type: 'animation',
                title: 'TCP Three-Way Handshake',
                config: {
                  type: 'sequence-diagram',
                  actors: [
                    { id: 'client', label: 'Client' },
                    { id: 'server', label: 'Server' }
                  ],
                  steps: [
                    {
                      from: 'client',
                      to: 'server',
                      message: 'SYN (seq=x)',
                      description: 'Client initiates connection'
                    },
                    {
                      from: 'server',
                      to: 'client',
                      message: 'SYN-ACK (seq=y, ack=x+1)',
                      description: 'Server acknowledges and responds'
                    },
                    {
                      from: 'client',
                      to: 'server',
                      message: 'ACK (ack=y+1)',
                      description: 'Client confirms connection'
                    }
                  ],
                  animations: {
                    timing: 'auto',
                    showStepDetails: true,
                    highlightFlags: true,
                    interactive: true
                  }
                }
              }
            ]
          }
        }
      ]
    },
    iam: {
      id: 'identity-access-management',
      title: 'Identity and Access Management (IAM)',
      subsections: [
        {
          id: 'iam-fundamentals',
          title: 'IAM Fundamentals',
          content: {
            overview: 'Understanding identity and access management in networks',
            keyPoints: [
              'Identity management systems',
              'Access control models',
              'Federation and SSO',
              'Privileged access management'
            ]
          }
        }
      ]
    },
    networkAutomation: {
      id: 'network-automation',
      title: 'Network Automation and Scripting',
      subsections: [
        {
          id: 'automation-fundamentals',
          title: 'Network Automation Fundamentals',
          content: {
            overview: 'Introduction to network automation and scripting',
            keyPoints: [
              'Automation tools and frameworks',
              'Network programmability',
              'Configuration management',
              'Infrastructure as Code'
            ]
          }
        }
      ]
    },
    devSecOps: {
      id: 'devsecops',
      title: 'DevSecOps',
      subsections: [
        {
          id: 'devsecops-fundamentals',
          title: 'DevSecOps Fundamentals',
          content: {
            overview: 'Integration of security into DevOps practices',
            keyPoints: [
              'Security automation',
              'Continuous security testing',
              'Security as Code',
              'Compliance automation'
            ]
          }
        }
      ]
    },
    networkVirtualization: {
      id: 'network-virtualization',
      title: 'Network Virtualization',
      subsections: [
        {
          id: 'virtualization-concepts',
          title: 'Network Virtualization Concepts',
          content: {
            overview: 'Advanced concepts in network virtualization',
            keyPoints: [
              'Virtual networks and overlay networks',
              'Network slicing',
              'Virtual network functions',
              'Multi-tenant networking'
            ],
            visualizations: [
              {
                id: 'network-virtualization-layers',
                type: 'interactive-diagram',
                title: 'Network Virtualization Architecture',
                config: {
                  type: 'layered-virtualization',
                  layers: [
                    {
                      name: 'Virtual Networks',
                      color: '#FF6B6B',
                      components: [
                        {
                          name: 'Tenant A Network',
                          resources: ['VMs', 'Containers', 'Virtual Switches'],
                          isolation: 'VLAN/VXLAN'
                        },
                        {
                          name: 'Tenant B Network',
                          resources: ['VMs', 'Containers', 'Virtual Switches'],
                          isolation: 'VLAN/VXLAN'
                        }
                      ]
                    },
                    {
                      name: 'Virtualization Layer',
                      color: '#4ECDC4',
                      components: [
                        {
                          name: 'Hypervisor',
                          features: ['Resource Management', 'Network Isolation']
                        },
                        {
                          name: 'Virtual Switches',
                          features: ['Traffic Control', 'VLAN Support']
                        }
                      ]
                    },
                    {
                      name: 'Physical Infrastructure',
                      color: '#45B7D1',
                      components: [
                        {
                          name: 'Physical Network',
                          resources: ['Switches', 'Routers', 'NICs']
                        },
                        {
                          name: 'Physical Servers',
                          resources: ['CPU', 'Memory', 'Storage']
                        }
                      ]
                    }
                  ],
                  overlays: [
                    {
                      name: 'Network Slicing',
                      type: 'segment',
                      properties: {
                        'QoS': 'Guaranteed bandwidth',
                        'Security': 'Isolated resources',
                        'Management': 'Independent control'
                      }
                    }
                  ],
                  interactions: {
                    onClick: {
                      action: 'expandLayer',
                      showDetails: true
                    },
                    hover: {
                      showResources: true,
                      highlightConnections: true
                    }
                  }
                }
              },
              {
                id: 'virtual-network-functions',
                type: 'interactive-diagram',
                title: 'Virtual Network Functions (VNF)',
                config: {
                  type: 'service-chain',
                  functions: [
                    {
                      name: 'Virtual Firewall',
                      type: 'security',
                      features: ['Packet filtering', 'NAT', 'VPN endpoint']
                    },
                    {
                      name: 'Virtual Load Balancer',
                      type: 'traffic',
                      features: ['Load distribution', 'Health monitoring', 'SSL offloading']
                    },
                    {
                      name: 'Virtual Router',
                      type: 'networking',
                      features: ['Routing', 'QoS', 'Traffic shaping']
                    }
                  ],
                  serviceChains: [
                    {
                      name: 'Web Application Chain',
                      sequence: ['Virtual Firewall', 'Virtual Load Balancer'],
                      traffic: {
                        input: 'Internet Traffic',
                        output: 'Web Servers'
                      }
                    },
                    {
                      name: 'Internal Network Chain',
                      sequence: ['Virtual Router', 'Virtual Firewall'],
                      traffic: {
                        input: 'Internal Traffic',
                        output: 'Private Network'
                      }
                    }
                  ],
                  interactions: {
                    onClick: {
                      action: 'showDetails',
                      displayMetrics: true
                    },
                    hover: {
                      highlightChain: true,
                      showTrafficFlow: true
                    }
                  }
                }
              }
            ]
          }
        }
      ]
    }
  };
