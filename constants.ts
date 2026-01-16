import { Project, BlogPost, TeamMember, Award, Testimonial, ProcessStep, Service, DigitalProduct } from './types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'understand',
    number: '1',
    title: 'Understand',
    items: ['client vision', 'site study', 'climate analysis'],
    description: 'Every project begins with understanding—listening to visions, sensing the site, and learning from climate. We delve deep into the context to build a foundation of empathy and knowledge.',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'design',
    number: '2',
    title: 'Design',
    items: ['conceptual design', 'final design', 'cost estimate'],
    description: 'Ideas take shape, evolving into designs that respond with care. We iterate through concepts, balancing aesthetics with function, and ensuring the budget aligns with the vision.',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'deliver',
    number: '3',
    title: 'Deliver',
    items: ['contractor selection', 'working drawings', 'supervision'],
    description: 'Finally, we guide the making, ensuring each space is built true to its intent. Precision in documentation and on-site supervision ensures the dream becomes a tangible reality.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'architectural-design',
    title: 'Architectural Design',
    description: 'Context-driven architecture that harmonizes structure with nature. We do not just build; we craft ecosystems that breathe.',
    valueProps: [
        'Climate-responsive design reducing long-term energy costs',
        'Timeless aesthetics that significantly increase property value',
        'Seamless integration of local, sustainable materials',
        'End-to-end project management ensuring peace of mind'
    ],
    icon: 'PenTool',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop',
    fullDescription: `Architecture is more than shelter; it is the physical language of your lifestyle. At Anvitam, we specialize in creating spaces that feel indigenous to their land yet distinctly modern in their function.
    
    Our approach moves beyond the visual. We analyze wind patterns, sun paths, and soil conditions to design homes that naturally cool themselves, reducing your reliance on artificial energy. We believe that a true luxury home is one that gives back—to you, and to the environment.
    
    Whether you are building a weekend retreat or a primary residence, our designs ensure a seamless flow between the indoors and outdoors, inviting nature to be a permanent guest in your home.`,
    process: [
      { title: 'Site & Climate Analysis', description: 'We spend time on your land, understanding its rhythms, light, and hidden potentials before drawing a single line.' },
      { title: 'Conceptual Storytelling', description: 'We present initial sketches and 3D volumes that capture the "soul" of the project, ensuring alignment with your vision.' },
      { title: 'Technical Precision', description: 'From structural integrity to material detailing, we produce comprehensive drawings that leave no room for ambiguity during construction.' },
      { title: 'On-Site Curation', description: 'We actively supervise the build, collaborating with local craftsmen to ensure the finish matches our shared high standards.' }
    ],
    benefits: [
      'Structures that age gracefully and require lower maintenance.',
      'A unique "sense of place" that standard designs cannot replicate.',
      'Healthier living environments through natural ventilation and light.'
    ],
    bookingLink: 'https://topmate.io/ar_archana_gavas'
  },
  {
    id: 'interior-design',
    title: 'Biophilic Interior Design',
    description: 'Interiors that heal. We bring the outdoors in, creating spaces that reduce stress, enhance creativity, and promote well-being.',
    valueProps: [
        'Health-centric material selection (non-toxic, organic)',
        'Optimized natural lighting and ventilation planning',
        'Bespoke furniture design tailored to your lifestyle',
        'Space planning that maximizes flow and functionality'
    ],
    icon: 'Layout',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop',
    fullDescription: `We spend 90% of our lives indoors. Shouldn't that space nurture us? Our Biophilic Interior Design service is rooted in the science of how natural environments affect human biology.
    
    We don't just pick colors; we curate atmospheres. By integrating natural textures (wood, stone, clay), maximising daylight, and incorporating living green elements, we create interiors that lower cortisol levels and boost mental clarity.
    
    This service is perfect for homeowners who want a sanctuary, or offices that want to improve team productivity and well-being.`,
    process: [
      { title: 'Lifestyle Mapping', description: 'We analyze your daily routines to ensure the space serves you, rather than you serving the space.' },
      { title: 'Material & Sensory Board', description: 'We curate a palette of non-toxic, tactile materials that feel as good as they look.' },
      { title: 'Lighting Design', description: 'We design lighting layers that mimic natural circadian rhythms, improving your sleep and energy levels.' },
      { title: 'Styling & Greenery', description: 'The final layer involves selecting the right indoor plants and art to breathe life into the rooms.' }
    ],
    benefits: [
      'Reduction in stress and anxiety through calming natural elements.',
      'Improved indoor air quality via specific plant selection and non-toxic materials.',
      'Timeless aesthetic that defies temporary trends.'
    ],
    bookingLink: 'https://topmate.io/ar_archana_gavas'
  },
  {
    id: 'permaculture',
    title: 'Permaculture & Landscape',
    description: 'Beyond landscaping. We design regenerative systems that restore the soil, manage water, and provide food.',
    valueProps: [
        'Water harvesting & greywater recycling systems',
        'Edible landscaping & organic food gardens',
        'Biodiversity restoration for ecological balance',
        'Low-maintenance, self-sustaining green ecosystems'
    ],
    icon: 'Sprout',
    image: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=1200&auto=format&fit=crop',
    fullDescription: `A garden should be more than just a view; it should be a living, productive system. Our Permaculture Design service transforms your land into a self-sustaining ecosystem.
    
    We look at your property as a whole organism. How does water flow? Where does the wind hit? How can we rebuild the soil? We design landscapes that capture rainwater, produce organic food, and provide habitat for local birds and pollinators.
    
    This is not just gardening; this is legacy building. Whether you have a small urban terrace or a sprawling farm, we can help you create a patch of earth that thrives with minimal intervention.`,
    process: [
      { title: 'Sector Analysis', description: 'Mapping sun, wind, water, and wildlife sectors to place elements in their optimal locations.' },
      { title: 'Water Systems Design', description: 'Designing swales, ponds, and rain gardens to ensure no drop of water leaves your land.' },
      { title: 'Planting Guilds', description: 'Selecting companion plants that support each other, reducing the need for fertilizers and pesticides.' },
      { title: 'Soil Restoration', description: 'Implementing composting and mulching strategies to turn dead dirt into living soil.' }
    ],
    benefits: [
      'Food security through your own organic produce.',
      'Drastic reduction in water usage for irrigation.',
      'Creation of a cool microclimate around your home.'
    ],
    bookingLink: 'https://topmate.io/ar_archana_gavas'
  },
   {
    id: 'rnd',
    title: 'Research & Development',
    description: 'Pushing boundaries with material innovation. From bamboo-crete to mud blocks, we engineer the future of sustainable building.',
    valueProps: [
        'Custom sustainable material development',
        'Sustainability auditing and retrofitting',
        'Experimental prototype testing',
        'Feasibility studies for alternative construction'
    ],
    icon: 'FlaskConical',
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1200&auto=format&fit=crop',
    fullDescription: `Innovation is at the heart of Anvitam. Our R&D wing is dedicated to finding better, cheaper, and more sustainable ways to build. We don't just accept standard industry practices; we challenge them.
    
    Are you a developer looking to reduce the carbon footprint of your project? Or a homeowner wanting to use earth from your own site to build walls? We conduct feasibility studies, prototype testing, and material research to make your "impossible" idea possible.
    
    We specialize in alternative materials like bamboo, rammed earth, and lime, bridging the gap between ancient wisdom and modern engineering codes.`,
    process: [
      { title: 'Problem Identification', description: 'We pinpoint the specific sustainability or cost challenge you are facing.' },
      { title: 'Material Exploration', description: 'We source and test local materials to see if they can be repurposed for construction.' },
      { title: 'Prototyping', description: 'We build small-scale models or mockups to test durability and finish.' },
      { title: 'Implementation Strategy', description: 'We provide a roadmap for scaling the solution to your full project.' }
    ],
    benefits: [
      'Significant cost savings by using local/waste materials.',
      'First-mover advantage in the sustainable real estate market.',
      'Reduced environmental impact and carbon credits potential.'
    ],
    bookingLink: 'https://topmate.io/ar_archana_gavas'
  }
];

export const DIGITAL_PRODUCTS: DigitalProduct[] = [
  {
    id: 'portfolio-review',
    title: '1:1 Portfolio Review & Career Guidance',
    description: 'A personalized 45-minute session to review your architectural portfolio, refine your narrative, and position yourself for top international firms. Get actionable feedback from an experienced principal architect.',
    price: '₹999',
    link: 'https://topmate.io/ar_archana_gavas/1812019?utm_source=public_profile&utm_campaign=ar_archana_gavas',
    // Using founder image/session image
    image: 'https://topmate.io/cdn-cgi/image/width=640,quality=90/https://static.topmate.io/da2bLpNHf3cETP6EKEtsXL.jpeg',
    tags: ['Mentorship', 'Career', 'Architecture']
  },
  {
    id: 'general-consultation',
    title: 'Project Discussion & Consultation',
    description: 'Book a priority 1:1 session to discuss your upcoming project, site feasibility, or sustainability goals. A focused discussion to bring clarity to your vision before you build.',
    price: 'Book Now',
    link: 'https://topmate.io/ar_archana_gavas/1799075?utm_source=public_profile&utm_campaign=ar_archana_gavas',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop',
    tags: ['Consultation', 'Project Planning', 'Strategy']
  }
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'container-motel',
    title: 'Container Motel',
    category: 'Hospitality',
    location: 'Goa, India',
    year: '2023',
    // Placeholder based on provided images
    image: 'https://images.unsplash.com/photo-1540544660406-6a69dacb2804?q=80&w=1200&auto=format&fit=crop', 
    description: 'A sustainable hospitality hub crafted from repurposed shipping containers, featuring vibrant graffiti and solar integration.',
    fullDescription: `The Container Motel is a vibrant experiment in sustainable hospitality. Designed to minimize construction waste and maximize modular efficiency, this project breathes new life into discarded shipping containers.
    
    The layout is centered around a communal courtyard and pool, fostering interaction among guests. Graffiti art adorns the white corrugated metal walls, bringing an urban, youthful energy to the tropical setting.
    
    Solar panels line the roofs, powering the facility and reinforcing our commitment to eco-friendly practices.`,
    isFeatured: true,
    specs: [
        { label: 'Area', value: '12,000 sqft' },
        { label: 'Modules', value: '24 Containers' },
        { label: 'Energy', value: '100% Solar Powered' }
    ],
    story: [
        {
            title: "The Vision",
            content: "We wanted to create a space that was temporary yet timeless. Using shipping containers allowed us to be modular and mobile, but the challenge was to make steel feel welcoming.",
            image: "https://images.unsplash.com/photo-1502005229762-cf1e2a862d46?q=80&w=1200&auto=format&fit=crop" // Placeholder for Sketch/Concept
        },
        {
            title: "Construction & Fabrication",
            content: "The containers were modified off-site to reduce noise pollution. Windows were cut, insulation added, and frames reinforced. The assembly on site was like a giant lego set coming together.",
            image: "https://images.unsplash.com/photo-1587316831032-47535b91b8a9?q=80&w=1200&auto=format&fit=crop" // Placeholder for Construction
        },
        {
            title: "The Green Integration",
            content: "To counter the heat absorption of metal, we integrated vertical gardens and climbing vines (biophilia) that cool the structures naturally. The central pool acts as an evaporative cooling body for the courtyard.",
            image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=1200&auto=format&fit=crop" // Placeholder for Pool/Greenery
        }
    ],
    gallery: [
        { url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop', caption: 'Courtyard View' },
        { url: 'https://images.unsplash.com/photo-1533423996375-f914ab160c32?q=80&w=1200&auto=format&fit=crop', caption: 'Graffiti Art Detail' },
        { url: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1200&auto=format&fit=crop', caption: 'Poolside Deck' }
    ]
  },
  {
    id: 'lake-house',
    title: 'Lake House',
    category: 'Residential',
    location: 'Surat, Gujarat',
    year: '2023',
    // New, reliable Unsplash Image for modern house/lake vibe
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop',
    description: 'The beauty of the structure is in the blend of materials and the play of light and shadow.',
    fullDescription: `The Lake house is a 4500 sq.ft 3-bedroom farmhouse, meant as a vacation home for a large family in Vesma, near Surat, Gujarat... (Full text preserved)`,
    gallery: [
      { url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop', caption: 'Veranda' },
      { url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop', caption: 'Pool' },
    ],
    specs: [
      { label: 'Name', value: 'Lake house' },
      { label: 'Location', value: 'Surat, Gujarat' },
      { label: 'Area', value: '4500 sqft' },
      { label: 'Team', value: 'Anvitam' },
    ],
    isFeatured: true,
  },
  {
    id: 'p1',
    title: 'The Concrete Void',
    category: 'Residential',
    location: 'Vadodara, Gujarat',
    year: '2023',
    // Updated Image
    image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=1200&auto=format&fit=crop',
    description: 'A brutalist exploration of space and light.',
    gallery: [
       { url: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&w=1200&auto=format&fit=crop', caption: 'Living Room Void' }
    ],
    isFeatured: true,
    specs: [{ label: 'Location', value: 'Vadodara' }]
  },
  {
    id: 'p2',
    title: 'Skyline Pavilion',
    category: 'Community',
    location: 'Ahmedabad, Gujarat',
    year: '2022',
    // Updated Image
    image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=1200&auto=format&fit=crop',
    description: 'An open-air pavilion designed to blur boundaries.',
    isFeatured: true,
    specs: [{ label: 'Location', value: 'Ahmedabad' }]
  },
  {
    id: 'p4',
    title: 'House of Shadows',
    category: 'Residential',
    location: 'Alibaug, Maharashtra',
    year: '2023',
    // Updated Image
    image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200&auto=format&fit=crop',
    description: 'A weekend retreat that plays with light and shadow.',
    isFeatured: false,
    specs: [{ label: 'Location', value: 'Alibaug' }]
  },
];

export const INITIAL_BLOGS: BlogPost[] = [
  {
    id: 'biophilic-design',
    title: 'Biophilic Design: Connecting Architecture with Nature',
    date: 'October 25, 2023',
    author: 'Anvitam Team',
    excerpt: 'Rooted in the belief that humans have an innate connection to nature, biophilic design incorporates natural elements to create spaces that promote well-being.',
    // Updated Image
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop',
    toc: [
      'What is biophilic design',
      'Principles of Biophilic Design',
      'Benefits of Biophilic Design',
      'Implementing Biophilic Design',
      'Comparison: Conventional vs Biophilic',
      'Biophilia in Interiors'
    ],
    content: `
      <h2>What is biophilic design</h2>
      <p>Biophilic design is an architectural approach that integrates natural elements—such as light, air, greenery, and organic materials—into built environments to promote well-being, productivity, and a deeper connection to nature.</p>
      <p>Rooted in the belief that humans have an innate connection to nature, biophilic design incorporates natural elements, materials, and processes to create spaces that promote well-being, enhance productivity, and contribute to environmental sustainability. This approach is not just about aesthetics—it fundamentally improves the quality of life for occupants by fostering a closer connection to the natural world.</p>

      <h2>Principles of Biophilic Design</h2>
      <p>Stephen Kellert, a pioneer in biophilic design, identified six core elements that guide its application:</p>
      
      <h3>1. Environmental Features</h3>
      <p>This principle emphasizes the direct integration of natural elements into the built environment. Incorporating plants, water features, sunlight, fresh air, and natural materials such as wood and stone creates spaces that resonate with human affinity for nature.</p>
      
      <h3>2. Natural Shapes and Forms</h3>
      <p>Biophilic architecture employs shapes and patterns found in nature—such as curves, arches, and organic forms—to evoke a sense of harmony.</p>

      <h3>3. Natural Patterns and Processes</h3>
      <p>This element focuses on incorporating natural variability, richness of detail, and sensory experiences. Patterns in materials, changing light conditions, and textured surfaces mimic the dynamic processes found in nature.</p>

      <h2>Benefits of Biophilic Design</h2>
      <ol>
        <li><strong>Enhances Mental Health:</strong> Being surrounded by natural elements has been shown to reduce stress, anxiety, and depression.</li>
        <li><strong>Boosts Productivity:</strong> Natural lighting and greenery stimulate the mind and reduce fatigue.</li>
        <li><strong>Promotes Physical Health:</strong> Improved air quality and natural ventilation.</li>
      </ol>

      <h2>Comparison: Conventional Design vs Biophilic Design</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse my-8">
          <thead>
            <tr class="border-b-2 border-anvitam-green">
              <th class="py-4 font-serif text-lg">Feature</th>
              <th class="py-4 font-serif text-lg">Conventional Design</th>
              <th class="py-4 font-serif text-lg">Biophilic Design</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-gray-200">
              <td class="py-3">Connection to Nature</td>
              <td class="py-3 text-gray-500">Minimal or incidental</td>
              <td class="py-3 font-medium">100% Integrated</td>
            </tr>
            <tr class="border-b border-gray-200">
              <td class="py-3">Materials Used</td>
              <td class="py-3 text-gray-500">Often synthetic/industrial</td>
              <td class="py-3 font-medium">Natural, Local, Earthy</td>
            </tr>
            <tr class="border-b border-gray-200">
              <td class="py-3">User Well-being</td>
              <td class="py-3 text-gray-500">Not always considered</td>
              <td class="py-3 font-medium">Central to design</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Biophilia in Interiors</h2>
      <p>Biophilia shapes not just our architecture but also our interior design philosophy. Across several homes and retreats near Mumbai, we’ve crafted interiors that invite nature inside — through material, light, form, and sensory experience.</p>
      <p>We use natural finishes like lime plaster, reclaimed wood, and earth-based flooring to create tactile warmth. Indoor courtyards, skylights, and large openings bring in sunlight, shadows, and breeze, fostering a constant dialogue between inside and out.</p>

      <h2>Conclusion</h2>
      <p>In an age of rapid urbanisation, biophilic design offers a return to balance. By weaving nature into the fabric of our homes, we create environments that nurture the human spirit. At Anvitam, we see biophilic design not as a style, but as a responsibility.</p>
    `
  },
  {
    id: 'future-sustainable',
    title: 'The Future of Sustainable Architecture in Gujarat',
    date: 'October 15, 2023',
    author: 'Archana Gavas',
    excerpt: 'Exploring how traditional Gujarati building techniques can be adapted for modern sustainability needs.',
    content: '<p>Full article content regarding sustainable practices in Gujarat...</p>',
    // Updated Image
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1200&auto=format&fit=crop',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 't1',
    name: 'Archana Gavas',
    role: 'Principal Architect, Founder',
    // Updated image link
    image: 'https://topmate.io/cdn-cgi/image/width=640,quality=90/https://static.topmate.io/da2bLpNHf3cETP6EKEtsXL.jpeg',
    bio: 'Rooted in Vadodara, Designing for the world.',
    linkedin: 'https://www.linkedin.com/in/archana-gavas/'
  },
];

export const AWARDS: Award[] = []; 

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'tm1',
    text: "Anvitam transformed our workspace into a breathing ecosystem. The biophilic interior isn't just aesthetic; it has palpably shifted the creative energy of our entire team in London.",
    author: 'Elena Rossi',
    role: 'Creative Director, Studio Lumière',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80'
  },
  {
    id: 'tm2',
    text: "We needed a masterplan that honored the land first. Archana’s permaculture approach wasn't just landscaping; it was a deep ecological restoration. The water harvesting systems are a work of art.",
    author: 'Julian Thorne',
    role: 'Founder, Gaia Retreats, Bali',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80'
  },
  {
    id: 'tm3',
    text: "Collaborating with Anvitam on the bamboo-crete prototype was illuminating. Their research-driven design process and willingness to experiment with vernacular materials for modern application is world-class.",
    author: 'Dr. Klaus Weber',
    role: 'Lead Researcher, EcoMat Labs, Berlin',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80'
  },
  {
    id: 'tm4',
    text: "I didn't want a house; I wanted a gallery for living. Anvitam's play of light and shadow created the perfect canvas for my collection. Sophisticated, understated, and utterly timeless.",
    author: 'Sarah Al-Fayed',
    role: 'Art Collector, Dubai',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&q=80'
  }
];