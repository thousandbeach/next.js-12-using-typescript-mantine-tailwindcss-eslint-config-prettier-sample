import { LogoutIcon } from '@heroicons/react/outline';
import { ShieldCheckIcon } from '@heroicons/react/solid';
import { ActionIcon, Center, Menu } from '@mantine/core';
import { supabase } from '../utils/supabase';
import { Layout } from './Layout';

export const DashBoard = () => {
  const shieldCheckIconStyle = {
    color: 'gray',
    marginBottom: 14,
    height: 14,
    weight: 14,
  };

  const signOut = () => {
    supabase.auth.signOut();
  };

  return (
    <Layout title='DashBoard'>
      <Center>
        <ShieldCheckIcon style={shieldCheckIconStyle} />
      </Center>
      <Center>
        <ActionIcon style={shieldCheckIconStyle} my={'md'} size={'lg'} onClick={signOut}>
          <LogoutIcon />
        </ActionIcon>
      </Center>
    </Layout>
  );
};
