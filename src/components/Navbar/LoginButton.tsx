import { Button } from '@chakra-ui/react';

function MyButton({ text }: { text?: string }) {
  return (
    <>
      <Button
        bg="#2887f0"
        fontWeight="medium"
        textTransform="none"
        rounded="md"
        color="white"
        fontSize="sm"
        _hover={{ bg: '#197EEF' }}
      >
        {text ?? 'Get Started'}
      </Button>
    </>
  );
}
export default MyButton;
