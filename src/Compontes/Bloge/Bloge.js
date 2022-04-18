import React from 'react';
import './bloge.css'

const Bloge = () => {
    return (
        <div className='blog-container'>
            <section className='bloge'>
                <h1>1.Difference between `authorization` and `authentication` </h1>
                <p>Authentication is the act of validating that users are whom they claim to be. This is the first step in any security process. </p>
                <p>Authorization in system security is the process of giving the user permission to access a specific resource or function. This term is often used interchangeably with access control or client privilege.</p>
            </section>
            <section className='bloge'>
                <h1>2.Why are you using `firebase`? What other options do you have to implement authentication?</h1>
                <p>Firebase Authentication makes it easier to get your users signed-in without having to understand the complexities behind implementing your own authentication system.</p>
            </section>
            <section className='bloge'>
                <h1>3. What other services does `firebase` provide other than authentication?</h1>
                <p>There are many services which Firebase provides, Most useful of them are:
                    Cloud Firestore.
                    Cloud Functions.
                    Authentication.
                    Hosting.
                    Cloud Storage.
                    Google Analytics.
                    Predictions.
                    Cloud Messaging.</p>
            </section>
        </div>
    );
};

export default Bloge;