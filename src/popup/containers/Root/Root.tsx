import { HStack } from '@chakra-ui/react';
import { useBackgroundColor } from '@kibisis/react';
import { type FC } from 'react';

// constants
import { DEFAULT_POPUP_HEIGHT, DEFAULT_POPUP_WIDTH } from '@/popup/constants';

const Root: FC = () => {
  // hooks
  const backgroundColor = useBackgroundColor();

  return (
    <HStack background={backgroundColor} h={DEFAULT_POPUP_HEIGHT} w={DEFAULT_POPUP_WIDTH}>
      Hello humie
    </HStack>
  );
};

export default Root;
