import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchReviews } from 'components/FetchFunction/FetchReviews';
export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetch = async movieId => {
      const response = await FetchReviews(movieId);
      if (response) {
        setReviews(() => response);
      }
    };
    fetch(movieId);
    return () => {};
  }, [movieId]);

  return (
    <section>
      <ul>
        {reviews.length ? (
          reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </ul>
    </section>
  );
};
