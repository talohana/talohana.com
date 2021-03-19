require('tailwindcss/dist/tailwind.min.css');
const React = require('react');
const { RootWrapper } = require('./src/components/common/root-wrapper');

exports.wrapPageElement = ({ element }) => <RootWrapper>{element}</RootWrapper>;
