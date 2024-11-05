import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import React from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';

const ExperienceBar = () => {
    return (
        <Box>
            <VerticalTimeline
                lineColor="#2584b8"
                layout={'1-column-left'}
                animate={true}
            >
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    contentStyle={{ background: '#2584b8', color: '#fff' }}
                    date="May 2024 - August 2024"
                    iconStyle={{
                        background: '#fff',
                        color: '#fff',
                        width: '48px',
                        height: '48px'
                    }}
                    icon={
                    <Box>
                        <Image
                            src={'images/init.png'}
                            padding="1px"
                            paddingLeft="1px"
                            background="white"
                            borderRadius="50%"
                        />
                    </Box>
                 }
                >
                <Heading as="h3" size="md" mb={2}>
                  Init
                </Heading>
                <Heading as={'h4'} size={'sm'} mb={2}>
                  Init Build Co-Lead
                </Heading>
                <Text>Led a team of over 10 members, guiding them through the comprehensive process of designing,
                creating, and deploying a product referral site. Orchestrated the management and organization of a Git repository, 
                handling over 4,000 lines of code, ensuring version control and seamless collaboration.</Text>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </Box>
    )
}

export default ExperienceBar;