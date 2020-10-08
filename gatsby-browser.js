/* eslint-disable @typescript-eslint/no-var-requires */

const React = require('react');
const { Layout } = require('./src/components/common/Layout');

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
