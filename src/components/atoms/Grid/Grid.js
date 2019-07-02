import React from 'react';
import { Flex, Box } from 'rebass';

const Row = ({ ...props }) => <Flex flexWrap="wrap" {...props} />;
const Col = ({ ...props }) => <Box {...props} />;

export { Row, Col };
