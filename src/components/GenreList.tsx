import React from "react";
import useGenres from "../hooks/useGenres";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImgUrl from "../services/image-url";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((g) => (
        <ListItem key={g.id} paddingY='5px'>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={ getCroppedImgUrl(g.image_background)} />
            <Text fontSize='lg'>{g.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
