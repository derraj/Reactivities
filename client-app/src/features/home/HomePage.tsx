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
                    <>
                        <Button as={Link} to='/activities' size='huge' inverted>
                            Go to Activities!
                        </Button>
                    </>

                ) : (
                        <>
                        <Header as='h5' inverted>Login with <br/>email: bob@test.com <br/>pass: Pa$$w0rd</Header>
                        
                        <Button onClick={() => modalStore.openModal(<LoginForm />)} size='huge' inverted>
                                Login!
                        </Button>
                        <Button onClick={() => modalStore.openModal(<RegisterForm />)} size='huge' inverted>
                                Register!
                        </Button>
                        </>

                )}
                <Header as='h3'>
                    <Icon.Group 
                        href='https://github.com/derraj/Reactivities'
                        inverted
                    >
                        <Icon name='github' inverted size='large' link/>
                    </Icon.Group>
                </Header>
            
            </Container>
        </Segment>
    )
})