import React from 'react';
import GlobalStyle from '../GlobalStyle';
import Text from 'captalys-core/public/dist/Elements/Text';
import Flex from 'captalys-core/public/dist/Groups/Flex';

export default () => (
    <>
        <GlobalStyle/>
        <Flex direction="row" justifyContent="center" alignItems="center" margin="40px 0">
            <Text component="H1Style">JOVIAN está aqui!</Text>
        </Flex>
    </>
);
