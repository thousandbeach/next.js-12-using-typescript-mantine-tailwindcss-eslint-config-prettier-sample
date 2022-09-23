import { ExclamationCircleIcon } from '@heroicons/react/outline';
import { ShieldCheckIcon } from '@heroicons/react/solid';
import {
  Anchor,
  NumberInput,
  TextInput,
  Button,
  Group,
  PasswordInput,
  Alert,
  Stack,
} from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { useViewportSize } from '@mantine/hooks';
import { useState } from 'react';
import * as Yup from 'yup';
import { Form } from '../types';
import { supabase } from '../utils/supabase';
import { Layout } from './Layout';

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email.').required('No email provided.'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password should be min 8 chars.')
    .max(24, 'Password should be max 24 chars.')
    .matches(/[a-z]+/, 'One lowercase char missing.')
    .matches(/[A-Z]+/, 'One uppercase char missing.')
    .matches(/[@$!%*#?&]+/, 'One special char missing.'),
  age: Yup.number()
    .min(15, 'One over 15 for new account.')
    .max(24, 'One under 130 for new account.'),
});

export const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');
  const form = useForm<Form>({
    validate: yupResolver(schema),
    initialValues: {
      email: '',
      password: '',
      age: 15,
    },
  });

  const handleSubmit = async () => {
    if (isRegister) {
      // サインアップ用（新規作成時）
      const { error } = await supabase.auth.signUp({
        email: form.values.email,
        password: form.values.password,
      });

      if (error) {
        setError(error.message);
      }

      // form をリセットする
      form.reset();
    } else {
      // サインイン用（更新時）
      const { error } = await supabase.auth.signIn({
        email: form.values.email,
        password: form.values.password,
      });

      if (error) {
        setError(error.message);
      }

      // form をリセットする
      form.reset();
    }
  };

  const shieldCheckIconStyle = {
    height: 120,
    width: 120,
    color: 'blue',
  };

  const exclamationCircleIconStyle = {
    color: 'pink',
  };

  const { height, width } = useViewportSize();

  return (
    <Layout title='Auth'>
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
        <Stack align={'center'}>
          <ShieldCheckIcon style={shieldCheckIconStyle} />
          {error && (
            <Alert
              mt={'md'}
              icon={<ExclamationCircleIcon style={exclamationCircleIconStyle} />}
              title='Authorization Error'
              color={'red'}
              radius={'md'}
            >
              {error}
            </Alert>
          )}
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
              mt={'md'}
              id={'email'}
              label={'Email*'}
              placeholder={'example@gmail.com'}
              {...form.getInputProps('email')}
            />
            <TextInput
              mt={'md'}
              id={'password'}
              placeholder={'password'}
              label={'Password'}
              description={'Must include one upper + lower char & special char'}
              {...form.getInputProps('password')}
            />
            {isRegister && ( // サインアップのみ（新規作成時）
              <NumberInput
                mt={'md'}
                id={'age'}
                placeholder={'Your age'}
                label={'Age'}
                {...form.getInputProps('age')}
              />
            )}
            <Group mt={'lg'} position={'apart'} mb={120}>
              <Anchor
                component={'button'} // component に button を渡すことでクリック可能になる
                type={'button'}
                color={'gray'}
                onClick={() => {
                  setIsRegister(!isRegister);
                  setError('');
                }}
                size={'sm'}
              >
                {isRegister ? 'Have an account? Login' : "Don't have an account Register"}
              </Anchor>
              <Button variant='gradient' gradient={{ from: 'blue', to: 'cyan' }} type={'submit'}>
                {isRegister ? 'Register' : 'Login'}
              </Button>
            </Group>
          </form>
        </Stack>
      </Group>
    </Layout>
  );
};
