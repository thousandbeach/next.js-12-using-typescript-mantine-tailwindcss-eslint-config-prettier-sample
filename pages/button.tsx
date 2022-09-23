import { ReplyIcon } from '@heroicons/react/solid';
import { Button, createStyles, Group, MantineTheme } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { IconAlertTriangle, IconBrandGithub } from '@tabler/icons';
import Link from 'next/link';
import { Layout } from '../components/Layout';

const ButtonDemo = () => {
  const { height, width } = useViewportSize();

  const buttonStyle = {
    color: 'green',
    backgroundColor: 'black',
    // Use pseudo-classes just like you would in Sass
    '&:hover': {
      color: 'black',
    },
  };

  const useStyle = createStyles((theme: MantineTheme) => ({
    root: {
      backgroundColor: '#00acee',
      border: 0,
      height: 42,
      paddingLeft: 20,
      paddingRight: 20,

      '&:hover': {
        backgroundColor: theme.fn.darken('#00acee', 0.05),
      },
    },

    leftIcon: {
      marginRight: 15,
    },
  }));

  return (
    <Layout title='button'>
      <Group
        align='center'
        position='center'
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          height: height,
          width: width,
        })}
      >
        <Button
          style={buttonStyle}
          radius='lg'
          uppercase
          variant='gradient'
          //gradient={{ from: 'red', to: 'cyan' }}
          leftIcon={<IconAlertTriangle />}
          rightIcon={<IconBrandGithub />}
          classNames={{ leftIcon: 'mx(20)' }}
        >
          Press
        </Button>
        <Button
          mt='md'
          px={20}
          style={buttonStyle}
          radius='lg'
          uppercase
          variant='gradient'
          gradient={{ from: 'green', to: 'cyan' }}
          leftIcon={<IconAlertTriangle />}
          rightIcon={<IconBrandGithub />}
          classNames={{ leftIcon: 'mx(20)' }}
        >
          Press
        </Button>
        <Link href='/'>
          <ReplyIcon height={50} style={{ cursor: 'pointer' }}>
            リンク
          </ReplyIcon>
        </Link>
      </Group>
      <Group
        align='center'
        position='center'
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          height: 100,
        })}
      >
        <Button
          styles={(theme) => ({
            root: {
              color: 'black',
              backgroundColor: '#00acee',
              border: 0,
              height: 42,
              paddingLeft: 20,
              paddingRight: 20,

              '&:hover': {
                backgroundColor: theme.fn.darken('#00acee', 0.05),
              },
            },

            leftIcon: {
              marginRight: 15,
            },
          })}
          radius='lg'
          uppercase
          //variant='gradient'
          //gradient={{ from: 'indigo', to: 'cyan' }}
          leftIcon={<IconBrandGithub />}
        >
          Press
        </Button>
      </Group>
    </Layout>
  );
};

export default ButtonDemo;
