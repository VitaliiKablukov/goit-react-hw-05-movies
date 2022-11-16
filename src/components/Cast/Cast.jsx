import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchCast } from 'components/FetchFunction/FetchCast';
const Cast = () => {
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
      {cast.length > 0 && (
        <ul>
          {cast.map(({ profile_path, id, name, character }) => {
            return (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                      : 'https://via.placeholder.com/200x300?text=No image'
                  }
                  alt={name}
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};
export default Cast;
