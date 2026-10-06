'use client'
import React from 'react';
import JsonView from '@uiw/react-json-view';
import { githubDarkTheme } from '@uiw/react-json-view/githubDark';

const object = {
  string: 'Lorem ipsum dolor sit amet',
  integer: 42,
  float: 114.514,
  boolean: true,
  null: null,
  nan: NaN,
  url: new URL('https://example.com'),
}

const style = { display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' };

export default function Demo({jsonval, makest}) {
  return (
    <>
      <JsonView value={jsonval} style={{...githubDarkTheme, ...makest}} collapsed={3} indentWidth={20} displayDataTypes={false} />
    </>
  );
}