import React from 'react';
import {Route} from 'react-router-dom';

const JoinPage = () => {
    return (
        <div>
            <Route path="/join">
                <p>회원가입 페이지</p>
                <input/>
                <input/>
            </Route>
        </div>
    );
};

export default JoinPage;