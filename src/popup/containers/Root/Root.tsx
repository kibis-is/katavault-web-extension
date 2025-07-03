import { VStack } from '@chakra-ui/react';
import { useBackgroundColor } from '@kibisis/react';
import { type FC } from 'react';
import { Outlet } from 'react-router-dom';

// constants
import { DEFAULT_POPUP_HEIGHT, DEFAULT_POPUP_WIDTH } from '@/popup/constants';

const Root: FC = () => {
  // hooks
  const backgroundColor = useBackgroundColor();

  return (
    <VStack background={backgroundColor} h={DEFAULT_POPUP_HEIGHT} w={DEFAULT_POPUP_WIDTH}>
      <Outlet />
    </VStack>
  );
};

export default Root;
