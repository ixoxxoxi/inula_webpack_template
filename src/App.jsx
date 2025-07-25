import { useState, useEffect } from 'react';
import Button from './components/Button';
import Modal from './components/Modal';
import { fetchUserInfo, fetchRankData, editRankData } from '@/api/user';
import { useCommonStore } from './store';
import '@/assets/style.less';
import './mock';

function App() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const commonStore = useCommonStore();

  let submit = () => {
    console.log('submit...');
  };
  let del = () => {
    console.log('del...');
  };

  useEffect(() => {
    fetchRankData(1)
      .then(res => console.log(res))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <div>
        <Button type="info" onClick={() => setOpen(true)}>
          open modal--info
        </Button>
        <Modal title={'标题_1'} closable open={open} onClose={() => setOpen(false)}>
          <>
            <div>This is a notification message</div>
          </>
        </Modal>
      </div>
      <br />
      <div>
        <Button type="primary" onClick={() => setOpen2(true)}>
          open modal--confirm
        </Button>
        <Modal title={'标题_2'} type="confirm" closable open={open2} onClose={() => setOpen2(false)} onSubmit={submit}>
          <>
            <input type="text" />
            <div>你确定要添加此用户吗？</div>
          </>
        </Modal>
      </div>
      <br />
      <div>
        <Button type="danger" onClick={() => setOpen3(true)}>
          open modal--danger
        </Button>
        <Modal title={'标题_3'} type="danger" closable open={open3} onClose={() => setOpen3(false)} onDel={del}>
          <>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>姓名</th>
                  <th>年龄</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>张三</td>
                  <td>18</td>
                </tr>
              </tbody>
            </table>
          </>
        </Modal>
      </div>
      <br />
      <div>
        <Button type="default" onClick={() => setOpen4(true)}>
          open modal--custom footer
        </Button>
        <Modal
          title={'标题_4'}
          type="confirm"
          closable
          open={open4}
          onClose={() => setOpen4(false)}
          onSubmit={submit}
          footer={() => {
            return [
              <Button type="danger" key={1} onClick={() => setOpen4(false)}>
                残忍离开
              </Button>,
              <Button
                type="primary"
                key={2}
                onClick={() => {
                  submit();
                  setOpen4(false);
                }}
              >
                确定
              </Button>,
            ];
          }}
        >
          <>本站推出会员服务，新用户开通立减100元！</>
        </Modal>
      </div>
      <br />
      <div>
        <Button type="success" onClick={() => setOpen5(true)}>
          open modal--custom width
        </Button>
        <Modal
          title={'标题_5'}
          type="confirm"
          width={300}
          closable
          open={open5}
          onClose={() => setOpen5(false)}
          onSubmit={submit}
        >
          <>This is a confirm message!</>
        </Modal>
      </div>
      <br />
      <Button type="primary" onClick={() => commonStore.add(1)}>
        +1
      </Button>
      <div>{commonStore.num}</div>
      <div>{commonStore.double}</div>
      <br />
    </>
  );
}

export default App;
