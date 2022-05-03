import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { Container, Header, Segment, Image, Button, Icon } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';
import LoginForm from '../users/LoginForm';
import RegisterForm from '../users/RegisterForm';

export default observer(function HomePage() {
    const { userStore, modalStore } = useStore();
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{ marginBottom: 12 }} />
                    Reactivities
                </Header>
                {userStore.isLoggedIn ? (
                    <div style={{ marginBottom: 12}}>
                        <Button as={Link} to='/activities' size='huge' inverted>
                            Go to Activities!
                        </Button>
                    </div>

                ) : (
                        <div style={{ marginBottom: 12}}>
                            <Button onClick={() => modalStore.openModal(<LoginForm />)} style={{ width: '150px'}} size='huge' inverted>
                                    Login!
                            </Button>
                            <div style={{ marginBottom: 12}}/>
                            <Button onClick={() => modalStore.openModal(<RegisterForm />)} style={{ width: '150px'}} size='huge' inverted>
                                    Register!
                            </Button>
                        </div>

                )}
                
                <Button.Group>
                    <Button color='facebook' href='https://github.com/derraj/Reactivities'>
                        <Icon name='github' /> GitHub
                    </Button>
                    <Button color='linkedin' href='https://www.linkedin.com/in/jarred-mahinay-986b28210/'>
                        <Icon name='linkedin' /> LinkedIn
                    </Button>
                    
                </Button.Group>
                


            
            </Container>
            
        </Segment>
    )
})