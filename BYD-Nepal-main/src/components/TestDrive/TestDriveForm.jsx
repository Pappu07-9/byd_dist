import { Box, Button, Flex, FormLabel, Input, Stack, Text, useRadio, useRadioGroup } from "@chakra-ui/react"
import { Cars } from "../../constants/Cars"
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
function RadioCard(props) {
    const { getInputProps, getRadioProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getRadioProps()

    return (
        <Box as='label'>
            <input {...input} />
            <Box
                onClick={props.onClick}
                {...checkbox}
                cursor='pointer'
                borderWidth='1px'
                borderRadius='md'
                boxShadow='md'
                _checked={{
                    bg: '#ffffff63',
                    color: 'white',
                }}
                _focus={{
                    boxShadow: 'outline',
                }}
                px={5}
                py={3}
            >
                {props.children}
            </Box>
        </Box>
    )
}
const TestDriveForm = () => {
    const validationSchema = Yup.object().shape({
        model: Yup.string().required("Model is required"),
        date: Yup.string().required("Date is required"),
        phone: Yup.string().matches(/^\d{10}$/, "Phone number must be 10 digits").required("Phone is required"),
        time: Yup.string().matches(/^([01]\d|2[0-3]):([0-5]\d)$/, "Time must be in HH:MM format").required("Time is required"),
    });
    const formik = useFormik({
        initialValues: {
            model: "",
            date: "",
            phone: "",
            time: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                // await axios.post(process.env.REACT_APP_API_URL)
                console.log(import.meta.env.VITE_REACT_APP_API_URL);
                console.log(values);

            } catch (error) {
                console.error("Error", error);
            }

        }
    });
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'framework',
        defaultValue: 'Atto 3',
        onChange: console.log,
    })

    return (
        <Flex color={'white'} p='40px' justifyContent={'flex-start'} w='100%' direction={'column'} gap='20px'>
            <Text as='h2' fontSize={'20px'} fontWeight={'500'}>Which module would you like to test drive?</Text>
            <form onSubmit={formik.handleSubmit}>
                <Stack direction='row' spacing={4} align='center'>
                    {/* {Cars?.map((car, index) => (
                        <Button variant='outline' key={index} textColor={'white'} name='model' _hover={{
                            backgroundColor: '#ffffff47',
                        }}
                            onClick={(e) => {
                                formik.handleChange(e)
                            }}>
                            {car.name}
                        </Button>
                    ))} */}
                    {Cars.map((value, index) => {
                        const radio = getRadioProps({ value: value.name });

                        return (
                            <RadioCard
                                key={index}
                                value={value}
                                name="model"
                                checked={formik.values.model === value.name}
                                onClick={() => formik.setValues({ model: value.name })}
                                // onChange={formik.handleChange} // Handle change
                                {...radio}
                            >
                                {value.name}
                            </RadioCard>
                        )
                    })}
                </Stack>
                {formik.touched.date && formik.errors.date ? (
                    <div>{formik.errors.date}</div>
                ) : null}
                <Flex flexDirection={'column'} justifyContent={'center'} gap={'30px'} width={'100%'} paddingTop={'30px'}>

                    <Flex flexDirection={'row'} justifyContent={'center'} gap={'20px'} width={'100%'}>
                        <FormLabel htmlFor="date" paddingTop='10px' margin={'0'} width={'50%'} alignItems={'center'} fontSize={'16px'}>Date for test drive</FormLabel>
                        <Input
                            id="date"
                            name="date"
                            type="date"
                            variant="flushed"
                            onChange={formik.handleChange}
                            value={formik.values.date}
                            textColor={'white'}
                            fontSize={'12px'}
                        />
                        {formik.touched.date && formik.errors.date ? (
                            <div>{formik.errors.date}</div>
                        ) : null}

                    </Flex>
                    <Flex flexDirection={'row'} justifyContent={'center'} gap={'20px'} width={'100%'}>
                        <FormLabel htmlFor="phone" paddingTop='10px' margin={'0'} width={'50%'} alignItems={'center'} fontSize={'16px'}>Phone Number</FormLabel>
                        <Input
                            id="phone"
                            name="phone"
                            type="phone"
                            variant="flushed"
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                            textColor={'white'}
                            fontSize={'12px'}
                            placeholder="98*********"
                        />
                    </Flex>
                    <Flex flexDirection={'row'} justifyContent={'center'} gap={'20px'} width={'100%'}>
                        <FormLabel htmlFor="phone" paddingTop='10px' margin={'0'} width={'50%'} alignItems={'center'} fontSize={'16px'}>Time</FormLabel>
                        <Input
                            id="time"
                            name="time"
                            type="time"
                            variant="flushed"
                            onChange={formik.handleChange}
                            value={formik.values.time}
                            textColor={'white'}
                            fontSize={'12px'}
                            placeholder="98*********"
                        />
                    </Flex>
                    <Button width="20%" type="submit" variant="flushed" textColor={'white'} backgroundColor="black" _hover={{
                        backgroundColor: '#ffffff47',
                    }}>Submit</Button>
                </Flex>
            </form>
        </Flex >
    )
}

export default TestDriveForm
