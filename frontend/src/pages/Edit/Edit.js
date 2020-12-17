import React, {useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';

import { Container, Spacing } from 'components/Layout';
import { H1, Error } from 'components/Text';
import { InputText, Button } from 'components/Form';
import Head from 'components/Head';

import { EDIT_USER } from 'graphql/user';

import { useStore } from 'store';

import * as Routes from 'routes';

const Root = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 60px;

  @media (min-width: ${(p) => p.theme.screen.md}) {
    justify-content: space-between;
    margin-top: 120px;
  }
`;

const Welcome = styled.div`
  display: none;
  flex-direction: column;
  color: ${(p) => p.theme.colors.white};
  max-width: ${(p) => p.theme.screen.xs};

  @media (min-width: ${(p) => p.theme.screen.md}) {
    display: flex;
  }
`;

const Heading = styled(H1)`
  margin-bottom: ${(p) => p.theme.spacing.sm};
`;

const Form = styled.div`
  padding: ${(p) => p.theme.spacing.md};
  border-radius: ${(p) => p.theme.radius.sm};
  background-color: rgba(242, 242, 247);
  width: 100%;

  @media (min-width: ${(p) => p.theme.screen.sm}) {
    width: 450px;
  }
`;

/**
 * Edit profile
 */
const Edit = ({ history, refetch }) => {
    const [error, setError] = useState('');
    const [values, setValues] = useState({
        fullName: '',
        username: '',
        email: '',
        password: '',
        address: '',
        bio: '',
        game: '',
        gamertag: '',
        rank: '',
        role: '',
        twitch: '',
        youtube: '',
        facebook: '',
        instagram: '',
        twitter: '',
    });
    const [edit, { loading }] = useMutation(EDIT_USER);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const validate = () => {
        if (fullName.length > 50) {
            return 'Full name no more than 50 characters';
        }

        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(String(email).toLowerCase())) {
            return 'Enter a valid email address.';
        }

        const usernameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
        if (!usernameRegex.test(username)) {
            return 'Usernames can only use letters, numbers, underscores and periods';
        } else if (username.length > 20) {
            return 'Username no more than 20 charcters';
        }

        if (password.length < 6) {
            return 'Password min 6 characters';
        }

        return false;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const error = validate();
        if (error) {
            setError(error);
            return false;
        }

        try {
            const response = await edit({
                variables { input: { fullName, email, password, username, address, bio, game, gamertag, rank, role, twitch, youtube, facebook, instagram, twitter } },
            });
            localStorage.setItem('token', response.data.edit.token);
            await refetch();
            history.push(Routes.PROFILE);
        }   catch (error) {
            setError(error.graphQLErrors[0].message);
        }
    };

    const { fullName, email, password, username, address, bio, game, gamertag, rank, role, twitch, youtube, facebook, instagram, twitter } = values;
    return (
        <Root maxWidth="lg">
            <Head />
            <Form>
                <Spacing bottom="md">
                    <H1>Edit Profile</H1>
                </Spacing>

                <form onSubmit={(e) => handleSubmit(e, edit)}>
                    <InputText 
                        type="text"
                        name="fullName"
                        values={fullName}
                        onChange={handleChange}
                        placeholder="Full name"
                        borderColor="white"
                    />
                    <Spacing top="xs" bottom="xs">
                        <InputText 
                            type="text"
                            name="email"
                            values={email}
                            onChange={handleChange}
                            placeholder="Email"
                            borderColor="white"
                        />
                    </Spacing>
                    <InputText 
                        type="text"
                        name="username"
                        values={username}
                        onChange={handleChange}
                        placeholder="Username"
                        borderColor="white"
                    />
                    <Spacing top="xs" bottom="xs">
                        <InputText 
                            type="text"
                            name="password"
                            values={password}
                            onChange={handleChange}
                            placeholder="Password"
                            borderColor="white"
                        />
                    </Spacing>
                    <InputText 
                        type="text"
                        name="address"
                        values={address}
                        onChange={handleChange}
                        placeholder="Address"
                        borderColor="white"
                    />
                    <Spacing top="xs" bottom="xs">
                        <InputText 
                            type="text"
                            name="bio"
                            values={bio}
                            onChange={handleChange}
                            placeholder="Bio"
                            borderColor="white"
                        />
                    </Spacing>
                    <InputText 
                        type="text"
                        name="game"
                        values={game}
                        onChange={handleChange}
                        placeholder="Game"
                        borderColor="white"
                    />
                    <Spacing top="xs" bottom="xs">
                        <InputText 
                            type="text"
                            name="gamertag"
                            values={gamertag}
                            onChange={handleChange}
                            placeholder="Gamertag"
                            borderColor="white"
                        />
                    </Spacing>
                    <InputText 
                        type="text"
                        name="role"
                        values={role}
                        onChange={handleChange}
                        placeholder="Role"
                        borderColor="white"
                    />
                    <Spacing top="xs" bottom="xs">
                        <InputText 
                            type="text"
                            name="rank"
                            values={rank}
                            onChange={handleChange}
                            placeholder="Rank"
                            borderColor="white"
                        />
                    </Spacing>
                    <InputText 
                        type="text"
                        name="twitch"
                        values={twitch}
                        onChange={handleChange}
                        placeholder="Link Twitch account"
                        borderColor="white"
                    />
                    <Spacing top="xs" bottom="xs">
                        <InputText 
                            type="text"
                            name="youtube"
                            values={youtube}
                            onChange={handleChange}
                            placeholder="Link YouTube account"
                            borderColor="white"
                        />
                    </Spacing>
                    <InputText 
                        type="text"
                        name="facebook"
                        values={facebook}
                        onChange={handleChange}
                        placeholder="Link Facebook account"
                        borderColor="white"
                    />
                    <Spacing top="xs" bottom="xs">
                        <InputText 
                            type="text"
                            name="instagram"
                            values={instagram}
                            onChange={handleChange}
                            placeholder="Link Instagram account"
                            borderColor="white"
                        />
                    </Spacing>
                    <InputText 
                        type="text"
                        name="twitter"
                        values={twitter}
                        onChange={handleChange}
                        placeholder="Link Twitter account"
                        borderColor="white"
                    />
                    {error && (
                        <Spacing bottom="sm" top="sm">
                            <Error>{error}</Error>
                        </Spacing>
                    )}
                    <Spacing top="sm" />
                    <Button size="large" disabled={loading}>
                        Save
                    </Button>
                </form>
            </Form>
        </Root>
    );
};

Edit.propTypes = {
    history: PropTypes.object.isRequired,
    refetch: PropTypes.func.isRequired,
};

export default Edit;