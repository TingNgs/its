import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../Layout';
import TextInput from '../TextInput';

import PP from '../../utils/image/user_icon.svg';
import EDIT_ICON from '../../utils/image/pencil-edit-button.svg';

import MediaAPI from '../../utils/api/apifetcher/media';
import * as actions from '../../containers/Auth/actions';

import './style.scss';

const Setting = ({}) => {
    const dispatch = useDispatch();
    const { username, avatarUrl, lineId, isRevice } = useSelector(
        state => state.AuthReducer
    );
    const [newUsername, setUsername] = useState('');
    const [nameAlert, setNameAlert] = useState(null);

    const [newAvatarURl, setAvatarUrl] = useState(null);
    const [newAvatarFile, setAvatarFile] = useState(null);
    const [newLineId, setLineId] = useState('');
    const [newIsRevice, setIsRevice] = useState('');

    const [oldPassword, setOldPassowrd] = useState('');
    const [newPassword, setNewPassowrd] = useState('');
    const [confirmPassword, setConfirmPassowrd] = useState('');

    const [isEditUsername, setEditUsername] = useState(false);

    const handleUpdateSubmit = (
        { avatarUrl, username, password, lineId, isRevice },
        handleCancel
    ) => {
        const query = { avatarUrl, username, password, lineId, isRevice };
        actions.updateProfile(query, handleCancel)(dispatch);
    };

    const handleAvatarSubmit = async () => {
        const res = await MediaAPI.uploadImage(newAvatarFile);
        if (res.data) {
            const defaultQuery = {
                avatarUrl,
                username,
                password: null,
                lineId,
                isRevice
            };
            handleUpdateSubmit({ ...defaultQuery, avatarUrl: res.data }, () => {
                setAvatarFile(null);
                setAvatarUrl(null);
            });
        }
        console.log(res);
    };

    const handleInput = e => {
        const { name } = e.target;
        const { value } = e.target;
        switch (name) {
            case 'username':
                setUsername(value);
                break;
            default:
                break;
        }
    };

    const renderSubmitButton = (query, handleCancel, handleSubmit) => {
        const defaultQuery = {
            avatarUrl,
            username,
            password: null,
            lineId,
            isRevice
        };
        return (
            <>
                <div onClick={handleCancel} className="main_btn btn-cancel">
                    Cancel
                </div>
                <div
                    onClick={() => {
                        handleSubmit(
                            { ...defaultQuery, ...query },
                            handleCancel
                        );
                    }}
                    className="main_btn btn-active"
                >
                    Submit
                </div>
            </>
        );
    };

    const renderNameSection = () => {
        if (isEditUsername) {
            return (
                <div>
                    Name:
                    <TextInput
                        type="text"
                        name="username"
                        onChange={handleInput}
                        value={newUsername}
                        placeholder={'Username'}
                        alertMessage={nameAlert}
                    />
                    {renderSubmitButton(
                        { username: newUsername },
                        () => {
                            setUsername('');
                            setEditUsername(false);
                        },
                        handleUpdateSubmit
                    )}
                </div>
            );
        }
        return (
            <div className="flex">
                Name : {username}
                <img
                    className="setting_editIcon"
                    src={EDIT_ICON}
                    onClick={() => {
                        setEditUsername(true);
                    }}
                />
            </div>
        );
    };

    const avatarOnChange = e => {
        const reader = new FileReader();
        reader.onload = function(event) {
            var url = event.target.result;
            setAvatarUrl(url);
        };
        setAvatarFile(e.target.files[0]);
        reader.readAsDataURL(e.target.files[0]);
    };

    const renderAvatarSection = () => {
        return (
            <>
                <img src={newAvatarURl || avatarUrl || PP} className="w-1/12" />
                <input type="file" onChange={avatarOnChange} />
                {newAvatarURl
                    ? renderSubmitButton(
                          {},
                          () => {
                              setAvatarFile(null);
                              setAvatarUrl(null);
                          },
                          handleAvatarSubmit
                      )
                    : ''}
            </>
        );
    };

    return (
        <Layout isLogined={true}>
            <div className="setting">
                {renderAvatarSection()}
                {renderNameSection()}
                <div>line Id : {lineId}</div>
                <div>Passowrd : **********</div>
                <div>Is revice line : {isRevice ? 'Yes' : 'No'}</div>
            </div>
        </Layout>
    );
};

export default Setting;
