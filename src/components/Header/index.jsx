import { Container } from './styles';
<<<<<<< HEAD
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
=======

export function Header() {
>>>>>>> ac8d9ab4bdd36b8e7342b0c951ec909218236444

  return (
    <Container>
      <header>
        <h3>devfinder</h3>
<<<<<<< HEAD
        <button onClick={themeToggler}> {theme === "dark" ? <MdLightMode size="20px" /> : <MdDarkMode size="20px" />} </button>
     </header>
    </Container>
  );
}
=======
        <button>Light/Dark</button>
     </header>
    </Container>
  );
}
>>>>>>> ac8d9ab4bdd36b8e7342b0c951ec909218236444
