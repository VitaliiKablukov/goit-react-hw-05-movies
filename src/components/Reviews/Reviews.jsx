import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchReviews } from 'components/FetchFunction/FetchReviews';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetch = async movieId => {
      setLoading(true);
      try {
        const response = await FetchReviews(movieId);
        if (response) {
          setReviews(() => response);
        }
      } catch (error) {
        setError('Ops');
      } finally {
        setLoading(false);
      }
    };

    fetch(movieId);

    return () => {};
  }, [movieId]);

  useEffect(() => {
    if (!error) {
      return;
    }
    alert(error);
  }, [error]);

  return (
    <section>
      <ul>
        {reviews.length > 0 ? (
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
export default Reviews;
