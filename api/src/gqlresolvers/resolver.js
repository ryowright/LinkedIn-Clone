const data = {
  name: 'Ryo Wright',
  headline: 'Computer Science and Engineering Graduate of the University of California, Merced',
  numConnections: 63,
  profileViews: 21,
}

const root = {
  hello: () => {
    return 'Hello world!';
  },
  getUserData: () => {
    return data
  }
};

modeule.exports = root;