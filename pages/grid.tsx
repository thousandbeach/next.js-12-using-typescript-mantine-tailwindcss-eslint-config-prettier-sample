import { ReplyIcon } from '@heroicons/react/solid';
import { Grid, Stack } from '@mantine/core';
import { fontStyles } from '@mantine/styles/lib/theme/functions/fns/font-styles/font-styles';
import Link from 'next/link';
import { Layout } from '../components/Layout';
import Button from './button';

const GridDemo = () => {
  const gridStyle = {
    backgroundColor: 'cyan',
    color: 'white',
  };

  const gridColStyle = {
    backgroundColor: 'teal',
    color: 'white',
  };

  return (
    <Layout title={'Grid'}>
      <Grid my={'md'} style={gridStyle}>
        <Grid.Col style={{ textAlign: 'center' }} span={4}>
          www1
        </Grid.Col>
        <Grid.Col style={{ backgroundColor: 'teal', textAlign: 'center' }} span={4}>
          www2
        </Grid.Col>
        <Grid.Col style={{ backgroundColor: 'pink', textAlign: 'center' }} span={4}>
          www3
        </Grid.Col>
      </Grid>
      <Grid my={'md'}>
        <Grid.Col style={{ backgroundColor: 'cyan', textAlign: 'center' }} span={6}>
          www4
        </Grid.Col>
        <Grid.Col style={{ backgroundColor: 'green', textAlign: 'center' }} span={6}>
          www5
        </Grid.Col>
        <Grid.Col style={{ backgroundColor: 'pink', textAlign: 'center' }} span={6}>
          www6
        </Grid.Col>
      </Grid>
      <Grid my={'md'}>
        <Grid.Col style={{ backgroundColor: 'cyan', textAlign: 'center' }} span={6}>
          4
        </Grid.Col>
        <Grid.Col style={{ backgroundColor: 'green', textAlign: 'center' }} span={6}>
          5
        </Grid.Col>
        <Grid.Col style={{ backgroundColor: 'pink', textAlign: 'center' }} span={3}>
          6
        </Grid.Col>
        <Grid.Col style={{ backgroundColor: 'red', textAlign: 'center' }} span={3}>
          7
        </Grid.Col>
      </Grid>
      <Grid my={'md'} grow>
        <Grid.Col style={{ backgroundColor: 'cyan', textAlign: 'center' }} span={6}>
          grow4
        </Grid.Col>
        <Grid.Col style={{ backgroundColor: 'green', textAlign: 'center' }} span={6}>
          grow5
        </Grid.Col>
        <Grid.Col style={{ backgroundColor: 'pink', textAlign: 'center' }} span={3}>
          grow6
        </Grid.Col>
        <Grid.Col style={{ backgroundColor: 'red', textAlign: 'center' }} span={3}>
          grow7
        </Grid.Col>
      </Grid>
      <Grid my={'md'}>
        <Grid.Col style={{ color: 'gray', backgroundColor: 'cyan', textAlign: 'center' }} span={3}>
          4
        </Grid.Col>
        <Grid.Col style={{ color: 'gray', backgroundColor: 'green', textAlign: 'center' }} span={3}>
          5
        </Grid.Col>
        <Grid.Col
          offset={3}
          style={{ color: 'gray', backgroundColor: 'pink', textAlign: 'center' }}
          span={3}
        >
          offset6
        </Grid.Col>
      </Grid>
      <Grid my={'md'} justify={'flex-start'}>
        <Grid.Col
          style={{ height: '50px', color: 'gray', backgroundColor: 'cyan', textAlign: 'center' }}
          span={3}
        >
          4
        </Grid.Col>
        <Grid.Col
          style={{ height: '100px', color: 'gray', backgroundColor: 'green', textAlign: 'center' }}
          span={3}
        >
          5
        </Grid.Col>
        <Grid.Col
          style={{ height: '150px', color: 'gray', backgroundColor: 'pink', textAlign: 'center' }}
          span={3}
        >
          offset6
        </Grid.Col>
      </Grid>
      <Grid my={'md'} justify={'center'}>
        <Grid.Col
          style={{ height: '50px', color: 'gray', backgroundColor: 'cyan', textAlign: 'center' }}
          span={3}
        >
          4
        </Grid.Col>
        <Grid.Col
          style={{ height: '100px', color: 'gray', backgroundColor: 'green', textAlign: 'center' }}
          span={3}
        >
          5
        </Grid.Col>
        <Grid.Col
          style={{ height: '150px', color: 'gray', backgroundColor: 'pink', textAlign: 'center' }}
          span={3}
        >
          offset6
        </Grid.Col>
      </Grid>
      <Grid my={'md'} justify={'flex-end'}>
        <Grid.Col
          style={{ height: '50px', color: 'gray', backgroundColor: 'cyan', textAlign: 'center' }}
          span={3}
        >
          4
        </Grid.Col>
        <Grid.Col
          style={{ height: '100px', color: 'gray', backgroundColor: 'green', textAlign: 'center' }}
          span={3}
        >
          5
        </Grid.Col>
        <Grid.Col
          style={{ height: '150px', color: 'gray', backgroundColor: 'pink', textAlign: 'center' }}
          span={3}
        >
          offset6
        </Grid.Col>
      </Grid>
      <Grid my={'md'} justify={'center'} align={'flex-start'}>
        <Grid.Col
          style={{ height: '50px', color: 'gray', backgroundColor: 'cyan', textAlign: 'center' }}
          span={3}
        >
          4
        </Grid.Col>
        <Grid.Col
          style={{ height: '100px', color: 'gray', backgroundColor: 'green', textAlign: 'center' }}
          span={3}
        >
          5
        </Grid.Col>
        <Grid.Col
          style={{ height: '150px', color: 'gray', backgroundColor: 'pink', textAlign: 'center' }}
          span={3}
        >
          offset6
        </Grid.Col>
      </Grid>
      <Grid my={'md'} justify={'center'} align={'center'}>
        <Grid.Col
          style={{ height: '50px', color: 'gray', backgroundColor: 'cyan', textAlign: 'center' }}
          span={3}
        >
          4
        </Grid.Col>
        <Grid.Col
          style={{ height: '100px', color: 'gray', backgroundColor: 'green', textAlign: 'center' }}
          span={3}
        >
          5
        </Grid.Col>
        <Grid.Col
          style={{ height: '150px', color: 'gray', backgroundColor: 'pink', textAlign: 'center' }}
          span={3}
        >
          offset6
        </Grid.Col>
      </Grid>
      <Grid my={'md'} justify={'center'} align={'flex-end'}>
        <Grid.Col
          style={{ height: '50px', color: 'gray', backgroundColor: 'cyan', textAlign: 'center' }}
          span={3}
        >
          4
        </Grid.Col>
        <Grid.Col
          style={{ height: '100px', color: 'gray', backgroundColor: 'green', textAlign: 'center' }}
          span={3}
        >
          5
        </Grid.Col>
        <Grid.Col
          style={{ height: '150px', color: 'gray', backgroundColor: 'pink', textAlign: 'center' }}
          span={3}
        >
          6
        </Grid.Col>
      </Grid>
      <Grid my={'md'}>
        <Grid.Col
          style={{ height: '100px', color: 'gray', backgroundColor: 'cyan', textAlign: 'center' }}
          md={6}
          lg={3}
        >
          4
        </Grid.Col>
        <Grid.Col
          style={{ height: '100px', color: 'gray', backgroundColor: 'green', textAlign: 'center' }}
          md={6}
          lg={3}
        >
          5
        </Grid.Col>
        <Grid.Col
          style={{ height: '100px', color: 'gray', backgroundColor: 'pink', textAlign: 'center' }}
          md={6}
          lg={3}
        >
          6
        </Grid.Col>
        <Grid.Col
          style={{ height: '100px', color: 'gray', backgroundColor: 'red', textAlign: 'center' }}
          md={6}
          lg={3}
        >
          7
        </Grid.Col>
      </Grid>
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

export default GridDemo;
