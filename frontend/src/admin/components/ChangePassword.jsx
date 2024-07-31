import React, { useState } from 'react';
import { Modal, Button, TextInput } from '@mantine/core';
import { IconId } from '@tabler/icons-react';
import { updateCredential } from '../../api/credentials';

export function ChangePassword({ opened, close }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleChangeCredentials = async () => {
    setLoading(true);
    setError(null);

    try {
      await updateCredential(username, password);
      close();
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal
        size={'lg'}
        opened={opened}
        onClose={close}
        title={
          <h1
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#008AF7',
            }}
          >
            Change Password
          </h1>
        }
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        centered
      >
        <TextInput
          rightSectionPointerEvents="none"
          rightSection={<IconId />}
          label={<p style={{}}>Username</p>}
          placeholder="Spongebob"
          style={{ borderRadius: '5px', padding: '10px' }}
          size="md"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextInput
          rightSectionPointerEvents="none"
          rightSection={<IconId />}
          label={<p style={{}}>Password</p>}
          placeholder="123456"
          style={{ borderRadius: '5px', padding: '10px' }}
          size="md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password" // Ensure the input type is password
        />

        {error && (
          <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>
            {error}
          </p>
        )}

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
          <Button
            variant="light"
            style={{
              marginRight: '10px',
              color: '#008AF7',
              borderColor: '#008AF7',
              backgroundColor: 'white',
            }}
            onClick={close}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            variant="solid"
            onClick={handleChangeCredentials}
            style={{ backgroundColor: '#008AF7' }}
            loading={loading}
          >
            Save
          </Button>
        </div>
      </Modal>
    </>
  );
}
