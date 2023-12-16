import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Badge,
  Group,
  Center,
  Avatar,
  useMantineTheme,
  rem,
} from '@mantine/core';
import classes from './ArticleCard.module.css';

type ArticleCardProps = {
    title: string;
    description: string;
    name: string;
    image: string;
    avatar: string;
  };



export function ArticleCard(props: ArticleCardProps) {
    const { title, description, name, image, avatar } = props;
  const linkProps = { href: 'https://mantine.dev', target: '_blank', rel: 'noopener noreferrer' };
  const theme = useMantineTheme();

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section>
        <a {...linkProps}>
          <Image src={image} height={180} />
        </a>
      </Card.Section>

      <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
        outstanding
      </Badge>

      <Text className={classes.title} fw={500} component="a" {...linkProps}>
        {title}
      </Text>

      <Text fz="sm" c="dimmed" lineClamp={4}>
        {description}
      </Text>

      <Group justify="space-between" className={classes.footer}>
        <Center>
          <Avatar
            src={avatar}
            size={24}
            radius="xl"
            mr="xs"
          />
          <Text fz="sm" inline>
            {name}
          </Text>
        </Center>

        <Group gap={8} mr={0}>
          <ActionIcon className={classes.action}>
            <IconHeart style={{ width: rem(16), height: rem(16) }} color={theme.colors.red[6]} />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconBookmark
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.yellow[7]}
            />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconShare style={{ width: rem(16), height: rem(16) }} color={theme.colors.blue[6]} />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
}