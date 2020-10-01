const React = require('react');
const { ConfigContext, defaultConfig } = require('./src/config/config');

exports.wrapRootElement = ({ element }) => (
  <ConfigContext.Provider value={defaultConfig}>
    {element}
  </ConfigContext.Provider>
);
