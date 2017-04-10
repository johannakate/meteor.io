function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const people = [{
  name: 'Geoff Schmidt',
  picture: 'geoff.jpg',
  founder: true,
  title: 'CEO',
  twitter: 'immir',
  bio: 'Geoff raised his first venture capital round at age 20. He was one of the inventors of audio fingerprinting, one of the original authors of Miro, and employy #9 at Asana. He is the proprietor of Monument, a 24-unit live/work community for scientists and artists in San Francisco, and as a teenager he won the overall prize at the world science fair and attended MIT for almost four months.',
}, {
  name: 'Nick Martin',
  picture: 'nick.jpg',
  founder: true,
  title: 'CTO',
  twitter: 'n1mmy',
  bio: 'Nick has built everything from peer-to-peer networks, to iPhone applications, to the software inside black vans. Most recently, he built the Hadoop infrastructure at Mochi Media. He founded MixApp with Geoff, where he invented a technique for opening bidirectional connections through NATs by embedding a TCP stack in user-space. As an undergraduate at MIT, he wrote cryptography software that let groups of people have secure, anonymous conversations over mailing lists.',
}, {
  name: 'Matt DeBergalis',
  picture: 'matt.jpg',
  founder: true,
  title: 'VP R&D',
  twitter: 'debergalis',
  bio: 'Matt founded and ran ActBlue, the largest political fundraising platform in the world. ActBlue has raised over 700 million dollars for candidates and political groups nationwide. Before that, Matt was a kernel hacker. Some of his technical credits include the NeXT port of NetBSD and work on the NFSv4 and DAFS specifications while at Network Appliance. As an undergraduate at MIT, Matt built a phone system for his fraternity, fabricating the circuit boards and writing the operating system from scratch.',
}, {
  name: 'Mark Trang',
  picture: 'trang.jpg',
  title: 'VP Buisness Development',
  twitter: 'marktrang',
  bio: 'Mark oversees business development and partnerships for Meteor. Previously a platform exec at top SaaS companies like Salesforce.com and LivePerson, Mark has built high-growth revenue channels through massive partner ecosystems like AppExchange. Mark has also been a founder at several venture-backed software companies and started his career at Deloitte Consulting helping save large enterprises from the dreaded Y2K bug. Mark holds a BA and MBA from UCLA and is a ramen lover, certified rescue diver, and adventure photographer.',
}, {
  name: 'Chris Shaw',
  picture: 'shaw.jpg',
  title: 'Director of Talent',
  twitter: 'cshaw4',
  bio: 'Chris leads Meteor\'s talent acquisition and retention efforts at Meteor. He has been helping companies build with top tier talent since 1997. After working for 12 highly successful years in agency recruiting, 8 of which were with a well respected agency he founded, Chris went on to recruit for some of the top companies in the world. Chris recruited engineers and executives at Google, then moved to a key recruiting leadership role at Twitter as it aggressively strove to go public. From there, Chris was recruited by Andreessen Horowitz to build out recruiting for one of their top portfolio companies, Illumio, Inc. Joining at 25 employees, Chris built the recruiting engine that grew Illumio from a small series B company through Illumio\'s $100 million C round.',
}, {
  name: 'Sashko Stubailo',
  picture: 'sashko.jpg',
  title: 'Tech Lead : Apollo OSS',
  twitter: 'stubailo',
  longBio: 'Sashko has a history of working on leading edge web technologies that help developers build great applications. While working at Palantir, he developed a new charting library for data analysis and visualization capabilities that automatically reacts to changes in data. At Panjiva, he wrote a Rails internationalization middleware that lets professional translators directly click and edit parts of a web page. Sashko is particularly interested in improving Meteor\'s new developer experience and enabling everyone to build fast, beautiful, and intuitive user interfaces. He graduated from MIT in 2014 and loves traveling, DJing, and dancing.',
  bio: 'In addition to being an engineering manager, tech lead, and Meteor Forum champion, Sashko is also the office\'s resident DJ and board game master.',
}, {
  name: 'Zhenya Savchenko',
  picture: 'zhenya.jpg',
  title: 'Engineering Manager',
  twitter: 'zhenyasaisquoi',
  bio: 'Zhenya is an engineer who likes to design and deliver elegant solutions to complex challenges. He joined Meteor as a core developer working on front-end applications, including Galaxy. Before Meteor, he served as a co-founder of SpendMatic, where he worked on OCR technology to manage reciepts and invoices. Zhenya studied electrical and software engineering at McGill University.',
}, {
  name: 'Thea Lamkin',
  picture: 'thea.jpg',
  title: 'Developer Programs',
  twitter: 'thelamkin',
  // bio: 'Thea manages developer programs and relations at Meteor. She has previously managed communities at Docker, New Relic and Flickr. Her passion is to help developers build software they can be proud of. Gathering product feedback, tinkering with documentation, and finding community experts are her favorite things to do at work. In her free time, she loves haunting independent bookstores and perfecting recipes.',
  bio: 'When not ..., ..., or ..., you can probably find Thea climbing a mountain or running a half-marathon. She\'s also the office\'s primary consumer of berries.',
}, {
  name: 'Ben Newman',
  picture: 'ben.jpg',
  title: 'Tech Lead : Meteor OSS',
  twitter: 'benjamn',
  bio: 'A common thread that runs through Ben’s history of employment at Meebo, Apture, Mozilla, Quora, Facebook, and Meteor is a passion for exploring the limits of dynamic programming languages. Many of his most recent projects have involved large-scale automatic code transformation that would be difficult or impossible without the tools he has developed, namely recast and ast-types. He implemented Quora’s rich-text answer editor and Facebook’s Regenerator project, remains an active React contributor, and represents Meteor in the TC39 JavaScript standards process. The future of JavaScript can’t get here soon enough, as far as Ben is concerned.',
}, {
  name: 'David Glasser',
  picture: 'glasser.jpg',
  title: 'Tech Lead : Galaxy Backend',
  twitter: 'glasser',
  bio: 'David has been creating developer tools since 2005. He was an active contributor to the Subversion and SVK version control systems, and most recently spent five years at Google rebuilding the infrastructure behind the world\'s largest atomically versioned source code repository. For his master\'s thesis at MIT he built an automated test generator for Java software using dynamic analysis. David is a founding member of Langton Labs, a residential community for artists and scientists in San Francisco established in 2007, where he has hosted dozens of events ranging from combination DJ/cooking competitions to Balinese gamelan concerts.',
}, {
  name: 'Danielle Man',
  picture: 'danielle.jpg',
  title: 'Core Developer',
  twitter: 'danimman',
  bio: 'Danielle joined Meteor after graduating from MIT, where she was a teaching assistant for the User Interface and Design class. She\'s a front-end developer who loves CSS + Javascript, and dabbles with UI/UX design. At Meteor, she\'s a core dev, working on the front-end applications Optics and Galaxy. In the past, she has worked at Locu/GoDaddy, Lucid Software, and YouGov. In her free time, she enjoys coding, hiking, traveling, trying new restaurants, and making frequent trips to Boston and Lake Tahoe.',
}, {
  name: 'Jonas Helfer',
  picture: 'jonas.jpg',
  title: 'Core Developer',
  twitter: 'helferjs',
  bio: 'Jonas joined Meteor after finishing his Master’s at MIT, where he worked on Mylar, a version of Meteor that makes client-side encryption easy and secure. During his time at there, Jonas also won MIT’s web programming competition and worked together with the Federal Aviation Administration to improve the cybersecurity of commercial aircraft. In the past, Jonas has worked for Amplitude, where he rebuilt the entire analytics dashboard in Angular. In his spare time, Jonas practices Taekwondo and helps organize the International Biology Olympiad, which he once attended as a participant many many years ago.',
}, {
  name: 'Rohit Bahkshi',
  picture: 'rohit.jpg',
  title: 'Senior Product Manager',
  twitter: 'rohit2b',
  bio: 'Rohit is responsible for commercial SaaS product management at Meteor - Meteor Galaxy and Apollo Optics. Prior to Meteor, Rohit was on the original product team at Hortonworks, where he led product management for Hadoop Core and Hadoop on Azure. Rohit loves listening to live jazz and drinking espresso.',
}, {
  name: 'Martijn Walraven',
  picture: 'martijn.jpg',
  title: 'Core Developer',
  twitter: 'martijnwalraven',
  bio: 'Martijn created Meteor iOS, which integrates native iOS apps with the Meteor platform. He began programming at the age of 9 when his mom bought him a second hand Commodore VIC-20. He worked with emerging web technologies at a small development company and later became caught up in the corporate world of enterprise Java, teaching technical training courses to developers. While continuing to work on independent projects, he decided to follow some of his other passions, and that lead to a bachelor\'s and master\'s degree in philosophy and cognitive science from Leiden University, The Netherlands. He also spent a year as an exchange student at UC San Diego. In recent years he has taught philosophy to high school students and has worked on a children\'s TV program about philosophy.',
}, {
  name: 'Alisha Ehrlich',
  picture: 'alisha.jpg',
  title: 'Recruiting Coordinator',
  twitter: 'alishaehrlich',
  longBio: 'Alisha supports Meteor\'s talent acquisition and retention efforts. Before joining Meteor, she worked in customer-facing artistic enablement positions. She built out onboarding documentation and best practices, as well as increased the customer satisfaction index 12% beyond the global standard. She graduated from UC Berkeley and in her spare time, she likes to read (with her books running the gamut from Mary Roach to Jane Austen), play board games, and marathon episodes of TV shows on Netflix.',
  bio: 'Alisha supports Meteor\'s talent acquisition and retention effort, and in her spare time loves to read (with her books running the gamut from Mary Roach to Jane Austen), play board games, and marathon episodes of TV shows on Netflix.',
}, {
  name: 'Tim Hingston',
  picture: 'tim.jpg',
  title: 'Tech Lead : Galaxy Frontend',
  twitter: 'timbotnik',
  bio: 'Tim joined Meteor via Percolate Studio, where he helped build and maintain several high-scale Meteor apps. Now a seasoned software architect and engineer, he started out analyzing real-time brain imaging data from fMRI scanners as an undergrad at Duke University. Since deciding not to become a neuroscientist, he’s worked on fault-tolerant video streaming systems for MobiTV, mobile apps for the Discovery Channel and Tesla, and an ever-growing list of cloud web services. When he\'s not coding, Tim is known to grab a guitar and hit the road. He\'s toured with several indie bands, including appearances at SXSW and on MTV, and generally loves all things music.',
}, {
  name: 'Faby Zavala',
  picture: 'faby.jpg',
  title: 'Office Manager',
  twitter: '',
  bio: '',
}, {
  name: 'Jesse Rosenberger',
  picture: 'jesse.jpg',
  title: 'Core Developer',
  twitter: 'abernix',
  bio: 'Jesse spent many childhood years at a DOS prompt and graduated to FreeBSD by age 12. He built websites and JavaScript games until his first "part-time" job as a Software Engineer for Virtualis (now Hosting.com) at age 15. As the 8th employee he grew with it to 100+ employees while engineering their control panel software and affiliate program in addition to handling network operations and speaking about his job with San Jose high school students. Many years and several start-ups later, the "travel-bug" kicked in and he began a multi-year backpacking adventure which eventually led him to build software for the hostel industry (with Meteor!). He now lives in Finland, but don\'t be surprised to find him in your own country (or a music festival).',
}, {
  name: 'Julian Martinez',
  picture: 'julian.jpg',
  title: 'Technical Support Engineer',
  twitter: 'julianeon',
  bio: 'Julian oversees the customer support experience. He touches almost every support case and creates metrics, tracks feature requests, and escalates issues that require immediate attention. His greatest priority is to make sure everything is running smoothly, from the perspective of the user. At his previous position, he managed a small team to transition the 3rd-largest cryptocurrency by valuation to a third-party developer model. He loves both Emacs and games, and enjoys chess enough to create a chess card set which briefly sold on Amazon.',
}, {
  name: 'Uri Goldshtein',
  picture: 'uri.jpg',
  title: 'Core Developer',
  twitter: 'urigoldshtein',
  bio: 'Uri is the developer of the popular angular-meteor library and core developer at Meteor. Before that Uri has worked as a programmer, team manager and architect in a large defence company building infrastructure for tactical information systems. Uri was the first employee of Bink, a startup for the banking industry, where he learned and later lectured on Angular at Google and ng-conf. He also started his own software company specializing in large scale web applications, mostly for the health care industry. Uri is also an experienced guitar player and teacher.',
}, {
  name: 'Pierre Carrier',
  picture: 'pierre.jpg',
  title: 'Tech Lead : Optics',
  twitter: 'pcarrier',
  bio: 'Pierre specializes in distributed systems and currently serves on the platform engineering team at Meteor. He has served prior roles at Twitter, Airbnb, Spotify, and Red Hat. Pierre has lived in France, United Kingdom, Sweden, Germany, and now a combination of San Francisco and Canada. Outside of work, Pierre maintains an impressive collection of keyboards, and has even designed his own, the Planck, a minimal keyboard now used by thousands. Also, he wanted us to mention that he\'s quite French.',
}, {
  name: 'Joseph Glanville',
  picture: 'joseph.jpg',
  title: 'Cloud Systems Engineer',
  twitter: 'jpgvm',
  bio: '',
}];

module.exports = {
  companyName: 'Meteor Development Group',
  people: shuffle(people),
  investors: ['andressen.png', 'combinator.png', 'heavybit.png', 'matrix.png', 'trinity.png'],
  partners1: ['airbnb.png', 'facebook.png', 'open-table.png', 'ticketmaster.png', 'heroku.png', 'yelp.png', 'ikea.png'],
  partners2: ['udacity.png', 'new-york-times.jpg', 'product-hunt.png', 'shopify.png', 'coursera.png', 'qualcomm.png', 'mazda.jpg'],
  jobs: [{
    id: 'df91b724-8dc7-4f15-9beb-0554261c8379',
    title: 'Product Management',
    description: 'Define and ship new product features while working closely with our engineering team. You\'ll be working on steering the direction of our commercial products, Optics and Galaxy, and our open source efforts, Apollo and Meteor.',
    image: 'product-management.jpg',
  },{
    id: '9de2d23b-fd3c-421e-92b1-26203c60f1b1',
    title: 'Cloud Systems Engineering',
    description: 'Help shape the evolution of the modern cloud architecture. You\'ll contribute to exciting new technologies and solve hard problems in distributed systems, scalability, cross-region coordination, and cloud orchestration.',
    image: 'cloud-services.jpg',
  },{
    id: '959865c0-73b9-4938-91ec-ed69fabeec24',
    title: 'Frontend Application Engineering',
    description: 'Design and build interactive components and data-rich experiences for other developers just like you. Our products are built for developers by developers, and we care deeply about creating high-quality products with well-designed user experiences.',
    image: 'frontend.jpg',
  },{
    id: 'b8ec842e-e79a-455e-a665-b312892d946e',
    title: 'Backend Service Engineering',
    description: 'Build the foundations and APIs of our tools for GraphQL and JavaScript developers. Work closely with the rest of the product development team to help shape and deliver the components that make up our commercial cloud sevices.',
    image: 'backend.jpg',
  },{
    id: '5e11e6cf-5303-4c12-a3e7-11e5f8da4be1',
    title: 'Open Source Engineering',
    description: 'Help us build open source GraphQL and JavaScript libraries and tools, share our ideas with the GraphQL community, and collaborate with other companies and projects to move GraphQL forward.',
    image: 'open-source.jpg',
  },{
    id: 'e545fc3a-8cd2-4faf-8653-bf83d2e35a8b',
    title: 'Design',
    description: 'Help product developers build great apps quickly. For us, the produt developer experience is essential, and we strive to build fun and intuitive products that feel right and work well.',
    image: 'design.png',
  }],
}
