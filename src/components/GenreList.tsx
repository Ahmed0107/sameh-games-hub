import useGenres, { Genre } from "../hooks/useGenres";
import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import getCroppedImgUrl from "../services/image-url";

interface Props {
  onSelectedGenre: (genra: Genre | null) => void
}

const GenreList = ({onSelectedGenre} : Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((g) => (
        <ListItem key={g.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImgUrl(g.image_background)}
            />
            <Button onClick={() => onSelectedGenre(g)
            } fontSize="lg" variant='link'>{g.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
