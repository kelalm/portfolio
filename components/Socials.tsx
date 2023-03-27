import { Group, Button, rem } from "@mantine/core";
import { IconBrandGithubFilled, IconMail } from "@tabler/icons-react";

export default function Socials() {
  return (
    <Group position="center">
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/kelalm"
        leftIcon={<IconBrandGithubFilled />}
        styles={(theme) => ({
          root: {
            border: 0,
            height: rem(42),
            paddingLeft: rem(20),
            paddingRight: rem(10),
          },
        })}
      ></Button>
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:kelvinalmonte@live.com"
        leftIcon={<IconMail />}
        styles={(theme) => ({
          root: {
            border: 0,
            height: rem(42),
            paddingLeft: rem(20),
            paddingRight: rem(10),
          },
        })}
      ></Button>
    </Group>
  );
}
