import { Container } from './styles';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
export function Header({ theme, setTheme }) {

  function themeToggler() {
    // theme === "dark" ? setTheme("light") : setTheme("dark")
    if (theme === "dark") {
      setTheme("light")
      return (
        <button>Light <MdLightMode size="20px"/></button>
        )
    } else {
      setTheme("dark")
      return (
        <button>Dark <MdDarkMode size="20px"/></button>
      )
    }
   }
   console.log(theme);

  return (
    <Container>
      <header>
        <h3>devfinder</h3>
        <button onClick={themeToggler}> {theme === "dark" ? <MdLightMode size="20px" /> : <MdDarkMode size="20px" />} </button>
     </header>
    </Container>
  );
}
