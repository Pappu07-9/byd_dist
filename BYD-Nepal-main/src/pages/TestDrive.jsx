import { Flex } from "@chakra-ui/react"
import BackButton from "../components/GlobalComponent/BackButton"
import TestDriveForm from "../components/TestDrive/TestDriveForm"

const TestDrive = () => {
    return (
        <Flex className="inside-bg">
            <Flex
                w='100vw' p='40px 90px' direction={'column'} gap={'20%'} alignItems={'center'}
                width="100vw"
                height="100vh"
                justifyContent="flex-start"
            >
                <Flex w='100vw'
                >
                    <BackButton title="Cost Saving" />
                </Flex>

                <Flex w='35vw' alignItems='center' direction={'column'}
                    borderColor={'white'} borderWidth={'1px'} borderRadius={'4px'}
                    backgroundColor={"#FFFFFF47"}>
                    <TestDriveForm />
                </Flex>
                <div className="robot-container-right">
                    <div className="robot-image-right"></div>
                    <div className="robot-box">
                        <div className="text-content">
                            <div className="text-white nasso-text">NASSO</div>
                            <div className="assistant-text">Assistant.</div>
                        </div>
                        {/* <div className="assistant-box-text">Talk with our assistant</div> */}
                    </div>
                </div>
            </Flex>
        </Flex >
    )
}

export default TestDrive
