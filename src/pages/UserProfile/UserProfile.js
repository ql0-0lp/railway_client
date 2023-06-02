import React from 'react';
import PageTitle from "../../PageTitle/PageTitle";
import EditProfile from "../../components/EditProfile/EditProfile";

const UserProfile = () => {
    return (
        <main>
            <PageTitle title={'Изменить даные профиля'} />
            <EditProfile/>
        </main>
    );
};

export default UserProfile;