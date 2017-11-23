const mongoose = require('mongoose');
const Event = require('../models/Event');
const User = require('../models/User');
const Attendee = require('../models/Attendee');
const faker = require('faker');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_HOST || 'mongodb://localhost/events', { useMongoClient: true });

const users = [
  {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    username: faker.internet.userName(),
    profileImage: faker.internet.avatar(),
    passwordHash: '11111111'
  },
  {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    username: faker.internet.userName(),
    profileImage: faker.internet.avatar(),
    passwordHash: '11111111'
  },
  {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    username: faker.internet.userName(),
    profileImage: faker.internet.avatar(),
    passwordHash: '11111111'
  },
  {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    username: faker.internet.userName(),
    profileImage: faker.internet.avatar(),
    passwordHash: '11111111'
  },
];

const events = [
  {
    name: 'Markus Schulz & Cosmic Gate',
    description: 'Markus Schulz & Cosmic Gate with support from Jason Ross and Mark Oliver',
    dateTime: 1510777246749,
    venue: 'REBEL - 11 Polson St, Toronto, ON, Canada',
    posterImage: 'https://i.ticketweb.com/i/00/07/29/33/19_Original.jpg?v=4',
    artists: ['Markus Schulz', 'Cosmic Gate'],
    mediaLinks: [
      'https://soundcloud.com/markusschulz/gdjbamsterdam2017',
      'https://soundcloud.com/cosmicgateofficial/wym-radio-episode-189'
    ]
  },
  {
    name: 'REVOLUTION SATURDAYS: A-TRAK / Sharam',
    description: `A-TRAK
      With support from Jed Harper
      10PM
      19+`,
    dateTime: new Date('November 25, 2017 22:00'),
    venue: 'REBEL - 11 Polson St, Toronto, ON, Canada',
    posterImage: 'https://i.ticketweb.com/i/00/07/39/10/89_Original.jpg?v=5',
    artists: ['Sharam', 'A-Trak'],
    mediaLinks: [
      'https://soundcloud.com/sharam/yoshitoshi-radio-016-live-from-sound-la-khainz-guest-mix',
      'https://soundcloud.com/a-trak/a-trak-b2b-diplo-edc-orlando-2017'
    ]
  },
  {
    name: 'NICKY ROMERO',
    description: 'Nicky Romero @ Uniun Night Club',
    dateTime: new Date('December 08, 2017 22:00'),
    venue: 'Uniun Nightclub - 473 Adelaide St W, Toronto, ON, Canada',
    posterImage: 'https://i.ticketweb.com/i/00/07/44/47/89_Original.jpg?v=3',
    artists: ['Nicky Romero'],
    mediaLinks: [
      'https://soundcloud.com/protocolrecordings/swacq-love-nicky-romero-edit'
    ]
  },
  {
    name: 'SOLARIS WINTER MUSIC FESTIVAL',
    description: '2 days, 2 stages, 14 DJs',
    dateTime: new Date('December 26, 2017 22:00'),
    venue: 'REBEL - 11 Polson St, Toronto, ON, Canada',
    posterImage: 'https://i.ticketweb.com/i/00/07/44/28/19_Original.jpg?v=3',
    artists: ['Zeds Dead', 'Oliver Heldens', 'NGHTMRE', 'Steve Aoki', 'Slushii'],
    mediaLinks: [
      'https://soundcloud.com/deadbeatsrecords/deadbeats-radio-021-deadbeats-vol-2-mix',
      'https://youtu.be/PYd3d3hm60Y',
      'https://www.mixcloud.com/wnmfestofficial/nghtmre-slander-gud-vibrations-radio-040/'
    ]
  },
  {
    name: 'ERIC PRYDZ',
    description: 'Eric Prydz returns to Rebel!',
    dateTime: new Date('December 29, 2017 22:00'),
    venue: 'REBEL - 11 Polson St, Toronto, ON, Canada',
    posterImage: 'https://i.ticketweb.com/i/00/07/32/57/59_Original.jpg?v=4',
    artists: ['Eric Prydz'],
    mediaLinks: [
      'https://soundcloud.com/eric-prydz/eric-prydz-presents-epic-radio-on-beats-1-ep21'
    ]
  },
];

User.collection.drop( (err, res) => {
  if (err){
    console.log('unable to drop users collection:', err);
  } else {
    User.create(users)
      .then( () => {
        console.log('users created successfully!');
        Event.collection.drop( (err, res) => {
          if (err){
            console.log('unable to drop events collection', err);
          } else {
            Event.create(events)
              .then( () => {
                console.log('events created successfully!');
                console.log('Completed! Closing connection...');
                mongoose.connection.close();
              })
              .catch( (err) => {
                console.log('error creating events:', err);
                return(err);
              });
          }
        });
      })
      .catch( (err) => {
        console.log('error creating users:', err);
        return(err);
      });
  }
});


// console.log('Completed! Closing connection...');
// mongoose.connection.close();
