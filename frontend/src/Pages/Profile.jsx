import { Paper, Stack } from '@mantine/core';
import React, {  useEffect, useState } from 'react'
import { Avatar } from '@mantine/core';
import { Flex } from '@mantine/core';
import Service from '../utils/http'
import { Center, Text } from '@mantine/core';
const obj = new Service();


export default function Profile() {


   const [user, setUser] = useState({})


   const getProfileData = async () => {
       try {
           let data = await obj.get("user/me")
           setUser(data)
           console.log(data);
       } catch (error) {
           console.log(error);
       }
   }
   useEffect(() => {


       getProfileData();
   }, [])


    return (
    <div>
      

<Center mt="md">
  <Paper shadow="md" radius="lg" p="xl" withBorder>
    <Center>
       <Avatar src={user?.avatar} size={150} radius="50%" />
    </Center>

    <Stack spacing="xs" align="center" mt="md">
        <Text  size="lg">ID: {user?._id}</Text>
      <Text  size="lg">Name: {user?.name}</Text>
    <Text  size="lg">Email: {user?.email}</Text>
    <Text  size="lg">CreatedAt: {user?.createdAt}</Text>
    <Text  size="lg">Role: {user?.role}</Text>
    
    </Stack>
  </Paper>
</Center>
    </div>
  );
}