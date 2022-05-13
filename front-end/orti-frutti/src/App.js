/*Configuração da página de apresentação Index*/
import './App.css';

import{ PlusOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd';
import  Routes from './routes';
import { useHistory, } from 'react-router-dom'
const { Header, Footer, Sider, Content } = Layout;

function App() {
  let history = useHistory();

  function handleClick() {
    history.push("/adicionar");
  }

  return (
    <div className="main">
      <Layout className='main_content'>
        <Header className='header'>
          Horti Fruti 
        </Header>
        <Layout >
          <Sider className='menu'>
            <Menu className='menu_section'>
              <Menu.Item key={1} icon={<PlusOutlined/>} onClick={handleClick}>
                Adicionar Produto 
              </Menu.Item>
              <Menu.Item key={2} icon={<UnorderedListOutlined/>} onClick={() => history.push('/produtos')}> 
                Listar Produto 
              </Menu.Item>
            </Menu>
          </Sider>
          <Content>
            < Routes/>
          </Content>
        </Layout>
        <Footer className='footer'>Todos os direitos reservados.</Footer>
    </Layout>
    </div>
  );
}

export default App;
