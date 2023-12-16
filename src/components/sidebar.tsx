import {
  UnstyledButton,
  Text,
  Group,
  ActionIcon,
  Tooltip,
  rem,
  Box,
  Container
} from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import classes from "./NavbarSearch.module.css";
import { FC, ReactNode } from "react";
import { UserButton } from "./UserButton";

const links = [
  { emoji: "🎓", label: "College" },
  { emoji: "💻", label: "Work" },
  { emoji: "🏠", label: "Home" }
];

const collections = [
  { emoji: "👍", label: "Calculus" },
  { emoji: "🚚", label: "Physics" },
  { emoji: "💸", label: "Math" },
  { emoji: "💰", label: "Chem" },
];

interface SidebarProps {
  children: ReactNode;
}

const NavbarSearch: FC<SidebarProps> = ({ children }) => {
  const mainLinks = links.map((link) => (
    <UnstyledButton key={link.label} className={classes.mainLink}>
      <div className={classes.mainLinkInner}>
        <span>
          {link.emoji} {link.label}
        </span>
      </div>
    </UnstyledButton>
  ));

  const collectionLinks = collections.map((link, i) => (
    <UnstyledButton key={link.label} className={classes.mainLink}>
      <div
        className={classes.mainLinkInner}
        style={{ justifyContent: "space-between" }}
      >
        <span>{link.label}</span>
        {i === 99 && (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19M6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19Z"
                fill="#888888"
              />
            </svg>
          </>
        )}
      </div>
    </UnstyledButton>
  ));

  return (
    <Box style={{ display: "flex" }}>
      <nav className={classes.navbar}>
        <div className={classes.section}>
          <UserButton />
        </div>

        <div className={classes.section}>
          <div className={classes.mainLinks}>{mainLinks}</div>
        </div>

        <div className={classes.section}>
          <Group className={classes.collectionsHeader} justify="space-between">
            <Text size="xs" fw={500} c="dimmed">
              Collections
            </Text>
            <Tooltip label="Create collection" withArrow position="right">
              <ActionIcon variant="default" size={18}>
                <IconPlus
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Tooltip>
          </Group>
          <div className={classes.collections}>{collectionLinks}</div>
        </div>
      </nav>
      <Container style={{ justifyContent: "center" }}>
        {children}
      </Container>
    </Box>
  );
};

export default NavbarSearch;
