export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) { // ButtonsContainer = 'menu' <--- Setting default value to menu
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
