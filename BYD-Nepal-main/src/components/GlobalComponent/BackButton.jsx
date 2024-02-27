import { Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { MdArrowBack } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const BackButton = ({ title }) => {
    return (
        <NavLink to="/services" style={{ textDecoration: 'none' }}>
            <Flex className="back-box" justifyContent="center">
                <Icon
                    as={MdArrowBack}
                    boxSize={8}
                    color="white"
                    backgroundColor={' rgba(255, 255, 255, 0.28)'}
                    p='5px'
                    borderRadius={'4px'}
                // stroke="currentColor"
                // strokeWidth="2"
                // viewBox="0 0 40 40"
                // fill="none"
                />
                <Text fontSize="md" fontWeight="medium" color="white" margin={0}>
                    {title}
                </Text>
            </Flex>
        </NavLink>
    )
}

export default BackButton
