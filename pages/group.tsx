import { ReplyIcon } from '@heroicons/react/solid';
import { Button, Group, Stack, MantineTheme } from '@mantine/core';
import Link from 'next/link';
import { Layout } from '../components/Layout';

const GroupDemo = (theme: MantineTheme) => {
  const buttonStyle1 = {
    height: '50px',
  };
  const buttonStyle2 = {
    height: '100px',
  };
  const buttonStyle3 = {
    height: '150px',
  };

  return (
    <Layout title='Group'>
      <Group my='md' grow position='apart'>
        <Button color='indigo'>1</Button>
        <Button color='teal'>2</Button>
        <Button color='orange'>3</Button>
      </Group>
      <Group my='md' position='right'>
        <Stack>
          <Button color='indigo'>1</Button>
          <Button color='teal'>2</Button>
          <Button color='orange'>3</Button>
        </Stack>
      </Group>
      <Group my='md' align={'start'}>
        <Button color='indigo' style={buttonStyle1}>
          1
        </Button>
        <Button color='teal' style={buttonStyle2}>
          2
        </Button>
        <Button color='orange' style={buttonStyle3}>
          3
        </Button>
      </Group>
      <Stack>
        <Link href={'/'}>
          <ReplyIcon height={50} style={{ cursor: 'pointer' }}>
            リンク
          </ReplyIcon>
        </Link>
      </Stack>
    </Layout>
  );
};

export default GroupDemo;
