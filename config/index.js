const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'mywebsite.com'


export const localbackend = 'http://erick:1337';

export const productionbackend = 'https://theogbackend.herokuapp.com';

export const backend = localbackend;

