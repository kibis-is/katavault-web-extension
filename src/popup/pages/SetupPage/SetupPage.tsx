import { HStack, Spacer, VStack } from '@chakra-ui/react';
import {
  Button,
  DEFAULT_GAP,
  Heading,
  IconButton,
  iconSize,
  Text,
  usePrimaryColor,
  useTranslate,
} from '@kibisis/react';
import { type FC, useCallback } from 'react';
import { IoArrowForwardOutline, IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

// constants
import { BUTTON_WIDTH } from '@/popup/constants';

// components
import AppIcon from '@/popup/components/AppIcon';

// selectors
import { useColorMode, useToggleColorMode } from '@/popup/selectors';

const SetupPage: FC = () => {
  // selectors
  const colorMode = useColorMode();
  const toggleColorMode = useToggleColorMode();
  // hooks
  const primaryColor = usePrimaryColor();
  const translate = useTranslate();
  // callbacks
  const handleColorModeToggleClick = useCallback(() => toggleColorMode(), [toggleColorMode]);
  const handleGetStartedClick = useCallback(() => {
    console.log('get started');
  }, []);

  return (
    <VStack flex={1} gap={DEFAULT_GAP / 2} pb={DEFAULT_GAP} px={DEFAULT_GAP} w="full">
      <HStack py={DEFAULT_GAP / 2} w="full">
        <Spacer />

        <IconButton icon={colorMode === 'dark' ? IoMoonOutline : IoSunnyOutline} onClick={handleColorModeToggleClick} />
      </HStack>

      {/*content*/}
      <VStack flex={1} gap={DEFAULT_GAP / 3} justify="center" pb={DEFAULT_GAP / 2} w="full">
        <AppIcon color={primaryColor} boxSize={iconSize('xl')} />

        <VStack gap={DEFAULT_GAP / 3} justify="center" w="full">
          <Heading>{translate('titles.application')}</Heading>

          <Text fontSize="xs">{`v${__VERSION__}`}</Text>
        </VStack>
      </VStack>

      {/*cta*/}
      <Button onClick={handleGetStartedClick} minW={BUTTON_WIDTH}>
        {translate('buttons.getStarted')}
        <IoArrowForwardOutline />
      </Button>
    </VStack>
  );
};

SetupPage.displayName = 'SetupPage';

export default SetupPage;
