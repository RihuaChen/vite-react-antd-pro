const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.prettier,

  importOrder: ['^@(.*)$', '^[./]'],

  importOrderSeparation: true,
  // your customized config
};
