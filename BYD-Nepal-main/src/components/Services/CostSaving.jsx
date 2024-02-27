import { Box, Flex, Heading, Text, } from '@chakra-ui/react'
import React from 'react'
import BackButton from '../GlobalComponent/BackButton';
import CostSavingCalculator from './CostSaving/CostSavingCalculator';
const CostSaving = () => {
    return (
        <div className="inside-bg">
            <Flex
                w='100vw' h='100vh' p='40px 90px' direction={'column'} gap={'100px'} alignItems={'center'}
                width="100vw"
                height="100vh"
                justifyContent="center"
            >
                <Flex w='100vw' h='50px'
                >
                    <BackButton title="Cost Saving" />
                </Flex>
                <Flex w='60%' h='100%' alignItems='center' direction={'column'} >
                    <Heading as='h1' color={'white'} fontSize='28px' >Fuel Cost Savings</Heading>
                    <Text as='h3' color={'white'} fontSize='16px'>{"How much can we save using an EV vehicle? Let's do the maths."}</Text>
                    <CostSavingCalculator />
                </Flex>
            </Flex >
        </div>

    )
}

export default CostSaving
