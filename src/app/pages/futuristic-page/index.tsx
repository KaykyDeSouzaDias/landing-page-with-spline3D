import React from "react";
import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  useMantineTheme,
  SimpleGrid,
  Grid,
  Overlay,
} from "@mantine/core";
import { Check } from "tabler-icons-react";
import Spline from "@splinetool/react-spline";
import HeaderMenu from "../../shared/components/header";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    width: "100%",
    height: "100%",
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
        : theme.colors[theme.primaryColor][0],
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: theme.fontSizes.sm,
    },
  },
}));

export default function FuturisticPage() {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  function HeaderSection() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Container fluid>
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                A <span className={classes.highlight}>modern</span> React <br />{" "}
                components library
              </Title>
              <Text color="dimmed" mt="md">
                Build fully functional accessible web applications faster than
                ever – Mantine includes more than 120 customizable components
                and hooks to cover you in any situation
              </Text>

              <List
                mt={30}
                spacing="sm"
                size="sm"
                icon={
                  <ThemeIcon size={20} radius="xl">
                    <Check size={12} />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <b>TypeScript based</b> – build type safe applications, all
                  components and hooks export types
                </List.Item>
                <List.Item>
                  <b>Free and open source</b> – all packages have MIT license,
                  you can use Mantine in any project
                </List.Item>
                <List.Item>
                  <b>No annoying focus ring</b> – focus ring will appear only
                  when user navigates with keyboard
                </List.Item>
              </List>

              <Group mt={30}>
                <Button radius="xl" size="md" className={classes.control}>
                  Get started
                </Button>
                <Button
                  variant="default"
                  radius="xl"
                  size="md"
                  className={classes.control}
                >
                  Source code
                </Button>
              </Group>
            </div>
            <Spline
              scene="https://prod.spline.design/byTsJI7PioSkQQIS/scene.splinecode"
              className={classes.image}
            />
          </div>
        </Container>
      </div>
    );
  }

  function BodySection() {
    return (
      <Container size={700}>
        <Text>oi</Text>

        <Title className={classes.title} order={2}>
          PharmLand is <span>not</span> just for pharmacists
        </Title>

        <Container size={660} p={0}>
          <Text color="dimmed" className={classes.description}>
            sem pressao
          </Text>
        </Container>

        <SimpleGrid
          cols={2}
          spacing={50}
          breakpoints={[{ maxWidth: 550, cols: 1, spacing: 40 }]}
          style={{ marginTop: 30 }}
        >
          os manos
        </SimpleGrid>
      </Container>
    );
  }

  return (
    <>
      <HeaderMenu />
      {HeaderSection()}
      {BodySection()}
    </>
  );
}
