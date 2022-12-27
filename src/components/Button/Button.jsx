import PropTypes from 'prop-types';
import '../Button/Button.css';

const Button = props => {
  let pageNumber = props.page;
  const handleClick = event => {
    // console.log(event);
    pageNumber += 1;
    props.onClick(pageNumber);
  };

  return (
    <button type="button" className="loadMore" onClick={handleClick}>
      Load More
    </button>
  );
};

export default Button;

Button.propTypes = {
    page: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
  }