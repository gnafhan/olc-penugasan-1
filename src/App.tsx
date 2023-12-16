import "@mantine/core/styles.css";
import { Flex, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import NavbarSearch  from './components/sidebar';
import { ArticleCard } from "./components/Card";

export default function App() {
  return <MantineProvider theme={theme}>
    <NavbarSearch>
      <Flex pt={10} gap={20}>
    <ArticleCard title="Bioskop" description="Nonton bioskop lorem" image="/tiket.png" name="Anic bawasedan" avatar="/avatar.jpg"  />
    <ArticleCard title="Sepeda" description="Sepeda skuy lorem" image="/sepeda.png" name="Genjer paradewa" avatar="/avatar2.png" />
      </Flex>
    </NavbarSearch>
  </MantineProvider>;
}
