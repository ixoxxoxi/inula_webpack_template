import '@/assets/style.less';
import PropTypes from 'prop-types';
import Button from './Button';

function Modal(props) {
  let { title, closable, children, type, open, width } = props;
  let { onClose, onSubmit, onDel, footer } = props;

  let handleSubmit = () => {
    new Promise((resolve, reject) => {
      resolve(onSubmit());
    })
      .then(() => {
        onClose();
      })
      .catch(err => {
        console.log('err:', err);
      });
  };
  let handleDel = () => {
    new Promise((resolve, reject) => {
      resolve(onDel());
    })
      .then(() => {
        onClose();
      })
      .catch(err => {
        console.log('err:', err);
      });
  };

  let renderFooter = () => {
    let btns = [];
    switch (type) {
      case 'confirm':
        btns = [
          <Button type="primary" key={1} onClick={handleSubmit}>
            确定
          </Button>,
          <Button key={2} onClick={onClose}>
            取消
          </Button>,
        ];
        break;
      case 'danger':
        btns = [
          <Button type="danger" key={1} onClick={handleDel}>
            删除
          </Button>,
          <Button key={2} onClick={onClose}>
            取消
          </Button>,
        ];
        break;
      case 'info':
        btns = [
          <Button type="info" key={1} onClick={onClose}>
            我知道了
          </Button>,
        ];
        break;
    }
    return btns;
  };

  let closeModal = e => {
    // console.log(e.target);
    // console.log(e.currentTarget);
    // console.log(e.target.dataset.self);
    if (e.target.dataset.self) {
      onClose();
    }
  };

  return open ? (
    <div className="ml-layer" onClick={closeModal} data-self="layer">
      <div className="ml-modal" style={{ width: `${width}px`, marginLeft: `-${width / 2}px` }}>
        <header>
          <div>
            <div>{title}</div>
            <div onClick={onClose}>{closable && '×'}</div>
          </div>
        </header>
        <main>{children}</main>
        <footer>{footer ? footer() : renderFooter()}</footer>
      </div>
    </div>
  ) : (
    ''
  );
}

Modal.propTypes = {
  title: PropTypes.elementType,
  closable: PropTypes.bool,
  children: PropTypes.node,
  type: PropTypes.oneOf(['confirm', 'danger', 'info']),
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  onDel: PropTypes.func,
  footer: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Modal.defaultProps = {
  title: '默认标题',
  closable: true,
  children: <div>主体默认内容</div>,
  type: 'info',
  open: false,
  onClose: () => {},
  onSubmit: () => {},
  onDel: () => {},
  width: 520,
};

export default Modal;
