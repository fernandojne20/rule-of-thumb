import { Accessor } from '../getCandidates';
import { Candidate } from '../../../../domains/voting/entities';

export const successGetCandidates: Accessor = async () => {
  const candidates: Candidate[] = CANDIDATES
  return Promise.resolve(candidates);
}

export const CANDIDATES: Candidate[] = [
  {
    id: 1,
    name: 'Kanye West',
    message: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    section: 'Entertainment',
    published: '1 month ago',
    upVotes: 2,
    downVotes: 4,
    image: 'Kanye.png'
  },
  {
    id: 2,
    name: 'Mark Zuckerberg',
    message: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    section: 'Business',
    published: '1 month ago',
    upVotes: 10,
    downVotes: 4,
    image: 'Mark.png'
  },
  {
    id: 3,
    name: 'Cristina Fernández de Kirchner',
    message: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    section: 'Politics',
    published: '1 month ago',
    upVotes: 40,
    downVotes: 100,
    image: 'Cristina.png'
  },
  {
    id: 4,
    name: 'Malala Yousafzai',
    message: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    section: 'Entertainment',
    published: '1 month ago',
    upVotes: 1000,
    downVotes: 50,
    image: 'Malala.png'
  }
];