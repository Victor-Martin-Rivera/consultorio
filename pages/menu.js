import { AppShell, Navbar, Header, Anchor, Group } from '@mantine/core';
import Link from 'next/link';

export const Menu = ({children}) => {
  return (
    
        <AppShell 
      padding="md"
      navbar={<Navbar  width={{ base: 250 }} height={650} p="xs">
      <Group position='center'>
        <Link href="./inicio" passHref>
        <Anchor >Inicio</Anchor>
       
        </Link>
      </Group>

      {/* BMI = Peso/altura
      muestra rangos= low weight
                    normal weight
                    overweight
                    obesity */}

      <Group position='center'>
        <Link href="./bmi" passHref>
        <Anchor>BMI</Anchor>
        </Link>
      </Group>

      <Group position='center'>
        <Link href="/calculadora" passHref>
        <Anchor >Calculadora</Anchor>
        </Link>
      </Group>

      <Group position='center'>
        <Link href="/buscadorAlimentos" passHref>
        <Anchor >Buscador Alimentos</Anchor>
        </Link>
      </Group>
      </Navbar>}
      header={
        
      <Header height={60} p="xs">
        {/* Aqui va la cabecera */}
      </Header>
      }
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.white : theme.colors.dark[0]},
      })}
    >
      {children}
    </AppShell>
    
  )
}

export default Menu