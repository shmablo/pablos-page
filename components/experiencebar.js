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
                    date="Jun 2025 - Present"
                    iconStyle={{
                        background: '#fff',
                        color: '#fff',
                        width: '48px',
                        height: '48px'
                    }}
                    icon={
                    <Box>
                        <Image
                            src={'images/disney-Logo.jpeg'}
                            padding="1px"
                            paddingLeft="1px"
                            background="white"
                            borderRadius="50%"
                            alt='disneyLogo'
                        />
                    </Box>
                 }
                >
                <Heading as="h3" size="md" mb={2}>
                  The Walt Disney Company
                </Heading>
                <Heading as={'h4'} size={'sm'} mb={2}>
                  Software Engineering Intern
                </Heading>
                <Text>
                    Developing full-stack applications for Disney’s Telecommunications team and call agents at Disney Central, and eating a lot of mickey bars.
                </Text>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    contentStyle={{ background: '#2584b8', color: '#fff' }}
                    date="Apr 2025 - May 2025"
                    iconStyle={{
                        background: '#fff',
                        color: '#fff',
                        width: '48px',
                        height: '48px'
                    }}
                    icon={
                    <Box>
                        <Image
                            src={'images/walky.jpg'}
                            padding="1px"
                            paddingLeft="1px"
                            background="white"
                            borderRadius="50%"
                            alt='walkyLogo'
                        />
                    </Box>
                 }
                >
                <Heading as="h3" size="md" mb={2}>
                  Walky
                </Heading>
                <Heading as={'h4'} size={'sm'} mb={2}>
                  Software Engineering Intern
                </Heading>
                <Text>
                    Created API endpoints with TypeScript to gather data on university students across South Florida.
                    Developed interactive dashboards for each school to visualize and display their data, enabling better insights and decision-making.
                </Text>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    contentStyle={{ background: '#2584b8', color: '#fff' }}
                    date="Feb 2024 - Apr 2025"
                    iconStyle={{
                        background: '#fff',
                        color: '#fff',
                        width: '48px',
                        height: '48px'
                    }}
                    icon={
                    <Box>
                        <Image
                            src={'images/dcapriLogo.png'}
                            padding="1px"
                            paddingLeft="1px"
                            background="white"
                            borderRadius="50%"
                            alt='dcapriLogo'
                        />
                    </Box>
                 }
                >
                <Heading as="h3" size="md" mb={2}>
                  D'capri Furniture
                </Heading>
                <Heading as={'h4'} size={'sm'} mb={2}>
                  Software Developer
                </Heading>
                <Text>Launched a full-stack e-commerce website using Spring Boot, React, and PostgreSQL for customers to log in and purchase items. 
                    Integrated AWS Cognito for authentication and Stripe for payment processing. I also developed an admin dashboard that tracks monthly sales and highlights trends.
                </Text>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    contentStyle={{ background: '#2584b8', color: '#fff' }}
                    date="Sep 2023 - Nov 2023"
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
                            alt='initLogo'
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
                handling over 4,000 lines of code, ensuring version control and seamless collaboration.
                </Text>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </Box>
    )
}

export default ExperienceBar;