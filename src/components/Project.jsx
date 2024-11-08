import { Box, Text, Flex, Heading, Link, Icon, keyframes } from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt, FaUser } from 'react-icons/fa';

const popUp = keyframes`
  0% { transform: scale(0.5); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

const Projects = () => {
  return (
    <Box boxShadow="md" bg="white" p={4} rounded="lg" w="80%" margin="auto" marginTop={10} marginBottom={6} animation={`${popUp} 1.4s ease-out`}>
      <Flex align="center" mb={4}>
        <Icon as={FaUser} boxSize={6} color="teal.500" mr={2} />
        <Heading size="lg">Projects</Heading>
      </Flex>


      <Box border="1px solid yellow" margin="0 0 20px 0" width="100%" />

      {/* Project 1 */}
      <Box mb={6}>
        <Heading as="h3" size="md" mb={2}>
          Innovators Academy
        </Heading>
        <Box border="1px solid red" margin="0 0 20px 0" width="40%" />
        <Text fontSize="lg" mb={2} color={'blueviolet'}>
          HTML5 | CSS3 | Responsive Web Design | Git
        </Text>
        <Text color='rgba(0, 0, 0, 0.8)'>
          Created Navbar and hero section, and ensured responsive design.
        </Text>
        <Flex mt={2} gap={4}>
          <Link href="https://github.com/deep-maurya/Kaveri-Debugging-005" isExternal>
            <Icon as={FaGithub} boxSize={6} />
          </Link>
          <Link href="https://innovatoracademy.netlify.app/" isExternal>
            <Icon as={FaExternalLinkAlt} boxSize={6} />
          </Link>
        </Flex>
      </Box>

      {/* Project  2*/}
      <Box>
        <Heading as="h3" size="md" mb={2}>
          Dribbble Clone Project
        </Heading>
        <Box border="1px solid red" margin="0 0 20px 0" width="40%" />
        <Text fontSize="lg" mb={2} color={'blueviolet'}>
          Javascript | HTML5 | CSS3 | JavaScript | JSON | GitHub | Responsive Web Design
        </Text>

        <Text color='rgba(0, 0, 0, 0.8)'>
          Contributed in making the layout for landing page and sections page in the landing page and added responsiveness.
        </Text>
        <Flex mt={2} gap={4}>
          <Link href="https://github.com/sneelesh182/LinkedIn-Luminaries_095" isExternal rel="noopener noreferrer" target='_blank'>
            <Icon as={FaGithub} boxSize={6} />
          </Link>
          <Link href="https://dribbling-theta.vercel.app/" isExternal target='_blank' rel="noopener noreferrer">
            <Icon as={FaExternalLinkAlt} boxSize={6} />
          </Link>
        </Flex>
      </Box>
      <Box>
        {/*Project3*/}
        <Heading as="h3" size="md" mb={2}>
        Swasth
        </Heading>
        <Box border="1px solid red" margin="0 0 20px 0" width="40%" />
        <Text fontSize="lg" mb={2} color={'blueviolet'}>
          React | Javascript | HTML5 | CSS3 | JavaScript | JSON | GitHub | Responsive Web Design
        </Text>

        <Text color='rgba(0, 0, 0, 0.8)'>
          Contributed in making the layout for landing page and sections page in the landing page and added responsiveness.
        </Text>
        <Flex mt={2} gap={4}>
          <Link href="https://github.com/Ayush243871/Eco_Data_Drivers_028" isExternal rel="noopener noreferrer" target='_blank'>
            <Icon as={FaGithub} boxSize={6} />
          </Link>
          <Link href="https://leafy-klepon-dc5a44.netlify.app/" isExternal target='_blank' rel="noopener noreferrer">
            <Icon as={FaExternalLinkAlt} boxSize={6} />
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Projects;
