import '@/assets/style.less';
import PropTypes from 'prop-types';

function Button(props) {
  let { type, children, onClick } = props;

  return (
    <div className="ml-button" onClick={onClick}>
      <span className={`${type}`}>{children}</span>
    </div>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['default', 'primary', 'danger', 'info', 'success', 'warning']),
  children: PropTypes.node,
};

Button.defaultProps = {
  type: 'default',
  children: '按钮',
};

export default Button;
