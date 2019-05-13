import React from 'react';
import styled from 'styled-components';
import {AutoSizer, List} from 'react-virtualized';

const Box = styled.div`
  width: 300px;
  height: 500px;
`;


const LongTable = (props) => {
  const data = new Array(100000).fill({}).map((item, i) => ({number: i, text: `product ${i}`}));

  const rowRenderer = ({index, isScrolling, isVisible, key, parent, style}) => (
    <div key={key} style={ {...style, display: 'flex'} }>
      <div style={{flex: 1}}>{data[index].number}</div>
      <div style={{flex: 1}}>{data[index].text}</div>
    </div>
  );

  console.log(data.length);
  return (
    <Box>
      <AutoSizer>
        {({width, height}) => (
          <List
            ref='List'
            width={width}
            height={height}
            rowCount={data.length}
            rowHeight={30}
            rowRenderer={rowRenderer}
          />
        )}
      </AutoSizer>
    </Box>
  );
};

export default LongTable;
