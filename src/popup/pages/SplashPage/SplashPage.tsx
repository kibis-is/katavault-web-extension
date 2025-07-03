import { VStack } from '@chakra-ui/react';
import { CircularProgressWithIcon } from '@kibisis/react';
import { type FC } from 'react';

// icons
import KbKatavaultLogo from '@/popup/icons/KbKatavaultLogo';

const SplashPage: FC = () => {
  return (
    <VStack minH="100vh" w="full">
      <VStack align="center" as="main" flex={1} justify="center" w="full">
        <CircularProgressWithIcon icon={KbKatavaultLogo} />
      </VStack>
    </VStack>
  );
};

export default SplashPage;
