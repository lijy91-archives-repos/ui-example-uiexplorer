
import React from 'react';
import { Grid, Image } from '@blankapp/ui';
import imgParagraph from '../../resources/images/paragraph.png';

const makeGridColumns = (numColumns) => {
  const columnViews = Array.from({ length: numColumns })
    .map((v, index) => {
      const key = `${v}${index}`;
      return (
        <Grid.Column
          key={key}
          style={{ padding: 6 }}
        >
          <Image
            style={{
              minHeight: 80,
            }}
            resizeMode="contain"
            source={imgParagraph}
          />
        </Grid.Column>
      );
    });
  return columnViews;
};

export default makeGridColumns;
