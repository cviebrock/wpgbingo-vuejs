import type { tRoute } from '@/types';

const routes: tRoute[] = [
  {
    id: 'r1',
    cards: ['a1', 'b1', 'c1', 'd1', 'e1'],
    url: 'https://bit.ly/wpg-bingo-first-row',
    dist: 30.8,
  },
  {
    id: 'r2',
    cards: ['a2', 'b2', 'c2', 'd2', 'e2'],
    url: 'https://bit.ly/wpg-bingo-second-row',
    dist: 17.3,
  },
  {
    id: 'r3',
    cards: ['a3', 'b3', 'c3', 'd3', 'e3'],
    url: 'https://bit.ly/wpg-bingo-third-row',
    dist: 21.3,
  },
  {
    id: 'r4',
    cards: ['a4', 'b4', 'c4', 'd4', 'e4'],
    url: 'https://bit.ly/wpg-bingo-fourth-row',
    dist: 18.3,
  },
  {
    id: 'r5',
    cards: ['a5', 'b5', 'c5', 'd5', 'e5'],
    url: 'https://bit.ly/wpg-bingo-fifth-row',
    dist: 31.1,
  },
  {
    id: 'c1',
    cards: ['a1', 'a2', 'a3', 'a4', 'a5'],
    url: 'https://bit.ly/wpg-bingo-first-column',
    dist: 20.4,
  },
  {
    id: 'c2',
    cards: ['b1', 'b2', 'b3', 'b4', 'b5'],
    url: 'https://bit.ly/wpg-bingo-second-column',
    dist: 20.2,
  },
  {
    id: 'c3',
    cards: ['c1', 'c2', 'c3', 'c4', 'c5'],
    url: 'https://bit.ly/wpg-bingo-third-column',
    dist: 29.3,
  },
  {
    id: 'c4',
    cards: ['d1', 'd2', 'd3', 'd4', 'd5'],
    url: 'https://bit.ly/wpg-bingo-fourth-column',
    dist: 45.3,
  },
  {
    id: 'c5',
    cards: ['e1', 'e2', 'e3', 'e4', 'e5'],
    url: 'https://bit.ly/wpg-bingo-fifth-column-fix',
    dist: 30.5,
  },
  {
    id: 'd1',
    cards: ['a1', 'b2', 'c3', 'd4', 'e5'],
    url: 'https://bit.ly/wpg-bingo-diagonal-left',
    dist: 27.3,
  },
  {
    id: 'd2',
    cards: ['e1', 'd2', 'c3', 'b4', 'a5'],
    url: 'https://bit.ly/wpg-bingo-diagonal-right-fixed',
    dist: 26.5,
  },
  {
    id: 'n1',
    button: 'N',
    name: 'North Loop',
    cards: ['c3', 'b5', 'c5'],
    url: 'https://bit.ly/wpg-bingo-north-loop',
    dist: 25.1,
  },
  {
    id: 'n2',
    button: 'W',
    name: 'West Loop',
    cards: ['e3'],
    url: 'https://bit.ly/wpg-bingo-west-loop',
    dist: 27.1,
  },
  {
    id: 'n3',
    button: 'S',
    name: 'South Loop',
    cards: ['b1', 'c2', 'd2', 'a3', 'c3'],
    url: 'https://bit.ly/wpg-bingo-south-loop',
    dist: 32.4,
  },
  {
    id: 'n4',
    button: 'E',
    name: 'East Loop',
    cards: ['b5'],
    url: 'https://bit.ly/wpg-bingo-east-loop',
    dist: 19.1,
  },
  {
    id: 'hc',
    button: 'Hardcore',
    name: 'Hardcore',
    cards: ['*'],
    url: 'https://bit.ly/wpg-bingo-harder-hardcore-fix',
    dist: 137,
  },
];

export default routes;
