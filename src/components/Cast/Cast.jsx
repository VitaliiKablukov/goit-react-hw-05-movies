import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchCast } from 'components/FetchFunction/FetchCast';
export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetch = async movieId => {
      const response = await FetchCast(movieId);
      if (response) {
        setCast(() => response);
      }
    };
    fetch(movieId);
    return () => {};
  }, [movieId]);

  return (
    <section>
      <ul>
        {cast.map(({ profile_path, id, name, character }) => {
          return (
            <li key={id}>
              <img src={profile_path} alt={name} width={40} height={40} />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
