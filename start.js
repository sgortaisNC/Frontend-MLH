// Point d'entrée Passenger (Plesk) : lance Next en mode production.
// Sans argument, le binaire `next` démarre `next dev`.
process.env.NODE_ENV = 'production';
process.argv = [process.argv[0], require.resolve('next/dist/bin/next'), 'start'];
require('next/dist/bin/next');
