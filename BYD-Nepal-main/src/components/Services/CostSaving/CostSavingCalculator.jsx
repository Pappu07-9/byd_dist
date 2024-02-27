import { Flex, Select, Text, Tbody, TableContainer, Table, Tr, Td, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const CostSavingCalculator = () => {
    const bydCard = [
        {
            title: 'BYD Atto 3',
            Efficiency: 7
        },
        {
            title: "Byd Dolphin",
            Efficiency: 6,
        },
        {
            title: "Byd Seal",
            Efficiency: 8,
        }
    ]
    const [efficiency, setefficiency] = useState(10);
    const [evMileagecalculation, setevMileagecalculation] = useState({
        mileage: 0,
        fuelCost: 0,
        distance: 0,
        totalFuelCost: 0
    });
    const [fuelMileagecalculation, setfuelMileagecalculation] = useState({
        mileage: 0,
        fuelCost: 0,
        distance: 0,
        totalFuelCost: 0
    });
    const [distanceTravel, setdistanceTravel] = useState(0);
    const [totalEvFuelCost, setEVtotalFuelCost] = useState(0);
    const [totalFuelCost, settotalFuelCost] = useState(0);
    useEffect(() => {
        setEVtotalFuelCost((distanceTravel / efficiency) * evMileagecalculation.fuelCost);
        settotalFuelCost((distanceTravel / fuelMileagecalculation.mileage) * fuelMileagecalculation.fuelCost);

    }, [evMileagecalculation, fuelMileagecalculation, distanceTravel, totalFuelCost, efficiency])

    // settotalFuelCost((distanceTravel / efficiency) * evMileagecalculation.fuelCost);
    console.log({ evMileagecalculation });
    console.log({ fuelMileagecalculation });
    console.log({ distanceTravel });
    return (
        <Flex flexDirection={'column'} gap='30px' width={'100%'}>
            <Flex flexDirection={'row'} w={'100%'}
                marginTop={'50px'}
                alignItems={'center'}
                direction={'row'}
                flex='1 1 '
            //  borderColor={'white'} borderWidth={'2px'}
            >
                <Flex flexGrow={4} />
                {/* model selection parent */}
                <Flex w='100%' justifyContent={'flex-end'} gap='30px' >
                    <Flex
                        w='33%'
                        borderBottomColor={'white'} borderBottomWidth={'2px'} justifyContent={'center'} paddingBottom={'10px'} alignItems={"center"}>
                        <Select
                            w='50%' variant='unstyled'
                            ringColor={'white'}
                            textColor='green.300'
                            colorScheme='blackAlpha'
                            iconColor='white'
                            borderRadius={'20px'}
                            paddding={'10px'}
                            onChange={(e) => { console.log(e.target.value); setefficiency(e.target.value); }}
                            fontWeight={'800'}
                        >
                            {bydCard.map((item, index) => (
                                <option key={index} value={item.Efficiency} style={{ backgroundColor: '#000000' }} color='white'>{item.title.toUpperCase()}</option>
                            ))}
                            {/* < option value='option1' style={{ backgroundColor: '#000000' }} >ATTO 3</>
                            <option value='option1' style={{ backgroundColor: '#000000' }} >ATTO 3</option> */}
                        </Select>
                    </Flex>
                    <Flex w='33%' borderBottomColor={'white'} borderBottomWidth={'2px'} justifyContent={'center'}>
                        <Text color={'white'} fontSize={'16px'} fontWeight={'800'}>ICE
                            <Text as='span' color={'red.600'} px={'3px'}>
                                VECHICLE
                            </Text>
                            (FUEL)</Text>
                    </Flex>
                </Flex>
            </Flex >
            {/* <Flex w='100%' borderBottomColor={'white'} borderBottomWidth={'2px'} justifyContent={'center'}>
                <Text color={'white'} fontSize={'16px'}>ICE (FUEL)</Text>
            </Flex> */}
            <TableContainer>
                <Table variant='simple' borderColor={'white'} textColor={'white'} size='lg' >
                    <Tbody >
                        <Tr borderBottomWidth={'2px'} >
                            <Td>Mileage</Td>
                            <Td>{efficiency} km/kWh</Td>
                            <Td ><Input variant={'flushed'} width={'30px'} height={'18px'} mx={'5px'} onChange={(data) => {
                                setfuelMileagecalculation((old) => ({ ...old, mileage: data.target.value }))
                            }} />km/liter</Td>
                        </Tr>
                        <Tr borderBottomWidth={'2px'} >
                            <Td>Fuel Cost</Td>
                            <Td>NPR  <Input variant={'flushed'} width={'30px'} height={'18px'} mx={'5px'}
                                onChange={(data) => {
                                    console.log(data.target.value);
                                    setevMileagecalculation((old) => ({ ...old, fuelCost: data.target.value }))
                                }} /> per unit</Td>
                            <Td>NPR <Input variant={'flushed'} width={'30px'} height={'18px'} mx={'5px'}
                                onChange={(data) => {
                                    console.log(data.target.value);
                                    setfuelMileagecalculation((old) => ({ ...old, fuelCost: data.target.value }))
                                }} />per liter</Td>
                        </Tr>
                        <Tr borderBottomWidth={'2px'} >
                            <Td>Distance Traveled</Td>
                            <Td><Input variant={'flushed'} width={'30px'} height={'18px'} mx={'5px'} onChange={(data) => {
                                setdistanceTravel(data.target.value)
                            }} />km/day</Td>
                        </Tr>
                        <Tr borderBottomWidth={'2px'} >
                            <Td>Total Fuel Cost </Td>
                            <Td>
                                {console.log((distanceTravel / efficiency) * evMileagecalculation.fuelCost)}
                                {totalEvFuelCost.toFixed(2)} NPR /day<br />
                                NPR {(totalEvFuelCost * 30).toFixed(2)} /months<br />
                                NPR
                                <Text as='span' color={'green.300'} px={'3px'} fontWeight={'800'}>
                                    {(totalEvFuelCost * 365).toFixed(2)}
                                </Text>
                                /year<br />
                            </Td>
                            <Td>
                                NPR {totalFuelCost.toFixed(2)} /days<br />
                                NPR {(totalFuelCost * 30).toFixed(2)} /months<br />
                                NPR
                                <Text as='span' color={'red.500'} px={'3px'} fontWeight={'800'}>
                                    {totalFuelCost.toFixed(2) * 365}
                                </Text> /year<br />
                            </Td>
                        </Tr>

                    </Tbody>
                </Table>
            </TableContainer>
        </Flex >

    )
}

export default CostSavingCalculator
