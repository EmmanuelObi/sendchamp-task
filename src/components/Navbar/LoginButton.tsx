import { Button } from '@chakra-ui/react';

function MyButton(props: any) {
  return (
    <>
      <Button
        {...props}
        bg="#2887f0"
        fontWeight="medium"
        textTransform="none"
        rounded="md"
        color="white"
        fontSize="sm"
        _hover={{ bg: '#197EEF' }}
      >
        {props.text ?? 'Get Started'}
      </Button>
    </>
  );
}
export default MyButton;
