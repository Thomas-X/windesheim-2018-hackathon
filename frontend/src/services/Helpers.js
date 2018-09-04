export const isServer = () => typeof window === 'undefined';

export const deepDiff = (a, b) => JSON.stringify(a) !== JSON.stringify(b);